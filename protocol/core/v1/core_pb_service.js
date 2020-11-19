// package: protocol.core.v1
// file: core/v1/core.proto

var core_v1_core_pb = require("../../core/v1/core_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CoreService = (function () {
  function CoreService() {}
  CoreService.serviceName = "protocol.core.v1.CoreService";
  return CoreService;
}());

CoreService.CreateGuild = {
  methodName: "CreateGuild",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.CreateGuildRequest,
  responseType: core_v1_core_pb.CreateGuildResponse
};

CoreService.CreateInvite = {
  methodName: "CreateInvite",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.CreateInviteRequest,
  responseType: core_v1_core_pb.CreateInviteResponse
};

CoreService.CreateChannel = {
  methodName: "CreateChannel",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.CreateChannelRequest,
  responseType: core_v1_core_pb.CreateChannelResponse
};

CoreService.CreateEmotePack = {
  methodName: "CreateEmotePack",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.CreateEmotePackRequest,
  responseType: core_v1_core_pb.CreateEmotePackResponse
};

CoreService.GetGuildList = {
  methodName: "GetGuildList",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.GetGuildListRequest,
  responseType: core_v1_core_pb.GetGuildListResponse
};

CoreService.AddGuildToGuildList = {
  methodName: "AddGuildToGuildList",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.AddGuildToGuildListRequest,
  responseType: core_v1_core_pb.AddGuildToGuildListResponse
};

CoreService.RemoveGuildFromGuildList = {
  methodName: "RemoveGuildFromGuildList",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.RemoveGuildFromGuildListRequest,
  responseType: core_v1_core_pb.RemoveGuildFromGuildListResponse
};

CoreService.GetGuild = {
  methodName: "GetGuild",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.GetGuildRequest,
  responseType: core_v1_core_pb.GetGuildResponse
};

CoreService.GetGuildInvites = {
  methodName: "GetGuildInvites",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.GetGuildInvitesRequest,
  responseType: core_v1_core_pb.GetGuildInvitesResponse
};

CoreService.GetGuildMembers = {
  methodName: "GetGuildMembers",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.GetGuildMembersRequest,
  responseType: core_v1_core_pb.GetGuildMembersResponse
};

CoreService.GetGuildChannels = {
  methodName: "GetGuildChannels",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.GetGuildChannelsRequest,
  responseType: core_v1_core_pb.GetGuildChannelsResponse
};

CoreService.GetChannelMessages = {
  methodName: "GetChannelMessages",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.GetChannelMessagesRequest,
  responseType: core_v1_core_pb.GetChannelMessagesResponse
};

CoreService.GetMessage = {
  methodName: "GetMessage",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.GetMessageRequest,
  responseType: core_v1_core_pb.GetMessageResponse
};

CoreService.GetEmotePacks = {
  methodName: "GetEmotePacks",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.GetEmotePacksRequest,
  responseType: core_v1_core_pb.GetEmotePacksResponse
};

CoreService.GetEmotePackEmotes = {
  methodName: "GetEmotePackEmotes",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.GetEmotePackEmotesRequest,
  responseType: core_v1_core_pb.GetEmotePackEmotesResponse
};

CoreService.UpdateGuildName = {
  methodName: "UpdateGuildName",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.UpdateGuildNameRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.UpdateChannelName = {
  methodName: "UpdateChannelName",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.UpdateChannelNameRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.UpdateChannelOrder = {
  methodName: "UpdateChannelOrder",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.UpdateChannelOrderRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.UpdateMessage = {
  methodName: "UpdateMessage",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.UpdateMessageRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.AddEmoteToPack = {
  methodName: "AddEmoteToPack",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.AddEmoteToPackRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.DeleteGuild = {
  methodName: "DeleteGuild",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.DeleteGuildRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.DeleteInvite = {
  methodName: "DeleteInvite",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.DeleteInviteRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.DeleteChannel = {
  methodName: "DeleteChannel",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.DeleteChannelRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.DeleteMessage = {
  methodName: "DeleteMessage",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.DeleteMessageRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.DeleteEmoteFromPack = {
  methodName: "DeleteEmoteFromPack",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.DeleteEmoteFromPackRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.DeleteEmotePack = {
  methodName: "DeleteEmotePack",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.DeleteEmotePackRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.DequipEmotePack = {
  methodName: "DequipEmotePack",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.DequipEmotePackRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.JoinGuild = {
  methodName: "JoinGuild",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.JoinGuildRequest,
  responseType: core_v1_core_pb.JoinGuildResponse
};

CoreService.LeaveGuild = {
  methodName: "LeaveGuild",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.LeaveGuildRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.TriggerAction = {
  methodName: "TriggerAction",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.TriggerActionRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.SendMessage = {
  methodName: "SendMessage",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.SendMessageRequest,
  responseType: core_v1_core_pb.SendMessageResponse
};

CoreService.StreamEvents = {
  methodName: "StreamEvents",
  service: CoreService,
  requestStream: true,
  responseStream: true,
  requestType: core_v1_core_pb.StreamEventsRequest,
  responseType: core_v1_core_pb.Event
};

exports.CoreService = CoreService;

function CoreServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CoreServiceClient.prototype.createGuild = function createGuild(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.CreateGuild, {
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

CoreServiceClient.prototype.createInvite = function createInvite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.CreateInvite, {
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

CoreServiceClient.prototype.createChannel = function createChannel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.CreateChannel, {
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

CoreServiceClient.prototype.createEmotePack = function createEmotePack(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.CreateEmotePack, {
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

CoreServiceClient.prototype.getGuildList = function getGuildList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.GetGuildList, {
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

CoreServiceClient.prototype.addGuildToGuildList = function addGuildToGuildList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.AddGuildToGuildList, {
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

CoreServiceClient.prototype.removeGuildFromGuildList = function removeGuildFromGuildList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.RemoveGuildFromGuildList, {
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

CoreServiceClient.prototype.getGuild = function getGuild(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.GetGuild, {
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

CoreServiceClient.prototype.getGuildInvites = function getGuildInvites(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.GetGuildInvites, {
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

CoreServiceClient.prototype.getGuildMembers = function getGuildMembers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.GetGuildMembers, {
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

CoreServiceClient.prototype.getGuildChannels = function getGuildChannels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.GetGuildChannels, {
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

CoreServiceClient.prototype.getChannelMessages = function getChannelMessages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.GetChannelMessages, {
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

CoreServiceClient.prototype.getMessage = function getMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.GetMessage, {
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

CoreServiceClient.prototype.getEmotePacks = function getEmotePacks(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.GetEmotePacks, {
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

CoreServiceClient.prototype.getEmotePackEmotes = function getEmotePackEmotes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.GetEmotePackEmotes, {
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

CoreServiceClient.prototype.updateGuildName = function updateGuildName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.UpdateGuildName, {
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

CoreServiceClient.prototype.updateChannelName = function updateChannelName(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.UpdateChannelName, {
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

CoreServiceClient.prototype.updateChannelOrder = function updateChannelOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.UpdateChannelOrder, {
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

CoreServiceClient.prototype.updateMessage = function updateMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.UpdateMessage, {
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

CoreServiceClient.prototype.addEmoteToPack = function addEmoteToPack(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.AddEmoteToPack, {
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

CoreServiceClient.prototype.deleteGuild = function deleteGuild(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.DeleteGuild, {
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

CoreServiceClient.prototype.deleteInvite = function deleteInvite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.DeleteInvite, {
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

CoreServiceClient.prototype.deleteChannel = function deleteChannel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.DeleteChannel, {
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

CoreServiceClient.prototype.deleteMessage = function deleteMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.DeleteMessage, {
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

CoreServiceClient.prototype.deleteEmoteFromPack = function deleteEmoteFromPack(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.DeleteEmoteFromPack, {
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

CoreServiceClient.prototype.deleteEmotePack = function deleteEmotePack(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.DeleteEmotePack, {
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

CoreServiceClient.prototype.dequipEmotePack = function dequipEmotePack(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.DequipEmotePack, {
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

CoreServiceClient.prototype.joinGuild = function joinGuild(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.JoinGuild, {
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

CoreServiceClient.prototype.leaveGuild = function leaveGuild(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.LeaveGuild, {
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

CoreServiceClient.prototype.triggerAction = function triggerAction(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.TriggerAction, {
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

CoreServiceClient.prototype.sendMessage = function sendMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.SendMessage, {
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

CoreServiceClient.prototype.streamEvents = function streamEvents(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(CoreService.StreamEvents, {
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

exports.CoreServiceClient = CoreServiceClient;

