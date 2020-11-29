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

type CoreServiceCreateEmotePack = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.CreateEmotePackRequest;
  readonly responseType: typeof core_v1_core_pb.CreateEmotePackResponse;
};

type CoreServiceGetGuildList = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.GetGuildListRequest;
  readonly responseType: typeof core_v1_core_pb.GetGuildListResponse;
};

type CoreServiceAddGuildToGuildList = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.AddGuildToGuildListRequest;
  readonly responseType: typeof core_v1_core_pb.AddGuildToGuildListResponse;
};

type CoreServiceRemoveGuildFromGuildList = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.RemoveGuildFromGuildListRequest;
  readonly responseType: typeof core_v1_core_pb.RemoveGuildFromGuildListResponse;
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

type CoreServiceGetMessage = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.GetMessageRequest;
  readonly responseType: typeof core_v1_core_pb.GetMessageResponse;
};

type CoreServiceGetEmotePacks = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.GetEmotePacksRequest;
  readonly responseType: typeof core_v1_core_pb.GetEmotePacksResponse;
};

type CoreServiceGetEmotePackEmotes = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.GetEmotePackEmotesRequest;
  readonly responseType: typeof core_v1_core_pb.GetEmotePackEmotesResponse;
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

type CoreServiceUpdateChannelOrder = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.UpdateChannelOrderRequest;
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

type CoreServiceAddEmoteToPack = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.AddEmoteToPackRequest;
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

type CoreServiceDeleteEmoteFromPack = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.DeleteEmoteFromPackRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceDeleteEmotePack = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.DeleteEmotePackRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceDequipEmotePack = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.DequipEmotePackRequest;
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
  readonly responseType: typeof core_v1_core_pb.SendMessageResponse;
};

type CoreServiceQueryHasPermission = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.QueryPermissionsRequest;
  readonly responseType: typeof core_v1_core_pb.QueryPermissionsResponse;
};

type CoreServiceSetPermissions = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.SetPermissionsRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceGetPermissions = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.GetPermissionsRequest;
  readonly responseType: typeof core_v1_core_pb.GetPermissionsResponse;
};

type CoreServiceGetGuildRoles = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.GetGuildRolesRequest;
  readonly responseType: typeof core_v1_core_pb.GetGuildRolesResponse;
};

type CoreServiceAddGuildRole = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.AddGuildRoleRequest;
  readonly responseType: typeof core_v1_core_pb.AddGuildRoleResponse;
};

type CoreServiceDeleteGuildRole = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.DeleteGuildRoleRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceManageUserRoles = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.ManageUserRolesRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CoreServiceGetUserRoles = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof core_v1_core_pb.GetUserRolesRequest;
  readonly responseType: typeof core_v1_core_pb.GetUserRolesResponse;
};

type CoreServiceStreamEvents = {
  readonly methodName: string;
  readonly service: typeof CoreService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof core_v1_core_pb.StreamEventsRequest;
  readonly responseType: typeof core_v1_core_pb.Event;
};

export class CoreService {
  static readonly serviceName: string;
  static readonly CreateGuild: CoreServiceCreateGuild;
  static readonly CreateInvite: CoreServiceCreateInvite;
  static readonly CreateChannel: CoreServiceCreateChannel;
  static readonly CreateEmotePack: CoreServiceCreateEmotePack;
  static readonly GetGuildList: CoreServiceGetGuildList;
  static readonly AddGuildToGuildList: CoreServiceAddGuildToGuildList;
  static readonly RemoveGuildFromGuildList: CoreServiceRemoveGuildFromGuildList;
  static readonly GetGuild: CoreServiceGetGuild;
  static readonly GetGuildInvites: CoreServiceGetGuildInvites;
  static readonly GetGuildMembers: CoreServiceGetGuildMembers;
  static readonly GetGuildChannels: CoreServiceGetGuildChannels;
  static readonly GetChannelMessages: CoreServiceGetChannelMessages;
  static readonly GetMessage: CoreServiceGetMessage;
  static readonly GetEmotePacks: CoreServiceGetEmotePacks;
  static readonly GetEmotePackEmotes: CoreServiceGetEmotePackEmotes;
  static readonly UpdateGuildName: CoreServiceUpdateGuildName;
  static readonly UpdateChannelName: CoreServiceUpdateChannelName;
  static readonly UpdateChannelOrder: CoreServiceUpdateChannelOrder;
  static readonly UpdateMessage: CoreServiceUpdateMessage;
  static readonly AddEmoteToPack: CoreServiceAddEmoteToPack;
  static readonly DeleteGuild: CoreServiceDeleteGuild;
  static readonly DeleteInvite: CoreServiceDeleteInvite;
  static readonly DeleteChannel: CoreServiceDeleteChannel;
  static readonly DeleteMessage: CoreServiceDeleteMessage;
  static readonly DeleteEmoteFromPack: CoreServiceDeleteEmoteFromPack;
  static readonly DeleteEmotePack: CoreServiceDeleteEmotePack;
  static readonly DequipEmotePack: CoreServiceDequipEmotePack;
  static readonly JoinGuild: CoreServiceJoinGuild;
  static readonly LeaveGuild: CoreServiceLeaveGuild;
  static readonly TriggerAction: CoreServiceTriggerAction;
  static readonly SendMessage: CoreServiceSendMessage;
  static readonly QueryHasPermission: CoreServiceQueryHasPermission;
  static readonly SetPermissions: CoreServiceSetPermissions;
  static readonly GetPermissions: CoreServiceGetPermissions;
  static readonly GetGuildRoles: CoreServiceGetGuildRoles;
  static readonly AddGuildRole: CoreServiceAddGuildRole;
  static readonly DeleteGuildRole: CoreServiceDeleteGuildRole;
  static readonly ManageUserRoles: CoreServiceManageUserRoles;
  static readonly GetUserRoles: CoreServiceGetUserRoles;
  static readonly StreamEvents: CoreServiceStreamEvents;
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
  createEmotePack(
    requestMessage: core_v1_core_pb.CreateEmotePackRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.CreateEmotePackResponse|null) => void
  ): UnaryResponse;
  createEmotePack(
    requestMessage: core_v1_core_pb.CreateEmotePackRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.CreateEmotePackResponse|null) => void
  ): UnaryResponse;
  getGuildList(
    requestMessage: core_v1_core_pb.GetGuildListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetGuildListResponse|null) => void
  ): UnaryResponse;
  getGuildList(
    requestMessage: core_v1_core_pb.GetGuildListRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetGuildListResponse|null) => void
  ): UnaryResponse;
  addGuildToGuildList(
    requestMessage: core_v1_core_pb.AddGuildToGuildListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.AddGuildToGuildListResponse|null) => void
  ): UnaryResponse;
  addGuildToGuildList(
    requestMessage: core_v1_core_pb.AddGuildToGuildListRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.AddGuildToGuildListResponse|null) => void
  ): UnaryResponse;
  removeGuildFromGuildList(
    requestMessage: core_v1_core_pb.RemoveGuildFromGuildListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.RemoveGuildFromGuildListResponse|null) => void
  ): UnaryResponse;
  removeGuildFromGuildList(
    requestMessage: core_v1_core_pb.RemoveGuildFromGuildListRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.RemoveGuildFromGuildListResponse|null) => void
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
  getMessage(
    requestMessage: core_v1_core_pb.GetMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetMessageResponse|null) => void
  ): UnaryResponse;
  getMessage(
    requestMessage: core_v1_core_pb.GetMessageRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetMessageResponse|null) => void
  ): UnaryResponse;
  getEmotePacks(
    requestMessage: core_v1_core_pb.GetEmotePacksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetEmotePacksResponse|null) => void
  ): UnaryResponse;
  getEmotePacks(
    requestMessage: core_v1_core_pb.GetEmotePacksRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetEmotePacksResponse|null) => void
  ): UnaryResponse;
  getEmotePackEmotes(
    requestMessage: core_v1_core_pb.GetEmotePackEmotesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetEmotePackEmotesResponse|null) => void
  ): UnaryResponse;
  getEmotePackEmotes(
    requestMessage: core_v1_core_pb.GetEmotePackEmotesRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetEmotePackEmotesResponse|null) => void
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
  updateChannelOrder(
    requestMessage: core_v1_core_pb.UpdateChannelOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateChannelOrder(
    requestMessage: core_v1_core_pb.UpdateChannelOrderRequest,
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
  addEmoteToPack(
    requestMessage: core_v1_core_pb.AddEmoteToPackRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  addEmoteToPack(
    requestMessage: core_v1_core_pb.AddEmoteToPackRequest,
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
  deleteEmoteFromPack(
    requestMessage: core_v1_core_pb.DeleteEmoteFromPackRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteEmoteFromPack(
    requestMessage: core_v1_core_pb.DeleteEmoteFromPackRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteEmotePack(
    requestMessage: core_v1_core_pb.DeleteEmotePackRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteEmotePack(
    requestMessage: core_v1_core_pb.DeleteEmotePackRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  dequipEmotePack(
    requestMessage: core_v1_core_pb.DequipEmotePackRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  dequipEmotePack(
    requestMessage: core_v1_core_pb.DequipEmotePackRequest,
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
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.SendMessageResponse|null) => void
  ): UnaryResponse;
  sendMessage(
    requestMessage: core_v1_core_pb.SendMessageRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.SendMessageResponse|null) => void
  ): UnaryResponse;
  queryHasPermission(
    requestMessage: core_v1_core_pb.QueryPermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.QueryPermissionsResponse|null) => void
  ): UnaryResponse;
  queryHasPermission(
    requestMessage: core_v1_core_pb.QueryPermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.QueryPermissionsResponse|null) => void
  ): UnaryResponse;
  setPermissions(
    requestMessage: core_v1_core_pb.SetPermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  setPermissions(
    requestMessage: core_v1_core_pb.SetPermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getPermissions(
    requestMessage: core_v1_core_pb.GetPermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetPermissionsResponse|null) => void
  ): UnaryResponse;
  getPermissions(
    requestMessage: core_v1_core_pb.GetPermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetPermissionsResponse|null) => void
  ): UnaryResponse;
  getGuildRoles(
    requestMessage: core_v1_core_pb.GetGuildRolesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetGuildRolesResponse|null) => void
  ): UnaryResponse;
  getGuildRoles(
    requestMessage: core_v1_core_pb.GetGuildRolesRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetGuildRolesResponse|null) => void
  ): UnaryResponse;
  addGuildRole(
    requestMessage: core_v1_core_pb.AddGuildRoleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.AddGuildRoleResponse|null) => void
  ): UnaryResponse;
  addGuildRole(
    requestMessage: core_v1_core_pb.AddGuildRoleRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.AddGuildRoleResponse|null) => void
  ): UnaryResponse;
  deleteGuildRole(
    requestMessage: core_v1_core_pb.DeleteGuildRoleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteGuildRole(
    requestMessage: core_v1_core_pb.DeleteGuildRoleRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  manageUserRoles(
    requestMessage: core_v1_core_pb.ManageUserRolesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  manageUserRoles(
    requestMessage: core_v1_core_pb.ManageUserRolesRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getUserRoles(
    requestMessage: core_v1_core_pb.GetUserRolesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetUserRolesResponse|null) => void
  ): UnaryResponse;
  getUserRoles(
    requestMessage: core_v1_core_pb.GetUserRolesRequest,
    callback: (error: ServiceError|null, responseMessage: core_v1_core_pb.GetUserRolesResponse|null) => void
  ): UnaryResponse;
  streamEvents(metadata?: grpc.Metadata): BidirectionalStream<core_v1_core_pb.StreamEventsRequest, core_v1_core_pb.Event>;
}

