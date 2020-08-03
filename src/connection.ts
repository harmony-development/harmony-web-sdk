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

export class Connection {
  host: string;
  session?: string;

  constructor(host: string) {
    this.host = host;
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
    content?: string,
    attachments?: string[],
    embeds?: Embed[],
    actions?: Action[]
  ) {
    const req = new SendMessageRequest();
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
