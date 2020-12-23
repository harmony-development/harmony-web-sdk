"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
var grpc_web_1 = require("@improbable-eng/grpc-web");
var auth_pb_service_1 = require("../protocol/auth/v1/auth_pb_service");
var auth_pb_1 = require("../protocol/auth/v1/auth_pb");
var chat_pb_service_1 = require("../protocol/chat/v1/chat_pb_service");
var streaming_pb_1 = require("../protocol/chat/v1/streaming_pb");
var profile_pb_1 = require("../protocol/chat/v1/profile_pb");
var types_pb_1 = require("../protocol/harmonytypes/v1/types_pb");
var eventemitter3_1 = __importDefault(require("eventemitter3"));
var channels_pb_1 = require("protocol/chat/v1/channels_pb");
var guilds_pb_1 = require("protocol/chat/v1/guilds_pb");
var messages_pb_1 = require("protocol/chat/v1/messages_pb");
var permissions_pb_1 = require("protocol/chat/v1/permissions_pb");
var Connection = /** @class */ (function () {
    function Connection(host) {
        this.host = host;
        this.events = new eventemitter3_1.default();
    }
    Connection.prototype.unaryReq = function (descriptor, request, auth) {
        var _this = this;
        var metadata = new grpc_web_1.grpc.Metadata();
        if (auth && this.session) {
            metadata.set("auth", this.session);
        }
        return new Promise(function (res, rej) {
            grpc_web_1.grpc.unary(descriptor, {
                request: request,
                host: _this.host,
                metadata: metadata,
                onEnd: function (resp) { return (resp.status === grpc_web_1.grpc.Code.OK ? res(resp) : rej(resp)); },
            });
        });
    };
    /**
     * This function is an ugly bastard
     * @param msg an event message
     */
    Connection.prototype.onGuildEvent = function (msg) {
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
    };
    Connection.prototype.beginStream = function () {
        var _this = this;
        this.client = grpc_web_1.grpc.client(chat_pb_service_1.ChatService.StreamEvents, {
            host: this.host,
            transport: grpc_web_1.grpc.WebsocketTransport(),
        });
        this.client.onEnd(function (code, message, trailers) {
            return _this.events.emit("disconnect", code, message, trailers);
        });
        this.client.onMessage(this.onGuildEvent.bind(this));
        var metadata = new grpc_web_1.grpc.Metadata();
        if (this.session)
            metadata.set("auth", this.session);
        this.client.start(metadata);
    };
    Connection.prototype.subscribe = function (guildID) {
        if (this.client) {
            var streamEventsReq = new streaming_pb_1.StreamEventsRequest.SubscribeToGuild();
            streamEventsReq.setGuildId(guildID);
            var req = new streaming_pb_1.StreamEventsRequest();
            req.setSubscribeToGuild(streamEventsReq);
            this.client.send(req);
        }
    };
    Connection.prototype.getKey = function () {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new auth_pb_1.KeyRequest();
                return [2 /*return*/, this.unaryReq(auth_pb_service_1.AuthService.Key, req)];
            });
        });
    };
    Connection.prototype.loginLocal = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var req, localMsg;
            return __generator(this, function (_a) {
                req = new auth_pb_1.LoginRequest();
                localMsg = new auth_pb_1.LoginRequest.Local();
                localMsg.setEmail(email);
                localMsg.setPassword(btoa(password));
                req.setLocal(localMsg);
                return [2 /*return*/, this.unaryReq(auth_pb_service_1.AuthService.Login, req)];
            });
        });
    };
    Connection.prototype.loginFederated = function (token, domain) {
        return __awaiter(this, void 0, void 0, function () {
            var req, federatedMsg;
            return __generator(this, function (_a) {
                req = new auth_pb_1.LoginRequest();
                federatedMsg = new auth_pb_1.LoginRequest.Federated();
                federatedMsg.setAuthToken(token);
                federatedMsg.setDomain(domain);
                req.setFederated(federatedMsg);
                return [2 /*return*/, this.unaryReq(auth_pb_service_1.AuthService.Login, req)];
            });
        });
    };
    Connection.prototype.register = function (email, username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new auth_pb_1.RegisterRequest();
                req.setEmail(email);
                req.setUsername(username);
                req.setPassword(btoa(password));
                return [2 /*return*/, this.unaryReq(auth_pb_service_1.AuthService.Register, req)];
            });
        });
    };
    Connection.prototype.federate = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new auth_pb_1.FederateRequest();
                req.setTarget(target);
                return [2 /*return*/, this.unaryReq(auth_pb_service_1.AuthService.Federate, req, true)];
            });
        });
    };
    Connection.prototype.createGuild = function (guildName, pictureURL) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new guilds_pb_1.CreateGuildRequest();
                req.setGuildName(guildName);
                if (pictureURL) {
                    req.setPictureUrl(pictureURL);
                }
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.CreateGuild, req, true)];
            });
        });
    };
    Connection.prototype.createInvite = function (guildID, name, possibleUses) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new guilds_pb_1.CreateInviteRequest();
                req.setGuildId(guildID);
                if (name) {
                    req.setName(name);
                }
                if (possibleUses) {
                    req.setPossibleUses(possibleUses);
                }
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.CreateInvite, req, true)];
            });
        });
    };
    Connection.prototype.createChannel = function (guildID, channelName) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new channels_pb_1.CreateChannelRequest();
                req.setGuildId(guildID);
                req.setChannelName(channelName);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.CreateChannel, req, true)];
            });
        });
    };
    Connection.prototype.getGuild = function (guildID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new guilds_pb_1.GetGuildRequest();
                req.setGuildId(guildID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.GetGuild, req, true)];
            });
        });
    };
    Connection.prototype.getGuildInvites = function (guildID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new guilds_pb_1.GetGuildInvitesRequest();
                req.setGuildId(guildID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.GetGuildInvites, req, true)];
            });
        });
    };
    Connection.prototype.getGuildMembers = function (guildID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new guilds_pb_1.GetGuildMembersRequest();
                req.setGuildId(guildID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.GetGuildMembers, req, true)];
            });
        });
    };
    Connection.prototype.getGuildChannels = function (guildID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new channels_pb_1.GetGuildChannelsRequest();
                req.setGuildId(guildID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.GetGuildChannels, req, true)];
            });
        });
    };
    Connection.prototype.getChannelMessages = function (guildID, channelID, beforeMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new messages_pb_1.GetChannelMessagesRequest();
                req.setGuildId(guildID);
                req.setChannelId(channelID);
                if (beforeMessage) {
                    req.setBeforeMessage(beforeMessage);
                }
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.GetChannelMessages, req, true)];
            });
        });
    };
    Connection.prototype.updateGuildName = function (guildID, newName) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new guilds_pb_1.UpdateGuildNameRequest();
                req.setGuildId(guildID);
                req.setNewGuildName(newName);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.UpdateGuildName, req, true)];
            });
        });
    };
    Connection.prototype.updateChannelName = function (guildID, channelID, newName) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new channels_pb_1.UpdateChannelNameRequest();
                req.setGuildId(guildID);
                req.setChannelId(channelID);
                req.setNewChannelName(newName);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.UpdateChannelName, req, true)];
            });
        });
    };
    Connection.prototype.updateMessage = function (guildID, channelID, messageID, newContent, newAttachments, newActions, newEmbeds) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new messages_pb_1.UpdateMessageRequest();
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
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.UpdateMessage, req, true)];
            });
        });
    };
    Connection.prototype.deleteGuild = function (guildID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new guilds_pb_1.DeleteGuildRequest();
                req.setGuildId(guildID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.DeleteGuild, req, true)];
            });
        });
    };
    Connection.prototype.deleteInvite = function (guildID, inviteID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new guilds_pb_1.DeleteInviteRequest();
                req.setGuildId(guildID);
                req.setInviteId(inviteID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.DeleteInvite, req, true)];
            });
        });
    };
    Connection.prototype.deleteChannel = function (guildID, channelID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new channels_pb_1.DeleteChannelRequest();
                req.setGuildId(guildID);
                req.setChannelId(channelID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.DeleteChannel, req, true)];
            });
        });
    };
    Connection.prototype.deleteMessage = function (guildID, channelID, messageID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new messages_pb_1.DeleteMessageRequest();
                req.setGuildId(guildID);
                req.setChannelId(channelID);
                req.setMessageId(messageID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.DeleteMessage, req, true)];
            });
        });
    };
    Connection.prototype.joinGuild = function (inviteID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new guilds_pb_1.JoinGuildRequest();
                req.setInviteId(inviteID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.JoinGuild, req, true)];
            });
        });
    };
    Connection.prototype.leaveGuild = function (guildID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new guilds_pb_1.LeaveGuildRequest();
                req.setGuildId(guildID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.LeaveGuild, req, true)];
            });
        });
    };
    Connection.prototype.triggerAction = function (guildID, channelID, messageID, actionID, actionData) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new messages_pb_1.TriggerActionRequest();
                req.setGuildId(guildID);
                req.setChannelId(channelID);
                req.setMessageId(messageID);
                req.setActionId(actionID);
                if (actionData) {
                    req.setActionData(actionData);
                }
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.TriggerAction, req, true)];
            });
        });
    };
    Connection.prototype.sendMessage = function (guildID, channelID, content, attachments, embeds, actions) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new messages_pb_1.SendMessageRequest();
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
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.SendMessage, req, true)];
            });
        });
    };
    Connection.prototype.uploadFile = function (f) {
        return __awaiter(this, void 0, void 0, function () {
            var data, headers, resp, asJSON;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = new FormData();
                        data.set("filename", f.name);
                        data.set("contenttype", f.type);
                        data.set("file", f);
                        headers = new Headers();
                        headers.set("Authorization", this.session || "");
                        return [4 /*yield*/, fetch(this.host + "/_harmony/media/upload", {
                                body: data,
                                method: "POST",
                                headers: headers,
                            })];
                    case 1:
                        resp = _a.sent();
                        return [4 /*yield*/, resp.json()];
                    case 2:
                        asJSON = _a.sent();
                        return [2 /*return*/, {
                                id: asJSON.id,
                            }];
                }
            });
        });
    };
    Connection.prototype.getGuildList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new guilds_pb_1.GetGuildListRequest();
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.GetGuildList, req, true)];
            });
        });
    };
    Connection.prototype.getUser = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new profile_pb_1.GetUserRequest();
                req.setUserId(userID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.GetUser, req, true)];
            });
        });
    };
    Connection.prototype.getUserMetadata = function (appID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new profile_pb_1.GetUserMetadataRequest();
                req.setAppId(appID);
                return [2 /*return*/];
            });
        });
    };
    Connection.prototype.profileUpdate = function (profile) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new profile_pb_1.ProfileUpdateRequest();
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
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.ProfileUpdate, req, true)];
            });
        });
    };
    Connection.prototype.statusUpdate = function (newStatus) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new profile_pb_1.StatusUpdateRequest();
                req.setNewStatus(types_pb_1.UserStatus[newStatus]);
                return [2 /*return*/];
            });
        });
    };
    Connection.prototype.addGuildToGuildList = function (guildID, homeserver) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new guilds_pb_1.AddGuildToGuildListRequest();
                req.setGuildId(guildID);
                req.setHomeserver(homeserver);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.AddGuildToGuildList, req, true)];
            });
        });
    };
    Connection.prototype.getGuildRoles = function (guildID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new permissions_pb_1.GetGuildRolesRequest();
                req.setGuildId(guildID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.GetGuildRoles, req, true)];
            });
        });
    };
    Connection.prototype.moveRole = function (guildID, roleID, beforeID, afterID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new permissions_pb_1.MoveRoleRequest();
                req.setGuildId(guildID);
                req.setRoleId(roleID);
                req.setBeforeId(beforeID);
                req.setAfterId(afterID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.MoveRole, req, true)];
            });
        });
    };
    Connection.prototype.deleteGuildRole = function (guildID, roleID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new permissions_pb_1.DeleteGuildRoleRequest();
                req.setGuildId(guildID);
                req.setRoleId(roleID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.DeleteGuildRole, req, true)];
            });
        });
    };
    Connection.prototype.modifyGuildRole = function (guildID, roleID, modify) {
        return __awaiter(this, void 0, void 0, function () {
            var req, modified;
            return __generator(this, function (_a) {
                req = new permissions_pb_1.ModifyGuildRoleRequest();
                req.setGuildId(guildID);
                modified = new permissions_pb_1.Role();
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
                return [2 /*return*/];
            });
        });
    };
    Connection.prototype.manageUserRoles = function (guildID, userID, giveRoleIDs, takeRoleIDs) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new permissions_pb_1.ManageUserRolesRequest();
                req.setGuildId(guildID);
                req.setUserId(userID);
                if (giveRoleIDs) {
                    req.setGiveRoleIdsList(giveRoleIDs);
                }
                if (takeRoleIDs) {
                    req.setTakeRoleIdsList(takeRoleIDs);
                }
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.ManageUserRoles, req, true)];
            });
        });
    };
    Connection.prototype.getUserRoles = function (guildID, userID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new permissions_pb_1.GetUserRolesRequest();
                req.setGuildId(guildID);
                req.setUserId(userID);
                return [2 /*return*/, this.unaryReq(chat_pb_service_1.ChatService.GetUserRoles, req, true)];
            });
        });
    };
    return Connection;
}());
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map