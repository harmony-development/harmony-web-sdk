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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
var grpc_web_1 = require("@improbable-eng/grpc-web");
var foundation_pb_service_1 = require("../protocol/foundation/v1/foundation_pb_service");
var foundation_pb_1 = require("../protocol/foundation/v1/foundation_pb");
var core_pb_service_1 = require("../protocol/core/v1/core_pb_service");
var core_pb_1 = require("../protocol/core/v1/core_pb");
var profile_pb_1 = require("../protocol/profile/v1/profile_pb");
var profile_pb_service_1 = require("../protocol/profile/v1/profile_pb_service");
var Connection = /** @class */ (function () {
    function Connection(host) {
        this.host = host;
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
    Connection.prototype.newLocation = function (guildID, channelID, messageID) {
        var loc = new core_pb_1.Location();
        loc.setGuildId(guildID);
        if (channelID) {
            loc.setChannelId(channelID);
        }
        if (messageID) {
            loc.setMessageId(messageID);
        }
        return loc;
    };
    Connection.prototype.getKey = function () {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new foundation_pb_1.KeyRequest();
                return [2 /*return*/, this.unaryReq(foundation_pb_service_1.FoundationService.Key, req)];
            });
        });
    };
    Connection.prototype.loginLocal = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var req, localMsg;
            return __generator(this, function (_a) {
                req = new foundation_pb_1.LoginRequest();
                localMsg = new foundation_pb_1.LoginRequest.Local();
                localMsg.setEmail(email);
                localMsg.setPassword(password);
                req.setLocal(localMsg);
                return [2 /*return*/, this.unaryReq(foundation_pb_service_1.FoundationService.Login, req)];
            });
        });
    };
    Connection.prototype.loginFederated = function (token, domain) {
        return __awaiter(this, void 0, void 0, function () {
            var req, federatedMsg;
            return __generator(this, function (_a) {
                req = new foundation_pb_1.LoginRequest();
                federatedMsg = new foundation_pb_1.LoginRequest.Federated();
                federatedMsg.setAuthToken(token);
                federatedMsg.setDomain(domain);
                req.setFederated(federatedMsg);
                return [2 /*return*/, this.unaryReq(foundation_pb_service_1.FoundationService.Login, req)];
            });
        });
    };
    Connection.prototype.register = function (email, username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new foundation_pb_1.RegisterRequest();
                req.setEmail(email);
                req.setUsername(username);
                req.setPassword(password);
                return [2 /*return*/, this.unaryReq(foundation_pb_service_1.FoundationService.Register, req)];
            });
        });
    };
    Connection.prototype.federate = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new foundation_pb_1.FederateRequest();
                req.setTarget(target);
                return [2 /*return*/, this.unaryReq(foundation_pb_service_1.FoundationService.Federate, req, true)];
            });
        });
    };
    Connection.prototype.createGuild = function (guildName, pictureURL) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.CreateGuildRequest();
                req.setGuildName(guildName);
                if (pictureURL) {
                    req.setPictureUrl(pictureURL);
                }
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.CreateGuild, req, true)];
            });
        });
    };
    Connection.prototype.createInvite = function (guildID, name, possibleUses) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.CreateInviteRequest();
                req.setLocation(this.newLocation(guildID));
                if (name) {
                    req.setName(name);
                }
                if (possibleUses) {
                    req.setPossibleUses(possibleUses);
                }
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.CreateInvite, req, true)];
            });
        });
    };
    Connection.prototype.createChannel = function (guildID, channelName) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.CreateChannelRequest();
                req.setLocation(this.newLocation(guildID));
                req.setChannelName(channelName);
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.CreateChannel, req, true)];
            });
        });
    };
    Connection.prototype.getGuild = function (guildID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.GetGuildRequest();
                req.setLocation(this.newLocation(guildID));
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.GetGuild, req, true)];
            });
        });
    };
    Connection.prototype.getGuildInvites = function (guildID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.GetGuildInvitesRequest();
                req.setLocation(this.newLocation(guildID));
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.GetGuildInvites, req, true)];
            });
        });
    };
    Connection.prototype.getGuildMembers = function (guildID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.GetGuildMembersRequest();
                req.setLocation(this.newLocation(guildID));
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.GetGuildMembers, req, true)];
            });
        });
    };
    Connection.prototype.getGuildChannels = function (guildID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.GetGuildChannelsRequest();
                req.setLocation(this.newLocation(guildID));
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.GetGuildChannels, req, true)];
            });
        });
    };
    Connection.prototype.getChannelMessages = function (guildID, channelID, beforeMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.GetChannelMessagesRequest();
                req.setLocation(this.newLocation(guildID, channelID));
                if (beforeMessage) {
                    req.setBeforeMessage(beforeMessage);
                }
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.GetChannelMessages, req, true)];
            });
        });
    };
    Connection.prototype.updateGuildName = function (guildID, newName) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.UpdateGuildNameRequest();
                req.setLocation(this.newLocation(guildID));
                req.setNewGuildName(newName);
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.UpdateGuildName, req, true)];
            });
        });
    };
    Connection.prototype.updateChannelName = function (guildID, channelID, newName) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.UpdateChannelNameRequest();
                req.setLocation(this.newLocation(guildID, channelID));
                req.setNewChannelName(newName);
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.UpdateChannelName, req, true)];
            });
        });
    };
    Connection.prototype.updateMessage = function (guildID, channelID, messageID, newContent, newAttachments, newActions, newEmbeds) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.UpdateMessageRequest();
                req.setLocation(this.newLocation(guildID, channelID, messageID));
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
                req.setLocation(this.newLocation(guildID, channelID, messageID));
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.UpdateMessage, req, true)];
            });
        });
    };
    Connection.prototype.deleteGuild = function (guildID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.DeleteGuildRequest();
                req.setLocation(this.newLocation(guildID));
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.DeleteGuild, req, true)];
            });
        });
    };
    Connection.prototype.deleteInvite = function (guildID, inviteID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.DeleteInviteRequest();
                req.setLocation(this.newLocation(guildID));
                req.setInviteId(inviteID);
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.DeleteInvite, req, true)];
            });
        });
    };
    Connection.prototype.deleteChannel = function (guildID, channelID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.DeleteChannelRequest();
                req.setLocation(this.newLocation(guildID, channelID));
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.DeleteChannel, req, true)];
            });
        });
    };
    Connection.prototype.deleteMessage = function (guildID, channelID, messageID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.DeleteMessageRequest();
                req.setLocation(this.newLocation(guildID, channelID, messageID));
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.DeleteMessage, req, true)];
            });
        });
    };
    Connection.prototype.joinGuild = function (inviteID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.JoinGuildRequest();
                req.setInviteId(inviteID);
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.JoinGuild, req, true)];
            });
        });
    };
    Connection.prototype.leaveGuild = function (guildID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.LeaveGuildRequest();
                req.setLocation(this.newLocation(guildID));
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.LeaveGuild, req, true)];
            });
        });
    };
    Connection.prototype.triggerAction = function (guildID, channelID, messageID, actionID, actionData) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.TriggerActionRequest();
                req.setLocation(this.newLocation(guildID, channelID, messageID));
                req.setActionId(actionID);
                if (actionData) {
                    req.setActionData(actionData);
                }
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.TriggerAction, req, true)];
            });
        });
    };
    Connection.prototype.sendMessage = function (content, attachments, embeds, actions) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new core_pb_1.SendMessageRequest();
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
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.SendMessage, req, true)];
            });
        });
    };
    Connection.prototype.localGuilds = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new foundation_pb_1.FederateRequest();
                req.setTarget(target);
                return [2 /*return*/, this.unaryReq(core_pb_service_1.CoreService.LocalGuilds, req, true)];
            });
        });
    };
    Connection.prototype.getUser = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new profile_pb_1.GetUserRequest();
                req.setUserId(userID);
                return [2 /*return*/, this.unaryReq(profile_pb_service_1.ProfileService.GetUser, req, true)];
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
    Connection.prototype.usernameUpdate = function (newUsername) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new profile_pb_1.UsernameUpdateRequest();
                req.setUserName(newUsername);
                return [2 /*return*/, this.unaryReq(profile_pb_service_1.ProfileService.UsernameUpdate, req, true)];
            });
        });
    };
    Connection.prototype.statusUpdate = function (newStatus) {
        return __awaiter(this, void 0, void 0, function () {
            var req;
            return __generator(this, function (_a) {
                req = new profile_pb_1.StatusUpdateRequest();
                req.setNewStatus(profile_pb_1.UserStatus[newStatus]);
                return [2 /*return*/];
            });
        });
    };
    return Connection;
}());
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map