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
  Message,
  Embed,
  Action,
  StreamGuildEventsRequest,
} from "../protocol/core/v1/core_pb";
import { Code } from "@improbable-eng/grpc-web/dist/typings/Code";
import { UnaryOutput } from "@improbable-eng/grpc-web/dist/typings/unary";
import { ProtobufMessage } from "@improbable-eng/grpc-web/dist/typings/message";
import { UnaryMethodDefinition } from "@improbable-eng/grpc-web/dist/typings/service";

export class Connection {
  host: string;

  constructor(host: string) {
    this.host = host;
  }

  unaryReq<T1 extends ProtobufMessage, T2 extends ProtobufMessage>(
    descriptor: UnaryMethodDefinition<T1, T2>,
    request: T1
  ) {
    return new Promise<UnaryOutput<T2>>((res, rej) => {
      grpc.unary<T1, T2, UnaryMethodDefinition<T1, T2>>(descriptor, {
        request,
        host: this.host,
        onEnd: (resp) => (resp.status === Code.OK ? res(resp) : rej(resp)),
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
    localMsg.setPassword(password);
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
    req.setPassword(password);
    return this.unaryReq(FoundationService.Register, req);
  }

  async federate(target: string) {
    const req = new FederateRequest();
    req.setTarget(target);
    return this.unaryReq(FoundationService.Federate, req);
  }

  async createGuild(guildName: string, pictureURL?: string) {
    const req = new CreateGuildRequest();
    req.setGuildName(guildName);
    if (pictureURL) {
      req.setPictureUrl(pictureURL);
    }
    return this.unaryReq(CoreService.CreateGuild, req);
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
    return this.unaryReq(CoreService.CreateInvite, req);
  }

  async createChannel(guildID: string, channelName: string) {
    const req = new CreateChannelRequest();
    req.setLocation(this.newLocation(guildID));
    req.setChannelName(channelName);
    return this.unaryReq(CoreService.CreateChannel, req);
  }

  async getGuild(guildID: string) {
    const req = new GetGuildRequest();
    req.setLocation(this.newLocation(guildID));
    return this.unaryReq(CoreService.GetGuild, req);
  }

  async getGuildInvites(guildID: string) {
    const req = new GetGuildInvitesRequest();
    req.setLocation(this.newLocation(guildID));
    return this.unaryReq(CoreService.GetGuildInvites, req);
  }

  async getGuildMembers(guildID: string) {
    const req = new GetGuildMembersRequest();
    req.setLocation(this.newLocation(guildID));
    return this.unaryReq(CoreService.GetGuildMembers, req);
  }

  async getGuildChannels(guildID: string) {
    const req = new GetGuildChannelsRequest();
    req.setLocation(this.newLocation(guildID));
    return this.unaryReq(CoreService.GetGuildChannels, req);
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
    return this.unaryReq(CoreService.GetChannelMessages, req);
  }

  async updateGuildName(guildID: string, newName: string) {
    const req = new UpdateGuildNameRequest();
    req.setLocation(this.newLocation(guildID));
    req.setNewGuildName(newName);
    return this.unaryReq(CoreService.UpdateGuildName, req);
  }

  async updateChannelName(guildID: string, channelID: string, newName: string) {
    const req = new UpdateChannelNameRequest();
    req.setLocation(this.newLocation(guildID, channelID));
    req.setNewChannelName(newName);
    return this.unaryReq(CoreService.UpdateChannelName, req);
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

    return this.unaryReq(CoreService.UpdateMessage, req);
  }
  async deleteGuild(guildID: string) {
    const req = new DeleteGuildRequest();
    req.setLocation(this.newLocation(guildID));
    return this.unaryReq(CoreService.DeleteGuild, req);
  }
  async deleteInvite(guildID: string, inviteID: string) {
    const req = new DeleteInviteRequest();
    req.setLocation(this.newLocation(guildID));
    req.setInviteId(inviteID);
    return this.unaryReq(CoreService.DeleteInvite, req);
  }
  async deleteChannel(guildID: string, channelID: string) {
    const req = new DeleteChannelRequest();
    req.setLocation(this.newLocation(guildID, channelID));
    return this.unaryReq(CoreService.DeleteChannel, req);
  }
  async deleteMessage(guildID: string, channelID: string, messageID: string) {
    const req = new DeleteMessageRequest();
    req.setLocation(this.newLocation(guildID, channelID, messageID));
    return this.unaryReq(CoreService.DeleteMessage, req);
  }
  async joinGuild(inviteID: string) {
    const req = new JoinGuildRequest();
    req.setInviteId(inviteID);
    return this.unaryReq(CoreService.JoinGuild, req);
  }

  async leaveGuild(guildID: string) {
    const req = new LeaveGuildRequest();
    req.setLocation(this.newLocation(guildID));
    return this.unaryReq(CoreService.LeaveGuild, req);
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
    return this.unaryReq(CoreService.TriggerAction, req);
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
    return this.unaryReq(CoreService.SendMessage, req);
  }

  async localGuilds(target: string) {
    const req = new FederateRequest();
    req.setTarget(target);
    return this.unaryReq(CoreService.LocalGuilds, req);
  }
}
