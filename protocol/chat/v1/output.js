/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["chat/v1"] || ($protobuf.roots["chat/v1"] = {});

$root.protocol = (function() {

    var protocol = {};

    protocol.chat = (function() {

        var chat = {};

        chat.v1 = (function() {

            var v1 = {};

            v1.QueryPermissionsRequest = (function() {

                function QueryPermissionsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                QueryPermissionsRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                QueryPermissionsRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                QueryPermissionsRequest.prototype.checkFor = "";
                QueryPermissionsRequest.prototype.as = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                QueryPermissionsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    if (message.checkFor != null && Object.hasOwnProperty.call(message, "checkFor"))
                        writer.uint32(26).string(message.checkFor);
                    if (message.as != null && Object.hasOwnProperty.call(message, "as"))
                        writer.uint32(32).uint64(message.as);
                    return writer;
                };

                QueryPermissionsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.QueryPermissionsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        case 3:
                            message.checkFor = reader.string();
                            break;
                        case 4:
                            message.as = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                QueryPermissionsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.QueryPermissionsRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.QueryPermissionsRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    if (object.checkFor != null)
                        message.checkFor = String(object.checkFor);
                    if (object.as != null)
                        if ($util.Long)
                            (message.as = $util.Long.fromValue(object.as)).unsigned = true;
                        else if (typeof object.as === "string")
                            message.as = parseInt(object.as, 10);
                        else if (typeof object.as === "number")
                            message.as = object.as;
                        else if (typeof object.as === "object")
                            message.as = new $util.LongBits(object.as.low >>> 0, object.as.high >>> 0).toNumber(true);
                    return message;
                };

                QueryPermissionsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        object.checkFor = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.as = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.as = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    if (message.checkFor != null && message.hasOwnProperty("checkFor"))
                        object.checkFor = message.checkFor;
                    if (message.as != null && message.hasOwnProperty("as"))
                        if (typeof message.as === "number")
                            object.as = options.longs === String ? String(message.as) : message.as;
                        else
                            object.as = options.longs === String ? $util.Long.prototype.toString.call(message.as) : options.longs === Number ? new $util.LongBits(message.as.low >>> 0, message.as.high >>> 0).toNumber(true) : message.as;
                    return object;
                };

                QueryPermissionsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryPermissionsRequest;
            })();

            v1.QueryPermissionsResponse = (function() {

                function QueryPermissionsResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                QueryPermissionsResponse.prototype.ok = false;

                QueryPermissionsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                        writer.uint32(8).bool(message.ok);
                    return writer;
                };

                QueryPermissionsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.QueryPermissionsResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ok = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                QueryPermissionsResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.QueryPermissionsResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.QueryPermissionsResponse();
                    if (object.ok != null)
                        message.ok = Boolean(object.ok);
                    return message;
                };

                QueryPermissionsResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.ok = false;
                    if (message.ok != null && message.hasOwnProperty("ok"))
                        object.ok = message.ok;
                    return object;
                };

                QueryPermissionsResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryPermissionsResponse;
            })();

            v1.Permission = (function() {

                function Permission(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Permission.prototype.matches = "";
                Permission.prototype.mode = 0;

                Permission.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.matches != null && Object.hasOwnProperty.call(message, "matches"))
                        writer.uint32(10).string(message.matches);
                    if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                        writer.uint32(16).int32(message.mode);
                    return writer;
                };

                Permission.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Permission();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.matches = reader.string();
                            break;
                        case 2:
                            message.mode = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Permission.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.Permission)
                        return object;
                    var message = new $root.protocol.chat.v1.Permission();
                    if (object.matches != null)
                        message.matches = String(object.matches);
                    switch (object.mode) {
                    case "Allow":
                    case 0:
                        message.mode = 0;
                        break;
                    case "Deny":
                    case 1:
                        message.mode = 1;
                        break;
                    }
                    return message;
                };

                Permission.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.matches = "";
                        object.mode = options.enums === String ? "Allow" : 0;
                    }
                    if (message.matches != null && message.hasOwnProperty("matches"))
                        object.matches = message.matches;
                    if (message.mode != null && message.hasOwnProperty("mode"))
                        object.mode = options.enums === String ? $root.protocol.chat.v1.Permission.Mode[message.mode] : message.mode;
                    return object;
                };

                Permission.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Permission.Mode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "Allow"] = 0;
                    values[valuesById[1] = "Deny"] = 1;
                    return values;
                })();

                return Permission;
            })();

            v1.PermissionList = (function() {

                function PermissionList(properties) {
                    this.permissions = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                PermissionList.prototype.permissions = $util.emptyArray;

                PermissionList.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.permissions != null && message.permissions.length)
                        for (var i = 0; i < message.permissions.length; ++i)
                            $root.protocol.chat.v1.Permission.encode(message.permissions[i], writer.uint32(10).fork()).ldelim();
                    return writer;
                };

                PermissionList.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.PermissionList();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.permissions && message.permissions.length))
                                message.permissions = [];
                            message.permissions.push($root.protocol.chat.v1.Permission.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                PermissionList.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.PermissionList)
                        return object;
                    var message = new $root.protocol.chat.v1.PermissionList();
                    if (object.permissions) {
                        if (!Array.isArray(object.permissions))
                            throw TypeError(".protocol.chat.v1.PermissionList.permissions: array expected");
                        message.permissions = [];
                        for (var i = 0; i < object.permissions.length; ++i) {
                            if (typeof object.permissions[i] !== "object")
                                throw TypeError(".protocol.chat.v1.PermissionList.permissions: object expected");
                            message.permissions[i] = $root.protocol.chat.v1.Permission.fromObject(object.permissions[i]);
                        }
                    }
                    return message;
                };

                PermissionList.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.permissions = [];
                    if (message.permissions && message.permissions.length) {
                        object.permissions = [];
                        for (var j = 0; j < message.permissions.length; ++j)
                            object.permissions[j] = $root.protocol.chat.v1.Permission.toObject(message.permissions[j], options);
                    }
                    return object;
                };

                PermissionList.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PermissionList;
            })();

            v1.SetPermissionsRequest = (function() {

                function SetPermissionsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                SetPermissionsRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                SetPermissionsRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                SetPermissionsRequest.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                SetPermissionsRequest.prototype.perms = null;

                SetPermissionsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    if (message.roleId != null && Object.hasOwnProperty.call(message, "roleId"))
                        writer.uint32(24).uint64(message.roleId);
                    if (message.perms != null && Object.hasOwnProperty.call(message, "perms"))
                        $root.protocol.chat.v1.PermissionList.encode(message.perms, writer.uint32(34).fork()).ldelim();
                    return writer;
                };

                SetPermissionsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.SetPermissionsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        case 3:
                            message.roleId = reader.uint64();
                            break;
                        case 4:
                            message.perms = $root.protocol.chat.v1.PermissionList.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                SetPermissionsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.SetPermissionsRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.SetPermissionsRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    if (object.roleId != null)
                        if ($util.Long)
                            (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = true;
                        else if (typeof object.roleId === "string")
                            message.roleId = parseInt(object.roleId, 10);
                        else if (typeof object.roleId === "number")
                            message.roleId = object.roleId;
                        else if (typeof object.roleId === "object")
                            message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber(true);
                    if (object.perms != null) {
                        if (typeof object.perms !== "object")
                            throw TypeError(".protocol.chat.v1.SetPermissionsRequest.perms: object expected");
                        message.perms = $root.protocol.chat.v1.PermissionList.fromObject(object.perms);
                    }
                    return message;
                };

                SetPermissionsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.roleId = options.longs === String ? "0" : 0;
                        object.perms = null;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (typeof message.roleId === "number")
                            object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                        else
                            object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber(true) : message.roleId;
                    if (message.perms != null && message.hasOwnProperty("perms"))
                        object.perms = $root.protocol.chat.v1.PermissionList.toObject(message.perms, options);
                    return object;
                };

                SetPermissionsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SetPermissionsRequest;
            })();

            v1.GetPermissionsRequest = (function() {

                function GetPermissionsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetPermissionsRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                GetPermissionsRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                GetPermissionsRequest.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                GetPermissionsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    if (message.roleId != null && Object.hasOwnProperty.call(message, "roleId"))
                        writer.uint32(24).uint64(message.roleId);
                    return writer;
                };

                GetPermissionsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetPermissionsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        case 3:
                            message.roleId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetPermissionsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetPermissionsRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.GetPermissionsRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    if (object.roleId != null)
                        if ($util.Long)
                            (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = true;
                        else if (typeof object.roleId === "string")
                            message.roleId = parseInt(object.roleId, 10);
                        else if (typeof object.roleId === "number")
                            message.roleId = object.roleId;
                        else if (typeof object.roleId === "object")
                            message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber(true);
                    return message;
                };

                GetPermissionsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.roleId = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (typeof message.roleId === "number")
                            object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                        else
                            object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber(true) : message.roleId;
                    return object;
                };

                GetPermissionsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetPermissionsRequest;
            })();

            v1.GetPermissionsResponse = (function() {

                function GetPermissionsResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetPermissionsResponse.prototype.perms = null;

                GetPermissionsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.perms != null && Object.hasOwnProperty.call(message, "perms"))
                        $root.protocol.chat.v1.PermissionList.encode(message.perms, writer.uint32(10).fork()).ldelim();
                    return writer;
                };

                GetPermissionsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetPermissionsResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.perms = $root.protocol.chat.v1.PermissionList.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetPermissionsResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetPermissionsResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetPermissionsResponse();
                    if (object.perms != null) {
                        if (typeof object.perms !== "object")
                            throw TypeError(".protocol.chat.v1.GetPermissionsResponse.perms: object expected");
                        message.perms = $root.protocol.chat.v1.PermissionList.fromObject(object.perms);
                    }
                    return message;
                };

                GetPermissionsResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.perms = null;
                    if (message.perms != null && message.hasOwnProperty("perms"))
                        object.perms = $root.protocol.chat.v1.PermissionList.toObject(message.perms, options);
                    return object;
                };

                GetPermissionsResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetPermissionsResponse;
            })();

            v1.Role = (function() {

                function Role(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Role.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                Role.prototype.name = "";
                Role.prototype.color = 0;
                Role.prototype.hoist = false;
                Role.prototype.pingable = false;

                Role.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && Object.hasOwnProperty.call(message, "roleId"))
                        writer.uint32(8).uint64(message.roleId);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(18).string(message.name);
                    if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                        writer.uint32(24).int32(message.color);
                    if (message.hoist != null && Object.hasOwnProperty.call(message, "hoist"))
                        writer.uint32(32).bool(message.hoist);
                    if (message.pingable != null && Object.hasOwnProperty.call(message, "pingable"))
                        writer.uint32(40).bool(message.pingable);
                    return writer;
                };

                Role.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Role();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.uint64();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.color = reader.int32();
                            break;
                        case 4:
                            message.hoist = reader.bool();
                            break;
                        case 5:
                            message.pingable = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Role.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.Role)
                        return object;
                    var message = new $root.protocol.chat.v1.Role();
                    if (object.roleId != null)
                        if ($util.Long)
                            (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = true;
                        else if (typeof object.roleId === "string")
                            message.roleId = parseInt(object.roleId, 10);
                        else if (typeof object.roleId === "number")
                            message.roleId = object.roleId;
                        else if (typeof object.roleId === "object")
                            message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber(true);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.color != null)
                        message.color = object.color | 0;
                    if (object.hoist != null)
                        message.hoist = Boolean(object.hoist);
                    if (object.pingable != null)
                        message.pingable = Boolean(object.pingable);
                    return message;
                };

                Role.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.roleId = options.longs === String ? "0" : 0;
                        object.name = "";
                        object.color = 0;
                        object.hoist = false;
                        object.pingable = false;
                    }
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (typeof message.roleId === "number")
                            object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                        else
                            object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber(true) : message.roleId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.color != null && message.hasOwnProperty("color"))
                        object.color = message.color;
                    if (message.hoist != null && message.hasOwnProperty("hoist"))
                        object.hoist = message.hoist;
                    if (message.pingable != null && message.hasOwnProperty("pingable"))
                        object.pingable = message.pingable;
                    return object;
                };

                Role.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Role;
            })();

            v1.MoveRoleRequest = (function() {

                function MoveRoleRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                MoveRoleRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                MoveRoleRequest.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                MoveRoleRequest.prototype.beforeId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                MoveRoleRequest.prototype.afterId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                MoveRoleRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.roleId != null && Object.hasOwnProperty.call(message, "roleId"))
                        writer.uint32(16).uint64(message.roleId);
                    if (message.beforeId != null && Object.hasOwnProperty.call(message, "beforeId"))
                        writer.uint32(24).uint64(message.beforeId);
                    if (message.afterId != null && Object.hasOwnProperty.call(message, "afterId"))
                        writer.uint32(32).uint64(message.afterId);
                    return writer;
                };

                MoveRoleRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.MoveRoleRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.roleId = reader.uint64();
                            break;
                        case 3:
                            message.beforeId = reader.uint64();
                            break;
                        case 4:
                            message.afterId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                MoveRoleRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.MoveRoleRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.MoveRoleRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.roleId != null)
                        if ($util.Long)
                            (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = true;
                        else if (typeof object.roleId === "string")
                            message.roleId = parseInt(object.roleId, 10);
                        else if (typeof object.roleId === "number")
                            message.roleId = object.roleId;
                        else if (typeof object.roleId === "object")
                            message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber(true);
                    if (object.beforeId != null)
                        if ($util.Long)
                            (message.beforeId = $util.Long.fromValue(object.beforeId)).unsigned = true;
                        else if (typeof object.beforeId === "string")
                            message.beforeId = parseInt(object.beforeId, 10);
                        else if (typeof object.beforeId === "number")
                            message.beforeId = object.beforeId;
                        else if (typeof object.beforeId === "object")
                            message.beforeId = new $util.LongBits(object.beforeId.low >>> 0, object.beforeId.high >>> 0).toNumber(true);
                    if (object.afterId != null)
                        if ($util.Long)
                            (message.afterId = $util.Long.fromValue(object.afterId)).unsigned = true;
                        else if (typeof object.afterId === "string")
                            message.afterId = parseInt(object.afterId, 10);
                        else if (typeof object.afterId === "number")
                            message.afterId = object.afterId;
                        else if (typeof object.afterId === "object")
                            message.afterId = new $util.LongBits(object.afterId.low >>> 0, object.afterId.high >>> 0).toNumber(true);
                    return message;
                };

                MoveRoleRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.roleId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.beforeId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.beforeId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.afterId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.afterId = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (typeof message.roleId === "number")
                            object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                        else
                            object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber(true) : message.roleId;
                    if (message.beforeId != null && message.hasOwnProperty("beforeId"))
                        if (typeof message.beforeId === "number")
                            object.beforeId = options.longs === String ? String(message.beforeId) : message.beforeId;
                        else
                            object.beforeId = options.longs === String ? $util.Long.prototype.toString.call(message.beforeId) : options.longs === Number ? new $util.LongBits(message.beforeId.low >>> 0, message.beforeId.high >>> 0).toNumber(true) : message.beforeId;
                    if (message.afterId != null && message.hasOwnProperty("afterId"))
                        if (typeof message.afterId === "number")
                            object.afterId = options.longs === String ? String(message.afterId) : message.afterId;
                        else
                            object.afterId = options.longs === String ? $util.Long.prototype.toString.call(message.afterId) : options.longs === Number ? new $util.LongBits(message.afterId.low >>> 0, message.afterId.high >>> 0).toNumber(true) : message.afterId;
                    return object;
                };

                MoveRoleRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MoveRoleRequest;
            })();

            v1.MoveRoleResponse = (function() {

                function MoveRoleResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                MoveRoleResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                MoveRoleResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.MoveRoleResponse();
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

                MoveRoleResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.MoveRoleResponse)
                        return object;
                    return new $root.protocol.chat.v1.MoveRoleResponse();
                };

                MoveRoleResponse.toObject = function toObject() {
                    return {};
                };

                MoveRoleResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MoveRoleResponse;
            })();

            v1.GetGuildRolesRequest = (function() {

                function GetGuildRolesRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetGuildRolesRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                GetGuildRolesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    return writer;
                };

                GetGuildRolesRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildRolesRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetGuildRolesRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetGuildRolesRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.GetGuildRolesRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    return message;
                };

                GetGuildRolesRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    return object;
                };

                GetGuildRolesRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetGuildRolesRequest;
            })();

            v1.GetGuildRolesResponse = (function() {

                function GetGuildRolesResponse(properties) {
                    this.roles = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetGuildRolesResponse.prototype.roles = $util.emptyArray;

                GetGuildRolesResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roles != null && message.roles.length)
                        for (var i = 0; i < message.roles.length; ++i)
                            $root.protocol.chat.v1.Role.encode(message.roles[i], writer.uint32(10).fork()).ldelim();
                    return writer;
                };

                GetGuildRolesResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildRolesResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.roles && message.roles.length))
                                message.roles = [];
                            message.roles.push($root.protocol.chat.v1.Role.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetGuildRolesResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetGuildRolesResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetGuildRolesResponse();
                    if (object.roles) {
                        if (!Array.isArray(object.roles))
                            throw TypeError(".protocol.chat.v1.GetGuildRolesResponse.roles: array expected");
                        message.roles = [];
                        for (var i = 0; i < object.roles.length; ++i) {
                            if (typeof object.roles[i] !== "object")
                                throw TypeError(".protocol.chat.v1.GetGuildRolesResponse.roles: object expected");
                            message.roles[i] = $root.protocol.chat.v1.Role.fromObject(object.roles[i]);
                        }
                    }
                    return message;
                };

                GetGuildRolesResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.roles = [];
                    if (message.roles && message.roles.length) {
                        object.roles = [];
                        for (var j = 0; j < message.roles.length; ++j)
                            object.roles[j] = $root.protocol.chat.v1.Role.toObject(message.roles[j], options);
                    }
                    return object;
                };

                GetGuildRolesResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetGuildRolesResponse;
            })();

            v1.AddGuildRoleRequest = (function() {

                function AddGuildRoleRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                AddGuildRoleRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                AddGuildRoleRequest.prototype.role = null;

                AddGuildRoleRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                        $root.protocol.chat.v1.Role.encode(message.role, writer.uint32(18).fork()).ldelim();
                    return writer;
                };

                AddGuildRoleRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.AddGuildRoleRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.role = $root.protocol.chat.v1.Role.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                AddGuildRoleRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.AddGuildRoleRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.AddGuildRoleRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.role != null) {
                        if (typeof object.role !== "object")
                            throw TypeError(".protocol.chat.v1.AddGuildRoleRequest.role: object expected");
                        message.role = $root.protocol.chat.v1.Role.fromObject(object.role);
                    }
                    return message;
                };

                AddGuildRoleRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        object.role = null;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.role != null && message.hasOwnProperty("role"))
                        object.role = $root.protocol.chat.v1.Role.toObject(message.role, options);
                    return object;
                };

                AddGuildRoleRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AddGuildRoleRequest;
            })();

            v1.AddGuildRoleResponse = (function() {

                function AddGuildRoleResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                AddGuildRoleResponse.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                AddGuildRoleResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roleId != null && Object.hasOwnProperty.call(message, "roleId"))
                        writer.uint32(8).uint64(message.roleId);
                    return writer;
                };

                AddGuildRoleResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.AddGuildRoleResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.roleId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                AddGuildRoleResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.AddGuildRoleResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.AddGuildRoleResponse();
                    if (object.roleId != null)
                        if ($util.Long)
                            (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = true;
                        else if (typeof object.roleId === "string")
                            message.roleId = parseInt(object.roleId, 10);
                        else if (typeof object.roleId === "number")
                            message.roleId = object.roleId;
                        else if (typeof object.roleId === "object")
                            message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber(true);
                    return message;
                };

                AddGuildRoleResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.roleId = options.longs === String ? "0" : 0;
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (typeof message.roleId === "number")
                            object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                        else
                            object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber(true) : message.roleId;
                    return object;
                };

                AddGuildRoleResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AddGuildRoleResponse;
            })();

            v1.DeleteGuildRoleRequest = (function() {

                function DeleteGuildRoleRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                DeleteGuildRoleRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                DeleteGuildRoleRequest.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                DeleteGuildRoleRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.roleId != null && Object.hasOwnProperty.call(message, "roleId"))
                        writer.uint32(16).uint64(message.roleId);
                    return writer;
                };

                DeleteGuildRoleRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.DeleteGuildRoleRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.roleId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                DeleteGuildRoleRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.DeleteGuildRoleRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.DeleteGuildRoleRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.roleId != null)
                        if ($util.Long)
                            (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = true;
                        else if (typeof object.roleId === "string")
                            message.roleId = parseInt(object.roleId, 10);
                        else if (typeof object.roleId === "number")
                            message.roleId = object.roleId;
                        else if (typeof object.roleId === "object")
                            message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber(true);
                    return message;
                };

                DeleteGuildRoleRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.roleId = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.roleId != null && message.hasOwnProperty("roleId"))
                        if (typeof message.roleId === "number")
                            object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                        else
                            object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber(true) : message.roleId;
                    return object;
                };

                DeleteGuildRoleRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DeleteGuildRoleRequest;
            })();

            v1.ModifyGuildRoleRequest = (function() {

                function ModifyGuildRoleRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                ModifyGuildRoleRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                ModifyGuildRoleRequest.prototype.role = null;
                ModifyGuildRoleRequest.prototype.modifyName = false;
                ModifyGuildRoleRequest.prototype.modifyColor = false;
                ModifyGuildRoleRequest.prototype.modifyHoist = false;
                ModifyGuildRoleRequest.prototype.modifyPingable = false;

                ModifyGuildRoleRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                        $root.protocol.chat.v1.Role.encode(message.role, writer.uint32(18).fork()).ldelim();
                    if (message.modifyName != null && Object.hasOwnProperty.call(message, "modifyName"))
                        writer.uint32(24).bool(message.modifyName);
                    if (message.modifyColor != null && Object.hasOwnProperty.call(message, "modifyColor"))
                        writer.uint32(32).bool(message.modifyColor);
                    if (message.modifyHoist != null && Object.hasOwnProperty.call(message, "modifyHoist"))
                        writer.uint32(40).bool(message.modifyHoist);
                    if (message.modifyPingable != null && Object.hasOwnProperty.call(message, "modifyPingable"))
                        writer.uint32(48).bool(message.modifyPingable);
                    return writer;
                };

                ModifyGuildRoleRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.ModifyGuildRoleRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.role = $root.protocol.chat.v1.Role.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.modifyName = reader.bool();
                            break;
                        case 4:
                            message.modifyColor = reader.bool();
                            break;
                        case 5:
                            message.modifyHoist = reader.bool();
                            break;
                        case 6:
                            message.modifyPingable = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                ModifyGuildRoleRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.ModifyGuildRoleRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.ModifyGuildRoleRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.role != null) {
                        if (typeof object.role !== "object")
                            throw TypeError(".protocol.chat.v1.ModifyGuildRoleRequest.role: object expected");
                        message.role = $root.protocol.chat.v1.Role.fromObject(object.role);
                    }
                    if (object.modifyName != null)
                        message.modifyName = Boolean(object.modifyName);
                    if (object.modifyColor != null)
                        message.modifyColor = Boolean(object.modifyColor);
                    if (object.modifyHoist != null)
                        message.modifyHoist = Boolean(object.modifyHoist);
                    if (object.modifyPingable != null)
                        message.modifyPingable = Boolean(object.modifyPingable);
                    return message;
                };

                ModifyGuildRoleRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        object.role = null;
                        object.modifyName = false;
                        object.modifyColor = false;
                        object.modifyHoist = false;
                        object.modifyPingable = false;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.role != null && message.hasOwnProperty("role"))
                        object.role = $root.protocol.chat.v1.Role.toObject(message.role, options);
                    if (message.modifyName != null && message.hasOwnProperty("modifyName"))
                        object.modifyName = message.modifyName;
                    if (message.modifyColor != null && message.hasOwnProperty("modifyColor"))
                        object.modifyColor = message.modifyColor;
                    if (message.modifyHoist != null && message.hasOwnProperty("modifyHoist"))
                        object.modifyHoist = message.modifyHoist;
                    if (message.modifyPingable != null && message.hasOwnProperty("modifyPingable"))
                        object.modifyPingable = message.modifyPingable;
                    return object;
                };

                ModifyGuildRoleRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ModifyGuildRoleRequest;
            })();

            v1.ManageUserRolesRequest = (function() {

                function ManageUserRolesRequest(properties) {
                    this.giveRoleIds = [];
                    this.takeRoleIds = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                ManageUserRolesRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                ManageUserRolesRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                ManageUserRolesRequest.prototype.giveRoleIds = $util.emptyArray;
                ManageUserRolesRequest.prototype.takeRoleIds = $util.emptyArray;

                ManageUserRolesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                        writer.uint32(16).uint64(message.userId);
                    if (message.giveRoleIds != null && message.giveRoleIds.length) {
                        writer.uint32(26).fork();
                        for (var i = 0; i < message.giveRoleIds.length; ++i)
                            writer.uint64(message.giveRoleIds[i]);
                        writer.ldelim();
                    }
                    if (message.takeRoleIds != null && message.takeRoleIds.length) {
                        writer.uint32(34).fork();
                        for (var i = 0; i < message.takeRoleIds.length; ++i)
                            writer.uint64(message.takeRoleIds[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                ManageUserRolesRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.ManageUserRolesRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.userId = reader.uint64();
                            break;
                        case 3:
                            if (!(message.giveRoleIds && message.giveRoleIds.length))
                                message.giveRoleIds = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.giveRoleIds.push(reader.uint64());
                            } else
                                message.giveRoleIds.push(reader.uint64());
                            break;
                        case 4:
                            if (!(message.takeRoleIds && message.takeRoleIds.length))
                                message.takeRoleIds = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.takeRoleIds.push(reader.uint64());
                            } else
                                message.takeRoleIds.push(reader.uint64());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                ManageUserRolesRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.ManageUserRolesRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.ManageUserRolesRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.userId != null)
                        if ($util.Long)
                            (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                        else if (typeof object.userId === "string")
                            message.userId = parseInt(object.userId, 10);
                        else if (typeof object.userId === "number")
                            message.userId = object.userId;
                        else if (typeof object.userId === "object")
                            message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
                    if (object.giveRoleIds) {
                        if (!Array.isArray(object.giveRoleIds))
                            throw TypeError(".protocol.chat.v1.ManageUserRolesRequest.giveRoleIds: array expected");
                        message.giveRoleIds = [];
                        for (var i = 0; i < object.giveRoleIds.length; ++i)
                            if ($util.Long)
                                (message.giveRoleIds[i] = $util.Long.fromValue(object.giveRoleIds[i])).unsigned = true;
                            else if (typeof object.giveRoleIds[i] === "string")
                                message.giveRoleIds[i] = parseInt(object.giveRoleIds[i], 10);
                            else if (typeof object.giveRoleIds[i] === "number")
                                message.giveRoleIds[i] = object.giveRoleIds[i];
                            else if (typeof object.giveRoleIds[i] === "object")
                                message.giveRoleIds[i] = new $util.LongBits(object.giveRoleIds[i].low >>> 0, object.giveRoleIds[i].high >>> 0).toNumber(true);
                    }
                    if (object.takeRoleIds) {
                        if (!Array.isArray(object.takeRoleIds))
                            throw TypeError(".protocol.chat.v1.ManageUserRolesRequest.takeRoleIds: array expected");
                        message.takeRoleIds = [];
                        for (var i = 0; i < object.takeRoleIds.length; ++i)
                            if ($util.Long)
                                (message.takeRoleIds[i] = $util.Long.fromValue(object.takeRoleIds[i])).unsigned = true;
                            else if (typeof object.takeRoleIds[i] === "string")
                                message.takeRoleIds[i] = parseInt(object.takeRoleIds[i], 10);
                            else if (typeof object.takeRoleIds[i] === "number")
                                message.takeRoleIds[i] = object.takeRoleIds[i];
                            else if (typeof object.takeRoleIds[i] === "object")
                                message.takeRoleIds[i] = new $util.LongBits(object.takeRoleIds[i].low >>> 0, object.takeRoleIds[i].high >>> 0).toNumber(true);
                    }
                    return message;
                };

                ManageUserRolesRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.giveRoleIds = [];
                        object.takeRoleIds = [];
                    }
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.userId = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (typeof message.userId === "number")
                            object.userId = options.longs === String ? String(message.userId) : message.userId;
                        else
                            object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
                    if (message.giveRoleIds && message.giveRoleIds.length) {
                        object.giveRoleIds = [];
                        for (var j = 0; j < message.giveRoleIds.length; ++j)
                            if (typeof message.giveRoleIds[j] === "number")
                                object.giveRoleIds[j] = options.longs === String ? String(message.giveRoleIds[j]) : message.giveRoleIds[j];
                            else
                                object.giveRoleIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.giveRoleIds[j]) : options.longs === Number ? new $util.LongBits(message.giveRoleIds[j].low >>> 0, message.giveRoleIds[j].high >>> 0).toNumber(true) : message.giveRoleIds[j];
                    }
                    if (message.takeRoleIds && message.takeRoleIds.length) {
                        object.takeRoleIds = [];
                        for (var j = 0; j < message.takeRoleIds.length; ++j)
                            if (typeof message.takeRoleIds[j] === "number")
                                object.takeRoleIds[j] = options.longs === String ? String(message.takeRoleIds[j]) : message.takeRoleIds[j];
                            else
                                object.takeRoleIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.takeRoleIds[j]) : options.longs === Number ? new $util.LongBits(message.takeRoleIds[j].low >>> 0, message.takeRoleIds[j].high >>> 0).toNumber(true) : message.takeRoleIds[j];
                    }
                    return object;
                };

                ManageUserRolesRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ManageUserRolesRequest;
            })();

            v1.GetUserRolesRequest = (function() {

                function GetUserRolesRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetUserRolesRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                GetUserRolesRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                GetUserRolesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                        writer.uint32(16).uint64(message.userId);
                    return writer;
                };

                GetUserRolesRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetUserRolesRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.userId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetUserRolesRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetUserRolesRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.GetUserRolesRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.userId != null)
                        if ($util.Long)
                            (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                        else if (typeof object.userId === "string")
                            message.userId = parseInt(object.userId, 10);
                        else if (typeof object.userId === "number")
                            message.userId = object.userId;
                        else if (typeof object.userId === "object")
                            message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
                    return message;
                };

                GetUserRolesRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.userId = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (typeof message.userId === "number")
                            object.userId = options.longs === String ? String(message.userId) : message.userId;
                        else
                            object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
                    return object;
                };

                GetUserRolesRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetUserRolesRequest;
            })();

            v1.GetUserRolesResponse = (function() {

                function GetUserRolesResponse(properties) {
                    this.roles = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetUserRolesResponse.prototype.roles = $util.emptyArray;

                GetUserRolesResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.roles != null && message.roles.length) {
                        writer.uint32(10).fork();
                        for (var i = 0; i < message.roles.length; ++i)
                            writer.uint64(message.roles[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                GetUserRolesResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetUserRolesResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.roles && message.roles.length))
                                message.roles = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.roles.push(reader.uint64());
                            } else
                                message.roles.push(reader.uint64());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetUserRolesResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetUserRolesResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetUserRolesResponse();
                    if (object.roles) {
                        if (!Array.isArray(object.roles))
                            throw TypeError(".protocol.chat.v1.GetUserRolesResponse.roles: array expected");
                        message.roles = [];
                        for (var i = 0; i < object.roles.length; ++i)
                            if ($util.Long)
                                (message.roles[i] = $util.Long.fromValue(object.roles[i])).unsigned = true;
                            else if (typeof object.roles[i] === "string")
                                message.roles[i] = parseInt(object.roles[i], 10);
                            else if (typeof object.roles[i] === "number")
                                message.roles[i] = object.roles[i];
                            else if (typeof object.roles[i] === "object")
                                message.roles[i] = new $util.LongBits(object.roles[i].low >>> 0, object.roles[i].high >>> 0).toNumber(true);
                    }
                    return message;
                };

                GetUserRolesResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.roles = [];
                    if (message.roles && message.roles.length) {
                        object.roles = [];
                        for (var j = 0; j < message.roles.length; ++j)
                            if (typeof message.roles[j] === "number")
                                object.roles[j] = options.longs === String ? String(message.roles[j]) : message.roles[j];
                            else
                                object.roles[j] = options.longs === String ? $util.Long.prototype.toString.call(message.roles[j]) : options.longs === Number ? new $util.LongBits(message.roles[j].low >>> 0, message.roles[j].high >>> 0).toNumber(true) : message.roles[j];
                    }
                    return object;
                };

                GetUserRolesResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetUserRolesResponse;
            })();

            v1.CreateGuildRequest = (function() {

                function CreateGuildRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                CreateGuildRequest.prototype.metadata = null;
                CreateGuildRequest.prototype.guildName = "";
                CreateGuildRequest.prototype.pictureUrl = "";

                CreateGuildRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildName != null && Object.hasOwnProperty.call(message, "guildName"))
                        writer.uint32(10).string(message.guildName);
                    if (message.pictureUrl != null && Object.hasOwnProperty.call(message, "pictureUrl"))
                        writer.uint32(18).string(message.pictureUrl);
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        $root.protocol.harmonytypes.v1.Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
                    return writer;
                };

                CreateGuildRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.CreateGuildRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 3:
                            message.metadata = $root.protocol.harmonytypes.v1.Metadata.decode(reader, reader.uint32());
                            break;
                        case 1:
                            message.guildName = reader.string();
                            break;
                        case 2:
                            message.pictureUrl = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                CreateGuildRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.CreateGuildRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.CreateGuildRequest();
                    if (object.metadata != null) {
                        if (typeof object.metadata !== "object")
                            throw TypeError(".protocol.chat.v1.CreateGuildRequest.metadata: object expected");
                        message.metadata = $root.protocol.harmonytypes.v1.Metadata.fromObject(object.metadata);
                    }
                    if (object.guildName != null)
                        message.guildName = String(object.guildName);
                    if (object.pictureUrl != null)
                        message.pictureUrl = String(object.pictureUrl);
                    return message;
                };

                CreateGuildRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.guildName = "";
                        object.pictureUrl = "";
                        object.metadata = null;
                    }
                    if (message.guildName != null && message.hasOwnProperty("guildName"))
                        object.guildName = message.guildName;
                    if (message.pictureUrl != null && message.hasOwnProperty("pictureUrl"))
                        object.pictureUrl = message.pictureUrl;
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = $root.protocol.harmonytypes.v1.Metadata.toObject(message.metadata, options);
                    return object;
                };

                CreateGuildRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CreateGuildRequest;
            })();

            v1.CreateGuildResponse = (function() {

                function CreateGuildResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                CreateGuildResponse.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                CreateGuildResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    return writer;
                };

                CreateGuildResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.CreateGuildResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                CreateGuildResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.CreateGuildResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.CreateGuildResponse();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    return message;
                };

                CreateGuildResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    return object;
                };

                CreateGuildResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CreateGuildResponse;
            })();

            v1.CreateInviteRequest = (function() {

                function CreateInviteRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                CreateInviteRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                CreateInviteRequest.prototype.name = "";
                CreateInviteRequest.prototype.possibleUses = 0;

                CreateInviteRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(18).string(message.name);
                    if (message.possibleUses != null && Object.hasOwnProperty.call(message, "possibleUses"))
                        writer.uint32(24).int32(message.possibleUses);
                    return writer;
                };

                CreateInviteRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.CreateInviteRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.possibleUses = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                CreateInviteRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.CreateInviteRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.CreateInviteRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.possibleUses != null)
                        message.possibleUses = object.possibleUses | 0;
                    return message;
                };

                CreateInviteRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        object.name = "";
                        object.possibleUses = 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.possibleUses != null && message.hasOwnProperty("possibleUses"))
                        object.possibleUses = message.possibleUses;
                    return object;
                };

                CreateInviteRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CreateInviteRequest;
            })();

            v1.CreateInviteResponse = (function() {

                function CreateInviteResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                CreateInviteResponse.prototype.name = "";

                CreateInviteResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(10).string(message.name);
                    return writer;
                };

                CreateInviteResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.CreateInviteResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                CreateInviteResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.CreateInviteResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.CreateInviteResponse();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };

                CreateInviteResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };

                CreateInviteResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CreateInviteResponse;
            })();

            v1.GetGuildListRequest = (function() {

                function GetGuildListRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetGuildListRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                GetGuildListRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildListRequest();
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

                GetGuildListRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetGuildListRequest)
                        return object;
                    return new $root.protocol.chat.v1.GetGuildListRequest();
                };

                GetGuildListRequest.toObject = function toObject() {
                    return {};
                };

                GetGuildListRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetGuildListRequest;
            })();

            v1.GetGuildListResponse = (function() {

                function GetGuildListResponse(properties) {
                    this.guilds = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetGuildListResponse.prototype.guilds = $util.emptyArray;

                GetGuildListResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guilds != null && message.guilds.length)
                        for (var i = 0; i < message.guilds.length; ++i)
                            $root.protocol.chat.v1.GetGuildListResponse.GuildListEntry.encode(message.guilds[i], writer.uint32(10).fork()).ldelim();
                    return writer;
                };

                GetGuildListResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildListResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.guilds && message.guilds.length))
                                message.guilds = [];
                            message.guilds.push($root.protocol.chat.v1.GetGuildListResponse.GuildListEntry.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetGuildListResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetGuildListResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetGuildListResponse();
                    if (object.guilds) {
                        if (!Array.isArray(object.guilds))
                            throw TypeError(".protocol.chat.v1.GetGuildListResponse.guilds: array expected");
                        message.guilds = [];
                        for (var i = 0; i < object.guilds.length; ++i) {
                            if (typeof object.guilds[i] !== "object")
                                throw TypeError(".protocol.chat.v1.GetGuildListResponse.guilds: object expected");
                            message.guilds[i] = $root.protocol.chat.v1.GetGuildListResponse.GuildListEntry.fromObject(object.guilds[i]);
                        }
                    }
                    return message;
                };

                GetGuildListResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.guilds = [];
                    if (message.guilds && message.guilds.length) {
                        object.guilds = [];
                        for (var j = 0; j < message.guilds.length; ++j)
                            object.guilds[j] = $root.protocol.chat.v1.GetGuildListResponse.GuildListEntry.toObject(message.guilds[j], options);
                    }
                    return object;
                };

                GetGuildListResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                GetGuildListResponse.GuildListEntry = (function() {

                    function GuildListEntry(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    GuildListEntry.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    GuildListEntry.prototype.host = "";

                    GuildListEntry.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(8).uint64(message.guildId);
                        if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                            writer.uint32(18).string(message.host);
                        return writer;
                    };

                    GuildListEntry.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildListResponse.GuildListEntry();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.guildId = reader.uint64();
                                break;
                            case 2:
                                message.host = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    GuildListEntry.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.GetGuildListResponse.GuildListEntry)
                            return object;
                        var message = new $root.protocol.chat.v1.GetGuildListResponse.GuildListEntry();
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        if (object.host != null)
                            message.host = String(object.host);
                        return message;
                    };

                    GuildListEntry.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                            object.host = "";
                        }
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        if (message.host != null && message.hasOwnProperty("host"))
                            object.host = message.host;
                        return object;
                    };

                    GuildListEntry.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GuildListEntry;
                })();

                return GetGuildListResponse;
            })();

            v1.GetGuildRequest = (function() {

                function GetGuildRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetGuildRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                GetGuildRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    return writer;
                };

                GetGuildRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetGuildRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetGuildRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.GetGuildRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    return message;
                };

                GetGuildRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    return object;
                };

                GetGuildRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetGuildRequest;
            })();

            v1.GetGuildResponse = (function() {

                function GetGuildResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetGuildResponse.prototype.metadata = null;
                GetGuildResponse.prototype.guildName = "";
                GetGuildResponse.prototype.guildOwner = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                GetGuildResponse.prototype.guildPicture = "";

                GetGuildResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildName != null && Object.hasOwnProperty.call(message, "guildName"))
                        writer.uint32(10).string(message.guildName);
                    if (message.guildOwner != null && Object.hasOwnProperty.call(message, "guildOwner"))
                        writer.uint32(16).uint64(message.guildOwner);
                    if (message.guildPicture != null && Object.hasOwnProperty.call(message, "guildPicture"))
                        writer.uint32(26).string(message.guildPicture);
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        $root.protocol.harmonytypes.v1.Metadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
                    return writer;
                };

                GetGuildResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 4:
                            message.metadata = $root.protocol.harmonytypes.v1.Metadata.decode(reader, reader.uint32());
                            break;
                        case 1:
                            message.guildName = reader.string();
                            break;
                        case 2:
                            message.guildOwner = reader.uint64();
                            break;
                        case 3:
                            message.guildPicture = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetGuildResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetGuildResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetGuildResponse();
                    if (object.metadata != null) {
                        if (typeof object.metadata !== "object")
                            throw TypeError(".protocol.chat.v1.GetGuildResponse.metadata: object expected");
                        message.metadata = $root.protocol.harmonytypes.v1.Metadata.fromObject(object.metadata);
                    }
                    if (object.guildName != null)
                        message.guildName = String(object.guildName);
                    if (object.guildOwner != null)
                        if ($util.Long)
                            (message.guildOwner = $util.Long.fromValue(object.guildOwner)).unsigned = true;
                        else if (typeof object.guildOwner === "string")
                            message.guildOwner = parseInt(object.guildOwner, 10);
                        else if (typeof object.guildOwner === "number")
                            message.guildOwner = object.guildOwner;
                        else if (typeof object.guildOwner === "object")
                            message.guildOwner = new $util.LongBits(object.guildOwner.low >>> 0, object.guildOwner.high >>> 0).toNumber(true);
                    if (object.guildPicture != null)
                        message.guildPicture = String(object.guildPicture);
                    return message;
                };

                GetGuildResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.guildName = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildOwner = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildOwner = options.longs === String ? "0" : 0;
                        object.guildPicture = "";
                        object.metadata = null;
                    }
                    if (message.guildName != null && message.hasOwnProperty("guildName"))
                        object.guildName = message.guildName;
                    if (message.guildOwner != null && message.hasOwnProperty("guildOwner"))
                        if (typeof message.guildOwner === "number")
                            object.guildOwner = options.longs === String ? String(message.guildOwner) : message.guildOwner;
                        else
                            object.guildOwner = options.longs === String ? $util.Long.prototype.toString.call(message.guildOwner) : options.longs === Number ? new $util.LongBits(message.guildOwner.low >>> 0, message.guildOwner.high >>> 0).toNumber(true) : message.guildOwner;
                    if (message.guildPicture != null && message.hasOwnProperty("guildPicture"))
                        object.guildPicture = message.guildPicture;
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = $root.protocol.harmonytypes.v1.Metadata.toObject(message.metadata, options);
                    return object;
                };

                GetGuildResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetGuildResponse;
            })();

            v1.GetGuildInvitesRequest = (function() {

                function GetGuildInvitesRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetGuildInvitesRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                GetGuildInvitesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    return writer;
                };

                GetGuildInvitesRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildInvitesRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetGuildInvitesRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetGuildInvitesRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.GetGuildInvitesRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    return message;
                };

                GetGuildInvitesRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    return object;
                };

                GetGuildInvitesRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetGuildInvitesRequest;
            })();

            v1.GetGuildInvitesResponse = (function() {

                function GetGuildInvitesResponse(properties) {
                    this.invites = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetGuildInvitesResponse.prototype.invites = $util.emptyArray;

                GetGuildInvitesResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.invites != null && message.invites.length)
                        for (var i = 0; i < message.invites.length; ++i)
                            $root.protocol.chat.v1.GetGuildInvitesResponse.Invite.encode(message.invites[i], writer.uint32(10).fork()).ldelim();
                    return writer;
                };

                GetGuildInvitesResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildInvitesResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.invites && message.invites.length))
                                message.invites = [];
                            message.invites.push($root.protocol.chat.v1.GetGuildInvitesResponse.Invite.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetGuildInvitesResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetGuildInvitesResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetGuildInvitesResponse();
                    if (object.invites) {
                        if (!Array.isArray(object.invites))
                            throw TypeError(".protocol.chat.v1.GetGuildInvitesResponse.invites: array expected");
                        message.invites = [];
                        for (var i = 0; i < object.invites.length; ++i) {
                            if (typeof object.invites[i] !== "object")
                                throw TypeError(".protocol.chat.v1.GetGuildInvitesResponse.invites: object expected");
                            message.invites[i] = $root.protocol.chat.v1.GetGuildInvitesResponse.Invite.fromObject(object.invites[i]);
                        }
                    }
                    return message;
                };

                GetGuildInvitesResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.invites = [];
                    if (message.invites && message.invites.length) {
                        object.invites = [];
                        for (var j = 0; j < message.invites.length; ++j)
                            object.invites[j] = $root.protocol.chat.v1.GetGuildInvitesResponse.Invite.toObject(message.invites[j], options);
                    }
                    return object;
                };

                GetGuildInvitesResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                GetGuildInvitesResponse.Invite = (function() {

                    function Invite(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Invite.prototype.inviteId = "";
                    Invite.prototype.possibleUses = 0;
                    Invite.prototype.useCount = 0;

                    Invite.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.inviteId != null && Object.hasOwnProperty.call(message, "inviteId"))
                            writer.uint32(10).string(message.inviteId);
                        if (message.possibleUses != null && Object.hasOwnProperty.call(message, "possibleUses"))
                            writer.uint32(16).int32(message.possibleUses);
                        if (message.useCount != null && Object.hasOwnProperty.call(message, "useCount"))
                            writer.uint32(24).int32(message.useCount);
                        return writer;
                    };

                    Invite.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildInvitesResponse.Invite();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.inviteId = reader.string();
                                break;
                            case 2:
                                message.possibleUses = reader.int32();
                                break;
                            case 3:
                                message.useCount = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Invite.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.GetGuildInvitesResponse.Invite)
                            return object;
                        var message = new $root.protocol.chat.v1.GetGuildInvitesResponse.Invite();
                        if (object.inviteId != null)
                            message.inviteId = String(object.inviteId);
                        if (object.possibleUses != null)
                            message.possibleUses = object.possibleUses | 0;
                        if (object.useCount != null)
                            message.useCount = object.useCount | 0;
                        return message;
                    };

                    Invite.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.inviteId = "";
                            object.possibleUses = 0;
                            object.useCount = 0;
                        }
                        if (message.inviteId != null && message.hasOwnProperty("inviteId"))
                            object.inviteId = message.inviteId;
                        if (message.possibleUses != null && message.hasOwnProperty("possibleUses"))
                            object.possibleUses = message.possibleUses;
                        if (message.useCount != null && message.hasOwnProperty("useCount"))
                            object.useCount = message.useCount;
                        return object;
                    };

                    Invite.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Invite;
                })();

                return GetGuildInvitesResponse;
            })();

            v1.GetGuildMembersRequest = (function() {

                function GetGuildMembersRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetGuildMembersRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                GetGuildMembersRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    return writer;
                };

                GetGuildMembersRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildMembersRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetGuildMembersRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetGuildMembersRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.GetGuildMembersRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    return message;
                };

                GetGuildMembersRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    return object;
                };

                GetGuildMembersRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetGuildMembersRequest;
            })();

            v1.GetGuildMembersResponse = (function() {

                function GetGuildMembersResponse(properties) {
                    this.members = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetGuildMembersResponse.prototype.members = $util.emptyArray;

                GetGuildMembersResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.members != null && message.members.length) {
                        writer.uint32(10).fork();
                        for (var i = 0; i < message.members.length; ++i)
                            writer.uint64(message.members[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                GetGuildMembersResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildMembersResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.members && message.members.length))
                                message.members = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.members.push(reader.uint64());
                            } else
                                message.members.push(reader.uint64());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetGuildMembersResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetGuildMembersResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetGuildMembersResponse();
                    if (object.members) {
                        if (!Array.isArray(object.members))
                            throw TypeError(".protocol.chat.v1.GetGuildMembersResponse.members: array expected");
                        message.members = [];
                        for (var i = 0; i < object.members.length; ++i)
                            if ($util.Long)
                                (message.members[i] = $util.Long.fromValue(object.members[i])).unsigned = true;
                            else if (typeof object.members[i] === "string")
                                message.members[i] = parseInt(object.members[i], 10);
                            else if (typeof object.members[i] === "number")
                                message.members[i] = object.members[i];
                            else if (typeof object.members[i] === "object")
                                message.members[i] = new $util.LongBits(object.members[i].low >>> 0, object.members[i].high >>> 0).toNumber(true);
                    }
                    return message;
                };

                GetGuildMembersResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.members = [];
                    if (message.members && message.members.length) {
                        object.members = [];
                        for (var j = 0; j < message.members.length; ++j)
                            if (typeof message.members[j] === "number")
                                object.members[j] = options.longs === String ? String(message.members[j]) : message.members[j];
                            else
                                object.members[j] = options.longs === String ? $util.Long.prototype.toString.call(message.members[j]) : options.longs === Number ? new $util.LongBits(message.members[j].low >>> 0, message.members[j].high >>> 0).toNumber(true) : message.members[j];
                    }
                    return object;
                };

                GetGuildMembersResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetGuildMembersResponse;
            })();

            v1.UpdateGuildInformationRequest = (function() {

                function UpdateGuildInformationRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                UpdateGuildInformationRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                UpdateGuildInformationRequest.prototype.newGuildName = "";
                UpdateGuildInformationRequest.prototype.updateGuildName = false;
                UpdateGuildInformationRequest.prototype.newGuildPicture = "";
                UpdateGuildInformationRequest.prototype.updateGuildPicture = false;
                UpdateGuildInformationRequest.prototype.metadata = null;
                UpdateGuildInformationRequest.prototype.updateMetadata = false;

                UpdateGuildInformationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.newGuildName != null && Object.hasOwnProperty.call(message, "newGuildName"))
                        writer.uint32(18).string(message.newGuildName);
                    if (message.updateGuildName != null && Object.hasOwnProperty.call(message, "updateGuildName"))
                        writer.uint32(24).bool(message.updateGuildName);
                    if (message.newGuildPicture != null && Object.hasOwnProperty.call(message, "newGuildPicture"))
                        writer.uint32(34).string(message.newGuildPicture);
                    if (message.updateGuildPicture != null && Object.hasOwnProperty.call(message, "updateGuildPicture"))
                        writer.uint32(40).bool(message.updateGuildPicture);
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        $root.protocol.harmonytypes.v1.Metadata.encode(message.metadata, writer.uint32(50).fork()).ldelim();
                    if (message.updateMetadata != null && Object.hasOwnProperty.call(message, "updateMetadata"))
                        writer.uint32(56).bool(message.updateMetadata);
                    return writer;
                };

                UpdateGuildInformationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.UpdateGuildInformationRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.newGuildName = reader.string();
                            break;
                        case 3:
                            message.updateGuildName = reader.bool();
                            break;
                        case 4:
                            message.newGuildPicture = reader.string();
                            break;
                        case 5:
                            message.updateGuildPicture = reader.bool();
                            break;
                        case 6:
                            message.metadata = $root.protocol.harmonytypes.v1.Metadata.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.updateMetadata = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                UpdateGuildInformationRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.UpdateGuildInformationRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.UpdateGuildInformationRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.newGuildName != null)
                        message.newGuildName = String(object.newGuildName);
                    if (object.updateGuildName != null)
                        message.updateGuildName = Boolean(object.updateGuildName);
                    if (object.newGuildPicture != null)
                        message.newGuildPicture = String(object.newGuildPicture);
                    if (object.updateGuildPicture != null)
                        message.updateGuildPicture = Boolean(object.updateGuildPicture);
                    if (object.metadata != null) {
                        if (typeof object.metadata !== "object")
                            throw TypeError(".protocol.chat.v1.UpdateGuildInformationRequest.metadata: object expected");
                        message.metadata = $root.protocol.harmonytypes.v1.Metadata.fromObject(object.metadata);
                    }
                    if (object.updateMetadata != null)
                        message.updateMetadata = Boolean(object.updateMetadata);
                    return message;
                };

                UpdateGuildInformationRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        object.newGuildName = "";
                        object.updateGuildName = false;
                        object.newGuildPicture = "";
                        object.updateGuildPicture = false;
                        object.metadata = null;
                        object.updateMetadata = false;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.newGuildName != null && message.hasOwnProperty("newGuildName"))
                        object.newGuildName = message.newGuildName;
                    if (message.updateGuildName != null && message.hasOwnProperty("updateGuildName"))
                        object.updateGuildName = message.updateGuildName;
                    if (message.newGuildPicture != null && message.hasOwnProperty("newGuildPicture"))
                        object.newGuildPicture = message.newGuildPicture;
                    if (message.updateGuildPicture != null && message.hasOwnProperty("updateGuildPicture"))
                        object.updateGuildPicture = message.updateGuildPicture;
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = $root.protocol.harmonytypes.v1.Metadata.toObject(message.metadata, options);
                    if (message.updateMetadata != null && message.hasOwnProperty("updateMetadata"))
                        object.updateMetadata = message.updateMetadata;
                    return object;
                };

                UpdateGuildInformationRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UpdateGuildInformationRequest;
            })();

            v1.DeleteGuildRequest = (function() {

                function DeleteGuildRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                DeleteGuildRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                DeleteGuildRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    return writer;
                };

                DeleteGuildRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.DeleteGuildRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                DeleteGuildRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.DeleteGuildRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.DeleteGuildRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    return message;
                };

                DeleteGuildRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    return object;
                };

                DeleteGuildRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DeleteGuildRequest;
            })();

            v1.DeleteInviteRequest = (function() {

                function DeleteInviteRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                DeleteInviteRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                DeleteInviteRequest.prototype.inviteId = "";

                DeleteInviteRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.inviteId != null && Object.hasOwnProperty.call(message, "inviteId"))
                        writer.uint32(18).string(message.inviteId);
                    return writer;
                };

                DeleteInviteRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.DeleteInviteRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.inviteId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                DeleteInviteRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.DeleteInviteRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.DeleteInviteRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.inviteId != null)
                        message.inviteId = String(object.inviteId);
                    return message;
                };

                DeleteInviteRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        object.inviteId = "";
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.inviteId != null && message.hasOwnProperty("inviteId"))
                        object.inviteId = message.inviteId;
                    return object;
                };

                DeleteInviteRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DeleteInviteRequest;
            })();

            v1.JoinGuildRequest = (function() {

                function JoinGuildRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                JoinGuildRequest.prototype.inviteId = "";

                JoinGuildRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.inviteId != null && Object.hasOwnProperty.call(message, "inviteId"))
                        writer.uint32(10).string(message.inviteId);
                    return writer;
                };

                JoinGuildRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.JoinGuildRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.inviteId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                JoinGuildRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.JoinGuildRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.JoinGuildRequest();
                    if (object.inviteId != null)
                        message.inviteId = String(object.inviteId);
                    return message;
                };

                JoinGuildRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.inviteId = "";
                    if (message.inviteId != null && message.hasOwnProperty("inviteId"))
                        object.inviteId = message.inviteId;
                    return object;
                };

                JoinGuildRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return JoinGuildRequest;
            })();

            v1.JoinGuildResponse = (function() {

                function JoinGuildResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                JoinGuildResponse.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                JoinGuildResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    return writer;
                };

                JoinGuildResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.JoinGuildResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                JoinGuildResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.JoinGuildResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.JoinGuildResponse();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    return message;
                };

                JoinGuildResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    return object;
                };

                JoinGuildResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return JoinGuildResponse;
            })();

            v1.PreviewGuildRequest = (function() {

                function PreviewGuildRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                PreviewGuildRequest.prototype.inviteId = "";

                PreviewGuildRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.inviteId != null && Object.hasOwnProperty.call(message, "inviteId"))
                        writer.uint32(10).string(message.inviteId);
                    return writer;
                };

                PreviewGuildRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.PreviewGuildRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.inviteId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                PreviewGuildRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.PreviewGuildRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.PreviewGuildRequest();
                    if (object.inviteId != null)
                        message.inviteId = String(object.inviteId);
                    return message;
                };

                PreviewGuildRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.inviteId = "";
                    if (message.inviteId != null && message.hasOwnProperty("inviteId"))
                        object.inviteId = message.inviteId;
                    return object;
                };

                PreviewGuildRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PreviewGuildRequest;
            })();

            v1.PreviewGuildResponse = (function() {

                function PreviewGuildResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                PreviewGuildResponse.prototype.name = "";
                PreviewGuildResponse.prototype.avatar = "";
                PreviewGuildResponse.prototype.memberCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                PreviewGuildResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(10).string(message.name);
                    if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                        writer.uint32(18).string(message.avatar);
                    if (message.memberCount != null && Object.hasOwnProperty.call(message, "memberCount"))
                        writer.uint32(24).uint64(message.memberCount);
                    return writer;
                };

                PreviewGuildResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.PreviewGuildResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.avatar = reader.string();
                            break;
                        case 3:
                            message.memberCount = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                PreviewGuildResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.PreviewGuildResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.PreviewGuildResponse();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.avatar != null)
                        message.avatar = String(object.avatar);
                    if (object.memberCount != null)
                        if ($util.Long)
                            (message.memberCount = $util.Long.fromValue(object.memberCount)).unsigned = true;
                        else if (typeof object.memberCount === "string")
                            message.memberCount = parseInt(object.memberCount, 10);
                        else if (typeof object.memberCount === "number")
                            message.memberCount = object.memberCount;
                        else if (typeof object.memberCount === "object")
                            message.memberCount = new $util.LongBits(object.memberCount.low >>> 0, object.memberCount.high >>> 0).toNumber(true);
                    return message;
                };

                PreviewGuildResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.avatar = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.memberCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.memberCount = options.longs === String ? "0" : 0;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.avatar != null && message.hasOwnProperty("avatar"))
                        object.avatar = message.avatar;
                    if (message.memberCount != null && message.hasOwnProperty("memberCount"))
                        if (typeof message.memberCount === "number")
                            object.memberCount = options.longs === String ? String(message.memberCount) : message.memberCount;
                        else
                            object.memberCount = options.longs === String ? $util.Long.prototype.toString.call(message.memberCount) : options.longs === Number ? new $util.LongBits(message.memberCount.low >>> 0, message.memberCount.high >>> 0).toNumber(true) : message.memberCount;
                    return object;
                };

                PreviewGuildResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PreviewGuildResponse;
            })();

            v1.LeaveGuildRequest = (function() {

                function LeaveGuildRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                LeaveGuildRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                LeaveGuildRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    return writer;
                };

                LeaveGuildRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.LeaveGuildRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                LeaveGuildRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.LeaveGuildRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.LeaveGuildRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    return message;
                };

                LeaveGuildRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    return object;
                };

                LeaveGuildRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return LeaveGuildRequest;
            })();

            v1.AddGuildToGuildListRequest = (function() {

                function AddGuildToGuildListRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                AddGuildToGuildListRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                AddGuildToGuildListRequest.prototype.homeserver = "";

                AddGuildToGuildListRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.homeserver != null && Object.hasOwnProperty.call(message, "homeserver"))
                        writer.uint32(18).string(message.homeserver);
                    return writer;
                };

                AddGuildToGuildListRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.AddGuildToGuildListRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.homeserver = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                AddGuildToGuildListRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.AddGuildToGuildListRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.AddGuildToGuildListRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.homeserver != null)
                        message.homeserver = String(object.homeserver);
                    return message;
                };

                AddGuildToGuildListRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        object.homeserver = "";
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.homeserver != null && message.hasOwnProperty("homeserver"))
                        object.homeserver = message.homeserver;
                    return object;
                };

                AddGuildToGuildListRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AddGuildToGuildListRequest;
            })();

            v1.AddGuildToGuildListResponse = (function() {

                function AddGuildToGuildListResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                AddGuildToGuildListResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                AddGuildToGuildListResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.AddGuildToGuildListResponse();
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

                AddGuildToGuildListResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.AddGuildToGuildListResponse)
                        return object;
                    return new $root.protocol.chat.v1.AddGuildToGuildListResponse();
                };

                AddGuildToGuildListResponse.toObject = function toObject() {
                    return {};
                };

                AddGuildToGuildListResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AddGuildToGuildListResponse;
            })();

            v1.RemoveGuildFromGuildListRequest = (function() {

                function RemoveGuildFromGuildListRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                RemoveGuildFromGuildListRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                RemoveGuildFromGuildListRequest.prototype.homeserver = "";

                RemoveGuildFromGuildListRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.homeserver != null && Object.hasOwnProperty.call(message, "homeserver"))
                        writer.uint32(18).string(message.homeserver);
                    return writer;
                };

                RemoveGuildFromGuildListRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.RemoveGuildFromGuildListRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.homeserver = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                RemoveGuildFromGuildListRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.RemoveGuildFromGuildListRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.RemoveGuildFromGuildListRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.homeserver != null)
                        message.homeserver = String(object.homeserver);
                    return message;
                };

                RemoveGuildFromGuildListRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        object.homeserver = "";
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.homeserver != null && message.hasOwnProperty("homeserver"))
                        object.homeserver = message.homeserver;
                    return object;
                };

                RemoveGuildFromGuildListRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RemoveGuildFromGuildListRequest;
            })();

            v1.RemoveGuildFromGuildListResponse = (function() {

                function RemoveGuildFromGuildListResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                RemoveGuildFromGuildListResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                RemoveGuildFromGuildListResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.RemoveGuildFromGuildListResponse();
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

                RemoveGuildFromGuildListResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.RemoveGuildFromGuildListResponse)
                        return object;
                    return new $root.protocol.chat.v1.RemoveGuildFromGuildListResponse();
                };

                RemoveGuildFromGuildListResponse.toObject = function toObject() {
                    return {};
                };

                RemoveGuildFromGuildListResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return RemoveGuildFromGuildListResponse;
            })();

            v1.BanUserRequest = (function() {

                function BanUserRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                BanUserRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                BanUserRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                BanUserRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                        writer.uint32(16).uint64(message.userId);
                    return writer;
                };

                BanUserRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.BanUserRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.userId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                BanUserRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.BanUserRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.BanUserRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.userId != null)
                        if ($util.Long)
                            (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                        else if (typeof object.userId === "string")
                            message.userId = parseInt(object.userId, 10);
                        else if (typeof object.userId === "number")
                            message.userId = object.userId;
                        else if (typeof object.userId === "object")
                            message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
                    return message;
                };

                BanUserRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.userId = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (typeof message.userId === "number")
                            object.userId = options.longs === String ? String(message.userId) : message.userId;
                        else
                            object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
                    return object;
                };

                BanUserRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return BanUserRequest;
            })();

            v1.KickUserRequest = (function() {

                function KickUserRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                KickUserRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                KickUserRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                KickUserRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                        writer.uint32(16).uint64(message.userId);
                    return writer;
                };

                KickUserRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.KickUserRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.userId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                KickUserRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.KickUserRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.KickUserRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.userId != null)
                        if ($util.Long)
                            (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                        else if (typeof object.userId === "string")
                            message.userId = parseInt(object.userId, 10);
                        else if (typeof object.userId === "number")
                            message.userId = object.userId;
                        else if (typeof object.userId === "object")
                            message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
                    return message;
                };

                KickUserRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.userId = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (typeof message.userId === "number")
                            object.userId = options.longs === String ? String(message.userId) : message.userId;
                        else
                            object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
                    return object;
                };

                KickUserRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return KickUserRequest;
            })();

            v1.UnbanUserRequest = (function() {

                function UnbanUserRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                UnbanUserRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                UnbanUserRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                UnbanUserRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                        writer.uint32(16).uint64(message.userId);
                    return writer;
                };

                UnbanUserRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.UnbanUserRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.userId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                UnbanUserRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.UnbanUserRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.UnbanUserRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.userId != null)
                        if ($util.Long)
                            (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                        else if (typeof object.userId === "string")
                            message.userId = parseInt(object.userId, 10);
                        else if (typeof object.userId === "number")
                            message.userId = object.userId;
                        else if (typeof object.userId === "object")
                            message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
                    return message;
                };

                UnbanUserRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.userId = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (typeof message.userId === "number")
                            object.userId = options.longs === String ? String(message.userId) : message.userId;
                        else
                            object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
                    return object;
                };

                UnbanUserRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UnbanUserRequest;
            })();

            v1.CreateEmotePackRequest = (function() {

                function CreateEmotePackRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                CreateEmotePackRequest.prototype.packName = "";

                CreateEmotePackRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.packName != null && Object.hasOwnProperty.call(message, "packName"))
                        writer.uint32(10).string(message.packName);
                    return writer;
                };

                CreateEmotePackRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.CreateEmotePackRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.packName = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                CreateEmotePackRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.CreateEmotePackRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.CreateEmotePackRequest();
                    if (object.packName != null)
                        message.packName = String(object.packName);
                    return message;
                };

                CreateEmotePackRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.packName = "";
                    if (message.packName != null && message.hasOwnProperty("packName"))
                        object.packName = message.packName;
                    return object;
                };

                CreateEmotePackRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CreateEmotePackRequest;
            })();

            v1.CreateEmotePackResponse = (function() {

                function CreateEmotePackResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                CreateEmotePackResponse.prototype.packId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                CreateEmotePackResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.packId != null && Object.hasOwnProperty.call(message, "packId"))
                        writer.uint32(8).uint64(message.packId);
                    return writer;
                };

                CreateEmotePackResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.CreateEmotePackResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.packId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                CreateEmotePackResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.CreateEmotePackResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.CreateEmotePackResponse();
                    if (object.packId != null)
                        if ($util.Long)
                            (message.packId = $util.Long.fromValue(object.packId)).unsigned = true;
                        else if (typeof object.packId === "string")
                            message.packId = parseInt(object.packId, 10);
                        else if (typeof object.packId === "number")
                            message.packId = object.packId;
                        else if (typeof object.packId === "object")
                            message.packId = new $util.LongBits(object.packId.low >>> 0, object.packId.high >>> 0).toNumber(true);
                    return message;
                };

                CreateEmotePackResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.packId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.packId = options.longs === String ? "0" : 0;
                    if (message.packId != null && message.hasOwnProperty("packId"))
                        if (typeof message.packId === "number")
                            object.packId = options.longs === String ? String(message.packId) : message.packId;
                        else
                            object.packId = options.longs === String ? $util.Long.prototype.toString.call(message.packId) : options.longs === Number ? new $util.LongBits(message.packId.low >>> 0, message.packId.high >>> 0).toNumber(true) : message.packId;
                    return object;
                };

                CreateEmotePackResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CreateEmotePackResponse;
            })();

            v1.GetEmotePacksRequest = (function() {

                function GetEmotePacksRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetEmotePacksRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                GetEmotePacksRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetEmotePacksRequest();
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

                GetEmotePacksRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetEmotePacksRequest)
                        return object;
                    return new $root.protocol.chat.v1.GetEmotePacksRequest();
                };

                GetEmotePacksRequest.toObject = function toObject() {
                    return {};
                };

                GetEmotePacksRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetEmotePacksRequest;
            })();

            v1.GetEmotePacksResponse = (function() {

                function GetEmotePacksResponse(properties) {
                    this.packs = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetEmotePacksResponse.prototype.packs = $util.emptyArray;

                GetEmotePacksResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.packs != null && message.packs.length)
                        for (var i = 0; i < message.packs.length; ++i)
                            $root.protocol.chat.v1.GetEmotePacksResponse.EmotePack.encode(message.packs[i], writer.uint32(10).fork()).ldelim();
                    return writer;
                };

                GetEmotePacksResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetEmotePacksResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.packs && message.packs.length))
                                message.packs = [];
                            message.packs.push($root.protocol.chat.v1.GetEmotePacksResponse.EmotePack.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetEmotePacksResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetEmotePacksResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetEmotePacksResponse();
                    if (object.packs) {
                        if (!Array.isArray(object.packs))
                            throw TypeError(".protocol.chat.v1.GetEmotePacksResponse.packs: array expected");
                        message.packs = [];
                        for (var i = 0; i < object.packs.length; ++i) {
                            if (typeof object.packs[i] !== "object")
                                throw TypeError(".protocol.chat.v1.GetEmotePacksResponse.packs: object expected");
                            message.packs[i] = $root.protocol.chat.v1.GetEmotePacksResponse.EmotePack.fromObject(object.packs[i]);
                        }
                    }
                    return message;
                };

                GetEmotePacksResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.packs = [];
                    if (message.packs && message.packs.length) {
                        object.packs = [];
                        for (var j = 0; j < message.packs.length; ++j)
                            object.packs[j] = $root.protocol.chat.v1.GetEmotePacksResponse.EmotePack.toObject(message.packs[j], options);
                    }
                    return object;
                };

                GetEmotePacksResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                GetEmotePacksResponse.EmotePack = (function() {

                    function EmotePack(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    EmotePack.prototype.packId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    EmotePack.prototype.packOwner = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    EmotePack.prototype.packName = "";

                    EmotePack.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.packId != null && Object.hasOwnProperty.call(message, "packId"))
                            writer.uint32(8).uint64(message.packId);
                        if (message.packOwner != null && Object.hasOwnProperty.call(message, "packOwner"))
                            writer.uint32(16).uint64(message.packOwner);
                        if (message.packName != null && Object.hasOwnProperty.call(message, "packName"))
                            writer.uint32(26).string(message.packName);
                        return writer;
                    };

                    EmotePack.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetEmotePacksResponse.EmotePack();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.packId = reader.uint64();
                                break;
                            case 2:
                                message.packOwner = reader.uint64();
                                break;
                            case 3:
                                message.packName = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    EmotePack.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.GetEmotePacksResponse.EmotePack)
                            return object;
                        var message = new $root.protocol.chat.v1.GetEmotePacksResponse.EmotePack();
                        if (object.packId != null)
                            if ($util.Long)
                                (message.packId = $util.Long.fromValue(object.packId)).unsigned = true;
                            else if (typeof object.packId === "string")
                                message.packId = parseInt(object.packId, 10);
                            else if (typeof object.packId === "number")
                                message.packId = object.packId;
                            else if (typeof object.packId === "object")
                                message.packId = new $util.LongBits(object.packId.low >>> 0, object.packId.high >>> 0).toNumber(true);
                        if (object.packOwner != null)
                            if ($util.Long)
                                (message.packOwner = $util.Long.fromValue(object.packOwner)).unsigned = true;
                            else if (typeof object.packOwner === "string")
                                message.packOwner = parseInt(object.packOwner, 10);
                            else if (typeof object.packOwner === "number")
                                message.packOwner = object.packOwner;
                            else if (typeof object.packOwner === "object")
                                message.packOwner = new $util.LongBits(object.packOwner.low >>> 0, object.packOwner.high >>> 0).toNumber(true);
                        if (object.packName != null)
                            message.packName = String(object.packName);
                        return message;
                    };

                    EmotePack.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.packId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.packId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.packOwner = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.packOwner = options.longs === String ? "0" : 0;
                            object.packName = "";
                        }
                        if (message.packId != null && message.hasOwnProperty("packId"))
                            if (typeof message.packId === "number")
                                object.packId = options.longs === String ? String(message.packId) : message.packId;
                            else
                                object.packId = options.longs === String ? $util.Long.prototype.toString.call(message.packId) : options.longs === Number ? new $util.LongBits(message.packId.low >>> 0, message.packId.high >>> 0).toNumber(true) : message.packId;
                        if (message.packOwner != null && message.hasOwnProperty("packOwner"))
                            if (typeof message.packOwner === "number")
                                object.packOwner = options.longs === String ? String(message.packOwner) : message.packOwner;
                            else
                                object.packOwner = options.longs === String ? $util.Long.prototype.toString.call(message.packOwner) : options.longs === Number ? new $util.LongBits(message.packOwner.low >>> 0, message.packOwner.high >>> 0).toNumber(true) : message.packOwner;
                        if (message.packName != null && message.hasOwnProperty("packName"))
                            object.packName = message.packName;
                        return object;
                    };

                    EmotePack.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return EmotePack;
                })();

                return GetEmotePacksResponse;
            })();

            v1.GetEmotePackEmotesRequest = (function() {

                function GetEmotePackEmotesRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetEmotePackEmotesRequest.prototype.packId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                GetEmotePackEmotesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.packId != null && Object.hasOwnProperty.call(message, "packId"))
                        writer.uint32(8).uint64(message.packId);
                    return writer;
                };

                GetEmotePackEmotesRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetEmotePackEmotesRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.packId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetEmotePackEmotesRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetEmotePackEmotesRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.GetEmotePackEmotesRequest();
                    if (object.packId != null)
                        if ($util.Long)
                            (message.packId = $util.Long.fromValue(object.packId)).unsigned = true;
                        else if (typeof object.packId === "string")
                            message.packId = parseInt(object.packId, 10);
                        else if (typeof object.packId === "number")
                            message.packId = object.packId;
                        else if (typeof object.packId === "object")
                            message.packId = new $util.LongBits(object.packId.low >>> 0, object.packId.high >>> 0).toNumber(true);
                    return message;
                };

                GetEmotePackEmotesRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.packId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.packId = options.longs === String ? "0" : 0;
                    if (message.packId != null && message.hasOwnProperty("packId"))
                        if (typeof message.packId === "number")
                            object.packId = options.longs === String ? String(message.packId) : message.packId;
                        else
                            object.packId = options.longs === String ? $util.Long.prototype.toString.call(message.packId) : options.longs === Number ? new $util.LongBits(message.packId.low >>> 0, message.packId.high >>> 0).toNumber(true) : message.packId;
                    return object;
                };

                GetEmotePackEmotesRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetEmotePackEmotesRequest;
            })();

            v1.GetEmotePackEmotesResponse = (function() {

                function GetEmotePackEmotesResponse(properties) {
                    this.emotes = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetEmotePackEmotesResponse.prototype.emotes = $util.emptyArray;

                GetEmotePackEmotesResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.emotes != null && message.emotes.length)
                        for (var i = 0; i < message.emotes.length; ++i)
                            $root.protocol.chat.v1.GetEmotePackEmotesResponse.Emote.encode(message.emotes[i], writer.uint32(10).fork()).ldelim();
                    return writer;
                };

                GetEmotePackEmotesResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetEmotePackEmotesResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.emotes && message.emotes.length))
                                message.emotes = [];
                            message.emotes.push($root.protocol.chat.v1.GetEmotePackEmotesResponse.Emote.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetEmotePackEmotesResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetEmotePackEmotesResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetEmotePackEmotesResponse();
                    if (object.emotes) {
                        if (!Array.isArray(object.emotes))
                            throw TypeError(".protocol.chat.v1.GetEmotePackEmotesResponse.emotes: array expected");
                        message.emotes = [];
                        for (var i = 0; i < object.emotes.length; ++i) {
                            if (typeof object.emotes[i] !== "object")
                                throw TypeError(".protocol.chat.v1.GetEmotePackEmotesResponse.emotes: object expected");
                            message.emotes[i] = $root.protocol.chat.v1.GetEmotePackEmotesResponse.Emote.fromObject(object.emotes[i]);
                        }
                    }
                    return message;
                };

                GetEmotePackEmotesResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.emotes = [];
                    if (message.emotes && message.emotes.length) {
                        object.emotes = [];
                        for (var j = 0; j < message.emotes.length; ++j)
                            object.emotes[j] = $root.protocol.chat.v1.GetEmotePackEmotesResponse.Emote.toObject(message.emotes[j], options);
                    }
                    return object;
                };

                GetEmotePackEmotesResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                GetEmotePackEmotesResponse.Emote = (function() {

                    function Emote(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Emote.prototype.imageId = "";
                    Emote.prototype.name = "";

                    Emote.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.imageId != null && Object.hasOwnProperty.call(message, "imageId"))
                            writer.uint32(10).string(message.imageId);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(18).string(message.name);
                        return writer;
                    };

                    Emote.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetEmotePackEmotesResponse.Emote();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.imageId = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Emote.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.GetEmotePackEmotesResponse.Emote)
                            return object;
                        var message = new $root.protocol.chat.v1.GetEmotePackEmotesResponse.Emote();
                        if (object.imageId != null)
                            message.imageId = String(object.imageId);
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };

                    Emote.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.imageId = "";
                            object.name = "";
                        }
                        if (message.imageId != null && message.hasOwnProperty("imageId"))
                            object.imageId = message.imageId;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };

                    Emote.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Emote;
                })();

                return GetEmotePackEmotesResponse;
            })();

            v1.AddEmoteToPackRequest = (function() {

                function AddEmoteToPackRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                AddEmoteToPackRequest.prototype.packId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                AddEmoteToPackRequest.prototype.imageId = "";
                AddEmoteToPackRequest.prototype.name = "";

                AddEmoteToPackRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.packId != null && Object.hasOwnProperty.call(message, "packId"))
                        writer.uint32(8).uint64(message.packId);
                    if (message.imageId != null && Object.hasOwnProperty.call(message, "imageId"))
                        writer.uint32(18).string(message.imageId);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(26).string(message.name);
                    return writer;
                };

                AddEmoteToPackRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.AddEmoteToPackRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.packId = reader.uint64();
                            break;
                        case 2:
                            message.imageId = reader.string();
                            break;
                        case 3:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                AddEmoteToPackRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.AddEmoteToPackRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.AddEmoteToPackRequest();
                    if (object.packId != null)
                        if ($util.Long)
                            (message.packId = $util.Long.fromValue(object.packId)).unsigned = true;
                        else if (typeof object.packId === "string")
                            message.packId = parseInt(object.packId, 10);
                        else if (typeof object.packId === "number")
                            message.packId = object.packId;
                        else if (typeof object.packId === "object")
                            message.packId = new $util.LongBits(object.packId.low >>> 0, object.packId.high >>> 0).toNumber(true);
                    if (object.imageId != null)
                        message.imageId = String(object.imageId);
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };

                AddEmoteToPackRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.packId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.packId = options.longs === String ? "0" : 0;
                        object.imageId = "";
                        object.name = "";
                    }
                    if (message.packId != null && message.hasOwnProperty("packId"))
                        if (typeof message.packId === "number")
                            object.packId = options.longs === String ? String(message.packId) : message.packId;
                        else
                            object.packId = options.longs === String ? $util.Long.prototype.toString.call(message.packId) : options.longs === Number ? new $util.LongBits(message.packId.low >>> 0, message.packId.high >>> 0).toNumber(true) : message.packId;
                    if (message.imageId != null && message.hasOwnProperty("imageId"))
                        object.imageId = message.imageId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };

                AddEmoteToPackRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return AddEmoteToPackRequest;
            })();

            v1.DeleteEmoteFromPackRequest = (function() {

                function DeleteEmoteFromPackRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                DeleteEmoteFromPackRequest.prototype.packId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                DeleteEmoteFromPackRequest.prototype.imageId = "";

                DeleteEmoteFromPackRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.packId != null && Object.hasOwnProperty.call(message, "packId"))
                        writer.uint32(8).uint64(message.packId);
                    if (message.imageId != null && Object.hasOwnProperty.call(message, "imageId"))
                        writer.uint32(18).string(message.imageId);
                    return writer;
                };

                DeleteEmoteFromPackRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.DeleteEmoteFromPackRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.packId = reader.uint64();
                            break;
                        case 2:
                            message.imageId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                DeleteEmoteFromPackRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.DeleteEmoteFromPackRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.DeleteEmoteFromPackRequest();
                    if (object.packId != null)
                        if ($util.Long)
                            (message.packId = $util.Long.fromValue(object.packId)).unsigned = true;
                        else if (typeof object.packId === "string")
                            message.packId = parseInt(object.packId, 10);
                        else if (typeof object.packId === "number")
                            message.packId = object.packId;
                        else if (typeof object.packId === "object")
                            message.packId = new $util.LongBits(object.packId.low >>> 0, object.packId.high >>> 0).toNumber(true);
                    if (object.imageId != null)
                        message.imageId = String(object.imageId);
                    return message;
                };

                DeleteEmoteFromPackRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.packId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.packId = options.longs === String ? "0" : 0;
                        object.imageId = "";
                    }
                    if (message.packId != null && message.hasOwnProperty("packId"))
                        if (typeof message.packId === "number")
                            object.packId = options.longs === String ? String(message.packId) : message.packId;
                        else
                            object.packId = options.longs === String ? $util.Long.prototype.toString.call(message.packId) : options.longs === Number ? new $util.LongBits(message.packId.low >>> 0, message.packId.high >>> 0).toNumber(true) : message.packId;
                    if (message.imageId != null && message.hasOwnProperty("imageId"))
                        object.imageId = message.imageId;
                    return object;
                };

                DeleteEmoteFromPackRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DeleteEmoteFromPackRequest;
            })();

            v1.DeleteEmotePackRequest = (function() {

                function DeleteEmotePackRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                DeleteEmotePackRequest.prototype.packId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                DeleteEmotePackRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.packId != null && Object.hasOwnProperty.call(message, "packId"))
                        writer.uint32(8).uint64(message.packId);
                    return writer;
                };

                DeleteEmotePackRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.DeleteEmotePackRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.packId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                DeleteEmotePackRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.DeleteEmotePackRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.DeleteEmotePackRequest();
                    if (object.packId != null)
                        if ($util.Long)
                            (message.packId = $util.Long.fromValue(object.packId)).unsigned = true;
                        else if (typeof object.packId === "string")
                            message.packId = parseInt(object.packId, 10);
                        else if (typeof object.packId === "number")
                            message.packId = object.packId;
                        else if (typeof object.packId === "object")
                            message.packId = new $util.LongBits(object.packId.low >>> 0, object.packId.high >>> 0).toNumber(true);
                    return message;
                };

                DeleteEmotePackRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.packId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.packId = options.longs === String ? "0" : 0;
                    if (message.packId != null && message.hasOwnProperty("packId"))
                        if (typeof message.packId === "number")
                            object.packId = options.longs === String ? String(message.packId) : message.packId;
                        else
                            object.packId = options.longs === String ? $util.Long.prototype.toString.call(message.packId) : options.longs === Number ? new $util.LongBits(message.packId.low >>> 0, message.packId.high >>> 0).toNumber(true) : message.packId;
                    return object;
                };

                DeleteEmotePackRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DeleteEmotePackRequest;
            })();

            v1.DequipEmotePackRequest = (function() {

                function DequipEmotePackRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                DequipEmotePackRequest.prototype.packId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                DequipEmotePackRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.packId != null && Object.hasOwnProperty.call(message, "packId"))
                        writer.uint32(8).uint64(message.packId);
                    return writer;
                };

                DequipEmotePackRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.DequipEmotePackRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.packId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                DequipEmotePackRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.DequipEmotePackRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.DequipEmotePackRequest();
                    if (object.packId != null)
                        if ($util.Long)
                            (message.packId = $util.Long.fromValue(object.packId)).unsigned = true;
                        else if (typeof object.packId === "string")
                            message.packId = parseInt(object.packId, 10);
                        else if (typeof object.packId === "number")
                            message.packId = object.packId;
                        else if (typeof object.packId === "object")
                            message.packId = new $util.LongBits(object.packId.low >>> 0, object.packId.high >>> 0).toNumber(true);
                    return message;
                };

                DequipEmotePackRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.packId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.packId = options.longs === String ? "0" : 0;
                    if (message.packId != null && message.hasOwnProperty("packId"))
                        if (typeof message.packId === "number")
                            object.packId = options.longs === String ? String(message.packId) : message.packId;
                        else
                            object.packId = options.longs === String ? $util.Long.prototype.toString.call(message.packId) : options.longs === Number ? new $util.LongBits(message.packId.low >>> 0, message.packId.high >>> 0).toNumber(true) : message.packId;
                    return object;
                };

                DequipEmotePackRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DequipEmotePackRequest;
            })();

            v1.CreateChannelRequest = (function() {

                function CreateChannelRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                CreateChannelRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                CreateChannelRequest.prototype.channelName = "";
                CreateChannelRequest.prototype.isCategory = false;
                CreateChannelRequest.prototype.previousId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                CreateChannelRequest.prototype.nextId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                CreateChannelRequest.prototype.metadata = null;

                CreateChannelRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelName != null && Object.hasOwnProperty.call(message, "channelName"))
                        writer.uint32(18).string(message.channelName);
                    if (message.isCategory != null && Object.hasOwnProperty.call(message, "isCategory"))
                        writer.uint32(24).bool(message.isCategory);
                    if (message.nextId != null && Object.hasOwnProperty.call(message, "nextId"))
                        writer.uint32(32).uint64(message.nextId);
                    if (message.previousId != null && Object.hasOwnProperty.call(message, "previousId"))
                        writer.uint32(40).uint64(message.previousId);
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        $root.protocol.harmonytypes.v1.Metadata.encode(message.metadata, writer.uint32(50).fork()).ldelim();
                    return writer;
                };

                CreateChannelRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.CreateChannelRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelName = reader.string();
                            break;
                        case 3:
                            message.isCategory = reader.bool();
                            break;
                        case 5:
                            message.previousId = reader.uint64();
                            break;
                        case 4:
                            message.nextId = reader.uint64();
                            break;
                        case 6:
                            message.metadata = $root.protocol.harmonytypes.v1.Metadata.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                CreateChannelRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.CreateChannelRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.CreateChannelRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.channelName != null)
                        message.channelName = String(object.channelName);
                    if (object.isCategory != null)
                        message.isCategory = Boolean(object.isCategory);
                    if (object.previousId != null)
                        if ($util.Long)
                            (message.previousId = $util.Long.fromValue(object.previousId)).unsigned = true;
                        else if (typeof object.previousId === "string")
                            message.previousId = parseInt(object.previousId, 10);
                        else if (typeof object.previousId === "number")
                            message.previousId = object.previousId;
                        else if (typeof object.previousId === "object")
                            message.previousId = new $util.LongBits(object.previousId.low >>> 0, object.previousId.high >>> 0).toNumber(true);
                    if (object.nextId != null)
                        if ($util.Long)
                            (message.nextId = $util.Long.fromValue(object.nextId)).unsigned = true;
                        else if (typeof object.nextId === "string")
                            message.nextId = parseInt(object.nextId, 10);
                        else if (typeof object.nextId === "number")
                            message.nextId = object.nextId;
                        else if (typeof object.nextId === "object")
                            message.nextId = new $util.LongBits(object.nextId.low >>> 0, object.nextId.high >>> 0).toNumber(true);
                    if (object.metadata != null) {
                        if (typeof object.metadata !== "object")
                            throw TypeError(".protocol.chat.v1.CreateChannelRequest.metadata: object expected");
                        message.metadata = $root.protocol.harmonytypes.v1.Metadata.fromObject(object.metadata);
                    }
                    return message;
                };

                CreateChannelRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        object.channelName = "";
                        object.isCategory = false;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.nextId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.nextId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.previousId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.previousId = options.longs === String ? "0" : 0;
                        object.metadata = null;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelName != null && message.hasOwnProperty("channelName"))
                        object.channelName = message.channelName;
                    if (message.isCategory != null && message.hasOwnProperty("isCategory"))
                        object.isCategory = message.isCategory;
                    if (message.nextId != null && message.hasOwnProperty("nextId"))
                        if (typeof message.nextId === "number")
                            object.nextId = options.longs === String ? String(message.nextId) : message.nextId;
                        else
                            object.nextId = options.longs === String ? $util.Long.prototype.toString.call(message.nextId) : options.longs === Number ? new $util.LongBits(message.nextId.low >>> 0, message.nextId.high >>> 0).toNumber(true) : message.nextId;
                    if (message.previousId != null && message.hasOwnProperty("previousId"))
                        if (typeof message.previousId === "number")
                            object.previousId = options.longs === String ? String(message.previousId) : message.previousId;
                        else
                            object.previousId = options.longs === String ? $util.Long.prototype.toString.call(message.previousId) : options.longs === Number ? new $util.LongBits(message.previousId.low >>> 0, message.previousId.high >>> 0).toNumber(true) : message.previousId;
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = $root.protocol.harmonytypes.v1.Metadata.toObject(message.metadata, options);
                    return object;
                };

                CreateChannelRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CreateChannelRequest;
            })();

            v1.CreateChannelResponse = (function() {

                function CreateChannelResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                CreateChannelResponse.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                CreateChannelResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(8).uint64(message.channelId);
                    return writer;
                };

                CreateChannelResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.CreateChannelResponse();
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

                CreateChannelResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.CreateChannelResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.CreateChannelResponse();
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

                CreateChannelResponse.toObject = function toObject(message, options) {
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

                CreateChannelResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CreateChannelResponse;
            })();

            v1.GetGuildChannelsRequest = (function() {

                function GetGuildChannelsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetGuildChannelsRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                GetGuildChannelsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    return writer;
                };

                GetGuildChannelsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildChannelsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetGuildChannelsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetGuildChannelsRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.GetGuildChannelsRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    return message;
                };

                GetGuildChannelsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    return object;
                };

                GetGuildChannelsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetGuildChannelsRequest;
            })();

            v1.GetGuildChannelsResponse = (function() {

                function GetGuildChannelsResponse(properties) {
                    this.channels = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetGuildChannelsResponse.prototype.channels = $util.emptyArray;

                GetGuildChannelsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.channels != null && message.channels.length)
                        for (var i = 0; i < message.channels.length; ++i)
                            $root.protocol.chat.v1.GetGuildChannelsResponse.Channel.encode(message.channels[i], writer.uint32(10).fork()).ldelim();
                    return writer;
                };

                GetGuildChannelsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildChannelsResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.channels && message.channels.length))
                                message.channels = [];
                            message.channels.push($root.protocol.chat.v1.GetGuildChannelsResponse.Channel.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetGuildChannelsResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetGuildChannelsResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetGuildChannelsResponse();
                    if (object.channels) {
                        if (!Array.isArray(object.channels))
                            throw TypeError(".protocol.chat.v1.GetGuildChannelsResponse.channels: array expected");
                        message.channels = [];
                        for (var i = 0; i < object.channels.length; ++i) {
                            if (typeof object.channels[i] !== "object")
                                throw TypeError(".protocol.chat.v1.GetGuildChannelsResponse.channels: object expected");
                            message.channels[i] = $root.protocol.chat.v1.GetGuildChannelsResponse.Channel.fromObject(object.channels[i]);
                        }
                    }
                    return message;
                };

                GetGuildChannelsResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.channels = [];
                    if (message.channels && message.channels.length) {
                        object.channels = [];
                        for (var j = 0; j < message.channels.length; ++j)
                            object.channels[j] = $root.protocol.chat.v1.GetGuildChannelsResponse.Channel.toObject(message.channels[j], options);
                    }
                    return object;
                };

                GetGuildChannelsResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                GetGuildChannelsResponse.Channel = (function() {

                    function Channel(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Channel.prototype.metadata = null;
                    Channel.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    Channel.prototype.channelName = "";
                    Channel.prototype.isCategory = false;

                    Channel.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                            writer.uint32(8).uint64(message.channelId);
                        if (message.channelName != null && Object.hasOwnProperty.call(message, "channelName"))
                            writer.uint32(18).string(message.channelName);
                        if (message.isCategory != null && Object.hasOwnProperty.call(message, "isCategory"))
                            writer.uint32(24).bool(message.isCategory);
                        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                            $root.protocol.harmonytypes.v1.Metadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
                        return writer;
                    };

                    Channel.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetGuildChannelsResponse.Channel();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 4:
                                message.metadata = $root.protocol.harmonytypes.v1.Metadata.decode(reader, reader.uint32());
                                break;
                            case 1:
                                message.channelId = reader.uint64();
                                break;
                            case 2:
                                message.channelName = reader.string();
                                break;
                            case 3:
                                message.isCategory = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Channel.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.GetGuildChannelsResponse.Channel)
                            return object;
                        var message = new $root.protocol.chat.v1.GetGuildChannelsResponse.Channel();
                        if (object.metadata != null) {
                            if (typeof object.metadata !== "object")
                                throw TypeError(".protocol.chat.v1.GetGuildChannelsResponse.Channel.metadata: object expected");
                            message.metadata = $root.protocol.harmonytypes.v1.Metadata.fromObject(object.metadata);
                        }
                        if (object.channelId != null)
                            if ($util.Long)
                                (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                            else if (typeof object.channelId === "string")
                                message.channelId = parseInt(object.channelId, 10);
                            else if (typeof object.channelId === "number")
                                message.channelId = object.channelId;
                            else if (typeof object.channelId === "object")
                                message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                        if (object.channelName != null)
                            message.channelName = String(object.channelName);
                        if (object.isCategory != null)
                            message.isCategory = Boolean(object.isCategory);
                        return message;
                    };

                    Channel.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.channelId = options.longs === String ? "0" : 0;
                            object.channelName = "";
                            object.isCategory = false;
                            object.metadata = null;
                        }
                        if (message.channelId != null && message.hasOwnProperty("channelId"))
                            if (typeof message.channelId === "number")
                                object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                            else
                                object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                        if (message.channelName != null && message.hasOwnProperty("channelName"))
                            object.channelName = message.channelName;
                        if (message.isCategory != null && message.hasOwnProperty("isCategory"))
                            object.isCategory = message.isCategory;
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            object.metadata = $root.protocol.harmonytypes.v1.Metadata.toObject(message.metadata, options);
                        return object;
                    };

                    Channel.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Channel;
                })();

                return GetGuildChannelsResponse;
            })();

            v1.UpdateChannelInformationRequest = (function() {

                function UpdateChannelInformationRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                UpdateChannelInformationRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                UpdateChannelInformationRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                UpdateChannelInformationRequest.prototype.name = "";
                UpdateChannelInformationRequest.prototype.updateName = false;
                UpdateChannelInformationRequest.prototype.metadata = null;
                UpdateChannelInformationRequest.prototype.updateMetadata = false;

                UpdateChannelInformationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(26).string(message.name);
                    if (message.updateName != null && Object.hasOwnProperty.call(message, "updateName"))
                        writer.uint32(32).bool(message.updateName);
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        $root.protocol.harmonytypes.v1.Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
                    if (message.updateMetadata != null && Object.hasOwnProperty.call(message, "updateMetadata"))
                        writer.uint32(48).bool(message.updateMetadata);
                    return writer;
                };

                UpdateChannelInformationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.UpdateChannelInformationRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        case 3:
                            message.name = reader.string();
                            break;
                        case 4:
                            message.updateName = reader.bool();
                            break;
                        case 5:
                            message.metadata = $root.protocol.harmonytypes.v1.Metadata.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.updateMetadata = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                UpdateChannelInformationRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.UpdateChannelInformationRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.UpdateChannelInformationRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.updateName != null)
                        message.updateName = Boolean(object.updateName);
                    if (object.metadata != null) {
                        if (typeof object.metadata !== "object")
                            throw TypeError(".protocol.chat.v1.UpdateChannelInformationRequest.metadata: object expected");
                        message.metadata = $root.protocol.harmonytypes.v1.Metadata.fromObject(object.metadata);
                    }
                    if (object.updateMetadata != null)
                        message.updateMetadata = Boolean(object.updateMetadata);
                    return message;
                };

                UpdateChannelInformationRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        object.name = "";
                        object.updateName = false;
                        object.metadata = null;
                        object.updateMetadata = false;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.updateName != null && message.hasOwnProperty("updateName"))
                        object.updateName = message.updateName;
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = $root.protocol.harmonytypes.v1.Metadata.toObject(message.metadata, options);
                    if (message.updateMetadata != null && message.hasOwnProperty("updateMetadata"))
                        object.updateMetadata = message.updateMetadata;
                    return object;
                };

                UpdateChannelInformationRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UpdateChannelInformationRequest;
            })();

            v1.UpdateChannelOrderRequest = (function() {

                function UpdateChannelOrderRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                UpdateChannelOrderRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                UpdateChannelOrderRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                UpdateChannelOrderRequest.prototype.previousId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                UpdateChannelOrderRequest.prototype.nextId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                UpdateChannelOrderRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    if (message.previousId != null && Object.hasOwnProperty.call(message, "previousId"))
                        writer.uint32(24).uint64(message.previousId);
                    if (message.nextId != null && Object.hasOwnProperty.call(message, "nextId"))
                        writer.uint32(32).uint64(message.nextId);
                    return writer;
                };

                UpdateChannelOrderRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.UpdateChannelOrderRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        case 3:
                            message.previousId = reader.uint64();
                            break;
                        case 4:
                            message.nextId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                UpdateChannelOrderRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.UpdateChannelOrderRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.UpdateChannelOrderRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    if (object.previousId != null)
                        if ($util.Long)
                            (message.previousId = $util.Long.fromValue(object.previousId)).unsigned = true;
                        else if (typeof object.previousId === "string")
                            message.previousId = parseInt(object.previousId, 10);
                        else if (typeof object.previousId === "number")
                            message.previousId = object.previousId;
                        else if (typeof object.previousId === "object")
                            message.previousId = new $util.LongBits(object.previousId.low >>> 0, object.previousId.high >>> 0).toNumber(true);
                    if (object.nextId != null)
                        if ($util.Long)
                            (message.nextId = $util.Long.fromValue(object.nextId)).unsigned = true;
                        else if (typeof object.nextId === "string")
                            message.nextId = parseInt(object.nextId, 10);
                        else if (typeof object.nextId === "number")
                            message.nextId = object.nextId;
                        else if (typeof object.nextId === "object")
                            message.nextId = new $util.LongBits(object.nextId.low >>> 0, object.nextId.high >>> 0).toNumber(true);
                    return message;
                };

                UpdateChannelOrderRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.previousId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.previousId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.nextId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.nextId = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    if (message.previousId != null && message.hasOwnProperty("previousId"))
                        if (typeof message.previousId === "number")
                            object.previousId = options.longs === String ? String(message.previousId) : message.previousId;
                        else
                            object.previousId = options.longs === String ? $util.Long.prototype.toString.call(message.previousId) : options.longs === Number ? new $util.LongBits(message.previousId.low >>> 0, message.previousId.high >>> 0).toNumber(true) : message.previousId;
                    if (message.nextId != null && message.hasOwnProperty("nextId"))
                        if (typeof message.nextId === "number")
                            object.nextId = options.longs === String ? String(message.nextId) : message.nextId;
                        else
                            object.nextId = options.longs === String ? $util.Long.prototype.toString.call(message.nextId) : options.longs === Number ? new $util.LongBits(message.nextId.low >>> 0, message.nextId.high >>> 0).toNumber(true) : message.nextId;
                    return object;
                };

                UpdateChannelOrderRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UpdateChannelOrderRequest;
            })();

            v1.DeleteChannelRequest = (function() {

                function DeleteChannelRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                DeleteChannelRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                DeleteChannelRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                DeleteChannelRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    return writer;
                };

                DeleteChannelRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.DeleteChannelRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                DeleteChannelRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.DeleteChannelRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.DeleteChannelRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
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

                DeleteChannelRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    return object;
                };

                DeleteChannelRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DeleteChannelRequest;
            })();

            v1.TypingRequest = (function() {

                function TypingRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                TypingRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                TypingRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                TypingRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    return writer;
                };

                TypingRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.TypingRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                TypingRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.TypingRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.TypingRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
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

                TypingRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    return object;
                };

                TypingRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TypingRequest;
            })();

            v1.GetChannelMessagesRequest = (function() {

                function GetChannelMessagesRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetChannelMessagesRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                GetChannelMessagesRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                GetChannelMessagesRequest.prototype.beforeMessage = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                GetChannelMessagesRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    if (message.beforeMessage != null && Object.hasOwnProperty.call(message, "beforeMessage"))
                        writer.uint32(24).uint64(message.beforeMessage);
                    return writer;
                };

                GetChannelMessagesRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetChannelMessagesRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        case 3:
                            message.beforeMessage = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetChannelMessagesRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetChannelMessagesRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.GetChannelMessagesRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    if (object.beforeMessage != null)
                        if ($util.Long)
                            (message.beforeMessage = $util.Long.fromValue(object.beforeMessage)).unsigned = true;
                        else if (typeof object.beforeMessage === "string")
                            message.beforeMessage = parseInt(object.beforeMessage, 10);
                        else if (typeof object.beforeMessage === "number")
                            message.beforeMessage = object.beforeMessage;
                        else if (typeof object.beforeMessage === "object")
                            message.beforeMessage = new $util.LongBits(object.beforeMessage.low >>> 0, object.beforeMessage.high >>> 0).toNumber(true);
                    return message;
                };

                GetChannelMessagesRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.beforeMessage = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.beforeMessage = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    if (message.beforeMessage != null && message.hasOwnProperty("beforeMessage"))
                        if (typeof message.beforeMessage === "number")
                            object.beforeMessage = options.longs === String ? String(message.beforeMessage) : message.beforeMessage;
                        else
                            object.beforeMessage = options.longs === String ? $util.Long.prototype.toString.call(message.beforeMessage) : options.longs === Number ? new $util.LongBits(message.beforeMessage.low >>> 0, message.beforeMessage.high >>> 0).toNumber(true) : message.beforeMessage;
                    return object;
                };

                GetChannelMessagesRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetChannelMessagesRequest;
            })();

            v1.GetChannelMessagesResponse = (function() {

                function GetChannelMessagesResponse(properties) {
                    this.messages = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetChannelMessagesResponse.prototype.reachedTop = false;
                GetChannelMessagesResponse.prototype.messages = $util.emptyArray;

                GetChannelMessagesResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.reachedTop != null && Object.hasOwnProperty.call(message, "reachedTop"))
                        writer.uint32(8).bool(message.reachedTop);
                    if (message.messages != null && message.messages.length)
                        for (var i = 0; i < message.messages.length; ++i)
                            $root.protocol.harmonytypes.v1.Message.encode(message.messages[i], writer.uint32(18).fork()).ldelim();
                    return writer;
                };

                GetChannelMessagesResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetChannelMessagesResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.reachedTop = reader.bool();
                            break;
                        case 2:
                            if (!(message.messages && message.messages.length))
                                message.messages = [];
                            message.messages.push($root.protocol.harmonytypes.v1.Message.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetChannelMessagesResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetChannelMessagesResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetChannelMessagesResponse();
                    if (object.reachedTop != null)
                        message.reachedTop = Boolean(object.reachedTop);
                    if (object.messages) {
                        if (!Array.isArray(object.messages))
                            throw TypeError(".protocol.chat.v1.GetChannelMessagesResponse.messages: array expected");
                        message.messages = [];
                        for (var i = 0; i < object.messages.length; ++i) {
                            if (typeof object.messages[i] !== "object")
                                throw TypeError(".protocol.chat.v1.GetChannelMessagesResponse.messages: object expected");
                            message.messages[i] = $root.protocol.harmonytypes.v1.Message.fromObject(object.messages[i]);
                        }
                    }
                    return message;
                };

                GetChannelMessagesResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.messages = [];
                    if (options.defaults)
                        object.reachedTop = false;
                    if (message.reachedTop != null && message.hasOwnProperty("reachedTop"))
                        object.reachedTop = message.reachedTop;
                    if (message.messages && message.messages.length) {
                        object.messages = [];
                        for (var j = 0; j < message.messages.length; ++j)
                            object.messages[j] = $root.protocol.harmonytypes.v1.Message.toObject(message.messages[j], options);
                    }
                    return object;
                };

                GetChannelMessagesResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetChannelMessagesResponse;
            })();

            v1.GetMessageRequest = (function() {

                function GetMessageRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetMessageRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                GetMessageRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                GetMessageRequest.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                GetMessageRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                        writer.uint32(24).uint64(message.messageId);
                    return writer;
                };

                GetMessageRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetMessageRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        case 3:
                            message.messageId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetMessageRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetMessageRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.GetMessageRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    if (object.messageId != null)
                        if ($util.Long)
                            (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = true;
                        else if (typeof object.messageId === "string")
                            message.messageId = parseInt(object.messageId, 10);
                        else if (typeof object.messageId === "number")
                            message.messageId = object.messageId;
                        else if (typeof object.messageId === "object")
                            message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber(true);
                    return message;
                };

                GetMessageRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.messageId = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    if (message.messageId != null && message.hasOwnProperty("messageId"))
                        if (typeof message.messageId === "number")
                            object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                        else
                            object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber(true) : message.messageId;
                    return object;
                };

                GetMessageRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetMessageRequest;
            })();

            v1.GetMessageResponse = (function() {

                function GetMessageResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetMessageResponse.prototype.message = null;

                GetMessageResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                        $root.protocol.harmonytypes.v1.Message.encode(message.message, writer.uint32(10).fork()).ldelim();
                    return writer;
                };

                GetMessageResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetMessageResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.message = $root.protocol.harmonytypes.v1.Message.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetMessageResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetMessageResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetMessageResponse();
                    if (object.message != null) {
                        if (typeof object.message !== "object")
                            throw TypeError(".protocol.chat.v1.GetMessageResponse.message: object expected");
                        message.message = $root.protocol.harmonytypes.v1.Message.fromObject(object.message);
                    }
                    return message;
                };

                GetMessageResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.message = null;
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = $root.protocol.harmonytypes.v1.Message.toObject(message.message, options);
                    return object;
                };

                GetMessageResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetMessageResponse;
            })();

            v1.UpdateMessageRequest = (function() {

                function UpdateMessageRequest(properties) {
                    this.embeds = [];
                    this.actions = [];
                    this.attachments = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                UpdateMessageRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                UpdateMessageRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                UpdateMessageRequest.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                UpdateMessageRequest.prototype.content = "";
                UpdateMessageRequest.prototype.updateContent = false;
                UpdateMessageRequest.prototype.embeds = $util.emptyArray;
                UpdateMessageRequest.prototype.updateEmbeds = false;
                UpdateMessageRequest.prototype.actions = $util.emptyArray;
                UpdateMessageRequest.prototype.updateActions = false;
                UpdateMessageRequest.prototype.attachments = $util.emptyArray;
                UpdateMessageRequest.prototype.updateAttachments = false;
                UpdateMessageRequest.prototype.overrides = null;
                UpdateMessageRequest.prototype.updateOverrides = false;
                UpdateMessageRequest.prototype.metadata = null;
                UpdateMessageRequest.prototype.updateMetadata = false;

                UpdateMessageRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                        writer.uint32(24).uint64(message.messageId);
                    if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                        writer.uint32(34).string(message.content);
                    if (message.updateContent != null && Object.hasOwnProperty.call(message, "updateContent"))
                        writer.uint32(40).bool(message.updateContent);
                    if (message.embeds != null && message.embeds.length)
                        for (var i = 0; i < message.embeds.length; ++i)
                            $root.protocol.harmonytypes.v1.Embed.encode(message.embeds[i], writer.uint32(50).fork()).ldelim();
                    if (message.updateEmbeds != null && Object.hasOwnProperty.call(message, "updateEmbeds"))
                        writer.uint32(56).bool(message.updateEmbeds);
                    if (message.actions != null && message.actions.length)
                        for (var i = 0; i < message.actions.length; ++i)
                            $root.protocol.harmonytypes.v1.Action.encode(message.actions[i], writer.uint32(66).fork()).ldelim();
                    if (message.updateActions != null && Object.hasOwnProperty.call(message, "updateActions"))
                        writer.uint32(72).bool(message.updateActions);
                    if (message.attachments != null && message.attachments.length)
                        for (var i = 0; i < message.attachments.length; ++i)
                            writer.uint32(82).string(message.attachments[i]);
                    if (message.updateAttachments != null && Object.hasOwnProperty.call(message, "updateAttachments"))
                        writer.uint32(88).bool(message.updateAttachments);
                    if (message.overrides != null && Object.hasOwnProperty.call(message, "overrides"))
                        $root.protocol.harmonytypes.v1.Override.encode(message.overrides, writer.uint32(98).fork()).ldelim();
                    if (message.updateOverrides != null && Object.hasOwnProperty.call(message, "updateOverrides"))
                        writer.uint32(104).bool(message.updateOverrides);
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        $root.protocol.harmonytypes.v1.Metadata.encode(message.metadata, writer.uint32(114).fork()).ldelim();
                    if (message.updateMetadata != null && Object.hasOwnProperty.call(message, "updateMetadata"))
                        writer.uint32(120).bool(message.updateMetadata);
                    return writer;
                };

                UpdateMessageRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.UpdateMessageRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        case 3:
                            message.messageId = reader.uint64();
                            break;
                        case 4:
                            message.content = reader.string();
                            break;
                        case 5:
                            message.updateContent = reader.bool();
                            break;
                        case 6:
                            if (!(message.embeds && message.embeds.length))
                                message.embeds = [];
                            message.embeds.push($root.protocol.harmonytypes.v1.Embed.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            message.updateEmbeds = reader.bool();
                            break;
                        case 8:
                            if (!(message.actions && message.actions.length))
                                message.actions = [];
                            message.actions.push($root.protocol.harmonytypes.v1.Action.decode(reader, reader.uint32()));
                            break;
                        case 9:
                            message.updateActions = reader.bool();
                            break;
                        case 10:
                            if (!(message.attachments && message.attachments.length))
                                message.attachments = [];
                            message.attachments.push(reader.string());
                            break;
                        case 11:
                            message.updateAttachments = reader.bool();
                            break;
                        case 12:
                            message.overrides = $root.protocol.harmonytypes.v1.Override.decode(reader, reader.uint32());
                            break;
                        case 13:
                            message.updateOverrides = reader.bool();
                            break;
                        case 14:
                            message.metadata = $root.protocol.harmonytypes.v1.Metadata.decode(reader, reader.uint32());
                            break;
                        case 15:
                            message.updateMetadata = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                UpdateMessageRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.UpdateMessageRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.UpdateMessageRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    if (object.messageId != null)
                        if ($util.Long)
                            (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = true;
                        else if (typeof object.messageId === "string")
                            message.messageId = parseInt(object.messageId, 10);
                        else if (typeof object.messageId === "number")
                            message.messageId = object.messageId;
                        else if (typeof object.messageId === "object")
                            message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber(true);
                    if (object.content != null)
                        message.content = String(object.content);
                    if (object.updateContent != null)
                        message.updateContent = Boolean(object.updateContent);
                    if (object.embeds) {
                        if (!Array.isArray(object.embeds))
                            throw TypeError(".protocol.chat.v1.UpdateMessageRequest.embeds: array expected");
                        message.embeds = [];
                        for (var i = 0; i < object.embeds.length; ++i) {
                            if (typeof object.embeds[i] !== "object")
                                throw TypeError(".protocol.chat.v1.UpdateMessageRequest.embeds: object expected");
                            message.embeds[i] = $root.protocol.harmonytypes.v1.Embed.fromObject(object.embeds[i]);
                        }
                    }
                    if (object.updateEmbeds != null)
                        message.updateEmbeds = Boolean(object.updateEmbeds);
                    if (object.actions) {
                        if (!Array.isArray(object.actions))
                            throw TypeError(".protocol.chat.v1.UpdateMessageRequest.actions: array expected");
                        message.actions = [];
                        for (var i = 0; i < object.actions.length; ++i) {
                            if (typeof object.actions[i] !== "object")
                                throw TypeError(".protocol.chat.v1.UpdateMessageRequest.actions: object expected");
                            message.actions[i] = $root.protocol.harmonytypes.v1.Action.fromObject(object.actions[i]);
                        }
                    }
                    if (object.updateActions != null)
                        message.updateActions = Boolean(object.updateActions);
                    if (object.attachments) {
                        if (!Array.isArray(object.attachments))
                            throw TypeError(".protocol.chat.v1.UpdateMessageRequest.attachments: array expected");
                        message.attachments = [];
                        for (var i = 0; i < object.attachments.length; ++i)
                            message.attachments[i] = String(object.attachments[i]);
                    }
                    if (object.updateAttachments != null)
                        message.updateAttachments = Boolean(object.updateAttachments);
                    if (object.overrides != null) {
                        if (typeof object.overrides !== "object")
                            throw TypeError(".protocol.chat.v1.UpdateMessageRequest.overrides: object expected");
                        message.overrides = $root.protocol.harmonytypes.v1.Override.fromObject(object.overrides);
                    }
                    if (object.updateOverrides != null)
                        message.updateOverrides = Boolean(object.updateOverrides);
                    if (object.metadata != null) {
                        if (typeof object.metadata !== "object")
                            throw TypeError(".protocol.chat.v1.UpdateMessageRequest.metadata: object expected");
                        message.metadata = $root.protocol.harmonytypes.v1.Metadata.fromObject(object.metadata);
                    }
                    if (object.updateMetadata != null)
                        message.updateMetadata = Boolean(object.updateMetadata);
                    return message;
                };

                UpdateMessageRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.embeds = [];
                        object.actions = [];
                        object.attachments = [];
                    }
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.messageId = options.longs === String ? "0" : 0;
                        object.content = "";
                        object.updateContent = false;
                        object.updateEmbeds = false;
                        object.updateActions = false;
                        object.updateAttachments = false;
                        object.overrides = null;
                        object.updateOverrides = false;
                        object.metadata = null;
                        object.updateMetadata = false;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    if (message.messageId != null && message.hasOwnProperty("messageId"))
                        if (typeof message.messageId === "number")
                            object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                        else
                            object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber(true) : message.messageId;
                    if (message.content != null && message.hasOwnProperty("content"))
                        object.content = message.content;
                    if (message.updateContent != null && message.hasOwnProperty("updateContent"))
                        object.updateContent = message.updateContent;
                    if (message.embeds && message.embeds.length) {
                        object.embeds = [];
                        for (var j = 0; j < message.embeds.length; ++j)
                            object.embeds[j] = $root.protocol.harmonytypes.v1.Embed.toObject(message.embeds[j], options);
                    }
                    if (message.updateEmbeds != null && message.hasOwnProperty("updateEmbeds"))
                        object.updateEmbeds = message.updateEmbeds;
                    if (message.actions && message.actions.length) {
                        object.actions = [];
                        for (var j = 0; j < message.actions.length; ++j)
                            object.actions[j] = $root.protocol.harmonytypes.v1.Action.toObject(message.actions[j], options);
                    }
                    if (message.updateActions != null && message.hasOwnProperty("updateActions"))
                        object.updateActions = message.updateActions;
                    if (message.attachments && message.attachments.length) {
                        object.attachments = [];
                        for (var j = 0; j < message.attachments.length; ++j)
                            object.attachments[j] = message.attachments[j];
                    }
                    if (message.updateAttachments != null && message.hasOwnProperty("updateAttachments"))
                        object.updateAttachments = message.updateAttachments;
                    if (message.overrides != null && message.hasOwnProperty("overrides"))
                        object.overrides = $root.protocol.harmonytypes.v1.Override.toObject(message.overrides, options);
                    if (message.updateOverrides != null && message.hasOwnProperty("updateOverrides"))
                        object.updateOverrides = message.updateOverrides;
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = $root.protocol.harmonytypes.v1.Metadata.toObject(message.metadata, options);
                    if (message.updateMetadata != null && message.hasOwnProperty("updateMetadata"))
                        object.updateMetadata = message.updateMetadata;
                    return object;
                };

                UpdateMessageRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UpdateMessageRequest;
            })();

            v1.DeleteMessageRequest = (function() {

                function DeleteMessageRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                DeleteMessageRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                DeleteMessageRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                DeleteMessageRequest.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                DeleteMessageRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                        writer.uint32(24).uint64(message.messageId);
                    return writer;
                };

                DeleteMessageRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.DeleteMessageRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        case 3:
                            message.messageId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                DeleteMessageRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.DeleteMessageRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.DeleteMessageRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    if (object.messageId != null)
                        if ($util.Long)
                            (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = true;
                        else if (typeof object.messageId === "string")
                            message.messageId = parseInt(object.messageId, 10);
                        else if (typeof object.messageId === "number")
                            message.messageId = object.messageId;
                        else if (typeof object.messageId === "object")
                            message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber(true);
                    return message;
                };

                DeleteMessageRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.messageId = options.longs === String ? "0" : 0;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    if (message.messageId != null && message.hasOwnProperty("messageId"))
                        if (typeof message.messageId === "number")
                            object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                        else
                            object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber(true) : message.messageId;
                    return object;
                };

                DeleteMessageRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DeleteMessageRequest;
            })();

            v1.TriggerActionRequest = (function() {

                function TriggerActionRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                TriggerActionRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                TriggerActionRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                TriggerActionRequest.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                TriggerActionRequest.prototype.actionId = "";
                TriggerActionRequest.prototype.actionData = "";

                TriggerActionRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                        writer.uint32(24).uint64(message.messageId);
                    if (message.actionId != null && Object.hasOwnProperty.call(message, "actionId"))
                        writer.uint32(34).string(message.actionId);
                    if (message.actionData != null && Object.hasOwnProperty.call(message, "actionData"))
                        writer.uint32(42).string(message.actionData);
                    return writer;
                };

                TriggerActionRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.TriggerActionRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        case 3:
                            message.messageId = reader.uint64();
                            break;
                        case 4:
                            message.actionId = reader.string();
                            break;
                        case 5:
                            message.actionData = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                TriggerActionRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.TriggerActionRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.TriggerActionRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    if (object.messageId != null)
                        if ($util.Long)
                            (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = true;
                        else if (typeof object.messageId === "string")
                            message.messageId = parseInt(object.messageId, 10);
                        else if (typeof object.messageId === "number")
                            message.messageId = object.messageId;
                        else if (typeof object.messageId === "object")
                            message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber(true);
                    if (object.actionId != null)
                        message.actionId = String(object.actionId);
                    if (object.actionData != null)
                        message.actionData = String(object.actionData);
                    return message;
                };

                TriggerActionRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.messageId = options.longs === String ? "0" : 0;
                        object.actionId = "";
                        object.actionData = "";
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    if (message.messageId != null && message.hasOwnProperty("messageId"))
                        if (typeof message.messageId === "number")
                            object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                        else
                            object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber(true) : message.messageId;
                    if (message.actionId != null && message.hasOwnProperty("actionId"))
                        object.actionId = message.actionId;
                    if (message.actionData != null && message.hasOwnProperty("actionData"))
                        object.actionData = message.actionData;
                    return object;
                };

                TriggerActionRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TriggerActionRequest;
            })();

            v1.SendMessageRequest = (function() {

                function SendMessageRequest(properties) {
                    this.actions = [];
                    this.embeds = [];
                    this.attachments = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                SendMessageRequest.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                SendMessageRequest.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                SendMessageRequest.prototype.content = "";
                SendMessageRequest.prototype.actions = $util.emptyArray;
                SendMessageRequest.prototype.embeds = $util.emptyArray;
                SendMessageRequest.prototype.attachments = $util.emptyArray;
                SendMessageRequest.prototype.inReplyTo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                SendMessageRequest.prototype.overrides = null;
                SendMessageRequest.prototype.echoId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                SendMessageRequest.prototype.metadata = null;

                SendMessageRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                        writer.uint32(26).string(message.content);
                    if (message.actions != null && message.actions.length)
                        for (var i = 0; i < message.actions.length; ++i)
                            $root.protocol.harmonytypes.v1.Action.encode(message.actions[i], writer.uint32(34).fork()).ldelim();
                    if (message.embeds != null && message.embeds.length)
                        for (var i = 0; i < message.embeds.length; ++i)
                            $root.protocol.harmonytypes.v1.Embed.encode(message.embeds[i], writer.uint32(42).fork()).ldelim();
                    if (message.attachments != null && message.attachments.length)
                        for (var i = 0; i < message.attachments.length; ++i)
                            writer.uint32(50).string(message.attachments[i]);
                    if (message.inReplyTo != null && Object.hasOwnProperty.call(message, "inReplyTo"))
                        writer.uint32(56).uint64(message.inReplyTo);
                    if (message.overrides != null && Object.hasOwnProperty.call(message, "overrides"))
                        $root.protocol.harmonytypes.v1.Override.encode(message.overrides, writer.uint32(66).fork()).ldelim();
                    if (message.echoId != null && Object.hasOwnProperty.call(message, "echoId"))
                        writer.uint32(72).uint64(message.echoId);
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        $root.protocol.harmonytypes.v1.Metadata.encode(message.metadata, writer.uint32(82).fork()).ldelim();
                    return writer;
                };

                SendMessageRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.SendMessageRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        case 3:
                            message.content = reader.string();
                            break;
                        case 4:
                            if (!(message.actions && message.actions.length))
                                message.actions = [];
                            message.actions.push($root.protocol.harmonytypes.v1.Action.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.embeds && message.embeds.length))
                                message.embeds = [];
                            message.embeds.push($root.protocol.harmonytypes.v1.Embed.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.attachments && message.attachments.length))
                                message.attachments = [];
                            message.attachments.push(reader.string());
                            break;
                        case 7:
                            message.inReplyTo = reader.uint64();
                            break;
                        case 8:
                            message.overrides = $root.protocol.harmonytypes.v1.Override.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.echoId = reader.uint64();
                            break;
                        case 10:
                            message.metadata = $root.protocol.harmonytypes.v1.Metadata.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                SendMessageRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.SendMessageRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.SendMessageRequest();
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    if (object.content != null)
                        message.content = String(object.content);
                    if (object.actions) {
                        if (!Array.isArray(object.actions))
                            throw TypeError(".protocol.chat.v1.SendMessageRequest.actions: array expected");
                        message.actions = [];
                        for (var i = 0; i < object.actions.length; ++i) {
                            if (typeof object.actions[i] !== "object")
                                throw TypeError(".protocol.chat.v1.SendMessageRequest.actions: object expected");
                            message.actions[i] = $root.protocol.harmonytypes.v1.Action.fromObject(object.actions[i]);
                        }
                    }
                    if (object.embeds) {
                        if (!Array.isArray(object.embeds))
                            throw TypeError(".protocol.chat.v1.SendMessageRequest.embeds: array expected");
                        message.embeds = [];
                        for (var i = 0; i < object.embeds.length; ++i) {
                            if (typeof object.embeds[i] !== "object")
                                throw TypeError(".protocol.chat.v1.SendMessageRequest.embeds: object expected");
                            message.embeds[i] = $root.protocol.harmonytypes.v1.Embed.fromObject(object.embeds[i]);
                        }
                    }
                    if (object.attachments) {
                        if (!Array.isArray(object.attachments))
                            throw TypeError(".protocol.chat.v1.SendMessageRequest.attachments: array expected");
                        message.attachments = [];
                        for (var i = 0; i < object.attachments.length; ++i)
                            message.attachments[i] = String(object.attachments[i]);
                    }
                    if (object.inReplyTo != null)
                        if ($util.Long)
                            (message.inReplyTo = $util.Long.fromValue(object.inReplyTo)).unsigned = true;
                        else if (typeof object.inReplyTo === "string")
                            message.inReplyTo = parseInt(object.inReplyTo, 10);
                        else if (typeof object.inReplyTo === "number")
                            message.inReplyTo = object.inReplyTo;
                        else if (typeof object.inReplyTo === "object")
                            message.inReplyTo = new $util.LongBits(object.inReplyTo.low >>> 0, object.inReplyTo.high >>> 0).toNumber(true);
                    if (object.overrides != null) {
                        if (typeof object.overrides !== "object")
                            throw TypeError(".protocol.chat.v1.SendMessageRequest.overrides: object expected");
                        message.overrides = $root.protocol.harmonytypes.v1.Override.fromObject(object.overrides);
                    }
                    if (object.echoId != null)
                        if ($util.Long)
                            (message.echoId = $util.Long.fromValue(object.echoId)).unsigned = true;
                        else if (typeof object.echoId === "string")
                            message.echoId = parseInt(object.echoId, 10);
                        else if (typeof object.echoId === "number")
                            message.echoId = object.echoId;
                        else if (typeof object.echoId === "object")
                            message.echoId = new $util.LongBits(object.echoId.low >>> 0, object.echoId.high >>> 0).toNumber(true);
                    if (object.metadata != null) {
                        if (typeof object.metadata !== "object")
                            throw TypeError(".protocol.chat.v1.SendMessageRequest.metadata: object expected");
                        message.metadata = $root.protocol.harmonytypes.v1.Metadata.fromObject(object.metadata);
                    }
                    return message;
                };

                SendMessageRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.actions = [];
                        object.embeds = [];
                        object.attachments = [];
                    }
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        object.content = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.inReplyTo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.inReplyTo = options.longs === String ? "0" : 0;
                        object.overrides = null;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.echoId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.echoId = options.longs === String ? "0" : 0;
                        object.metadata = null;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    if (message.content != null && message.hasOwnProperty("content"))
                        object.content = message.content;
                    if (message.actions && message.actions.length) {
                        object.actions = [];
                        for (var j = 0; j < message.actions.length; ++j)
                            object.actions[j] = $root.protocol.harmonytypes.v1.Action.toObject(message.actions[j], options);
                    }
                    if (message.embeds && message.embeds.length) {
                        object.embeds = [];
                        for (var j = 0; j < message.embeds.length; ++j)
                            object.embeds[j] = $root.protocol.harmonytypes.v1.Embed.toObject(message.embeds[j], options);
                    }
                    if (message.attachments && message.attachments.length) {
                        object.attachments = [];
                        for (var j = 0; j < message.attachments.length; ++j)
                            object.attachments[j] = message.attachments[j];
                    }
                    if (message.inReplyTo != null && message.hasOwnProperty("inReplyTo"))
                        if (typeof message.inReplyTo === "number")
                            object.inReplyTo = options.longs === String ? String(message.inReplyTo) : message.inReplyTo;
                        else
                            object.inReplyTo = options.longs === String ? $util.Long.prototype.toString.call(message.inReplyTo) : options.longs === Number ? new $util.LongBits(message.inReplyTo.low >>> 0, message.inReplyTo.high >>> 0).toNumber(true) : message.inReplyTo;
                    if (message.overrides != null && message.hasOwnProperty("overrides"))
                        object.overrides = $root.protocol.harmonytypes.v1.Override.toObject(message.overrides, options);
                    if (message.echoId != null && message.hasOwnProperty("echoId"))
                        if (typeof message.echoId === "number")
                            object.echoId = options.longs === String ? String(message.echoId) : message.echoId;
                        else
                            object.echoId = options.longs === String ? $util.Long.prototype.toString.call(message.echoId) : options.longs === Number ? new $util.LongBits(message.echoId.low >>> 0, message.echoId.high >>> 0).toNumber(true) : message.echoId;
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = $root.protocol.harmonytypes.v1.Metadata.toObject(message.metadata, options);
                    return object;
                };

                SendMessageRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SendMessageRequest;
            })();

            v1.SendMessageResponse = (function() {

                function SendMessageResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                SendMessageResponse.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                SendMessageResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                        writer.uint32(8).uint64(message.messageId);
                    return writer;
                };

                SendMessageResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.SendMessageResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.messageId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                SendMessageResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.SendMessageResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.SendMessageResponse();
                    if (object.messageId != null)
                        if ($util.Long)
                            (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = true;
                        else if (typeof object.messageId === "string")
                            message.messageId = parseInt(object.messageId, 10);
                        else if (typeof object.messageId === "number")
                            message.messageId = object.messageId;
                        else if (typeof object.messageId === "object")
                            message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber(true);
                    return message;
                };

                SendMessageResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.messageId = options.longs === String ? "0" : 0;
                    if (message.messageId != null && message.hasOwnProperty("messageId"))
                        if (typeof message.messageId === "number")
                            object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                        else
                            object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber(true) : message.messageId;
                    return object;
                };

                SendMessageResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SendMessageResponse;
            })();

            v1.StreamEventsRequest = (function() {

                function StreamEventsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                StreamEventsRequest.prototype.subscribeToGuild = null;
                StreamEventsRequest.prototype.subscribeToActions = null;
                StreamEventsRequest.prototype.subscribeToHomeserverEvents = null;

                var $oneOfFields;

                Object.defineProperty(StreamEventsRequest.prototype, "request", {
                    get: $util.oneOfGetter($oneOfFields = ["subscribeToGuild", "subscribeToActions", "subscribeToHomeserverEvents"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                StreamEventsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.subscribeToGuild != null && Object.hasOwnProperty.call(message, "subscribeToGuild"))
                        $root.protocol.chat.v1.StreamEventsRequest.SubscribeToGuild.encode(message.subscribeToGuild, writer.uint32(10).fork()).ldelim();
                    if (message.subscribeToActions != null && Object.hasOwnProperty.call(message, "subscribeToActions"))
                        $root.protocol.chat.v1.StreamEventsRequest.SubscribeToActions.encode(message.subscribeToActions, writer.uint32(18).fork()).ldelim();
                    if (message.subscribeToHomeserverEvents != null && Object.hasOwnProperty.call(message, "subscribeToHomeserverEvents"))
                        $root.protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents.encode(message.subscribeToHomeserverEvents, writer.uint32(26).fork()).ldelim();
                    return writer;
                };

                StreamEventsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.StreamEventsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.subscribeToGuild = $root.protocol.chat.v1.StreamEventsRequest.SubscribeToGuild.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.subscribeToActions = $root.protocol.chat.v1.StreamEventsRequest.SubscribeToActions.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.subscribeToHomeserverEvents = $root.protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                StreamEventsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.StreamEventsRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.StreamEventsRequest();
                    if (object.subscribeToGuild != null) {
                        if (typeof object.subscribeToGuild !== "object")
                            throw TypeError(".protocol.chat.v1.StreamEventsRequest.subscribeToGuild: object expected");
                        message.subscribeToGuild = $root.protocol.chat.v1.StreamEventsRequest.SubscribeToGuild.fromObject(object.subscribeToGuild);
                    }
                    if (object.subscribeToActions != null) {
                        if (typeof object.subscribeToActions !== "object")
                            throw TypeError(".protocol.chat.v1.StreamEventsRequest.subscribeToActions: object expected");
                        message.subscribeToActions = $root.protocol.chat.v1.StreamEventsRequest.SubscribeToActions.fromObject(object.subscribeToActions);
                    }
                    if (object.subscribeToHomeserverEvents != null) {
                        if (typeof object.subscribeToHomeserverEvents !== "object")
                            throw TypeError(".protocol.chat.v1.StreamEventsRequest.subscribeToHomeserverEvents: object expected");
                        message.subscribeToHomeserverEvents = $root.protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents.fromObject(object.subscribeToHomeserverEvents);
                    }
                    return message;
                };

                StreamEventsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.subscribeToGuild != null && message.hasOwnProperty("subscribeToGuild")) {
                        object.subscribeToGuild = $root.protocol.chat.v1.StreamEventsRequest.SubscribeToGuild.toObject(message.subscribeToGuild, options);
                        if (options.oneofs)
                            object.request = "subscribeToGuild";
                    }
                    if (message.subscribeToActions != null && message.hasOwnProperty("subscribeToActions")) {
                        object.subscribeToActions = $root.protocol.chat.v1.StreamEventsRequest.SubscribeToActions.toObject(message.subscribeToActions, options);
                        if (options.oneofs)
                            object.request = "subscribeToActions";
                    }
                    if (message.subscribeToHomeserverEvents != null && message.hasOwnProperty("subscribeToHomeserverEvents")) {
                        object.subscribeToHomeserverEvents = $root.protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents.toObject(message.subscribeToHomeserverEvents, options);
                        if (options.oneofs)
                            object.request = "subscribeToHomeserverEvents";
                    }
                    return object;
                };

                StreamEventsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                StreamEventsRequest.SubscribeToGuild = (function() {

                    function SubscribeToGuild(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    SubscribeToGuild.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    SubscribeToGuild.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(8).uint64(message.guildId);
                        return writer;
                    };

                    SubscribeToGuild.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.StreamEventsRequest.SubscribeToGuild();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.guildId = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    SubscribeToGuild.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.StreamEventsRequest.SubscribeToGuild)
                            return object;
                        var message = new $root.protocol.chat.v1.StreamEventsRequest.SubscribeToGuild();
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        return message;
                    };

                    SubscribeToGuild.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        return object;
                    };

                    SubscribeToGuild.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SubscribeToGuild;
                })();

                StreamEventsRequest.SubscribeToActions = (function() {

                    function SubscribeToActions(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    SubscribeToActions.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    SubscribeToActions.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.StreamEventsRequest.SubscribeToActions();
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

                    SubscribeToActions.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.StreamEventsRequest.SubscribeToActions)
                            return object;
                        return new $root.protocol.chat.v1.StreamEventsRequest.SubscribeToActions();
                    };

                    SubscribeToActions.toObject = function toObject() {
                        return {};
                    };

                    SubscribeToActions.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SubscribeToActions;
                })();

                StreamEventsRequest.SubscribeToHomeserverEvents = (function() {

                    function SubscribeToHomeserverEvents(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    SubscribeToHomeserverEvents.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    SubscribeToHomeserverEvents.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents();
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

                    SubscribeToHomeserverEvents.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents)
                            return object;
                        return new $root.protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents();
                    };

                    SubscribeToHomeserverEvents.toObject = function toObject() {
                        return {};
                    };

                    SubscribeToHomeserverEvents.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SubscribeToHomeserverEvents;
                })();

                return StreamEventsRequest;
            })();

            v1.Event = (function() {

                function Event(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Event.prototype.guildAddedToList = null;
                Event.prototype.guildRemovedFromList = null;
                Event.prototype.actionPerformed = null;
                Event.prototype.sentMessage = null;
                Event.prototype.editedMessage = null;
                Event.prototype.deletedMessage = null;
                Event.prototype.createdChannel = null;
                Event.prototype.editedChannel = null;
                Event.prototype.deletedChannel = null;
                Event.prototype.editedGuild = null;
                Event.prototype.deletedGuild = null;
                Event.prototype.joinedMember = null;
                Event.prototype.leftMember = null;
                Event.prototype.roleMoved = null;
                Event.prototype.profileUpdated = null;
                Event.prototype.typing = null;

                var $oneOfFields;

                Object.defineProperty(Event.prototype, "event", {
                    get: $util.oneOfGetter($oneOfFields = ["guildAddedToList", "guildRemovedFromList", "actionPerformed", "sentMessage", "editedMessage", "deletedMessage", "createdChannel", "editedChannel", "deletedChannel", "editedGuild", "deletedGuild", "joinedMember", "leftMember", "roleMoved", "profileUpdated", "typing"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Event.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildAddedToList != null && Object.hasOwnProperty.call(message, "guildAddedToList"))
                        $root.protocol.chat.v1.Event.GuildAddedToList.encode(message.guildAddedToList, writer.uint32(10).fork()).ldelim();
                    if (message.guildRemovedFromList != null && Object.hasOwnProperty.call(message, "guildRemovedFromList"))
                        $root.protocol.chat.v1.Event.GuildRemovedFromList.encode(message.guildRemovedFromList, writer.uint32(18).fork()).ldelim();
                    if (message.actionPerformed != null && Object.hasOwnProperty.call(message, "actionPerformed"))
                        $root.protocol.chat.v1.Event.ActionPerformed.encode(message.actionPerformed, writer.uint32(26).fork()).ldelim();
                    if (message.sentMessage != null && Object.hasOwnProperty.call(message, "sentMessage"))
                        $root.protocol.chat.v1.Event.MessageSent.encode(message.sentMessage, writer.uint32(34).fork()).ldelim();
                    if (message.editedMessage != null && Object.hasOwnProperty.call(message, "editedMessage"))
                        $root.protocol.chat.v1.Event.MessageUpdated.encode(message.editedMessage, writer.uint32(42).fork()).ldelim();
                    if (message.deletedMessage != null && Object.hasOwnProperty.call(message, "deletedMessage"))
                        $root.protocol.chat.v1.Event.MessageDeleted.encode(message.deletedMessage, writer.uint32(50).fork()).ldelim();
                    if (message.createdChannel != null && Object.hasOwnProperty.call(message, "createdChannel"))
                        $root.protocol.chat.v1.Event.ChannelCreated.encode(message.createdChannel, writer.uint32(58).fork()).ldelim();
                    if (message.editedChannel != null && Object.hasOwnProperty.call(message, "editedChannel"))
                        $root.protocol.chat.v1.Event.ChannelUpdated.encode(message.editedChannel, writer.uint32(66).fork()).ldelim();
                    if (message.deletedChannel != null && Object.hasOwnProperty.call(message, "deletedChannel"))
                        $root.protocol.chat.v1.Event.ChannelDeleted.encode(message.deletedChannel, writer.uint32(74).fork()).ldelim();
                    if (message.editedGuild != null && Object.hasOwnProperty.call(message, "editedGuild"))
                        $root.protocol.chat.v1.Event.GuildUpdated.encode(message.editedGuild, writer.uint32(82).fork()).ldelim();
                    if (message.deletedGuild != null && Object.hasOwnProperty.call(message, "deletedGuild"))
                        $root.protocol.chat.v1.Event.GuildDeleted.encode(message.deletedGuild, writer.uint32(90).fork()).ldelim();
                    if (message.joinedMember != null && Object.hasOwnProperty.call(message, "joinedMember"))
                        $root.protocol.chat.v1.Event.MemberJoined.encode(message.joinedMember, writer.uint32(98).fork()).ldelim();
                    if (message.leftMember != null && Object.hasOwnProperty.call(message, "leftMember"))
                        $root.protocol.chat.v1.Event.MemberLeft.encode(message.leftMember, writer.uint32(106).fork()).ldelim();
                    if (message.roleMoved != null && Object.hasOwnProperty.call(message, "roleMoved"))
                        $root.protocol.chat.v1.Event.RoleMoved.encode(message.roleMoved, writer.uint32(114).fork()).ldelim();
                    if (message.profileUpdated != null && Object.hasOwnProperty.call(message, "profileUpdated"))
                        $root.protocol.chat.v1.Event.ProfileUpdated.encode(message.profileUpdated, writer.uint32(122).fork()).ldelim();
                    if (message.typing != null && Object.hasOwnProperty.call(message, "typing"))
                        $root.protocol.chat.v1.Event.Typing.encode(message.typing, writer.uint32(130).fork()).ldelim();
                    return writer;
                };

                Event.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.guildAddedToList = $root.protocol.chat.v1.Event.GuildAddedToList.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.guildRemovedFromList = $root.protocol.chat.v1.Event.GuildRemovedFromList.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.actionPerformed = $root.protocol.chat.v1.Event.ActionPerformed.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.sentMessage = $root.protocol.chat.v1.Event.MessageSent.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.editedMessage = $root.protocol.chat.v1.Event.MessageUpdated.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.deletedMessage = $root.protocol.chat.v1.Event.MessageDeleted.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.createdChannel = $root.protocol.chat.v1.Event.ChannelCreated.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.editedChannel = $root.protocol.chat.v1.Event.ChannelUpdated.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.deletedChannel = $root.protocol.chat.v1.Event.ChannelDeleted.decode(reader, reader.uint32());
                            break;
                        case 10:
                            message.editedGuild = $root.protocol.chat.v1.Event.GuildUpdated.decode(reader, reader.uint32());
                            break;
                        case 11:
                            message.deletedGuild = $root.protocol.chat.v1.Event.GuildDeleted.decode(reader, reader.uint32());
                            break;
                        case 12:
                            message.joinedMember = $root.protocol.chat.v1.Event.MemberJoined.decode(reader, reader.uint32());
                            break;
                        case 13:
                            message.leftMember = $root.protocol.chat.v1.Event.MemberLeft.decode(reader, reader.uint32());
                            break;
                        case 14:
                            message.roleMoved = $root.protocol.chat.v1.Event.RoleMoved.decode(reader, reader.uint32());
                            break;
                        case 15:
                            message.profileUpdated = $root.protocol.chat.v1.Event.ProfileUpdated.decode(reader, reader.uint32());
                            break;
                        case 16:
                            message.typing = $root.protocol.chat.v1.Event.Typing.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Event.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.Event)
                        return object;
                    var message = new $root.protocol.chat.v1.Event();
                    if (object.guildAddedToList != null) {
                        if (typeof object.guildAddedToList !== "object")
                            throw TypeError(".protocol.chat.v1.Event.guildAddedToList: object expected");
                        message.guildAddedToList = $root.protocol.chat.v1.Event.GuildAddedToList.fromObject(object.guildAddedToList);
                    }
                    if (object.guildRemovedFromList != null) {
                        if (typeof object.guildRemovedFromList !== "object")
                            throw TypeError(".protocol.chat.v1.Event.guildRemovedFromList: object expected");
                        message.guildRemovedFromList = $root.protocol.chat.v1.Event.GuildRemovedFromList.fromObject(object.guildRemovedFromList);
                    }
                    if (object.actionPerformed != null) {
                        if (typeof object.actionPerformed !== "object")
                            throw TypeError(".protocol.chat.v1.Event.actionPerformed: object expected");
                        message.actionPerformed = $root.protocol.chat.v1.Event.ActionPerformed.fromObject(object.actionPerformed);
                    }
                    if (object.sentMessage != null) {
                        if (typeof object.sentMessage !== "object")
                            throw TypeError(".protocol.chat.v1.Event.sentMessage: object expected");
                        message.sentMessage = $root.protocol.chat.v1.Event.MessageSent.fromObject(object.sentMessage);
                    }
                    if (object.editedMessage != null) {
                        if (typeof object.editedMessage !== "object")
                            throw TypeError(".protocol.chat.v1.Event.editedMessage: object expected");
                        message.editedMessage = $root.protocol.chat.v1.Event.MessageUpdated.fromObject(object.editedMessage);
                    }
                    if (object.deletedMessage != null) {
                        if (typeof object.deletedMessage !== "object")
                            throw TypeError(".protocol.chat.v1.Event.deletedMessage: object expected");
                        message.deletedMessage = $root.protocol.chat.v1.Event.MessageDeleted.fromObject(object.deletedMessage);
                    }
                    if (object.createdChannel != null) {
                        if (typeof object.createdChannel !== "object")
                            throw TypeError(".protocol.chat.v1.Event.createdChannel: object expected");
                        message.createdChannel = $root.protocol.chat.v1.Event.ChannelCreated.fromObject(object.createdChannel);
                    }
                    if (object.editedChannel != null) {
                        if (typeof object.editedChannel !== "object")
                            throw TypeError(".protocol.chat.v1.Event.editedChannel: object expected");
                        message.editedChannel = $root.protocol.chat.v1.Event.ChannelUpdated.fromObject(object.editedChannel);
                    }
                    if (object.deletedChannel != null) {
                        if (typeof object.deletedChannel !== "object")
                            throw TypeError(".protocol.chat.v1.Event.deletedChannel: object expected");
                        message.deletedChannel = $root.protocol.chat.v1.Event.ChannelDeleted.fromObject(object.deletedChannel);
                    }
                    if (object.editedGuild != null) {
                        if (typeof object.editedGuild !== "object")
                            throw TypeError(".protocol.chat.v1.Event.editedGuild: object expected");
                        message.editedGuild = $root.protocol.chat.v1.Event.GuildUpdated.fromObject(object.editedGuild);
                    }
                    if (object.deletedGuild != null) {
                        if (typeof object.deletedGuild !== "object")
                            throw TypeError(".protocol.chat.v1.Event.deletedGuild: object expected");
                        message.deletedGuild = $root.protocol.chat.v1.Event.GuildDeleted.fromObject(object.deletedGuild);
                    }
                    if (object.joinedMember != null) {
                        if (typeof object.joinedMember !== "object")
                            throw TypeError(".protocol.chat.v1.Event.joinedMember: object expected");
                        message.joinedMember = $root.protocol.chat.v1.Event.MemberJoined.fromObject(object.joinedMember);
                    }
                    if (object.leftMember != null) {
                        if (typeof object.leftMember !== "object")
                            throw TypeError(".protocol.chat.v1.Event.leftMember: object expected");
                        message.leftMember = $root.protocol.chat.v1.Event.MemberLeft.fromObject(object.leftMember);
                    }
                    if (object.roleMoved != null) {
                        if (typeof object.roleMoved !== "object")
                            throw TypeError(".protocol.chat.v1.Event.roleMoved: object expected");
                        message.roleMoved = $root.protocol.chat.v1.Event.RoleMoved.fromObject(object.roleMoved);
                    }
                    if (object.profileUpdated != null) {
                        if (typeof object.profileUpdated !== "object")
                            throw TypeError(".protocol.chat.v1.Event.profileUpdated: object expected");
                        message.profileUpdated = $root.protocol.chat.v1.Event.ProfileUpdated.fromObject(object.profileUpdated);
                    }
                    if (object.typing != null) {
                        if (typeof object.typing !== "object")
                            throw TypeError(".protocol.chat.v1.Event.typing: object expected");
                        message.typing = $root.protocol.chat.v1.Event.Typing.fromObject(object.typing);
                    }
                    return message;
                };

                Event.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.guildAddedToList != null && message.hasOwnProperty("guildAddedToList")) {
                        object.guildAddedToList = $root.protocol.chat.v1.Event.GuildAddedToList.toObject(message.guildAddedToList, options);
                        if (options.oneofs)
                            object.event = "guildAddedToList";
                    }
                    if (message.guildRemovedFromList != null && message.hasOwnProperty("guildRemovedFromList")) {
                        object.guildRemovedFromList = $root.protocol.chat.v1.Event.GuildRemovedFromList.toObject(message.guildRemovedFromList, options);
                        if (options.oneofs)
                            object.event = "guildRemovedFromList";
                    }
                    if (message.actionPerformed != null && message.hasOwnProperty("actionPerformed")) {
                        object.actionPerformed = $root.protocol.chat.v1.Event.ActionPerformed.toObject(message.actionPerformed, options);
                        if (options.oneofs)
                            object.event = "actionPerformed";
                    }
                    if (message.sentMessage != null && message.hasOwnProperty("sentMessage")) {
                        object.sentMessage = $root.protocol.chat.v1.Event.MessageSent.toObject(message.sentMessage, options);
                        if (options.oneofs)
                            object.event = "sentMessage";
                    }
                    if (message.editedMessage != null && message.hasOwnProperty("editedMessage")) {
                        object.editedMessage = $root.protocol.chat.v1.Event.MessageUpdated.toObject(message.editedMessage, options);
                        if (options.oneofs)
                            object.event = "editedMessage";
                    }
                    if (message.deletedMessage != null && message.hasOwnProperty("deletedMessage")) {
                        object.deletedMessage = $root.protocol.chat.v1.Event.MessageDeleted.toObject(message.deletedMessage, options);
                        if (options.oneofs)
                            object.event = "deletedMessage";
                    }
                    if (message.createdChannel != null && message.hasOwnProperty("createdChannel")) {
                        object.createdChannel = $root.protocol.chat.v1.Event.ChannelCreated.toObject(message.createdChannel, options);
                        if (options.oneofs)
                            object.event = "createdChannel";
                    }
                    if (message.editedChannel != null && message.hasOwnProperty("editedChannel")) {
                        object.editedChannel = $root.protocol.chat.v1.Event.ChannelUpdated.toObject(message.editedChannel, options);
                        if (options.oneofs)
                            object.event = "editedChannel";
                    }
                    if (message.deletedChannel != null && message.hasOwnProperty("deletedChannel")) {
                        object.deletedChannel = $root.protocol.chat.v1.Event.ChannelDeleted.toObject(message.deletedChannel, options);
                        if (options.oneofs)
                            object.event = "deletedChannel";
                    }
                    if (message.editedGuild != null && message.hasOwnProperty("editedGuild")) {
                        object.editedGuild = $root.protocol.chat.v1.Event.GuildUpdated.toObject(message.editedGuild, options);
                        if (options.oneofs)
                            object.event = "editedGuild";
                    }
                    if (message.deletedGuild != null && message.hasOwnProperty("deletedGuild")) {
                        object.deletedGuild = $root.protocol.chat.v1.Event.GuildDeleted.toObject(message.deletedGuild, options);
                        if (options.oneofs)
                            object.event = "deletedGuild";
                    }
                    if (message.joinedMember != null && message.hasOwnProperty("joinedMember")) {
                        object.joinedMember = $root.protocol.chat.v1.Event.MemberJoined.toObject(message.joinedMember, options);
                        if (options.oneofs)
                            object.event = "joinedMember";
                    }
                    if (message.leftMember != null && message.hasOwnProperty("leftMember")) {
                        object.leftMember = $root.protocol.chat.v1.Event.MemberLeft.toObject(message.leftMember, options);
                        if (options.oneofs)
                            object.event = "leftMember";
                    }
                    if (message.roleMoved != null && message.hasOwnProperty("roleMoved")) {
                        object.roleMoved = $root.protocol.chat.v1.Event.RoleMoved.toObject(message.roleMoved, options);
                        if (options.oneofs)
                            object.event = "roleMoved";
                    }
                    if (message.profileUpdated != null && message.hasOwnProperty("profileUpdated")) {
                        object.profileUpdated = $root.protocol.chat.v1.Event.ProfileUpdated.toObject(message.profileUpdated, options);
                        if (options.oneofs)
                            object.event = "profileUpdated";
                    }
                    if (message.typing != null && message.hasOwnProperty("typing")) {
                        object.typing = $root.protocol.chat.v1.Event.Typing.toObject(message.typing, options);
                        if (options.oneofs)
                            object.event = "typing";
                    }
                    return object;
                };

                Event.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Event.LeaveReason = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "willingly"] = 0;
                    values[valuesById[1] = "banned"] = 1;
                    values[valuesById[2] = "kicked"] = 2;
                    return values;
                })();

                Event.MessageSent = (function() {

                    function MessageSent(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    MessageSent.prototype.echoId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    MessageSent.prototype.message = null;

                    MessageSent.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.echoId != null && Object.hasOwnProperty.call(message, "echoId"))
                            writer.uint32(8).uint64(message.echoId);
                        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                            $root.protocol.harmonytypes.v1.Message.encode(message.message, writer.uint32(18).fork()).ldelim();
                        return writer;
                    };

                    MessageSent.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.MessageSent();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.echoId = reader.uint64();
                                break;
                            case 2:
                                message.message = $root.protocol.harmonytypes.v1.Message.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    MessageSent.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.MessageSent)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.MessageSent();
                        if (object.echoId != null)
                            if ($util.Long)
                                (message.echoId = $util.Long.fromValue(object.echoId)).unsigned = true;
                            else if (typeof object.echoId === "string")
                                message.echoId = parseInt(object.echoId, 10);
                            else if (typeof object.echoId === "number")
                                message.echoId = object.echoId;
                            else if (typeof object.echoId === "object")
                                message.echoId = new $util.LongBits(object.echoId.low >>> 0, object.echoId.high >>> 0).toNumber(true);
                        if (object.message != null) {
                            if (typeof object.message !== "object")
                                throw TypeError(".protocol.chat.v1.Event.MessageSent.message: object expected");
                            message.message = $root.protocol.harmonytypes.v1.Message.fromObject(object.message);
                        }
                        return message;
                    };

                    MessageSent.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.echoId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.echoId = options.longs === String ? "0" : 0;
                            object.message = null;
                        }
                        if (message.echoId != null && message.hasOwnProperty("echoId"))
                            if (typeof message.echoId === "number")
                                object.echoId = options.longs === String ? String(message.echoId) : message.echoId;
                            else
                                object.echoId = options.longs === String ? $util.Long.prototype.toString.call(message.echoId) : options.longs === Number ? new $util.LongBits(message.echoId.low >>> 0, message.echoId.high >>> 0).toNumber(true) : message.echoId;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = $root.protocol.harmonytypes.v1.Message.toObject(message.message, options);
                        return object;
                    };

                    MessageSent.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MessageSent;
                })();

                Event.MessageUpdated = (function() {

                    function MessageUpdated(properties) {
                        this.embeds = [];
                        this.actions = [];
                        this.attachments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    MessageUpdated.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    MessageUpdated.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    MessageUpdated.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    MessageUpdated.prototype.editedAt = null;
                    MessageUpdated.prototype.content = "";
                    MessageUpdated.prototype.updateContent = false;
                    MessageUpdated.prototype.embeds = $util.emptyArray;
                    MessageUpdated.prototype.updateEmbeds = false;
                    MessageUpdated.prototype.actions = $util.emptyArray;
                    MessageUpdated.prototype.updateActions = false;
                    MessageUpdated.prototype.attachments = $util.emptyArray;
                    MessageUpdated.prototype.updateAttachments = false;
                    MessageUpdated.prototype.overrides = null;
                    MessageUpdated.prototype.updateOverrides = false;
                    MessageUpdated.prototype.metadata = null;
                    MessageUpdated.prototype.updateMetadata = false;

                    MessageUpdated.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(8).uint64(message.guildId);
                        if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                            writer.uint32(16).uint64(message.channelId);
                        if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                            writer.uint32(24).uint64(message.messageId);
                        if (message.editedAt != null && Object.hasOwnProperty.call(message, "editedAt"))
                            $root.google.protobuf.Timestamp.encode(message.editedAt, writer.uint32(34).fork()).ldelim();
                        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                            writer.uint32(42).string(message.content);
                        if (message.updateContent != null && Object.hasOwnProperty.call(message, "updateContent"))
                            writer.uint32(48).bool(message.updateContent);
                        if (message.embeds != null && message.embeds.length)
                            for (var i = 0; i < message.embeds.length; ++i)
                                $root.protocol.harmonytypes.v1.Embed.encode(message.embeds[i], writer.uint32(58).fork()).ldelim();
                        if (message.updateEmbeds != null && Object.hasOwnProperty.call(message, "updateEmbeds"))
                            writer.uint32(64).bool(message.updateEmbeds);
                        if (message.actions != null && message.actions.length)
                            for (var i = 0; i < message.actions.length; ++i)
                                $root.protocol.harmonytypes.v1.Action.encode(message.actions[i], writer.uint32(74).fork()).ldelim();
                        if (message.updateActions != null && Object.hasOwnProperty.call(message, "updateActions"))
                            writer.uint32(80).bool(message.updateActions);
                        if (message.attachments != null && message.attachments.length)
                            for (var i = 0; i < message.attachments.length; ++i)
                                $root.protocol.harmonytypes.v1.Attachment.encode(message.attachments[i], writer.uint32(90).fork()).ldelim();
                        if (message.updateAttachments != null && Object.hasOwnProperty.call(message, "updateAttachments"))
                            writer.uint32(96).bool(message.updateAttachments);
                        if (message.overrides != null && Object.hasOwnProperty.call(message, "overrides"))
                            $root.protocol.harmonytypes.v1.Override.encode(message.overrides, writer.uint32(106).fork()).ldelim();
                        if (message.updateOverrides != null && Object.hasOwnProperty.call(message, "updateOverrides"))
                            writer.uint32(112).bool(message.updateOverrides);
                        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                            $root.protocol.harmonytypes.v1.Metadata.encode(message.metadata, writer.uint32(122).fork()).ldelim();
                        if (message.updateMetadata != null && Object.hasOwnProperty.call(message, "updateMetadata"))
                            writer.uint32(128).bool(message.updateMetadata);
                        return writer;
                    };

                    MessageUpdated.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.MessageUpdated();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.guildId = reader.uint64();
                                break;
                            case 2:
                                message.channelId = reader.uint64();
                                break;
                            case 3:
                                message.messageId = reader.uint64();
                                break;
                            case 4:
                                message.editedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.content = reader.string();
                                break;
                            case 6:
                                message.updateContent = reader.bool();
                                break;
                            case 7:
                                if (!(message.embeds && message.embeds.length))
                                    message.embeds = [];
                                message.embeds.push($root.protocol.harmonytypes.v1.Embed.decode(reader, reader.uint32()));
                                break;
                            case 8:
                                message.updateEmbeds = reader.bool();
                                break;
                            case 9:
                                if (!(message.actions && message.actions.length))
                                    message.actions = [];
                                message.actions.push($root.protocol.harmonytypes.v1.Action.decode(reader, reader.uint32()));
                                break;
                            case 10:
                                message.updateActions = reader.bool();
                                break;
                            case 11:
                                if (!(message.attachments && message.attachments.length))
                                    message.attachments = [];
                                message.attachments.push($root.protocol.harmonytypes.v1.Attachment.decode(reader, reader.uint32()));
                                break;
                            case 12:
                                message.updateAttachments = reader.bool();
                                break;
                            case 13:
                                message.overrides = $root.protocol.harmonytypes.v1.Override.decode(reader, reader.uint32());
                                break;
                            case 14:
                                message.updateOverrides = reader.bool();
                                break;
                            case 15:
                                message.metadata = $root.protocol.harmonytypes.v1.Metadata.decode(reader, reader.uint32());
                                break;
                            case 16:
                                message.updateMetadata = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    MessageUpdated.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.MessageUpdated)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.MessageUpdated();
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        if (object.channelId != null)
                            if ($util.Long)
                                (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                            else if (typeof object.channelId === "string")
                                message.channelId = parseInt(object.channelId, 10);
                            else if (typeof object.channelId === "number")
                                message.channelId = object.channelId;
                            else if (typeof object.channelId === "object")
                                message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                        if (object.messageId != null)
                            if ($util.Long)
                                (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = true;
                            else if (typeof object.messageId === "string")
                                message.messageId = parseInt(object.messageId, 10);
                            else if (typeof object.messageId === "number")
                                message.messageId = object.messageId;
                            else if (typeof object.messageId === "object")
                                message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber(true);
                        if (object.editedAt != null) {
                            if (typeof object.editedAt !== "object")
                                throw TypeError(".protocol.chat.v1.Event.MessageUpdated.editedAt: object expected");
                            message.editedAt = $root.google.protobuf.Timestamp.fromObject(object.editedAt);
                        }
                        if (object.content != null)
                            message.content = String(object.content);
                        if (object.updateContent != null)
                            message.updateContent = Boolean(object.updateContent);
                        if (object.embeds) {
                            if (!Array.isArray(object.embeds))
                                throw TypeError(".protocol.chat.v1.Event.MessageUpdated.embeds: array expected");
                            message.embeds = [];
                            for (var i = 0; i < object.embeds.length; ++i) {
                                if (typeof object.embeds[i] !== "object")
                                    throw TypeError(".protocol.chat.v1.Event.MessageUpdated.embeds: object expected");
                                message.embeds[i] = $root.protocol.harmonytypes.v1.Embed.fromObject(object.embeds[i]);
                            }
                        }
                        if (object.updateEmbeds != null)
                            message.updateEmbeds = Boolean(object.updateEmbeds);
                        if (object.actions) {
                            if (!Array.isArray(object.actions))
                                throw TypeError(".protocol.chat.v1.Event.MessageUpdated.actions: array expected");
                            message.actions = [];
                            for (var i = 0; i < object.actions.length; ++i) {
                                if (typeof object.actions[i] !== "object")
                                    throw TypeError(".protocol.chat.v1.Event.MessageUpdated.actions: object expected");
                                message.actions[i] = $root.protocol.harmonytypes.v1.Action.fromObject(object.actions[i]);
                            }
                        }
                        if (object.updateActions != null)
                            message.updateActions = Boolean(object.updateActions);
                        if (object.attachments) {
                            if (!Array.isArray(object.attachments))
                                throw TypeError(".protocol.chat.v1.Event.MessageUpdated.attachments: array expected");
                            message.attachments = [];
                            for (var i = 0; i < object.attachments.length; ++i) {
                                if (typeof object.attachments[i] !== "object")
                                    throw TypeError(".protocol.chat.v1.Event.MessageUpdated.attachments: object expected");
                                message.attachments[i] = $root.protocol.harmonytypes.v1.Attachment.fromObject(object.attachments[i]);
                            }
                        }
                        if (object.updateAttachments != null)
                            message.updateAttachments = Boolean(object.updateAttachments);
                        if (object.overrides != null) {
                            if (typeof object.overrides !== "object")
                                throw TypeError(".protocol.chat.v1.Event.MessageUpdated.overrides: object expected");
                            message.overrides = $root.protocol.harmonytypes.v1.Override.fromObject(object.overrides);
                        }
                        if (object.updateOverrides != null)
                            message.updateOverrides = Boolean(object.updateOverrides);
                        if (object.metadata != null) {
                            if (typeof object.metadata !== "object")
                                throw TypeError(".protocol.chat.v1.Event.MessageUpdated.metadata: object expected");
                            message.metadata = $root.protocol.harmonytypes.v1.Metadata.fromObject(object.metadata);
                        }
                        if (object.updateMetadata != null)
                            message.updateMetadata = Boolean(object.updateMetadata);
                        return message;
                    };

                    MessageUpdated.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.embeds = [];
                            object.actions = [];
                            object.attachments = [];
                        }
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.channelId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.messageId = options.longs === String ? "0" : 0;
                            object.editedAt = null;
                            object.content = "";
                            object.updateContent = false;
                            object.updateEmbeds = false;
                            object.updateActions = false;
                            object.updateAttachments = false;
                            object.overrides = null;
                            object.updateOverrides = false;
                            object.metadata = null;
                            object.updateMetadata = false;
                        }
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        if (message.channelId != null && message.hasOwnProperty("channelId"))
                            if (typeof message.channelId === "number")
                                object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                            else
                                object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                        if (message.messageId != null && message.hasOwnProperty("messageId"))
                            if (typeof message.messageId === "number")
                                object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                            else
                                object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber(true) : message.messageId;
                        if (message.editedAt != null && message.hasOwnProperty("editedAt"))
                            object.editedAt = $root.google.protobuf.Timestamp.toObject(message.editedAt, options);
                        if (message.content != null && message.hasOwnProperty("content"))
                            object.content = message.content;
                        if (message.updateContent != null && message.hasOwnProperty("updateContent"))
                            object.updateContent = message.updateContent;
                        if (message.embeds && message.embeds.length) {
                            object.embeds = [];
                            for (var j = 0; j < message.embeds.length; ++j)
                                object.embeds[j] = $root.protocol.harmonytypes.v1.Embed.toObject(message.embeds[j], options);
                        }
                        if (message.updateEmbeds != null && message.hasOwnProperty("updateEmbeds"))
                            object.updateEmbeds = message.updateEmbeds;
                        if (message.actions && message.actions.length) {
                            object.actions = [];
                            for (var j = 0; j < message.actions.length; ++j)
                                object.actions[j] = $root.protocol.harmonytypes.v1.Action.toObject(message.actions[j], options);
                        }
                        if (message.updateActions != null && message.hasOwnProperty("updateActions"))
                            object.updateActions = message.updateActions;
                        if (message.attachments && message.attachments.length) {
                            object.attachments = [];
                            for (var j = 0; j < message.attachments.length; ++j)
                                object.attachments[j] = $root.protocol.harmonytypes.v1.Attachment.toObject(message.attachments[j], options);
                        }
                        if (message.updateAttachments != null && message.hasOwnProperty("updateAttachments"))
                            object.updateAttachments = message.updateAttachments;
                        if (message.overrides != null && message.hasOwnProperty("overrides"))
                            object.overrides = $root.protocol.harmonytypes.v1.Override.toObject(message.overrides, options);
                        if (message.updateOverrides != null && message.hasOwnProperty("updateOverrides"))
                            object.updateOverrides = message.updateOverrides;
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            object.metadata = $root.protocol.harmonytypes.v1.Metadata.toObject(message.metadata, options);
                        if (message.updateMetadata != null && message.hasOwnProperty("updateMetadata"))
                            object.updateMetadata = message.updateMetadata;
                        return object;
                    };

                    MessageUpdated.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MessageUpdated;
                })();

                Event.MessageDeleted = (function() {

                    function MessageDeleted(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    MessageDeleted.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    MessageDeleted.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    MessageDeleted.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    MessageDeleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(8).uint64(message.guildId);
                        if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                            writer.uint32(16).uint64(message.channelId);
                        if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                            writer.uint32(24).uint64(message.messageId);
                        return writer;
                    };

                    MessageDeleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.MessageDeleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.guildId = reader.uint64();
                                break;
                            case 2:
                                message.channelId = reader.uint64();
                                break;
                            case 3:
                                message.messageId = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    MessageDeleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.MessageDeleted)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.MessageDeleted();
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        if (object.channelId != null)
                            if ($util.Long)
                                (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                            else if (typeof object.channelId === "string")
                                message.channelId = parseInt(object.channelId, 10);
                            else if (typeof object.channelId === "number")
                                message.channelId = object.channelId;
                            else if (typeof object.channelId === "object")
                                message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                        if (object.messageId != null)
                            if ($util.Long)
                                (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = true;
                            else if (typeof object.messageId === "string")
                                message.messageId = parseInt(object.messageId, 10);
                            else if (typeof object.messageId === "number")
                                message.messageId = object.messageId;
                            else if (typeof object.messageId === "object")
                                message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber(true);
                        return message;
                    };

                    MessageDeleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.channelId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.messageId = options.longs === String ? "0" : 0;
                        }
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        if (message.channelId != null && message.hasOwnProperty("channelId"))
                            if (typeof message.channelId === "number")
                                object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                            else
                                object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                        if (message.messageId != null && message.hasOwnProperty("messageId"))
                            if (typeof message.messageId === "number")
                                object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                            else
                                object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber(true) : message.messageId;
                        return object;
                    };

                    MessageDeleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MessageDeleted;
                })();

                Event.ChannelCreated = (function() {

                    function ChannelCreated(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ChannelCreated.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    ChannelCreated.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    ChannelCreated.prototype.name = "";
                    ChannelCreated.prototype.previousId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    ChannelCreated.prototype.nextId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    ChannelCreated.prototype.isCategory = false;
                    ChannelCreated.prototype.metadata = null;

                    ChannelCreated.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(8).uint64(message.guildId);
                        if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                            writer.uint32(16).uint64(message.channelId);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(26).string(message.name);
                        if (message.previousId != null && Object.hasOwnProperty.call(message, "previousId"))
                            writer.uint32(32).uint64(message.previousId);
                        if (message.nextId != null && Object.hasOwnProperty.call(message, "nextId"))
                            writer.uint32(40).uint64(message.nextId);
                        if (message.isCategory != null && Object.hasOwnProperty.call(message, "isCategory"))
                            writer.uint32(48).bool(message.isCategory);
                        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                            $root.protocol.harmonytypes.v1.Metadata.encode(message.metadata, writer.uint32(58).fork()).ldelim();
                        return writer;
                    };

                    ChannelCreated.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.ChannelCreated();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.guildId = reader.uint64();
                                break;
                            case 2:
                                message.channelId = reader.uint64();
                                break;
                            case 3:
                                message.name = reader.string();
                                break;
                            case 4:
                                message.previousId = reader.uint64();
                                break;
                            case 5:
                                message.nextId = reader.uint64();
                                break;
                            case 6:
                                message.isCategory = reader.bool();
                                break;
                            case 7:
                                message.metadata = $root.protocol.harmonytypes.v1.Metadata.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ChannelCreated.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.ChannelCreated)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.ChannelCreated();
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        if (object.channelId != null)
                            if ($util.Long)
                                (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                            else if (typeof object.channelId === "string")
                                message.channelId = parseInt(object.channelId, 10);
                            else if (typeof object.channelId === "number")
                                message.channelId = object.channelId;
                            else if (typeof object.channelId === "object")
                                message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.previousId != null)
                            if ($util.Long)
                                (message.previousId = $util.Long.fromValue(object.previousId)).unsigned = true;
                            else if (typeof object.previousId === "string")
                                message.previousId = parseInt(object.previousId, 10);
                            else if (typeof object.previousId === "number")
                                message.previousId = object.previousId;
                            else if (typeof object.previousId === "object")
                                message.previousId = new $util.LongBits(object.previousId.low >>> 0, object.previousId.high >>> 0).toNumber(true);
                        if (object.nextId != null)
                            if ($util.Long)
                                (message.nextId = $util.Long.fromValue(object.nextId)).unsigned = true;
                            else if (typeof object.nextId === "string")
                                message.nextId = parseInt(object.nextId, 10);
                            else if (typeof object.nextId === "number")
                                message.nextId = object.nextId;
                            else if (typeof object.nextId === "object")
                                message.nextId = new $util.LongBits(object.nextId.low >>> 0, object.nextId.high >>> 0).toNumber(true);
                        if (object.isCategory != null)
                            message.isCategory = Boolean(object.isCategory);
                        if (object.metadata != null) {
                            if (typeof object.metadata !== "object")
                                throw TypeError(".protocol.chat.v1.Event.ChannelCreated.metadata: object expected");
                            message.metadata = $root.protocol.harmonytypes.v1.Metadata.fromObject(object.metadata);
                        }
                        return message;
                    };

                    ChannelCreated.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.channelId = options.longs === String ? "0" : 0;
                            object.name = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.previousId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.previousId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.nextId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.nextId = options.longs === String ? "0" : 0;
                            object.isCategory = false;
                            object.metadata = null;
                        }
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        if (message.channelId != null && message.hasOwnProperty("channelId"))
                            if (typeof message.channelId === "number")
                                object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                            else
                                object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.previousId != null && message.hasOwnProperty("previousId"))
                            if (typeof message.previousId === "number")
                                object.previousId = options.longs === String ? String(message.previousId) : message.previousId;
                            else
                                object.previousId = options.longs === String ? $util.Long.prototype.toString.call(message.previousId) : options.longs === Number ? new $util.LongBits(message.previousId.low >>> 0, message.previousId.high >>> 0).toNumber(true) : message.previousId;
                        if (message.nextId != null && message.hasOwnProperty("nextId"))
                            if (typeof message.nextId === "number")
                                object.nextId = options.longs === String ? String(message.nextId) : message.nextId;
                            else
                                object.nextId = options.longs === String ? $util.Long.prototype.toString.call(message.nextId) : options.longs === Number ? new $util.LongBits(message.nextId.low >>> 0, message.nextId.high >>> 0).toNumber(true) : message.nextId;
                        if (message.isCategory != null && message.hasOwnProperty("isCategory"))
                            object.isCategory = message.isCategory;
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            object.metadata = $root.protocol.harmonytypes.v1.Metadata.toObject(message.metadata, options);
                        return object;
                    };

                    ChannelCreated.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ChannelCreated;
                })();

                Event.ChannelUpdated = (function() {

                    function ChannelUpdated(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ChannelUpdated.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    ChannelUpdated.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    ChannelUpdated.prototype.name = "";
                    ChannelUpdated.prototype.updateName = false;
                    ChannelUpdated.prototype.previousId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    ChannelUpdated.prototype.nextId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    ChannelUpdated.prototype.updateOrder = false;
                    ChannelUpdated.prototype.metadata = null;
                    ChannelUpdated.prototype.updateMetadata = false;

                    ChannelUpdated.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(8).uint64(message.guildId);
                        if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                            writer.uint32(16).uint64(message.channelId);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(26).string(message.name);
                        if (message.updateName != null && Object.hasOwnProperty.call(message, "updateName"))
                            writer.uint32(32).bool(message.updateName);
                        if (message.previousId != null && Object.hasOwnProperty.call(message, "previousId"))
                            writer.uint32(40).uint64(message.previousId);
                        if (message.nextId != null && Object.hasOwnProperty.call(message, "nextId"))
                            writer.uint32(48).uint64(message.nextId);
                        if (message.updateOrder != null && Object.hasOwnProperty.call(message, "updateOrder"))
                            writer.uint32(56).bool(message.updateOrder);
                        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                            $root.protocol.harmonytypes.v1.Metadata.encode(message.metadata, writer.uint32(66).fork()).ldelim();
                        if (message.updateMetadata != null && Object.hasOwnProperty.call(message, "updateMetadata"))
                            writer.uint32(72).bool(message.updateMetadata);
                        return writer;
                    };

                    ChannelUpdated.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.ChannelUpdated();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.guildId = reader.uint64();
                                break;
                            case 2:
                                message.channelId = reader.uint64();
                                break;
                            case 3:
                                message.name = reader.string();
                                break;
                            case 4:
                                message.updateName = reader.bool();
                                break;
                            case 5:
                                message.previousId = reader.uint64();
                                break;
                            case 6:
                                message.nextId = reader.uint64();
                                break;
                            case 7:
                                message.updateOrder = reader.bool();
                                break;
                            case 8:
                                message.metadata = $root.protocol.harmonytypes.v1.Metadata.decode(reader, reader.uint32());
                                break;
                            case 9:
                                message.updateMetadata = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ChannelUpdated.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.ChannelUpdated)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.ChannelUpdated();
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        if (object.channelId != null)
                            if ($util.Long)
                                (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                            else if (typeof object.channelId === "string")
                                message.channelId = parseInt(object.channelId, 10);
                            else if (typeof object.channelId === "number")
                                message.channelId = object.channelId;
                            else if (typeof object.channelId === "object")
                                message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.updateName != null)
                            message.updateName = Boolean(object.updateName);
                        if (object.previousId != null)
                            if ($util.Long)
                                (message.previousId = $util.Long.fromValue(object.previousId)).unsigned = true;
                            else if (typeof object.previousId === "string")
                                message.previousId = parseInt(object.previousId, 10);
                            else if (typeof object.previousId === "number")
                                message.previousId = object.previousId;
                            else if (typeof object.previousId === "object")
                                message.previousId = new $util.LongBits(object.previousId.low >>> 0, object.previousId.high >>> 0).toNumber(true);
                        if (object.nextId != null)
                            if ($util.Long)
                                (message.nextId = $util.Long.fromValue(object.nextId)).unsigned = true;
                            else if (typeof object.nextId === "string")
                                message.nextId = parseInt(object.nextId, 10);
                            else if (typeof object.nextId === "number")
                                message.nextId = object.nextId;
                            else if (typeof object.nextId === "object")
                                message.nextId = new $util.LongBits(object.nextId.low >>> 0, object.nextId.high >>> 0).toNumber(true);
                        if (object.updateOrder != null)
                            message.updateOrder = Boolean(object.updateOrder);
                        if (object.metadata != null) {
                            if (typeof object.metadata !== "object")
                                throw TypeError(".protocol.chat.v1.Event.ChannelUpdated.metadata: object expected");
                            message.metadata = $root.protocol.harmonytypes.v1.Metadata.fromObject(object.metadata);
                        }
                        if (object.updateMetadata != null)
                            message.updateMetadata = Boolean(object.updateMetadata);
                        return message;
                    };

                    ChannelUpdated.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.channelId = options.longs === String ? "0" : 0;
                            object.name = "";
                            object.updateName = false;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.previousId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.previousId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.nextId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.nextId = options.longs === String ? "0" : 0;
                            object.updateOrder = false;
                            object.metadata = null;
                            object.updateMetadata = false;
                        }
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        if (message.channelId != null && message.hasOwnProperty("channelId"))
                            if (typeof message.channelId === "number")
                                object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                            else
                                object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.updateName != null && message.hasOwnProperty("updateName"))
                            object.updateName = message.updateName;
                        if (message.previousId != null && message.hasOwnProperty("previousId"))
                            if (typeof message.previousId === "number")
                                object.previousId = options.longs === String ? String(message.previousId) : message.previousId;
                            else
                                object.previousId = options.longs === String ? $util.Long.prototype.toString.call(message.previousId) : options.longs === Number ? new $util.LongBits(message.previousId.low >>> 0, message.previousId.high >>> 0).toNumber(true) : message.previousId;
                        if (message.nextId != null && message.hasOwnProperty("nextId"))
                            if (typeof message.nextId === "number")
                                object.nextId = options.longs === String ? String(message.nextId) : message.nextId;
                            else
                                object.nextId = options.longs === String ? $util.Long.prototype.toString.call(message.nextId) : options.longs === Number ? new $util.LongBits(message.nextId.low >>> 0, message.nextId.high >>> 0).toNumber(true) : message.nextId;
                        if (message.updateOrder != null && message.hasOwnProperty("updateOrder"))
                            object.updateOrder = message.updateOrder;
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            object.metadata = $root.protocol.harmonytypes.v1.Metadata.toObject(message.metadata, options);
                        if (message.updateMetadata != null && message.hasOwnProperty("updateMetadata"))
                            object.updateMetadata = message.updateMetadata;
                        return object;
                    };

                    ChannelUpdated.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ChannelUpdated;
                })();

                Event.ChannelDeleted = (function() {

                    function ChannelDeleted(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ChannelDeleted.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    ChannelDeleted.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    ChannelDeleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(8).uint64(message.guildId);
                        if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                            writer.uint32(16).uint64(message.channelId);
                        return writer;
                    };

                    ChannelDeleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.ChannelDeleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.guildId = reader.uint64();
                                break;
                            case 2:
                                message.channelId = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ChannelDeleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.ChannelDeleted)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.ChannelDeleted();
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
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

                    ChannelDeleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.channelId = options.longs === String ? "0" : 0;
                        }
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        if (message.channelId != null && message.hasOwnProperty("channelId"))
                            if (typeof message.channelId === "number")
                                object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                            else
                                object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                        return object;
                    };

                    ChannelDeleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ChannelDeleted;
                })();

                Event.GuildUpdated = (function() {

                    function GuildUpdated(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    GuildUpdated.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    GuildUpdated.prototype.name = "";
                    GuildUpdated.prototype.updateName = false;
                    GuildUpdated.prototype.picture = "";
                    GuildUpdated.prototype.updatePicture = false;
                    GuildUpdated.prototype.metadata = null;
                    GuildUpdated.prototype.updateMetadata = false;

                    GuildUpdated.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(8).uint64(message.guildId);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(18).string(message.name);
                        if (message.updateName != null && Object.hasOwnProperty.call(message, "updateName"))
                            writer.uint32(24).bool(message.updateName);
                        if (message.picture != null && Object.hasOwnProperty.call(message, "picture"))
                            writer.uint32(34).string(message.picture);
                        if (message.updatePicture != null && Object.hasOwnProperty.call(message, "updatePicture"))
                            writer.uint32(40).bool(message.updatePicture);
                        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                            $root.protocol.harmonytypes.v1.Metadata.encode(message.metadata, writer.uint32(50).fork()).ldelim();
                        if (message.updateMetadata != null && Object.hasOwnProperty.call(message, "updateMetadata"))
                            writer.uint32(56).bool(message.updateMetadata);
                        return writer;
                    };

                    GuildUpdated.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.GuildUpdated();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.guildId = reader.uint64();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.updateName = reader.bool();
                                break;
                            case 4:
                                message.picture = reader.string();
                                break;
                            case 5:
                                message.updatePicture = reader.bool();
                                break;
                            case 6:
                                message.metadata = $root.protocol.harmonytypes.v1.Metadata.decode(reader, reader.uint32());
                                break;
                            case 7:
                                message.updateMetadata = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    GuildUpdated.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.GuildUpdated)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.GuildUpdated();
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.updateName != null)
                            message.updateName = Boolean(object.updateName);
                        if (object.picture != null)
                            message.picture = String(object.picture);
                        if (object.updatePicture != null)
                            message.updatePicture = Boolean(object.updatePicture);
                        if (object.metadata != null) {
                            if (typeof object.metadata !== "object")
                                throw TypeError(".protocol.chat.v1.Event.GuildUpdated.metadata: object expected");
                            message.metadata = $root.protocol.harmonytypes.v1.Metadata.fromObject(object.metadata);
                        }
                        if (object.updateMetadata != null)
                            message.updateMetadata = Boolean(object.updateMetadata);
                        return message;
                    };

                    GuildUpdated.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                            object.name = "";
                            object.updateName = false;
                            object.picture = "";
                            object.updatePicture = false;
                            object.metadata = null;
                            object.updateMetadata = false;
                        }
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.updateName != null && message.hasOwnProperty("updateName"))
                            object.updateName = message.updateName;
                        if (message.picture != null && message.hasOwnProperty("picture"))
                            object.picture = message.picture;
                        if (message.updatePicture != null && message.hasOwnProperty("updatePicture"))
                            object.updatePicture = message.updatePicture;
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            object.metadata = $root.protocol.harmonytypes.v1.Metadata.toObject(message.metadata, options);
                        if (message.updateMetadata != null && message.hasOwnProperty("updateMetadata"))
                            object.updateMetadata = message.updateMetadata;
                        return object;
                    };

                    GuildUpdated.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GuildUpdated;
                })();

                Event.GuildDeleted = (function() {

                    function GuildDeleted(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    GuildDeleted.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    GuildDeleted.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(8).uint64(message.guildId);
                        return writer;
                    };

                    GuildDeleted.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.GuildDeleted();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.guildId = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    GuildDeleted.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.GuildDeleted)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.GuildDeleted();
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        return message;
                    };

                    GuildDeleted.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        return object;
                    };

                    GuildDeleted.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GuildDeleted;
                })();

                Event.MemberJoined = (function() {

                    function MemberJoined(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    MemberJoined.prototype.memberId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    MemberJoined.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    MemberJoined.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.memberId != null && Object.hasOwnProperty.call(message, "memberId"))
                            writer.uint32(8).uint64(message.memberId);
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(16).uint64(message.guildId);
                        return writer;
                    };

                    MemberJoined.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.MemberJoined();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.memberId = reader.uint64();
                                break;
                            case 2:
                                message.guildId = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    MemberJoined.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.MemberJoined)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.MemberJoined();
                        if (object.memberId != null)
                            if ($util.Long)
                                (message.memberId = $util.Long.fromValue(object.memberId)).unsigned = true;
                            else if (typeof object.memberId === "string")
                                message.memberId = parseInt(object.memberId, 10);
                            else if (typeof object.memberId === "number")
                                message.memberId = object.memberId;
                            else if (typeof object.memberId === "object")
                                message.memberId = new $util.LongBits(object.memberId.low >>> 0, object.memberId.high >>> 0).toNumber(true);
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        return message;
                    };

                    MemberJoined.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.memberId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.memberId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                        }
                        if (message.memberId != null && message.hasOwnProperty("memberId"))
                            if (typeof message.memberId === "number")
                                object.memberId = options.longs === String ? String(message.memberId) : message.memberId;
                            else
                                object.memberId = options.longs === String ? $util.Long.prototype.toString.call(message.memberId) : options.longs === Number ? new $util.LongBits(message.memberId.low >>> 0, message.memberId.high >>> 0).toNumber(true) : message.memberId;
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        return object;
                    };

                    MemberJoined.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MemberJoined;
                })();

                Event.MemberLeft = (function() {

                    function MemberLeft(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    MemberLeft.prototype.memberId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    MemberLeft.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    MemberLeft.prototype.leaveReason = 0;

                    MemberLeft.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.memberId != null && Object.hasOwnProperty.call(message, "memberId"))
                            writer.uint32(8).uint64(message.memberId);
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(16).uint64(message.guildId);
                        if (message.leaveReason != null && Object.hasOwnProperty.call(message, "leaveReason"))
                            writer.uint32(24).int32(message.leaveReason);
                        return writer;
                    };

                    MemberLeft.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.MemberLeft();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.memberId = reader.uint64();
                                break;
                            case 2:
                                message.guildId = reader.uint64();
                                break;
                            case 3:
                                message.leaveReason = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    MemberLeft.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.MemberLeft)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.MemberLeft();
                        if (object.memberId != null)
                            if ($util.Long)
                                (message.memberId = $util.Long.fromValue(object.memberId)).unsigned = true;
                            else if (typeof object.memberId === "string")
                                message.memberId = parseInt(object.memberId, 10);
                            else if (typeof object.memberId === "number")
                                message.memberId = object.memberId;
                            else if (typeof object.memberId === "object")
                                message.memberId = new $util.LongBits(object.memberId.low >>> 0, object.memberId.high >>> 0).toNumber(true);
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        switch (object.leaveReason) {
                        case "willingly":
                        case 0:
                            message.leaveReason = 0;
                            break;
                        case "banned":
                        case 1:
                            message.leaveReason = 1;
                            break;
                        case "kicked":
                        case 2:
                            message.leaveReason = 2;
                            break;
                        }
                        return message;
                    };

                    MemberLeft.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.memberId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.memberId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                            object.leaveReason = options.enums === String ? "willingly" : 0;
                        }
                        if (message.memberId != null && message.hasOwnProperty("memberId"))
                            if (typeof message.memberId === "number")
                                object.memberId = options.longs === String ? String(message.memberId) : message.memberId;
                            else
                                object.memberId = options.longs === String ? $util.Long.prototype.toString.call(message.memberId) : options.longs === Number ? new $util.LongBits(message.memberId.low >>> 0, message.memberId.high >>> 0).toNumber(true) : message.memberId;
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        if (message.leaveReason != null && message.hasOwnProperty("leaveReason"))
                            object.leaveReason = options.enums === String ? $root.protocol.chat.v1.Event.LeaveReason[message.leaveReason] : message.leaveReason;
                        return object;
                    };

                    MemberLeft.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MemberLeft;
                })();

                Event.GuildAddedToList = (function() {

                    function GuildAddedToList(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    GuildAddedToList.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    GuildAddedToList.prototype.homeserver = "";

                    GuildAddedToList.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(8).uint64(message.guildId);
                        if (message.homeserver != null && Object.hasOwnProperty.call(message, "homeserver"))
                            writer.uint32(18).string(message.homeserver);
                        return writer;
                    };

                    GuildAddedToList.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.GuildAddedToList();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.guildId = reader.uint64();
                                break;
                            case 2:
                                message.homeserver = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    GuildAddedToList.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.GuildAddedToList)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.GuildAddedToList();
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        if (object.homeserver != null)
                            message.homeserver = String(object.homeserver);
                        return message;
                    };

                    GuildAddedToList.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                            object.homeserver = "";
                        }
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        if (message.homeserver != null && message.hasOwnProperty("homeserver"))
                            object.homeserver = message.homeserver;
                        return object;
                    };

                    GuildAddedToList.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GuildAddedToList;
                })();

                Event.GuildRemovedFromList = (function() {

                    function GuildRemovedFromList(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    GuildRemovedFromList.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    GuildRemovedFromList.prototype.homeserver = "";

                    GuildRemovedFromList.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(8).uint64(message.guildId);
                        if (message.homeserver != null && Object.hasOwnProperty.call(message, "homeserver"))
                            writer.uint32(18).string(message.homeserver);
                        return writer;
                    };

                    GuildRemovedFromList.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.GuildRemovedFromList();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.guildId = reader.uint64();
                                break;
                            case 2:
                                message.homeserver = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    GuildRemovedFromList.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.GuildRemovedFromList)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.GuildRemovedFromList();
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        if (object.homeserver != null)
                            message.homeserver = String(object.homeserver);
                        return message;
                    };

                    GuildRemovedFromList.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                            object.homeserver = "";
                        }
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        if (message.homeserver != null && message.hasOwnProperty("homeserver"))
                            object.homeserver = message.homeserver;
                        return object;
                    };

                    GuildRemovedFromList.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GuildRemovedFromList;
                })();

                Event.ActionPerformed = (function() {

                    function ActionPerformed(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ActionPerformed.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    ActionPerformed.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    ActionPerformed.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    ActionPerformed.prototype.actionId = "";
                    ActionPerformed.prototype.actionData = "";

                    ActionPerformed.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(8).uint64(message.guildId);
                        if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                            writer.uint32(16).uint64(message.channelId);
                        if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                            writer.uint32(24).uint64(message.messageId);
                        if (message.actionId != null && Object.hasOwnProperty.call(message, "actionId"))
                            writer.uint32(34).string(message.actionId);
                        if (message.actionData != null && Object.hasOwnProperty.call(message, "actionData"))
                            writer.uint32(42).string(message.actionData);
                        return writer;
                    };

                    ActionPerformed.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.ActionPerformed();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.guildId = reader.uint64();
                                break;
                            case 2:
                                message.channelId = reader.uint64();
                                break;
                            case 3:
                                message.messageId = reader.uint64();
                                break;
                            case 4:
                                message.actionId = reader.string();
                                break;
                            case 5:
                                message.actionData = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ActionPerformed.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.ActionPerformed)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.ActionPerformed();
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        if (object.channelId != null)
                            if ($util.Long)
                                (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                            else if (typeof object.channelId === "string")
                                message.channelId = parseInt(object.channelId, 10);
                            else if (typeof object.channelId === "number")
                                message.channelId = object.channelId;
                            else if (typeof object.channelId === "object")
                                message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                        if (object.messageId != null)
                            if ($util.Long)
                                (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = true;
                            else if (typeof object.messageId === "string")
                                message.messageId = parseInt(object.messageId, 10);
                            else if (typeof object.messageId === "number")
                                message.messageId = object.messageId;
                            else if (typeof object.messageId === "object")
                                message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber(true);
                        if (object.actionId != null)
                            message.actionId = String(object.actionId);
                        if (object.actionData != null)
                            message.actionData = String(object.actionData);
                        return message;
                    };

                    ActionPerformed.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.channelId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.messageId = options.longs === String ? "0" : 0;
                            object.actionId = "";
                            object.actionData = "";
                        }
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        if (message.channelId != null && message.hasOwnProperty("channelId"))
                            if (typeof message.channelId === "number")
                                object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                            else
                                object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                        if (message.messageId != null && message.hasOwnProperty("messageId"))
                            if (typeof message.messageId === "number")
                                object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                            else
                                object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber(true) : message.messageId;
                        if (message.actionId != null && message.hasOwnProperty("actionId"))
                            object.actionId = message.actionId;
                        if (message.actionData != null && message.hasOwnProperty("actionData"))
                            object.actionData = message.actionData;
                        return object;
                    };

                    ActionPerformed.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ActionPerformed;
                })();

                Event.RoleMoved = (function() {

                    function RoleMoved(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    RoleMoved.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    RoleMoved.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    RoleMoved.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(8).uint64(message.guildId);
                        if (message.roleId != null && Object.hasOwnProperty.call(message, "roleId"))
                            writer.uint32(16).uint64(message.roleId);
                        return writer;
                    };

                    RoleMoved.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.RoleMoved();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.guildId = reader.uint64();
                                break;
                            case 2:
                                message.roleId = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    RoleMoved.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.RoleMoved)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.RoleMoved();
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                        if (object.roleId != null)
                            if ($util.Long)
                                (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = true;
                            else if (typeof object.roleId === "string")
                                message.roleId = parseInt(object.roleId, 10);
                            else if (typeof object.roleId === "number")
                                message.roleId = object.roleId;
                            else if (typeof object.roleId === "object")
                                message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber(true);
                        return message;
                    };

                    RoleMoved.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.roleId = options.longs === String ? "0" : 0;
                        }
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        if (message.roleId != null && message.hasOwnProperty("roleId"))
                            if (typeof message.roleId === "number")
                                object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                            else
                                object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber(true) : message.roleId;
                        return object;
                    };

                    RoleMoved.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RoleMoved;
                })();

                Event.ProfileUpdated = (function() {

                    function ProfileUpdated(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    ProfileUpdated.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    ProfileUpdated.prototype.newUsername = "";
                    ProfileUpdated.prototype.updateUsername = false;
                    ProfileUpdated.prototype.newAvatar = "";
                    ProfileUpdated.prototype.updateAvatar = false;
                    ProfileUpdated.prototype.newStatus = 0;
                    ProfileUpdated.prototype.updateStatus = false;
                    ProfileUpdated.prototype.isBot = false;
                    ProfileUpdated.prototype.updateIsBot = false;

                    ProfileUpdated.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                            writer.uint32(8).uint64(message.userId);
                        if (message.newUsername != null && Object.hasOwnProperty.call(message, "newUsername"))
                            writer.uint32(18).string(message.newUsername);
                        if (message.updateUsername != null && Object.hasOwnProperty.call(message, "updateUsername"))
                            writer.uint32(24).bool(message.updateUsername);
                        if (message.newAvatar != null && Object.hasOwnProperty.call(message, "newAvatar"))
                            writer.uint32(34).string(message.newAvatar);
                        if (message.updateAvatar != null && Object.hasOwnProperty.call(message, "updateAvatar"))
                            writer.uint32(40).bool(message.updateAvatar);
                        if (message.newStatus != null && Object.hasOwnProperty.call(message, "newStatus"))
                            writer.uint32(48).int32(message.newStatus);
                        if (message.updateStatus != null && Object.hasOwnProperty.call(message, "updateStatus"))
                            writer.uint32(56).bool(message.updateStatus);
                        if (message.isBot != null && Object.hasOwnProperty.call(message, "isBot"))
                            writer.uint32(64).bool(message.isBot);
                        if (message.updateIsBot != null && Object.hasOwnProperty.call(message, "updateIsBot"))
                            writer.uint32(72).bool(message.updateIsBot);
                        return writer;
                    };

                    ProfileUpdated.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.ProfileUpdated();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.userId = reader.uint64();
                                break;
                            case 2:
                                message.newUsername = reader.string();
                                break;
                            case 3:
                                message.updateUsername = reader.bool();
                                break;
                            case 4:
                                message.newAvatar = reader.string();
                                break;
                            case 5:
                                message.updateAvatar = reader.bool();
                                break;
                            case 6:
                                message.newStatus = reader.int32();
                                break;
                            case 7:
                                message.updateStatus = reader.bool();
                                break;
                            case 8:
                                message.isBot = reader.bool();
                                break;
                            case 9:
                                message.updateIsBot = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    ProfileUpdated.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.ProfileUpdated)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.ProfileUpdated();
                        if (object.userId != null)
                            if ($util.Long)
                                (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                            else if (typeof object.userId === "string")
                                message.userId = parseInt(object.userId, 10);
                            else if (typeof object.userId === "number")
                                message.userId = object.userId;
                            else if (typeof object.userId === "object")
                                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
                        if (object.newUsername != null)
                            message.newUsername = String(object.newUsername);
                        if (object.updateUsername != null)
                            message.updateUsername = Boolean(object.updateUsername);
                        if (object.newAvatar != null)
                            message.newAvatar = String(object.newAvatar);
                        if (object.updateAvatar != null)
                            message.updateAvatar = Boolean(object.updateAvatar);
                        switch (object.newStatus) {
                        case "USER_STATUS_ONLINE_UNSPECIFIED":
                        case 0:
                            message.newStatus = 0;
                            break;
                        case "USER_STATUS_STREAMING":
                        case 1:
                            message.newStatus = 1;
                            break;
                        case "USER_STATUS_DO_NOT_DISTURB":
                        case 2:
                            message.newStatus = 2;
                            break;
                        case "USER_STATUS_IDLE":
                        case 3:
                            message.newStatus = 3;
                            break;
                        case "USER_STATUS_OFFLINE":
                        case 4:
                            message.newStatus = 4;
                            break;
                        }
                        if (object.updateStatus != null)
                            message.updateStatus = Boolean(object.updateStatus);
                        if (object.isBot != null)
                            message.isBot = Boolean(object.isBot);
                        if (object.updateIsBot != null)
                            message.updateIsBot = Boolean(object.updateIsBot);
                        return message;
                    };

                    ProfileUpdated.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.userId = options.longs === String ? "0" : 0;
                            object.newUsername = "";
                            object.updateUsername = false;
                            object.newAvatar = "";
                            object.updateAvatar = false;
                            object.newStatus = options.enums === String ? "USER_STATUS_ONLINE_UNSPECIFIED" : 0;
                            object.updateStatus = false;
                            object.isBot = false;
                            object.updateIsBot = false;
                        }
                        if (message.userId != null && message.hasOwnProperty("userId"))
                            if (typeof message.userId === "number")
                                object.userId = options.longs === String ? String(message.userId) : message.userId;
                            else
                                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
                        if (message.newUsername != null && message.hasOwnProperty("newUsername"))
                            object.newUsername = message.newUsername;
                        if (message.updateUsername != null && message.hasOwnProperty("updateUsername"))
                            object.updateUsername = message.updateUsername;
                        if (message.newAvatar != null && message.hasOwnProperty("newAvatar"))
                            object.newAvatar = message.newAvatar;
                        if (message.updateAvatar != null && message.hasOwnProperty("updateAvatar"))
                            object.updateAvatar = message.updateAvatar;
                        if (message.newStatus != null && message.hasOwnProperty("newStatus"))
                            object.newStatus = options.enums === String ? $root.protocol.harmonytypes.v1.UserStatus[message.newStatus] : message.newStatus;
                        if (message.updateStatus != null && message.hasOwnProperty("updateStatus"))
                            object.updateStatus = message.updateStatus;
                        if (message.isBot != null && message.hasOwnProperty("isBot"))
                            object.isBot = message.isBot;
                        if (message.updateIsBot != null && message.hasOwnProperty("updateIsBot"))
                            object.updateIsBot = message.updateIsBot;
                        return object;
                    };

                    ProfileUpdated.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ProfileUpdated;
                })();

                Event.Typing = (function() {

                    function Typing(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Typing.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    Typing.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                    Typing.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                    Typing.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                            writer.uint32(8).uint64(message.userId);
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(16).uint64(message.guildId);
                        if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                            writer.uint32(24).uint64(message.channelId);
                        return writer;
                    };

                    Typing.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.Event.Typing();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.userId = reader.uint64();
                                break;
                            case 2:
                                message.guildId = reader.uint64();
                                break;
                            case 3:
                                message.channelId = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Typing.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.Event.Typing)
                            return object;
                        var message = new $root.protocol.chat.v1.Event.Typing();
                        if (object.userId != null)
                            if ($util.Long)
                                (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                            else if (typeof object.userId === "string")
                                message.userId = parseInt(object.userId, 10);
                            else if (typeof object.userId === "number")
                                message.userId = object.userId;
                            else if (typeof object.userId === "object")
                                message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
                        if (object.guildId != null)
                            if ($util.Long)
                                (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                            else if (typeof object.guildId === "string")
                                message.guildId = parseInt(object.guildId, 10);
                            else if (typeof object.guildId === "number")
                                message.guildId = object.guildId;
                            else if (typeof object.guildId === "object")
                                message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
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

                    Typing.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.userId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.guildId = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.channelId = options.longs === String ? "0" : 0;
                        }
                        if (message.userId != null && message.hasOwnProperty("userId"))
                            if (typeof message.userId === "number")
                                object.userId = options.longs === String ? String(message.userId) : message.userId;
                            else
                                object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
                        if (message.guildId != null && message.hasOwnProperty("guildId"))
                            if (typeof message.guildId === "number")
                                object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                            else
                                object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                        if (message.channelId != null && message.hasOwnProperty("channelId"))
                            if (typeof message.channelId === "number")
                                object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                            else
                                object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                        return object;
                    };

                    Typing.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Typing;
                })();

                return Event;
            })();

            v1.SyncRequest = (function() {

                function SyncRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                SyncRequest.prototype.token = "";
                SyncRequest.prototype.host = "";

                SyncRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                        writer.uint32(10).string(message.token);
                    if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                        writer.uint32(18).string(message.host);
                    return writer;
                };

                SyncRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.SyncRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.token = reader.string();
                            break;
                        case 2:
                            message.host = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                SyncRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.SyncRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.SyncRequest();
                    if (object.token != null)
                        message.token = String(object.token);
                    if (object.host != null)
                        message.host = String(object.host);
                    return message;
                };

                SyncRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.token = "";
                        object.host = "";
                    }
                    if (message.token != null && message.hasOwnProperty("token"))
                        object.token = message.token;
                    if (message.host != null && message.hasOwnProperty("host"))
                        object.host = message.host;
                    return object;
                };

                SyncRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SyncRequest;
            })();

            v1.SyncEvent = (function() {

                function SyncEvent(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                SyncEvent.prototype.dmInvite = null;

                var $oneOfFields;

                Object.defineProperty(SyncEvent.prototype, "event", {
                    get: $util.oneOfGetter($oneOfFields = ["dmInvite"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                SyncEvent.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.dmInvite != null && Object.hasOwnProperty.call(message, "dmInvite"))
                        $root.protocol.chat.v1.SyncEvent.DMInvite.encode(message.dmInvite, writer.uint32(10).fork()).ldelim();
                    return writer;
                };

                SyncEvent.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.SyncEvent();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.dmInvite = $root.protocol.chat.v1.SyncEvent.DMInvite.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                SyncEvent.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.SyncEvent)
                        return object;
                    var message = new $root.protocol.chat.v1.SyncEvent();
                    if (object.dmInvite != null) {
                        if (typeof object.dmInvite !== "object")
                            throw TypeError(".protocol.chat.v1.SyncEvent.dmInvite: object expected");
                        message.dmInvite = $root.protocol.chat.v1.SyncEvent.DMInvite.fromObject(object.dmInvite);
                    }
                    return message;
                };

                SyncEvent.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.dmInvite != null && message.hasOwnProperty("dmInvite")) {
                        object.dmInvite = $root.protocol.chat.v1.SyncEvent.DMInvite.toObject(message.dmInvite, options);
                        if (options.oneofs)
                            object.event = "dmInvite";
                    }
                    return object;
                };

                SyncEvent.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                SyncEvent.DMInvite = (function() {

                    function DMInvite(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    DMInvite.prototype.userName = "";
                    DMInvite.prototype.userAvatar = "";
                    DMInvite.prototype.dmName = "";
                    DMInvite.prototype.dmAvatar = "";
                    DMInvite.prototype.inviteId = "";

                    DMInvite.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                            writer.uint32(10).string(message.userName);
                        if (message.userAvatar != null && Object.hasOwnProperty.call(message, "userAvatar"))
                            writer.uint32(18).string(message.userAvatar);
                        if (message.dmName != null && Object.hasOwnProperty.call(message, "dmName"))
                            writer.uint32(26).string(message.dmName);
                        if (message.dmAvatar != null && Object.hasOwnProperty.call(message, "dmAvatar"))
                            writer.uint32(34).string(message.dmAvatar);
                        if (message.inviteId != null && Object.hasOwnProperty.call(message, "inviteId"))
                            writer.uint32(42).string(message.inviteId);
                        return writer;
                    };

                    DMInvite.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.SyncEvent.DMInvite();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.userName = reader.string();
                                break;
                            case 2:
                                message.userAvatar = reader.string();
                                break;
                            case 3:
                                message.dmName = reader.string();
                                break;
                            case 4:
                                message.dmAvatar = reader.string();
                                break;
                            case 5:
                                message.inviteId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    DMInvite.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.chat.v1.SyncEvent.DMInvite)
                            return object;
                        var message = new $root.protocol.chat.v1.SyncEvent.DMInvite();
                        if (object.userName != null)
                            message.userName = String(object.userName);
                        if (object.userAvatar != null)
                            message.userAvatar = String(object.userAvatar);
                        if (object.dmName != null)
                            message.dmName = String(object.dmName);
                        if (object.dmAvatar != null)
                            message.dmAvatar = String(object.dmAvatar);
                        if (object.inviteId != null)
                            message.inviteId = String(object.inviteId);
                        return message;
                    };

                    DMInvite.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.userName = "";
                            object.userAvatar = "";
                            object.dmName = "";
                            object.dmAvatar = "";
                            object.inviteId = "";
                        }
                        if (message.userName != null && message.hasOwnProperty("userName"))
                            object.userName = message.userName;
                        if (message.userAvatar != null && message.hasOwnProperty("userAvatar"))
                            object.userAvatar = message.userAvatar;
                        if (message.dmName != null && message.hasOwnProperty("dmName"))
                            object.dmName = message.dmName;
                        if (message.dmAvatar != null && message.hasOwnProperty("dmAvatar"))
                            object.dmAvatar = message.dmAvatar;
                        if (message.inviteId != null && message.hasOwnProperty("inviteId"))
                            object.inviteId = message.inviteId;
                        return object;
                    };

                    DMInvite.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DMInvite;
                })();

                return SyncEvent;
            })();

            v1.ChatService = (function() {

                function ChatService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (ChatService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ChatService;


                Object.defineProperty(ChatService.prototype.createGuild = function createGuild(request, callback) {
                    return this.rpcCall(createGuild, $root.protocol.chat.v1.CreateGuildRequest, $root.protocol.chat.v1.CreateGuildResponse, request, callback);
                }, "name", { value: "CreateGuild" });


                Object.defineProperty(ChatService.prototype.createInvite = function createInvite(request, callback) {
                    return this.rpcCall(createInvite, $root.protocol.chat.v1.CreateInviteRequest, $root.protocol.chat.v1.CreateInviteResponse, request, callback);
                }, "name", { value: "CreateInvite" });


                Object.defineProperty(ChatService.prototype.createChannel = function createChannel(request, callback) {
                    return this.rpcCall(createChannel, $root.protocol.chat.v1.CreateChannelRequest, $root.protocol.chat.v1.CreateChannelResponse, request, callback);
                }, "name", { value: "CreateChannel" });


                Object.defineProperty(ChatService.prototype.createEmotePack = function createEmotePack(request, callback) {
                    return this.rpcCall(createEmotePack, $root.protocol.chat.v1.CreateEmotePackRequest, $root.protocol.chat.v1.CreateEmotePackResponse, request, callback);
                }, "name", { value: "CreateEmotePack" });


                Object.defineProperty(ChatService.prototype.getGuildList = function getGuildList(request, callback) {
                    return this.rpcCall(getGuildList, $root.protocol.chat.v1.GetGuildListRequest, $root.protocol.chat.v1.GetGuildListResponse, request, callback);
                }, "name", { value: "GetGuildList" });


                Object.defineProperty(ChatService.prototype.addGuildToGuildList = function addGuildToGuildList(request, callback) {
                    return this.rpcCall(addGuildToGuildList, $root.protocol.chat.v1.AddGuildToGuildListRequest, $root.protocol.chat.v1.AddGuildToGuildListResponse, request, callback);
                }, "name", { value: "AddGuildToGuildList" });


                Object.defineProperty(ChatService.prototype.removeGuildFromGuildList = function removeGuildFromGuildList(request, callback) {
                    return this.rpcCall(removeGuildFromGuildList, $root.protocol.chat.v1.RemoveGuildFromGuildListRequest, $root.protocol.chat.v1.RemoveGuildFromGuildListResponse, request, callback);
                }, "name", { value: "RemoveGuildFromGuildList" });


                Object.defineProperty(ChatService.prototype.getGuild = function getGuild(request, callback) {
                    return this.rpcCall(getGuild, $root.protocol.chat.v1.GetGuildRequest, $root.protocol.chat.v1.GetGuildResponse, request, callback);
                }, "name", { value: "GetGuild" });


                Object.defineProperty(ChatService.prototype.getGuildInvites = function getGuildInvites(request, callback) {
                    return this.rpcCall(getGuildInvites, $root.protocol.chat.v1.GetGuildInvitesRequest, $root.protocol.chat.v1.GetGuildInvitesResponse, request, callback);
                }, "name", { value: "GetGuildInvites" });


                Object.defineProperty(ChatService.prototype.getGuildMembers = function getGuildMembers(request, callback) {
                    return this.rpcCall(getGuildMembers, $root.protocol.chat.v1.GetGuildMembersRequest, $root.protocol.chat.v1.GetGuildMembersResponse, request, callback);
                }, "name", { value: "GetGuildMembers" });


                Object.defineProperty(ChatService.prototype.getGuildChannels = function getGuildChannels(request, callback) {
                    return this.rpcCall(getGuildChannels, $root.protocol.chat.v1.GetGuildChannelsRequest, $root.protocol.chat.v1.GetGuildChannelsResponse, request, callback);
                }, "name", { value: "GetGuildChannels" });


                Object.defineProperty(ChatService.prototype.getChannelMessages = function getChannelMessages(request, callback) {
                    return this.rpcCall(getChannelMessages, $root.protocol.chat.v1.GetChannelMessagesRequest, $root.protocol.chat.v1.GetChannelMessagesResponse, request, callback);
                }, "name", { value: "GetChannelMessages" });


                Object.defineProperty(ChatService.prototype.getMessage = function getMessage(request, callback) {
                    return this.rpcCall(getMessage, $root.protocol.chat.v1.GetMessageRequest, $root.protocol.chat.v1.GetMessageResponse, request, callback);
                }, "name", { value: "GetMessage" });


                Object.defineProperty(ChatService.prototype.getEmotePacks = function getEmotePacks(request, callback) {
                    return this.rpcCall(getEmotePacks, $root.protocol.chat.v1.GetEmotePacksRequest, $root.protocol.chat.v1.GetEmotePacksResponse, request, callback);
                }, "name", { value: "GetEmotePacks" });


                Object.defineProperty(ChatService.prototype.getEmotePackEmotes = function getEmotePackEmotes(request, callback) {
                    return this.rpcCall(getEmotePackEmotes, $root.protocol.chat.v1.GetEmotePackEmotesRequest, $root.protocol.chat.v1.GetEmotePackEmotesResponse, request, callback);
                }, "name", { value: "GetEmotePackEmotes" });


                Object.defineProperty(ChatService.prototype.updateGuildInformation = function updateGuildInformation(request, callback) {
                    return this.rpcCall(updateGuildInformation, $root.protocol.chat.v1.UpdateGuildInformationRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "UpdateGuildInformation" });


                Object.defineProperty(ChatService.prototype.updateChannelInformation = function updateChannelInformation(request, callback) {
                    return this.rpcCall(updateChannelInformation, $root.protocol.chat.v1.UpdateChannelInformationRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "UpdateChannelInformation" });


                Object.defineProperty(ChatService.prototype.updateChannelOrder = function updateChannelOrder(request, callback) {
                    return this.rpcCall(updateChannelOrder, $root.protocol.chat.v1.UpdateChannelOrderRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "UpdateChannelOrder" });


                Object.defineProperty(ChatService.prototype.updateMessage = function updateMessage(request, callback) {
                    return this.rpcCall(updateMessage, $root.protocol.chat.v1.UpdateMessageRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "UpdateMessage" });


                Object.defineProperty(ChatService.prototype.addEmoteToPack = function addEmoteToPack(request, callback) {
                    return this.rpcCall(addEmoteToPack, $root.protocol.chat.v1.AddEmoteToPackRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "AddEmoteToPack" });


                Object.defineProperty(ChatService.prototype.deleteGuild = function deleteGuild(request, callback) {
                    return this.rpcCall(deleteGuild, $root.protocol.chat.v1.DeleteGuildRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "DeleteGuild" });


                Object.defineProperty(ChatService.prototype.deleteInvite = function deleteInvite(request, callback) {
                    return this.rpcCall(deleteInvite, $root.protocol.chat.v1.DeleteInviteRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "DeleteInvite" });


                Object.defineProperty(ChatService.prototype.deleteChannel = function deleteChannel(request, callback) {
                    return this.rpcCall(deleteChannel, $root.protocol.chat.v1.DeleteChannelRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "DeleteChannel" });


                Object.defineProperty(ChatService.prototype.deleteMessage = function deleteMessage(request, callback) {
                    return this.rpcCall(deleteMessage, $root.protocol.chat.v1.DeleteMessageRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "DeleteMessage" });


                Object.defineProperty(ChatService.prototype.deleteEmoteFromPack = function deleteEmoteFromPack(request, callback) {
                    return this.rpcCall(deleteEmoteFromPack, $root.protocol.chat.v1.DeleteEmoteFromPackRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "DeleteEmoteFromPack" });


                Object.defineProperty(ChatService.prototype.deleteEmotePack = function deleteEmotePack(request, callback) {
                    return this.rpcCall(deleteEmotePack, $root.protocol.chat.v1.DeleteEmotePackRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "DeleteEmotePack" });


                Object.defineProperty(ChatService.prototype.dequipEmotePack = function dequipEmotePack(request, callback) {
                    return this.rpcCall(dequipEmotePack, $root.protocol.chat.v1.DequipEmotePackRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "DequipEmotePack" });


                Object.defineProperty(ChatService.prototype.joinGuild = function joinGuild(request, callback) {
                    return this.rpcCall(joinGuild, $root.protocol.chat.v1.JoinGuildRequest, $root.protocol.chat.v1.JoinGuildResponse, request, callback);
                }, "name", { value: "JoinGuild" });


                Object.defineProperty(ChatService.prototype.leaveGuild = function leaveGuild(request, callback) {
                    return this.rpcCall(leaveGuild, $root.protocol.chat.v1.LeaveGuildRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "LeaveGuild" });


                Object.defineProperty(ChatService.prototype.triggerAction = function triggerAction(request, callback) {
                    return this.rpcCall(triggerAction, $root.protocol.chat.v1.TriggerActionRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "TriggerAction" });


                Object.defineProperty(ChatService.prototype.sendMessage = function sendMessage(request, callback) {
                    return this.rpcCall(sendMessage, $root.protocol.chat.v1.SendMessageRequest, $root.protocol.chat.v1.SendMessageResponse, request, callback);
                }, "name", { value: "SendMessage" });


                Object.defineProperty(ChatService.prototype.queryHasPermission = function queryHasPermission(request, callback) {
                    return this.rpcCall(queryHasPermission, $root.protocol.chat.v1.QueryPermissionsRequest, $root.protocol.chat.v1.QueryPermissionsResponse, request, callback);
                }, "name", { value: "QueryHasPermission" });


                Object.defineProperty(ChatService.prototype.setPermissions = function setPermissions(request, callback) {
                    return this.rpcCall(setPermissions, $root.protocol.chat.v1.SetPermissionsRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "SetPermissions" });


                Object.defineProperty(ChatService.prototype.getPermissions = function getPermissions(request, callback) {
                    return this.rpcCall(getPermissions, $root.protocol.chat.v1.GetPermissionsRequest, $root.protocol.chat.v1.GetPermissionsResponse, request, callback);
                }, "name", { value: "GetPermissions" });


                Object.defineProperty(ChatService.prototype.moveRole = function moveRole(request, callback) {
                    return this.rpcCall(moveRole, $root.protocol.chat.v1.MoveRoleRequest, $root.protocol.chat.v1.MoveRoleResponse, request, callback);
                }, "name", { value: "MoveRole" });


                Object.defineProperty(ChatService.prototype.getGuildRoles = function getGuildRoles(request, callback) {
                    return this.rpcCall(getGuildRoles, $root.protocol.chat.v1.GetGuildRolesRequest, $root.protocol.chat.v1.GetGuildRolesResponse, request, callback);
                }, "name", { value: "GetGuildRoles" });


                Object.defineProperty(ChatService.prototype.addGuildRole = function addGuildRole(request, callback) {
                    return this.rpcCall(addGuildRole, $root.protocol.chat.v1.AddGuildRoleRequest, $root.protocol.chat.v1.AddGuildRoleResponse, request, callback);
                }, "name", { value: "AddGuildRole" });


                Object.defineProperty(ChatService.prototype.modifyGuildRole = function modifyGuildRole(request, callback) {
                    return this.rpcCall(modifyGuildRole, $root.protocol.chat.v1.ModifyGuildRoleRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "ModifyGuildRole" });


                Object.defineProperty(ChatService.prototype.deleteGuildRole = function deleteGuildRole(request, callback) {
                    return this.rpcCall(deleteGuildRole, $root.protocol.chat.v1.DeleteGuildRoleRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "DeleteGuildRole" });


                Object.defineProperty(ChatService.prototype.manageUserRoles = function manageUserRoles(request, callback) {
                    return this.rpcCall(manageUserRoles, $root.protocol.chat.v1.ManageUserRolesRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "ManageUserRoles" });


                Object.defineProperty(ChatService.prototype.getUserRoles = function getUserRoles(request, callback) {
                    return this.rpcCall(getUserRoles, $root.protocol.chat.v1.GetUserRolesRequest, $root.protocol.chat.v1.GetUserRolesResponse, request, callback);
                }, "name", { value: "GetUserRoles" });


                Object.defineProperty(ChatService.prototype.streamEvents = function streamEvents(request, callback) {
                    return this.rpcCall(streamEvents, $root.protocol.chat.v1.StreamEventsRequest, $root.protocol.chat.v1.Event, request, callback);
                }, "name", { value: "StreamEvents" });


                Object.defineProperty(ChatService.prototype.sync = function sync(request, callback) {
                    return this.rpcCall(sync, $root.protocol.chat.v1.SyncRequest, $root.protocol.chat.v1.SyncEvent, request, callback);
                }, "name", { value: "Sync" });


                Object.defineProperty(ChatService.prototype.getUser = function getUser(request, callback) {
                    return this.rpcCall(getUser, $root.protocol.chat.v1.GetUserRequest, $root.protocol.chat.v1.GetUserResponse, request, callback);
                }, "name", { value: "GetUser" });


                Object.defineProperty(ChatService.prototype.getUserBulk = function getUserBulk(request, callback) {
                    return this.rpcCall(getUserBulk, $root.protocol.chat.v1.GetUserBulkRequest, $root.protocol.chat.v1.GetUserBulkResponse, request, callback);
                }, "name", { value: "GetUserBulk" });


                Object.defineProperty(ChatService.prototype.getUserMetadata = function getUserMetadata(request, callback) {
                    return this.rpcCall(getUserMetadata, $root.protocol.chat.v1.GetUserMetadataRequest, $root.protocol.chat.v1.GetUserMetadataResponse, request, callback);
                }, "name", { value: "GetUserMetadata" });


                Object.defineProperty(ChatService.prototype.profileUpdate = function profileUpdate(request, callback) {
                    return this.rpcCall(profileUpdate, $root.protocol.chat.v1.ProfileUpdateRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "ProfileUpdate" });


                Object.defineProperty(ChatService.prototype.typing = function typing(request, callback) {
                    return this.rpcCall(typing, $root.protocol.chat.v1.TypingRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "Typing" });


                Object.defineProperty(ChatService.prototype.previewGuild = function previewGuild(request, callback) {
                    return this.rpcCall(previewGuild, $root.protocol.chat.v1.PreviewGuildRequest, $root.protocol.chat.v1.PreviewGuildResponse, request, callback);
                }, "name", { value: "PreviewGuild" });


                Object.defineProperty(ChatService.prototype.banUser = function banUser(request, callback) {
                    return this.rpcCall(banUser, $root.protocol.chat.v1.BanUserRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "BanUser" });


                Object.defineProperty(ChatService.prototype.kickUser = function kickUser(request, callback) {
                    return this.rpcCall(kickUser, $root.protocol.chat.v1.KickUserRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "KickUser" });


                Object.defineProperty(ChatService.prototype.unbanUser = function unbanUser(request, callback) {
                    return this.rpcCall(unbanUser, $root.protocol.chat.v1.UnbanUserRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "UnbanUser" });

                return ChatService;
            })();

            v1.GetUserRequest = (function() {

                function GetUserRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetUserRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                GetUserRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                        writer.uint32(8).uint64(message.userId);
                    return writer;
                };

                GetUserRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetUserRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.userId = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetUserRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetUserRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.GetUserRequest();
                    if (object.userId != null)
                        if ($util.Long)
                            (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                        else if (typeof object.userId === "string")
                            message.userId = parseInt(object.userId, 10);
                        else if (typeof object.userId === "number")
                            message.userId = object.userId;
                        else if (typeof object.userId === "object")
                            message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
                    return message;
                };

                GetUserRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.userId = options.longs === String ? "0" : 0;
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (typeof message.userId === "number")
                            object.userId = options.longs === String ? String(message.userId) : message.userId;
                        else
                            object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
                    return object;
                };

                GetUserRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetUserRequest;
            })();

            v1.GetUserResponse = (function() {

                function GetUserResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetUserResponse.prototype.userName = "";
                GetUserResponse.prototype.userAvatar = "";
                GetUserResponse.prototype.userStatus = 0;
                GetUserResponse.prototype.isBot = false;

                GetUserResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                        writer.uint32(10).string(message.userName);
                    if (message.userAvatar != null && Object.hasOwnProperty.call(message, "userAvatar"))
                        writer.uint32(18).string(message.userAvatar);
                    if (message.userStatus != null && Object.hasOwnProperty.call(message, "userStatus"))
                        writer.uint32(24).int32(message.userStatus);
                    if (message.isBot != null && Object.hasOwnProperty.call(message, "isBot"))
                        writer.uint32(32).bool(message.isBot);
                    return writer;
                };

                GetUserResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetUserResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.userName = reader.string();
                            break;
                        case 2:
                            message.userAvatar = reader.string();
                            break;
                        case 3:
                            message.userStatus = reader.int32();
                            break;
                        case 4:
                            message.isBot = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetUserResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetUserResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetUserResponse();
                    if (object.userName != null)
                        message.userName = String(object.userName);
                    if (object.userAvatar != null)
                        message.userAvatar = String(object.userAvatar);
                    switch (object.userStatus) {
                    case "USER_STATUS_ONLINE_UNSPECIFIED":
                    case 0:
                        message.userStatus = 0;
                        break;
                    case "USER_STATUS_STREAMING":
                    case 1:
                        message.userStatus = 1;
                        break;
                    case "USER_STATUS_DO_NOT_DISTURB":
                    case 2:
                        message.userStatus = 2;
                        break;
                    case "USER_STATUS_IDLE":
                    case 3:
                        message.userStatus = 3;
                        break;
                    case "USER_STATUS_OFFLINE":
                    case 4:
                        message.userStatus = 4;
                        break;
                    }
                    if (object.isBot != null)
                        message.isBot = Boolean(object.isBot);
                    return message;
                };

                GetUserResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.userName = "";
                        object.userAvatar = "";
                        object.userStatus = options.enums === String ? "USER_STATUS_ONLINE_UNSPECIFIED" : 0;
                        object.isBot = false;
                    }
                    if (message.userName != null && message.hasOwnProperty("userName"))
                        object.userName = message.userName;
                    if (message.userAvatar != null && message.hasOwnProperty("userAvatar"))
                        object.userAvatar = message.userAvatar;
                    if (message.userStatus != null && message.hasOwnProperty("userStatus"))
                        object.userStatus = options.enums === String ? $root.protocol.harmonytypes.v1.UserStatus[message.userStatus] : message.userStatus;
                    if (message.isBot != null && message.hasOwnProperty("isBot"))
                        object.isBot = message.isBot;
                    return object;
                };

                GetUserResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetUserResponse;
            })();

            v1.GetUserBulkRequest = (function() {

                function GetUserBulkRequest(properties) {
                    this.userIds = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetUserBulkRequest.prototype.userIds = $util.emptyArray;

                GetUserBulkRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userIds != null && message.userIds.length) {
                        writer.uint32(10).fork();
                        for (var i = 0; i < message.userIds.length; ++i)
                            writer.uint64(message.userIds[i]);
                        writer.ldelim();
                    }
                    return writer;
                };

                GetUserBulkRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetUserBulkRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.userIds && message.userIds.length))
                                message.userIds = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.userIds.push(reader.uint64());
                            } else
                                message.userIds.push(reader.uint64());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetUserBulkRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetUserBulkRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.GetUserBulkRequest();
                    if (object.userIds) {
                        if (!Array.isArray(object.userIds))
                            throw TypeError(".protocol.chat.v1.GetUserBulkRequest.userIds: array expected");
                        message.userIds = [];
                        for (var i = 0; i < object.userIds.length; ++i)
                            if ($util.Long)
                                (message.userIds[i] = $util.Long.fromValue(object.userIds[i])).unsigned = true;
                            else if (typeof object.userIds[i] === "string")
                                message.userIds[i] = parseInt(object.userIds[i], 10);
                            else if (typeof object.userIds[i] === "number")
                                message.userIds[i] = object.userIds[i];
                            else if (typeof object.userIds[i] === "object")
                                message.userIds[i] = new $util.LongBits(object.userIds[i].low >>> 0, object.userIds[i].high >>> 0).toNumber(true);
                    }
                    return message;
                };

                GetUserBulkRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.userIds = [];
                    if (message.userIds && message.userIds.length) {
                        object.userIds = [];
                        for (var j = 0; j < message.userIds.length; ++j)
                            if (typeof message.userIds[j] === "number")
                                object.userIds[j] = options.longs === String ? String(message.userIds[j]) : message.userIds[j];
                            else
                                object.userIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.userIds[j]) : options.longs === Number ? new $util.LongBits(message.userIds[j].low >>> 0, message.userIds[j].high >>> 0).toNumber(true) : message.userIds[j];
                    }
                    return object;
                };

                GetUserBulkRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetUserBulkRequest;
            })();

            v1.GetUserBulkResponse = (function() {

                function GetUserBulkResponse(properties) {
                    this.users = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetUserBulkResponse.prototype.users = $util.emptyArray;

                GetUserBulkResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.users != null && message.users.length)
                        for (var i = 0; i < message.users.length; ++i)
                            $root.protocol.chat.v1.GetUserResponse.encode(message.users[i], writer.uint32(10).fork()).ldelim();
                    return writer;
                };

                GetUserBulkResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetUserBulkResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.users && message.users.length))
                                message.users = [];
                            message.users.push($root.protocol.chat.v1.GetUserResponse.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetUserBulkResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetUserBulkResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetUserBulkResponse();
                    if (object.users) {
                        if (!Array.isArray(object.users))
                            throw TypeError(".protocol.chat.v1.GetUserBulkResponse.users: array expected");
                        message.users = [];
                        for (var i = 0; i < object.users.length; ++i) {
                            if (typeof object.users[i] !== "object")
                                throw TypeError(".protocol.chat.v1.GetUserBulkResponse.users: object expected");
                            message.users[i] = $root.protocol.chat.v1.GetUserResponse.fromObject(object.users[i]);
                        }
                    }
                    return message;
                };

                GetUserBulkResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.users = [];
                    if (message.users && message.users.length) {
                        object.users = [];
                        for (var j = 0; j < message.users.length; ++j)
                            object.users[j] = $root.protocol.chat.v1.GetUserResponse.toObject(message.users[j], options);
                    }
                    return object;
                };

                GetUserBulkResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetUserBulkResponse;
            })();

            v1.GetUserMetadataRequest = (function() {

                function GetUserMetadataRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetUserMetadataRequest.prototype.appId = "";

                GetUserMetadataRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                        writer.uint32(10).string(message.appId);
                    return writer;
                };

                GetUserMetadataRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetUserMetadataRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.appId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetUserMetadataRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetUserMetadataRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.GetUserMetadataRequest();
                    if (object.appId != null)
                        message.appId = String(object.appId);
                    return message;
                };

                GetUserMetadataRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.appId = "";
                    if (message.appId != null && message.hasOwnProperty("appId"))
                        object.appId = message.appId;
                    return object;
                };

                GetUserMetadataRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetUserMetadataRequest;
            })();

            v1.GetUserMetadataResponse = (function() {

                function GetUserMetadataResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                GetUserMetadataResponse.prototype.metadata = "";

                GetUserMetadataResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        writer.uint32(10).string(message.metadata);
                    return writer;
                };

                GetUserMetadataResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.GetUserMetadataResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.metadata = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                GetUserMetadataResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.GetUserMetadataResponse)
                        return object;
                    var message = new $root.protocol.chat.v1.GetUserMetadataResponse();
                    if (object.metadata != null)
                        message.metadata = String(object.metadata);
                    return message;
                };

                GetUserMetadataResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.metadata = "";
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = message.metadata;
                    return object;
                };

                GetUserMetadataResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return GetUserMetadataResponse;
            })();

            v1.ProfileUpdateRequest = (function() {

                function ProfileUpdateRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                ProfileUpdateRequest.prototype.newUsername = "";
                ProfileUpdateRequest.prototype.updateUsername = false;
                ProfileUpdateRequest.prototype.newAvatar = "";
                ProfileUpdateRequest.prototype.updateAvatar = false;
                ProfileUpdateRequest.prototype.newStatus = 0;
                ProfileUpdateRequest.prototype.updateStatus = false;
                ProfileUpdateRequest.prototype.isBot = false;
                ProfileUpdateRequest.prototype.updateIsBot = false;

                ProfileUpdateRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.newUsername != null && Object.hasOwnProperty.call(message, "newUsername"))
                        writer.uint32(10).string(message.newUsername);
                    if (message.updateUsername != null && Object.hasOwnProperty.call(message, "updateUsername"))
                        writer.uint32(16).bool(message.updateUsername);
                    if (message.newAvatar != null && Object.hasOwnProperty.call(message, "newAvatar"))
                        writer.uint32(26).string(message.newAvatar);
                    if (message.updateAvatar != null && Object.hasOwnProperty.call(message, "updateAvatar"))
                        writer.uint32(32).bool(message.updateAvatar);
                    if (message.newStatus != null && Object.hasOwnProperty.call(message, "newStatus"))
                        writer.uint32(40).int32(message.newStatus);
                    if (message.updateStatus != null && Object.hasOwnProperty.call(message, "updateStatus"))
                        writer.uint32(48).bool(message.updateStatus);
                    if (message.isBot != null && Object.hasOwnProperty.call(message, "isBot"))
                        writer.uint32(56).bool(message.isBot);
                    if (message.updateIsBot != null && Object.hasOwnProperty.call(message, "updateIsBot"))
                        writer.uint32(64).bool(message.updateIsBot);
                    return writer;
                };

                ProfileUpdateRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.chat.v1.ProfileUpdateRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.newUsername = reader.string();
                            break;
                        case 2:
                            message.updateUsername = reader.bool();
                            break;
                        case 3:
                            message.newAvatar = reader.string();
                            break;
                        case 4:
                            message.updateAvatar = reader.bool();
                            break;
                        case 5:
                            message.newStatus = reader.int32();
                            break;
                        case 6:
                            message.updateStatus = reader.bool();
                            break;
                        case 7:
                            message.isBot = reader.bool();
                            break;
                        case 8:
                            message.updateIsBot = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                ProfileUpdateRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.chat.v1.ProfileUpdateRequest)
                        return object;
                    var message = new $root.protocol.chat.v1.ProfileUpdateRequest();
                    if (object.newUsername != null)
                        message.newUsername = String(object.newUsername);
                    if (object.updateUsername != null)
                        message.updateUsername = Boolean(object.updateUsername);
                    if (object.newAvatar != null)
                        message.newAvatar = String(object.newAvatar);
                    if (object.updateAvatar != null)
                        message.updateAvatar = Boolean(object.updateAvatar);
                    switch (object.newStatus) {
                    case "USER_STATUS_ONLINE_UNSPECIFIED":
                    case 0:
                        message.newStatus = 0;
                        break;
                    case "USER_STATUS_STREAMING":
                    case 1:
                        message.newStatus = 1;
                        break;
                    case "USER_STATUS_DO_NOT_DISTURB":
                    case 2:
                        message.newStatus = 2;
                        break;
                    case "USER_STATUS_IDLE":
                    case 3:
                        message.newStatus = 3;
                        break;
                    case "USER_STATUS_OFFLINE":
                    case 4:
                        message.newStatus = 4;
                        break;
                    }
                    if (object.updateStatus != null)
                        message.updateStatus = Boolean(object.updateStatus);
                    if (object.isBot != null)
                        message.isBot = Boolean(object.isBot);
                    if (object.updateIsBot != null)
                        message.updateIsBot = Boolean(object.updateIsBot);
                    return message;
                };

                ProfileUpdateRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.newUsername = "";
                        object.updateUsername = false;
                        object.newAvatar = "";
                        object.updateAvatar = false;
                        object.newStatus = options.enums === String ? "USER_STATUS_ONLINE_UNSPECIFIED" : 0;
                        object.updateStatus = false;
                        object.isBot = false;
                        object.updateIsBot = false;
                    }
                    if (message.newUsername != null && message.hasOwnProperty("newUsername"))
                        object.newUsername = message.newUsername;
                    if (message.updateUsername != null && message.hasOwnProperty("updateUsername"))
                        object.updateUsername = message.updateUsername;
                    if (message.newAvatar != null && message.hasOwnProperty("newAvatar"))
                        object.newAvatar = message.newAvatar;
                    if (message.updateAvatar != null && message.hasOwnProperty("updateAvatar"))
                        object.updateAvatar = message.updateAvatar;
                    if (message.newStatus != null && message.hasOwnProperty("newStatus"))
                        object.newStatus = options.enums === String ? $root.protocol.harmonytypes.v1.UserStatus[message.newStatus] : message.newStatus;
                    if (message.updateStatus != null && message.hasOwnProperty("updateStatus"))
                        object.updateStatus = message.updateStatus;
                    if (message.isBot != null && message.hasOwnProperty("isBot"))
                        object.isBot = message.isBot;
                    if (message.updateIsBot != null && message.hasOwnProperty("updateIsBot"))
                        object.updateIsBot = message.updateIsBot;
                    return object;
                };

                ProfileUpdateRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ProfileUpdateRequest;
            })();

            return v1;
        })();

        return chat;
    })();

    protocol.harmonytypes = (function() {

        var harmonytypes = {};

        harmonytypes.v1 = (function() {

            var v1 = {};

            v1.HarmonyMethodMetadata = (function() {

                function HarmonyMethodMetadata(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                HarmonyMethodMetadata.prototype.requiresAuthentication = false;
                HarmonyMethodMetadata.prototype.requiresLocal = false;
                HarmonyMethodMetadata.prototype.requiresPermissionNode = "";

                HarmonyMethodMetadata.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.requiresAuthentication != null && Object.hasOwnProperty.call(message, "requiresAuthentication"))
                        writer.uint32(8).bool(message.requiresAuthentication);
                    if (message.requiresLocal != null && Object.hasOwnProperty.call(message, "requiresLocal"))
                        writer.uint32(16).bool(message.requiresLocal);
                    if (message.requiresPermissionNode != null && Object.hasOwnProperty.call(message, "requiresPermissionNode"))
                        writer.uint32(26).string(message.requiresPermissionNode);
                    return writer;
                };

                HarmonyMethodMetadata.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.HarmonyMethodMetadata();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.requiresAuthentication = reader.bool();
                            break;
                        case 2:
                            message.requiresLocal = reader.bool();
                            break;
                        case 3:
                            message.requiresPermissionNode = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                HarmonyMethodMetadata.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.harmonytypes.v1.HarmonyMethodMetadata)
                        return object;
                    var message = new $root.protocol.harmonytypes.v1.HarmonyMethodMetadata();
                    if (object.requiresAuthentication != null)
                        message.requiresAuthentication = Boolean(object.requiresAuthentication);
                    if (object.requiresLocal != null)
                        message.requiresLocal = Boolean(object.requiresLocal);
                    if (object.requiresPermissionNode != null)
                        message.requiresPermissionNode = String(object.requiresPermissionNode);
                    return message;
                };

                HarmonyMethodMetadata.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.requiresAuthentication = false;
                        object.requiresLocal = false;
                        object.requiresPermissionNode = "";
                    }
                    if (message.requiresAuthentication != null && message.hasOwnProperty("requiresAuthentication"))
                        object.requiresAuthentication = message.requiresAuthentication;
                    if (message.requiresLocal != null && message.hasOwnProperty("requiresLocal"))
                        object.requiresLocal = message.requiresLocal;
                    if (message.requiresPermissionNode != null && message.hasOwnProperty("requiresPermissionNode"))
                        object.requiresPermissionNode = message.requiresPermissionNode;
                    return object;
                };

                HarmonyMethodMetadata.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return HarmonyMethodMetadata;
            })();

            v1.UserStatus = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "USER_STATUS_ONLINE_UNSPECIFIED"] = 0;
                values[valuesById[1] = "USER_STATUS_STREAMING"] = 1;
                values[valuesById[2] = "USER_STATUS_DO_NOT_DISTURB"] = 2;
                values[valuesById[3] = "USER_STATUS_IDLE"] = 3;
                values[valuesById[4] = "USER_STATUS_OFFLINE"] = 4;
                return values;
            })();

            v1.Override = (function() {

                function Override(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Override.prototype.name = "";
                Override.prototype.avatar = "";
                Override.prototype.userDefined = "";
                Override.prototype.webhook = null;
                Override.prototype.systemPlurality = null;
                Override.prototype.systemMessage = null;
                Override.prototype.bridge = null;

                var $oneOfFields;

                Object.defineProperty(Override.prototype, "reason", {
                    get: $util.oneOfGetter($oneOfFields = ["userDefined", "webhook", "systemPlurality", "systemMessage", "bridge"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Override.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(10).string(message.name);
                    if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                        writer.uint32(18).string(message.avatar);
                    if (message.userDefined != null && Object.hasOwnProperty.call(message, "userDefined"))
                        writer.uint32(26).string(message.userDefined);
                    if (message.webhook != null && Object.hasOwnProperty.call(message, "webhook"))
                        $root.google.protobuf.Empty.encode(message.webhook, writer.uint32(34).fork()).ldelim();
                    if (message.systemPlurality != null && Object.hasOwnProperty.call(message, "systemPlurality"))
                        $root.google.protobuf.Empty.encode(message.systemPlurality, writer.uint32(42).fork()).ldelim();
                    if (message.systemMessage != null && Object.hasOwnProperty.call(message, "systemMessage"))
                        $root.google.protobuf.Empty.encode(message.systemMessage, writer.uint32(50).fork()).ldelim();
                    if (message.bridge != null && Object.hasOwnProperty.call(message, "bridge"))
                        $root.google.protobuf.Empty.encode(message.bridge, writer.uint32(58).fork()).ldelim();
                    return writer;
                };

                Override.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.Override();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.avatar = reader.string();
                            break;
                        case 3:
                            message.userDefined = reader.string();
                            break;
                        case 4:
                            message.webhook = $root.google.protobuf.Empty.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.systemPlurality = $root.google.protobuf.Empty.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.systemMessage = $root.google.protobuf.Empty.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.bridge = $root.google.protobuf.Empty.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Override.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.harmonytypes.v1.Override)
                        return object;
                    var message = new $root.protocol.harmonytypes.v1.Override();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.avatar != null)
                        message.avatar = String(object.avatar);
                    if (object.userDefined != null)
                        message.userDefined = String(object.userDefined);
                    if (object.webhook != null) {
                        if (typeof object.webhook !== "object")
                            throw TypeError(".protocol.harmonytypes.v1.Override.webhook: object expected");
                        message.webhook = $root.google.protobuf.Empty.fromObject(object.webhook);
                    }
                    if (object.systemPlurality != null) {
                        if (typeof object.systemPlurality !== "object")
                            throw TypeError(".protocol.harmonytypes.v1.Override.systemPlurality: object expected");
                        message.systemPlurality = $root.google.protobuf.Empty.fromObject(object.systemPlurality);
                    }
                    if (object.systemMessage != null) {
                        if (typeof object.systemMessage !== "object")
                            throw TypeError(".protocol.harmonytypes.v1.Override.systemMessage: object expected");
                        message.systemMessage = $root.google.protobuf.Empty.fromObject(object.systemMessage);
                    }
                    if (object.bridge != null) {
                        if (typeof object.bridge !== "object")
                            throw TypeError(".protocol.harmonytypes.v1.Override.bridge: object expected");
                        message.bridge = $root.google.protobuf.Empty.fromObject(object.bridge);
                    }
                    return message;
                };

                Override.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.avatar = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.avatar != null && message.hasOwnProperty("avatar"))
                        object.avatar = message.avatar;
                    if (message.userDefined != null && message.hasOwnProperty("userDefined")) {
                        object.userDefined = message.userDefined;
                        if (options.oneofs)
                            object.reason = "userDefined";
                    }
                    if (message.webhook != null && message.hasOwnProperty("webhook")) {
                        object.webhook = $root.google.protobuf.Empty.toObject(message.webhook, options);
                        if (options.oneofs)
                            object.reason = "webhook";
                    }
                    if (message.systemPlurality != null && message.hasOwnProperty("systemPlurality")) {
                        object.systemPlurality = $root.google.protobuf.Empty.toObject(message.systemPlurality, options);
                        if (options.oneofs)
                            object.reason = "systemPlurality";
                    }
                    if (message.systemMessage != null && message.hasOwnProperty("systemMessage")) {
                        object.systemMessage = $root.google.protobuf.Empty.toObject(message.systemMessage, options);
                        if (options.oneofs)
                            object.reason = "systemMessage";
                    }
                    if (message.bridge != null && message.hasOwnProperty("bridge")) {
                        object.bridge = $root.google.protobuf.Empty.toObject(message.bridge, options);
                        if (options.oneofs)
                            object.reason = "bridge";
                    }
                    return object;
                };

                Override.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Override;
            })();

            v1.ActionType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Normal"] = 0;
                values[valuesById[1] = "Primary"] = 1;
                values[valuesById[2] = "Destructive"] = 2;
                return values;
            })();

            v1.ActionPresentation = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Button"] = 0;
                values[valuesById[1] = "Dropdown"] = 1;
                values[valuesById[2] = "Menu"] = 2;
                values[valuesById[3] = "SmallEntry"] = 3;
                values[valuesById[4] = "LargeEntry"] = 4;
                return values;
            })();

            v1.FieldPresentation = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Data"] = 0;
                values[valuesById[1] = "CaptionedImage"] = 1;
                values[valuesById[2] = "Row"] = 2;
                return values;
            })();

            v1.Action = (function() {

                function Action(properties) {
                    this.children = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Action.prototype.text = "";
                Action.prototype.url = "";
                Action.prototype.id = "";
                Action.prototype.type = 0;
                Action.prototype.presentation = 0;
                Action.prototype.children = $util.emptyArray;

                Action.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                        writer.uint32(10).string(message.text);
                    if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                        writer.uint32(18).string(message.url);
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(26).string(message.id);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(32).int32(message.type);
                    if (message.presentation != null && Object.hasOwnProperty.call(message, "presentation"))
                        writer.uint32(40).int32(message.presentation);
                    if (message.children != null && message.children.length)
                        for (var i = 0; i < message.children.length; ++i)
                            $root.protocol.harmonytypes.v1.Action.encode(message.children[i], writer.uint32(50).fork()).ldelim();
                    return writer;
                };

                Action.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.Action();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.text = reader.string();
                            break;
                        case 2:
                            message.url = reader.string();
                            break;
                        case 3:
                            message.id = reader.string();
                            break;
                        case 4:
                            message.type = reader.int32();
                            break;
                        case 5:
                            message.presentation = reader.int32();
                            break;
                        case 6:
                            if (!(message.children && message.children.length))
                                message.children = [];
                            message.children.push($root.protocol.harmonytypes.v1.Action.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Action.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.harmonytypes.v1.Action)
                        return object;
                    var message = new $root.protocol.harmonytypes.v1.Action();
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.url != null)
                        message.url = String(object.url);
                    if (object.id != null)
                        message.id = String(object.id);
                    switch (object.type) {
                    case "Normal":
                    case 0:
                        message.type = 0;
                        break;
                    case "Primary":
                    case 1:
                        message.type = 1;
                        break;
                    case "Destructive":
                    case 2:
                        message.type = 2;
                        break;
                    }
                    switch (object.presentation) {
                    case "Button":
                    case 0:
                        message.presentation = 0;
                        break;
                    case "Dropdown":
                    case 1:
                        message.presentation = 1;
                        break;
                    case "Menu":
                    case 2:
                        message.presentation = 2;
                        break;
                    case "SmallEntry":
                    case 3:
                        message.presentation = 3;
                        break;
                    case "LargeEntry":
                    case 4:
                        message.presentation = 4;
                        break;
                    }
                    if (object.children) {
                        if (!Array.isArray(object.children))
                            throw TypeError(".protocol.harmonytypes.v1.Action.children: array expected");
                        message.children = [];
                        for (var i = 0; i < object.children.length; ++i) {
                            if (typeof object.children[i] !== "object")
                                throw TypeError(".protocol.harmonytypes.v1.Action.children: object expected");
                            message.children[i] = $root.protocol.harmonytypes.v1.Action.fromObject(object.children[i]);
                        }
                    }
                    return message;
                };

                Action.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.children = [];
                    if (options.defaults) {
                        object.text = "";
                        object.url = "";
                        object.id = "";
                        object.type = options.enums === String ? "Normal" : 0;
                        object.presentation = options.enums === String ? "Button" : 0;
                    }
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.url != null && message.hasOwnProperty("url"))
                        object.url = message.url;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.protocol.harmonytypes.v1.ActionType[message.type] : message.type;
                    if (message.presentation != null && message.hasOwnProperty("presentation"))
                        object.presentation = options.enums === String ? $root.protocol.harmonytypes.v1.ActionPresentation[message.presentation] : message.presentation;
                    if (message.children && message.children.length) {
                        object.children = [];
                        for (var j = 0; j < message.children.length; ++j)
                            object.children[j] = $root.protocol.harmonytypes.v1.Action.toObject(message.children[j], options);
                    }
                    return object;
                };

                Action.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Action;
            })();

            v1.EmbedHeading = (function() {

                function EmbedHeading(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                EmbedHeading.prototype.text = "";
                EmbedHeading.prototype.subtext = "";
                EmbedHeading.prototype.url = "";
                EmbedHeading.prototype.icon = "";

                EmbedHeading.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                        writer.uint32(10).string(message.text);
                    if (message.subtext != null && Object.hasOwnProperty.call(message, "subtext"))
                        writer.uint32(18).string(message.subtext);
                    if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                        writer.uint32(26).string(message.url);
                    if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                        writer.uint32(34).string(message.icon);
                    return writer;
                };

                EmbedHeading.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.EmbedHeading();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.text = reader.string();
                            break;
                        case 2:
                            message.subtext = reader.string();
                            break;
                        case 3:
                            message.url = reader.string();
                            break;
                        case 4:
                            message.icon = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                EmbedHeading.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.harmonytypes.v1.EmbedHeading)
                        return object;
                    var message = new $root.protocol.harmonytypes.v1.EmbedHeading();
                    if (object.text != null)
                        message.text = String(object.text);
                    if (object.subtext != null)
                        message.subtext = String(object.subtext);
                    if (object.url != null)
                        message.url = String(object.url);
                    if (object.icon != null)
                        message.icon = String(object.icon);
                    return message;
                };

                EmbedHeading.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.text = "";
                        object.subtext = "";
                        object.url = "";
                        object.icon = "";
                    }
                    if (message.text != null && message.hasOwnProperty("text"))
                        object.text = message.text;
                    if (message.subtext != null && message.hasOwnProperty("subtext"))
                        object.subtext = message.subtext;
                    if (message.url != null && message.hasOwnProperty("url"))
                        object.url = message.url;
                    if (message.icon != null && message.hasOwnProperty("icon"))
                        object.icon = message.icon;
                    return object;
                };

                EmbedHeading.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return EmbedHeading;
            })();

            v1.EmbedField = (function() {

                function EmbedField(properties) {
                    this.actions = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                EmbedField.prototype.title = "";
                EmbedField.prototype.subtitle = "";
                EmbedField.prototype.body = "";
                EmbedField.prototype.imageUrl = "";
                EmbedField.prototype.presentation = 0;
                EmbedField.prototype.actions = $util.emptyArray;

                EmbedField.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                        writer.uint32(10).string(message.title);
                    if (message.subtitle != null && Object.hasOwnProperty.call(message, "subtitle"))
                        writer.uint32(18).string(message.subtitle);
                    if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                        writer.uint32(26).string(message.body);
                    if (message.imageUrl != null && Object.hasOwnProperty.call(message, "imageUrl"))
                        writer.uint32(34).string(message.imageUrl);
                    if (message.presentation != null && Object.hasOwnProperty.call(message, "presentation"))
                        writer.uint32(40).int32(message.presentation);
                    if (message.actions != null && message.actions.length)
                        for (var i = 0; i < message.actions.length; ++i)
                            $root.protocol.harmonytypes.v1.Action.encode(message.actions[i], writer.uint32(50).fork()).ldelim();
                    return writer;
                };

                EmbedField.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.EmbedField();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.title = reader.string();
                            break;
                        case 2:
                            message.subtitle = reader.string();
                            break;
                        case 3:
                            message.body = reader.string();
                            break;
                        case 4:
                            message.imageUrl = reader.string();
                            break;
                        case 5:
                            message.presentation = reader.int32();
                            break;
                        case 6:
                            if (!(message.actions && message.actions.length))
                                message.actions = [];
                            message.actions.push($root.protocol.harmonytypes.v1.Action.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                EmbedField.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.harmonytypes.v1.EmbedField)
                        return object;
                    var message = new $root.protocol.harmonytypes.v1.EmbedField();
                    if (object.title != null)
                        message.title = String(object.title);
                    if (object.subtitle != null)
                        message.subtitle = String(object.subtitle);
                    if (object.body != null)
                        message.body = String(object.body);
                    if (object.imageUrl != null)
                        message.imageUrl = String(object.imageUrl);
                    switch (object.presentation) {
                    case "Data":
                    case 0:
                        message.presentation = 0;
                        break;
                    case "CaptionedImage":
                    case 1:
                        message.presentation = 1;
                        break;
                    case "Row":
                    case 2:
                        message.presentation = 2;
                        break;
                    }
                    if (object.actions) {
                        if (!Array.isArray(object.actions))
                            throw TypeError(".protocol.harmonytypes.v1.EmbedField.actions: array expected");
                        message.actions = [];
                        for (var i = 0; i < object.actions.length; ++i) {
                            if (typeof object.actions[i] !== "object")
                                throw TypeError(".protocol.harmonytypes.v1.EmbedField.actions: object expected");
                            message.actions[i] = $root.protocol.harmonytypes.v1.Action.fromObject(object.actions[i]);
                        }
                    }
                    return message;
                };

                EmbedField.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.actions = [];
                    if (options.defaults) {
                        object.title = "";
                        object.subtitle = "";
                        object.body = "";
                        object.imageUrl = "";
                        object.presentation = options.enums === String ? "Data" : 0;
                    }
                    if (message.title != null && message.hasOwnProperty("title"))
                        object.title = message.title;
                    if (message.subtitle != null && message.hasOwnProperty("subtitle"))
                        object.subtitle = message.subtitle;
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = message.body;
                    if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                        object.imageUrl = message.imageUrl;
                    if (message.presentation != null && message.hasOwnProperty("presentation"))
                        object.presentation = options.enums === String ? $root.protocol.harmonytypes.v1.FieldPresentation[message.presentation] : message.presentation;
                    if (message.actions && message.actions.length) {
                        object.actions = [];
                        for (var j = 0; j < message.actions.length; ++j)
                            object.actions[j] = $root.protocol.harmonytypes.v1.Action.toObject(message.actions[j], options);
                    }
                    return object;
                };

                EmbedField.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return EmbedField;
            })();

            v1.Embed = (function() {

                function Embed(properties) {
                    this.fields = [];
                    this.actions = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Embed.prototype.title = "";
                Embed.prototype.body = "";
                Embed.prototype.color = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                Embed.prototype.header = null;
                Embed.prototype.footer = null;
                Embed.prototype.fields = $util.emptyArray;
                Embed.prototype.actions = $util.emptyArray;

                Embed.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                        writer.uint32(10).string(message.title);
                    if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                        writer.uint32(18).string(message.body);
                    if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                        writer.uint32(24).int64(message.color);
                    if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                        $root.protocol.harmonytypes.v1.EmbedHeading.encode(message.header, writer.uint32(34).fork()).ldelim();
                    if (message.footer != null && Object.hasOwnProperty.call(message, "footer"))
                        $root.protocol.harmonytypes.v1.EmbedHeading.encode(message.footer, writer.uint32(42).fork()).ldelim();
                    if (message.fields != null && message.fields.length)
                        for (var i = 0; i < message.fields.length; ++i)
                            $root.protocol.harmonytypes.v1.EmbedField.encode(message.fields[i], writer.uint32(50).fork()).ldelim();
                    if (message.actions != null && message.actions.length)
                        for (var i = 0; i < message.actions.length; ++i)
                            $root.protocol.harmonytypes.v1.Action.encode(message.actions[i], writer.uint32(58).fork()).ldelim();
                    return writer;
                };

                Embed.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.Embed();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.title = reader.string();
                            break;
                        case 2:
                            message.body = reader.string();
                            break;
                        case 3:
                            message.color = reader.int64();
                            break;
                        case 4:
                            message.header = $root.protocol.harmonytypes.v1.EmbedHeading.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.footer = $root.protocol.harmonytypes.v1.EmbedHeading.decode(reader, reader.uint32());
                            break;
                        case 6:
                            if (!(message.fields && message.fields.length))
                                message.fields = [];
                            message.fields.push($root.protocol.harmonytypes.v1.EmbedField.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.actions && message.actions.length))
                                message.actions = [];
                            message.actions.push($root.protocol.harmonytypes.v1.Action.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Embed.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.harmonytypes.v1.Embed)
                        return object;
                    var message = new $root.protocol.harmonytypes.v1.Embed();
                    if (object.title != null)
                        message.title = String(object.title);
                    if (object.body != null)
                        message.body = String(object.body);
                    if (object.color != null)
                        if ($util.Long)
                            (message.color = $util.Long.fromValue(object.color)).unsigned = false;
                        else if (typeof object.color === "string")
                            message.color = parseInt(object.color, 10);
                        else if (typeof object.color === "number")
                            message.color = object.color;
                        else if (typeof object.color === "object")
                            message.color = new $util.LongBits(object.color.low >>> 0, object.color.high >>> 0).toNumber();
                    if (object.header != null) {
                        if (typeof object.header !== "object")
                            throw TypeError(".protocol.harmonytypes.v1.Embed.header: object expected");
                        message.header = $root.protocol.harmonytypes.v1.EmbedHeading.fromObject(object.header);
                    }
                    if (object.footer != null) {
                        if (typeof object.footer !== "object")
                            throw TypeError(".protocol.harmonytypes.v1.Embed.footer: object expected");
                        message.footer = $root.protocol.harmonytypes.v1.EmbedHeading.fromObject(object.footer);
                    }
                    if (object.fields) {
                        if (!Array.isArray(object.fields))
                            throw TypeError(".protocol.harmonytypes.v1.Embed.fields: array expected");
                        message.fields = [];
                        for (var i = 0; i < object.fields.length; ++i) {
                            if (typeof object.fields[i] !== "object")
                                throw TypeError(".protocol.harmonytypes.v1.Embed.fields: object expected");
                            message.fields[i] = $root.protocol.harmonytypes.v1.EmbedField.fromObject(object.fields[i]);
                        }
                    }
                    if (object.actions) {
                        if (!Array.isArray(object.actions))
                            throw TypeError(".protocol.harmonytypes.v1.Embed.actions: array expected");
                        message.actions = [];
                        for (var i = 0; i < object.actions.length; ++i) {
                            if (typeof object.actions[i] !== "object")
                                throw TypeError(".protocol.harmonytypes.v1.Embed.actions: object expected");
                            message.actions[i] = $root.protocol.harmonytypes.v1.Action.fromObject(object.actions[i]);
                        }
                    }
                    return message;
                };

                Embed.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.fields = [];
                        object.actions = [];
                    }
                    if (options.defaults) {
                        object.title = "";
                        object.body = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.color = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.color = options.longs === String ? "0" : 0;
                        object.header = null;
                        object.footer = null;
                    }
                    if (message.title != null && message.hasOwnProperty("title"))
                        object.title = message.title;
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = message.body;
                    if (message.color != null && message.hasOwnProperty("color"))
                        if (typeof message.color === "number")
                            object.color = options.longs === String ? String(message.color) : message.color;
                        else
                            object.color = options.longs === String ? $util.Long.prototype.toString.call(message.color) : options.longs === Number ? new $util.LongBits(message.color.low >>> 0, message.color.high >>> 0).toNumber() : message.color;
                    if (message.header != null && message.hasOwnProperty("header"))
                        object.header = $root.protocol.harmonytypes.v1.EmbedHeading.toObject(message.header, options);
                    if (message.footer != null && message.hasOwnProperty("footer"))
                        object.footer = $root.protocol.harmonytypes.v1.EmbedHeading.toObject(message.footer, options);
                    if (message.fields && message.fields.length) {
                        object.fields = [];
                        for (var j = 0; j < message.fields.length; ++j)
                            object.fields[j] = $root.protocol.harmonytypes.v1.EmbedField.toObject(message.fields[j], options);
                    }
                    if (message.actions && message.actions.length) {
                        object.actions = [];
                        for (var j = 0; j < message.actions.length; ++j)
                            object.actions[j] = $root.protocol.harmonytypes.v1.Action.toObject(message.actions[j], options);
                    }
                    return object;
                };

                Embed.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Embed;
            })();

            v1.Attachment = (function() {

                function Attachment(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Attachment.prototype.id = "";
                Attachment.prototype.name = "";
                Attachment.prototype.type = "";
                Attachment.prototype.size = 0;

                Attachment.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(10).string(message.id);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(18).string(message.name);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(26).string(message.type);
                    if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                        writer.uint32(32).int32(message.size);
                    return writer;
                };

                Attachment.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.Attachment();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.string();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.type = reader.string();
                            break;
                        case 4:
                            message.size = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Attachment.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.harmonytypes.v1.Attachment)
                        return object;
                    var message = new $root.protocol.harmonytypes.v1.Attachment();
                    if (object.id != null)
                        message.id = String(object.id);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.type != null)
                        message.type = String(object.type);
                    if (object.size != null)
                        message.size = object.size | 0;
                    return message;
                };

                Attachment.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.id = "";
                        object.name = "";
                        object.type = "";
                        object.size = 0;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = message.type;
                    if (message.size != null && message.hasOwnProperty("size"))
                        object.size = message.size;
                    return object;
                };

                Attachment.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Attachment;
            })();

            v1.Metadata = (function() {

                function Metadata(properties) {
                    this.extension = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Metadata.prototype.kind = "";
                Metadata.prototype.extension = $util.emptyObject;

                Metadata.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                        writer.uint32(10).string(message.kind);
                    if (message.extension != null && Object.hasOwnProperty.call(message, "extension"))
                        for (var keys = Object.keys(message.extension), i = 0; i < keys.length; ++i) {
                            writer.uint32(18).fork().uint32(10).string(keys[i]);
                            $root.google.protobuf.Any.encode(message.extension[keys[i]], writer.uint32(18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                Metadata.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.Metadata(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.kind = reader.string();
                            break;
                        case 2:
                            if (message.extension === $util.emptyObject)
                                message.extension = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.google.protobuf.Any.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.extension[key] = value;
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Metadata.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.harmonytypes.v1.Metadata)
                        return object;
                    var message = new $root.protocol.harmonytypes.v1.Metadata();
                    if (object.kind != null)
                        message.kind = String(object.kind);
                    if (object.extension) {
                        if (typeof object.extension !== "object")
                            throw TypeError(".protocol.harmonytypes.v1.Metadata.extension: object expected");
                        message.extension = {};
                        for (var keys = Object.keys(object.extension), i = 0; i < keys.length; ++i) {
                            if (typeof object.extension[keys[i]] !== "object")
                                throw TypeError(".protocol.harmonytypes.v1.Metadata.extension: object expected");
                            message.extension[keys[i]] = $root.google.protobuf.Any.fromObject(object.extension[keys[i]]);
                        }
                    }
                    return message;
                };

                Metadata.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.extension = {};
                    if (options.defaults)
                        object.kind = "";
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        object.kind = message.kind;
                    var keys2;
                    if (message.extension && (keys2 = Object.keys(message.extension)).length) {
                        object.extension = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.extension[keys2[j]] = $root.google.protobuf.Any.toObject(message.extension[keys2[j]], options);
                    }
                    return object;
                };

                Metadata.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Metadata;
            })();

            v1.Message = (function() {

                function Message(properties) {
                    this.embeds = [];
                    this.actions = [];
                    this.attachments = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Message.prototype.metadata = null;
                Message.prototype.guildId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                Message.prototype.channelId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                Message.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                Message.prototype.authorId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                Message.prototype.createdAt = null;
                Message.prototype.editedAt = null;
                Message.prototype.content = "";
                Message.prototype.embeds = $util.emptyArray;
                Message.prototype.actions = $util.emptyArray;
                Message.prototype.attachments = $util.emptyArray;
                Message.prototype.inReplyTo = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                Message.prototype.overrides = null;

                Message.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                        writer.uint32(8).uint64(message.guildId);
                    if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                        writer.uint32(16).uint64(message.channelId);
                    if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                        writer.uint32(24).uint64(message.messageId);
                    if (message.authorId != null && Object.hasOwnProperty.call(message, "authorId"))
                        writer.uint32(32).uint64(message.authorId);
                    if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(42).fork()).ldelim();
                    if (message.editedAt != null && Object.hasOwnProperty.call(message, "editedAt"))
                        $root.google.protobuf.Timestamp.encode(message.editedAt, writer.uint32(50).fork()).ldelim();
                    if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                        writer.uint32(58).string(message.content);
                    if (message.embeds != null && message.embeds.length)
                        for (var i = 0; i < message.embeds.length; ++i)
                            $root.protocol.harmonytypes.v1.Embed.encode(message.embeds[i], writer.uint32(66).fork()).ldelim();
                    if (message.actions != null && message.actions.length)
                        for (var i = 0; i < message.actions.length; ++i)
                            $root.protocol.harmonytypes.v1.Action.encode(message.actions[i], writer.uint32(74).fork()).ldelim();
                    if (message.attachments != null && message.attachments.length)
                        for (var i = 0; i < message.attachments.length; ++i)
                            $root.protocol.harmonytypes.v1.Attachment.encode(message.attachments[i], writer.uint32(82).fork()).ldelim();
                    if (message.inReplyTo != null && Object.hasOwnProperty.call(message, "inReplyTo"))
                        writer.uint32(88).uint64(message.inReplyTo);
                    if (message.overrides != null && Object.hasOwnProperty.call(message, "overrides"))
                        $root.protocol.harmonytypes.v1.Override.encode(message.overrides, writer.uint32(98).fork()).ldelim();
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        $root.protocol.harmonytypes.v1.Metadata.encode(message.metadata, writer.uint32(106).fork()).ldelim();
                    return writer;
                };

                Message.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.Message();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 13:
                            message.metadata = $root.protocol.harmonytypes.v1.Metadata.decode(reader, reader.uint32());
                            break;
                        case 1:
                            message.guildId = reader.uint64();
                            break;
                        case 2:
                            message.channelId = reader.uint64();
                            break;
                        case 3:
                            message.messageId = reader.uint64();
                            break;
                        case 4:
                            message.authorId = reader.uint64();
                            break;
                        case 5:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.editedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.content = reader.string();
                            break;
                        case 8:
                            if (!(message.embeds && message.embeds.length))
                                message.embeds = [];
                            message.embeds.push($root.protocol.harmonytypes.v1.Embed.decode(reader, reader.uint32()));
                            break;
                        case 9:
                            if (!(message.actions && message.actions.length))
                                message.actions = [];
                            message.actions.push($root.protocol.harmonytypes.v1.Action.decode(reader, reader.uint32()));
                            break;
                        case 10:
                            if (!(message.attachments && message.attachments.length))
                                message.attachments = [];
                            message.attachments.push($root.protocol.harmonytypes.v1.Attachment.decode(reader, reader.uint32()));
                            break;
                        case 11:
                            message.inReplyTo = reader.uint64();
                            break;
                        case 12:
                            message.overrides = $root.protocol.harmonytypes.v1.Override.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Message.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.harmonytypes.v1.Message)
                        return object;
                    var message = new $root.protocol.harmonytypes.v1.Message();
                    if (object.metadata != null) {
                        if (typeof object.metadata !== "object")
                            throw TypeError(".protocol.harmonytypes.v1.Message.metadata: object expected");
                        message.metadata = $root.protocol.harmonytypes.v1.Metadata.fromObject(object.metadata);
                    }
                    if (object.guildId != null)
                        if ($util.Long)
                            (message.guildId = $util.Long.fromValue(object.guildId)).unsigned = true;
                        else if (typeof object.guildId === "string")
                            message.guildId = parseInt(object.guildId, 10);
                        else if (typeof object.guildId === "number")
                            message.guildId = object.guildId;
                        else if (typeof object.guildId === "object")
                            message.guildId = new $util.LongBits(object.guildId.low >>> 0, object.guildId.high >>> 0).toNumber(true);
                    if (object.channelId != null)
                        if ($util.Long)
                            (message.channelId = $util.Long.fromValue(object.channelId)).unsigned = true;
                        else if (typeof object.channelId === "string")
                            message.channelId = parseInt(object.channelId, 10);
                        else if (typeof object.channelId === "number")
                            message.channelId = object.channelId;
                        else if (typeof object.channelId === "object")
                            message.channelId = new $util.LongBits(object.channelId.low >>> 0, object.channelId.high >>> 0).toNumber(true);
                    if (object.messageId != null)
                        if ($util.Long)
                            (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = true;
                        else if (typeof object.messageId === "string")
                            message.messageId = parseInt(object.messageId, 10);
                        else if (typeof object.messageId === "number")
                            message.messageId = object.messageId;
                        else if (typeof object.messageId === "object")
                            message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber(true);
                    if (object.authorId != null)
                        if ($util.Long)
                            (message.authorId = $util.Long.fromValue(object.authorId)).unsigned = true;
                        else if (typeof object.authorId === "string")
                            message.authorId = parseInt(object.authorId, 10);
                        else if (typeof object.authorId === "number")
                            message.authorId = object.authorId;
                        else if (typeof object.authorId === "object")
                            message.authorId = new $util.LongBits(object.authorId.low >>> 0, object.authorId.high >>> 0).toNumber(true);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".protocol.harmonytypes.v1.Message.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.editedAt != null) {
                        if (typeof object.editedAt !== "object")
                            throw TypeError(".protocol.harmonytypes.v1.Message.editedAt: object expected");
                        message.editedAt = $root.google.protobuf.Timestamp.fromObject(object.editedAt);
                    }
                    if (object.content != null)
                        message.content = String(object.content);
                    if (object.embeds) {
                        if (!Array.isArray(object.embeds))
                            throw TypeError(".protocol.harmonytypes.v1.Message.embeds: array expected");
                        message.embeds = [];
                        for (var i = 0; i < object.embeds.length; ++i) {
                            if (typeof object.embeds[i] !== "object")
                                throw TypeError(".protocol.harmonytypes.v1.Message.embeds: object expected");
                            message.embeds[i] = $root.protocol.harmonytypes.v1.Embed.fromObject(object.embeds[i]);
                        }
                    }
                    if (object.actions) {
                        if (!Array.isArray(object.actions))
                            throw TypeError(".protocol.harmonytypes.v1.Message.actions: array expected");
                        message.actions = [];
                        for (var i = 0; i < object.actions.length; ++i) {
                            if (typeof object.actions[i] !== "object")
                                throw TypeError(".protocol.harmonytypes.v1.Message.actions: object expected");
                            message.actions[i] = $root.protocol.harmonytypes.v1.Action.fromObject(object.actions[i]);
                        }
                    }
                    if (object.attachments) {
                        if (!Array.isArray(object.attachments))
                            throw TypeError(".protocol.harmonytypes.v1.Message.attachments: array expected");
                        message.attachments = [];
                        for (var i = 0; i < object.attachments.length; ++i) {
                            if (typeof object.attachments[i] !== "object")
                                throw TypeError(".protocol.harmonytypes.v1.Message.attachments: object expected");
                            message.attachments[i] = $root.protocol.harmonytypes.v1.Attachment.fromObject(object.attachments[i]);
                        }
                    }
                    if (object.inReplyTo != null)
                        if ($util.Long)
                            (message.inReplyTo = $util.Long.fromValue(object.inReplyTo)).unsigned = true;
                        else if (typeof object.inReplyTo === "string")
                            message.inReplyTo = parseInt(object.inReplyTo, 10);
                        else if (typeof object.inReplyTo === "number")
                            message.inReplyTo = object.inReplyTo;
                        else if (typeof object.inReplyTo === "object")
                            message.inReplyTo = new $util.LongBits(object.inReplyTo.low >>> 0, object.inReplyTo.high >>> 0).toNumber(true);
                    if (object.overrides != null) {
                        if (typeof object.overrides !== "object")
                            throw TypeError(".protocol.harmonytypes.v1.Message.overrides: object expected");
                        message.overrides = $root.protocol.harmonytypes.v1.Override.fromObject(object.overrides);
                    }
                    return message;
                };

                Message.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.embeds = [];
                        object.actions = [];
                        object.attachments = [];
                    }
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.messageId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.authorId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.authorId = options.longs === String ? "0" : 0;
                        object.createdAt = null;
                        object.editedAt = null;
                        object.content = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.inReplyTo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.inReplyTo = options.longs === String ? "0" : 0;
                        object.overrides = null;
                        object.metadata = null;
                    }
                    if (message.guildId != null && message.hasOwnProperty("guildId"))
                        if (typeof message.guildId === "number")
                            object.guildId = options.longs === String ? String(message.guildId) : message.guildId;
                        else
                            object.guildId = options.longs === String ? $util.Long.prototype.toString.call(message.guildId) : options.longs === Number ? new $util.LongBits(message.guildId.low >>> 0, message.guildId.high >>> 0).toNumber(true) : message.guildId;
                    if (message.channelId != null && message.hasOwnProperty("channelId"))
                        if (typeof message.channelId === "number")
                            object.channelId = options.longs === String ? String(message.channelId) : message.channelId;
                        else
                            object.channelId = options.longs === String ? $util.Long.prototype.toString.call(message.channelId) : options.longs === Number ? new $util.LongBits(message.channelId.low >>> 0, message.channelId.high >>> 0).toNumber(true) : message.channelId;
                    if (message.messageId != null && message.hasOwnProperty("messageId"))
                        if (typeof message.messageId === "number")
                            object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                        else
                            object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber(true) : message.messageId;
                    if (message.authorId != null && message.hasOwnProperty("authorId"))
                        if (typeof message.authorId === "number")
                            object.authorId = options.longs === String ? String(message.authorId) : message.authorId;
                        else
                            object.authorId = options.longs === String ? $util.Long.prototype.toString.call(message.authorId) : options.longs === Number ? new $util.LongBits(message.authorId.low >>> 0, message.authorId.high >>> 0).toNumber(true) : message.authorId;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.editedAt != null && message.hasOwnProperty("editedAt"))
                        object.editedAt = $root.google.protobuf.Timestamp.toObject(message.editedAt, options);
                    if (message.content != null && message.hasOwnProperty("content"))
                        object.content = message.content;
                    if (message.embeds && message.embeds.length) {
                        object.embeds = [];
                        for (var j = 0; j < message.embeds.length; ++j)
                            object.embeds[j] = $root.protocol.harmonytypes.v1.Embed.toObject(message.embeds[j], options);
                    }
                    if (message.actions && message.actions.length) {
                        object.actions = [];
                        for (var j = 0; j < message.actions.length; ++j)
                            object.actions[j] = $root.protocol.harmonytypes.v1.Action.toObject(message.actions[j], options);
                    }
                    if (message.attachments && message.attachments.length) {
                        object.attachments = [];
                        for (var j = 0; j < message.attachments.length; ++j)
                            object.attachments[j] = $root.protocol.harmonytypes.v1.Attachment.toObject(message.attachments[j], options);
                    }
                    if (message.inReplyTo != null && message.hasOwnProperty("inReplyTo"))
                        if (typeof message.inReplyTo === "number")
                            object.inReplyTo = options.longs === String ? String(message.inReplyTo) : message.inReplyTo;
                        else
                            object.inReplyTo = options.longs === String ? $util.Long.prototype.toString.call(message.inReplyTo) : options.longs === Number ? new $util.LongBits(message.inReplyTo.low >>> 0, message.inReplyTo.high >>> 0).toNumber(true) : message.inReplyTo;
                    if (message.overrides != null && message.hasOwnProperty("overrides"))
                        object.overrides = $root.protocol.harmonytypes.v1.Override.toObject(message.overrides, options);
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = $root.protocol.harmonytypes.v1.Metadata.toObject(message.metadata, options);
                    return object;
                };

                Message.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Message;
            })();

            v1.Error = (function() {

                function Error(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Error.prototype.identifier = "";
                Error.prototype.humanMessage = "";
                Error.prototype.moreDetails = $util.newBuffer([]);

                Error.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.identifier != null && Object.hasOwnProperty.call(message, "identifier"))
                        writer.uint32(10).string(message.identifier);
                    if (message.humanMessage != null && Object.hasOwnProperty.call(message, "humanMessage"))
                        writer.uint32(18).string(message.humanMessage);
                    if (message.moreDetails != null && Object.hasOwnProperty.call(message, "moreDetails"))
                        writer.uint32(26).bytes(message.moreDetails);
                    return writer;
                };

                Error.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.Error();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.identifier = reader.string();
                            break;
                        case 2:
                            message.humanMessage = reader.string();
                            break;
                        case 3:
                            message.moreDetails = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Error.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.harmonytypes.v1.Error)
                        return object;
                    var message = new $root.protocol.harmonytypes.v1.Error();
                    if (object.identifier != null)
                        message.identifier = String(object.identifier);
                    if (object.humanMessage != null)
                        message.humanMessage = String(object.humanMessage);
                    if (object.moreDetails != null)
                        if (typeof object.moreDetails === "string")
                            $util.base64.decode(object.moreDetails, message.moreDetails = $util.newBuffer($util.base64.length(object.moreDetails)), 0);
                        else if (object.moreDetails.length >= 0)
                            message.moreDetails = object.moreDetails;
                    return message;
                };

                Error.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.identifier = "";
                        object.humanMessage = "";
                        if (options.bytes === String)
                            object.moreDetails = "";
                        else {
                            object.moreDetails = [];
                            if (options.bytes !== Array)
                                object.moreDetails = $util.newBuffer(object.moreDetails);
                        }
                    }
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        object.identifier = message.identifier;
                    if (message.humanMessage != null && message.hasOwnProperty("humanMessage"))
                        object.humanMessage = message.humanMessage;
                    if (message.moreDetails != null && message.hasOwnProperty("moreDetails"))
                        object.moreDetails = options.bytes === String ? $util.base64.encode(message.moreDetails, 0, message.moreDetails.length) : options.bytes === Array ? Array.prototype.slice.call(message.moreDetails) : message.moreDetails;
                    return object;
                };

                Error.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Error;
            })();

            return v1;
        })();

        return harmonytypes;
    })();

    return protocol;
})();

$root.google = (function() {

    var google = {};

    google.protobuf = (function() {

        var protobuf = {};

        protobuf.Timestamp = (function() {

            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Timestamp.prototype.nanos = 0;

            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(16).int32(message.nanos);
                return writer;
            };

            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

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

        protobuf.Any = (function() {

            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            Any.prototype.type_url = "";
            Any.prototype.value = $util.newBuffer([]);

            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(18).bytes(message.value);
                return writer;
            };

            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length >= 0)
                        message.value = object.value;
                return message;
            };

            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        protobuf.FileDescriptorSet = (function() {

            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            FileDescriptorSet.prototype.file = $util.emptyArray;

            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.file.length)
                    for (var i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(10).fork()).ldelim();
                return writer;
            };

            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.file && message.file.length))
                            message.file = [];
                        message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            FileDescriptorSet.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!Array.isArray(object.file))
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = [];
                    for (var i = 0; i < object.file.length; ++i) {
                        if (typeof object.file[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                    }
                }
                return message;
            };

            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file && message.file.length) {
                    object.file = [];
                    for (var j = 0; j < message.file.length; ++j)
                        object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                }
                return object;
            };

            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.publicDependency = [];
                this.weakDependency = [];
                this.messageType = [];
                this.enumType = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            FileDescriptorProto.prototype.name = "";
            FileDescriptorProto.prototype["package"] = "";
            FileDescriptorProto.prototype.dependency = $util.emptyArray;
            FileDescriptorProto.prototype.publicDependency = $util.emptyArray;
            FileDescriptorProto.prototype.weakDependency = $util.emptyArray;
            FileDescriptorProto.prototype.messageType = $util.emptyArray;
            FileDescriptorProto.prototype.enumType = $util.emptyArray;
            FileDescriptorProto.prototype.service = $util.emptyArray;
            FileDescriptorProto.prototype.extension = $util.emptyArray;
            FileDescriptorProto.prototype.options = null;
            FileDescriptorProto.prototype.sourceCodeInfo = null;
            FileDescriptorProto.prototype.syntax = "";

            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(10).string(message.name);
                if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                    writer.uint32(18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (var i = 0; i < message.dependency.length; ++i)
                        writer.uint32(26).string(message.dependency[i]);
                if (message.messageType != null && message.messageType.length)
                    for (var i = 0; i < message.messageType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(34).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (var i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (var i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(58).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
                if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
                if (message.publicDependency != null && message.publicDependency.length)
                    for (var i = 0; i < message.publicDependency.length; ++i)
                        writer.uint32(80).int32(message.publicDependency[i]);
                if (message.weakDependency != null && message.weakDependency.length)
                    for (var i = 0; i < message.weakDependency.length; ++i)
                        writer.uint32(88).int32(message.weakDependency[i]);
                if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                    writer.uint32(98).string(message.syntax);
                return writer;
            };

            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message["package"] = reader.string();
                        break;
                    case 3:
                        if (!(message.dependency && message.dependency.length))
                            message.dependency = [];
                        message.dependency.push(reader.string());
                        break;
                    case 10:
                        if (!(message.publicDependency && message.publicDependency.length))
                            message.publicDependency = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.publicDependency.push(reader.int32());
                        } else
                            message.publicDependency.push(reader.int32());
                        break;
                    case 11:
                        if (!(message.weakDependency && message.weakDependency.length))
                            message.weakDependency = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.weakDependency.push(reader.int32());
                        } else
                            message.weakDependency.push(reader.int32());
                        break;
                    case 4:
                        if (!(message.messageType && message.messageType.length))
                            message.messageType = [];
                        message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.service && message.service.length))
                            message.service = [];
                        message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.syntax = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            FileDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object["package"] != null)
                    message["package"] = String(object["package"]);
                if (object.dependency) {
                    if (!Array.isArray(object.dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = [];
                    for (var i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = String(object.dependency[i]);
                }
                if (object.publicDependency) {
                    if (!Array.isArray(object.publicDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                    message.publicDependency = [];
                    for (var i = 0; i < object.publicDependency.length; ++i)
                        message.publicDependency[i] = object.publicDependency[i] | 0;
                }
                if (object.weakDependency) {
                    if (!Array.isArray(object.weakDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                    message.weakDependency = [];
                    for (var i = 0; i < object.weakDependency.length; ++i)
                        message.weakDependency[i] = object.weakDependency[i] | 0;
                }
                if (object.messageType) {
                    if (!Array.isArray(object.messageType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                    message.messageType = [];
                    for (var i = 0; i < object.messageType.length; ++i) {
                        if (typeof object.messageType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                        message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (var i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.service) {
                    if (!Array.isArray(object.service))
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = [];
                    for (var i = 0; i < object.service.length; ++i) {
                        if (typeof object.service[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                }
                if (object.sourceCodeInfo != null) {
                    if (typeof object.sourceCodeInfo !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                    message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                }
                if (object.syntax != null)
                    message.syntax = String(object.syntax);
                return message;
            };

            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.messageType = [];
                    object.enumType = [];
                    object.service = [];
                    object.extension = [];
                    object.publicDependency = [];
                    object.weakDependency = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.sourceCodeInfo = null;
                    object.syntax = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message["package"] != null && message.hasOwnProperty("package"))
                    object["package"] = message["package"];
                if (message.dependency && message.dependency.length) {
                    object.dependency = [];
                    for (var j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.messageType && message.messageType.length) {
                    object.messageType = [];
                    for (var j = 0; j < message.messageType.length; ++j)
                        object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (var j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.service && message.service.length) {
                    object.service = [];
                    for (var j = 0; j < message.service.length; ++j)
                        object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                    object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                if (message.publicDependency && message.publicDependency.length) {
                    object.publicDependency = [];
                    for (var j = 0; j < message.publicDependency.length; ++j)
                        object.publicDependency[j] = message.publicDependency[j];
                }
                if (message.weakDependency && message.weakDependency.length) {
                    object.weakDependency = [];
                    for (var j = 0; j < message.weakDependency.length; ++j)
                        object.weakDependency[j] = message.weakDependency[j];
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = message.syntax;
                return object;
            };

            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nestedType = [];
                this.enumType = [];
                this.extensionRange = [];
                this.oneofDecl = [];
                this.reservedRange = [];
                this.reservedName = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            DescriptorProto.prototype.name = "";
            DescriptorProto.prototype.field = $util.emptyArray;
            DescriptorProto.prototype.extension = $util.emptyArray;
            DescriptorProto.prototype.nestedType = $util.emptyArray;
            DescriptorProto.prototype.enumType = $util.emptyArray;
            DescriptorProto.prototype.extensionRange = $util.emptyArray;
            DescriptorProto.prototype.oneofDecl = $util.emptyArray;
            DescriptorProto.prototype.options = null;
            DescriptorProto.prototype.reservedRange = $util.emptyArray;
            DescriptorProto.prototype.reservedName = $util.emptyArray;

            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(10).string(message.name);
                if (message.field != null && message.field.length)
                    for (var i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(18).fork()).ldelim();
                if (message.nestedType != null && message.nestedType.length)
                    for (var i = 0; i < message.nestedType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(26).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (var i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(34).fork()).ldelim();
                if (message.extensionRange != null && message.extensionRange.length)
                    for (var i = 0; i < message.extensionRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (var i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(50).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
                if (message.oneofDecl != null && message.oneofDecl.length)
                    for (var i = 0; i < message.oneofDecl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(66).fork()).ldelim();
                if (message.reservedRange != null && message.reservedRange.length)
                    for (var i = 0; i < message.reservedRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(74).fork()).ldelim();
                if (message.reservedName != null && message.reservedName.length)
                    for (var i = 0; i < message.reservedName.length; ++i)
                        writer.uint32(82).string(message.reservedName[i]);
                return writer;
            };

            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.field && message.field.length))
                            message.field = [];
                        message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.nestedType && message.nestedType.length))
                            message.nestedType = [];
                        message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.extensionRange && message.extensionRange.length))
                            message.extensionRange = [];
                        message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        if (!(message.oneofDecl && message.oneofDecl.length))
                            message.oneofDecl = [];
                        message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        if (!(message.reservedRange && message.reservedRange.length))
                            message.reservedRange = [];
                        message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                        break;
                    case 10:
                        if (!(message.reservedName && message.reservedName.length))
                            message.reservedName = [];
                        message.reservedName.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            DescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                var message = new $root.google.protobuf.DescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.field) {
                    if (!Array.isArray(object.field))
                        throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = [];
                    for (var i = 0; i < object.field.length; ++i) {
                        if (typeof object.field[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = [];
                    for (var i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.nestedType) {
                    if (!Array.isArray(object.nestedType))
                        throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                    message.nestedType = [];
                    for (var i = 0; i < object.nestedType.length; ++i) {
                        if (typeof object.nestedType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                        message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (var i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.extensionRange) {
                    if (!Array.isArray(object.extensionRange))
                        throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                    message.extensionRange = [];
                    for (var i = 0; i < object.extensionRange.length; ++i) {
                        if (typeof object.extensionRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                        message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                    }
                }
                if (object.oneofDecl) {
                    if (!Array.isArray(object.oneofDecl))
                        throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                    message.oneofDecl = [];
                    for (var i = 0; i < object.oneofDecl.length; ++i) {
                        if (typeof object.oneofDecl[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                        message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                }
                if (object.reservedRange) {
                    if (!Array.isArray(object.reservedRange))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                    message.reservedRange = [];
                    for (var i = 0; i < object.reservedRange.length; ++i) {
                        if (typeof object.reservedRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                        message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                    }
                }
                if (object.reservedName) {
                    if (!Array.isArray(object.reservedName))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                    message.reservedName = [];
                    for (var i = 0; i < object.reservedName.length; ++i)
                        message.reservedName[i] = String(object.reservedName[i]);
                }
                return message;
            };

            DescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.nestedType = [];
                    object.enumType = [];
                    object.extensionRange = [];
                    object.extension = [];
                    object.oneofDecl = [];
                    object.reservedRange = [];
                    object.reservedName = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.field && message.field.length) {
                    object.field = [];
                    for (var j = 0; j < message.field.length; ++j)
                        object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                }
                if (message.nestedType && message.nestedType.length) {
                    object.nestedType = [];
                    for (var j = 0; j < message.nestedType.length; ++j)
                        object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (var j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.extensionRange && message.extensionRange.length) {
                    object.extensionRange = [];
                    for (var j = 0; j < message.extensionRange.length; ++j)
                        object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (var j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                if (message.oneofDecl && message.oneofDecl.length) {
                    object.oneofDecl = [];
                    for (var j = 0; j < message.oneofDecl.length; ++j)
                        object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                }
                if (message.reservedRange && message.reservedRange.length) {
                    object.reservedRange = [];
                    for (var j = 0; j < message.reservedRange.length; ++j)
                        object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                }
                if (message.reservedName && message.reservedName.length) {
                    object.reservedName = [];
                    for (var j = 0; j < message.reservedName.length; ++j)
                        object.reservedName[j] = message.reservedName[j];
                }
                return object;
            };

            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DescriptorProto.ExtensionRange = (function() {

                function ExtensionRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                ExtensionRange.prototype.start = 0;
                ExtensionRange.prototype.end = 0;

                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(16).int32(message.end);
                    return writer;
                };

                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                ExtensionRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                function ReservedRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                ReservedRange.prototype.start = 0;
                ReservedRange.prototype.end = 0;

                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(16).int32(message.end);
                    return writer;
                };

                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                ReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                ReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                ReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            function FieldDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            FieldDescriptorProto.prototype.name = "";
            FieldDescriptorProto.prototype.number = 0;
            FieldDescriptorProto.prototype.label = 1;
            FieldDescriptorProto.prototype.type = 1;
            FieldDescriptorProto.prototype.typeName = "";
            FieldDescriptorProto.prototype.extendee = "";
            FieldDescriptorProto.prototype.defaultValue = "";
            FieldDescriptorProto.prototype.oneofIndex = 0;
            FieldDescriptorProto.prototype.jsonName = "";
            FieldDescriptorProto.prototype.options = null;

            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(10).string(message.name);
                if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                    writer.uint32(18).string(message.extendee);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(24).int32(message.number);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(32).int32(message.label);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(40).int32(message.type);
                if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
                    writer.uint32(50).string(message.typeName);
                if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
                    writer.uint32(58).string(message.defaultValue);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
                if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
                    writer.uint32(72).int32(message.oneofIndex);
                if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
                    writer.uint32(82).string(message.jsonName);
                return writer;
            };

            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.number = reader.int32();
                        break;
                    case 4:
                        message.label = reader.int32();
                        break;
                    case 5:
                        message.type = reader.int32();
                        break;
                    case 6:
                        message.typeName = reader.string();
                        break;
                    case 2:
                        message.extendee = reader.string();
                        break;
                    case 7:
                        message.defaultValue = reader.string();
                        break;
                    case 9:
                        message.oneofIndex = reader.int32();
                        break;
                    case 10:
                        message.jsonName = reader.string();
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            FieldDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                switch (object.label) {
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.typeName != null)
                    message.typeName = String(object.typeName);
                if (object.extendee != null)
                    message.extendee = String(object.extendee);
                if (object.defaultValue != null)
                    message.defaultValue = String(object.defaultValue);
                if (object.oneofIndex != null)
                    message.oneofIndex = object.oneofIndex | 0;
                if (object.jsonName != null)
                    message.jsonName = String(object.jsonName);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                }
                return message;
            };

            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.extendee = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.typeName = "";
                    object.defaultValue = "";
                    object.options = null;
                    object.oneofIndex = 0;
                    object.jsonName = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    object.extendee = message.extendee;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    object.typeName = message.typeName;
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    object.defaultValue = message.defaultValue;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    object.oneofIndex = message.oneofIndex;
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    object.jsonName = message.jsonName;
                return object;
            };

            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            FieldDescriptorProto.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            FieldDescriptorProto.Label = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            function OneofDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            OneofDescriptorProto.prototype.name = "";
            OneofDescriptorProto.prototype.options = null;

            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(10).string(message.name);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
                return writer;
            };

            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            OneofDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                }
                return message;
            };

            OneofDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                return object;
            };

            OneofDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            function EnumDescriptorProto(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            EnumDescriptorProto.prototype.name = "";
            EnumDescriptorProto.prototype.value = $util.emptyArray;
            EnumDescriptorProto.prototype.options = null;

            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(10).string(message.name);
                if (message.value != null && message.value.length)
                    for (var i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
                return writer;
            };

            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            EnumDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                }
                return message;
            };

            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                return object;
            };

            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            EnumValueDescriptorProto.prototype.name = "";
            EnumValueDescriptorProto.prototype.number = 0;
            EnumValueDescriptorProto.prototype.options = null;

            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(10).string(message.name);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(16).int32(message.number);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
                return writer;
            };

            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.number = reader.int32();
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                }
                return message;
            };

            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                return object;
            };

            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            ServiceDescriptorProto.prototype.name = "";
            ServiceDescriptorProto.prototype.method = $util.emptyArray;
            ServiceDescriptorProto.prototype.options = null;

            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(10).string(message.name);
                if (message.method != null && message.method.length)
                    for (var i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
                return writer;
            };

            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.method && message.method.length))
                            message.method = [];
                        message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            ServiceDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.method) {
                    if (!Array.isArray(object.method))
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = [];
                    for (var i = 0; i < object.method.length; ++i) {
                        if (typeof object.method[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                }
                return message;
            };

            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.method && message.method.length) {
                    object.method = [];
                    for (var j = 0; j < message.method.length; ++j)
                        object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                return object;
            };

            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            function MethodDescriptorProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            MethodDescriptorProto.prototype.name = "";
            MethodDescriptorProto.prototype.inputType = "";
            MethodDescriptorProto.prototype.outputType = "";
            MethodDescriptorProto.prototype.options = null;
            MethodDescriptorProto.prototype.clientStreaming = false;
            MethodDescriptorProto.prototype.serverStreaming = false;

            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(10).string(message.name);
                if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                    writer.uint32(18).string(message.inputType);
                if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                    writer.uint32(26).string(message.outputType);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
                if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
                    writer.uint32(40).bool(message.clientStreaming);
                if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
                    writer.uint32(48).bool(message.serverStreaming);
                return writer;
            };

            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.inputType = reader.string();
                        break;
                    case 3:
                        message.outputType = reader.string();
                        break;
                    case 4:
                        message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.clientStreaming = reader.bool();
                        break;
                    case 6:
                        message.serverStreaming = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            MethodDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                var message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.inputType != null)
                    message.inputType = String(object.inputType);
                if (object.outputType != null)
                    message.outputType = String(object.outputType);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                }
                if (object.clientStreaming != null)
                    message.clientStreaming = Boolean(object.clientStreaming);
                if (object.serverStreaming != null)
                    message.serverStreaming = Boolean(object.serverStreaming);
                return message;
            };

            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.inputType = "";
                    object.outputType = "";
                    object.options = null;
                    object.clientStreaming = false;
                    object.serverStreaming = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    object.inputType = message.inputType;
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    object.outputType = message.outputType;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    object.clientStreaming = message.clientStreaming;
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    object.serverStreaming = message.serverStreaming;
                return object;
            };

            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            function FileOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            FileOptions.prototype.javaPackage = "";
            FileOptions.prototype.javaOuterClassname = "";
            FileOptions.prototype.javaMultipleFiles = false;
            FileOptions.prototype.javaGenerateEqualsAndHash = false;
            FileOptions.prototype.javaStringCheckUtf8 = false;
            FileOptions.prototype.optimizeFor = 1;
            FileOptions.prototype.goPackage = "";
            FileOptions.prototype.ccGenericServices = false;
            FileOptions.prototype.javaGenericServices = false;
            FileOptions.prototype.pyGenericServices = false;
            FileOptions.prototype.deprecated = false;
            FileOptions.prototype.ccEnableArenas = false;
            FileOptions.prototype.objcClassPrefix = "";
            FileOptions.prototype.csharpNamespace = "";
            FileOptions.prototype.uninterpretedOption = $util.emptyArray;

            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.javaPackage != null && Object.hasOwnProperty.call(message, "javaPackage"))
                    writer.uint32(10).string(message.javaPackage);
                if (message.javaOuterClassname != null && Object.hasOwnProperty.call(message, "javaOuterClassname"))
                    writer.uint32(66).string(message.javaOuterClassname);
                if (message.optimizeFor != null && Object.hasOwnProperty.call(message, "optimizeFor"))
                    writer.uint32(72).int32(message.optimizeFor);
                if (message.javaMultipleFiles != null && Object.hasOwnProperty.call(message, "javaMultipleFiles"))
                    writer.uint32(80).bool(message.javaMultipleFiles);
                if (message.goPackage != null && Object.hasOwnProperty.call(message, "goPackage"))
                    writer.uint32(90).string(message.goPackage);
                if (message.ccGenericServices != null && Object.hasOwnProperty.call(message, "ccGenericServices"))
                    writer.uint32(128).bool(message.ccGenericServices);
                if (message.javaGenericServices != null && Object.hasOwnProperty.call(message, "javaGenericServices"))
                    writer.uint32(136).bool(message.javaGenericServices);
                if (message.pyGenericServices != null && Object.hasOwnProperty.call(message, "pyGenericServices"))
                    writer.uint32(144).bool(message.pyGenericServices);
                if (message.javaGenerateEqualsAndHash != null && Object.hasOwnProperty.call(message, "javaGenerateEqualsAndHash"))
                    writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(184).bool(message.deprecated);
                if (message.javaStringCheckUtf8 != null && Object.hasOwnProperty.call(message, "javaStringCheckUtf8"))
                    writer.uint32(216).bool(message.javaStringCheckUtf8);
                if (message.ccEnableArenas != null && Object.hasOwnProperty.call(message, "ccEnableArenas"))
                    writer.uint32(248).bool(message.ccEnableArenas);
                if (message.objcClassPrefix != null && Object.hasOwnProperty.call(message, "objcClassPrefix"))
                    writer.uint32(290).string(message.objcClassPrefix);
                if (message.csharpNamespace != null && Object.hasOwnProperty.call(message, "csharpNamespace"))
                    writer.uint32(298).string(message.csharpNamespace);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                return writer;
            };

            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.javaPackage = reader.string();
                        break;
                    case 8:
                        message.javaOuterClassname = reader.string();
                        break;
                    case 10:
                        message.javaMultipleFiles = reader.bool();
                        break;
                    case 20:
                        message.javaGenerateEqualsAndHash = reader.bool();
                        break;
                    case 27:
                        message.javaStringCheckUtf8 = reader.bool();
                        break;
                    case 9:
                        message.optimizeFor = reader.int32();
                        break;
                    case 11:
                        message.goPackage = reader.string();
                        break;
                    case 16:
                        message.ccGenericServices = reader.bool();
                        break;
                    case 17:
                        message.javaGenericServices = reader.bool();
                        break;
                    case 18:
                        message.pyGenericServices = reader.bool();
                        break;
                    case 23:
                        message.deprecated = reader.bool();
                        break;
                    case 31:
                        message.ccEnableArenas = reader.bool();
                        break;
                    case 36:
                        message.objcClassPrefix = reader.string();
                        break;
                    case 37:
                        message.csharpNamespace = reader.string();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            FileOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                var message = new $root.google.protobuf.FileOptions();
                if (object.javaPackage != null)
                    message.javaPackage = String(object.javaPackage);
                if (object.javaOuterClassname != null)
                    message.javaOuterClassname = String(object.javaOuterClassname);
                if (object.javaMultipleFiles != null)
                    message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                if (object.javaGenerateEqualsAndHash != null)
                    message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                if (object.javaStringCheckUtf8 != null)
                    message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                switch (object.optimizeFor) {
                case "SPEED":
                case 1:
                    message.optimizeFor = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimizeFor = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimizeFor = 3;
                    break;
                }
                if (object.goPackage != null)
                    message.goPackage = String(object.goPackage);
                if (object.ccGenericServices != null)
                    message.ccGenericServices = Boolean(object.ccGenericServices);
                if (object.javaGenericServices != null)
                    message.javaGenericServices = Boolean(object.javaGenericServices);
                if (object.pyGenericServices != null)
                    message.pyGenericServices = Boolean(object.pyGenericServices);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.ccEnableArenas != null)
                    message.ccEnableArenas = Boolean(object.ccEnableArenas);
                if (object.objcClassPrefix != null)
                    message.objcClassPrefix = String(object.objcClassPrefix);
                if (object.csharpNamespace != null)
                    message.csharpNamespace = String(object.csharpNamespace);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            FileOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.javaPackage = "";
                    object.javaOuterClassname = "";
                    object.optimizeFor = options.enums === String ? "SPEED" : 1;
                    object.javaMultipleFiles = false;
                    object.goPackage = "";
                    object.ccGenericServices = false;
                    object.javaGenericServices = false;
                    object.pyGenericServices = false;
                    object.javaGenerateEqualsAndHash = false;
                    object.deprecated = false;
                    object.javaStringCheckUtf8 = false;
                    object.ccEnableArenas = false;
                    object.objcClassPrefix = "";
                    object.csharpNamespace = "";
                }
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    object.javaPackage = message.javaPackage;
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    object.javaOuterClassname = message.javaOuterClassname;
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    object.javaMultipleFiles = message.javaMultipleFiles;
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    object.goPackage = message.goPackage;
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    object.ccGenericServices = message.ccGenericServices;
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    object.javaGenericServices = message.javaGenericServices;
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    object.pyGenericServices = message.pyGenericServices;
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    object.ccEnableArenas = message.ccEnableArenas;
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    object.objcClassPrefix = message.objcClassPrefix;
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    object.csharpNamespace = message.csharpNamespace;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            FileOptions.OptimizeMode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            function MessageOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            MessageOptions.prototype.messageSetWireFormat = false;
            MessageOptions.prototype.noStandardDescriptorAccessor = false;
            MessageOptions.prototype.deprecated = false;
            MessageOptions.prototype.mapEntry = false;
            MessageOptions.prototype.uninterpretedOption = $util.emptyArray;

            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messageSetWireFormat != null && Object.hasOwnProperty.call(message, "messageSetWireFormat"))
                    writer.uint32(8).bool(message.messageSetWireFormat);
                if (message.noStandardDescriptorAccessor != null && Object.hasOwnProperty.call(message, "noStandardDescriptorAccessor"))
                    writer.uint32(16).bool(message.noStandardDescriptorAccessor);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(24).bool(message.deprecated);
                if (message.mapEntry != null && Object.hasOwnProperty.call(message, "mapEntry"))
                    writer.uint32(56).bool(message.mapEntry);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                return writer;
            };

            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.messageSetWireFormat = reader.bool();
                        break;
                    case 2:
                        message.noStandardDescriptorAccessor = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 7:
                        message.mapEntry = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            MessageOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                var message = new $root.google.protobuf.MessageOptions();
                if (object.messageSetWireFormat != null)
                    message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                if (object.noStandardDescriptorAccessor != null)
                    message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.mapEntry != null)
                    message.mapEntry = Boolean(object.mapEntry);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            MessageOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.messageSetWireFormat = false;
                    object.noStandardDescriptorAccessor = false;
                    object.deprecated = false;
                    object.mapEntry = false;
                }
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    object.messageSetWireFormat = message.messageSetWireFormat;
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    object.mapEntry = message.mapEntry;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            function FieldOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            FieldOptions.prototype.ctype = 0;
            FieldOptions.prototype.packed = false;
            FieldOptions.prototype.jstype = 0;
            FieldOptions.prototype.lazy = false;
            FieldOptions.prototype.deprecated = false;
            FieldOptions.prototype.weak = false;
            FieldOptions.prototype.uninterpretedOption = $util.emptyArray;

            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                    writer.uint32(8).int32(message.ctype);
                if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                    writer.uint32(16).bool(message.packed);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(24).bool(message.deprecated);
                if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                    writer.uint32(40).bool(message.lazy);
                if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                    writer.uint32(48).int32(message.jstype);
                if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                    writer.uint32(80).bool(message.weak);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                return writer;
            };

            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ctype = reader.int32();
                        break;
                    case 2:
                        message.packed = reader.bool();
                        break;
                    case 6:
                        message.jstype = reader.int32();
                        break;
                    case 5:
                        message.lazy = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 10:
                        message.weak = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            FieldOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                var message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed != null)
                    message.packed = Boolean(object.packed);
                switch (object.jstype) {
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;
                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;
                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                }
                if (object.lazy != null)
                    message.lazy = Boolean(object.lazy);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.weak != null)
                    message.weak = Boolean(object.weak);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            FieldOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.ctype = options.enums === String ? "STRING" : 0;
                    object.packed = false;
                    object.deprecated = false;
                    object.lazy = false;
                    object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                    object.weak = false;
                }
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                if (message.packed != null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    object.lazy = message.lazy;
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                if (message.weak != null && message.hasOwnProperty("weak"))
                    object.weak = message.weak;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            FieldOptions.CType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            FieldOptions.JSType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            function OneofOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            OneofOptions.prototype.uninterpretedOption = $util.emptyArray;

            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                return writer;
            };

            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            OneofOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofOptions)
                    return object;
                var message = new $root.google.protobuf.OneofOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            OneofOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            OneofOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            function EnumOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            EnumOptions.prototype.allowAlias = false;
            EnumOptions.prototype.deprecated = false;
            EnumOptions.prototype.uninterpretedOption = $util.emptyArray;

            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
                    writer.uint32(16).bool(message.allowAlias);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(24).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                return writer;
            };

            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.allowAlias = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            EnumOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                var message = new $root.google.protobuf.EnumOptions();
                if (object.allowAlias != null)
                    message.allowAlias = Boolean(object.allowAlias);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            EnumOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.allowAlias = false;
                    object.deprecated = false;
                }
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    object.allowAlias = message.allowAlias;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            function EnumValueOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            EnumValueOptions.prototype.deprecated = false;
            EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;

            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(8).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                return writer;
            };

            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            EnumValueOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                var message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            function ServiceOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            ServiceOptions.prototype.deprecated = false;
            ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;

            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                return writer;
            };

            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            ServiceOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                var message = new $root.google.protobuf.ServiceOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            ServiceOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            function MethodOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            MethodOptions.prototype.deprecated = false;
            MethodOptions.prototype.uninterpretedOption = $util.emptyArray;
            MethodOptions.prototype[".protocol.harmonytypes.v1.metadata"] = null;

            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (var i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(7994).fork()).ldelim();
                if (message[".protocol.harmonytypes.v1.metadata"] != null && Object.hasOwnProperty.call(message, ".protocol.harmonytypes.v1.metadata"))
                    $root.protocol.harmonytypes.v1.HarmonyMethodMetadata.encode(message[".protocol.harmonytypes.v1.metadata"], writer.uint32(8730).fork()).ldelim();
                return writer;
            };

            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 1091:
                        message[".protocol.harmonytypes.v1.metadata"] = $root.protocol.harmonytypes.v1.HarmonyMethodMetadata.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            MethodOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                var message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".protocol.harmonytypes.v1.metadata"] != null) {
                    if (typeof object[".protocol.harmonytypes.v1.metadata"] !== "object")
                        throw TypeError(".google.protobuf.MethodOptions..protocol.harmonytypes.v1.metadata: object expected");
                    message[".protocol.harmonytypes.v1.metadata"] = $root.protocol.harmonytypes.v1.HarmonyMethodMetadata.fromObject(object[".protocol.harmonytypes.v1.metadata"]);
                }
                return message;
            };

            MethodOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object[".protocol.harmonytypes.v1.metadata"] = null;
                }
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (var j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".protocol.harmonytypes.v1.metadata"] != null && message.hasOwnProperty(".protocol.harmonytypes.v1.metadata"))
                    object[".protocol.harmonytypes.v1.metadata"] = $root.protocol.harmonytypes.v1.HarmonyMethodMetadata.toObject(message[".protocol.harmonytypes.v1.metadata"], options);
                return object;
            };

            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            UninterpretedOption.prototype.name = $util.emptyArray;
            UninterpretedOption.prototype.identifierValue = "";
            UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            UninterpretedOption.prototype.doubleValue = 0;
            UninterpretedOption.prototype.stringValue = $util.newBuffer([]);
            UninterpretedOption.prototype.aggregateValue = "";

            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.name.length)
                    for (var i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(18).fork()).ldelim();
                if (message.identifierValue != null && Object.hasOwnProperty.call(message, "identifierValue"))
                    writer.uint32(26).string(message.identifierValue);
                if (message.positiveIntValue != null && Object.hasOwnProperty.call(message, "positiveIntValue"))
                    writer.uint32(32).uint64(message.positiveIntValue);
                if (message.negativeIntValue != null && Object.hasOwnProperty.call(message, "negativeIntValue"))
                    writer.uint32(40).int64(message.negativeIntValue);
                if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                    writer.uint32(49).double(message.doubleValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(58).bytes(message.stringValue);
                if (message.aggregateValue != null && Object.hasOwnProperty.call(message, "aggregateValue"))
                    writer.uint32(66).string(message.aggregateValue);
                return writer;
            };

            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.name && message.name.length))
                            message.name = [];
                        message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.identifierValue = reader.string();
                        break;
                    case 4:
                        message.positiveIntValue = reader.uint64();
                        break;
                    case 5:
                        message.negativeIntValue = reader.int64();
                        break;
                    case 6:
                        message.doubleValue = reader.double();
                        break;
                    case 7:
                        message.stringValue = reader.bytes();
                        break;
                    case 8:
                        message.aggregateValue = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            UninterpretedOption.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                var message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = [];
                    for (var i = 0; i < object.name.length; ++i) {
                        if (typeof object.name[i] !== "object")
                            throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                    }
                }
                if (object.identifierValue != null)
                    message.identifierValue = String(object.identifierValue);
                if (object.positiveIntValue != null)
                    if ($util.Long)
                        (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                    else if (typeof object.positiveIntValue === "string")
                        message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                    else if (typeof object.positiveIntValue === "number")
                        message.positiveIntValue = object.positiveIntValue;
                    else if (typeof object.positiveIntValue === "object")
                        message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                if (object.negativeIntValue != null)
                    if ($util.Long)
                        (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                    else if (typeof object.negativeIntValue === "string")
                        message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                    else if (typeof object.negativeIntValue === "number")
                        message.negativeIntValue = object.negativeIntValue;
                    else if (typeof object.negativeIntValue === "object")
                        message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                if (object.doubleValue != null)
                    message.doubleValue = Number(object.doubleValue);
                if (object.stringValue != null)
                    if (typeof object.stringValue === "string")
                        $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                    else if (object.stringValue.length >= 0)
                        message.stringValue = object.stringValue;
                if (object.aggregateValue != null)
                    message.aggregateValue = String(object.aggregateValue);
                return message;
            };

            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifierValue = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.positiveIntValue = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.negativeIntValue = options.longs === String ? "0" : 0;
                    object.doubleValue = 0;
                    if (options.bytes === String)
                        object.stringValue = "";
                    else {
                        object.stringValue = [];
                        if (options.bytes !== Array)
                            object.stringValue = $util.newBuffer(object.stringValue);
                    }
                    object.aggregateValue = "";
                }
                if (message.name && message.name.length) {
                    object.name = [];
                    for (var j = 0; j < message.name.length; ++j)
                        object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    object.identifierValue = message.identifierValue;
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (typeof message.positiveIntValue === "number")
                        object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                    else
                        object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (typeof message.negativeIntValue === "number")
                        object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                    else
                        object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    object.aggregateValue = message.aggregateValue;
                return object;
            };

            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UninterpretedOption.NamePart = (function() {

                function NamePart(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                NamePart.prototype.namePart = "";
                NamePart.prototype.isExtension = false;

                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(10).string(message.namePart);
                    writer.uint32(16).bool(message.isExtension);
                    return writer;
                };

                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.namePart = reader.string();
                            break;
                        case 2:
                            message.isExtension = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("namePart"))
                        throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                    if (!message.hasOwnProperty("isExtension"))
                        throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                    return message;
                };

                NamePart.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.namePart != null)
                        message.namePart = String(object.namePart);
                    if (object.isExtension != null)
                        message.isExtension = Boolean(object.isExtension);
                    return message;
                };

                NamePart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.namePart = "";
                        object.isExtension = false;
                    }
                    if (message.namePart != null && message.hasOwnProperty("namePart"))
                        object.namePart = message.namePart;
                    if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                        object.isExtension = message.isExtension;
                    return object;
                };

                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            SourceCodeInfo.prototype.location = $util.emptyArray;

            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && message.location.length)
                    for (var i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(10).fork()).ldelim();
                return writer;
            };

            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.location && message.location.length))
                            message.location = [];
                        message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            SourceCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                var message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!Array.isArray(object.location))
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = [];
                    for (var i = 0; i < object.location.length; ++i) {
                        if (typeof object.location[i] !== "object")
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                    }
                }
                return message;
            };

            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location && message.location.length) {
                    object.location = [];
                    for (var j = 0; j < message.location.length; ++j)
                        object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                }
                return object;
            };

            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SourceCodeInfo.Location = (function() {

                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leadingDetachedComments = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Location.prototype.path = $util.emptyArray;
                Location.prototype.span = $util.emptyArray;
                Location.prototype.leadingComments = "";
                Location.prototype.trailingComments = "";
                Location.prototype.leadingDetachedComments = $util.emptyArray;

                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(18).fork();
                        for (var i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                        writer.uint32(26).string(message.leadingComments);
                    if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                        writer.uint32(34).string(message.trailingComments);
                    if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                        for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                            writer.uint32(50).string(message.leadingDetachedComments[i]);
                    return writer;
                };

                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            if (!(message.span && message.span.length))
                                message.span = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.span.push(reader.int32());
                            } else
                                message.span.push(reader.int32());
                            break;
                        case 3:
                            message.leadingComments = reader.string();
                            break;
                        case 4:
                            message.trailingComments = reader.string();
                            break;
                        case 6:
                            if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                message.leadingDetachedComments = [];
                            message.leadingDetachedComments.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!Array.isArray(object.span))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = [];
                        for (var i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leadingComments != null)
                        message.leadingComments = String(object.leadingComments);
                    if (object.trailingComments != null)
                        message.trailingComments = String(object.trailingComments);
                    if (object.leadingDetachedComments) {
                        if (!Array.isArray(object.leadingDetachedComments))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                        message.leadingDetachedComments = [];
                        for (var i = 0; i < object.leadingDetachedComments.length; ++i)
                            message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                    }
                    return message;
                };

                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leadingDetachedComments = [];
                    }
                    if (options.defaults) {
                        object.leadingComments = "";
                        object.trailingComments = "";
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span && message.span.length) {
                        object.span = [];
                        for (var j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        object.leadingComments = message.leadingComments;
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        object.trailingComments = message.trailingComments;
                    if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                        object.leadingDetachedComments = [];
                        for (var j = 0; j < message.leadingDetachedComments.length; ++j)
                            object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                    }
                    return object;
                };

                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation != null && message.annotation.length)
                    for (var i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(10).fork()).ldelim();
                return writer;
            };

            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.annotation && message.annotation.length))
                            message.annotation = [];
                        message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            GeneratedCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                    return object;
                var message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    if (!Array.isArray(object.annotation))
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                    message.annotation = [];
                    for (var i = 0; i < object.annotation.length; ++i) {
                        if (typeof object.annotation[i] !== "object")
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                        message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                    }
                }
                return message;
            };

            GeneratedCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.annotation = [];
                if (message.annotation && message.annotation.length) {
                    object.annotation = [];
                    for (var j = 0; j < message.annotation.length; ++j)
                        object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                }
                return object;
            };

            GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GeneratedCodeInfo.Annotation = (function() {

                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Annotation.prototype.path = $util.emptyArray;
                Annotation.prototype.sourceFile = "";
                Annotation.prototype.begin = 0;
                Annotation.prototype.end = 0;

                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(10).fork();
                        for (var i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                        writer.uint32(18).string(message.sourceFile);
                    if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                        writer.uint32(24).int32(message.begin);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(32).int32(message.end);
                    return writer;
                };

                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            message.sourceFile = reader.string();
                            break;
                        case 3:
                            message.begin = reader.int32();
                            break;
                        case 4:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Annotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                        message.path = [];
                        for (var i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.sourceFile != null)
                        message.sourceFile = String(object.sourceFile);
                    if (object.begin != null)
                        message.begin = object.begin | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                Annotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.sourceFile = "";
                        object.begin = 0;
                        object.end = 0;
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (var j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        object.sourceFile = message.sourceFile;
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        object.begin = message.begin;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                Annotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
