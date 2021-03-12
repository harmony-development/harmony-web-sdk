/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["auth/v1"] || ($protobuf.roots["auth/v1"] = {});

$root.protocol = (function() {

    var protocol = {};

    protocol.auth = (function() {

        var auth = {};

        auth.v1 = (function() {

            var v1 = {};

            v1.BeginAuthResponse = (function() {

                function BeginAuthResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                BeginAuthResponse.prototype.authId = "";

                BeginAuthResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.authId != null && Object.hasOwnProperty.call(message, "authId"))
                        writer.uint32(10).string(message.authId);
                    return writer;
                };

                BeginAuthResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.BeginAuthResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.authId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                BeginAuthResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.auth.v1.BeginAuthResponse)
                        return object;
                    var message = new $root.protocol.auth.v1.BeginAuthResponse();
                    if (object.authId != null)
                        message.authId = String(object.authId);
                    return message;
                };

                BeginAuthResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.authId = "";
                    if (message.authId != null && message.hasOwnProperty("authId"))
                        object.authId = message.authId;
                    return object;
                };

                BeginAuthResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return BeginAuthResponse;
            })();

            v1.Session = (function() {

                function Session(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                Session.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                Session.prototype.sessionToken = "";

                Session.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                        writer.uint32(8).uint64(message.userId);
                    if (message.sessionToken != null && Object.hasOwnProperty.call(message, "sessionToken"))
                        writer.uint32(18).string(message.sessionToken);
                    return writer;
                };

                Session.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.Session();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.userId = reader.uint64();
                            break;
                        case 2:
                            message.sessionToken = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                Session.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.auth.v1.Session)
                        return object;
                    var message = new $root.protocol.auth.v1.Session();
                    if (object.userId != null)
                        if ($util.Long)
                            (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                        else if (typeof object.userId === "string")
                            message.userId = parseInt(object.userId, 10);
                        else if (typeof object.userId === "number")
                            message.userId = object.userId;
                        else if (typeof object.userId === "object")
                            message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
                    if (object.sessionToken != null)
                        message.sessionToken = String(object.sessionToken);
                    return message;
                };

                Session.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.userId = options.longs === String ? "0" : 0;
                        object.sessionToken = "";
                    }
                    if (message.userId != null && message.hasOwnProperty("userId"))
                        if (typeof message.userId === "number")
                            object.userId = options.longs === String ? String(message.userId) : message.userId;
                        else
                            object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
                    if (message.sessionToken != null && message.hasOwnProperty("sessionToken"))
                        object.sessionToken = message.sessionToken;
                    return object;
                };

                Session.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Session;
            })();

            v1.AuthStep = (function() {

                function AuthStep(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                AuthStep.prototype.fallbackUrl = "";
                AuthStep.prototype.canGoBack = false;
                AuthStep.prototype.choice = null;
                AuthStep.prototype.form = null;
                AuthStep.prototype.session = null;
                AuthStep.prototype.waiting = null;

                var $oneOfFields;

                Object.defineProperty(AuthStep.prototype, "step", {
                    get: $util.oneOfGetter($oneOfFields = ["choice", "form", "session", "waiting"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                AuthStep.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.fallbackUrl != null && Object.hasOwnProperty.call(message, "fallbackUrl"))
                        writer.uint32(10).string(message.fallbackUrl);
                    if (message.canGoBack != null && Object.hasOwnProperty.call(message, "canGoBack"))
                        writer.uint32(16).bool(message.canGoBack);
                    if (message.choice != null && Object.hasOwnProperty.call(message, "choice"))
                        $root.protocol.auth.v1.AuthStep.Choice.encode(message.choice, writer.uint32(26).fork()).ldelim();
                    if (message.form != null && Object.hasOwnProperty.call(message, "form"))
                        $root.protocol.auth.v1.AuthStep.Form.encode(message.form, writer.uint32(34).fork()).ldelim();
                    if (message.session != null && Object.hasOwnProperty.call(message, "session"))
                        $root.protocol.auth.v1.Session.encode(message.session, writer.uint32(42).fork()).ldelim();
                    if (message.waiting != null && Object.hasOwnProperty.call(message, "waiting"))
                        $root.protocol.auth.v1.AuthStep.Waiting.encode(message.waiting, writer.uint32(50).fork()).ldelim();
                    return writer;
                };

                AuthStep.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.AuthStep();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.fallbackUrl = reader.string();
                            break;
                        case 2:
                            message.canGoBack = reader.bool();
                            break;
                        case 3:
                            message.choice = $root.protocol.auth.v1.AuthStep.Choice.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.form = $root.protocol.auth.v1.AuthStep.Form.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.session = $root.protocol.auth.v1.Session.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.waiting = $root.protocol.auth.v1.AuthStep.Waiting.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                AuthStep.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.auth.v1.AuthStep)
                        return object;
                    var message = new $root.protocol.auth.v1.AuthStep();
                    if (object.fallbackUrl != null)
                        message.fallbackUrl = String(object.fallbackUrl);
                    if (object.canGoBack != null)
                        message.canGoBack = Boolean(object.canGoBack);
                    if (object.choice != null) {
                        if (typeof object.choice !== "object")
                            throw TypeError(".protocol.auth.v1.AuthStep.choice: object expected");
                        message.choice = $root.protocol.auth.v1.AuthStep.Choice.fromObject(object.choice);
                    }
                    if (object.form != null) {
                        if (typeof object.form !== "object")
                            throw TypeError(".protocol.auth.v1.AuthStep.form: object expected");
                        message.form = $root.protocol.auth.v1.AuthStep.Form.fromObject(object.form);
                    }
                    if (object.session != null) {
                        if (typeof object.session !== "object")
                            throw TypeError(".protocol.auth.v1.AuthStep.session: object expected");
                        message.session = $root.protocol.auth.v1.Session.fromObject(object.session);
                    }
                    if (object.waiting != null) {
                        if (typeof object.waiting !== "object")
                            throw TypeError(".protocol.auth.v1.AuthStep.waiting: object expected");
                        message.waiting = $root.protocol.auth.v1.AuthStep.Waiting.fromObject(object.waiting);
                    }
                    return message;
                };

                AuthStep.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.fallbackUrl = "";
                        object.canGoBack = false;
                    }
                    if (message.fallbackUrl != null && message.hasOwnProperty("fallbackUrl"))
                        object.fallbackUrl = message.fallbackUrl;
                    if (message.canGoBack != null && message.hasOwnProperty("canGoBack"))
                        object.canGoBack = message.canGoBack;
                    if (message.choice != null && message.hasOwnProperty("choice")) {
                        object.choice = $root.protocol.auth.v1.AuthStep.Choice.toObject(message.choice, options);
                        if (options.oneofs)
                            object.step = "choice";
                    }
                    if (message.form != null && message.hasOwnProperty("form")) {
                        object.form = $root.protocol.auth.v1.AuthStep.Form.toObject(message.form, options);
                        if (options.oneofs)
                            object.step = "form";
                    }
                    if (message.session != null && message.hasOwnProperty("session")) {
                        object.session = $root.protocol.auth.v1.Session.toObject(message.session, options);
                        if (options.oneofs)
                            object.step = "session";
                    }
                    if (message.waiting != null && message.hasOwnProperty("waiting")) {
                        object.waiting = $root.protocol.auth.v1.AuthStep.Waiting.toObject(message.waiting, options);
                        if (options.oneofs)
                            object.step = "waiting";
                    }
                    return object;
                };

                AuthStep.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                AuthStep.Choice = (function() {

                    function Choice(properties) {
                        this.options = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Choice.prototype.title = "";
                    Choice.prototype.options = $util.emptyArray;

                    Choice.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                            writer.uint32(10).string(message.title);
                        if (message.options != null && message.options.length)
                            for (var i = 0; i < message.options.length; ++i)
                                writer.uint32(18).string(message.options[i]);
                        return writer;
                    };

                    Choice.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.AuthStep.Choice();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.title = reader.string();
                                break;
                            case 2:
                                if (!(message.options && message.options.length))
                                    message.options = [];
                                message.options.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Choice.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.auth.v1.AuthStep.Choice)
                            return object;
                        var message = new $root.protocol.auth.v1.AuthStep.Choice();
                        if (object.title != null)
                            message.title = String(object.title);
                        if (object.options) {
                            if (!Array.isArray(object.options))
                                throw TypeError(".protocol.auth.v1.AuthStep.Choice.options: array expected");
                            message.options = [];
                            for (var i = 0; i < object.options.length; ++i)
                                message.options[i] = String(object.options[i]);
                        }
                        return message;
                    };

                    Choice.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.options = [];
                        if (options.defaults)
                            object.title = "";
                        if (message.title != null && message.hasOwnProperty("title"))
                            object.title = message.title;
                        if (message.options && message.options.length) {
                            object.options = [];
                            for (var j = 0; j < message.options.length; ++j)
                                object.options[j] = message.options[j];
                        }
                        return object;
                    };

                    Choice.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Choice;
                })();

                AuthStep.Form = (function() {

                    function Form(properties) {
                        this.fields = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Form.prototype.title = "";
                    Form.prototype.fields = $util.emptyArray;

                    Form.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                            writer.uint32(10).string(message.title);
                        if (message.fields != null && message.fields.length)
                            for (var i = 0; i < message.fields.length; ++i)
                                $root.protocol.auth.v1.AuthStep.Form.FormField.encode(message.fields[i], writer.uint32(18).fork()).ldelim();
                        return writer;
                    };

                    Form.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.AuthStep.Form();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.title = reader.string();
                                break;
                            case 2:
                                if (!(message.fields && message.fields.length))
                                    message.fields = [];
                                message.fields.push($root.protocol.auth.v1.AuthStep.Form.FormField.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Form.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.auth.v1.AuthStep.Form)
                            return object;
                        var message = new $root.protocol.auth.v1.AuthStep.Form();
                        if (object.title != null)
                            message.title = String(object.title);
                        if (object.fields) {
                            if (!Array.isArray(object.fields))
                                throw TypeError(".protocol.auth.v1.AuthStep.Form.fields: array expected");
                            message.fields = [];
                            for (var i = 0; i < object.fields.length; ++i) {
                                if (typeof object.fields[i] !== "object")
                                    throw TypeError(".protocol.auth.v1.AuthStep.Form.fields: object expected");
                                message.fields[i] = $root.protocol.auth.v1.AuthStep.Form.FormField.fromObject(object.fields[i]);
                            }
                        }
                        return message;
                    };

                    Form.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.fields = [];
                        if (options.defaults)
                            object.title = "";
                        if (message.title != null && message.hasOwnProperty("title"))
                            object.title = message.title;
                        if (message.fields && message.fields.length) {
                            object.fields = [];
                            for (var j = 0; j < message.fields.length; ++j)
                                object.fields[j] = $root.protocol.auth.v1.AuthStep.Form.FormField.toObject(message.fields[j], options);
                        }
                        return object;
                    };

                    Form.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    Form.FormField = (function() {

                        function FormField(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        FormField.prototype.name = "";
                        FormField.prototype.type = "";

                        FormField.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(10).string(message.name);
                            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                                writer.uint32(18).string(message.type);
                            return writer;
                        };

                        FormField.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.AuthStep.Form.FormField();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                case 2:
                                    message.type = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        FormField.fromObject = function fromObject(object) {
                            if (object instanceof $root.protocol.auth.v1.AuthStep.Form.FormField)
                                return object;
                            var message = new $root.protocol.auth.v1.AuthStep.Form.FormField();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.type != null)
                                message.type = String(object.type);
                            return message;
                        };

                        FormField.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.name = "";
                                object.type = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.type != null && message.hasOwnProperty("type"))
                                object.type = message.type;
                            return object;
                        };

                        FormField.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return FormField;
                    })();

                    return Form;
                })();

                AuthStep.Waiting = (function() {

                    function Waiting(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Waiting.prototype.title = "";
                    Waiting.prototype.description = "";

                    Waiting.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                            writer.uint32(10).string(message.title);
                        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                            writer.uint32(18).string(message.description);
                        return writer;
                    };

                    Waiting.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.AuthStep.Waiting();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.title = reader.string();
                                break;
                            case 2:
                                message.description = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Waiting.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.auth.v1.AuthStep.Waiting)
                            return object;
                        var message = new $root.protocol.auth.v1.AuthStep.Waiting();
                        if (object.title != null)
                            message.title = String(object.title);
                        if (object.description != null)
                            message.description = String(object.description);
                        return message;
                    };

                    Waiting.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.title = "";
                            object.description = "";
                        }
                        if (message.title != null && message.hasOwnProperty("title"))
                            object.title = message.title;
                        if (message.description != null && message.hasOwnProperty("description"))
                            object.description = message.description;
                        return object;
                    };

                    Waiting.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Waiting;
                })();

                return AuthStep;
            })();

            v1.NextStepRequest = (function() {

                function NextStepRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                NextStepRequest.prototype.authId = "";
                NextStepRequest.prototype.choice = null;
                NextStepRequest.prototype.form = null;

                var $oneOfFields;

                Object.defineProperty(NextStepRequest.prototype, "step", {
                    get: $util.oneOfGetter($oneOfFields = ["choice", "form"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                NextStepRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.authId != null && Object.hasOwnProperty.call(message, "authId"))
                        writer.uint32(10).string(message.authId);
                    if (message.choice != null && Object.hasOwnProperty.call(message, "choice"))
                        $root.protocol.auth.v1.NextStepRequest.Choice.encode(message.choice, writer.uint32(18).fork()).ldelim();
                    if (message.form != null && Object.hasOwnProperty.call(message, "form"))
                        $root.protocol.auth.v1.NextStepRequest.Form.encode(message.form, writer.uint32(26).fork()).ldelim();
                    return writer;
                };

                NextStepRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.NextStepRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.authId = reader.string();
                            break;
                        case 2:
                            message.choice = $root.protocol.auth.v1.NextStepRequest.Choice.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.form = $root.protocol.auth.v1.NextStepRequest.Form.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                NextStepRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.auth.v1.NextStepRequest)
                        return object;
                    var message = new $root.protocol.auth.v1.NextStepRequest();
                    if (object.authId != null)
                        message.authId = String(object.authId);
                    if (object.choice != null) {
                        if (typeof object.choice !== "object")
                            throw TypeError(".protocol.auth.v1.NextStepRequest.choice: object expected");
                        message.choice = $root.protocol.auth.v1.NextStepRequest.Choice.fromObject(object.choice);
                    }
                    if (object.form != null) {
                        if (typeof object.form !== "object")
                            throw TypeError(".protocol.auth.v1.NextStepRequest.form: object expected");
                        message.form = $root.protocol.auth.v1.NextStepRequest.Form.fromObject(object.form);
                    }
                    return message;
                };

                NextStepRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.authId = "";
                    if (message.authId != null && message.hasOwnProperty("authId"))
                        object.authId = message.authId;
                    if (message.choice != null && message.hasOwnProperty("choice")) {
                        object.choice = $root.protocol.auth.v1.NextStepRequest.Choice.toObject(message.choice, options);
                        if (options.oneofs)
                            object.step = "choice";
                    }
                    if (message.form != null && message.hasOwnProperty("form")) {
                        object.form = $root.protocol.auth.v1.NextStepRequest.Form.toObject(message.form, options);
                        if (options.oneofs)
                            object.step = "form";
                    }
                    return object;
                };

                NextStepRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                NextStepRequest.Choice = (function() {

                    function Choice(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Choice.prototype.choice = "";

                    Choice.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.choice != null && Object.hasOwnProperty.call(message, "choice"))
                            writer.uint32(10).string(message.choice);
                        return writer;
                    };

                    Choice.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.NextStepRequest.Choice();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.choice = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Choice.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.auth.v1.NextStepRequest.Choice)
                            return object;
                        var message = new $root.protocol.auth.v1.NextStepRequest.Choice();
                        if (object.choice != null)
                            message.choice = String(object.choice);
                        return message;
                    };

                    Choice.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.choice = "";
                        if (message.choice != null && message.hasOwnProperty("choice"))
                            object.choice = message.choice;
                        return object;
                    };

                    Choice.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Choice;
                })();

                NextStepRequest.FormFields = (function() {

                    function FormFields(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    FormFields.prototype.bytes = $util.newBuffer([]);
                    FormFields.prototype.string = "";
                    FormFields.prototype.number = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    var $oneOfFields;

                    Object.defineProperty(FormFields.prototype, "field", {
                        get: $util.oneOfGetter($oneOfFields = ["bytes", "string", "number"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    FormFields.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                            writer.uint32(10).bytes(message.bytes);
                        if (message.string != null && Object.hasOwnProperty.call(message, "string"))
                            writer.uint32(18).string(message.string);
                        if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                            writer.uint32(24).int64(message.number);
                        return writer;
                    };

                    FormFields.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.NextStepRequest.FormFields();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.bytes = reader.bytes();
                                break;
                            case 2:
                                message.string = reader.string();
                                break;
                            case 3:
                                message.number = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    FormFields.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.auth.v1.NextStepRequest.FormFields)
                            return object;
                        var message = new $root.protocol.auth.v1.NextStepRequest.FormFields();
                        if (object.bytes != null)
                            if (typeof object.bytes === "string")
                                $util.base64.decode(object.bytes, message.bytes = $util.newBuffer($util.base64.length(object.bytes)), 0);
                            else if (object.bytes.length >= 0)
                                message.bytes = object.bytes;
                        if (object.string != null)
                            message.string = String(object.string);
                        if (object.number != null)
                            if ($util.Long)
                                (message.number = $util.Long.fromValue(object.number)).unsigned = false;
                            else if (typeof object.number === "string")
                                message.number = parseInt(object.number, 10);
                            else if (typeof object.number === "number")
                                message.number = object.number;
                            else if (typeof object.number === "object")
                                message.number = new $util.LongBits(object.number.low >>> 0, object.number.high >>> 0).toNumber();
                        return message;
                    };

                    FormFields.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.bytes != null && message.hasOwnProperty("bytes")) {
                            object.bytes = options.bytes === String ? $util.base64.encode(message.bytes, 0, message.bytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytes) : message.bytes;
                            if (options.oneofs)
                                object.field = "bytes";
                        }
                        if (message.string != null && message.hasOwnProperty("string")) {
                            object.string = message.string;
                            if (options.oneofs)
                                object.field = "string";
                        }
                        if (message.number != null && message.hasOwnProperty("number")) {
                            if (typeof message.number === "number")
                                object.number = options.longs === String ? String(message.number) : message.number;
                            else
                                object.number = options.longs === String ? $util.Long.prototype.toString.call(message.number) : options.longs === Number ? new $util.LongBits(message.number.low >>> 0, message.number.high >>> 0).toNumber() : message.number;
                            if (options.oneofs)
                                object.field = "number";
                        }
                        return object;
                    };

                    FormFields.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return FormFields;
                })();

                NextStepRequest.Form = (function() {

                    function Form(properties) {
                        this.fields = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    Form.prototype.fields = $util.emptyArray;

                    Form.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.fields != null && message.fields.length)
                            for (var i = 0; i < message.fields.length; ++i)
                                $root.protocol.auth.v1.NextStepRequest.FormFields.encode(message.fields[i], writer.uint32(10).fork()).ldelim();
                        return writer;
                    };

                    Form.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.NextStepRequest.Form();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.fields && message.fields.length))
                                    message.fields = [];
                                message.fields.push($root.protocol.auth.v1.NextStepRequest.FormFields.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    Form.fromObject = function fromObject(object) {
                        if (object instanceof $root.protocol.auth.v1.NextStepRequest.Form)
                            return object;
                        var message = new $root.protocol.auth.v1.NextStepRequest.Form();
                        if (object.fields) {
                            if (!Array.isArray(object.fields))
                                throw TypeError(".protocol.auth.v1.NextStepRequest.Form.fields: array expected");
                            message.fields = [];
                            for (var i = 0; i < object.fields.length; ++i) {
                                if (typeof object.fields[i] !== "object")
                                    throw TypeError(".protocol.auth.v1.NextStepRequest.Form.fields: object expected");
                                message.fields[i] = $root.protocol.auth.v1.NextStepRequest.FormFields.fromObject(object.fields[i]);
                            }
                        }
                        return message;
                    };

                    Form.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.fields = [];
                        if (message.fields && message.fields.length) {
                            object.fields = [];
                            for (var j = 0; j < message.fields.length; ++j)
                                object.fields[j] = $root.protocol.auth.v1.NextStepRequest.FormFields.toObject(message.fields[j], options);
                        }
                        return object;
                    };

                    Form.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Form;
                })();

                return NextStepRequest;
            })();

            v1.StepBackRequest = (function() {

                function StepBackRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                StepBackRequest.prototype.authId = "";

                StepBackRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.authId != null && Object.hasOwnProperty.call(message, "authId"))
                        writer.uint32(10).string(message.authId);
                    return writer;
                };

                StepBackRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.StepBackRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.authId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                StepBackRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.auth.v1.StepBackRequest)
                        return object;
                    var message = new $root.protocol.auth.v1.StepBackRequest();
                    if (object.authId != null)
                        message.authId = String(object.authId);
                    return message;
                };

                StepBackRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.authId = "";
                    if (message.authId != null && message.hasOwnProperty("authId"))
                        object.authId = message.authId;
                    return object;
                };

                StepBackRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return StepBackRequest;
            })();

            v1.StreamStepsRequest = (function() {

                function StreamStepsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                StreamStepsRequest.prototype.authId = "";

                StreamStepsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.authId != null && Object.hasOwnProperty.call(message, "authId"))
                        writer.uint32(10).string(message.authId);
                    return writer;
                };

                StreamStepsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.StreamStepsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.authId = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                StreamStepsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.auth.v1.StreamStepsRequest)
                        return object;
                    var message = new $root.protocol.auth.v1.StreamStepsRequest();
                    if (object.authId != null)
                        message.authId = String(object.authId);
                    return message;
                };

                StreamStepsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.authId = "";
                    if (message.authId != null && message.hasOwnProperty("authId"))
                        object.authId = message.authId;
                    return object;
                };

                StreamStepsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return StreamStepsRequest;
            })();

            v1.FederateRequest = (function() {

                function FederateRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                FederateRequest.prototype.target = "";

                FederateRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                        writer.uint32(10).string(message.target);
                    return writer;
                };

                FederateRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.FederateRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.target = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                FederateRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.auth.v1.FederateRequest)
                        return object;
                    var message = new $root.protocol.auth.v1.FederateRequest();
                    if (object.target != null)
                        message.target = String(object.target);
                    return message;
                };

                FederateRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.target = "";
                    if (message.target != null && message.hasOwnProperty("target"))
                        object.target = message.target;
                    return object;
                };

                FederateRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return FederateRequest;
            })();

            v1.FederateReply = (function() {

                function FederateReply(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                FederateReply.prototype.token = "";
                FederateReply.prototype.nonce = "";

                FederateReply.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                        writer.uint32(10).string(message.token);
                    if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                        writer.uint32(18).string(message.nonce);
                    return writer;
                };

                FederateReply.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.FederateReply();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.token = reader.string();
                            break;
                        case 2:
                            message.nonce = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                FederateReply.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.auth.v1.FederateReply)
                        return object;
                    var message = new $root.protocol.auth.v1.FederateReply();
                    if (object.token != null)
                        message.token = String(object.token);
                    if (object.nonce != null)
                        message.nonce = String(object.nonce);
                    return message;
                };

                FederateReply.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.token = "";
                        object.nonce = "";
                    }
                    if (message.token != null && message.hasOwnProperty("token"))
                        object.token = message.token;
                    if (message.nonce != null && message.hasOwnProperty("nonce"))
                        object.nonce = message.nonce;
                    return object;
                };

                FederateReply.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return FederateReply;
            })();

            v1.KeyReply = (function() {

                function KeyReply(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                KeyReply.prototype.key = "";

                KeyReply.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                        writer.uint32(10).string(message.key);
                    return writer;
                };

                KeyReply.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.KeyReply();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.key = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                KeyReply.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.auth.v1.KeyReply)
                        return object;
                    var message = new $root.protocol.auth.v1.KeyReply();
                    if (object.key != null)
                        message.key = String(object.key);
                    return message;
                };

                KeyReply.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.key = "";
                    if (message.key != null && message.hasOwnProperty("key"))
                        object.key = message.key;
                    return object;
                };

                KeyReply.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return KeyReply;
            })();

            v1.LoginFederatedRequest = (function() {

                function LoginFederatedRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                LoginFederatedRequest.prototype.authToken = "";
                LoginFederatedRequest.prototype.domain = "";

                LoginFederatedRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.authToken != null && Object.hasOwnProperty.call(message, "authToken"))
                        writer.uint32(10).string(message.authToken);
                    if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                        writer.uint32(18).string(message.domain);
                    return writer;
                };

                LoginFederatedRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.auth.v1.LoginFederatedRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.authToken = reader.string();
                            break;
                        case 2:
                            message.domain = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                LoginFederatedRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.auth.v1.LoginFederatedRequest)
                        return object;
                    var message = new $root.protocol.auth.v1.LoginFederatedRequest();
                    if (object.authToken != null)
                        message.authToken = String(object.authToken);
                    if (object.domain != null)
                        message.domain = String(object.domain);
                    return message;
                };

                LoginFederatedRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.authToken = "";
                        object.domain = "";
                    }
                    if (message.authToken != null && message.hasOwnProperty("authToken"))
                        object.authToken = message.authToken;
                    if (message.domain != null && message.hasOwnProperty("domain"))
                        object.domain = message.domain;
                    return object;
                };

                LoginFederatedRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return LoginFederatedRequest;
            })();

            v1.AuthService = (function() {

                function AuthService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (AuthService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AuthService;


                Object.defineProperty(AuthService.prototype.federate = function federate(request, callback) {
                    return this.rpcCall(federate, $root.protocol.auth.v1.FederateRequest, $root.protocol.auth.v1.FederateReply, request, callback);
                }, "name", { value: "Federate" });


                Object.defineProperty(AuthService.prototype.loginFederated = function loginFederated(request, callback) {
                    return this.rpcCall(loginFederated, $root.protocol.auth.v1.LoginFederatedRequest, $root.protocol.auth.v1.Session, request, callback);
                }, "name", { value: "LoginFederated" });


                Object.defineProperty(AuthService.prototype.key = function key(request, callback) {
                    return this.rpcCall(key, $root.google.protobuf.Empty, $root.protocol.auth.v1.KeyReply, request, callback);
                }, "name", { value: "Key" });


                Object.defineProperty(AuthService.prototype.beginAuth = function beginAuth(request, callback) {
                    return this.rpcCall(beginAuth, $root.google.protobuf.Empty, $root.protocol.auth.v1.BeginAuthResponse, request, callback);
                }, "name", { value: "BeginAuth" });


                Object.defineProperty(AuthService.prototype.nextStep = function nextStep(request, callback) {
                    return this.rpcCall(nextStep, $root.protocol.auth.v1.NextStepRequest, $root.protocol.auth.v1.AuthStep, request, callback);
                }, "name", { value: "NextStep" });


                Object.defineProperty(AuthService.prototype.stepBack = function stepBack(request, callback) {
                    return this.rpcCall(stepBack, $root.protocol.auth.v1.StepBackRequest, $root.protocol.auth.v1.AuthStep, request, callback);
                }, "name", { value: "StepBack" });


                Object.defineProperty(AuthService.prototype.streamSteps = function streamSteps(request, callback) {
                    return this.rpcCall(streamSteps, $root.protocol.auth.v1.StreamStepsRequest, $root.protocol.auth.v1.AuthStep, request, callback);
                }, "name", { value: "StreamSteps" });

                return AuthService;
            })();

            return v1;
        })();

        return auth;
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
