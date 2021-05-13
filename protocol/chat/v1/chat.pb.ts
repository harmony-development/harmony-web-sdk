/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
import * as GoogleProtobufEmpty from "../../google/protobuf/empty.pb"
import * as ProtocolChatV1Channels from "./channels.pb"
import * as ProtocolChatV1Emotes from "./emotes.pb"
import * as ProtocolChatV1Guilds from "./guilds.pb"
import * as ProtocolChatV1Messages from "./messages.pb"
import * as ProtocolChatV1Permissions from "./permissions.pb"
import * as ProtocolChatV1Profile from "./profile.pb"
export class ChatService {
  static CreateGuild(req: ProtocolChatV1Guilds.CreateGuildRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Guilds.CreateGuildResponse> {
    return fm.fetchReq<ProtocolChatV1Guilds.CreateGuildRequest, ProtocolChatV1Guilds.CreateGuildResponse>(`/protocol.chat.v1.ChatService/CreateGuild`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static CreateInvite(req: ProtocolChatV1Guilds.CreateInviteRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Guilds.CreateInviteResponse> {
    return fm.fetchReq<ProtocolChatV1Guilds.CreateInviteRequest, ProtocolChatV1Guilds.CreateInviteResponse>(`/protocol.chat.v1.ChatService/CreateInvite`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static CreateChannel(req: ProtocolChatV1Channels.CreateChannelRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Channels.CreateChannelResponse> {
    return fm.fetchReq<ProtocolChatV1Channels.CreateChannelRequest, ProtocolChatV1Channels.CreateChannelResponse>(`/protocol.chat.v1.ChatService/CreateChannel`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static CreateEmotePack(req: ProtocolChatV1Emotes.CreateEmotePackRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Emotes.CreateEmotePackResponse> {
    return fm.fetchReq<ProtocolChatV1Emotes.CreateEmotePackRequest, ProtocolChatV1Emotes.CreateEmotePackResponse>(`/protocol.chat.v1.ChatService/CreateEmotePack`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetGuildList(req: ProtocolChatV1Guilds.GetGuildListRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Guilds.GetGuildListResponse> {
    return fm.fetchReq<ProtocolChatV1Guilds.GetGuildListRequest, ProtocolChatV1Guilds.GetGuildListResponse>(`/protocol.chat.v1.ChatService/GetGuildList`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static AddGuildToGuildList(req: ProtocolChatV1Guilds.AddGuildToGuildListRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Guilds.AddGuildToGuildListResponse> {
    return fm.fetchReq<ProtocolChatV1Guilds.AddGuildToGuildListRequest, ProtocolChatV1Guilds.AddGuildToGuildListResponse>(`/protocol.chat.v1.ChatService/AddGuildToGuildList`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static RemoveGuildFromGuildList(req: ProtocolChatV1Guilds.RemoveGuildFromGuildListRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Guilds.RemoveGuildFromGuildListResponse> {
    return fm.fetchReq<ProtocolChatV1Guilds.RemoveGuildFromGuildListRequest, ProtocolChatV1Guilds.RemoveGuildFromGuildListResponse>(`/protocol.chat.v1.ChatService/RemoveGuildFromGuildList`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetGuild(req: ProtocolChatV1Guilds.GetGuildRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Guilds.GetGuildResponse> {
    return fm.fetchReq<ProtocolChatV1Guilds.GetGuildRequest, ProtocolChatV1Guilds.GetGuildResponse>(`/protocol.chat.v1.ChatService/GetGuild`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetGuildInvites(req: ProtocolChatV1Guilds.GetGuildInvitesRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Guilds.GetGuildInvitesResponse> {
    return fm.fetchReq<ProtocolChatV1Guilds.GetGuildInvitesRequest, ProtocolChatV1Guilds.GetGuildInvitesResponse>(`/protocol.chat.v1.ChatService/GetGuildInvites`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetGuildMembers(req: ProtocolChatV1Guilds.GetGuildMembersRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Guilds.GetGuildMembersResponse> {
    return fm.fetchReq<ProtocolChatV1Guilds.GetGuildMembersRequest, ProtocolChatV1Guilds.GetGuildMembersResponse>(`/protocol.chat.v1.ChatService/GetGuildMembers`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetGuildChannels(req: ProtocolChatV1Channels.GetGuildChannelsRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Channels.GetGuildChannelsResponse> {
    return fm.fetchReq<ProtocolChatV1Channels.GetGuildChannelsRequest, ProtocolChatV1Channels.GetGuildChannelsResponse>(`/protocol.chat.v1.ChatService/GetGuildChannels`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetChannelMessages(req: ProtocolChatV1Messages.GetChannelMessagesRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Messages.GetChannelMessagesResponse> {
    return fm.fetchReq<ProtocolChatV1Messages.GetChannelMessagesRequest, ProtocolChatV1Messages.GetChannelMessagesResponse>(`/protocol.chat.v1.ChatService/GetChannelMessages`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetMessage(req: ProtocolChatV1Messages.GetMessageRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Messages.GetMessageResponse> {
    return fm.fetchReq<ProtocolChatV1Messages.GetMessageRequest, ProtocolChatV1Messages.GetMessageResponse>(`/protocol.chat.v1.ChatService/GetMessage`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetEmotePacks(req: ProtocolChatV1Emotes.GetEmotePacksRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Emotes.GetEmotePacksResponse> {
    return fm.fetchReq<ProtocolChatV1Emotes.GetEmotePacksRequest, ProtocolChatV1Emotes.GetEmotePacksResponse>(`/protocol.chat.v1.ChatService/GetEmotePacks`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetEmotePackEmotes(req: ProtocolChatV1Emotes.GetEmotePackEmotesRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Emotes.GetEmotePackEmotesResponse> {
    return fm.fetchReq<ProtocolChatV1Emotes.GetEmotePackEmotesRequest, ProtocolChatV1Emotes.GetEmotePackEmotesResponse>(`/protocol.chat.v1.ChatService/GetEmotePackEmotes`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static UpdateGuildInformation(req: ProtocolChatV1Guilds.UpdateGuildInformationRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Guilds.UpdateGuildInformationRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/UpdateGuildInformation`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static UpdateChannelInformation(req: ProtocolChatV1Channels.UpdateChannelInformationRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Channels.UpdateChannelInformationRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/UpdateChannelInformation`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static UpdateChannelOrder(req: ProtocolChatV1Channels.UpdateChannelOrderRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Channels.UpdateChannelOrderRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/UpdateChannelOrder`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static UpdateMessageText(req: ProtocolChatV1Messages.UpdateMessageTextRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Messages.UpdateMessageTextRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/UpdateMessageText`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static AddEmoteToPack(req: ProtocolChatV1Emotes.AddEmoteToPackRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Emotes.AddEmoteToPackRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/AddEmoteToPack`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static DeleteGuild(req: ProtocolChatV1Guilds.DeleteGuildRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Guilds.DeleteGuildRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/DeleteGuild`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static DeleteInvite(req: ProtocolChatV1Guilds.DeleteInviteRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Guilds.DeleteInviteRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/DeleteInvite`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static DeleteChannel(req: ProtocolChatV1Channels.DeleteChannelRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Channels.DeleteChannelRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/DeleteChannel`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static DeleteMessage(req: ProtocolChatV1Messages.DeleteMessageRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Messages.DeleteMessageRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/DeleteMessage`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static DeleteEmoteFromPack(req: ProtocolChatV1Emotes.DeleteEmoteFromPackRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Emotes.DeleteEmoteFromPackRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/DeleteEmoteFromPack`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static DeleteEmotePack(req: ProtocolChatV1Emotes.DeleteEmotePackRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Emotes.DeleteEmotePackRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/DeleteEmotePack`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static DequipEmotePack(req: ProtocolChatV1Emotes.DequipEmotePackRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Emotes.DequipEmotePackRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/DequipEmotePack`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static JoinGuild(req: ProtocolChatV1Guilds.JoinGuildRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Guilds.JoinGuildResponse> {
    return fm.fetchReq<ProtocolChatV1Guilds.JoinGuildRequest, ProtocolChatV1Guilds.JoinGuildResponse>(`/protocol.chat.v1.ChatService/JoinGuild`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static LeaveGuild(req: ProtocolChatV1Guilds.LeaveGuildRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Guilds.LeaveGuildRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/LeaveGuild`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static TriggerAction(req: ProtocolChatV1Messages.TriggerActionRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Messages.TriggerActionRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/TriggerAction`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static SendMessage(req: ProtocolChatV1Messages.SendMessageRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Messages.SendMessageResponse> {
    return fm.fetchReq<ProtocolChatV1Messages.SendMessageRequest, ProtocolChatV1Messages.SendMessageResponse>(`/protocol.chat.v1.ChatService/SendMessage`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static QueryHasPermission(req: ProtocolChatV1Permissions.QueryPermissionsRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Permissions.QueryPermissionsResponse> {
    return fm.fetchReq<ProtocolChatV1Permissions.QueryPermissionsRequest, ProtocolChatV1Permissions.QueryPermissionsResponse>(`/protocol.chat.v1.ChatService/QueryHasPermission`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static SetPermissions(req: ProtocolChatV1Permissions.SetPermissionsRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Permissions.SetPermissionsRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/SetPermissions`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetPermissions(req: ProtocolChatV1Permissions.GetPermissionsRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Permissions.GetPermissionsResponse> {
    return fm.fetchReq<ProtocolChatV1Permissions.GetPermissionsRequest, ProtocolChatV1Permissions.GetPermissionsResponse>(`/protocol.chat.v1.ChatService/GetPermissions`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static MoveRole(req: ProtocolChatV1Permissions.MoveRoleRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Permissions.MoveRoleResponse> {
    return fm.fetchReq<ProtocolChatV1Permissions.MoveRoleRequest, ProtocolChatV1Permissions.MoveRoleResponse>(`/protocol.chat.v1.ChatService/MoveRole`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetGuildRoles(req: ProtocolChatV1Permissions.GetGuildRolesRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Permissions.GetGuildRolesResponse> {
    return fm.fetchReq<ProtocolChatV1Permissions.GetGuildRolesRequest, ProtocolChatV1Permissions.GetGuildRolesResponse>(`/protocol.chat.v1.ChatService/GetGuildRoles`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static AddGuildRole(req: ProtocolChatV1Permissions.AddGuildRoleRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Permissions.AddGuildRoleResponse> {
    return fm.fetchReq<ProtocolChatV1Permissions.AddGuildRoleRequest, ProtocolChatV1Permissions.AddGuildRoleResponse>(`/protocol.chat.v1.ChatService/AddGuildRole`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static ModifyGuildRole(req: ProtocolChatV1Permissions.ModifyGuildRoleRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Permissions.ModifyGuildRoleRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/ModifyGuildRole`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static DeleteGuildRole(req: ProtocolChatV1Permissions.DeleteGuildRoleRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Permissions.DeleteGuildRoleRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/DeleteGuildRole`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static ManageUserRoles(req: ProtocolChatV1Permissions.ManageUserRolesRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Permissions.ManageUserRolesRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/ManageUserRoles`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetUserRoles(req: ProtocolChatV1Permissions.GetUserRolesRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Permissions.GetUserRolesResponse> {
    return fm.fetchReq<ProtocolChatV1Permissions.GetUserRolesRequest, ProtocolChatV1Permissions.GetUserRolesResponse>(`/protocol.chat.v1.ChatService/GetUserRoles`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetUser(req: ProtocolChatV1Profile.GetUserRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Profile.GetUserResponse> {
    return fm.fetchReq<ProtocolChatV1Profile.GetUserRequest, ProtocolChatV1Profile.GetUserResponse>(`/protocol.chat.v1.ChatService/GetUser`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetUserBulk(req: ProtocolChatV1Profile.GetUserBulkRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Profile.GetUserBulkResponse> {
    return fm.fetchReq<ProtocolChatV1Profile.GetUserBulkRequest, ProtocolChatV1Profile.GetUserBulkResponse>(`/protocol.chat.v1.ChatService/GetUserBulk`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static GetUserMetadata(req: ProtocolChatV1Profile.GetUserMetadataRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Profile.GetUserMetadataResponse> {
    return fm.fetchReq<ProtocolChatV1Profile.GetUserMetadataRequest, ProtocolChatV1Profile.GetUserMetadataResponse>(`/protocol.chat.v1.ChatService/GetUserMetadata`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static ProfileUpdate(req: ProtocolChatV1Profile.ProfileUpdateRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Profile.ProfileUpdateRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/ProfileUpdate`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static Typing(req: ProtocolChatV1Channels.TypingRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Channels.TypingRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/Typing`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static PreviewGuild(req: ProtocolChatV1Guilds.PreviewGuildRequest, initReq?: fm.InitReq): Promise<ProtocolChatV1Guilds.PreviewGuildResponse> {
    return fm.fetchReq<ProtocolChatV1Guilds.PreviewGuildRequest, ProtocolChatV1Guilds.PreviewGuildResponse>(`/protocol.chat.v1.ChatService/PreviewGuild`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static BanUser(req: ProtocolChatV1Guilds.BanUserRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Guilds.BanUserRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/BanUser`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static KickUser(req: ProtocolChatV1Guilds.KickUserRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Guilds.KickUserRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/KickUser`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static UnbanUser(req: ProtocolChatV1Guilds.UnbanUserRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<ProtocolChatV1Guilds.UnbanUserRequest, GoogleProtobufEmpty.Empty>(`/protocol.chat.v1.ChatService/UnbanUser`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
}