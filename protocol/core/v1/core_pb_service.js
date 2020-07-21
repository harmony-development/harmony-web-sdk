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

CoreService.UpdateMessage = {
  methodName: "UpdateMessage",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.UpdateMessageRequest,
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
  responseType: google_protobuf_empty_pb.Empty
};

CoreService.LocalGuilds = {
  methodName: "LocalGuilds",
  service: CoreService,
  requestStream: false,
  responseStream: false,
  requestType: core_v1_core_pb.JoinedLocalGuildsRequest,
  responseType: core_v1_core_pb.JoinedLocalGuildsResponse
};

CoreService.StreamGuildEvents = {
  methodName: "StreamGuildEvents",
  service: CoreService,
  requestStream: false,
  responseStream: true,
  requestType: core_v1_core_pb.StreamGuildEventsRequest,
  responseType: core_v1_core_pb.GuildEvent
};

CoreService.StreamActionEvents = {
  methodName: "StreamActionEvents",
  service: CoreService,
  requestStream: false,
  responseStream: true,
  requestType: core_v1_core_pb.StreamActionEventsRequest,
  responseType: core_v1_core_pb.ActionEvent
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

CoreServiceClient.prototype.localGuilds = function localGuilds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreService.LocalGuilds, {
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

CoreServiceClient.prototype.streamGuildEvents = function streamGuildEvents(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(CoreService.StreamGuildEvents, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

CoreServiceClient.prototype.streamActionEvents = function streamActionEvents(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(CoreService.StreamActionEvents, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.CoreServiceClient = CoreServiceClient;

