// package: protocol.mediaproxy.v1
// file: mediaproxy/v1/mediaproxy.proto

var mediaproxy_v1_mediaproxy_pb = require("../../mediaproxy/v1/mediaproxy_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MediaProxyService = (function () {
  function MediaProxyService() {}
  MediaProxyService.serviceName = "protocol.mediaproxy.v1.MediaProxyService";
  return MediaProxyService;
}());

MediaProxyService.FetchLinkMetadata = {
  methodName: "FetchLinkMetadata",
  service: MediaProxyService,
  requestStream: false,
  responseStream: false,
  requestType: mediaproxy_v1_mediaproxy_pb.FetchLinkMetadataRequest,
  responseType: mediaproxy_v1_mediaproxy_pb.SiteMetadata
};

MediaProxyService.InstantView = {
  methodName: "InstantView",
  service: MediaProxyService,
  requestStream: false,
  responseStream: false,
  requestType: mediaproxy_v1_mediaproxy_pb.InstantViewRequest,
  responseType: mediaproxy_v1_mediaproxy_pb.InstantViewResponse
};

MediaProxyService.CanInstantView = {
  methodName: "CanInstantView",
  service: MediaProxyService,
  requestStream: false,
  responseStream: false,
  requestType: mediaproxy_v1_mediaproxy_pb.InstantViewRequest,
  responseType: mediaproxy_v1_mediaproxy_pb.CanInstantViewResponse
};

exports.MediaProxyService = MediaProxyService;

function MediaProxyServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MediaProxyServiceClient.prototype.fetchLinkMetadata = function fetchLinkMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MediaProxyService.FetchLinkMetadata, {
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

MediaProxyServiceClient.prototype.instantView = function instantView(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MediaProxyService.InstantView, {
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

MediaProxyServiceClient.prototype.canInstantView = function canInstantView(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MediaProxyService.CanInstantView, {
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

exports.MediaProxyServiceClient = MediaProxyServiceClient;

