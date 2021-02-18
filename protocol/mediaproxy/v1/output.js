/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["mediaproxy/v1"] || ($protobuf.roots["mediaproxy/v1"] = {});

$root.protocol = (function() {

    var protocol = {};

    protocol.mediaproxy = (function() {

        var mediaproxy = {};

        mediaproxy.v1 = (function() {

            var v1 = {};

            v1.SiteMetadata = (function() {

                function SiteMetadata(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                SiteMetadata.prototype.siteTitle = "";
                SiteMetadata.prototype.pageTitle = "";
                SiteMetadata.prototype.kind = "";
                SiteMetadata.prototype.description = "";
                SiteMetadata.prototype.url = "";
                SiteMetadata.prototype.image = "";

                SiteMetadata.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.siteTitle != null && Object.hasOwnProperty.call(message, "siteTitle"))
                        writer.uint32(10).string(message.siteTitle);
                    if (message.pageTitle != null && Object.hasOwnProperty.call(message, "pageTitle"))
                        writer.uint32(18).string(message.pageTitle);
                    if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                        writer.uint32(26).string(message.kind);
                    if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                        writer.uint32(34).string(message.description);
                    if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                        writer.uint32(42).string(message.url);
                    if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                        writer.uint32(50).string(message.image);
                    return writer;
                };

                SiteMetadata.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.mediaproxy.v1.SiteMetadata();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.siteTitle = reader.string();
                            break;
                        case 2:
                            message.pageTitle = reader.string();
                            break;
                        case 3:
                            message.kind = reader.string();
                            break;
                        case 4:
                            message.description = reader.string();
                            break;
                        case 5:
                            message.url = reader.string();
                            break;
                        case 6:
                            message.image = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                SiteMetadata.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.mediaproxy.v1.SiteMetadata)
                        return object;
                    var message = new $root.protocol.mediaproxy.v1.SiteMetadata();
                    if (object.siteTitle != null)
                        message.siteTitle = String(object.siteTitle);
                    if (object.pageTitle != null)
                        message.pageTitle = String(object.pageTitle);
                    if (object.kind != null)
                        message.kind = String(object.kind);
                    if (object.description != null)
                        message.description = String(object.description);
                    if (object.url != null)
                        message.url = String(object.url);
                    if (object.image != null)
                        message.image = String(object.image);
                    return message;
                };

                SiteMetadata.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.siteTitle = "";
                        object.pageTitle = "";
                        object.kind = "";
                        object.description = "";
                        object.url = "";
                        object.image = "";
                    }
                    if (message.siteTitle != null && message.hasOwnProperty("siteTitle"))
                        object.siteTitle = message.siteTitle;
                    if (message.pageTitle != null && message.hasOwnProperty("pageTitle"))
                        object.pageTitle = message.pageTitle;
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        object.kind = message.kind;
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    if (message.url != null && message.hasOwnProperty("url"))
                        object.url = message.url;
                    if (message.image != null && message.hasOwnProperty("image"))
                        object.image = message.image;
                    return object;
                };

                SiteMetadata.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SiteMetadata;
            })();

            v1.FetchLinkMetadataRequest = (function() {

                function FetchLinkMetadataRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                FetchLinkMetadataRequest.prototype.url = "";

                FetchLinkMetadataRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                        writer.uint32(10).string(message.url);
                    return writer;
                };

                FetchLinkMetadataRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.mediaproxy.v1.FetchLinkMetadataRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.url = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                FetchLinkMetadataRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.mediaproxy.v1.FetchLinkMetadataRequest)
                        return object;
                    var message = new $root.protocol.mediaproxy.v1.FetchLinkMetadataRequest();
                    if (object.url != null)
                        message.url = String(object.url);
                    return message;
                };

                FetchLinkMetadataRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.url = "";
                    if (message.url != null && message.hasOwnProperty("url"))
                        object.url = message.url;
                    return object;
                };

                FetchLinkMetadataRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return FetchLinkMetadataRequest;
            })();

            v1.InstantViewRequest = (function() {

                function InstantViewRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                InstantViewRequest.prototype.url = "";

                InstantViewRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                        writer.uint32(10).string(message.url);
                    return writer;
                };

                InstantViewRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.mediaproxy.v1.InstantViewRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.url = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                InstantViewRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.mediaproxy.v1.InstantViewRequest)
                        return object;
                    var message = new $root.protocol.mediaproxy.v1.InstantViewRequest();
                    if (object.url != null)
                        message.url = String(object.url);
                    return message;
                };

                InstantViewRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.url = "";
                    if (message.url != null && message.hasOwnProperty("url"))
                        object.url = message.url;
                    return object;
                };

                InstantViewRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return InstantViewRequest;
            })();

            v1.InstantViewResponse = (function() {

                function InstantViewResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                InstantViewResponse.prototype.metadata = null;
                InstantViewResponse.prototype.content = "";
                InstantViewResponse.prototype.isValid = false;

                InstantViewResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        $root.protocol.mediaproxy.v1.SiteMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
                    if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                        writer.uint32(18).string(message.content);
                    if (message.isValid != null && Object.hasOwnProperty.call(message, "isValid"))
                        writer.uint32(24).bool(message.isValid);
                    return writer;
                };

                InstantViewResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.mediaproxy.v1.InstantViewResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.metadata = $root.protocol.mediaproxy.v1.SiteMetadata.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.content = reader.string();
                            break;
                        case 3:
                            message.isValid = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                InstantViewResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.mediaproxy.v1.InstantViewResponse)
                        return object;
                    var message = new $root.protocol.mediaproxy.v1.InstantViewResponse();
                    if (object.metadata != null) {
                        if (typeof object.metadata !== "object")
                            throw TypeError(".protocol.mediaproxy.v1.InstantViewResponse.metadata: object expected");
                        message.metadata = $root.protocol.mediaproxy.v1.SiteMetadata.fromObject(object.metadata);
                    }
                    if (object.content != null)
                        message.content = String(object.content);
                    if (object.isValid != null)
                        message.isValid = Boolean(object.isValid);
                    return message;
                };

                InstantViewResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.metadata = null;
                        object.content = "";
                        object.isValid = false;
                    }
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = $root.protocol.mediaproxy.v1.SiteMetadata.toObject(message.metadata, options);
                    if (message.content != null && message.hasOwnProperty("content"))
                        object.content = message.content;
                    if (message.isValid != null && message.hasOwnProperty("isValid"))
                        object.isValid = message.isValid;
                    return object;
                };

                InstantViewResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return InstantViewResponse;
            })();

            v1.CanInstantViewResponse = (function() {

                function CanInstantViewResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                CanInstantViewResponse.prototype.canInstantView = false;

                CanInstantViewResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.canInstantView != null && Object.hasOwnProperty.call(message, "canInstantView"))
                        writer.uint32(8).bool(message.canInstantView);
                    return writer;
                };

                CanInstantViewResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.mediaproxy.v1.CanInstantViewResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.canInstantView = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                CanInstantViewResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.mediaproxy.v1.CanInstantViewResponse)
                        return object;
                    var message = new $root.protocol.mediaproxy.v1.CanInstantViewResponse();
                    if (object.canInstantView != null)
                        message.canInstantView = Boolean(object.canInstantView);
                    return message;
                };

                CanInstantViewResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.canInstantView = false;
                    if (message.canInstantView != null && message.hasOwnProperty("canInstantView"))
                        object.canInstantView = message.canInstantView;
                    return object;
                };

                CanInstantViewResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CanInstantViewResponse;
            })();

            v1.MediaProxyService = (function() {

                function MediaProxyService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (MediaProxyService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = MediaProxyService;


                Object.defineProperty(MediaProxyService.prototype.fetchLinkMetadata = function fetchLinkMetadata(request, callback) {
                    return this.rpcCall(fetchLinkMetadata, $root.protocol.mediaproxy.v1.FetchLinkMetadataRequest, $root.protocol.mediaproxy.v1.SiteMetadata, request, callback);
                }, "name", { value: "FetchLinkMetadata" });


                Object.defineProperty(MediaProxyService.prototype.instantView = function instantView(request, callback) {
                    return this.rpcCall(instantView, $root.protocol.mediaproxy.v1.InstantViewRequest, $root.protocol.mediaproxy.v1.InstantViewResponse, request, callback);
                }, "name", { value: "InstantView" });


                Object.defineProperty(MediaProxyService.prototype.canInstantView = function canInstantView(request, callback) {
                    return this.rpcCall(canInstantView, $root.protocol.mediaproxy.v1.InstantViewRequest, $root.protocol.mediaproxy.v1.CanInstantViewResponse, request, callback);
                }, "name", { value: "CanInstantView" });

                return MediaProxyService;
            })();

            return v1;
        })();

        return mediaproxy;
    })();

    return protocol;
})();

module.exports = $root;
