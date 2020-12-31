// package: protocol.chat.v1
// file: chat/v1/chat.proto

import * as chat_v1_chat_pb from "../../chat/v1/chat_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as chat_v1_profile_pb from "../../chat/v1/profile_pb";
import * as chat_v1_guilds_pb from "../../chat/v1/guilds_pb";
import * as chat_v1_channels_pb from "../../chat/v1/channels_pb";
import * as chat_v1_messages_pb from "../../chat/v1/messages_pb";
import * as chat_v1_emotes_pb from "../../chat/v1/emotes_pb";
import * as chat_v1_permissions_pb from "../../chat/v1/permissions_pb";
import * as chat_v1_streaming_pb from "../../chat/v1/streaming_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ChatServiceCreateGuild = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.CreateGuildRequest;
  readonly responseType: typeof chat_v1_guilds_pb.CreateGuildResponse;
};

type ChatServiceCreateInvite = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.CreateInviteRequest;
  readonly responseType: typeof chat_v1_guilds_pb.CreateInviteResponse;
};

type ChatServiceCreateChannel = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_channels_pb.CreateChannelRequest;
  readonly responseType: typeof chat_v1_channels_pb.CreateChannelResponse;
};

type ChatServiceCreateEmotePack = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_emotes_pb.CreateEmotePackRequest;
  readonly responseType: typeof chat_v1_emotes_pb.CreateEmotePackResponse;
};

type ChatServiceGetGuildList = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.GetGuildListRequest;
  readonly responseType: typeof chat_v1_guilds_pb.GetGuildListResponse;
};

type ChatServiceAddGuildToGuildList = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.AddGuildToGuildListRequest;
  readonly responseType: typeof chat_v1_guilds_pb.AddGuildToGuildListResponse;
};

type ChatServiceRemoveGuildFromGuildList = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.RemoveGuildFromGuildListRequest;
  readonly responseType: typeof chat_v1_guilds_pb.RemoveGuildFromGuildListResponse;
};

type ChatServiceGetGuild = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.GetGuildRequest;
  readonly responseType: typeof chat_v1_guilds_pb.GetGuildResponse;
};

type ChatServiceGetGuildInvites = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.GetGuildInvitesRequest;
  readonly responseType: typeof chat_v1_guilds_pb.GetGuildInvitesResponse;
};

type ChatServiceGetGuildMembers = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.GetGuildMembersRequest;
  readonly responseType: typeof chat_v1_guilds_pb.GetGuildMembersResponse;
};

type ChatServiceGetGuildChannels = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_channels_pb.GetGuildChannelsRequest;
  readonly responseType: typeof chat_v1_channels_pb.GetGuildChannelsResponse;
};

type ChatServiceGetChannelMessages = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_messages_pb.GetChannelMessagesRequest;
  readonly responseType: typeof chat_v1_messages_pb.GetChannelMessagesResponse;
};

type ChatServiceGetMessage = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_messages_pb.GetMessageRequest;
  readonly responseType: typeof chat_v1_messages_pb.GetMessageResponse;
};

type ChatServiceGetEmotePacks = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_emotes_pb.GetEmotePacksRequest;
  readonly responseType: typeof chat_v1_emotes_pb.GetEmotePacksResponse;
};

type ChatServiceGetEmotePackEmotes = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_emotes_pb.GetEmotePackEmotesRequest;
  readonly responseType: typeof chat_v1_emotes_pb.GetEmotePackEmotesResponse;
};

type ChatServiceUpdateGuildInformation = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.UpdateGuildInformationRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceUpdateChannelInformation = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_channels_pb.UpdateChannelInformationRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceUpdateChannelOrder = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_channels_pb.UpdateChannelOrderRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceUpdateMessage = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_messages_pb.UpdateMessageRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceAddEmoteToPack = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_emotes_pb.AddEmoteToPackRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceDeleteGuild = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.DeleteGuildRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceDeleteInvite = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.DeleteInviteRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceDeleteChannel = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_channels_pb.DeleteChannelRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceDeleteMessage = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_messages_pb.DeleteMessageRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceDeleteEmoteFromPack = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_emotes_pb.DeleteEmoteFromPackRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceDeleteEmotePack = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_emotes_pb.DeleteEmotePackRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceDequipEmotePack = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_emotes_pb.DequipEmotePackRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceJoinGuild = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.JoinGuildRequest;
  readonly responseType: typeof chat_v1_guilds_pb.JoinGuildResponse;
};

type ChatServiceLeaveGuild = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.LeaveGuildRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceTriggerAction = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_messages_pb.TriggerActionRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceSendMessage = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_messages_pb.SendMessageRequest;
  readonly responseType: typeof chat_v1_messages_pb.SendMessageResponse;
};

type ChatServiceQueryHasPermission = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_permissions_pb.QueryPermissionsRequest;
  readonly responseType: typeof chat_v1_permissions_pb.QueryPermissionsResponse;
};

type ChatServiceSetPermissions = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_permissions_pb.SetPermissionsRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceGetPermissions = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_permissions_pb.GetPermissionsRequest;
  readonly responseType: typeof chat_v1_permissions_pb.GetPermissionsResponse;
};

type ChatServiceMoveRole = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_permissions_pb.MoveRoleRequest;
  readonly responseType: typeof chat_v1_permissions_pb.MoveRoleResponse;
};

type ChatServiceGetGuildRoles = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_permissions_pb.GetGuildRolesRequest;
  readonly responseType: typeof chat_v1_permissions_pb.GetGuildRolesResponse;
};

type ChatServiceAddGuildRole = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_permissions_pb.AddGuildRoleRequest;
  readonly responseType: typeof chat_v1_permissions_pb.AddGuildRoleResponse;
};

type ChatServiceModifyGuildRole = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_permissions_pb.ModifyGuildRoleRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceDeleteGuildRole = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_permissions_pb.DeleteGuildRoleRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceManageUserRoles = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_permissions_pb.ManageUserRolesRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceGetUserRoles = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_permissions_pb.GetUserRolesRequest;
  readonly responseType: typeof chat_v1_permissions_pb.GetUserRolesResponse;
};

type ChatServiceStreamEvents = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof chat_v1_streaming_pb.StreamEventsRequest;
  readonly responseType: typeof chat_v1_streaming_pb.Event;
};

type ChatServiceGetUser = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_profile_pb.GetUserRequest;
  readonly responseType: typeof chat_v1_profile_pb.GetUserResponse;
};

type ChatServiceGetUserMetadata = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_profile_pb.GetUserMetadataRequest;
  readonly responseType: typeof chat_v1_profile_pb.GetUserMetadataResponse;
};

type ChatServiceProfileUpdate = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_profile_pb.ProfileUpdateRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceTyping = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_channels_pb.TypingRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServicePreviewGuild = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_v1_guilds_pb.PreviewGuildRequest;
  readonly responseType: typeof chat_v1_guilds_pb.PreviewGuildResponse;
};

export class ChatService {
  static readonly serviceName: string;
  static readonly CreateGuild: ChatServiceCreateGuild;
  static readonly CreateInvite: ChatServiceCreateInvite;
  static readonly CreateChannel: ChatServiceCreateChannel;
  static readonly CreateEmotePack: ChatServiceCreateEmotePack;
  static readonly GetGuildList: ChatServiceGetGuildList;
  static readonly AddGuildToGuildList: ChatServiceAddGuildToGuildList;
  static readonly RemoveGuildFromGuildList: ChatServiceRemoveGuildFromGuildList;
  static readonly GetGuild: ChatServiceGetGuild;
  static readonly GetGuildInvites: ChatServiceGetGuildInvites;
  static readonly GetGuildMembers: ChatServiceGetGuildMembers;
  static readonly GetGuildChannels: ChatServiceGetGuildChannels;
  static readonly GetChannelMessages: ChatServiceGetChannelMessages;
  static readonly GetMessage: ChatServiceGetMessage;
  static readonly GetEmotePacks: ChatServiceGetEmotePacks;
  static readonly GetEmotePackEmotes: ChatServiceGetEmotePackEmotes;
  static readonly UpdateGuildInformation: ChatServiceUpdateGuildInformation;
  static readonly UpdateChannelInformation: ChatServiceUpdateChannelInformation;
  static readonly UpdateChannelOrder: ChatServiceUpdateChannelOrder;
  static readonly UpdateMessage: ChatServiceUpdateMessage;
  static readonly AddEmoteToPack: ChatServiceAddEmoteToPack;
  static readonly DeleteGuild: ChatServiceDeleteGuild;
  static readonly DeleteInvite: ChatServiceDeleteInvite;
  static readonly DeleteChannel: ChatServiceDeleteChannel;
  static readonly DeleteMessage: ChatServiceDeleteMessage;
  static readonly DeleteEmoteFromPack: ChatServiceDeleteEmoteFromPack;
  static readonly DeleteEmotePack: ChatServiceDeleteEmotePack;
  static readonly DequipEmotePack: ChatServiceDequipEmotePack;
  static readonly JoinGuild: ChatServiceJoinGuild;
  static readonly LeaveGuild: ChatServiceLeaveGuild;
  static readonly TriggerAction: ChatServiceTriggerAction;
  static readonly SendMessage: ChatServiceSendMessage;
  static readonly QueryHasPermission: ChatServiceQueryHasPermission;
  static readonly SetPermissions: ChatServiceSetPermissions;
  static readonly GetPermissions: ChatServiceGetPermissions;
  static readonly MoveRole: ChatServiceMoveRole;
  static readonly GetGuildRoles: ChatServiceGetGuildRoles;
  static readonly AddGuildRole: ChatServiceAddGuildRole;
  static readonly ModifyGuildRole: ChatServiceModifyGuildRole;
  static readonly DeleteGuildRole: ChatServiceDeleteGuildRole;
  static readonly ManageUserRoles: ChatServiceManageUserRoles;
  static readonly GetUserRoles: ChatServiceGetUserRoles;
  static readonly StreamEvents: ChatServiceStreamEvents;
  static readonly GetUser: ChatServiceGetUser;
  static readonly GetUserMetadata: ChatServiceGetUserMetadata;
  static readonly ProfileUpdate: ChatServiceProfileUpdate;
  static readonly Typing: ChatServiceTyping;
  static readonly PreviewGuild: ChatServicePreviewGuild;
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

export class ChatServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createGuild(
    requestMessage: chat_v1_guilds_pb.CreateGuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.CreateGuildResponse|null) => void
  ): UnaryResponse;
  createGuild(
    requestMessage: chat_v1_guilds_pb.CreateGuildRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.CreateGuildResponse|null) => void
  ): UnaryResponse;
  createInvite(
    requestMessage: chat_v1_guilds_pb.CreateInviteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.CreateInviteResponse|null) => void
  ): UnaryResponse;
  createInvite(
    requestMessage: chat_v1_guilds_pb.CreateInviteRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.CreateInviteResponse|null) => void
  ): UnaryResponse;
  createChannel(
    requestMessage: chat_v1_channels_pb.CreateChannelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_channels_pb.CreateChannelResponse|null) => void
  ): UnaryResponse;
  createChannel(
    requestMessage: chat_v1_channels_pb.CreateChannelRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_channels_pb.CreateChannelResponse|null) => void
  ): UnaryResponse;
  createEmotePack(
    requestMessage: chat_v1_emotes_pb.CreateEmotePackRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_emotes_pb.CreateEmotePackResponse|null) => void
  ): UnaryResponse;
  createEmotePack(
    requestMessage: chat_v1_emotes_pb.CreateEmotePackRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_emotes_pb.CreateEmotePackResponse|null) => void
  ): UnaryResponse;
  getGuildList(
    requestMessage: chat_v1_guilds_pb.GetGuildListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.GetGuildListResponse|null) => void
  ): UnaryResponse;
  getGuildList(
    requestMessage: chat_v1_guilds_pb.GetGuildListRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.GetGuildListResponse|null) => void
  ): UnaryResponse;
  addGuildToGuildList(
    requestMessage: chat_v1_guilds_pb.AddGuildToGuildListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.AddGuildToGuildListResponse|null) => void
  ): UnaryResponse;
  addGuildToGuildList(
    requestMessage: chat_v1_guilds_pb.AddGuildToGuildListRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.AddGuildToGuildListResponse|null) => void
  ): UnaryResponse;
  removeGuildFromGuildList(
    requestMessage: chat_v1_guilds_pb.RemoveGuildFromGuildListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.RemoveGuildFromGuildListResponse|null) => void
  ): UnaryResponse;
  removeGuildFromGuildList(
    requestMessage: chat_v1_guilds_pb.RemoveGuildFromGuildListRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.RemoveGuildFromGuildListResponse|null) => void
  ): UnaryResponse;
  getGuild(
    requestMessage: chat_v1_guilds_pb.GetGuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.GetGuildResponse|null) => void
  ): UnaryResponse;
  getGuild(
    requestMessage: chat_v1_guilds_pb.GetGuildRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.GetGuildResponse|null) => void
  ): UnaryResponse;
  getGuildInvites(
    requestMessage: chat_v1_guilds_pb.GetGuildInvitesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.GetGuildInvitesResponse|null) => void
  ): UnaryResponse;
  getGuildInvites(
    requestMessage: chat_v1_guilds_pb.GetGuildInvitesRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.GetGuildInvitesResponse|null) => void
  ): UnaryResponse;
  getGuildMembers(
    requestMessage: chat_v1_guilds_pb.GetGuildMembersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.GetGuildMembersResponse|null) => void
  ): UnaryResponse;
  getGuildMembers(
    requestMessage: chat_v1_guilds_pb.GetGuildMembersRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.GetGuildMembersResponse|null) => void
  ): UnaryResponse;
  getGuildChannels(
    requestMessage: chat_v1_channels_pb.GetGuildChannelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_channels_pb.GetGuildChannelsResponse|null) => void
  ): UnaryResponse;
  getGuildChannels(
    requestMessage: chat_v1_channels_pb.GetGuildChannelsRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_channels_pb.GetGuildChannelsResponse|null) => void
  ): UnaryResponse;
  getChannelMessages(
    requestMessage: chat_v1_messages_pb.GetChannelMessagesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_messages_pb.GetChannelMessagesResponse|null) => void
  ): UnaryResponse;
  getChannelMessages(
    requestMessage: chat_v1_messages_pb.GetChannelMessagesRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_messages_pb.GetChannelMessagesResponse|null) => void
  ): UnaryResponse;
  getMessage(
    requestMessage: chat_v1_messages_pb.GetMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_messages_pb.GetMessageResponse|null) => void
  ): UnaryResponse;
  getMessage(
    requestMessage: chat_v1_messages_pb.GetMessageRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_messages_pb.GetMessageResponse|null) => void
  ): UnaryResponse;
  getEmotePacks(
    requestMessage: chat_v1_emotes_pb.GetEmotePacksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_emotes_pb.GetEmotePacksResponse|null) => void
  ): UnaryResponse;
  getEmotePacks(
    requestMessage: chat_v1_emotes_pb.GetEmotePacksRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_emotes_pb.GetEmotePacksResponse|null) => void
  ): UnaryResponse;
  getEmotePackEmotes(
    requestMessage: chat_v1_emotes_pb.GetEmotePackEmotesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_emotes_pb.GetEmotePackEmotesResponse|null) => void
  ): UnaryResponse;
  getEmotePackEmotes(
    requestMessage: chat_v1_emotes_pb.GetEmotePackEmotesRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_emotes_pb.GetEmotePackEmotesResponse|null) => void
  ): UnaryResponse;
  updateGuildInformation(
    requestMessage: chat_v1_guilds_pb.UpdateGuildInformationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateGuildInformation(
    requestMessage: chat_v1_guilds_pb.UpdateGuildInformationRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateChannelInformation(
    requestMessage: chat_v1_channels_pb.UpdateChannelInformationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateChannelInformation(
    requestMessage: chat_v1_channels_pb.UpdateChannelInformationRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateChannelOrder(
    requestMessage: chat_v1_channels_pb.UpdateChannelOrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateChannelOrder(
    requestMessage: chat_v1_channels_pb.UpdateChannelOrderRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateMessage(
    requestMessage: chat_v1_messages_pb.UpdateMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateMessage(
    requestMessage: chat_v1_messages_pb.UpdateMessageRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  addEmoteToPack(
    requestMessage: chat_v1_emotes_pb.AddEmoteToPackRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  addEmoteToPack(
    requestMessage: chat_v1_emotes_pb.AddEmoteToPackRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteGuild(
    requestMessage: chat_v1_guilds_pb.DeleteGuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteGuild(
    requestMessage: chat_v1_guilds_pb.DeleteGuildRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteInvite(
    requestMessage: chat_v1_guilds_pb.DeleteInviteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteInvite(
    requestMessage: chat_v1_guilds_pb.DeleteInviteRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteChannel(
    requestMessage: chat_v1_channels_pb.DeleteChannelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteChannel(
    requestMessage: chat_v1_channels_pb.DeleteChannelRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteMessage(
    requestMessage: chat_v1_messages_pb.DeleteMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteMessage(
    requestMessage: chat_v1_messages_pb.DeleteMessageRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteEmoteFromPack(
    requestMessage: chat_v1_emotes_pb.DeleteEmoteFromPackRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteEmoteFromPack(
    requestMessage: chat_v1_emotes_pb.DeleteEmoteFromPackRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteEmotePack(
    requestMessage: chat_v1_emotes_pb.DeleteEmotePackRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteEmotePack(
    requestMessage: chat_v1_emotes_pb.DeleteEmotePackRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  dequipEmotePack(
    requestMessage: chat_v1_emotes_pb.DequipEmotePackRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  dequipEmotePack(
    requestMessage: chat_v1_emotes_pb.DequipEmotePackRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  joinGuild(
    requestMessage: chat_v1_guilds_pb.JoinGuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.JoinGuildResponse|null) => void
  ): UnaryResponse;
  joinGuild(
    requestMessage: chat_v1_guilds_pb.JoinGuildRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.JoinGuildResponse|null) => void
  ): UnaryResponse;
  leaveGuild(
    requestMessage: chat_v1_guilds_pb.LeaveGuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  leaveGuild(
    requestMessage: chat_v1_guilds_pb.LeaveGuildRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  triggerAction(
    requestMessage: chat_v1_messages_pb.TriggerActionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  triggerAction(
    requestMessage: chat_v1_messages_pb.TriggerActionRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  sendMessage(
    requestMessage: chat_v1_messages_pb.SendMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_messages_pb.SendMessageResponse|null) => void
  ): UnaryResponse;
  sendMessage(
    requestMessage: chat_v1_messages_pb.SendMessageRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_messages_pb.SendMessageResponse|null) => void
  ): UnaryResponse;
  queryHasPermission(
    requestMessage: chat_v1_permissions_pb.QueryPermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_permissions_pb.QueryPermissionsResponse|null) => void
  ): UnaryResponse;
  queryHasPermission(
    requestMessage: chat_v1_permissions_pb.QueryPermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_permissions_pb.QueryPermissionsResponse|null) => void
  ): UnaryResponse;
  setPermissions(
    requestMessage: chat_v1_permissions_pb.SetPermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  setPermissions(
    requestMessage: chat_v1_permissions_pb.SetPermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getPermissions(
    requestMessage: chat_v1_permissions_pb.GetPermissionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_permissions_pb.GetPermissionsResponse|null) => void
  ): UnaryResponse;
  getPermissions(
    requestMessage: chat_v1_permissions_pb.GetPermissionsRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_permissions_pb.GetPermissionsResponse|null) => void
  ): UnaryResponse;
  moveRole(
    requestMessage: chat_v1_permissions_pb.MoveRoleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_permissions_pb.MoveRoleResponse|null) => void
  ): UnaryResponse;
  moveRole(
    requestMessage: chat_v1_permissions_pb.MoveRoleRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_permissions_pb.MoveRoleResponse|null) => void
  ): UnaryResponse;
  getGuildRoles(
    requestMessage: chat_v1_permissions_pb.GetGuildRolesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_permissions_pb.GetGuildRolesResponse|null) => void
  ): UnaryResponse;
  getGuildRoles(
    requestMessage: chat_v1_permissions_pb.GetGuildRolesRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_permissions_pb.GetGuildRolesResponse|null) => void
  ): UnaryResponse;
  addGuildRole(
    requestMessage: chat_v1_permissions_pb.AddGuildRoleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_permissions_pb.AddGuildRoleResponse|null) => void
  ): UnaryResponse;
  addGuildRole(
    requestMessage: chat_v1_permissions_pb.AddGuildRoleRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_permissions_pb.AddGuildRoleResponse|null) => void
  ): UnaryResponse;
  modifyGuildRole(
    requestMessage: chat_v1_permissions_pb.ModifyGuildRoleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  modifyGuildRole(
    requestMessage: chat_v1_permissions_pb.ModifyGuildRoleRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteGuildRole(
    requestMessage: chat_v1_permissions_pb.DeleteGuildRoleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteGuildRole(
    requestMessage: chat_v1_permissions_pb.DeleteGuildRoleRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  manageUserRoles(
    requestMessage: chat_v1_permissions_pb.ManageUserRolesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  manageUserRoles(
    requestMessage: chat_v1_permissions_pb.ManageUserRolesRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getUserRoles(
    requestMessage: chat_v1_permissions_pb.GetUserRolesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_permissions_pb.GetUserRolesResponse|null) => void
  ): UnaryResponse;
  getUserRoles(
    requestMessage: chat_v1_permissions_pb.GetUserRolesRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_permissions_pb.GetUserRolesResponse|null) => void
  ): UnaryResponse;
  streamEvents(metadata?: grpc.Metadata): BidirectionalStream<chat_v1_streaming_pb.StreamEventsRequest, chat_v1_streaming_pb.Event>;
  getUser(
    requestMessage: chat_v1_profile_pb.GetUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_profile_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: chat_v1_profile_pb.GetUserRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_profile_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  getUserMetadata(
    requestMessage: chat_v1_profile_pb.GetUserMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_profile_pb.GetUserMetadataResponse|null) => void
  ): UnaryResponse;
  getUserMetadata(
    requestMessage: chat_v1_profile_pb.GetUserMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_profile_pb.GetUserMetadataResponse|null) => void
  ): UnaryResponse;
  profileUpdate(
    requestMessage: chat_v1_profile_pb.ProfileUpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  profileUpdate(
    requestMessage: chat_v1_profile_pb.ProfileUpdateRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  typing(
    requestMessage: chat_v1_channels_pb.TypingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  typing(
    requestMessage: chat_v1_channels_pb.TypingRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  previewGuild(
    requestMessage: chat_v1_guilds_pb.PreviewGuildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.PreviewGuildResponse|null) => void
  ): UnaryResponse;
  previewGuild(
    requestMessage: chat_v1_guilds_pb.PreviewGuildRequest,
    callback: (error: ServiceError|null, responseMessage: chat_v1_guilds_pb.PreviewGuildResponse|null) => void
  ): UnaryResponse;
}

