// package: protocol.foundation.v1
// file: foundation/v1/foundation.proto

var foundation_v1_foundation_pb = require("../../foundation/v1/foundation_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FoundationService = (function () {
  function FoundationService() {}
  FoundationService.serviceName = "protocol.foundation.v1.FoundationService";
  return FoundationService;
}());

FoundationService.Federate = {
  methodName: "Federate",
  service: FoundationService,
  requestStream: false,
  responseStream: false,
  requestType: foundation_v1_foundation_pb.FederateRequest,
  responseType: foundation_v1_foundation_pb.FederateReply
};

FoundationService.Key = {
  methodName: "Key",
  service: FoundationService,
  requestStream: false,
  responseStream: false,
  requestType: foundation_v1_foundation_pb.KeyRequest,
  responseType: foundation_v1_foundation_pb.KeyReply
};

FoundationService.Login = {
  methodName: "Login",
  service: FoundationService,
  requestStream: false,
  responseStream: false,
  requestType: foundation_v1_foundation_pb.LoginRequest,
  responseType: foundation_v1_foundation_pb.Session
};

FoundationService.Register = {
  methodName: "Register",
  service: FoundationService,
  requestStream: false,
  responseStream: false,
  requestType: foundation_v1_foundation_pb.RegisterRequest,
  responseType: foundation_v1_foundation_pb.Session
};

exports.FoundationService = FoundationService;

function FoundationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FoundationServiceClient.prototype.federate = function federate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FoundationService.Federate, {
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

FoundationServiceClient.prototype.key = function key(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FoundationService.Key, {
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

FoundationServiceClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FoundationService.Login, {
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

FoundationServiceClient.prototype.register = function register(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FoundationService.Register, {
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

exports.FoundationServiceClient = FoundationServiceClient;

