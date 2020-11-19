import { grpc } from "@improbable-eng/grpc-web";
import { FoundationService } from "../protocol/foundation/v1/foundation_pb_service";
import {
  KeyRequest,
  LoginRequest,
  RegisterRequest,
  FederateRequest,
} from "../protocol/foundation/v1/foundation_pb";
import {
  CoreService,
  CoreServiceStreamEvents,
} from "../protocol/core/v1/core_pb_service";
import {
  CreateGuildRequest,
  CreateInviteRequest,
  CreateChannelRequest,
  GetGuildRequest,
  GetGuildInvitesRequest,
  GetGuildMembersRequest,
  GetGuildChannelsRequest,
  GetChannelMessagesRequest,
  UpdateGuildNameRequest,
  UpdateChannelNameRequest,
  UpdateMessageRequest,
  DeleteGuildRequest,
  DeleteInviteRequest,
  DeleteChannelRequest,
  DeleteMessageRequest,
  JoinGuildRequest,
  LeaveGuildRequest,
  TriggerActionRequest,
  SendMessageRequest,
  Embed,
  Action,
  GetGuildListRequest,
  AddGuildToGuildListRequest,
  StreamEventsRequest,
  Event,
} from "../protocol/core/v1/core_pb";
import {
  GetUserRequest,
  GetUserMetadataRequest,
  UsernameUpdateRequest,
  StatusUpdateRequest,
  UserStatusMap,
  UserStatus,
} from "../protocol/profile/v1/profile_pb";
import { ProfileService } from "../protocol/profile/v1/profile_pb_service";
import { UnaryOutput } from "@improbable-eng/grpc-web/dist/typings/unary";
import { ProtobufMessage } from "@improbable-eng/grpc-web/dist/typings/message";
import { UnaryMethodDefinition } from "@improbable-eng/grpc-web/dist/typings/service";
import EventEmitter from "eventemitter3";

type ServerStreamResponses = {
  [Event.EventCase.SENT_MESSAGE]: [string, Event.MessageSent.AsObject];
  [Event.EventCase.LEFT_MEMBER]: [string, Event.MemberLeft.AsObject];
  [Event.EventCase.JOINED_MEMBER]: [string, Event.MemberJoined.AsObject];
  [Event.EventCase.EDITED_MESSAGE]: [string, Event.MessageUpdated.AsObject];
  [Event.EventCase.EDITED_GUILD]: [string, Event.GuildUpdated.AsObject];
  [Event.EventCase.EDITED_CHANNEL]: [string, Event.ChannelUpdated.AsObject];
  [Event.EventCase.DELETED_MESSAGE]: [string, Event.MessageDeleted.AsObject];
  [Event.EventCase.DELETED_GUILD]: [string, Event.GuildDeleted.AsObject];
  [Event.EventCase.DELETED_CHANNEL]: [string, Event.ChannelDeleted.AsObject];
  [Event.EventCase.CREATED_CHANNEL]: [string, Event.ChannelCreated.AsObject];
  disconnect: [grpc.Code, string, grpc.Metadata];
};

export class Connection {
  host: string;
  session?: string;
  events: EventEmitter<ServerStreamResponses>;
  client?: grpc.Client<StreamEventsRequest, Event>;

  constructor(host: string) {
    this.host = host;
    this.events = new EventEmitter<ServerStreamResponses>();
  }

  unaryReq<T1 extends ProtobufMessage, T2 extends ProtobufMessage>(
    descriptor: UnaryMethodDefinition<T1, T2>,
    request: T1,
    auth?: boolean
  ) {
    const metadata = new grpc.Metadata();
    if (auth && this.session) {
      metadata.set("auth", this.session);
    }
    return new Promise<UnaryOutput<T2>>((res, rej) => {
      grpc.unary<T1, T2, UnaryMethodDefinition<T1, T2>>(descriptor, {
        request,
        host: this.host,
        metadata,
        onEnd: (resp) => (resp.status === grpc.Code.OK ? res(resp) : rej(resp)),
      });
    });
  }

  /**
   * This function is an ugly bastard
   * @param msg an event message
   */
  onGuildEvent(msg: Event) {
    if (msg.hasSentMessage()) {
      this.events.emit(
        Event.EventCase.SENT_MESSAGE,
        this.host,
        msg.getSentMessage()!.toObject()
      );
    } else if (msg.hasLeftMember()) {
      this.events.emit(
        Event.EventCase.LEFT_MEMBER,
        this.host,
        msg.getLeftMember()!.toObject()
      );
    } else if (msg.hasJoinedMember()) {
      this.events.emit(
        Event.EventCase.JOINED_MEMBER,
        this.host,
        msg.getJoinedMember()!.toObject()
      );
    } else if (msg.hasEditedMessage()) {
      this.events.emit(
        Event.EventCase.EDITED_MESSAGE,
        this.host,
        msg.getEditedMessage()!.toObject()
      );
    } else if (msg.hasEditedGuild()) {
      this.events.emit(
        Event.EventCase.EDITED_GUILD,
        this.host,
        msg.getEditedGuild()!.toObject()
      );
    } else if (msg.hasEditedChannel()) {
      this.events.emit(
        Event.EventCase.EDITED_CHANNEL,
        this.host,
        msg.getEditedChannel()!.toObject()
      );
    } else if (msg.hasDeletedMessage()) {
      this.events.emit(
        Event.EventCase.DELETED_MESSAGE,
        this.host,
        msg.getDeletedMessage()!.toObject()
      );
    } else if (msg.hasDeletedGuild()) {
      this.events.emit(
        Event.EventCase.DELETED_GUILD,
        this.host,
        msg.getDeletedGuild()!.toObject()
      );
    } else if (msg.hasDeletedChannel()) {
      this.events.emit(
        Event.EventCase.DELETED_CHANNEL,
        this.host,
        msg.getDeletedChannel()!.toObject()
      );
    } else if (msg.hasCreatedChannel()) {
      this.events.emit(
        Event.EventCase.CREATED_CHANNEL,
        this.host,
        msg.getCreatedChannel()!.toObject()
      );
    }
  }

  beginStream() {
    this.client = grpc.client<
      StreamEventsRequest,
      Event,
      CoreServiceStreamEvents
    >(CoreService.StreamEvents, {
      host: this.host,
      transport: grpc.WebsocketTransport(),
    });

    this.client.onEnd(
      (code: grpc.Code, message: string, trailers: grpc.Metadata) =>
        this.events.emit("disconnect", code, message, trailers)
    );
    this.client.onMessage(this.onGuildEvent.bind(this));

    const metadata = new grpc.Metadata();
    if (this.session) metadata.set("auth", this.session);
    this.client.start(metadata);
  }

  subscribe(guildID: string) {
    if (this.client) {
      const streamEventsReq = new StreamEventsRequest.SubscribeToGuild();
      streamEventsReq.setGuildId(guildID);
      const req = new StreamEventsRequest();
      req.setSubscribeToGuild(streamEventsReq);
      this.client.send(req);
      this.client.finishSend();
    }
  }

  async getKey() {
    const req = new KeyRequest();
    return this.unaryReq(FoundationService.Key, req);
  }

  async loginLocal(email: string, password: string) {
    const req = new LoginRequest();
    const localMsg = new LoginRequest.Local();
    localMsg.setEmail(email);
    localMsg.setPassword(btoa(password));
    req.setLocal(localMsg);
    return this.unaryReq(FoundationService.Login, req);
  }

  async loginFederated(token: string, domain: string) {
    const req = new LoginRequest();
    const federatedMsg = new LoginRequest.Federated();
    federatedMsg.setAuthToken(token);
    federatedMsg.setDomain(domain);
    req.setFederated(federatedMsg);
    return this.unaryReq(FoundationService.Login, req);
  }

  async register(email: string, username: string, password: string) {
    const req = new RegisterRequest();
    req.setEmail(email);
    req.setUsername(username);
    req.setPassword(btoa(password));
    return this.unaryReq(FoundationService.Register, req);
  }

  async federate(target: string) {
    const req = new FederateRequest();
    req.setTarget(target);
    return this.unaryReq(FoundationService.Federate, req, true);
  }

  async createGuild(guildName: string, pictureURL?: string) {
    const req = new CreateGuildRequest();
    req.setGuildName(guildName);
    if (pictureURL) {
      req.setPictureUrl(pictureURL);
    }
    return this.unaryReq(CoreService.CreateGuild, req, true);
  }

  async createInvite(guildID: string, name?: string, possibleUses?: number) {
    const req = new CreateInviteRequest();
    req.setGuildId(guildID);
    if (name) {
      req.setName(name);
    }
    if (possibleUses) {
      req.setPossibleUses(possibleUses);
    }
    return this.unaryReq(CoreService.CreateInvite, req, true);
  }

  async createChannel(guildID: string, channelName: string) {
    const req = new CreateChannelRequest();
    req.setGuildId(guildID);
    req.setChannelName(channelName);
    return this.unaryReq(CoreService.CreateChannel, req, true);
  }

  async getGuild(guildID: string) {
    const req = new GetGuildRequest();
    req.setGuildId(guildID);
    return this.unaryReq(CoreService.GetGuild, req, true);
  }

  async getGuildInvites(guildID: string) {
    const req = new GetGuildInvitesRequest();
    req.setGuildId(guildID);
    return this.unaryReq(CoreService.GetGuildInvites, req, true);
  }

  async getGuildMembers(guildID: string) {
    const req = new GetGuildMembersRequest();
    req.setGuildId(guildID);
    return this.unaryReq(CoreService.GetGuildMembers, req, true);
  }

  async getGuildChannels(guildID: string) {
    const req = new GetGuildChannelsRequest();
    req.setGuildId(guildID);
    return this.unaryReq(CoreService.GetGuildChannels, req, true);
  }

  async getChannelMessages(
    guildID: string,
    channelID: string,
    beforeMessage?: string
  ) {
    const req = new GetChannelMessagesRequest();
    req.setGuildId(guildID);
    req.setChannelId(channelID);
    if (beforeMessage) {
      req.setBeforeMessage(beforeMessage);
    }
    return this.unaryReq(CoreService.GetChannelMessages, req, true);
  }

  async updateGuildName(guildID: string, newName: string) {
    const req = new UpdateGuildNameRequest();
    req.setGuildId(guildID);
    req.setNewGuildName(newName);
    return this.unaryReq(CoreService.UpdateGuildName, req, true);
  }

  async updateChannelName(guildID: string, channelID: string, newName: string) {
    const req = new UpdateChannelNameRequest();
    req.setGuildId(guildID);
    req.setChannelId(channelID);
    req.setNewChannelName(newName);
    return this.unaryReq(CoreService.UpdateChannelName, req, true);
  }

  async updateMessage(
    guildID: string,
    channelID: string,
    messageID: string,
    newContent?: any,
    newAttachments?: any,
    newActions?: any,
    newEmbeds?: any
  ) {
    const req = new UpdateMessageRequest();
    req.setGuildId(guildID);
    req.setChannelId(channelID);
    if (newContent) {
      req.setUpdateContent(true);
      req.setContent(newContent);
    }
    if (newAttachments) {
      req.setUpdateAttachments(true);
      req.setAttachmentsList(newAttachments);
    }
    if (newActions) {
      req.setUpdateActions(true);
      req.setActionsList(newActions);
    }
    if (newEmbeds) {
      req.setUpdateEmbeds(true);
      req.setEmbedsList(newEmbeds);
    }
    req.setGuildId(guildID);
    req.setChannelId(channelID);
    req.setMessageId(messageID);

    return this.unaryReq(CoreService.UpdateMessage, req, true);
  }
  async deleteGuild(guildID: string) {
    const req = new DeleteGuildRequest();
    req.setGuildId(guildID);
    return this.unaryReq(CoreService.DeleteGuild, req, true);
  }
  async deleteInvite(guildID: string, inviteID: string) {
    const req = new DeleteInviteRequest();
    req.setGuildId(guildID);
    req.setInviteId(inviteID);
    return this.unaryReq(CoreService.DeleteInvite, req, true);
  }
  async deleteChannel(guildID: string, channelID: string) {
    const req = new DeleteChannelRequest();
    req.setGuildId(guildID);
    req.setChannelId(channelID);
    return this.unaryReq(CoreService.DeleteChannel, req, true);
  }
  async deleteMessage(guildID: string, channelID: string, messageID: string) {
    const req = new DeleteMessageRequest();
    req.setGuildId(guildID);
    req.setChannelId(channelID);
    req.setMessageId(messageID);
    return this.unaryReq(CoreService.DeleteMessage, req, true);
  }
  async joinGuild(inviteID: string) {
    const req = new JoinGuildRequest();
    req.setInviteId(inviteID);
    return this.unaryReq(CoreService.JoinGuild, req, true);
  }

  async leaveGuild(guildID: string) {
    const req = new LeaveGuildRequest();
    req.setGuildId(guildID);
    return this.unaryReq(CoreService.LeaveGuild, req, true);
  }

  async triggerAction(
    guildID: string,
    channelID: string,
    messageID: string,
    actionID: string,
    actionData?: string
  ) {
    const req = new TriggerActionRequest();
    req.setGuildId(guildID);
    req.setChannelId(channelID);
    req.setMessageId(messageID);
    req.setActionId(actionID);
    if (actionData) {
      req.setActionData(actionData);
    }
    return this.unaryReq(CoreService.TriggerAction, req, true);
  }

  async sendMessage(
    guildID: string,
    channelID: string,
    content?: string,
    attachments?: string[],
    embeds?: Embed[],
    actions?: Action[]
  ) {
    const req = new SendMessageRequest();
    req.setGuildId(guildID);
    req.setChannelId(channelID);
    if (content) {
      req.setContent(content);
    }
    if (embeds) {
      req.setEmbedsList(embeds);
    }
    if (actions) {
      req.setActionsList(actions);
    }
    if (attachments) {
      req.setAttachmentsList(attachments);
    }
    return this.unaryReq(CoreService.SendMessage, req, true);
  }

  async getGuildList() {
    const req = new GetGuildListRequest();
    return this.unaryReq(CoreService.GetGuildList, req, true);
  }

  async getUser(userID: string) {
    const req = new GetUserRequest();
    req.setUserId(userID);
    return this.unaryReq(ProfileService.GetUser, req, true);
  }

  async getUserMetadata(appID: string) {
    const req = new GetUserMetadataRequest();
    req.setAppId(appID);
  }

  async usernameUpdate(newUsername: string) {
    const req = new UsernameUpdateRequest();
    req.setUserName(newUsername);
    return this.unaryReq(ProfileService.UsernameUpdate, req, true);
  }

  async statusUpdate(newStatus: keyof UserStatusMap) {
    const req = new StatusUpdateRequest();
    req.setNewStatus(UserStatus[newStatus]);
  }

  async addGuildToGuildList(guildID: string, homeserver: string) {
    const req = new AddGuildToGuildListRequest();
    req.setGuildId(guildID);
    req.setHomeserver(homeserver);
    return this.unaryReq(CoreService.AddGuildToGuildList, req, true);
  }
}
