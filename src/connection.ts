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
  GetGuildRolesRequest,
  MoveRoleRequest,
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
}
