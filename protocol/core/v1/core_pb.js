// source: core/v1/core.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.protocol.core.v1.Action', null, global);
goog.exportSymbol('proto.protocol.core.v1.ActionEvent', null, global);
goog.exportSymbol('proto.protocol.core.v1.ActionEvent.Action', null, global);
goog.exportSymbol('proto.protocol.core.v1.ActionEvent.EventCase', null, global);
goog.exportSymbol('proto.protocol.core.v1.ActionPresentation', null, global);
goog.exportSymbol('proto.protocol.core.v1.ActionType', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateChannelRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateChannelResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateGuildRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateGuildResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateInviteRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateInviteResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.DeleteChannelRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.DeleteGuildRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.DeleteInviteRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.DeleteMessageRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.Embed', null, global);
goog.exportSymbol('proto.protocol.core.v1.EmbedField', null, global);
goog.exportSymbol('proto.protocol.core.v1.EmbedHeading', null, global);
goog.exportSymbol('proto.protocol.core.v1.FieldPresentation', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetChannelMessagesRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetChannelMessagesResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildChannelsRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildChannelsResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildChannelsResponse.Channel', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildInvitesRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildInvitesResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildInvitesResponse.Invite', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildMembersRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildMembersResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GuildEvent', null, global);
goog.exportSymbol('proto.protocol.core.v1.GuildEvent.ChannelDeleted', null, global);
goog.exportSymbol('proto.protocol.core.v1.GuildEvent.ChannelUpdated', null, global);
goog.exportSymbol('proto.protocol.core.v1.GuildEvent.EventCase', null, global);
goog.exportSymbol('proto.protocol.core.v1.GuildEvent.GuildDeleted', null, global);
goog.exportSymbol('proto.protocol.core.v1.GuildEvent.GuildUpdated', null, global);
goog.exportSymbol('proto.protocol.core.v1.GuildEvent.MemberJoined', null, global);
goog.exportSymbol('proto.protocol.core.v1.GuildEvent.MemberLeft', null, global);
goog.exportSymbol('proto.protocol.core.v1.GuildEvent.MessageDeleted', null, global);
goog.exportSymbol('proto.protocol.core.v1.GuildEvent.MessageSent', null, global);
goog.exportSymbol('proto.protocol.core.v1.GuildEvent.MessageUpdated', null, global);
goog.exportSymbol('proto.protocol.core.v1.JoinGuildRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.JoinGuildResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.JoinedLocalGuildsRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.JoinedLocalGuildsResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.LeaveGuildRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.Location', null, global);
goog.exportSymbol('proto.protocol.core.v1.Message', null, global);
goog.exportSymbol('proto.protocol.core.v1.SendMessageRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.StreamActionEventsRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.StreamGuildEventsRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.TriggerActionRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.UpdateChannelNameRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.UpdateGuildNameRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.UpdateMessageRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Location.displayName = 'proto.protocol.core.v1.Location';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.Action.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Action.displayName = 'proto.protocol.core.v1.Action';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.EmbedHeading = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.EmbedHeading, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.EmbedHeading.displayName = 'proto.protocol.core.v1.EmbedHeading';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.EmbedField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.EmbedField.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.EmbedField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.EmbedField.displayName = 'proto.protocol.core.v1.EmbedField';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.Embed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.Embed.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.Embed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Embed.displayName = 'proto.protocol.core.v1.Embed';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.Message.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Message.displayName = 'proto.protocol.core.v1.Message';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.CreateGuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.CreateGuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.CreateGuildRequest.displayName = 'proto.protocol.core.v1.CreateGuildRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.CreateGuildResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.CreateGuildResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.CreateGuildResponse.displayName = 'proto.protocol.core.v1.CreateGuildResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.CreateInviteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.CreateInviteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.CreateInviteRequest.displayName = 'proto.protocol.core.v1.CreateInviteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.CreateInviteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.CreateInviteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.CreateInviteResponse.displayName = 'proto.protocol.core.v1.CreateInviteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.CreateChannelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.CreateChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.CreateChannelRequest.displayName = 'proto.protocol.core.v1.CreateChannelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.CreateChannelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.CreateChannelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.CreateChannelResponse.displayName = 'proto.protocol.core.v1.CreateChannelResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GetGuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildRequest.displayName = 'proto.protocol.core.v1.GetGuildRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GetGuildResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildResponse.displayName = 'proto.protocol.core.v1.GetGuildResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GetGuildInvitesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildInvitesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildInvitesRequest.displayName = 'proto.protocol.core.v1.GetGuildInvitesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GetGuildInvitesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.GetGuildInvitesResponse.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildInvitesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildInvitesResponse.displayName = 'proto.protocol.core.v1.GetGuildInvitesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GetGuildInvitesResponse.Invite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildInvitesResponse.Invite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildInvitesResponse.Invite.displayName = 'proto.protocol.core.v1.GetGuildInvitesResponse.Invite';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GetGuildMembersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildMembersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildMembersRequest.displayName = 'proto.protocol.core.v1.GetGuildMembersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GetGuildMembersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.GetGuildMembersResponse.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildMembersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildMembersResponse.displayName = 'proto.protocol.core.v1.GetGuildMembersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GetGuildChannelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildChannelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildChannelsRequest.displayName = 'proto.protocol.core.v1.GetGuildChannelsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GetGuildChannelsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.GetGuildChannelsResponse.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildChannelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildChannelsResponse.displayName = 'proto.protocol.core.v1.GetGuildChannelsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildChannelsResponse.Channel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildChannelsResponse.Channel.displayName = 'proto.protocol.core.v1.GetGuildChannelsResponse.Channel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GetChannelMessagesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetChannelMessagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetChannelMessagesRequest.displayName = 'proto.protocol.core.v1.GetChannelMessagesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GetChannelMessagesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.GetChannelMessagesResponse.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.GetChannelMessagesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetChannelMessagesResponse.displayName = 'proto.protocol.core.v1.GetChannelMessagesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.UpdateGuildNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.UpdateGuildNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.UpdateGuildNameRequest.displayName = 'proto.protocol.core.v1.UpdateGuildNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.UpdateChannelNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.UpdateChannelNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.UpdateChannelNameRequest.displayName = 'proto.protocol.core.v1.UpdateChannelNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.UpdateMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.UpdateMessageRequest.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.UpdateMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.UpdateMessageRequest.displayName = 'proto.protocol.core.v1.UpdateMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.DeleteGuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.DeleteGuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.DeleteGuildRequest.displayName = 'proto.protocol.core.v1.DeleteGuildRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.DeleteInviteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.DeleteInviteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.DeleteInviteRequest.displayName = 'proto.protocol.core.v1.DeleteInviteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.DeleteChannelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.DeleteChannelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.DeleteChannelRequest.displayName = 'proto.protocol.core.v1.DeleteChannelRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.DeleteMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.DeleteMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.DeleteMessageRequest.displayName = 'proto.protocol.core.v1.DeleteMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.StreamGuildEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.StreamGuildEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.StreamGuildEventsRequest.displayName = 'proto.protocol.core.v1.StreamGuildEventsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GuildEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.protocol.core.v1.GuildEvent.oneofGroups_);
};
goog.inherits(proto.protocol.core.v1.GuildEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GuildEvent.displayName = 'proto.protocol.core.v1.GuildEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GuildEvent.MessageSent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GuildEvent.MessageSent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GuildEvent.MessageSent.displayName = 'proto.protocol.core.v1.GuildEvent.MessageSent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.GuildEvent.MessageUpdated.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.GuildEvent.MessageUpdated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GuildEvent.MessageUpdated.displayName = 'proto.protocol.core.v1.GuildEvent.MessageUpdated';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GuildEvent.MessageDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GuildEvent.MessageDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GuildEvent.MessageDeleted.displayName = 'proto.protocol.core.v1.GuildEvent.MessageDeleted';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GuildEvent.ChannelUpdated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GuildEvent.ChannelUpdated.displayName = 'proto.protocol.core.v1.GuildEvent.ChannelUpdated';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GuildEvent.ChannelDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GuildEvent.ChannelDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GuildEvent.ChannelDeleted.displayName = 'proto.protocol.core.v1.GuildEvent.ChannelDeleted';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GuildEvent.GuildUpdated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GuildEvent.GuildUpdated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GuildEvent.GuildUpdated.displayName = 'proto.protocol.core.v1.GuildEvent.GuildUpdated';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GuildEvent.GuildDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GuildEvent.GuildDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GuildEvent.GuildDeleted.displayName = 'proto.protocol.core.v1.GuildEvent.GuildDeleted';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GuildEvent.MemberJoined = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GuildEvent.MemberJoined, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GuildEvent.MemberJoined.displayName = 'proto.protocol.core.v1.GuildEvent.MemberJoined';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.GuildEvent.MemberLeft = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GuildEvent.MemberLeft, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GuildEvent.MemberLeft.displayName = 'proto.protocol.core.v1.GuildEvent.MemberLeft';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.StreamActionEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.StreamActionEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.StreamActionEventsRequest.displayName = 'proto.protocol.core.v1.StreamActionEventsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.ActionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.protocol.core.v1.ActionEvent.oneofGroups_);
};
goog.inherits(proto.protocol.core.v1.ActionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.ActionEvent.displayName = 'proto.protocol.core.v1.ActionEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.ActionEvent.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.ActionEvent.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.ActionEvent.Action.displayName = 'proto.protocol.core.v1.ActionEvent.Action';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.JoinGuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.JoinGuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.JoinGuildRequest.displayName = 'proto.protocol.core.v1.JoinGuildRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.JoinGuildResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.JoinGuildResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.JoinGuildResponse.displayName = 'proto.protocol.core.v1.JoinGuildResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.LeaveGuildRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.LeaveGuildRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.LeaveGuildRequest.displayName = 'proto.protocol.core.v1.LeaveGuildRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.JoinedLocalGuildsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.JoinedLocalGuildsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.JoinedLocalGuildsRequest.displayName = 'proto.protocol.core.v1.JoinedLocalGuildsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.JoinedLocalGuildsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.JoinedLocalGuildsResponse.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.JoinedLocalGuildsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.JoinedLocalGuildsResponse.displayName = 'proto.protocol.core.v1.JoinedLocalGuildsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.TriggerActionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.TriggerActionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.TriggerActionRequest.displayName = 'proto.protocol.core.v1.TriggerActionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.core.v1.SendMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.SendMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.SendMessageRequest.displayName = 'proto.protocol.core.v1.SendMessageRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    messageId: jspb.Message.getFieldWithDefault(msg, 3, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Location;
  return proto.protocol.core.v1.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setGuildId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setChannelId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setMessageId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getChannelId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getMessageId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.Location.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Location} returns this
 */
proto.protocol.core.v1.Location.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.Location.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Location} returns this
 */
proto.protocol.core.v1.Location.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 message_id = 3;
 * @return {string}
 */
proto.protocol.core.v1.Location.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Location} returns this
 */
proto.protocol.core.v1.Location.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.Action.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.protocol.core.v1.Action.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.Action}
 */
proto.protocol.core.v1.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Action;
  return proto.protocol.core.v1.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Action}
 */
proto.protocol.core.v1.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {!proto.protocol.core.v1.ActionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = new proto.protocol.core.v1.Action;
      reader.readMessage(value,proto.protocol.core.v1.Action.deserializeBinaryFromReader);
      msg.addChildren(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.protocol.core.v1.Action.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.protocol.core.v1.Action.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Action} returns this
 */
proto.protocol.core.v1.Action.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.protocol.core.v1.Action.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Action} returns this
 */
proto.protocol.core.v1.Action.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.protocol.core.v1.Action.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Action} returns this
 */
proto.protocol.core.v1.Action.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ActionType type = 4;
 * @return {!proto.protocol.core.v1.ActionType}
 */
proto.protocol.core.v1.Action.prototype.getType = function() {
  return /** @type {!proto.protocol.core.v1.ActionType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.protocol.core.v1.ActionType} value
 * @return {!proto.protocol.core.v1.Action} returns this
 */
proto.protocol.core.v1.Action.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated Action children = 5;
 * @return {!Array<!proto.protocol.core.v1.Action>}
 */
proto.protocol.core.v1.Action.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Action, 5));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Action>} value
 * @return {!proto.protocol.core.v1.Action} returns this
*/
proto.protocol.core.v1.Action.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.protocol.core.v1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Action}
 */
proto.protocol.core.v1.Action.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.protocol.core.v1.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.Action} returns this
 */
proto.protocol.core.v1.Action.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.EmbedHeading.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.EmbedHeading.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.EmbedHeading} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.EmbedHeading.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subtext: jspb.Message.getFieldWithDefault(msg, 2, ""),
    url: jspb.Message.getFieldWithDefault(msg, 3, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.EmbedHeading}
 */
proto.protocol.core.v1.EmbedHeading.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.EmbedHeading;
  return proto.protocol.core.v1.EmbedHeading.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.EmbedHeading} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.EmbedHeading}
 */
proto.protocol.core.v1.EmbedHeading.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtext(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.EmbedHeading.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.EmbedHeading.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.EmbedHeading} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.EmbedHeading.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubtext();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.protocol.core.v1.EmbedHeading.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.EmbedHeading} returns this
 */
proto.protocol.core.v1.EmbedHeading.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subtext = 2;
 * @return {string}
 */
proto.protocol.core.v1.EmbedHeading.prototype.getSubtext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.EmbedHeading} returns this
 */
proto.protocol.core.v1.EmbedHeading.prototype.setSubtext = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.protocol.core.v1.EmbedHeading.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.EmbedHeading} returns this
 */
proto.protocol.core.v1.EmbedHeading.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string icon = 4;
 * @return {string}
 */
proto.protocol.core.v1.EmbedHeading.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.EmbedHeading} returns this
 */
proto.protocol.core.v1.EmbedHeading.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.EmbedField.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.EmbedField.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.EmbedField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.EmbedField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.EmbedField.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subtitle: jspb.Message.getFieldWithDefault(msg, 2, ""),
    body: jspb.Message.getFieldWithDefault(msg, 3, ""),
    imageUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    presentation: jspb.Message.getFieldWithDefault(msg, 5, 0),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.protocol.core.v1.Action.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.EmbedField}
 */
proto.protocol.core.v1.EmbedField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.EmbedField;
  return proto.protocol.core.v1.EmbedField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.EmbedField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.EmbedField}
 */
proto.protocol.core.v1.EmbedField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageUrl(value);
      break;
    case 5:
      var value = /** @type {!proto.protocol.core.v1.FieldPresentation} */ (reader.readEnum());
      msg.setPresentation(value);
      break;
    case 6:
      var value = new proto.protocol.core.v1.Action;
      reader.readMessage(value,proto.protocol.core.v1.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.EmbedField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.EmbedField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.EmbedField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.EmbedField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImageUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPresentation();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.protocol.core.v1.Action.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.protocol.core.v1.EmbedField.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.EmbedField} returns this
 */
proto.protocol.core.v1.EmbedField.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subtitle = 2;
 * @return {string}
 */
proto.protocol.core.v1.EmbedField.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.EmbedField} returns this
 */
proto.protocol.core.v1.EmbedField.prototype.setSubtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string body = 3;
 * @return {string}
 */
proto.protocol.core.v1.EmbedField.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.EmbedField} returns this
 */
proto.protocol.core.v1.EmbedField.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string image_url = 4;
 * @return {string}
 */
proto.protocol.core.v1.EmbedField.prototype.getImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.EmbedField} returns this
 */
proto.protocol.core.v1.EmbedField.prototype.setImageUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional FieldPresentation presentation = 5;
 * @return {!proto.protocol.core.v1.FieldPresentation}
 */
proto.protocol.core.v1.EmbedField.prototype.getPresentation = function() {
  return /** @type {!proto.protocol.core.v1.FieldPresentation} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.protocol.core.v1.FieldPresentation} value
 * @return {!proto.protocol.core.v1.EmbedField} returns this
 */
proto.protocol.core.v1.EmbedField.prototype.setPresentation = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated Action actions = 6;
 * @return {!Array<!proto.protocol.core.v1.Action>}
 */
proto.protocol.core.v1.EmbedField.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Action, 6));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Action>} value
 * @return {!proto.protocol.core.v1.EmbedField} returns this
*/
proto.protocol.core.v1.EmbedField.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.protocol.core.v1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Action}
 */
proto.protocol.core.v1.EmbedField.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.protocol.core.v1.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.EmbedField} returns this
 */
proto.protocol.core.v1.EmbedField.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.Embed.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.Embed.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Embed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Embed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Embed.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    body: jspb.Message.getFieldWithDefault(msg, 2, ""),
    color: jspb.Message.getFieldWithDefault(msg, 3, 0),
    header: (f = msg.getHeader()) && proto.protocol.core.v1.EmbedHeading.toObject(includeInstance, f),
    footer: (f = msg.getFooter()) && proto.protocol.core.v1.EmbedHeading.toObject(includeInstance, f),
    fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.protocol.core.v1.EmbedField.toObject, includeInstance),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.protocol.core.v1.Action.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.Embed}
 */
proto.protocol.core.v1.Embed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Embed;
  return proto.protocol.core.v1.Embed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Embed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Embed}
 */
proto.protocol.core.v1.Embed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setColor(value);
      break;
    case 4:
      var value = new proto.protocol.core.v1.EmbedHeading;
      reader.readMessage(value,proto.protocol.core.v1.EmbedHeading.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 5:
      var value = new proto.protocol.core.v1.EmbedHeading;
      reader.readMessage(value,proto.protocol.core.v1.EmbedHeading.deserializeBinaryFromReader);
      msg.setFooter(value);
      break;
    case 6:
      var value = new proto.protocol.core.v1.EmbedField;
      reader.readMessage(value,proto.protocol.core.v1.EmbedField.deserializeBinaryFromReader);
      msg.addFields(value);
      break;
    case 7:
      var value = new proto.protocol.core.v1.Action;
      reader.readMessage(value,proto.protocol.core.v1.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.Embed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Embed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Embed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Embed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColor();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protocol.core.v1.EmbedHeading.serializeBinaryToWriter
    );
  }
  f = message.getFooter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.protocol.core.v1.EmbedHeading.serializeBinaryToWriter
    );
  }
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.protocol.core.v1.EmbedField.serializeBinaryToWriter
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.protocol.core.v1.Action.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.protocol.core.v1.Embed.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Embed} returns this
 */
proto.protocol.core.v1.Embed.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string body = 2;
 * @return {string}
 */
proto.protocol.core.v1.Embed.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Embed} returns this
 */
proto.protocol.core.v1.Embed.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 color = 3;
 * @return {number}
 */
proto.protocol.core.v1.Embed.prototype.getColor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.core.v1.Embed} returns this
 */
proto.protocol.core.v1.Embed.prototype.setColor = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional EmbedHeading header = 4;
 * @return {?proto.protocol.core.v1.EmbedHeading}
 */
proto.protocol.core.v1.Embed.prototype.getHeader = function() {
  return /** @type{?proto.protocol.core.v1.EmbedHeading} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.EmbedHeading, 4));
};


/**
 * @param {?proto.protocol.core.v1.EmbedHeading|undefined} value
 * @return {!proto.protocol.core.v1.Embed} returns this
*/
proto.protocol.core.v1.Embed.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Embed} returns this
 */
proto.protocol.core.v1.Embed.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Embed.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional EmbedHeading footer = 5;
 * @return {?proto.protocol.core.v1.EmbedHeading}
 */
proto.protocol.core.v1.Embed.prototype.getFooter = function() {
  return /** @type{?proto.protocol.core.v1.EmbedHeading} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.EmbedHeading, 5));
};


/**
 * @param {?proto.protocol.core.v1.EmbedHeading|undefined} value
 * @return {!proto.protocol.core.v1.Embed} returns this
*/
proto.protocol.core.v1.Embed.prototype.setFooter = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Embed} returns this
 */
proto.protocol.core.v1.Embed.prototype.clearFooter = function() {
  return this.setFooter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Embed.prototype.hasFooter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated EmbedField fields = 6;
 * @return {!Array<!proto.protocol.core.v1.EmbedField>}
 */
proto.protocol.core.v1.Embed.prototype.getFieldsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.EmbedField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.EmbedField, 6));
};


/**
 * @param {!Array<!proto.protocol.core.v1.EmbedField>} value
 * @return {!proto.protocol.core.v1.Embed} returns this
*/
proto.protocol.core.v1.Embed.prototype.setFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.protocol.core.v1.EmbedField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.EmbedField}
 */
proto.protocol.core.v1.Embed.prototype.addFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.protocol.core.v1.EmbedField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.Embed} returns this
 */
proto.protocol.core.v1.Embed.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};


/**
 * repeated Action actions = 7;
 * @return {!Array<!proto.protocol.core.v1.Action>}
 */
proto.protocol.core.v1.Embed.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Action, 7));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Action>} value
 * @return {!proto.protocol.core.v1.Embed} returns this
*/
proto.protocol.core.v1.Embed.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.protocol.core.v1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Action}
 */
proto.protocol.core.v1.Embed.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.protocol.core.v1.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.Embed} returns this
 */
proto.protocol.core.v1.Embed.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.Message.repeatedFields_ = [6,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f),
    authorId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    editedAt: (f = msg.getEditedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 5, ""),
    embedsList: jspb.Message.toObjectList(msg.getEmbedsList(),
    proto.protocol.core.v1.Embed.toObject, includeInstance),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.protocol.core.v1.Action.toObject, includeInstance),
    attachmentsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.Message}
 */
proto.protocol.core.v1.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Message;
  return proto.protocol.core.v1.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Message}
 */
proto.protocol.core.v1.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAuthorId(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEditedAt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 6:
      var value = new proto.protocol.core.v1.Embed;
      reader.readMessage(value,proto.protocol.core.v1.Embed.deserializeBinaryFromReader);
      msg.addEmbeds(value);
      break;
    case 7:
      var value = new proto.protocol.core.v1.Action;
      reader.readMessage(value,proto.protocol.core.v1.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttachments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getAuthorId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEditedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEmbedsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.protocol.core.v1.Embed.serializeBinaryToWriter
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.protocol.core.v1.Action.serializeBinaryToWriter
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.Message.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.Message} returns this
*/
proto.protocol.core.v1.Message.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Message.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 author_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.Message.prototype.getAuthorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.setAuthorId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.protocol.core.v1.Message.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.protocol.core.v1.Message} returns this
*/
proto.protocol.core.v1.Message.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Message.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp edited_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.protocol.core.v1.Message.prototype.getEditedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.protocol.core.v1.Message} returns this
*/
proto.protocol.core.v1.Message.prototype.setEditedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.clearEditedAt = function() {
  return this.setEditedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Message.prototype.hasEditedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string content = 5;
 * @return {string}
 */
proto.protocol.core.v1.Message.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated Embed embeds = 6;
 * @return {!Array<!proto.protocol.core.v1.Embed>}
 */
proto.protocol.core.v1.Message.prototype.getEmbedsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Embed>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Embed, 6));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Embed>} value
 * @return {!proto.protocol.core.v1.Message} returns this
*/
proto.protocol.core.v1.Message.prototype.setEmbedsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.protocol.core.v1.Embed=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Embed}
 */
proto.protocol.core.v1.Message.prototype.addEmbeds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.protocol.core.v1.Embed, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.clearEmbedsList = function() {
  return this.setEmbedsList([]);
};


/**
 * repeated Action actions = 7;
 * @return {!Array<!proto.protocol.core.v1.Action>}
 */
proto.protocol.core.v1.Message.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Action, 7));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Action>} value
 * @return {!proto.protocol.core.v1.Message} returns this
*/
proto.protocol.core.v1.Message.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.protocol.core.v1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Action}
 */
proto.protocol.core.v1.Message.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.protocol.core.v1.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * repeated string attachments = 8;
 * @return {!Array<string>}
 */
proto.protocol.core.v1.Message.prototype.getAttachmentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.addAttachments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.CreateGuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.CreateGuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.CreateGuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateGuildRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pictureUrl: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.CreateGuildRequest}
 */
proto.protocol.core.v1.CreateGuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.CreateGuildRequest;
  return proto.protocol.core.v1.CreateGuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.CreateGuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.CreateGuildRequest}
 */
proto.protocol.core.v1.CreateGuildRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPictureUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.CreateGuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.CreateGuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.CreateGuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateGuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPictureUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string guild_name = 1;
 * @return {string}
 */
proto.protocol.core.v1.CreateGuildRequest.prototype.getGuildName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.CreateGuildRequest} returns this
 */
proto.protocol.core.v1.CreateGuildRequest.prototype.setGuildName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string picture_url = 2;
 * @return {string}
 */
proto.protocol.core.v1.CreateGuildRequest.prototype.getPictureUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.CreateGuildRequest} returns this
 */
proto.protocol.core.v1.CreateGuildRequest.prototype.setPictureUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.CreateGuildResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.CreateGuildResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.CreateGuildResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateGuildResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.CreateGuildResponse}
 */
proto.protocol.core.v1.CreateGuildResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.CreateGuildResponse;
  return proto.protocol.core.v1.CreateGuildResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.CreateGuildResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.CreateGuildResponse}
 */
proto.protocol.core.v1.CreateGuildResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setGuildId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.CreateGuildResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.CreateGuildResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.CreateGuildResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateGuildResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.CreateGuildResponse.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.CreateGuildResponse} returns this
 */
proto.protocol.core.v1.CreateGuildResponse.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.CreateInviteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.CreateInviteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.CreateInviteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateInviteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    possibleUses: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.CreateInviteRequest}
 */
proto.protocol.core.v1.CreateInviteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.CreateInviteRequest;
  return proto.protocol.core.v1.CreateInviteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.CreateInviteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.CreateInviteRequest}
 */
proto.protocol.core.v1.CreateInviteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPossibleUses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.CreateInviteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.CreateInviteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.CreateInviteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateInviteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPossibleUses();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.CreateInviteRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.CreateInviteRequest} returns this
*/
proto.protocol.core.v1.CreateInviteRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.CreateInviteRequest} returns this
 */
proto.protocol.core.v1.CreateInviteRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.CreateInviteRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.protocol.core.v1.CreateInviteRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.CreateInviteRequest} returns this
 */
proto.protocol.core.v1.CreateInviteRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 possible_uses = 3;
 * @return {number}
 */
proto.protocol.core.v1.CreateInviteRequest.prototype.getPossibleUses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.core.v1.CreateInviteRequest} returns this
 */
proto.protocol.core.v1.CreateInviteRequest.prototype.setPossibleUses = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.CreateInviteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.CreateInviteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.CreateInviteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateInviteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.CreateInviteResponse}
 */
proto.protocol.core.v1.CreateInviteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.CreateInviteResponse;
  return proto.protocol.core.v1.CreateInviteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.CreateInviteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.CreateInviteResponse}
 */
proto.protocol.core.v1.CreateInviteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.CreateInviteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.CreateInviteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.CreateInviteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateInviteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.protocol.core.v1.CreateInviteResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.CreateInviteResponse} returns this
 */
proto.protocol.core.v1.CreateInviteResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.CreateChannelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.CreateChannelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateChannelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f),
    channelName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.CreateChannelRequest}
 */
proto.protocol.core.v1.CreateChannelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.CreateChannelRequest;
  return proto.protocol.core.v1.CreateChannelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.CreateChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.CreateChannelRequest}
 */
proto.protocol.core.v1.CreateChannelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.CreateChannelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.CreateChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateChannelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getChannelName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.CreateChannelRequest} returns this
*/
proto.protocol.core.v1.CreateChannelRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.CreateChannelRequest} returns this
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string channel_name = 2;
 * @return {string}
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.getChannelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.CreateChannelRequest} returns this
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.setChannelName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.CreateChannelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.CreateChannelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.CreateChannelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateChannelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelId: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.CreateChannelResponse}
 */
proto.protocol.core.v1.CreateChannelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.CreateChannelResponse;
  return proto.protocol.core.v1.CreateChannelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.CreateChannelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.CreateChannelResponse}
 */
proto.protocol.core.v1.CreateChannelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setChannelId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.CreateChannelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.CreateChannelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.CreateChannelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateChannelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 channel_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.CreateChannelResponse.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.CreateChannelResponse} returns this
 */
proto.protocol.core.v1.CreateChannelResponse.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GetGuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GetGuildRequest}
 */
proto.protocol.core.v1.GetGuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildRequest;
  return proto.protocol.core.v1.GetGuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildRequest}
 */
proto.protocol.core.v1.GetGuildRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GetGuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.GetGuildRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.GetGuildRequest} returns this
*/
proto.protocol.core.v1.GetGuildRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GetGuildRequest} returns this
 */
proto.protocol.core.v1.GetGuildRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GetGuildRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GetGuildResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    guildOwner: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    guildPicture: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GetGuildResponse}
 */
proto.protocol.core.v1.GetGuildResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildResponse;
  return proto.protocol.core.v1.GetGuildResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildResponse}
 */
proto.protocol.core.v1.GetGuildResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setGuildOwner(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuildPicture(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GetGuildResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGuildOwner();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getGuildPicture();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string guild_name = 1;
 * @return {string}
 */
proto.protocol.core.v1.GetGuildResponse.prototype.getGuildName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetGuildResponse} returns this
 */
proto.protocol.core.v1.GetGuildResponse.prototype.setGuildName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 guild_owner = 2;
 * @return {string}
 */
proto.protocol.core.v1.GetGuildResponse.prototype.getGuildOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetGuildResponse} returns this
 */
proto.protocol.core.v1.GetGuildResponse.prototype.setGuildOwner = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string guild_picture = 3;
 * @return {string}
 */
proto.protocol.core.v1.GetGuildResponse.prototype.getGuildPicture = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetGuildResponse} returns this
 */
proto.protocol.core.v1.GetGuildResponse.prototype.setGuildPicture = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GetGuildInvitesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildInvitesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildInvitesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildInvitesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GetGuildInvitesRequest}
 */
proto.protocol.core.v1.GetGuildInvitesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildInvitesRequest;
  return proto.protocol.core.v1.GetGuildInvitesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildInvitesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildInvitesRequest}
 */
proto.protocol.core.v1.GetGuildInvitesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GetGuildInvitesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildInvitesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildInvitesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildInvitesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.GetGuildInvitesRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.GetGuildInvitesRequest} returns this
*/
proto.protocol.core.v1.GetGuildInvitesRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GetGuildInvitesRequest} returns this
 */
proto.protocol.core.v1.GetGuildInvitesRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GetGuildInvitesRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.GetGuildInvitesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GetGuildInvitesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildInvitesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildInvitesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildInvitesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invitesList: jspb.Message.toObjectList(msg.getInvitesList(),
    proto.protocol.core.v1.GetGuildInvitesResponse.Invite.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GetGuildInvitesResponse}
 */
proto.protocol.core.v1.GetGuildInvitesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildInvitesResponse;
  return proto.protocol.core.v1.GetGuildInvitesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildInvitesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildInvitesResponse}
 */
proto.protocol.core.v1.GetGuildInvitesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.GetGuildInvitesResponse.Invite;
      reader.readMessage(value,proto.protocol.core.v1.GetGuildInvitesResponse.Invite.deserializeBinaryFromReader);
      msg.addInvites(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GetGuildInvitesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildInvitesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildInvitesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildInvitesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvitesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.core.v1.GetGuildInvitesResponse.Invite.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GetGuildInvitesResponse.Invite.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildInvitesResponse.Invite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildInvitesResponse.Invite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildInvitesResponse.Invite.toObject = function(includeInstance, msg) {
  var f, obj = {
    inviteId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    possibleUses: jspb.Message.getFieldWithDefault(msg, 2, 0),
    useCount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GetGuildInvitesResponse.Invite}
 */
proto.protocol.core.v1.GetGuildInvitesResponse.Invite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildInvitesResponse.Invite;
  return proto.protocol.core.v1.GetGuildInvitesResponse.Invite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildInvitesResponse.Invite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildInvitesResponse.Invite}
 */
proto.protocol.core.v1.GetGuildInvitesResponse.Invite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInviteId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPossibleUses(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUseCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GetGuildInvitesResponse.Invite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildInvitesResponse.Invite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildInvitesResponse.Invite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildInvitesResponse.Invite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInviteId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPossibleUses();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUseCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string invite_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.GetGuildInvitesResponse.Invite.prototype.getInviteId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetGuildInvitesResponse.Invite} returns this
 */
proto.protocol.core.v1.GetGuildInvitesResponse.Invite.prototype.setInviteId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 possible_uses = 2;
 * @return {number}
 */
proto.protocol.core.v1.GetGuildInvitesResponse.Invite.prototype.getPossibleUses = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.core.v1.GetGuildInvitesResponse.Invite} returns this
 */
proto.protocol.core.v1.GetGuildInvitesResponse.Invite.prototype.setPossibleUses = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 use_count = 3;
 * @return {number}
 */
proto.protocol.core.v1.GetGuildInvitesResponse.Invite.prototype.getUseCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.core.v1.GetGuildInvitesResponse.Invite} returns this
 */
proto.protocol.core.v1.GetGuildInvitesResponse.Invite.prototype.setUseCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated Invite invites = 1;
 * @return {!Array<!proto.protocol.core.v1.GetGuildInvitesResponse.Invite>}
 */
proto.protocol.core.v1.GetGuildInvitesResponse.prototype.getInvitesList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.GetGuildInvitesResponse.Invite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.GetGuildInvitesResponse.Invite, 1));
};


/**
 * @param {!Array<!proto.protocol.core.v1.GetGuildInvitesResponse.Invite>} value
 * @return {!proto.protocol.core.v1.GetGuildInvitesResponse} returns this
*/
proto.protocol.core.v1.GetGuildInvitesResponse.prototype.setInvitesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.core.v1.GetGuildInvitesResponse.Invite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.GetGuildInvitesResponse.Invite}
 */
proto.protocol.core.v1.GetGuildInvitesResponse.prototype.addInvites = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.core.v1.GetGuildInvitesResponse.Invite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.GetGuildInvitesResponse} returns this
 */
proto.protocol.core.v1.GetGuildInvitesResponse.prototype.clearInvitesList = function() {
  return this.setInvitesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GetGuildMembersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildMembersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildMembersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildMembersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GetGuildMembersRequest}
 */
proto.protocol.core.v1.GetGuildMembersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildMembersRequest;
  return proto.protocol.core.v1.GetGuildMembersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildMembersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildMembersRequest}
 */
proto.protocol.core.v1.GetGuildMembersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GetGuildMembersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildMembersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildMembersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildMembersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.GetGuildMembersRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.GetGuildMembersRequest} returns this
*/
proto.protocol.core.v1.GetGuildMembersRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GetGuildMembersRequest} returns this
 */
proto.protocol.core.v1.GetGuildMembersRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GetGuildMembersRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.GetGuildMembersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GetGuildMembersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildMembersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildMembersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildMembersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    membersList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GetGuildMembersResponse}
 */
proto.protocol.core.v1.GetGuildMembersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildMembersResponse;
  return proto.protocol.core.v1.GetGuildMembersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildMembersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildMembersResponse}
 */
proto.protocol.core.v1.GetGuildMembersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<string>} */ (reader.readPackedUint64String());
      msg.setMembersList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GetGuildMembersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildMembersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildMembersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildMembersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writePackedUint64String(
      1,
      f
    );
  }
};


/**
 * repeated uint64 members = 1;
 * @return {!Array<string>}
 */
proto.protocol.core.v1.GetGuildMembersResponse.prototype.getMembersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protocol.core.v1.GetGuildMembersResponse} returns this
 */
proto.protocol.core.v1.GetGuildMembersResponse.prototype.setMembersList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.GetGuildMembersResponse} returns this
 */
proto.protocol.core.v1.GetGuildMembersResponse.prototype.addMembers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.GetGuildMembersResponse} returns this
 */
proto.protocol.core.v1.GetGuildMembersResponse.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GetGuildChannelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildChannelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildChannelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildChannelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GetGuildChannelsRequest}
 */
proto.protocol.core.v1.GetGuildChannelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildChannelsRequest;
  return proto.protocol.core.v1.GetGuildChannelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildChannelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildChannelsRequest}
 */
proto.protocol.core.v1.GetGuildChannelsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GetGuildChannelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildChannelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildChannelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildChannelsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.GetGuildChannelsRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.GetGuildChannelsRequest} returns this
*/
proto.protocol.core.v1.GetGuildChannelsRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GetGuildChannelsRequest} returns this
 */
proto.protocol.core.v1.GetGuildChannelsRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GetGuildChannelsRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.GetGuildChannelsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildChannelsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildChannelsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildChannelsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelsList: jspb.Message.toObjectList(msg.getChannelsList(),
    proto.protocol.core.v1.GetGuildChannelsResponse.Channel.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GetGuildChannelsResponse}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildChannelsResponse;
  return proto.protocol.core.v1.GetGuildChannelsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildChannelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildChannelsResponse}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.GetGuildChannelsResponse.Channel;
      reader.readMessage(value,proto.protocol.core.v1.GetGuildChannelsResponse.Channel.deserializeBinaryFromReader);
      msg.addChannels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildChannelsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildChannelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildChannelsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.core.v1.GetGuildChannelsResponse.Channel.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildChannelsResponse.Channel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildChannelsResponse.Channel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GetGuildChannelsResponse.Channel}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildChannelsResponse.Channel;
  return proto.protocol.core.v1.GetGuildChannelsResponse.Channel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildChannelsResponse.Channel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildChannelsResponse.Channel}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setChannelId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildChannelsResponse.Channel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildChannelsResponse.Channel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getChannelName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 channel_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetGuildChannelsResponse.Channel} returns this
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string channel_name = 2;
 * @return {string}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.prototype.getChannelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetGuildChannelsResponse.Channel} returns this
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.prototype.setChannelName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Channel channels = 1;
 * @return {!Array<!proto.protocol.core.v1.GetGuildChannelsResponse.Channel>}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.prototype.getChannelsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.GetGuildChannelsResponse.Channel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.GetGuildChannelsResponse.Channel, 1));
};


/**
 * @param {!Array<!proto.protocol.core.v1.GetGuildChannelsResponse.Channel>} value
 * @return {!proto.protocol.core.v1.GetGuildChannelsResponse} returns this
*/
proto.protocol.core.v1.GetGuildChannelsResponse.prototype.setChannelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.core.v1.GetGuildChannelsResponse.Channel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.GetGuildChannelsResponse.Channel}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.prototype.addChannels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.core.v1.GetGuildChannelsResponse.Channel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.GetGuildChannelsResponse} returns this
 */
proto.protocol.core.v1.GetGuildChannelsResponse.prototype.clearChannelsList = function() {
  return this.setChannelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GetChannelMessagesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetChannelMessagesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetChannelMessagesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetChannelMessagesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f),
    beforeMessage: jspb.Message.getFieldWithDefault(msg, 3, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GetChannelMessagesRequest}
 */
proto.protocol.core.v1.GetChannelMessagesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetChannelMessagesRequest;
  return proto.protocol.core.v1.GetChannelMessagesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetChannelMessagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetChannelMessagesRequest}
 */
proto.protocol.core.v1.GetChannelMessagesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setBeforeMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GetChannelMessagesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetChannelMessagesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetChannelMessagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetChannelMessagesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getBeforeMessage();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.GetChannelMessagesRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.GetChannelMessagesRequest} returns this
*/
proto.protocol.core.v1.GetChannelMessagesRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GetChannelMessagesRequest} returns this
 */
proto.protocol.core.v1.GetChannelMessagesRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GetChannelMessagesRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 before_message = 3;
 * @return {string}
 */
proto.protocol.core.v1.GetChannelMessagesRequest.prototype.getBeforeMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetChannelMessagesRequest} returns this
 */
proto.protocol.core.v1.GetChannelMessagesRequest.prototype.setBeforeMessage = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.GetChannelMessagesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GetChannelMessagesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetChannelMessagesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetChannelMessagesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetChannelMessagesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.protocol.core.v1.Message.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GetChannelMessagesResponse}
 */
proto.protocol.core.v1.GetChannelMessagesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetChannelMessagesResponse;
  return proto.protocol.core.v1.GetChannelMessagesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetChannelMessagesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetChannelMessagesResponse}
 */
proto.protocol.core.v1.GetChannelMessagesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Message;
      reader.readMessage(value,proto.protocol.core.v1.Message.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GetChannelMessagesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetChannelMessagesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetChannelMessagesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetChannelMessagesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.core.v1.Message.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Message messages = 1;
 * @return {!Array<!proto.protocol.core.v1.Message>}
 */
proto.protocol.core.v1.GetChannelMessagesResponse.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Message, 1));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Message>} value
 * @return {!proto.protocol.core.v1.GetChannelMessagesResponse} returns this
*/
proto.protocol.core.v1.GetChannelMessagesResponse.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.core.v1.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Message}
 */
proto.protocol.core.v1.GetChannelMessagesResponse.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.core.v1.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.GetChannelMessagesResponse} returns this
 */
proto.protocol.core.v1.GetChannelMessagesResponse.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.UpdateGuildNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.UpdateGuildNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.UpdateGuildNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.UpdateGuildNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f),
    newGuildName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.UpdateGuildNameRequest}
 */
proto.protocol.core.v1.UpdateGuildNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.UpdateGuildNameRequest;
  return proto.protocol.core.v1.UpdateGuildNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.UpdateGuildNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.UpdateGuildNameRequest}
 */
proto.protocol.core.v1.UpdateGuildNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewGuildName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.UpdateGuildNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.UpdateGuildNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.UpdateGuildNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.UpdateGuildNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getNewGuildName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.UpdateGuildNameRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.UpdateGuildNameRequest} returns this
*/
proto.protocol.core.v1.UpdateGuildNameRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.UpdateGuildNameRequest} returns this
 */
proto.protocol.core.v1.UpdateGuildNameRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.UpdateGuildNameRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string new_guild_name = 2;
 * @return {string}
 */
proto.protocol.core.v1.UpdateGuildNameRequest.prototype.getNewGuildName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateGuildNameRequest} returns this
 */
proto.protocol.core.v1.UpdateGuildNameRequest.prototype.setNewGuildName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.UpdateChannelNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.UpdateChannelNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.UpdateChannelNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f),
    newChannelName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.UpdateChannelNameRequest}
 */
proto.protocol.core.v1.UpdateChannelNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.UpdateChannelNameRequest;
  return proto.protocol.core.v1.UpdateChannelNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.UpdateChannelNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.UpdateChannelNameRequest}
 */
proto.protocol.core.v1.UpdateChannelNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewChannelName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.UpdateChannelNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.UpdateChannelNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.UpdateChannelNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getNewChannelName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.UpdateChannelNameRequest} returns this
*/
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.UpdateChannelNameRequest} returns this
 */
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string new_channel_name = 2;
 * @return {string}
 */
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.getNewChannelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateChannelNameRequest} returns this
 */
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.setNewChannelName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.UpdateMessageRequest.repeatedFields_ = [4,6,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.UpdateMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.UpdateMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.UpdateMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 2, ""),
    updateContent: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    embedsList: jspb.Message.toObjectList(msg.getEmbedsList(),
    proto.protocol.core.v1.Embed.toObject, includeInstance),
    updateEmbeds: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.protocol.core.v1.Action.toObject, includeInstance),
    updateActions: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    attachmentsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    updateAttachments: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.UpdateMessageRequest}
 */
proto.protocol.core.v1.UpdateMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.UpdateMessageRequest;
  return proto.protocol.core.v1.UpdateMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.UpdateMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.UpdateMessageRequest}
 */
proto.protocol.core.v1.UpdateMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateContent(value);
      break;
    case 4:
      var value = new proto.protocol.core.v1.Embed;
      reader.readMessage(value,proto.protocol.core.v1.Embed.deserializeBinaryFromReader);
      msg.addEmbeds(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateEmbeds(value);
      break;
    case 6:
      var value = new proto.protocol.core.v1.Action;
      reader.readMessage(value,proto.protocol.core.v1.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateActions(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttachments(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateAttachments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.UpdateMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.UpdateMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.UpdateMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUpdateContent();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getEmbedsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.protocol.core.v1.Embed.serializeBinaryToWriter
    );
  }
  f = message.getUpdateEmbeds();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.protocol.core.v1.Action.serializeBinaryToWriter
    );
  }
  f = message.getUpdateActions();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getUpdateAttachments();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
*/
proto.protocol.core.v1.UpdateMessageRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool update_content = 3;
 * @return {boolean}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getUpdateContent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setUpdateContent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated Embed embeds = 4;
 * @return {!Array<!proto.protocol.core.v1.Embed>}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getEmbedsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Embed>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Embed, 4));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Embed>} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
*/
proto.protocol.core.v1.UpdateMessageRequest.prototype.setEmbedsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.protocol.core.v1.Embed=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Embed}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.addEmbeds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.protocol.core.v1.Embed, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.clearEmbedsList = function() {
  return this.setEmbedsList([]);
};


/**
 * optional bool update_embeds = 5;
 * @return {boolean}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getUpdateEmbeds = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setUpdateEmbeds = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated Action actions = 6;
 * @return {!Array<!proto.protocol.core.v1.Action>}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Action, 6));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Action>} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
*/
proto.protocol.core.v1.UpdateMessageRequest.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.protocol.core.v1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Action}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.protocol.core.v1.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * optional bool update_actions = 7;
 * @return {boolean}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getUpdateActions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setUpdateActions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated string attachments = 8;
 * @return {!Array<string>}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getAttachmentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.addAttachments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * optional bool update_attachments = 9;
 * @return {boolean}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getUpdateAttachments = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setUpdateAttachments = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.DeleteGuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.DeleteGuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.DeleteGuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteGuildRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.DeleteGuildRequest}
 */
proto.protocol.core.v1.DeleteGuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.DeleteGuildRequest;
  return proto.protocol.core.v1.DeleteGuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.DeleteGuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.DeleteGuildRequest}
 */
proto.protocol.core.v1.DeleteGuildRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.DeleteGuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.DeleteGuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.DeleteGuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteGuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.DeleteGuildRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.DeleteGuildRequest} returns this
*/
proto.protocol.core.v1.DeleteGuildRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.DeleteGuildRequest} returns this
 */
proto.protocol.core.v1.DeleteGuildRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.DeleteGuildRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.DeleteInviteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.DeleteInviteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.DeleteInviteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteInviteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f),
    inviteId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.DeleteInviteRequest}
 */
proto.protocol.core.v1.DeleteInviteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.DeleteInviteRequest;
  return proto.protocol.core.v1.DeleteInviteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.DeleteInviteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.DeleteInviteRequest}
 */
proto.protocol.core.v1.DeleteInviteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInviteId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.DeleteInviteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.DeleteInviteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.DeleteInviteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteInviteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getInviteId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.DeleteInviteRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.DeleteInviteRequest} returns this
*/
proto.protocol.core.v1.DeleteInviteRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.DeleteInviteRequest} returns this
 */
proto.protocol.core.v1.DeleteInviteRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.DeleteInviteRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string invite_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.DeleteInviteRequest.prototype.getInviteId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.DeleteInviteRequest} returns this
 */
proto.protocol.core.v1.DeleteInviteRequest.prototype.setInviteId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.DeleteChannelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.DeleteChannelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.DeleteChannelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteChannelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.DeleteChannelRequest}
 */
proto.protocol.core.v1.DeleteChannelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.DeleteChannelRequest;
  return proto.protocol.core.v1.DeleteChannelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.DeleteChannelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.DeleteChannelRequest}
 */
proto.protocol.core.v1.DeleteChannelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.DeleteChannelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.DeleteChannelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.DeleteChannelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteChannelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.DeleteChannelRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.DeleteChannelRequest} returns this
*/
proto.protocol.core.v1.DeleteChannelRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.DeleteChannelRequest} returns this
 */
proto.protocol.core.v1.DeleteChannelRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.DeleteChannelRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.DeleteMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.DeleteMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.DeleteMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.DeleteMessageRequest}
 */
proto.protocol.core.v1.DeleteMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.DeleteMessageRequest;
  return proto.protocol.core.v1.DeleteMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.DeleteMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.DeleteMessageRequest}
 */
proto.protocol.core.v1.DeleteMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.DeleteMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.DeleteMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.DeleteMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.DeleteMessageRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.DeleteMessageRequest} returns this
*/
proto.protocol.core.v1.DeleteMessageRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.DeleteMessageRequest} returns this
 */
proto.protocol.core.v1.DeleteMessageRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.DeleteMessageRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.StreamGuildEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.StreamGuildEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.StreamGuildEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.StreamGuildEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.StreamGuildEventsRequest}
 */
proto.protocol.core.v1.StreamGuildEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.StreamGuildEventsRequest;
  return proto.protocol.core.v1.StreamGuildEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.StreamGuildEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.StreamGuildEventsRequest}
 */
proto.protocol.core.v1.StreamGuildEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.StreamGuildEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.StreamGuildEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.StreamGuildEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.StreamGuildEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.StreamGuildEventsRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.StreamGuildEventsRequest} returns this
*/
proto.protocol.core.v1.StreamGuildEventsRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.StreamGuildEventsRequest} returns this
 */
proto.protocol.core.v1.StreamGuildEventsRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.StreamGuildEventsRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protocol.core.v1.GuildEvent.oneofGroups_ = [[1,2,3,4,5,6,7,8,9]];

/**
 * @enum {number}
 */
proto.protocol.core.v1.GuildEvent.EventCase = {
  EVENT_NOT_SET: 0,
  SENT_MESSAGE: 1,
  EDITED_MESSAGE: 2,
  DELETED_MESSAGE: 3,
  EDITED_CHANNEL: 4,
  DELETED_CHANNEL: 5,
  EDITED_GUILD: 6,
  DELETED_GUILD: 7,
  JOINED_MEMBER: 8,
  LEFT_MEMBER: 9
};

/**
 * @return {proto.protocol.core.v1.GuildEvent.EventCase}
 */
proto.protocol.core.v1.GuildEvent.prototype.getEventCase = function() {
  return /** @type {proto.protocol.core.v1.GuildEvent.EventCase} */(jspb.Message.computeOneofCase(this, proto.protocol.core.v1.GuildEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GuildEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GuildEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GuildEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    sentMessage: (f = msg.getSentMessage()) && proto.protocol.core.v1.GuildEvent.MessageSent.toObject(includeInstance, f),
    editedMessage: (f = msg.getEditedMessage()) && proto.protocol.core.v1.GuildEvent.MessageUpdated.toObject(includeInstance, f),
    deletedMessage: (f = msg.getDeletedMessage()) && proto.protocol.core.v1.GuildEvent.MessageDeleted.toObject(includeInstance, f),
    editedChannel: (f = msg.getEditedChannel()) && proto.protocol.core.v1.GuildEvent.ChannelUpdated.toObject(includeInstance, f),
    deletedChannel: (f = msg.getDeletedChannel()) && proto.protocol.core.v1.GuildEvent.ChannelDeleted.toObject(includeInstance, f),
    editedGuild: (f = msg.getEditedGuild()) && proto.protocol.core.v1.GuildEvent.GuildUpdated.toObject(includeInstance, f),
    deletedGuild: (f = msg.getDeletedGuild()) && proto.protocol.core.v1.GuildEvent.GuildDeleted.toObject(includeInstance, f),
    joinedMember: (f = msg.getJoinedMember()) && proto.protocol.core.v1.GuildEvent.MemberJoined.toObject(includeInstance, f),
    leftMember: (f = msg.getLeftMember()) && proto.protocol.core.v1.GuildEvent.MemberLeft.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GuildEvent}
 */
proto.protocol.core.v1.GuildEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GuildEvent;
  return proto.protocol.core.v1.GuildEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GuildEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GuildEvent}
 */
proto.protocol.core.v1.GuildEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.GuildEvent.MessageSent;
      reader.readMessage(value,proto.protocol.core.v1.GuildEvent.MessageSent.deserializeBinaryFromReader);
      msg.setSentMessage(value);
      break;
    case 2:
      var value = new proto.protocol.core.v1.GuildEvent.MessageUpdated;
      reader.readMessage(value,proto.protocol.core.v1.GuildEvent.MessageUpdated.deserializeBinaryFromReader);
      msg.setEditedMessage(value);
      break;
    case 3:
      var value = new proto.protocol.core.v1.GuildEvent.MessageDeleted;
      reader.readMessage(value,proto.protocol.core.v1.GuildEvent.MessageDeleted.deserializeBinaryFromReader);
      msg.setDeletedMessage(value);
      break;
    case 4:
      var value = new proto.protocol.core.v1.GuildEvent.ChannelUpdated;
      reader.readMessage(value,proto.protocol.core.v1.GuildEvent.ChannelUpdated.deserializeBinaryFromReader);
      msg.setEditedChannel(value);
      break;
    case 5:
      var value = new proto.protocol.core.v1.GuildEvent.ChannelDeleted;
      reader.readMessage(value,proto.protocol.core.v1.GuildEvent.ChannelDeleted.deserializeBinaryFromReader);
      msg.setDeletedChannel(value);
      break;
    case 6:
      var value = new proto.protocol.core.v1.GuildEvent.GuildUpdated;
      reader.readMessage(value,proto.protocol.core.v1.GuildEvent.GuildUpdated.deserializeBinaryFromReader);
      msg.setEditedGuild(value);
      break;
    case 7:
      var value = new proto.protocol.core.v1.GuildEvent.GuildDeleted;
      reader.readMessage(value,proto.protocol.core.v1.GuildEvent.GuildDeleted.deserializeBinaryFromReader);
      msg.setDeletedGuild(value);
      break;
    case 8:
      var value = new proto.protocol.core.v1.GuildEvent.MemberJoined;
      reader.readMessage(value,proto.protocol.core.v1.GuildEvent.MemberJoined.deserializeBinaryFromReader);
      msg.setJoinedMember(value);
      break;
    case 9:
      var value = new proto.protocol.core.v1.GuildEvent.MemberLeft;
      reader.readMessage(value,proto.protocol.core.v1.GuildEvent.MemberLeft.deserializeBinaryFromReader);
      msg.setLeftMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GuildEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GuildEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GuildEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSentMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.GuildEvent.MessageSent.serializeBinaryToWriter
    );
  }
  f = message.getEditedMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protocol.core.v1.GuildEvent.MessageUpdated.serializeBinaryToWriter
    );
  }
  f = message.getDeletedMessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protocol.core.v1.GuildEvent.MessageDeleted.serializeBinaryToWriter
    );
  }
  f = message.getEditedChannel();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protocol.core.v1.GuildEvent.ChannelUpdated.serializeBinaryToWriter
    );
  }
  f = message.getDeletedChannel();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.protocol.core.v1.GuildEvent.ChannelDeleted.serializeBinaryToWriter
    );
  }
  f = message.getEditedGuild();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.protocol.core.v1.GuildEvent.GuildUpdated.serializeBinaryToWriter
    );
  }
  f = message.getDeletedGuild();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.protocol.core.v1.GuildEvent.GuildDeleted.serializeBinaryToWriter
    );
  }
  f = message.getJoinedMember();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.protocol.core.v1.GuildEvent.MemberJoined.serializeBinaryToWriter
    );
  }
  f = message.getLeftMember();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.protocol.core.v1.GuildEvent.MemberLeft.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GuildEvent.MessageSent.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GuildEvent.MessageSent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GuildEvent.MessageSent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.MessageSent.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && proto.protocol.core.v1.Message.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GuildEvent.MessageSent}
 */
proto.protocol.core.v1.GuildEvent.MessageSent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GuildEvent.MessageSent;
  return proto.protocol.core.v1.GuildEvent.MessageSent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GuildEvent.MessageSent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GuildEvent.MessageSent}
 */
proto.protocol.core.v1.GuildEvent.MessageSent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Message;
      reader.readMessage(value,proto.protocol.core.v1.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GuildEvent.MessageSent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GuildEvent.MessageSent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GuildEvent.MessageSent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.MessageSent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Message.serializeBinaryToWriter
    );
  }
};


/**
 * optional Message message = 1;
 * @return {?proto.protocol.core.v1.Message}
 */
proto.protocol.core.v1.GuildEvent.MessageSent.prototype.getMessage = function() {
  return /** @type{?proto.protocol.core.v1.Message} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Message, 1));
};


/**
 * @param {?proto.protocol.core.v1.Message|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent.MessageSent} returns this
*/
proto.protocol.core.v1.GuildEvent.MessageSent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent.MessageSent} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageSent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.MessageSent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.repeatedFields_ = [5,7,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GuildEvent.MessageUpdated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GuildEvent.MessageUpdated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f),
    editedAt: (f = msg.getEditedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    updateContent: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    embedsList: jspb.Message.toObjectList(msg.getEmbedsList(),
    proto.protocol.core.v1.Embed.toObject, includeInstance),
    updateEmbeds: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.protocol.core.v1.Action.toObject, includeInstance),
    updateActions: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    attachmentsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    updateAttachments: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GuildEvent.MessageUpdated;
  return proto.protocol.core.v1.GuildEvent.MessageUpdated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GuildEvent.MessageUpdated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEditedAt(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateContent(value);
      break;
    case 5:
      var value = new proto.protocol.core.v1.Embed;
      reader.readMessage(value,proto.protocol.core.v1.Embed.deserializeBinaryFromReader);
      msg.addEmbeds(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateEmbeds(value);
      break;
    case 7:
      var value = new proto.protocol.core.v1.Action;
      reader.readMessage(value,proto.protocol.core.v1.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateActions(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttachments(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateAttachments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GuildEvent.MessageUpdated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GuildEvent.MessageUpdated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getEditedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUpdateContent();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getEmbedsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.protocol.core.v1.Embed.serializeBinaryToWriter
    );
  }
  f = message.getUpdateEmbeds();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.protocol.core.v1.Action.serializeBinaryToWriter
    );
  }
  f = message.getUpdateActions();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getUpdateAttachments();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
*/
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp edited_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.getEditedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
*/
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.setEditedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.clearEditedAt = function() {
  return this.setEditedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.hasEditedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool update_content = 4;
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.getUpdateContent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.setUpdateContent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated Embed embeds = 5;
 * @return {!Array<!proto.protocol.core.v1.Embed>}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.getEmbedsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Embed>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Embed, 5));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Embed>} value
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
*/
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.setEmbedsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.protocol.core.v1.Embed=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Embed}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.addEmbeds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.protocol.core.v1.Embed, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.clearEmbedsList = function() {
  return this.setEmbedsList([]);
};


/**
 * optional bool update_embeds = 6;
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.getUpdateEmbeds = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.setUpdateEmbeds = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * repeated Action actions = 7;
 * @return {!Array<!proto.protocol.core.v1.Action>}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Action, 7));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Action>} value
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
*/
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.protocol.core.v1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Action}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.protocol.core.v1.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * optional bool update_actions = 8;
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.getUpdateActions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.setUpdateActions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * repeated string attachments = 9;
 * @return {!Array<string>}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.getAttachmentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.addAttachments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * optional bool update_attachments = 10;
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.getUpdateAttachments = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.GuildEvent.MessageUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageUpdated.prototype.setUpdateAttachments = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GuildEvent.MessageDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GuildEvent.MessageDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GuildEvent.MessageDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.MessageDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GuildEvent.MessageDeleted}
 */
proto.protocol.core.v1.GuildEvent.MessageDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GuildEvent.MessageDeleted;
  return proto.protocol.core.v1.GuildEvent.MessageDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GuildEvent.MessageDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GuildEvent.MessageDeleted}
 */
proto.protocol.core.v1.GuildEvent.MessageDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GuildEvent.MessageDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GuildEvent.MessageDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GuildEvent.MessageDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.MessageDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.GuildEvent.MessageDeleted.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent.MessageDeleted} returns this
*/
proto.protocol.core.v1.GuildEvent.MessageDeleted.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent.MessageDeleted} returns this
 */
proto.protocol.core.v1.GuildEvent.MessageDeleted.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.MessageDeleted.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GuildEvent.ChannelUpdated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GuildEvent.ChannelUpdated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    updateName: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GuildEvent.ChannelUpdated}
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GuildEvent.ChannelUpdated;
  return proto.protocol.core.v1.GuildEvent.ChannelUpdated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GuildEvent.ChannelUpdated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GuildEvent.ChannelUpdated}
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GuildEvent.ChannelUpdated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GuildEvent.ChannelUpdated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUpdateName();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent.ChannelUpdated} returns this
*/
proto.protocol.core.v1.GuildEvent.ChannelUpdated.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent.ChannelUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GuildEvent.ChannelUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool update_name = 3;
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated.prototype.getUpdateName = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.GuildEvent.ChannelUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.ChannelUpdated.prototype.setUpdateName = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GuildEvent.ChannelDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GuildEvent.ChannelDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GuildEvent.ChannelDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.ChannelDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GuildEvent.ChannelDeleted}
 */
proto.protocol.core.v1.GuildEvent.ChannelDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GuildEvent.ChannelDeleted;
  return proto.protocol.core.v1.GuildEvent.ChannelDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GuildEvent.ChannelDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GuildEvent.ChannelDeleted}
 */
proto.protocol.core.v1.GuildEvent.ChannelDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GuildEvent.ChannelDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GuildEvent.ChannelDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GuildEvent.ChannelDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.ChannelDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.GuildEvent.ChannelDeleted.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent.ChannelDeleted} returns this
*/
proto.protocol.core.v1.GuildEvent.ChannelDeleted.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent.ChannelDeleted} returns this
 */
proto.protocol.core.v1.GuildEvent.ChannelDeleted.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.ChannelDeleted.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GuildEvent.GuildUpdated.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GuildEvent.GuildUpdated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GuildEvent.GuildUpdated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.GuildUpdated.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updateName: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GuildEvent.GuildUpdated}
 */
proto.protocol.core.v1.GuildEvent.GuildUpdated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GuildEvent.GuildUpdated;
  return proto.protocol.core.v1.GuildEvent.GuildUpdated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GuildEvent.GuildUpdated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GuildEvent.GuildUpdated}
 */
proto.protocol.core.v1.GuildEvent.GuildUpdated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GuildEvent.GuildUpdated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GuildEvent.GuildUpdated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GuildEvent.GuildUpdated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.GuildUpdated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdateName();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.protocol.core.v1.GuildEvent.GuildUpdated.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GuildEvent.GuildUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.GuildUpdated.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool update_name = 2;
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.GuildUpdated.prototype.getUpdateName = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.GuildEvent.GuildUpdated} returns this
 */
proto.protocol.core.v1.GuildEvent.GuildUpdated.prototype.setUpdateName = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GuildEvent.GuildDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GuildEvent.GuildDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GuildEvent.GuildDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.GuildDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GuildEvent.GuildDeleted}
 */
proto.protocol.core.v1.GuildEvent.GuildDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GuildEvent.GuildDeleted;
  return proto.protocol.core.v1.GuildEvent.GuildDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GuildEvent.GuildDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GuildEvent.GuildDeleted}
 */
proto.protocol.core.v1.GuildEvent.GuildDeleted.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GuildEvent.GuildDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GuildEvent.GuildDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GuildEvent.GuildDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.GuildDeleted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GuildEvent.MemberJoined.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GuildEvent.MemberJoined.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GuildEvent.MemberJoined} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.MemberJoined.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberId: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GuildEvent.MemberJoined}
 */
proto.protocol.core.v1.GuildEvent.MemberJoined.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GuildEvent.MemberJoined;
  return proto.protocol.core.v1.GuildEvent.MemberJoined.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GuildEvent.MemberJoined} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GuildEvent.MemberJoined}
 */
proto.protocol.core.v1.GuildEvent.MemberJoined.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setMemberId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GuildEvent.MemberJoined.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GuildEvent.MemberJoined.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GuildEvent.MemberJoined} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.MemberJoined.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 member_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.GuildEvent.MemberJoined.prototype.getMemberId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GuildEvent.MemberJoined} returns this
 */
proto.protocol.core.v1.GuildEvent.MemberJoined.prototype.setMemberId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.GuildEvent.MemberLeft.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GuildEvent.MemberLeft.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GuildEvent.MemberLeft} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.MemberLeft.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberId: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.GuildEvent.MemberLeft}
 */
proto.protocol.core.v1.GuildEvent.MemberLeft.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GuildEvent.MemberLeft;
  return proto.protocol.core.v1.GuildEvent.MemberLeft.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GuildEvent.MemberLeft} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GuildEvent.MemberLeft}
 */
proto.protocol.core.v1.GuildEvent.MemberLeft.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setMemberId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.GuildEvent.MemberLeft.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GuildEvent.MemberLeft.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GuildEvent.MemberLeft} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GuildEvent.MemberLeft.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 member_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.GuildEvent.MemberLeft.prototype.getMemberId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GuildEvent.MemberLeft} returns this
 */
proto.protocol.core.v1.GuildEvent.MemberLeft.prototype.setMemberId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional MessageSent sent_message = 1;
 * @return {?proto.protocol.core.v1.GuildEvent.MessageSent}
 */
proto.protocol.core.v1.GuildEvent.prototype.getSentMessage = function() {
  return /** @type{?proto.protocol.core.v1.GuildEvent.MessageSent} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.GuildEvent.MessageSent, 1));
};


/**
 * @param {?proto.protocol.core.v1.GuildEvent.MessageSent|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
*/
proto.protocol.core.v1.GuildEvent.prototype.setSentMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.protocol.core.v1.GuildEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
 */
proto.protocol.core.v1.GuildEvent.prototype.clearSentMessage = function() {
  return this.setSentMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.prototype.hasSentMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MessageUpdated edited_message = 2;
 * @return {?proto.protocol.core.v1.GuildEvent.MessageUpdated}
 */
proto.protocol.core.v1.GuildEvent.prototype.getEditedMessage = function() {
  return /** @type{?proto.protocol.core.v1.GuildEvent.MessageUpdated} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.GuildEvent.MessageUpdated, 2));
};


/**
 * @param {?proto.protocol.core.v1.GuildEvent.MessageUpdated|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
*/
proto.protocol.core.v1.GuildEvent.prototype.setEditedMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.protocol.core.v1.GuildEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
 */
proto.protocol.core.v1.GuildEvent.prototype.clearEditedMessage = function() {
  return this.setEditedMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.prototype.hasEditedMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessageDeleted deleted_message = 3;
 * @return {?proto.protocol.core.v1.GuildEvent.MessageDeleted}
 */
proto.protocol.core.v1.GuildEvent.prototype.getDeletedMessage = function() {
  return /** @type{?proto.protocol.core.v1.GuildEvent.MessageDeleted} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.GuildEvent.MessageDeleted, 3));
};


/**
 * @param {?proto.protocol.core.v1.GuildEvent.MessageDeleted|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
*/
proto.protocol.core.v1.GuildEvent.prototype.setDeletedMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.protocol.core.v1.GuildEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
 */
proto.protocol.core.v1.GuildEvent.prototype.clearDeletedMessage = function() {
  return this.setDeletedMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.prototype.hasDeletedMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ChannelUpdated edited_channel = 4;
 * @return {?proto.protocol.core.v1.GuildEvent.ChannelUpdated}
 */
proto.protocol.core.v1.GuildEvent.prototype.getEditedChannel = function() {
  return /** @type{?proto.protocol.core.v1.GuildEvent.ChannelUpdated} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.GuildEvent.ChannelUpdated, 4));
};


/**
 * @param {?proto.protocol.core.v1.GuildEvent.ChannelUpdated|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
*/
proto.protocol.core.v1.GuildEvent.prototype.setEditedChannel = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.protocol.core.v1.GuildEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
 */
proto.protocol.core.v1.GuildEvent.prototype.clearEditedChannel = function() {
  return this.setEditedChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.prototype.hasEditedChannel = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ChannelDeleted deleted_channel = 5;
 * @return {?proto.protocol.core.v1.GuildEvent.ChannelDeleted}
 */
proto.protocol.core.v1.GuildEvent.prototype.getDeletedChannel = function() {
  return /** @type{?proto.protocol.core.v1.GuildEvent.ChannelDeleted} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.GuildEvent.ChannelDeleted, 5));
};


/**
 * @param {?proto.protocol.core.v1.GuildEvent.ChannelDeleted|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
*/
proto.protocol.core.v1.GuildEvent.prototype.setDeletedChannel = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.protocol.core.v1.GuildEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
 */
proto.protocol.core.v1.GuildEvent.prototype.clearDeletedChannel = function() {
  return this.setDeletedChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.prototype.hasDeletedChannel = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional GuildUpdated edited_guild = 6;
 * @return {?proto.protocol.core.v1.GuildEvent.GuildUpdated}
 */
proto.protocol.core.v1.GuildEvent.prototype.getEditedGuild = function() {
  return /** @type{?proto.protocol.core.v1.GuildEvent.GuildUpdated} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.GuildEvent.GuildUpdated, 6));
};


/**
 * @param {?proto.protocol.core.v1.GuildEvent.GuildUpdated|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
*/
proto.protocol.core.v1.GuildEvent.prototype.setEditedGuild = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.protocol.core.v1.GuildEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
 */
proto.protocol.core.v1.GuildEvent.prototype.clearEditedGuild = function() {
  return this.setEditedGuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.prototype.hasEditedGuild = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional GuildDeleted deleted_guild = 7;
 * @return {?proto.protocol.core.v1.GuildEvent.GuildDeleted}
 */
proto.protocol.core.v1.GuildEvent.prototype.getDeletedGuild = function() {
  return /** @type{?proto.protocol.core.v1.GuildEvent.GuildDeleted} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.GuildEvent.GuildDeleted, 7));
};


/**
 * @param {?proto.protocol.core.v1.GuildEvent.GuildDeleted|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
*/
proto.protocol.core.v1.GuildEvent.prototype.setDeletedGuild = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.protocol.core.v1.GuildEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
 */
proto.protocol.core.v1.GuildEvent.prototype.clearDeletedGuild = function() {
  return this.setDeletedGuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.prototype.hasDeletedGuild = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional MemberJoined joined_member = 8;
 * @return {?proto.protocol.core.v1.GuildEvent.MemberJoined}
 */
proto.protocol.core.v1.GuildEvent.prototype.getJoinedMember = function() {
  return /** @type{?proto.protocol.core.v1.GuildEvent.MemberJoined} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.GuildEvent.MemberJoined, 8));
};


/**
 * @param {?proto.protocol.core.v1.GuildEvent.MemberJoined|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
*/
proto.protocol.core.v1.GuildEvent.prototype.setJoinedMember = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.protocol.core.v1.GuildEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
 */
proto.protocol.core.v1.GuildEvent.prototype.clearJoinedMember = function() {
  return this.setJoinedMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.prototype.hasJoinedMember = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional MemberLeft left_member = 9;
 * @return {?proto.protocol.core.v1.GuildEvent.MemberLeft}
 */
proto.protocol.core.v1.GuildEvent.prototype.getLeftMember = function() {
  return /** @type{?proto.protocol.core.v1.GuildEvent.MemberLeft} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.GuildEvent.MemberLeft, 9));
};


/**
 * @param {?proto.protocol.core.v1.GuildEvent.MemberLeft|undefined} value
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
*/
proto.protocol.core.v1.GuildEvent.prototype.setLeftMember = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.protocol.core.v1.GuildEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GuildEvent} returns this
 */
proto.protocol.core.v1.GuildEvent.prototype.clearLeftMember = function() {
  return this.setLeftMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GuildEvent.prototype.hasLeftMember = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.StreamActionEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.StreamActionEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.StreamActionEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.StreamActionEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.StreamActionEventsRequest}
 */
proto.protocol.core.v1.StreamActionEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.StreamActionEventsRequest;
  return proto.protocol.core.v1.StreamActionEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.StreamActionEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.StreamActionEventsRequest}
 */
proto.protocol.core.v1.StreamActionEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.StreamActionEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.StreamActionEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.StreamActionEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.StreamActionEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protocol.core.v1.ActionEvent.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.protocol.core.v1.ActionEvent.EventCase = {
  EVENT_NOT_SET: 0,
  ACTION: 1
};

/**
 * @return {proto.protocol.core.v1.ActionEvent.EventCase}
 */
proto.protocol.core.v1.ActionEvent.prototype.getEventCase = function() {
  return /** @type {proto.protocol.core.v1.ActionEvent.EventCase} */(jspb.Message.computeOneofCase(this, proto.protocol.core.v1.ActionEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.ActionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.ActionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.ActionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.ActionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: (f = msg.getAction()) && proto.protocol.core.v1.ActionEvent.Action.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.ActionEvent}
 */
proto.protocol.core.v1.ActionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.ActionEvent;
  return proto.protocol.core.v1.ActionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.ActionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.ActionEvent}
 */
proto.protocol.core.v1.ActionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.ActionEvent.Action;
      reader.readMessage(value,proto.protocol.core.v1.ActionEvent.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.ActionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.ActionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.ActionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.ActionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.ActionEvent.Action.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.ActionEvent.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.ActionEvent.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.ActionEvent.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.ActionEvent.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f),
    actionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    actionData: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.ActionEvent.Action}
 */
proto.protocol.core.v1.ActionEvent.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.ActionEvent.Action;
  return proto.protocol.core.v1.ActionEvent.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.ActionEvent.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.ActionEvent.Action}
 */
proto.protocol.core.v1.ActionEvent.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.ActionEvent.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.ActionEvent.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.ActionEvent.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.ActionEvent.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getActionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActionData();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.ActionEvent.Action.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.ActionEvent.Action} returns this
*/
proto.protocol.core.v1.ActionEvent.Action.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.ActionEvent.Action} returns this
 */
proto.protocol.core.v1.ActionEvent.Action.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.ActionEvent.Action.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string action_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.ActionEvent.Action.prototype.getActionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.ActionEvent.Action} returns this
 */
proto.protocol.core.v1.ActionEvent.Action.prototype.setActionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string action_data = 3;
 * @return {string}
 */
proto.protocol.core.v1.ActionEvent.Action.prototype.getActionData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.ActionEvent.Action} returns this
 */
proto.protocol.core.v1.ActionEvent.Action.prototype.setActionData = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Action action = 1;
 * @return {?proto.protocol.core.v1.ActionEvent.Action}
 */
proto.protocol.core.v1.ActionEvent.prototype.getAction = function() {
  return /** @type{?proto.protocol.core.v1.ActionEvent.Action} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.ActionEvent.Action, 1));
};


/**
 * @param {?proto.protocol.core.v1.ActionEvent.Action|undefined} value
 * @return {!proto.protocol.core.v1.ActionEvent} returns this
*/
proto.protocol.core.v1.ActionEvent.prototype.setAction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.protocol.core.v1.ActionEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.ActionEvent} returns this
 */
proto.protocol.core.v1.ActionEvent.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.ActionEvent.prototype.hasAction = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.JoinGuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.JoinGuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.JoinGuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.JoinGuildRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    inviteId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.JoinGuildRequest}
 */
proto.protocol.core.v1.JoinGuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.JoinGuildRequest;
  return proto.protocol.core.v1.JoinGuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.JoinGuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.JoinGuildRequest}
 */
proto.protocol.core.v1.JoinGuildRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInviteId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.JoinGuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.JoinGuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.JoinGuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.JoinGuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInviteId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string invite_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.JoinGuildRequest.prototype.getInviteId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.JoinGuildRequest} returns this
 */
proto.protocol.core.v1.JoinGuildRequest.prototype.setInviteId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.JoinGuildResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.JoinGuildResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.JoinGuildResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.JoinGuildResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.JoinGuildResponse}
 */
proto.protocol.core.v1.JoinGuildResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.JoinGuildResponse;
  return proto.protocol.core.v1.JoinGuildResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.JoinGuildResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.JoinGuildResponse}
 */
proto.protocol.core.v1.JoinGuildResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.JoinGuildResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.JoinGuildResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.JoinGuildResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.JoinGuildResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.JoinGuildResponse.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.JoinGuildResponse} returns this
*/
proto.protocol.core.v1.JoinGuildResponse.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.JoinGuildResponse} returns this
 */
proto.protocol.core.v1.JoinGuildResponse.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.JoinGuildResponse.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.LeaveGuildRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.LeaveGuildRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.LeaveGuildRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.LeaveGuildRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.LeaveGuildRequest}
 */
proto.protocol.core.v1.LeaveGuildRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.LeaveGuildRequest;
  return proto.protocol.core.v1.LeaveGuildRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.LeaveGuildRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.LeaveGuildRequest}
 */
proto.protocol.core.v1.LeaveGuildRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.LeaveGuildRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.LeaveGuildRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.LeaveGuildRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.LeaveGuildRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.LeaveGuildRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.LeaveGuildRequest} returns this
*/
proto.protocol.core.v1.LeaveGuildRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.LeaveGuildRequest} returns this
 */
proto.protocol.core.v1.LeaveGuildRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.LeaveGuildRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.JoinedLocalGuildsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.JoinedLocalGuildsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.JoinedLocalGuildsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.JoinedLocalGuildsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.JoinedLocalGuildsRequest}
 */
proto.protocol.core.v1.JoinedLocalGuildsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.JoinedLocalGuildsRequest;
  return proto.protocol.core.v1.JoinedLocalGuildsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.JoinedLocalGuildsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.JoinedLocalGuildsRequest}
 */
proto.protocol.core.v1.JoinedLocalGuildsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.JoinedLocalGuildsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.JoinedLocalGuildsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.JoinedLocalGuildsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.JoinedLocalGuildsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.JoinedLocalGuildsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.JoinedLocalGuildsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.JoinedLocalGuildsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.JoinedLocalGuildsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.JoinedLocalGuildsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildIdList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.JoinedLocalGuildsResponse}
 */
proto.protocol.core.v1.JoinedLocalGuildsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.JoinedLocalGuildsResponse;
  return proto.protocol.core.v1.JoinedLocalGuildsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.JoinedLocalGuildsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.JoinedLocalGuildsResponse}
 */
proto.protocol.core.v1.JoinedLocalGuildsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setGuildIdList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.JoinedLocalGuildsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.JoinedLocalGuildsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.JoinedLocalGuildsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.JoinedLocalGuildsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildIdList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
};


/**
 * repeated uint64 guild_id = 1;
 * @return {!Array<number>}
 */
proto.protocol.core.v1.JoinedLocalGuildsResponse.prototype.getGuildIdList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protocol.core.v1.JoinedLocalGuildsResponse} returns this
 */
proto.protocol.core.v1.JoinedLocalGuildsResponse.prototype.setGuildIdList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.JoinedLocalGuildsResponse} returns this
 */
proto.protocol.core.v1.JoinedLocalGuildsResponse.prototype.addGuildId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.JoinedLocalGuildsResponse} returns this
 */
proto.protocol.core.v1.JoinedLocalGuildsResponse.prototype.clearGuildIdList = function() {
  return this.setGuildIdList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.TriggerActionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.TriggerActionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.TriggerActionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.protocol.core.v1.Location.toObject(includeInstance, f),
    actionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    actionData: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.TriggerActionRequest}
 */
proto.protocol.core.v1.TriggerActionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.TriggerActionRequest;
  return proto.protocol.core.v1.TriggerActionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.TriggerActionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.TriggerActionRequest}
 */
proto.protocol.core.v1.TriggerActionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Location;
      reader.readMessage(value,proto.protocol.core.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.TriggerActionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.TriggerActionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.TriggerActionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Location.serializeBinaryToWriter
    );
  }
  f = message.getActionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActionData();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.protocol.core.v1.Location}
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.getLocation = function() {
  return /** @type{?proto.protocol.core.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Location, 1));
};


/**
 * @param {?proto.protocol.core.v1.Location|undefined} value
 * @return {!proto.protocol.core.v1.TriggerActionRequest} returns this
*/
proto.protocol.core.v1.TriggerActionRequest.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.TriggerActionRequest} returns this
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string action_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.getActionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.TriggerActionRequest} returns this
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.setActionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string action_data = 3;
 * @return {string}
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.getActionData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.TriggerActionRequest} returns this
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.setActionData = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.SendMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.SendMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.SendMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && proto.protocol.core.v1.Message.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.core.v1.SendMessageRequest}
 */
proto.protocol.core.v1.SendMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.SendMessageRequest;
  return proto.protocol.core.v1.SendMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.SendMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.SendMessageRequest}
 */
proto.protocol.core.v1.SendMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Message;
      reader.readMessage(value,proto.protocol.core.v1.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.SendMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.SendMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.SendMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Message.serializeBinaryToWriter
    );
  }
};


/**
 * optional Message message = 1;
 * @return {?proto.protocol.core.v1.Message}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.getMessage = function() {
  return /** @type{?proto.protocol.core.v1.Message} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Message, 1));
};


/**
 * @param {?proto.protocol.core.v1.Message|undefined} value
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
*/
proto.protocol.core.v1.SendMessageRequest.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
 */
proto.protocol.core.v1.SendMessageRequest.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.protocol.core.v1.ActionType = {
  NORMAL: 0,
  PRIMARY: 1,
  DESTRUCTIVE: 2
};

/**
 * @enum {number}
 */
proto.protocol.core.v1.ActionPresentation = {
  BUTTON: 0,
  DROPDOWN: 1,
  MENU: 2,
  SMALLENTRY: 3,
  LARGEENTR: 4
};

/**
 * @enum {number}
 */
proto.protocol.core.v1.FieldPresentation = {
  DATA: 0,
  CAPTIONEDIMAGE: 1,
  ROW: 2
};

goog.object.extend(exports, proto.protocol.core.v1);
