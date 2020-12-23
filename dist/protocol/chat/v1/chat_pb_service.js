// package: protocol.chat.v1
// file: chat/v1/chat.proto

var chat_v1_chat_pb = require("../../chat/v1/chat_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var chat_v1_profile_pb = require("../../chat/v1/profile_pb");
var chat_v1_guilds_pb = require("../../chat/v1/guilds_pb");
var chat_v1_channels_pb = require("../../chat/v1/channels_pb");
var chat_v1_messages_pb = require("../../chat/v1/messages_pb");
var chat_v1_emotes_pb = require("../../chat/v1/emotes_pb");
var chat_v1_permissions_pb = require("../../chat/v1/permissions_pb");
var chat_v1_streaming_pb = require("../../chat/v1/streaming_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ChatService = (function () {
  function ChatService() {}
  ChatService.serviceName = "protocol.chat.v1.ChatService";
  return ChatService;
}());

ChatService.CreateGuild = {
  methodName: "CreateGuild",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_guilds_pb.CreateGuildRequest,
  responseType: chat_v1_guilds_pb.CreateGuildResponse
};

ChatService.CreateInvite = {
  methodName: "CreateInvite",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_guilds_pb.CreateInviteRequest,
  responseType: chat_v1_guilds_pb.CreateInviteResponse
};

ChatService.CreateChannel = {
  methodName: "CreateChannel",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_channels_pb.CreateChannelRequest,
  responseType: chat_v1_channels_pb.CreateChannelResponse
};

ChatService.CreateEmotePack = {
  methodName: "CreateEmotePack",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_emotes_pb.CreateEmotePackRequest,
  responseType: chat_v1_emotes_pb.CreateEmotePackResponse
};

ChatService.GetGuildList = {
  methodName: "GetGuildList",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_guilds_pb.GetGuildListRequest,
  responseType: chat_v1_guilds_pb.GetGuildListResponse
};

ChatService.AddGuildToGuildList = {
  methodName: "AddGuildToGuildList",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_guilds_pb.AddGuildToGuildListRequest,
  responseType: chat_v1_guilds_pb.AddGuildToGuildListResponse
};

ChatService.RemoveGuildFromGuildList = {
  methodName: "RemoveGuildFromGuildList",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_guilds_pb.RemoveGuildFromGuildListRequest,
  responseType: chat_v1_guilds_pb.RemoveGuildFromGuildListResponse
};

ChatService.GetGuild = {
  methodName: "GetGuild",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_guilds_pb.GetGuildRequest,
  responseType: chat_v1_guilds_pb.GetGuildResponse
};

ChatService.GetGuildInvites = {
  methodName: "GetGuildInvites",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_guilds_pb.GetGuildInvitesRequest,
  responseType: chat_v1_guilds_pb.GetGuildInvitesResponse
};

ChatService.GetGuildMembers = {
  methodName: "GetGuildMembers",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_guilds_pb.GetGuildMembersRequest,
  responseType: chat_v1_guilds_pb.GetGuildMembersResponse
};

ChatService.GetGuildChannels = {
  methodName: "GetGuildChannels",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_channels_pb.GetGuildChannelsRequest,
  responseType: chat_v1_channels_pb.GetGuildChannelsResponse
};

ChatService.GetChannelMessages = {
  methodName: "GetChannelMessages",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_messages_pb.GetChannelMessagesRequest,
  responseType: chat_v1_messages_pb.GetChannelMessagesResponse
};

ChatService.GetMessage = {
  methodName: "GetMessage",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_messages_pb.GetMessageRequest,
  responseType: chat_v1_messages_pb.GetMessageResponse
};

ChatService.GetEmotePacks = {
  methodName: "GetEmotePacks",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_emotes_pb.GetEmotePacksRequest,
  responseType: chat_v1_emotes_pb.GetEmotePacksResponse
};

ChatService.GetEmotePackEmotes = {
  methodName: "GetEmotePackEmotes",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_emotes_pb.GetEmotePackEmotesRequest,
  responseType: chat_v1_emotes_pb.GetEmotePackEmotesResponse
};

ChatService.UpdateGuildName = {
  methodName: "UpdateGuildName",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_guilds_pb.UpdateGuildNameRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.UpdateChannelName = {
  methodName: "UpdateChannelName",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_channels_pb.UpdateChannelNameRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.UpdateChannelOrder = {
  methodName: "UpdateChannelOrder",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_channels_pb.UpdateChannelOrderRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.UpdateMessage = {
  methodName: "UpdateMessage",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_messages_pb.UpdateMessageRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.AddEmoteToPack = {
  methodName: "AddEmoteToPack",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_emotes_pb.AddEmoteToPackRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.DeleteGuild = {
  methodName: "DeleteGuild",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_guilds_pb.DeleteGuildRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.DeleteInvite = {
  methodName: "DeleteInvite",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_guilds_pb.DeleteInviteRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.DeleteChannel = {
  methodName: "DeleteChannel",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_channels_pb.DeleteChannelRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.DeleteMessage = {
  methodName: "DeleteMessage",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_messages_pb.DeleteMessageRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.DeleteEmoteFromPack = {
  methodName: "DeleteEmoteFromPack",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_emotes_pb.DeleteEmoteFromPackRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.DeleteEmotePack = {
  methodName: "DeleteEmotePack",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_emotes_pb.DeleteEmotePackRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.DequipEmotePack = {
  methodName: "DequipEmotePack",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_emotes_pb.DequipEmotePackRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.JoinGuild = {
  methodName: "JoinGuild",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_guilds_pb.JoinGuildRequest,
  responseType: chat_v1_guilds_pb.JoinGuildResponse
};

ChatService.LeaveGuild = {
  methodName: "LeaveGuild",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_guilds_pb.LeaveGuildRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.TriggerAction = {
  methodName: "TriggerAction",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_messages_pb.TriggerActionRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.SendMessage = {
  methodName: "SendMessage",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_messages_pb.SendMessageRequest,
  responseType: chat_v1_messages_pb.SendMessageResponse
};

ChatService.QueryHasPermission = {
  methodName: "QueryHasPermission",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_permissions_pb.QueryPermissionsRequest,
  responseType: chat_v1_permissions_pb.QueryPermissionsResponse
};

ChatService.SetPermissions = {
  methodName: "SetPermissions",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_permissions_pb.SetPermissionsRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.GetPermissions = {
  methodName: "GetPermissions",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_permissions_pb.GetPermissionsRequest,
  responseType: chat_v1_permissions_pb.GetPermissionsResponse
};

ChatService.MoveRole = {
  methodName: "MoveRole",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_permissions_pb.MoveRoleRequest,
  responseType: chat_v1_permissions_pb.MoveRoleResponse
};

ChatService.GetGuildRoles = {
  methodName: "GetGuildRoles",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_permissions_pb.GetGuildRolesRequest,
  responseType: chat_v1_permissions_pb.GetGuildRolesResponse
};

ChatService.AddGuildRole = {
  methodName: "AddGuildRole",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_permissions_pb.AddGuildRoleRequest,
  responseType: chat_v1_permissions_pb.AddGuildRoleResponse
};

ChatService.ModifyGuildRole = {
  methodName: "ModifyGuildRole",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_permissions_pb.ModifyGuildRoleRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.DeleteGuildRole = {
  methodName: "DeleteGuildRole",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_permissions_pb.DeleteGuildRoleRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.ManageUserRoles = {
  methodName: "ManageUserRoles",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_permissions_pb.ManageUserRolesRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.GetUserRoles = {
  methodName: "GetUserRoles",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_permissions_pb.GetUserRolesRequest,
  responseType: chat_v1_permissions_pb.GetUserRolesResponse
};

ChatService.StreamEvents = {
  methodName: "StreamEvents",
  service: ChatService,
  requestStream: true,
  responseStream: true,
  requestType: chat_v1_streaming_pb.StreamEventsRequest,
  responseType: chat_v1_streaming_pb.Event
};

ChatService.GetUser = {
  methodName: "GetUser",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_profile_pb.GetUserRequest,
  responseType: chat_v1_profile_pb.GetUserResponse
};

ChatService.GetUserMetadata = {
  methodName: "GetUserMetadata",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_profile_pb.GetUserMetadataRequest,
  responseType: chat_v1_profile_pb.GetUserMetadataResponse
};

ChatService.ProfileUpdate = {
  methodName: "ProfileUpdate",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: chat_v1_profile_pb.ProfileUpdateRequest,
  responseType: google_protobuf_empty_pb.Empty
};

exports.ChatService = ChatService;

function ChatServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ChatServiceClient.prototype.createGuild = function createGuild(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.CreateGuild, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.createInvite = function createInvite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.CreateInvite, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.createChannel = function createChannel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.CreateChannel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.createEmotePack = function createEmotePack(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.CreateEmotePack, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getGuildList = function getGuildList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetGuildList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.addGuildToGuildList = function addGuildToGuildList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.AddGuildToGuildList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.removeGuildFromGuildList = function removeGuildFromGuildList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.RemoveGuildFromGuildList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getGuild = function getGuild(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetGuild, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getGuildInvites = function getGuildInvites(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetGuildInvites, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getGuildMembers = function getGuildMembers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetGuildMembers, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getGuildChannels = function getGuildChannels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetGuildChannels, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getChannelMessages = function getChannelMessages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetChannelMessages, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getMessage = function getMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getEmotePacks = function getEmotePacks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetEmotePacks, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getEmotePackEmotes = function getEmotePackEmotes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetEmotePackEmotes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.updateGuildName = function updateGuildName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.UpdateGuildName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.updateChannelName = function updateChannelName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.UpdateChannelName, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.updateChannelOrder = function updateChannelOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.UpdateChannelOrder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.updateMessage = function updateMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.UpdateMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.addEmoteToPack = function addEmoteToPack(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.AddEmoteToPack, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.deleteGuild = function deleteGuild(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.DeleteGuild, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.deleteInvite = function deleteInvite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.DeleteInvite, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.deleteChannel = function deleteChannel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.DeleteChannel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.deleteMessage = function deleteMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.DeleteMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.deleteEmoteFromPack = function deleteEmoteFromPack(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.DeleteEmoteFromPack, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.deleteEmotePack = function deleteEmotePack(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.DeleteEmotePack, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.dequipEmotePack = function dequipEmotePack(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.DequipEmotePack, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.joinGuild = function joinGuild(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.JoinGuild, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.leaveGuild = function leaveGuild(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.LeaveGuild, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.triggerAction = function triggerAction(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.TriggerAction, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.sendMessage = function sendMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.SendMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.queryHasPermission = function queryHasPermission(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.QueryHasPermission, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.setPermissions = function setPermissions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.SetPermissions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getPermissions = function getPermissions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetPermissions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.moveRole = function moveRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.MoveRole, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getGuildRoles = function getGuildRoles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetGuildRoles, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.addGuildRole = function addGuildRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.AddGuildRole, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.modifyGuildRole = function modifyGuildRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.ModifyGuildRole, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.deleteGuildRole = function deleteGuildRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.DeleteGuildRole, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.manageUserRoles = function manageUserRoles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.ManageUserRoles, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getUserRoles = function getUserRoles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetUserRoles, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.streamEvents = function streamEvents(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(ChatService.StreamEvents, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getUser = function getUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetUser, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getUserMetadata = function getUserMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetUserMetadata, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.profileUpdate = function profileUpdate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.ProfileUpdate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ChatServiceClient = ChatServiceClient;

