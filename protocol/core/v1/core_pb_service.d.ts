// package: protocol.core.v1
// file: core/v1/core.proto

import * as core_v1_core_pb from "../../core/v1/core_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CoreServiceCreateGuild = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.CreateGuildRequest;
  readonly responseType: typeof core_v1_core_pb.CreateGuildResponse;
};

type CoreServiceCreateInvite = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.CreateInviteRequest;
  readonly responseType: typeof core_v1_core_pb.CreateInviteResponse;
};

type CoreServiceCreateChannel = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.CreateChannelRequest;
  readonly responseType: typeof core_v1_core_pb.CreateChannelResponse;
};

type CoreServiceGetGuild = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.GetGuildRequest;
  readonly responseType: typeof core_v1_core_pb.GetGuildResponse;
};

type CoreServiceGetGuildInvites = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.GetGuildInvitesRequest;
  readonly responseType: typeof core_v1_core_pb.GetGuildInvitesResponse;
};

type CoreServiceGetGuildMembers = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.GetGuildMembersRequest;
  readonly responseType: typeof core_v1_core_pb.GetGuildMembersResponse;
};

type CoreServiceGetGuildChannels = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.GetGuildChannelsRequest;
  readonly responseType: typeof core_v1_core_pb.GetGuildChannelsResponse;
};

type CoreServiceGetChannelMessages = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.GetChannelMessagesRequest;
  readonly responseType: typeof core_v1_core_pb.GetChannelMessagesResponse;
};

type CoreServiceUpdateGuildName = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.UpdateGuildNameRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceUpdateChannelName = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.UpdateChannelNameRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceUpdateMessage = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.UpdateMessageRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceDeleteGuild = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.DeleteGuildRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceDeleteInvite = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.DeleteInviteRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceDeleteChannel = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.DeleteChannelRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceDeleteMessage = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.DeleteMessageRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceJoinGuild = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.JoinGuildRequest;
  readonly responseType: typeof core_v1_core_pb.JoinGuildResponse;
};

type CoreServiceLeaveGuild = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.LeaveGuildRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceTriggerAction = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.TriggerActionRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceSendMessage = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.SendMessageRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceLocalGuilds = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.JoinedLocalGuildsRequest;
  readonly responseType: typeof core_v1_core_pb.JoinedLocalGuildsResponse;
};

type CoreServiceStreamGuildEvents = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof core_v1_core_pb.StreamGuildEventsRequest;
  readonly responseType: typeof core_v1_core_pb.GuildEvent;
};

type CoreServiceStreamActionEvents = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof core_v1_core_pb.StreamActionEventsRequest;
  readonly responseType: typeof core_v1_core_pb.ActionEvent;
};

export class CoreService {
  static readonly serviceName: string;
  static readonly CreateGuild: CoreServiceCreateGuild;
  static readonly CreateInvite: CoreServiceCreateInvite;
  static readonly CreateChannel: CoreServiceCreateChannel;
  static readonly GetGuild: CoreServiceGetGuild;
  static readonly GetGuildInvites: CoreServiceGetGuildInvites;
  static readonly GetGuildMembers: CoreServiceGetGuildMembers;
  static readonly GetGuildChannels: CoreServiceGetGuildChannels;
  static readonly GetChannelMessages: CoreServiceGetChannelMessages;
  static readonly UpdateGuildName: CoreServiceUpdateGuildName;
  static readonly UpdateChannelName: CoreServiceUpdateChannelName;
  static readonly UpdateMessage: CoreServiceUpdateMessage;
  static readonly DeleteGuild: CoreServiceDeleteGuild;
  static readonly DeleteInvite: CoreServiceDeleteInvite;
  static readonly DeleteChannel: CoreServiceDeleteChannel;
  static readonly DeleteMessage: CoreServiceDeleteMessage;
  static readonly JoinGuild: CoreServiceJoinGuild;
  static readonly LeaveGuild: CoreServiceLeaveGuild;
  static readonly TriggerAction: CoreServiceTriggerAction;
  static readonly SendMessage: CoreServiceSendMessage;
  static readonly LocalGuilds: CoreServiceLocalGuilds;
  static readonly StreamGuildEvents: CoreServiceStreamGuildEvents;
  static readonly StreamActionEvents: CoreServiceStreamActionEvents;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CoreServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createGuild(
    requestMessage: core_v1_core_pb.CreateGuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.CreateGuildResponse|null) => void
  ): UnaryResponse;
  createGuild(
    requestMessage: core_v1_core_pb.CreateGuildRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.CreateGuildResponse|null) => void
  ): UnaryResponse;
  createInvite(
    requestMessage: core_v1_core_pb.CreateInviteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.CreateInviteResponse|null) => void
  ): UnaryResponse;
  createInvite(
    requestMessage: core_v1_core_pb.CreateInviteRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.CreateInviteResponse|null) => void
  ): UnaryResponse;
  createChannel(
    requestMessage: core_v1_core_pb.CreateChannelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.CreateChannelResponse|null) => void
  ): UnaryResponse;
  createChannel(
    requestMessage: core_v1_core_pb.CreateChannelRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.CreateChannelResponse|null) => void
  ): UnaryResponse;
  getGuild(
    requestMessage: core_v1_core_pb.GetGuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetGuildResponse|null) => void
  ): UnaryResponse;
  getGuild(
    requestMessage: core_v1_core_pb.GetGuildRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetGuildResponse|null) => void
  ): UnaryResponse;
  getGuildInvites(
    requestMessage: core_v1_core_pb.GetGuildInvitesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetGuildInvitesResponse|null) => void
  ): UnaryResponse;
  getGuildInvites(
    requestMessage: core_v1_core_pb.GetGuildInvitesRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetGuildInvitesResponse|null) => void
  ): UnaryResponse;
  getGuildMembers(
    requestMessage: core_v1_core_pb.GetGuildMembersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetGuildMembersResponse|null) => void
  ): UnaryResponse;
  getGuildMembers(
    requestMessage: core_v1_core_pb.GetGuildMembersRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetGuildMembersResponse|null) => void
  ): UnaryResponse;
  getGuildChannels(
    requestMessage: core_v1_core_pb.GetGuildChannelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetGuildChannelsResponse|null) => void
  ): UnaryResponse;
  getGuildChannels(
    requestMessage: core_v1_core_pb.GetGuildChannelsRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetGuildChannelsResponse|null) => void
  ): UnaryResponse;
  getChannelMessages(
    requestMessage: core_v1_core_pb.GetChannelMessagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetChannelMessagesResponse|null) => void
  ): UnaryResponse;
  getChannelMessages(
    requestMessage: core_v1_core_pb.GetChannelMessagesRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetChannelMessagesResponse|null) => void
  ): UnaryResponse;
  updateGuildName(
    requestMessage: core_v1_core_pb.UpdateGuildNameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateGuildName(
    requestMessage: core_v1_core_pb.UpdateGuildNameRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateChannelName(
    requestMessage: core_v1_core_pb.UpdateChannelNameRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateChannelName(
    requestMessage: core_v1_core_pb.UpdateChannelNameRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateMessage(
    requestMessage: core_v1_core_pb.UpdateMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateMessage(
    requestMessage: core_v1_core_pb.UpdateMessageRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteGuild(
    requestMessage: core_v1_core_pb.DeleteGuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteGuild(
    requestMessage: core_v1_core_pb.DeleteGuildRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteInvite(
    requestMessage: core_v1_core_pb.DeleteInviteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteInvite(
    requestMessage: core_v1_core_pb.DeleteInviteRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteChannel(
    requestMessage: core_v1_core_pb.DeleteChannelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteChannel(
    requestMessage: core_v1_core_pb.DeleteChannelRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteMessage(
    requestMessage: core_v1_core_pb.DeleteMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteMessage(
    requestMessage: core_v1_core_pb.DeleteMessageRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  joinGuild(
    requestMessage: core_v1_core_pb.JoinGuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.JoinGuildResponse|null) => void
  ): UnaryResponse;
  joinGuild(
    requestMessage: core_v1_core_pb.JoinGuildRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.JoinGuildResponse|null) => void
  ): UnaryResponse;
  leaveGuild(
    requestMessage: core_v1_core_pb.LeaveGuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  leaveGuild(
    requestMessage: core_v1_core_pb.LeaveGuildRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  triggerAction(
    requestMessage: core_v1_core_pb.TriggerActionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  triggerAction(
    requestMessage: core_v1_core_pb.TriggerActionRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  sendMessage(
    requestMessage: core_v1_core_pb.SendMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  sendMessage(
    requestMessage: core_v1_core_pb.SendMessageRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  localGuilds(
    requestMessage: core_v1_core_pb.JoinedLocalGuildsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.JoinedLocalGuildsResponse|null) => void
  ): UnaryResponse;
  localGuilds(
    requestMessage: core_v1_core_pb.JoinedLocalGuildsRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.JoinedLocalGuildsResponse|null) => void
  ): UnaryResponse;
  streamGuildEvents(requestMessage: core_v1_core_pb.StreamGuildEventsRequest, metadata?: grpc.Metadata): ResponseStream<core_v1_core_pb.GuildEvent>;
  streamActionEvents(requestMessage: core_v1_core_pb.StreamActionEventsRequest, metadata?: grpc.Metadata): ResponseStream<core_v1_core_pb.ActionEvent>;
}

