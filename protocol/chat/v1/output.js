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

                    MemberLeft.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.memberId != null && Object.hasOwnProperty.call(message, "memberId"))
                            writer.uint32(8).uint64(message.memberId);
                        if (message.guildId != null && Object.hasOwnProperty.call(message, "guildId"))
                            writer.uint32(16).uint64(message.guildId);
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


                Object.defineProperty(ChatService.prototype.getUser = function getUser(request, callback) {
                    return this.rpcCall(getUser, $root.protocol.chat.v1.GetUserRequest, $root.protocol.chat.v1.GetUserResponse, request, callback);
                }, "name", { value: "GetUser" });


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

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
