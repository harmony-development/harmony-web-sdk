/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["voice/v1"] || ($protobuf.roots["voice/v1"] = {});

$root.protocol = (function() {

    var protocol = {};

    protocol.voice = (function() {

        var voice = {};

        voice.v1 = (function() {

            var v1 = {};

            v1.Signal = (function() {

                function Signal(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Signal.prototype.iceCandidate = "";
                Signal.prototype.renegotiationNeeded = null;

                var $oneOfFields;

                Object.defineProperty(Signal.prototype, "event", {
                    get: $util.oneOfGetter($oneOfFields = ["iceCandidate", "renegotiationNeeded"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Signal.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.iceCandidate != null && Object.hasOwnProperty.call(message, "iceCandidate"))
                        writer.uint32(10).string(message.iceCandidate);
                    if (message.renegotiationNeeded != null && Object.hasOwnProperty.call(message, "renegotiationNeeded"))
                        $root.google.protobuf.Empty.encode(message.renegotiationNeeded, writer.uint32(18).fork()).ldelim();
                    return writer;
                };

                Signal.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.voice.v1.Signal();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.iceCandidate = reader.string();
                            break;
                        case 2:
                            message.renegotiationNeeded = $root.google.protobuf.Empty.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Signal.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.voice.v1.Signal)
                        return object;
                    var message = new $root.protocol.voice.v1.Signal();
                    if (object.iceCandidate != null)
                        message.iceCandidate = String(object.iceCandidate);
                    if (object.renegotiationNeeded != null) {
                        if (typeof object.renegotiationNeeded !== "object")
                            throw TypeError(".protocol.voice.v1.Signal.renegotiationNeeded: object expected");
                        message.renegotiationNeeded = $root.google.protobuf.Empty.fromObject(object.renegotiationNeeded);
                    }
                    return message;
                };

                Signal.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.iceCandidate != null && message.hasOwnProperty("iceCandidate")) {
                        object.iceCandidate = message.iceCandidate;
                        if (options.oneofs)
                            object.event = "iceCandidate";
                    }
                    if (message.renegotiationNeeded != null && message.hasOwnProperty("renegotiationNeeded")) {
                        object.renegotiationNeeded = $root.google.protobuf.Empty.toObject(message.renegotiationNeeded, options);
                        if (options.oneofs)
                            object.event = "renegotiationNeeded";
                    }
                    return object;
                };

                Signal.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Signal;
            })();

            v1.ConnectRequest = (function() {

                function ConnectRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                ConnectRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                ConnectRequest.prototype.offer = "";

                ConnectRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(8).uint64(message.channelId);
                    if (message.offer != null && Object.hasOwnProperty.call(message, "offer"))
                        writer.uint32(18).string(message.offer);
                    return writer;
                };

                ConnectRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.voice.v1.ConnectRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.channelId = reader.uint64();
                            break;
                        case 2:
                            message.offer = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                ConnectRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.voice.v1.ConnectRequest)
                        return object;
                    var message = new $root.protocol.voice.v1.ConnectRequest();
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    if (object.offer != null)
                        message.offer = String(object.offer);
                    return message;
                };

                ConnectRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        object.offer = "";
                    }
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    if (message.offer != null && message.hasOwnProperty("offer"))
                        object.offer = message.offer;
                    return object;
                };

                ConnectRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ConnectRequest;
            })();

            v1.ConnectResponse = (function() {

                function ConnectResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                ConnectResponse.prototype.answer = "";

                ConnectResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.answer != null && Object.hasOwnProperty.call(message, "answer"))
                        writer.uint32(10).string(message.answer);
                    return writer;
                };

                ConnectResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.voice.v1.ConnectResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.answer = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                ConnectResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.voice.v1.ConnectResponse)
                        return object;
                    var message = new $root.protocol.voice.v1.ConnectResponse();
                    if (object.answer != null)
                        message.answer = String(object.answer);
                    return message;
                };

                ConnectResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.answer = "";
                    if (message.answer != null && message.hasOwnProperty("answer"))
                        object.answer = message.answer;
                    return object;
                };

                ConnectResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ConnectResponse;
            })();

            v1.StreamStateRequest = (function() {

                function StreamStateRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                StreamStateRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                StreamStateRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(8).uint64(message.channelId);
                    return writer;
                };

                StreamStateRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.voice.v1.StreamStateRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.channelId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                StreamStateRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.voice.v1.StreamStateRequest)
                        return object;
                    var message = new $root.protocol.voice.v1.StreamStateRequest();
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    return message;
                };

                StreamStateRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    return object;
                };

                StreamStateRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return StreamStateRequest;
            })();

            v1.VoiceService = (function() {

                function VoiceService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (VoiceService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = VoiceService;


                Object.defineProperty(VoiceService.prototype.connect = function connect(request, callback) {
                    return this.rpcCall(connect, $root.protocol.voice.v1.ConnectRequest, $root.protocol.voice.v1.ConnectResponse, request, callback);
                }, "name", { value: "Connect" });


                Object.defineProperty(VoiceService.prototype.streamState = function streamState(request, callback) {
                    return this.rpcCall(streamState, $root.protocol.voice.v1.StreamStateRequest, $root.protocol.voice.v1.Signal, request, callback);
                }, "name", { value: "StreamState" });

                return VoiceService;
            })();

            return v1;
        })();

        return voice;
    })();

    return protocol;
})();

$root.google = (function() {

    var google = {};

    google.protobuf = (function() {

        var protobuf = {};

        protobuf.Empty = (function() {

            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            Empty.toObject = function toObject() {
                return {};
            };

            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
