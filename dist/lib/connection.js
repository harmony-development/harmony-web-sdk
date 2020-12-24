"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const grpc_web_1 = require("@improbable-eng/grpc-web");
const auth_pb_service_1 = require("../protocol/auth/v1/auth_pb_service");
const auth_pb_1 = require("../protocol/auth/v1/auth_pb");
const chat_pb_service_1 = require("../protocol/chat/v1/chat_pb_service");
const streaming_pb_1 = require("../protocol/chat/v1/streaming_pb");
const profile_pb_1 = require("../protocol/chat/v1/profile_pb");
const eventemitter3_1 = __importDefault(require("eventemitter3"));
const channels_pb_1 = require("../protocol/chat/v1/channels_pb");
const guilds_pb_1 = require("../protocol/chat/v1/guilds_pb");
const messages_pb_1 = require("../protocol/chat/v1/messages_pb");
const permissions_pb_1 = require("../protocol/chat/v1/permissions_pb");
class Connection {
    constructor(host) {
        this.host = host;
        this.events = new eventemitter3_1.default();
    }
    unaryReq(descriptor, request, auth) {
        const metadata = new grpc_web_1.grpc.Metadata();
        if (auth && this.session) {
            metadata.set("auth", this.session);
        }
        return new Promise((res, rej) => {
            grpc_web_1.grpc.unary(descriptor, {
                request,
                host: this.host,
                metadata,
                onEnd: (resp) => (resp.status === grpc_web_1.grpc.Code.OK ? res(resp) : rej(resp)),
            });
        });
    }
    /**
     * This function is an ugly bastard
     * @param msg an event message
     */
    onGuildEvent(msg) {
        if (msg.hasSentMessage()) {
            this.events.emit(streaming_pb_1.Event.EventCase.SENT_MESSAGE, this.host, msg.getSentMessage().toObject());
        }
        else if (msg.hasLeftMember()) {
            this.events.emit(streaming_pb_1.Event.EventCase.LEFT_MEMBER, this.host, msg.getLeftMember().toObject());
        }
        else if (msg.hasJoinedMember()) {
            this.events.emit(streaming_pb_1.Event.EventCase.JOINED_MEMBER, this.host, msg.getJoinedMember().toObject());
        }
        else if (msg.hasEditedMessage()) {
            this.events.emit(streaming_pb_1.Event.EventCase.EDITED_MESSAGE, this.host, msg.getEditedMessage().toObject());
        }
        else if (msg.hasEditedGuild()) {
            this.events.emit(streaming_pb_1.Event.EventCase.EDITED_GUILD, this.host, msg.getEditedGuild().toObject());
        }
        else if (msg.hasEditedChannel()) {
            this.events.emit(streaming_pb_1.Event.EventCase.EDITED_CHANNEL, this.host, msg.getEditedChannel().toObject());
        }
        else if (msg.hasDeletedMessage()) {
            this.events.emit(streaming_pb_1.Event.EventCase.DELETED_MESSAGE, this.host, msg.getDeletedMessage().toObject());
        }
        else if (msg.hasDeletedGuild()) {
            this.events.emit(streaming_pb_1.Event.EventCase.DELETED_GUILD, this.host, msg.getDeletedGuild().toObject());
        }
        else if (msg.hasDeletedChannel()) {
            this.events.emit(streaming_pb_1.Event.EventCase.DELETED_CHANNEL, this.host, msg.getDeletedChannel().toObject());
        }
        else if (msg.hasCreatedChannel()) {
            this.events.emit(streaming_pb_1.Event.EventCase.CREATED_CHANNEL, this.host, msg.getCreatedChannel().toObject());
        }
    }
    beginStream() {
        this.client = grpc_web_1.grpc.client(chat_pb_service_1.ChatService.StreamEvents, {
            host: this.host,
            transport: grpc_web_1.grpc.WebsocketTransport(),
        });
        this.client.onEnd((code, message, trailers) => this.events.emit("disconnect", code, message, trailers));
        this.client.onMessage(this.onGuildEvent.bind(this));
        const metadata = new grpc_web_1.grpc.Metadata();
        if (this.session)
            metadata.set("auth", this.session);
        this.client.start(metadata);
    }
    subscribe(guildID) {
        if (this.client) {
            const streamEventsReq = new streaming_pb_1.StreamEventsRequest.SubscribeToGuild();
            streamEventsReq.setGuildId(guildID);
            const req = new streaming_pb_1.StreamEventsRequest();
            req.setSubscribeToGuild(streamEventsReq);
            this.client.send(req);
        }
    }
    async getKey() {
        const req = new auth_pb_1.KeyRequest();
        return this.unaryReq(auth_pb_service_1.AuthService.Key, req);
    }
    async loginLocal(email, password) {
        const req = new auth_pb_1.LoginRequest();
        const localMsg = new auth_pb_1.LoginRequest.Local();
        localMsg.setEmail(email);
        localMsg.setPassword(btoa(password));
        req.setLocal(localMsg);
        return this.unaryReq(auth_pb_service_1.AuthService.Login, req);
    }
    async loginFederated(token, domain) {
        const req = new auth_pb_1.LoginRequest();
        const federatedMsg = new auth_pb_1.LoginRequest.Federated();
        federatedMsg.setAuthToken(token);
        federatedMsg.setDomain(domain);
        req.setFederated(federatedMsg);
        return this.unaryReq(auth_pb_service_1.AuthService.Login, req);
    }
    async register(email, username, password) {
        const req = new auth_pb_1.RegisterRequest();
        req.setEmail(email);
        req.setUsername(username);
        req.setPassword(btoa(password));
        return this.unaryReq(auth_pb_service_1.AuthService.Register, req);
    }
    async federate(target) {
        const req = new auth_pb_1.FederateRequest();
        req.setTarget(target);
        return this.unaryReq(auth_pb_service_1.AuthService.Federate, req, true);
    }
    async createGuild(guildName, pictureURL) {
        const req = new guilds_pb_1.CreateGuildRequest();
        req.setGuildName(guildName);
        if (pictureURL) {
            req.setPictureUrl(pictureURL);
        }
        return this.unaryReq(chat_pb_service_1.ChatService.CreateGuild, req, true);
    }
    async createInvite(guildID, name, possibleUses) {
        const req = new guilds_pb_1.CreateInviteRequest();
        req.setGuildId(guildID);
        if (name) {
            req.setName(name);
        }
        if (possibleUses) {
            req.setPossibleUses(possibleUses);
        }
        return this.unaryReq(chat_pb_service_1.ChatService.CreateInvite, req, true);
    }
    async createChannel(guildID, channelName) {
        const req = new channels_pb_1.CreateChannelRequest();
        req.setGuildId(guildID);
        req.setChannelName(channelName);
        return this.unaryReq(chat_pb_service_1.ChatService.CreateChannel, req, true);
    }
    async getGuild(guildID) {
        const req = new guilds_pb_1.GetGuildRequest();
        req.setGuildId(guildID);
        return this.unaryReq(chat_pb_service_1.ChatService.GetGuild, req, true);
    }
    async getGuildInvites(guildID) {
        const req = new guilds_pb_1.GetGuildInvitesRequest();
        req.setGuildId(guildID);
        return this.unaryReq(chat_pb_service_1.ChatService.GetGuildInvites, req, true);
    }
    async getGuildMembers(guildID) {
        const req = new guilds_pb_1.GetGuildMembersRequest();
        req.setGuildId(guildID);
        return this.unaryReq(chat_pb_service_1.ChatService.GetGuildMembers, req, true);
    }
    async getGuildChannels(guildID) {
        const req = new channels_pb_1.GetGuildChannelsRequest();
        req.setGuildId(guildID);
        return this.unaryReq(chat_pb_service_1.ChatService.GetGuildChannels, req, true);
    }
    async getChannelMessages(guildID, channelID, beforeMessage) {
        const req = new messages_pb_1.GetChannelMessagesRequest();
        req.setGuildId(guildID);
        req.setChannelId(channelID);
        if (beforeMessage) {
            req.setBeforeMessage(beforeMessage);
        }
        return this.unaryReq(chat_pb_service_1.ChatService.GetChannelMessages, req, true);
    }
    async updateGuildName(guildID, newName) {
        const req = new guilds_pb_1.UpdateGuildNameRequest();
        req.setGuildId(guildID);
        req.setNewGuildName(newName);
        return this.unaryReq(chat_pb_service_1.ChatService.UpdateGuildName, req, true);
    }
    async updateChannelName(guildID, channelID, newName) {
        const req = new channels_pb_1.UpdateChannelNameRequest();
        req.setGuildId(guildID);
        req.setChannelId(channelID);
        req.setNewChannelName(newName);
        return this.unaryReq(chat_pb_service_1.ChatService.UpdateChannelName, req, true);
    }
    async updateMessage(guildID, channelID, messageID, newContent, newAttachments, newActions, newEmbeds) {
        const req = new messages_pb_1.UpdateMessageRequest();
        req.setGuildId(guildID);
        req.setChannelId(channelID);
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
        req.setGuildId(guildID);
        req.setChannelId(channelID);
        req.setMessageId(messageID);
        return this.unaryReq(chat_pb_service_1.ChatService.UpdateMessage, req, true);
    }
    async deleteGuild(guildID) {
        const req = new guilds_pb_1.DeleteGuildRequest();
        req.setGuildId(guildID);
        return this.unaryReq(chat_pb_service_1.ChatService.DeleteGuild, req, true);
    }
    async deleteInvite(guildID, inviteID) {
        const req = new guilds_pb_1.DeleteInviteRequest();
        req.setGuildId(guildID);
        req.setInviteId(inviteID);
        return this.unaryReq(chat_pb_service_1.ChatService.DeleteInvite, req, true);
    }
    async deleteChannel(guildID, channelID) {
        const req = new channels_pb_1.DeleteChannelRequest();
        req.setGuildId(guildID);
        req.setChannelId(channelID);
        return this.unaryReq(chat_pb_service_1.ChatService.DeleteChannel, req, true);
    }
    async deleteMessage(guildID, channelID, messageID) {
        const req = new messages_pb_1.DeleteMessageRequest();
        req.setGuildId(guildID);
        req.setChannelId(channelID);
        req.setMessageId(messageID);
        return this.unaryReq(chat_pb_service_1.ChatService.DeleteMessage, req, true);
    }
    async joinGuild(inviteID) {
        const req = new guilds_pb_1.JoinGuildRequest();
        req.setInviteId(inviteID);
        return this.unaryReq(chat_pb_service_1.ChatService.JoinGuild, req, true);
    }
    async leaveGuild(guildID) {
        const req = new guilds_pb_1.LeaveGuildRequest();
        req.setGuildId(guildID);
        return this.unaryReq(chat_pb_service_1.ChatService.LeaveGuild, req, true);
    }
    async triggerAction(guildID, channelID, messageID, actionID, actionData) {
        const req = new messages_pb_1.TriggerActionRequest();
        req.setGuildId(guildID);
        req.setChannelId(channelID);
        req.setMessageId(messageID);
        req.setActionId(actionID);
        if (actionData) {
            req.setActionData(actionData);
        }
        return this.unaryReq(chat_pb_service_1.ChatService.TriggerAction, req, true);
    }
    async sendMessage(guildID, channelID, content, attachments, embeds, actions) {
        const req = new messages_pb_1.SendMessageRequest();
        req.setGuildId(guildID);
        req.setChannelId(channelID);
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
        return this.unaryReq(chat_pb_service_1.ChatService.SendMessage, req, true);
    }
    async uploadFile(f) {
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
    async getGuildList() {
        const req = new guilds_pb_1.GetGuildListRequest();
        return this.unaryReq(chat_pb_service_1.ChatService.GetGuildList, req, true);
    }
    async getUser(userID) {
        const req = new profile_pb_1.GetUserRequest();
        req.setUserId(userID);
        return this.unaryReq(chat_pb_service_1.ChatService.GetUser, req, true);
    }
    async getUserMetadata(appID) {
        const req = new profile_pb_1.GetUserMetadataRequest();
        req.setAppId(appID);
    }
    async profileUpdate(profile) {
        const req = new profile_pb_1.ProfileUpdateRequest();
        if (profile.newUsername !== undefined) {
            req.setNewUsername(profile.newUsername);
            req.setUpdateUsername(true);
        }
        if (profile.newAvatar !== undefined) {
            req.setNewAvatar(profile.newAvatar);
            req.setUpdateAvatar(true);
        }
        if (profile.newStatus !== undefined) {
            req.setNewStatus(profile.newStatus);
            req.setUpdateStatus(true);
        }
        return this.unaryReq(chat_pb_service_1.ChatService.ProfileUpdate, req, true);
    }
    async addGuildToGuildList(guildID, homeserver) {
        const req = new guilds_pb_1.AddGuildToGuildListRequest();
        req.setGuildId(guildID);
        req.setHomeserver(homeserver);
        return this.unaryReq(chat_pb_service_1.ChatService.AddGuildToGuildList, req, true);
    }
    async getGuildRoles(guildID) {
        const req = new permissions_pb_1.GetGuildRolesRequest();
        req.setGuildId(guildID);
        return this.unaryReq(chat_pb_service_1.ChatService.GetGuildRoles, req, true);
    }
    async moveRole(guildID, roleID, beforeID, afterID) {
        const req = new permissions_pb_1.MoveRoleRequest();
        req.setGuildId(guildID);
        req.setRoleId(roleID);
        req.setBeforeId(beforeID);
        req.setAfterId(afterID);
        return this.unaryReq(chat_pb_service_1.ChatService.MoveRole, req, true);
    }
    async deleteGuildRole(guildID, roleID) {
        const req = new permissions_pb_1.DeleteGuildRoleRequest();
        req.setGuildId(guildID);
        req.setRoleId(roleID);
        return this.unaryReq(chat_pb_service_1.ChatService.DeleteGuildRole, req, true);
    }
    async modifyGuildRole(guildID, roleID, modify) {
        const req = new permissions_pb_1.ModifyGuildRoleRequest();
        req.setGuildId(guildID);
        const modified = new permissions_pb_1.Role();
        if (modify.name) {
            modified.setName(modify.name);
            req.setModifyName(true);
        }
        if (modify.color) {
            modified.setColor(modify.color);
            req.setModifyColor(true);
        }
        if (modify.hoist) {
            modified.setHoist(modify.hoist);
            req.setModifyHoist(true);
        }
        if (modify.pingable) {
            modified.setPingable(modify.pingable);
            req.setModifyPingable(true);
        }
    }
    async manageUserRoles(guildID, userID, giveRoleIDs, takeRoleIDs) {
        const req = new permissions_pb_1.ManageUserRolesRequest();
        req.setGuildId(guildID);
        req.setUserId(userID);
        if (giveRoleIDs) {
            req.setGiveRoleIdsList(giveRoleIDs);
        }
        if (takeRoleIDs) {
            req.setTakeRoleIdsList(takeRoleIDs);
        }
        return this.unaryReq(chat_pb_service_1.ChatService.ManageUserRoles, req, true);
    }
    async getUserRoles(guildID, userID) {
        const req = new permissions_pb_1.GetUserRolesRequest();
        req.setGuildId(guildID);
        req.setUserId(userID);
        return this.unaryReq(chat_pb_service_1.ChatService.GetUserRoles, req, true);
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map