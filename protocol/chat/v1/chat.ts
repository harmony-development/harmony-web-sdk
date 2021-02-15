import gen from "./output";
import svc = gen.protocol.chat.v1;
export default class ChatService {
  host: string;
  session?: string;

  constructor(host: string) {
    this.host = host;
  }

  unary(endpoint: string, body: Uint8Array) {
    return fetch(`${this.host}${endpoint}`, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/octet-stream",
        Authorization: this.session || "",
      },
    });
  }

  stream(endpoint: string) {
    return new WebSocket(`${this.host}${endpoint}`, [
      "access_token",
      this.session || "",
    ]);
  }
  async CreateGuild(req: svc.ICreateGuildRequest) {
    const buffer = svc.CreateGuildRequest.encode(
      svc.CreateGuildRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/CreateGuild",
      buffer
    );
    return svc.CreateGuildResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async CreateInvite(req: svc.ICreateInviteRequest) {
    const buffer = svc.CreateInviteRequest.encode(
      svc.CreateInviteRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/CreateInvite",
      buffer
    );
    return svc.CreateInviteResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async CreateChannel(req: svc.ICreateChannelRequest) {
    const buffer = svc.CreateChannelRequest.encode(
      svc.CreateChannelRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/CreateChannel",
      buffer
    );
    return svc.CreateChannelResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async CreateEmotePack(req: svc.ICreateEmotePackRequest) {
    const buffer = svc.CreateEmotePackRequest.encode(
      svc.CreateEmotePackRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/CreateEmotePack",
      buffer
    );
    return svc.CreateEmotePackResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetGuildList(req: svc.IGetGuildListRequest) {
    const buffer = svc.GetGuildListRequest.encode(
      svc.GetGuildListRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetGuildList",
      buffer
    );
    return svc.GetGuildListResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async AddGuildToGuildList(req: svc.IAddGuildToGuildListRequest) {
    const buffer = svc.AddGuildToGuildListRequest.encode(
      svc.AddGuildToGuildListRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/AddGuildToGuildList",
      buffer
    );
    return svc.AddGuildToGuildListResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async RemoveGuildFromGuildList(req: svc.IRemoveGuildFromGuildListRequest) {
    const buffer = svc.RemoveGuildFromGuildListRequest.encode(
      svc.RemoveGuildFromGuildListRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/RemoveGuildFromGuildList",
      buffer
    );
    return svc.RemoveGuildFromGuildListResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetGuild(req: svc.IGetGuildRequest) {
    const buffer = svc.GetGuildRequest.encode(
      svc.GetGuildRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetGuild",
      buffer
    );
    return svc.GetGuildResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetGuildInvites(req: svc.IGetGuildInvitesRequest) {
    const buffer = svc.GetGuildInvitesRequest.encode(
      svc.GetGuildInvitesRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetGuildInvites",
      buffer
    );
    return svc.GetGuildInvitesResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetGuildMembers(req: svc.IGetGuildMembersRequest) {
    const buffer = svc.GetGuildMembersRequest.encode(
      svc.GetGuildMembersRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetGuildMembers",
      buffer
    );
    return svc.GetGuildMembersResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetGuildChannels(req: svc.IGetGuildChannelsRequest) {
    const buffer = svc.GetGuildChannelsRequest.encode(
      svc.GetGuildChannelsRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetGuildChannels",
      buffer
    );
    return svc.GetGuildChannelsResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetChannelMessages(req: svc.IGetChannelMessagesRequest) {
    const buffer = svc.GetChannelMessagesRequest.encode(
      svc.GetChannelMessagesRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetChannelMessages",
      buffer
    );
    return svc.GetChannelMessagesResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetMessage(req: svc.IGetMessageRequest) {
    const buffer = svc.GetMessageRequest.encode(
      svc.GetMessageRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetMessage",
      buffer
    );
    return svc.GetMessageResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetEmotePacks(req: svc.IGetEmotePacksRequest) {
    const buffer = svc.GetEmotePacksRequest.encode(
      svc.GetEmotePacksRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetEmotePacks",
      buffer
    );
    return svc.GetEmotePacksResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetEmotePackEmotes(req: svc.IGetEmotePackEmotesRequest) {
    const buffer = svc.GetEmotePackEmotesRequest.encode(
      svc.GetEmotePackEmotesRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetEmotePackEmotes",
      buffer
    );
    return svc.GetEmotePackEmotesResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async UpdateGuildInformation(req: svc.IUpdateGuildInformationRequest) {
    const buffer = svc.UpdateGuildInformationRequest.encode(
      svc.UpdateGuildInformationRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/UpdateGuildInformation",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async UpdateChannelInformation(req: svc.IUpdateChannelInformationRequest) {
    const buffer = svc.UpdateChannelInformationRequest.encode(
      svc.UpdateChannelInformationRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/UpdateChannelInformation",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async UpdateChannelOrder(req: svc.IUpdateChannelOrderRequest) {
    const buffer = svc.UpdateChannelOrderRequest.encode(
      svc.UpdateChannelOrderRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/UpdateChannelOrder",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async UpdateMessage(req: svc.IUpdateMessageRequest) {
    const buffer = svc.UpdateMessageRequest.encode(
      svc.UpdateMessageRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/UpdateMessage",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async AddEmoteToPack(req: svc.IAddEmoteToPackRequest) {
    const buffer = svc.AddEmoteToPackRequest.encode(
      svc.AddEmoteToPackRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/AddEmoteToPack",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteGuild(req: svc.IDeleteGuildRequest) {
    const buffer = svc.DeleteGuildRequest.encode(
      svc.DeleteGuildRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteGuild",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteInvite(req: svc.IDeleteInviteRequest) {
    const buffer = svc.DeleteInviteRequest.encode(
      svc.DeleteInviteRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteInvite",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteChannel(req: svc.IDeleteChannelRequest) {
    const buffer = svc.DeleteChannelRequest.encode(
      svc.DeleteChannelRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteChannel",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteMessage(req: svc.IDeleteMessageRequest) {
    const buffer = svc.DeleteMessageRequest.encode(
      svc.DeleteMessageRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteMessage",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteEmoteFromPack(req: svc.IDeleteEmoteFromPackRequest) {
    const buffer = svc.DeleteEmoteFromPackRequest.encode(
      svc.DeleteEmoteFromPackRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteEmoteFromPack",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteEmotePack(req: svc.IDeleteEmotePackRequest) {
    const buffer = svc.DeleteEmotePackRequest.encode(
      svc.DeleteEmotePackRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteEmotePack",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DequipEmotePack(req: svc.IDequipEmotePackRequest) {
    const buffer = svc.DequipEmotePackRequest.encode(
      svc.DequipEmotePackRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DequipEmotePack",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async JoinGuild(req: svc.IJoinGuildRequest) {
    const buffer = svc.JoinGuildRequest.encode(
      svc.JoinGuildRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/JoinGuild",
      buffer
    );
    return svc.JoinGuildResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async LeaveGuild(req: svc.ILeaveGuildRequest) {
    const buffer = svc.LeaveGuildRequest.encode(
      svc.LeaveGuildRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/LeaveGuild",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async TriggerAction(req: svc.ITriggerActionRequest) {
    const buffer = svc.TriggerActionRequest.encode(
      svc.TriggerActionRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/TriggerAction",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async SendMessage(req: svc.ISendMessageRequest) {
    const buffer = svc.SendMessageRequest.encode(
      svc.SendMessageRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/SendMessage",
      buffer
    );
    return svc.SendMessageResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async QueryHasPermission(req: svc.IQueryPermissionsRequest) {
    const buffer = svc.QueryPermissionsRequest.encode(
      svc.QueryPermissionsRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/QueryHasPermission",
      buffer
    );
    return svc.QueryPermissionsResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async SetPermissions(req: svc.ISetPermissionsRequest) {
    const buffer = svc.SetPermissionsRequest.encode(
      svc.SetPermissionsRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/SetPermissions",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetPermissions(req: svc.IGetPermissionsRequest) {
    const buffer = svc.GetPermissionsRequest.encode(
      svc.GetPermissionsRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetPermissions",
      buffer
    );
    return svc.GetPermissionsResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async MoveRole(req: svc.IMoveRoleRequest) {
    const buffer = svc.MoveRoleRequest.encode(
      svc.MoveRoleRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/MoveRole",
      buffer
    );
    return svc.MoveRoleResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetGuildRoles(req: svc.IGetGuildRolesRequest) {
    const buffer = svc.GetGuildRolesRequest.encode(
      svc.GetGuildRolesRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetGuildRoles",
      buffer
    );
    return svc.GetGuildRolesResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async AddGuildRole(req: svc.IAddGuildRoleRequest) {
    const buffer = svc.AddGuildRoleRequest.encode(
      svc.AddGuildRoleRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/AddGuildRole",
      buffer
    );
    return svc.AddGuildRoleResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async ModifyGuildRole(req: svc.IModifyGuildRoleRequest) {
    const buffer = svc.ModifyGuildRoleRequest.encode(
      svc.ModifyGuildRoleRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/ModifyGuildRole",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteGuildRole(req: svc.IDeleteGuildRoleRequest) {
    const buffer = svc.DeleteGuildRoleRequest.encode(
      svc.DeleteGuildRoleRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteGuildRole",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async ManageUserRoles(req: svc.IManageUserRolesRequest) {
    const buffer = svc.ManageUserRolesRequest.encode(
      svc.ManageUserRolesRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/ManageUserRoles",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetUserRoles(req: svc.IGetUserRolesRequest) {
    const buffer = svc.GetUserRolesRequest.encode(
      svc.GetUserRolesRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetUserRoles",
      buffer
    );
    return svc.GetUserRolesResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  StreamEvents() {
    return this.stream("/protocol.chat.v1.ChatService/StreamEvents");
  }
  async GetUser(req: svc.IGetUserRequest) {
    const buffer = svc.GetUserRequest.encode(
      svc.GetUserRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetUser",
      buffer
    );
    return svc.GetUserResponse.decode(new Uint8Array(await resp.arrayBuffer()));
  }
  async GetUserMetadata(req: svc.IGetUserMetadataRequest) {
    const buffer = svc.GetUserMetadataRequest.encode(
      svc.GetUserMetadataRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetUserMetadata",
      buffer
    );
    return svc.GetUserMetadataResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async ProfileUpdate(req: svc.IProfileUpdateRequest) {
    const buffer = svc.ProfileUpdateRequest.encode(
      svc.ProfileUpdateRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/ProfileUpdate",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async Typing(req: svc.ITypingRequest) {
    const buffer = svc.TypingRequest.encode(
      svc.TypingRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/Typing",
      buffer
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async PreviewGuild(req: svc.IPreviewGuildRequest) {
    const buffer = svc.PreviewGuildRequest.encode(
      svc.PreviewGuildRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/PreviewGuild",
      buffer
    );
    return svc.PreviewGuildResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
}
