import gen from "./output";
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
    return new WebSocket(
      `${this.host.replace("https://", "wss://")}${endpoint}`,
      this.session ? ["access_token", this.session] : undefined
    );
  }
  async CreateGuild(req: gen.protocol.chat.v1.ICreateGuildRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/CreateGuild",
      gen.protocol.chat.v1.CreateGuildRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.CreateGuildResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async CreateInvite(req: gen.protocol.chat.v1.ICreateInviteRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/CreateInvite",
      gen.protocol.chat.v1.CreateInviteRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.CreateInviteResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async CreateChannel(req: gen.protocol.chat.v1.ICreateChannelRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/CreateChannel",
      gen.protocol.chat.v1.CreateChannelRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.CreateChannelResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async CreateEmotePack(req: gen.protocol.chat.v1.ICreateEmotePackRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/CreateEmotePack",
      gen.protocol.chat.v1.CreateEmotePackRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.CreateEmotePackResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetGuildList(req: gen.protocol.chat.v1.IGetGuildListRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetGuildList",
      gen.protocol.chat.v1.GetGuildListRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetGuildListResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async AddGuildToGuildList(
    req: gen.protocol.chat.v1.IAddGuildToGuildListRequest
  ) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/AddGuildToGuildList",
      gen.protocol.chat.v1.AddGuildToGuildListRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.AddGuildToGuildListResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async RemoveGuildFromGuildList(
    req: gen.protocol.chat.v1.IRemoveGuildFromGuildListRequest
  ) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/RemoveGuildFromGuildList",
      gen.protocol.chat.v1.RemoveGuildFromGuildListRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.RemoveGuildFromGuildListResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetGuild(req: gen.protocol.chat.v1.IGetGuildRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetGuild",
      gen.protocol.chat.v1.GetGuildRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetGuildResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetGuildInvites(req: gen.protocol.chat.v1.IGetGuildInvitesRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetGuildInvites",
      gen.protocol.chat.v1.GetGuildInvitesRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetGuildInvitesResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetGuildMembers(req: gen.protocol.chat.v1.IGetGuildMembersRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetGuildMembers",
      gen.protocol.chat.v1.GetGuildMembersRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetGuildMembersResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetGuildChannels(req: gen.protocol.chat.v1.IGetGuildChannelsRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetGuildChannels",
      gen.protocol.chat.v1.GetGuildChannelsRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetGuildChannelsResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetChannelMessages(
    req: gen.protocol.chat.v1.IGetChannelMessagesRequest
  ) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetChannelMessages",
      gen.protocol.chat.v1.GetChannelMessagesRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetChannelMessagesResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetMessage(req: gen.protocol.chat.v1.IGetMessageRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetMessage",
      gen.protocol.chat.v1.GetMessageRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetMessageResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetEmotePacks(req: gen.protocol.chat.v1.IGetEmotePacksRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetEmotePacks",
      gen.protocol.chat.v1.GetEmotePacksRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetEmotePacksResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetEmotePackEmotes(
    req: gen.protocol.chat.v1.IGetEmotePackEmotesRequest
  ) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetEmotePackEmotes",
      gen.protocol.chat.v1.GetEmotePackEmotesRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetEmotePackEmotesResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async UpdateGuildInformation(
    req: gen.protocol.chat.v1.IUpdateGuildInformationRequest
  ) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/UpdateGuildInformation",
      gen.protocol.chat.v1.UpdateGuildInformationRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async UpdateChannelInformation(
    req: gen.protocol.chat.v1.IUpdateChannelInformationRequest
  ) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/UpdateChannelInformation",
      gen.protocol.chat.v1.UpdateChannelInformationRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async UpdateChannelOrder(
    req: gen.protocol.chat.v1.IUpdateChannelOrderRequest
  ) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/UpdateChannelOrder",
      gen.protocol.chat.v1.UpdateChannelOrderRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async UpdateMessage(req: gen.protocol.chat.v1.IUpdateMessageRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/UpdateMessage",
      gen.protocol.chat.v1.UpdateMessageRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async AddEmoteToPack(req: gen.protocol.chat.v1.IAddEmoteToPackRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/AddEmoteToPack",
      gen.protocol.chat.v1.AddEmoteToPackRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteGuild(req: gen.protocol.chat.v1.IDeleteGuildRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteGuild",
      gen.protocol.chat.v1.DeleteGuildRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteInvite(req: gen.protocol.chat.v1.IDeleteInviteRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteInvite",
      gen.protocol.chat.v1.DeleteInviteRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteChannel(req: gen.protocol.chat.v1.IDeleteChannelRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteChannel",
      gen.protocol.chat.v1.DeleteChannelRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteMessage(req: gen.protocol.chat.v1.IDeleteMessageRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteMessage",
      gen.protocol.chat.v1.DeleteMessageRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteEmoteFromPack(
    req: gen.protocol.chat.v1.IDeleteEmoteFromPackRequest
  ) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteEmoteFromPack",
      gen.protocol.chat.v1.DeleteEmoteFromPackRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteEmotePack(req: gen.protocol.chat.v1.IDeleteEmotePackRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteEmotePack",
      gen.protocol.chat.v1.DeleteEmotePackRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DequipEmotePack(req: gen.protocol.chat.v1.IDequipEmotePackRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DequipEmotePack",
      gen.protocol.chat.v1.DequipEmotePackRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async JoinGuild(req: gen.protocol.chat.v1.IJoinGuildRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/JoinGuild",
      gen.protocol.chat.v1.JoinGuildRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.JoinGuildResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async LeaveGuild(req: gen.protocol.chat.v1.ILeaveGuildRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/LeaveGuild",
      gen.protocol.chat.v1.LeaveGuildRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async TriggerAction(req: gen.protocol.chat.v1.ITriggerActionRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/TriggerAction",
      gen.protocol.chat.v1.TriggerActionRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async SendMessage(req: gen.protocol.chat.v1.ISendMessageRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/SendMessage",
      gen.protocol.chat.v1.SendMessageRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.SendMessageResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async QueryHasPermission(req: gen.protocol.chat.v1.IQueryPermissionsRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/QueryHasPermission",
      gen.protocol.chat.v1.QueryPermissionsRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.QueryPermissionsResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async SetPermissions(req: gen.protocol.chat.v1.ISetPermissionsRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/SetPermissions",
      gen.protocol.chat.v1.SetPermissionsRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetPermissions(req: gen.protocol.chat.v1.IGetPermissionsRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetPermissions",
      gen.protocol.chat.v1.GetPermissionsRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetPermissionsResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async MoveRole(req: gen.protocol.chat.v1.IMoveRoleRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/MoveRole",
      gen.protocol.chat.v1.MoveRoleRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.MoveRoleResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetGuildRoles(req: gen.protocol.chat.v1.IGetGuildRolesRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetGuildRoles",
      gen.protocol.chat.v1.GetGuildRolesRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetGuildRolesResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async AddGuildRole(req: gen.protocol.chat.v1.IAddGuildRoleRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/AddGuildRole",
      gen.protocol.chat.v1.AddGuildRoleRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.AddGuildRoleResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async ModifyGuildRole(req: gen.protocol.chat.v1.IModifyGuildRoleRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/ModifyGuildRole",
      gen.protocol.chat.v1.ModifyGuildRoleRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async DeleteGuildRole(req: gen.protocol.chat.v1.IDeleteGuildRoleRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/DeleteGuildRole",
      gen.protocol.chat.v1.DeleteGuildRoleRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async ManageUserRoles(req: gen.protocol.chat.v1.IManageUserRolesRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/ManageUserRoles",
      gen.protocol.chat.v1.ManageUserRolesRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetUserRoles(req: gen.protocol.chat.v1.IGetUserRolesRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetUserRoles",
      gen.protocol.chat.v1.GetUserRolesRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetUserRolesResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  StreamEvents() {
    return this.stream("/protocol.chat.v1.ChatService/StreamEvents");
  }
  async GetUser(req: gen.protocol.chat.v1.IGetUserRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetUser",
      gen.protocol.chat.v1.GetUserRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetUserResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async GetUserMetadata(req: gen.protocol.chat.v1.IGetUserMetadataRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/GetUserMetadata",
      gen.protocol.chat.v1.GetUserMetadataRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.GetUserMetadataResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async ProfileUpdate(req: gen.protocol.chat.v1.IProfileUpdateRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/ProfileUpdate",
      gen.protocol.chat.v1.ProfileUpdateRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async Typing(req: gen.protocol.chat.v1.ITypingRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/Typing",
      gen.protocol.chat.v1.TypingRequest.encode(req).finish()
    );
    return gen.google.protobuf.Empty.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async PreviewGuild(req: gen.protocol.chat.v1.IPreviewGuildRequest) {
    const resp = await this.unary(
      "/protocol.chat.v1.ChatService/PreviewGuild",
      gen.protocol.chat.v1.PreviewGuildRequest.encode(req).finish()
    );
    return gen.protocol.chat.v1.PreviewGuildResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
}
