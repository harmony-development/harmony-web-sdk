import { grpc } from "@improbable-eng/grpc-web";
import { AuthService } from "../protocol/auth/v1/auth_pb_service";
import {
  KeyRequest,
  LoginRequest,
  RegisterRequest,
  FederateRequest,
} from "../protocol/auth/v1/auth_pb";
import {
  ChatService,
  ChatServiceStreamEvents,
} from "../protocol/chat/v1/chat_pb_service";
import { Event, StreamEventsRequest } from "../protocol/chat/v1/streaming_pb";
import {
  GetUserRequest,
  GetUserMetadataRequest,
  ProfileUpdateRequest,
} from "../protocol/chat/v1/profile_pb";
import {
  UserStatusMap,
  UserStatus,
  Action,
  Embed,
} from "../protocol/harmonytypes/v1/types_pb";
import { UnaryOutput } from "@improbable-eng/grpc-web/dist/typings/unary";
import { ProtobufMessage } from "@improbable-eng/grpc-web/dist/typings/message";
import { UnaryMethodDefinition } from "@improbable-eng/grpc-web/dist/typings/service";
import EventEmitter from "eventemitter3";
import {
  CreateChannelRequest,
  GetGuildChannelsRequest,
  UpdateChannelNameRequest,
  DeleteChannelRequest,
} from "../protocol/chat/v1/channels_pb";
import {
  CreateGuildRequest,
  CreateInviteRequest,
  GetGuildRequest,
  GetGuildInvitesRequest,
  GetGuildMembersRequest,
  UpdateGuildNameRequest,
  DeleteGuildRequest,
  DeleteInviteRequest,
  JoinGuildRequest,
  LeaveGuildRequest,
  GetGuildListRequest,
  AddGuildToGuildListRequest,
} from "../protocol/chat/v1/guilds_pb";
import {
  GetChannelMessagesRequest,
  UpdateMessageRequest,
  DeleteMessageRequest,
  TriggerActionRequest,
  SendMessageRequest,
} from "../protocol/chat/v1/messages_pb";
import {
  GetGuildRolesRequest,
  MoveRoleRequest,
  DeleteGuildRoleRequest,
  ModifyGuildRoleRequest,
  Role,
  ManageUserRolesRequest,
  GetUserRolesRequest,
} from "../protocol/chat/v1/permissions_pb";

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
  [Event.EventCase.PROFILE_UPDATED]: [string, Event.ProfileUpdated.AsObject];
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
      ChatServiceStreamEvents
    >(ChatService.StreamEvents, {
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
    }
  }

  async getKey() {
    const req = new KeyRequest();
    return this.unaryReq(AuthService.Key, req);
  }

  async loginLocal(email: string, password: string) {
    const req = new LoginRequest();
    const localMsg = new LoginRequest.Local();
    localMsg.setEmail(email);
    localMsg.setPassword(btoa(password));
    req.setLocal(localMsg);
    return this.unaryReq(AuthService.Login, req);
  }

  async loginFederated(token: string, domain: string) {
    const req = new LoginRequest();
    const federatedMsg = new LoginRequest.Federated();
    federatedMsg.setAuthToken(token);
    federatedMsg.setDomain(domain);
    req.setFederated(federatedMsg);
    return this.unaryReq(AuthService.Login, req);
  }

  async register(email: string, username: string, password: string) {
    const req = new RegisterRequest();
    req.setEmail(email);
    req.setUsername(username);
    req.setPassword(btoa(password));
    return this.unaryReq(AuthService.Register, req);
  }

  async federate(target: string) {
    const req = new FederateRequest();
    req.setTarget(target);
    return this.unaryReq(AuthService.Federate, req, true);
  }

  async createGuild(guildName: string, pictureURL?: string) {
    const req = new CreateGuildRequest();
    req.setGuildName(guildName);
    if (pictureURL) {
      req.setPictureUrl(pictureURL);
    }
    return this.unaryReq(ChatService.CreateGuild, req, true);
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
    return this.unaryReq(ChatService.CreateInvite, req, true);
  }

  async createChannel(guildID: string, channelName: string) {
    const req = new CreateChannelRequest();
    req.setGuildId(guildID);
    req.setChannelName(channelName);
    return this.unaryReq(ChatService.CreateChannel, req, true);
  }

  async getGuild(guildID: string) {
    const req = new GetGuildRequest();
    req.setGuildId(guildID);
    return this.unaryReq(ChatService.GetGuild, req, true);
  }

  async getGuildInvites(guildID: string) {
    const req = new GetGuildInvitesRequest();
    req.setGuildId(guildID);
    return this.unaryReq(ChatService.GetGuildInvites, req, true);
  }

  async getGuildMembers(guildID: string) {
    const req = new GetGuildMembersRequest();
    req.setGuildId(guildID);
    return this.unaryReq(ChatService.GetGuildMembers, req, true);
  }

  async getGuildChannels(guildID: string) {
    const req = new GetGuildChannelsRequest();
    req.setGuildId(guildID);
    return this.unaryReq(ChatService.GetGuildChannels, req, true);
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
    return this.unaryReq(ChatService.GetChannelMessages, req, true);
  }

  async updateGuildName(guildID: string, newName: string) {
    const req = new UpdateGuildNameRequest();
    req.setGuildId(guildID);
    req.setNewGuildName(newName);
    return this.unaryReq(ChatService.UpdateGuildName, req, true);
  }

  async updateChannelName(guildID: string, channelID: string, newName: string) {
    const req = new UpdateChannelNameRequest();
    req.setGuildId(guildID);
    req.setChannelId(channelID);
    req.setNewChannelName(newName);
    return this.unaryReq(ChatService.UpdateChannelName, req, true);
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

    return this.unaryReq(ChatService.UpdateMessage, req, true);
  }
  async deleteGuild(guildID: string) {
    const req = new DeleteGuildRequest();
    req.setGuildId(guildID);
    return this.unaryReq(ChatService.DeleteGuild, req, true);
  }
  async deleteInvite(guildID: string, inviteID: string) {
    const req = new DeleteInviteRequest();
    req.setGuildId(guildID);
    req.setInviteId(inviteID);
    return this.unaryReq(ChatService.DeleteInvite, req, true);
  }
  async deleteChannel(guildID: string, channelID: string) {
    const req = new DeleteChannelRequest();
    req.setGuildId(guildID);
    req.setChannelId(channelID);
    return this.unaryReq(ChatService.DeleteChannel, req, true);
  }
  async deleteMessage(guildID: string, channelID: string, messageID: string) {
    const req = new DeleteMessageRequest();
    req.setGuildId(guildID);
    req.setChannelId(channelID);
    req.setMessageId(messageID);
    return this.unaryReq(ChatService.DeleteMessage, req, true);
  }
  async joinGuild(inviteID: string) {
    const req = new JoinGuildRequest();
    req.setInviteId(inviteID);
    return this.unaryReq(ChatService.JoinGuild, req, true);
  }

  async leaveGuild(guildID: string) {
    const req = new LeaveGuildRequest();
    req.setGuildId(guildID);
    return this.unaryReq(ChatService.LeaveGuild, req, true);
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
    return this.unaryReq(ChatService.TriggerAction, req, true);
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
    return this.unaryReq(ChatService.SendMessage, req, true);
  }

  async uploadFile(
    f: File
  ): Promise<{
    id: string;
  }> {
    const data = new FormData();
    data.set("filename", f.name);
    data.set("contenttype", f.type);
    data.set("file", f);
    const headers = new Headers();
    headers.set("Authorization", this.session || "");
    const resp = await fetch(`${this.host}/_harmony/media/upload`, {
      body: data,
      method: "POST",
      headers,
    });
    const asJSON = await resp.json();
    return {
      id: asJSON.id,
    };
  }

  async getGuildList() {
    const req = new GetGuildListRequest();
    return this.unaryReq(ChatService.GetGuildList, req, true);
  }

  async getUser(userID: string) {
    const req = new GetUserRequest();
    req.setUserId(userID);
    return this.unaryReq(ChatService.GetUser, req, true);
  }

  async getUserMetadata(appID: string) {
    const req = new GetUserMetadataRequest();
    req.setAppId(appID);
  }

  async profileUpdate(profile: {
    newUsername?: string;
    newAvatar?: string;
    newStatus?: UserStatusMap[keyof UserStatusMap];
  }) {
    const req = new ProfileUpdateRequest();
    if (profile.newUsername !== undefined) {
      req.setNewUsername(profile.newUsername);
      req.setUpdateUsername(true);
    }
    if (profile.newAvatar !== undefined) {
      req.setNewAvatar(profile.newAvatar);
      req.setUpdateAvatar(true);
    }
    if (profile.newStatus !== undefined) {
      req.setNewStatus(profile.newStatus);
      req.setUpdateStatus(true);
    }
    return this.unaryReq(ChatService.ProfileUpdate, req, true);
  }

  async addGuildToGuildList(guildID: string, homeserver: string) {
    const req = new AddGuildToGuildListRequest();
    req.setGuildId(guildID);
    req.setHomeserver(homeserver);
    return this.unaryReq(ChatService.AddGuildToGuildList, req, true);
  }

  async getGuildRoles(guildID: string) {
    const req = new GetGuildRolesRequest();
    req.setGuildId(guildID);
    return this.unaryReq(ChatService.GetGuildRoles, req, true);
  }

  async moveRole(
    guildID: string,
    roleID: string,
    beforeID: string,
    afterID: string
  ) {
    const req = new MoveRoleRequest();
    req.setGuildId(guildID);
    req.setRoleId(roleID);
    req.setBeforeId(beforeID);
    req.setAfterId(afterID);
    return this.unaryReq(ChatService.MoveRole, req, true);
  }

  async deleteGuildRole(guildID: string, roleID: string) {
    const req = new DeleteGuildRoleRequest();
    req.setGuildId(guildID);
    req.setRoleId(roleID);
    return this.unaryReq(ChatService.DeleteGuildRole, req, true);
  }

  async modifyGuildRole(
    guildID: string,
    roleID: string,
    modify: {
      name?: string;
      color?: number;
      hoist?: boolean;
      pingable?: boolean;
    }
  ) {
    const req = new ModifyGuildRoleRequest();
    req.setGuildId(guildID);
    const modified = new Role();
    if (modify.name) {
      modified.setName(modify.name);
      req.setModifyName(true);
    }
    if (modify.color) {
      modified.setColor(modify.color);
      req.setModifyColor(true);
    }
    if (modify.hoist) {
      modified.setHoist(modify.hoist);
      req.setModifyHoist(true);
    }
    if (modify.pingable) {
      modified.setPingable(modify.pingable);
      req.setModifyPingable(true);
    }
  }

  async manageUserRoles(
    guildID: string,
    userID: string,
    giveRoleIDs?: string[],
    takeRoleIDs?: string[]
  ) {
    const req = new ManageUserRolesRequest();
    req.setGuildId(guildID);
    req.setUserId(userID);
    if (giveRoleIDs) {
      req.setGiveRoleIdsList(giveRoleIDs);
    }
    if (takeRoleIDs) {
      req.setTakeRoleIdsList(takeRoleIDs);
    }
    return this.unaryReq(ChatService.ManageUserRoles, req, true);
  }

  async getUserRoles(guildID: string, userID: string) {
    const req = new GetUserRolesRequest();
    req.setGuildId(guildID);
    req.setUserId(userID);
    return this.unaryReq(ChatService.GetUserRoles, req, true);
  }
}
