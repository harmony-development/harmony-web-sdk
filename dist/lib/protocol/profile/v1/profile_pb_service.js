"use strict";
// package: protocol.profile.v1
// file: profile/v1/profile.proto
var profile_v1_profile_pb = require("../../profile/v1/profile_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;
var ProfileService = (function () {
    function ProfileService() { }
    ProfileService.serviceName = "protocol.profile.v1.ProfileService";
    return ProfileService;
}());
ProfileService.GetUser = {
    methodName: "GetUser",
    service: ProfileService,
    requestStream: false,
    responseStream: false,
    requestType: profile_v1_profile_pb.GetUserRequest,
    responseType: profile_v1_profile_pb.GetUserResponse
};
ProfileService.GetUserMetadata = {
    methodName: "GetUserMetadata",
    service: ProfileService,
    requestStream: false,
    responseStream: false,
    requestType: profile_v1_profile_pb.GetUserMetadataRequest,
    responseType: profile_v1_profile_pb.GetUserMetadataResponse
};
ProfileService.UsernameUpdate = {
    methodName: "UsernameUpdate",
    service: ProfileService,
    requestStream: false,
    responseStream: false,
    requestType: profile_v1_profile_pb.UsernameUpdateRequest,
    responseType: google_protobuf_empty_pb.Empty
};
ProfileService.StatusUpdate = {
    methodName: "StatusUpdate",
    service: ProfileService,
    requestStream: false,
    responseStream: false,
    requestType: profile_v1_profile_pb.StatusUpdateRequest,
    responseType: google_protobuf_empty_pb.Empty
};
exports.ProfileService = ProfileService;
function ProfileServiceClient(serviceHost, options) {
    this.serviceHost = serviceHost;
    this.options = options || {};
}
ProfileServiceClient.prototype.getUser = function getUser(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
        callback = arguments[1];
    }
    var client = grpc.unary(ProfileService.GetUser, {
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
                }
                else {
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
ProfileServiceClient.prototype.getUserMetadata = function getUserMetadata(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
        callback = arguments[1];
    }
    var client = grpc.unary(ProfileService.GetUserMetadata, {
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
                }
                else {
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
ProfileServiceClient.prototype.usernameUpdate = function usernameUpdate(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
        callback = arguments[1];
    }
    var client = grpc.unary(ProfileService.UsernameUpdate, {
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
                }
                else {
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
ProfileServiceClient.prototype.statusUpdate = function statusUpdate(requestMessage, metadata, callback) {
    if (arguments.length === 2) {
        callback = arguments[1];
    }
    var client = grpc.unary(ProfileService.StatusUpdate, {
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
                }
                else {
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
exports.ProfileServiceClient = ProfileServiceClient;
//# sourceMappingURL=profile_pb_service.js.map