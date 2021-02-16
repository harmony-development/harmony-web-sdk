"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const output_1 = __importDefault(require("./output"));
class ChatService {
    constructor(host) {
        this.host = host;
    }
    unary(endpoint, body) {
        return fetch(`${this.host}${endpoint}`, {
            method: "POST",
            body,
            headers: {
                "Content-Type": "application/octet-stream",
                Authorization: this.session || "",
            },
        });
    }
    stream(endpoint) {
        return new WebSocket(`${this.host}${endpoint}`, [
            "access_token",
            this.session || "",
        ]);
    }
    async CreateGuild(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/CreateGuild", output_1.default.protocol.chat.v1.CreateGuildRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.CreateGuildResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async CreateInvite(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/CreateInvite", output_1.default.protocol.chat.v1.CreateInviteRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.CreateInviteResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async CreateChannel(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/CreateChannel", output_1.default.protocol.chat.v1.CreateChannelRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.CreateChannelResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async CreateEmotePack(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/CreateEmotePack", output_1.default.protocol.chat.v1.CreateEmotePackRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.CreateEmotePackResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async GetGuildList(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetGuildList", output_1.default.protocol.chat.v1.GetGuildListRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetGuildListResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async AddGuildToGuildList(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/AddGuildToGuildList", output_1.default.protocol.chat.v1.AddGuildToGuildListRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.AddGuildToGuildListResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async RemoveGuildFromGuildList(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/RemoveGuildFromGuildList", output_1.default.protocol.chat.v1.RemoveGuildFromGuildListRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.RemoveGuildFromGuildListResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async GetGuild(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetGuild", output_1.default.protocol.chat.v1.GetGuildRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetGuildResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async GetGuildInvites(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetGuildInvites", output_1.default.protocol.chat.v1.GetGuildInvitesRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetGuildInvitesResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async GetGuildMembers(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetGuildMembers", output_1.default.protocol.chat.v1.GetGuildMembersRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetGuildMembersResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async GetGuildChannels(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetGuildChannels", output_1.default.protocol.chat.v1.GetGuildChannelsRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetGuildChannelsResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async GetChannelMessages(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetChannelMessages", output_1.default.protocol.chat.v1.GetChannelMessagesRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetChannelMessagesResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async GetMessage(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetMessage", output_1.default.protocol.chat.v1.GetMessageRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetMessageResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async GetEmotePacks(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetEmotePacks", output_1.default.protocol.chat.v1.GetEmotePacksRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetEmotePacksResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async GetEmotePackEmotes(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetEmotePackEmotes", output_1.default.protocol.chat.v1.GetEmotePackEmotesRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetEmotePackEmotesResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async UpdateGuildInformation(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/UpdateGuildInformation", output_1.default.protocol.chat.v1.UpdateGuildInformationRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async UpdateChannelInformation(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/UpdateChannelInformation", output_1.default.protocol.chat.v1.UpdateChannelInformationRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async UpdateChannelOrder(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/UpdateChannelOrder", output_1.default.protocol.chat.v1.UpdateChannelOrderRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async UpdateMessage(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/UpdateMessage", output_1.default.protocol.chat.v1.UpdateMessageRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async AddEmoteToPack(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/AddEmoteToPack", output_1.default.protocol.chat.v1.AddEmoteToPackRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async DeleteGuild(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/DeleteGuild", output_1.default.protocol.chat.v1.DeleteGuildRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async DeleteInvite(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/DeleteInvite", output_1.default.protocol.chat.v1.DeleteInviteRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async DeleteChannel(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/DeleteChannel", output_1.default.protocol.chat.v1.DeleteChannelRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async DeleteMessage(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/DeleteMessage", output_1.default.protocol.chat.v1.DeleteMessageRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async DeleteEmoteFromPack(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/DeleteEmoteFromPack", output_1.default.protocol.chat.v1.DeleteEmoteFromPackRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async DeleteEmotePack(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/DeleteEmotePack", output_1.default.protocol.chat.v1.DeleteEmotePackRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async DequipEmotePack(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/DequipEmotePack", output_1.default.protocol.chat.v1.DequipEmotePackRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async JoinGuild(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/JoinGuild", output_1.default.protocol.chat.v1.JoinGuildRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.JoinGuildResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async LeaveGuild(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/LeaveGuild", output_1.default.protocol.chat.v1.LeaveGuildRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async TriggerAction(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/TriggerAction", output_1.default.protocol.chat.v1.TriggerActionRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async SendMessage(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/SendMessage", output_1.default.protocol.chat.v1.SendMessageRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.SendMessageResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async QueryHasPermission(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/QueryHasPermission", output_1.default.protocol.chat.v1.QueryPermissionsRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.QueryPermissionsResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async SetPermissions(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/SetPermissions", output_1.default.protocol.chat.v1.SetPermissionsRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async GetPermissions(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetPermissions", output_1.default.protocol.chat.v1.GetPermissionsRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetPermissionsResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async MoveRole(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/MoveRole", output_1.default.protocol.chat.v1.MoveRoleRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.MoveRoleResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async GetGuildRoles(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetGuildRoles", output_1.default.protocol.chat.v1.GetGuildRolesRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetGuildRolesResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async AddGuildRole(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/AddGuildRole", output_1.default.protocol.chat.v1.AddGuildRoleRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.AddGuildRoleResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async ModifyGuildRole(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/ModifyGuildRole", output_1.default.protocol.chat.v1.ModifyGuildRoleRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async DeleteGuildRole(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/DeleteGuildRole", output_1.default.protocol.chat.v1.DeleteGuildRoleRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async ManageUserRoles(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/ManageUserRoles", output_1.default.protocol.chat.v1.ManageUserRolesRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async GetUserRoles(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetUserRoles", output_1.default.protocol.chat.v1.GetUserRolesRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetUserRolesResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    StreamEvents() {
        return this.stream("/protocol.chat.v1.ChatService/StreamEvents");
    }
    async GetUser(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetUser", output_1.default.protocol.chat.v1.GetUserRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetUserResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async GetUserMetadata(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/GetUserMetadata", output_1.default.protocol.chat.v1.GetUserMetadataRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.GetUserMetadataResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async ProfileUpdate(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/ProfileUpdate", output_1.default.protocol.chat.v1.ProfileUpdateRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async Typing(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/Typing", output_1.default.protocol.chat.v1.TypingRequest.encode(req).finish());
        return output_1.default.google.protobuf.Empty.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async PreviewGuild(req) {
        const resp = await this.unary("/protocol.chat.v1.ChatService/PreviewGuild", output_1.default.protocol.chat.v1.PreviewGuildRequest.encode(req).finish());
        return output_1.default.protocol.chat.v1.PreviewGuildResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
}
exports.default = ChatService;
//# sourceMappingURL=chat.js.map