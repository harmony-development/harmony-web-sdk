/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["harmonytypes/v1"] || ($protobuf.roots["harmonytypes/v1"] = {});

export const protocol = $root.protocol = (() => {

    const protocol = {};

    protocol.harmonytypes = (function() {

        const harmonytypes = {};

        harmonytypes.v1 = (function() {

            const v1 = {};

            v1.UserStatus = (function() {
                const valuesById = {}, values = Object.create(valuesById);
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
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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

                let $oneOfFields;

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
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.Override();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
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
                    let message = new $root.protocol.harmonytypes.v1.Override();
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
                    let object = {};
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
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Normal"] = 0;
                values[valuesById[1] = "Primary"] = 1;
                values[valuesById[2] = "Destructive"] = 2;
                return values;
            })();

            v1.ActionPresentation = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Button"] = 0;
                values[valuesById[1] = "Dropdown"] = 1;
                values[valuesById[2] = "Menu"] = 2;
                values[valuesById[3] = "SmallEntry"] = 3;
                values[valuesById[4] = "LargeEntry"] = 4;
                return values;
            })();

            v1.FieldPresentation = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Data"] = 0;
                values[valuesById[1] = "CaptionedImage"] = 1;
                values[valuesById[2] = "Row"] = 2;
                return values;
            })();

            v1.Action = (function() {

                function Action(properties) {
                    this.children = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                        for (let i = 0; i < message.children.length; ++i)
                            $root.protocol.harmonytypes.v1.Action.encode(message.children[i], writer.uint32(50).fork()).ldelim();
                    return writer;
                };

                Action.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.Action();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
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
                    let message = new $root.protocol.harmonytypes.v1.Action();
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
                        for (let i = 0; i < object.children.length; ++i) {
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
                    let object = {};
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
                        for (let j = 0; j < message.children.length; ++j)
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
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.EmbedHeading();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
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
                    let message = new $root.protocol.harmonytypes.v1.EmbedHeading();
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
                    let object = {};
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
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                        for (let i = 0; i < message.actions.length; ++i)
                            $root.protocol.harmonytypes.v1.Action.encode(message.actions[i], writer.uint32(50).fork()).ldelim();
                    return writer;
                };

                EmbedField.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.EmbedField();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
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
                    let message = new $root.protocol.harmonytypes.v1.EmbedField();
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
                        for (let i = 0; i < object.actions.length; ++i) {
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
                    let object = {};
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
                        for (let j = 0; j < message.actions.length; ++j)
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
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                        for (let i = 0; i < message.fields.length; ++i)
                            $root.protocol.harmonytypes.v1.EmbedField.encode(message.fields[i], writer.uint32(50).fork()).ldelim();
                    if (message.actions != null && message.actions.length)
                        for (let i = 0; i < message.actions.length; ++i)
                            $root.protocol.harmonytypes.v1.Action.encode(message.actions[i], writer.uint32(58).fork()).ldelim();
                    return writer;
                };

                Embed.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.Embed();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
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
                    let message = new $root.protocol.harmonytypes.v1.Embed();
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
                        for (let i = 0; i < object.fields.length; ++i) {
                            if (typeof object.fields[i] !== "object")
                                throw TypeError(".protocol.harmonytypes.v1.Embed.fields: object expected");
                            message.fields[i] = $root.protocol.harmonytypes.v1.EmbedField.fromObject(object.fields[i]);
                        }
                    }
                    if (object.actions) {
                        if (!Array.isArray(object.actions))
                            throw TypeError(".protocol.harmonytypes.v1.Embed.actions: array expected");
                        message.actions = [];
                        for (let i = 0; i < object.actions.length; ++i) {
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
                    let object = {};
                    if (options.arrays || options.defaults) {
                        object.fields = [];
                        object.actions = [];
                    }
                    if (options.defaults) {
                        object.title = "";
                        object.body = "";
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
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
                        for (let j = 0; j < message.fields.length; ++j)
                            object.fields[j] = $root.protocol.harmonytypes.v1.EmbedField.toObject(message.fields[j], options);
                    }
                    if (message.actions && message.actions.length) {
                        object.actions = [];
                        for (let j = 0; j < message.actions.length; ++j)
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
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.Attachment();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
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
                    let message = new $root.protocol.harmonytypes.v1.Attachment();
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
                    let object = {};
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
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                        for (let keys = Object.keys(message.extension), i = 0; i < keys.length; ++i) {
                            writer.uint32(18).fork().uint32(10).string(keys[i]);
                            $root.google.protobuf.Any.encode(message.extension[keys[i]], writer.uint32(18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                Metadata.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.Metadata(), key, value;
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.kind = reader.string();
                            break;
                        case 2:
                            if (message.extension === $util.emptyObject)
                                message.extension = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
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
                    let message = new $root.protocol.harmonytypes.v1.Metadata();
                    if (object.kind != null)
                        message.kind = String(object.kind);
                    if (object.extension) {
                        if (typeof object.extension !== "object")
                            throw TypeError(".protocol.harmonytypes.v1.Metadata.extension: object expected");
                        message.extension = {};
                        for (let keys = Object.keys(object.extension), i = 0; i < keys.length; ++i) {
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
                    let object = {};
                    if (options.objects || options.defaults)
                        object.extension = {};
                    if (options.defaults)
                        object.kind = "";
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        object.kind = message.kind;
                    let keys2;
                    if (message.extension && (keys2 = Object.keys(message.extension)).length) {
                        object.extension = {};
                        for (let j = 0; j < keys2.length; ++j)
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
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                        for (let i = 0; i < message.embeds.length; ++i)
                            $root.protocol.harmonytypes.v1.Embed.encode(message.embeds[i], writer.uint32(66).fork()).ldelim();
                    if (message.actions != null && message.actions.length)
                        for (let i = 0; i < message.actions.length; ++i)
                            $root.protocol.harmonytypes.v1.Action.encode(message.actions[i], writer.uint32(74).fork()).ldelim();
                    if (message.attachments != null && message.attachments.length)
                        for (let i = 0; i < message.attachments.length; ++i)
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
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.harmonytypes.v1.Message();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
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
                    let message = new $root.protocol.harmonytypes.v1.Message();
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
                        for (let i = 0; i < object.embeds.length; ++i) {
                            if (typeof object.embeds[i] !== "object")
                                throw TypeError(".protocol.harmonytypes.v1.Message.embeds: object expected");
                            message.embeds[i] = $root.protocol.harmonytypes.v1.Embed.fromObject(object.embeds[i]);
                        }
                    }
                    if (object.actions) {
                        if (!Array.isArray(object.actions))
                            throw TypeError(".protocol.harmonytypes.v1.Message.actions: array expected");
                        message.actions = [];
                        for (let i = 0; i < object.actions.length; ++i) {
                            if (typeof object.actions[i] !== "object")
                                throw TypeError(".protocol.harmonytypes.v1.Message.actions: object expected");
                            message.actions[i] = $root.protocol.harmonytypes.v1.Action.fromObject(object.actions[i]);
                        }
                    }
                    if (object.attachments) {
                        if (!Array.isArray(object.attachments))
                            throw TypeError(".protocol.harmonytypes.v1.Message.attachments: array expected");
                        message.attachments = [];
                        for (let i = 0; i < object.attachments.length; ++i) {
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
                    let object = {};
                    if (options.arrays || options.defaults) {
                        object.embeds = [];
                        object.actions = [];
                        object.attachments = [];
                    }
                    if (options.defaults) {
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.guildId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.guildId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.channelId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.channelId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.messageId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
                            object.authorId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.authorId = options.longs === String ? "0" : 0;
                        object.createdAt = null;
                        object.editedAt = null;
                        object.content = "";
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, true);
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
                        for (let j = 0; j < message.embeds.length; ++j)
                            object.embeds[j] = $root.protocol.harmonytypes.v1.Embed.toObject(message.embeds[j], options);
                    }
                    if (message.actions && message.actions.length) {
                        object.actions = [];
                        for (let j = 0; j < message.actions.length; ++j)
                            object.actions[j] = $root.protocol.harmonytypes.v1.Action.toObject(message.actions[j], options);
                    }
                    if (message.attachments && message.attachments.length) {
                        object.attachments = [];
                        for (let j = 0; j < message.attachments.length; ++j)
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

export const google = $root.google = (() => {

    const google = {};

    google.protobuf = (function() {

        const protobuf = {};

        protobuf.Timestamp = (function() {

            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                let message = new $root.google.protobuf.Timestamp();
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
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    let tag = reader.uint32();
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
                let message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
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

export { $root as default };
