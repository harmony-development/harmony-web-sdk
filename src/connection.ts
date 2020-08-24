import { grpc } from "@improbable-eng/grpc-web";
import { FoundationService } from "../protocol/foundation/v1/foundation_pb_service";
import {
  KeyRequest,
  LoginRequest,
  RegisterRequest,
  FederateRequest,
} from "../protocol/foundation/v1/foundation_pb";
import { CoreService } from "../protocol/core/v1/core_pb_service";
import {
  CreateGuildRequest,
  CreateInviteRequest,
  Location,
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
  StreamHomeserverEventsRequest,
  GuildEvent,
  StreamGuildEventsRequest,
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
  [GuildEvent.EventCase.SENT_MESSAGE]: [string, GuildEvent.MessageSent];
  [GuildEvent.EventCase.LEFT_MEMBER]: [string, GuildEvent.MemberLeft];
  [GuildEvent.EventCase.JOINED_MEMBER]: [string, GuildEvent.MemberJoined];
  [GuildEvent.EventCase.EDITED_MESSAGE]: [string, GuildEvent.MessageUpdated];
  [GuildEvent.EventCase.EDITED_GUILD]: [string, GuildEvent.GuildUpdated];
  [GuildEvent.EventCase.EDITED_CHANNEL]: [string, GuildEvent.ChannelUpdated];
  [GuildEvent.EventCase.DELETED_MESSAGE]: [string, GuildEvent.MessageDeleted];
  [GuildEvent.EventCase.DELETED_GUILD]: [string, GuildEvent.GuildDeleted];
  [GuildEvent.EventCase.DELETED_CHANNEL]: [string, GuildEvent.ChannelDeleted];
  [GuildEvent.EventCase.CREATED_CHANNEL]: [string, GuildEvent.ChannelCreated];
  disconnect: [grpc.Code, string, grpc.Metadata];
};

export class Connection {
  host: string;
  session?: string;
  events: EventEmitter<ServerStreamResponses>;

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
  onGuildEvent(msg: GuildEvent) {
    if (msg.hasSentMessage()) {
      this.events.emit(
        GuildEvent.EventCase.SENT_MESSAGE,
        this.host,
        msg.getSentMessage()!
      );
    } else if (msg.hasLeftMember()) {
      this.events.emit(
        GuildEvent.EventCase.LEFT_MEMBER,
        this.host,
        msg.getLeftMember()!
      );
    } else if (msg.hasJoinedMember()) {
      this.events.emit(
        GuildEvent.EventCase.JOINED_MEMBER,
        this.host,
        msg.getJoinedMember()!
      );
    } else if (msg.hasEditedMessage()) {
      this.events.emit(
        GuildEvent.EventCase.EDITED_MESSAGE,
        this.host,
        msg.getEditedMessage()!
      );
    } else if (msg.hasEditedGuild()) {
      this.events.emit(
        GuildEvent.EventCase.EDITED_GUILD,
        this.host,
        msg.getEditedGuild()!
      );
    } else if (msg.hasEditedChannel()) {
      this.events.emit(
        GuildEvent.EventCase.EDITED_CHANNEL,
        this.host,
        msg.getEditedChannel()!
      );
    } else if (msg.hasDeletedMessage()) {
      this.events.emit(
        GuildEvent.EventCase.DELETED_MESSAGE,
        this.host,
        msg.getDeletedMessage()!
      );
    } else if (msg.hasDeletedGuild()) {
      this.events.emit(
        GuildEvent.EventCase.DELETED_GUILD,
        this.host,
        msg.getDeletedGuild()!
      );
    } else if (msg.hasDeletedChannel()) {
      this.events.emit(
        GuildEvent.EventCase.DELETED_CHANNEL,
        this.host,
        msg.getDeletedChannel()!
      );
    } else if (msg.hasCreatedChannel()) {
      this.events.emit(
        GuildEvent.EventCase.CREATED_CHANNEL,
        this.host,
        msg.getCreatedChannel()!
      );
    }
  }

  subscribe(guildID: string) {
    const req = new StreamGuildEventsRequest();
    req.setLocation(this.newLocation(guildID));
    const meta = new grpc.Metadata();
    if (this.session) {
      meta.set("auth", this.session);
    }
    grpc.invoke(CoreService.StreamGuildEvents, {
      host: this.host,
      request: new StreamHomeserverEventsRequest(),
      metadata: meta,
      onMessage: this.onGuildEvent,
      onEnd: (code: grpc.Code, message: string, trailers: grpc.Metadata) =>
        this.events.emit("disconnect", code, message, trailers),
    });
  }

  newLocation(guildID: string, channelID?: string, messageID?: string) {
    const loc = new Location();
    loc.setGuildId(guildID);
    if (channelID) {
      loc.setChannelId(channelID);
    }
    if (messageID) {
      loc.setMessageId(messageID);
    }
    return loc;
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
    req.setLocation(this.newLocation(guildID));
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
    req.setLocation(this.newLocation(guildID));
    req.setChannelName(channelName);
    return this.unaryReq(CoreService.CreateChannel, req, true);
  }

  async getGuild(guildID: string) {
    const req = new GetGuildRequest();
    req.setLocation(this.newLocation(guildID));
    return this.unaryReq(CoreService.GetGuild, req, true);
  }

  async getGuildInvites(guildID: string) {
    const req = new GetGuildInvitesRequest();
    req.setLocation(this.newLocation(guildID));
    return this.unaryReq(CoreService.GetGuildInvites, req, true);
  }

  async getGuildMembers(guildID: string) {
    const req = new GetGuildMembersRequest();
    req.setLocation(this.newLocation(guildID));
    return this.unaryReq(CoreService.GetGuildMembers, req, true);
  }

  async getGuildChannels(guildID: string) {
    const req = new GetGuildChannelsRequest();
    req.setLocation(this.newLocation(guildID));
    return this.unaryReq(CoreService.GetGuildChannels, req, true);
  }

  async getChannelMessages(
    guildID: string,
    channelID: string,
    beforeMessage?: string
  ) {
    const req = new GetChannelMessagesRequest();
    req.setLocation(this.newLocation(guildID, channelID));
    if (beforeMessage) {
      req.setBeforeMessage(beforeMessage);
    }
    return this.unaryReq(CoreService.GetChannelMessages, req, true);
  }

  async updateGuildName(guildID: string, newName: string) {
    const req = new UpdateGuildNameRequest();
    req.setLocation(this.newLocation(guildID));
    req.setNewGuildName(newName);
    return this.unaryReq(CoreService.UpdateGuildName, req, true);
  }

  async updateChannelName(guildID: string, channelID: string, newName: string) {
    const req = new UpdateChannelNameRequest();
    req.setLocation(this.newLocation(guildID, channelID));
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
    req.setLocation(this.newLocation(guildID, channelID, messageID));
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
    req.setLocation(this.newLocation(guildID, channelID, messageID));

    return this.unaryReq(CoreService.UpdateMessage, req, true);
  }
  async deleteGuild(guildID: string) {
    const req = new DeleteGuildRequest();
    req.setLocation(this.newLocation(guildID));
    return this.unaryReq(CoreService.DeleteGuild, req, true);
  }
  async deleteInvite(guildID: string, inviteID: string) {
    const req = new DeleteInviteRequest();
    req.setLocation(this.newLocation(guildID));
    req.setInviteId(inviteID);
    return this.unaryReq(CoreService.DeleteInvite, req, true);
  }
  async deleteChannel(guildID: string, channelID: string) {
    const req = new DeleteChannelRequest();
    req.setLocation(this.newLocation(guildID, channelID));
    return this.unaryReq(CoreService.DeleteChannel, req, true);
  }
  async deleteMessage(guildID: string, channelID: string, messageID: string) {
    const req = new DeleteMessageRequest();
    req.setLocation(this.newLocation(guildID, channelID, messageID));
    return this.unaryReq(CoreService.DeleteMessage, req, true);
  }
  async joinGuild(inviteID: string) {
    const req = new JoinGuildRequest();
    req.setInviteId(inviteID);
    return this.unaryReq(CoreService.JoinGuild, req, true);
  }

  async leaveGuild(guildID: string) {
    const req = new LeaveGuildRequest();
    req.setLocation(this.newLocation(guildID));
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
    req.setLocation(this.newLocation(guildID, channelID, messageID));
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
    const loc = new Location();
    loc.setGuildId(guildID);
    loc.setChannelId(channelID);
    const req = new SendMessageRequest();
    req.setLocation(loc);
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
