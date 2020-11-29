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
goog.exportSymbol('proto.protocol.core.v1.ActionPresentation', null, global);
goog.exportSymbol('proto.protocol.core.v1.ActionType', null, global);
goog.exportSymbol('proto.protocol.core.v1.AddEmoteToPackRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.AddGuildRoleRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.AddGuildRoleResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.AddGuildToGuildListRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.AddGuildToGuildListResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateChannelRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateChannelResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateEmotePackRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateEmotePackResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateGuildRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateGuildResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateInviteRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.CreateInviteResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.DeleteChannelRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.DeleteEmoteFromPackRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.DeleteEmotePackRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.DeleteGuildRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.DeleteGuildRoleRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.DeleteInviteRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.DeleteMessageRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.DequipEmotePackRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.Embed', null, global);
goog.exportSymbol('proto.protocol.core.v1.EmbedField', null, global);
goog.exportSymbol('proto.protocol.core.v1.EmbedHeading', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.ActionPerformed', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.ChannelCreated', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.ChannelDeleted', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.ChannelUpdated', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.EventCase', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.GuildAddedToList', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.GuildDeleted', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.GuildRemovedFromList', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.GuildUpdated', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.MemberJoined', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.MemberLeft', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.MessageDeleted', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.MessageSent', null, global);
goog.exportSymbol('proto.protocol.core.v1.Event.MessageUpdated', null, global);
goog.exportSymbol('proto.protocol.core.v1.FieldPresentation', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetChannelMessagesRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetChannelMessagesResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetEmotePackEmotesRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetEmotePackEmotesResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetEmotePacksRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetEmotePacksResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetEmotePacksResponse.EmotePack', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildChannelsRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildChannelsResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildChannelsResponse.Channel', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildInvitesRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildInvitesResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildInvitesResponse.Invite', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildListRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildListResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildListResponse.GuildListEntry', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildMembersRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildMembersResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildRolesRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetGuildRolesResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetMessageRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetMessageResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetPermissionsRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetPermissionsResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetUserRolesRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.GetUserRolesResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.JoinGuildRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.JoinGuildResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.LeaveGuildRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.ManageUserRolesRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.Message', null, global);
goog.exportSymbol('proto.protocol.core.v1.Override', null, global);
goog.exportSymbol('proto.protocol.core.v1.Override.ReasonCase', null, global);
goog.exportSymbol('proto.protocol.core.v1.Permission', null, global);
goog.exportSymbol('proto.protocol.core.v1.Permission.Mode', null, global);
goog.exportSymbol('proto.protocol.core.v1.PermissionList', null, global);
goog.exportSymbol('proto.protocol.core.v1.QueryPermissionsRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.QueryPermissionsResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.RemoveGuildFromGuildListRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.RemoveGuildFromGuildListResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.Role', null, global);
goog.exportSymbol('proto.protocol.core.v1.SendMessageRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.SendMessageResponse', null, global);
goog.exportSymbol('proto.protocol.core.v1.SetPermissionsRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.StreamEventsRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.StreamEventsRequest.RequestCase', null, global);
goog.exportSymbol('proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions', null, global);
goog.exportSymbol('proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild', null, global);
goog.exportSymbol('proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents', null, global);
goog.exportSymbol('proto.protocol.core.v1.TriggerActionRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.UpdateChannelNameRequest', null, global);
goog.exportSymbol('proto.protocol.core.v1.UpdateChannelOrderRequest', null, global);
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
proto.protocol.core.v1.Override = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.protocol.core.v1.Override.oneofGroups_);
};
goog.inherits(proto.protocol.core.v1.Override, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Override.displayName = 'proto.protocol.core.v1.Override';
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
proto.protocol.core.v1.CreateEmotePackRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.CreateEmotePackRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.CreateEmotePackRequest.displayName = 'proto.protocol.core.v1.CreateEmotePackRequest';
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
proto.protocol.core.v1.CreateEmotePackResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.CreateEmotePackResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.CreateEmotePackResponse.displayName = 'proto.protocol.core.v1.CreateEmotePackResponse';
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
proto.protocol.core.v1.GetGuildListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildListRequest.displayName = 'proto.protocol.core.v1.GetGuildListRequest';
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
proto.protocol.core.v1.GetGuildListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.GetGuildListResponse.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildListResponse.displayName = 'proto.protocol.core.v1.GetGuildListResponse';
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
proto.protocol.core.v1.GetGuildListResponse.GuildListEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildListResponse.GuildListEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.displayName = 'proto.protocol.core.v1.GetGuildListResponse.GuildListEntry';
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
proto.protocol.core.v1.GetMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetMessageRequest.displayName = 'proto.protocol.core.v1.GetMessageRequest';
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
proto.protocol.core.v1.GetMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetMessageResponse.displayName = 'proto.protocol.core.v1.GetMessageResponse';
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
proto.protocol.core.v1.GetEmotePacksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetEmotePacksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetEmotePacksRequest.displayName = 'proto.protocol.core.v1.GetEmotePacksRequest';
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
proto.protocol.core.v1.GetEmotePacksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.GetEmotePacksResponse.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.GetEmotePacksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetEmotePacksResponse.displayName = 'proto.protocol.core.v1.GetEmotePacksResponse';
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
proto.protocol.core.v1.GetEmotePacksResponse.EmotePack = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetEmotePacksResponse.EmotePack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.displayName = 'proto.protocol.core.v1.GetEmotePacksResponse.EmotePack';
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
proto.protocol.core.v1.GetEmotePackEmotesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetEmotePackEmotesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetEmotePackEmotesRequest.displayName = 'proto.protocol.core.v1.GetEmotePackEmotesRequest';
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
proto.protocol.core.v1.GetEmotePackEmotesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.GetEmotePackEmotesResponse.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.GetEmotePackEmotesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetEmotePackEmotesResponse.displayName = 'proto.protocol.core.v1.GetEmotePackEmotesResponse';
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
proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.displayName = 'proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote';
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
proto.protocol.core.v1.UpdateChannelOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.UpdateChannelOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.UpdateChannelOrderRequest.displayName = 'proto.protocol.core.v1.UpdateChannelOrderRequest';
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
proto.protocol.core.v1.AddEmoteToPackRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.AddEmoteToPackRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.AddEmoteToPackRequest.displayName = 'proto.protocol.core.v1.AddEmoteToPackRequest';
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
proto.protocol.core.v1.DeleteEmoteFromPackRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.DeleteEmoteFromPackRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.DeleteEmoteFromPackRequest.displayName = 'proto.protocol.core.v1.DeleteEmoteFromPackRequest';
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
proto.protocol.core.v1.DeleteEmotePackRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.DeleteEmotePackRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.DeleteEmotePackRequest.displayName = 'proto.protocol.core.v1.DeleteEmotePackRequest';
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
proto.protocol.core.v1.DequipEmotePackRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.DequipEmotePackRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.DequipEmotePackRequest.displayName = 'proto.protocol.core.v1.DequipEmotePackRequest';
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
proto.protocol.core.v1.StreamEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.protocol.core.v1.StreamEventsRequest.oneofGroups_);
};
goog.inherits(proto.protocol.core.v1.StreamEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.StreamEventsRequest.displayName = 'proto.protocol.core.v1.StreamEventsRequest';
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
proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.displayName = 'proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild';
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
proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions.displayName = 'proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions';
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
proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents.displayName = 'proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents';
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
proto.protocol.core.v1.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.protocol.core.v1.Event.oneofGroups_);
};
goog.inherits(proto.protocol.core.v1.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.displayName = 'proto.protocol.core.v1.Event';
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
proto.protocol.core.v1.Event.MessageSent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Event.MessageSent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.MessageSent.displayName = 'proto.protocol.core.v1.Event.MessageSent';
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
proto.protocol.core.v1.Event.MessageUpdated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.Event.MessageUpdated.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.Event.MessageUpdated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.MessageUpdated.displayName = 'proto.protocol.core.v1.Event.MessageUpdated';
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
proto.protocol.core.v1.Event.MessageDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Event.MessageDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.MessageDeleted.displayName = 'proto.protocol.core.v1.Event.MessageDeleted';
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
proto.protocol.core.v1.Event.ChannelCreated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Event.ChannelCreated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.ChannelCreated.displayName = 'proto.protocol.core.v1.Event.ChannelCreated';
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
proto.protocol.core.v1.Event.ChannelUpdated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Event.ChannelUpdated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.ChannelUpdated.displayName = 'proto.protocol.core.v1.Event.ChannelUpdated';
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
proto.protocol.core.v1.Event.ChannelDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Event.ChannelDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.ChannelDeleted.displayName = 'proto.protocol.core.v1.Event.ChannelDeleted';
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
proto.protocol.core.v1.Event.GuildUpdated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Event.GuildUpdated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.GuildUpdated.displayName = 'proto.protocol.core.v1.Event.GuildUpdated';
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
proto.protocol.core.v1.Event.GuildDeleted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Event.GuildDeleted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.GuildDeleted.displayName = 'proto.protocol.core.v1.Event.GuildDeleted';
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
proto.protocol.core.v1.Event.MemberJoined = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Event.MemberJoined, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.MemberJoined.displayName = 'proto.protocol.core.v1.Event.MemberJoined';
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
proto.protocol.core.v1.Event.MemberLeft = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Event.MemberLeft, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.MemberLeft.displayName = 'proto.protocol.core.v1.Event.MemberLeft';
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
proto.protocol.core.v1.Event.GuildAddedToList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Event.GuildAddedToList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.GuildAddedToList.displayName = 'proto.protocol.core.v1.Event.GuildAddedToList';
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
proto.protocol.core.v1.Event.GuildRemovedFromList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Event.GuildRemovedFromList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.GuildRemovedFromList.displayName = 'proto.protocol.core.v1.Event.GuildRemovedFromList';
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
proto.protocol.core.v1.Event.ActionPerformed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Event.ActionPerformed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Event.ActionPerformed.displayName = 'proto.protocol.core.v1.Event.ActionPerformed';
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
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.SendMessageRequest.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.SendMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.SendMessageRequest.displayName = 'proto.protocol.core.v1.SendMessageRequest';
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
proto.protocol.core.v1.SendMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.SendMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.SendMessageResponse.displayName = 'proto.protocol.core.v1.SendMessageResponse';
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
proto.protocol.core.v1.AddGuildToGuildListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.AddGuildToGuildListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.AddGuildToGuildListRequest.displayName = 'proto.protocol.core.v1.AddGuildToGuildListRequest';
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
proto.protocol.core.v1.AddGuildToGuildListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.AddGuildToGuildListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.AddGuildToGuildListResponse.displayName = 'proto.protocol.core.v1.AddGuildToGuildListResponse';
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
proto.protocol.core.v1.RemoveGuildFromGuildListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.RemoveGuildFromGuildListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.RemoveGuildFromGuildListRequest.displayName = 'proto.protocol.core.v1.RemoveGuildFromGuildListRequest';
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
proto.protocol.core.v1.RemoveGuildFromGuildListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.RemoveGuildFromGuildListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.RemoveGuildFromGuildListResponse.displayName = 'proto.protocol.core.v1.RemoveGuildFromGuildListResponse';
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
proto.protocol.core.v1.QueryPermissionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.QueryPermissionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.QueryPermissionsRequest.displayName = 'proto.protocol.core.v1.QueryPermissionsRequest';
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
proto.protocol.core.v1.QueryPermissionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.QueryPermissionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.QueryPermissionsResponse.displayName = 'proto.protocol.core.v1.QueryPermissionsResponse';
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
proto.protocol.core.v1.Permission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Permission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Permission.displayName = 'proto.protocol.core.v1.Permission';
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
proto.protocol.core.v1.PermissionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.PermissionList.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.PermissionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.PermissionList.displayName = 'proto.protocol.core.v1.PermissionList';
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
proto.protocol.core.v1.SetPermissionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.SetPermissionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.SetPermissionsRequest.displayName = 'proto.protocol.core.v1.SetPermissionsRequest';
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
proto.protocol.core.v1.GetPermissionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetPermissionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetPermissionsRequest.displayName = 'proto.protocol.core.v1.GetPermissionsRequest';
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
proto.protocol.core.v1.GetPermissionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetPermissionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetPermissionsResponse.displayName = 'proto.protocol.core.v1.GetPermissionsResponse';
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
proto.protocol.core.v1.Role = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.Role, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.Role.displayName = 'proto.protocol.core.v1.Role';
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
proto.protocol.core.v1.GetGuildRolesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildRolesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildRolesRequest.displayName = 'proto.protocol.core.v1.GetGuildRolesRequest';
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
proto.protocol.core.v1.GetGuildRolesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.GetGuildRolesResponse.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.GetGuildRolesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetGuildRolesResponse.displayName = 'proto.protocol.core.v1.GetGuildRolesResponse';
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
proto.protocol.core.v1.AddGuildRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.AddGuildRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.AddGuildRoleRequest.displayName = 'proto.protocol.core.v1.AddGuildRoleRequest';
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
proto.protocol.core.v1.AddGuildRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.AddGuildRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.AddGuildRoleResponse.displayName = 'proto.protocol.core.v1.AddGuildRoleResponse';
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
proto.protocol.core.v1.DeleteGuildRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.DeleteGuildRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.DeleteGuildRoleRequest.displayName = 'proto.protocol.core.v1.DeleteGuildRoleRequest';
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
proto.protocol.core.v1.ManageUserRolesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.ManageUserRolesRequest.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.ManageUserRolesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.ManageUserRolesRequest.displayName = 'proto.protocol.core.v1.ManageUserRolesRequest';
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
proto.protocol.core.v1.GetUserRolesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.core.v1.GetUserRolesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetUserRolesRequest.displayName = 'proto.protocol.core.v1.GetUserRolesRequest';
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
proto.protocol.core.v1.GetUserRolesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.core.v1.GetUserRolesResponse.repeatedFields_, null);
};
goog.inherits(proto.protocol.core.v1.GetUserRolesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.core.v1.GetUserRolesResponse.displayName = 'proto.protocol.core.v1.GetUserRolesResponse';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protocol.core.v1.Override.oneofGroups_ = [[3,4,5,6,7]];

/**
 * @enum {number}
 */
proto.protocol.core.v1.Override.ReasonCase = {
  REASON_NOT_SET: 0,
  USER_DEFINED: 3,
  WEBHOOK: 4,
  SYSTEM_PLURALITY: 5,
  SYSTEM_MESSAGE: 6,
  BRIDGE: 7
};

/**
 * @return {proto.protocol.core.v1.Override.ReasonCase}
 */
proto.protocol.core.v1.Override.prototype.getReasonCase = function() {
  return /** @type {proto.protocol.core.v1.Override.ReasonCase} */(jspb.Message.computeOneofCase(this, proto.protocol.core.v1.Override.oneofGroups_[0]));
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
proto.protocol.core.v1.Override.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Override.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Override} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Override.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userDefined: jspb.Message.getFieldWithDefault(msg, 3, ""),
    webhook: (f = msg.getWebhook()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f),
    systemPlurality: (f = msg.getSystemPlurality()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f),
    systemMessage: (f = msg.getSystemMessage()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f),
    bridge: (f = msg.getBridge()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f)
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
 * @return {!proto.protocol.core.v1.Override}
 */
proto.protocol.core.v1.Override.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Override;
  return proto.protocol.core.v1.Override.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Override} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Override}
 */
proto.protocol.core.v1.Override.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserDefined(value);
      break;
    case 4:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setWebhook(value);
      break;
    case 5:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setSystemPlurality(value);
      break;
    case 6:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setSystemMessage(value);
      break;
    case 7:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setBridge(value);
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
proto.protocol.core.v1.Override.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Override.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Override} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Override.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWebhook();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
  f = message.getSystemPlurality();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
  f = message.getSystemMessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
  f = message.getBridge();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.protocol.core.v1.Override.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Override} returns this
 */
proto.protocol.core.v1.Override.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avatar = 2;
 * @return {string}
 */
proto.protocol.core.v1.Override.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Override} returns this
 */
proto.protocol.core.v1.Override.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user_defined = 3;
 * @return {string}
 */
proto.protocol.core.v1.Override.prototype.getUserDefined = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Override} returns this
 */
proto.protocol.core.v1.Override.prototype.setUserDefined = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.protocol.core.v1.Override.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.core.v1.Override} returns this
 */
proto.protocol.core.v1.Override.prototype.clearUserDefined = function() {
  return jspb.Message.setOneofField(this, 3, proto.protocol.core.v1.Override.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Override.prototype.hasUserDefined = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Empty webhook = 4;
 * @return {?proto.google.protobuf.Empty}
 */
proto.protocol.core.v1.Override.prototype.getWebhook = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 4));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.protocol.core.v1.Override} returns this
*/
proto.protocol.core.v1.Override.prototype.setWebhook = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.protocol.core.v1.Override.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Override} returns this
 */
proto.protocol.core.v1.Override.prototype.clearWebhook = function() {
  return this.setWebhook(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Override.prototype.hasWebhook = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Empty system_plurality = 5;
 * @return {?proto.google.protobuf.Empty}
 */
proto.protocol.core.v1.Override.prototype.getSystemPlurality = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 5));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.protocol.core.v1.Override} returns this
*/
proto.protocol.core.v1.Override.prototype.setSystemPlurality = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.protocol.core.v1.Override.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Override} returns this
 */
proto.protocol.core.v1.Override.prototype.clearSystemPlurality = function() {
  return this.setSystemPlurality(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Override.prototype.hasSystemPlurality = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Empty system_message = 6;
 * @return {?proto.google.protobuf.Empty}
 */
proto.protocol.core.v1.Override.prototype.getSystemMessage = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 6));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.protocol.core.v1.Override} returns this
*/
proto.protocol.core.v1.Override.prototype.setSystemMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.protocol.core.v1.Override.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Override} returns this
 */
proto.protocol.core.v1.Override.prototype.clearSystemMessage = function() {
  return this.setSystemMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Override.prototype.hasSystemMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Empty bridge = 7;
 * @return {?proto.google.protobuf.Empty}
 */
proto.protocol.core.v1.Override.prototype.getBridge = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 7));
};


/**
 * @param {?proto.google.protobuf.Empty|undefined} value
 * @return {!proto.protocol.core.v1.Override} returns this
*/
proto.protocol.core.v1.Override.prototype.setBridge = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.protocol.core.v1.Override.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Override} returns this
 */
proto.protocol.core.v1.Override.prototype.clearBridge = function() {
  return this.setBridge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Override.prototype.hasBridge = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.Action.repeatedFields_ = [6];



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
    presentation: jspb.Message.getFieldWithDefault(msg, 5, 0),
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
      var value = /** @type {!proto.protocol.core.v1.ActionPresentation} */ (reader.readEnum());
      msg.setPresentation(value);
      break;
    case 6:
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
  f = message.getPresentation();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
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
 * optional ActionPresentation presentation = 5;
 * @return {!proto.protocol.core.v1.ActionPresentation}
 */
proto.protocol.core.v1.Action.prototype.getPresentation = function() {
  return /** @type {!proto.protocol.core.v1.ActionPresentation} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.protocol.core.v1.ActionPresentation} value
 * @return {!proto.protocol.core.v1.Action} returns this
 */
proto.protocol.core.v1.Action.prototype.setPresentation = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated Action children = 6;
 * @return {!Array<!proto.protocol.core.v1.Action>}
 */
proto.protocol.core.v1.Action.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Action, 6));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Action>} value
 * @return {!proto.protocol.core.v1.Action} returns this
*/
proto.protocol.core.v1.Action.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.protocol.core.v1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Action}
 */
proto.protocol.core.v1.Action.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.protocol.core.v1.Action, opt_index);
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
proto.protocol.core.v1.Message.repeatedFields_ = [8,9,10];



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
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    messageId: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    authorId: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    editedAt: (f = msg.getEditedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 7, ""),
    embedsList: jspb.Message.toObjectList(msg.getEmbedsList(),
    proto.protocol.core.v1.Embed.toObject, includeInstance),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.protocol.core.v1.Action.toObject, includeInstance),
    attachmentsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    inReplyTo: jspb.Message.getFieldWithDefault(msg, 11, "0"),
    overrides: (f = msg.getOverrides()) && proto.protocol.core.v1.Override.toObject(includeInstance, f)
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
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setAuthorId(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEditedAt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 8:
      var value = new proto.protocol.core.v1.Embed;
      reader.readMessage(value,proto.protocol.core.v1.Embed.deserializeBinaryFromReader);
      msg.addEmbeds(value);
      break;
    case 9:
      var value = new proto.protocol.core.v1.Action;
      reader.readMessage(value,proto.protocol.core.v1.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttachments(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setInReplyTo(value);
      break;
    case 12:
      var value = new proto.protocol.core.v1.Override;
      reader.readMessage(value,proto.protocol.core.v1.Override.deserializeBinaryFromReader);
      msg.setOverrides(value);
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
  f = message.getAuthorId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEditedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEmbedsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.protocol.core.v1.Embed.serializeBinaryToWriter
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.protocol.core.v1.Action.serializeBinaryToWriter
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getInReplyTo();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      11,
      f
    );
  }
  f = message.getOverrides();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.protocol.core.v1.Override.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.Message.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.Message.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 message_id = 3;
 * @return {string}
 */
proto.protocol.core.v1.Message.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional uint64 author_id = 4;
 * @return {string}
 */
proto.protocol.core.v1.Message.prototype.getAuthorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.setAuthorId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.protocol.core.v1.Message.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.protocol.core.v1.Message} returns this
*/
proto.protocol.core.v1.Message.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
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
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp edited_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.protocol.core.v1.Message.prototype.getEditedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.protocol.core.v1.Message} returns this
*/
proto.protocol.core.v1.Message.prototype.setEditedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
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
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string content = 7;
 * @return {string}
 */
proto.protocol.core.v1.Message.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated Embed embeds = 8;
 * @return {!Array<!proto.protocol.core.v1.Embed>}
 */
proto.protocol.core.v1.Message.prototype.getEmbedsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Embed>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Embed, 8));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Embed>} value
 * @return {!proto.protocol.core.v1.Message} returns this
*/
proto.protocol.core.v1.Message.prototype.setEmbedsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.protocol.core.v1.Embed=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Embed}
 */
proto.protocol.core.v1.Message.prototype.addEmbeds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.protocol.core.v1.Embed, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.clearEmbedsList = function() {
  return this.setEmbedsList([]);
};


/**
 * repeated Action actions = 9;
 * @return {!Array<!proto.protocol.core.v1.Action>}
 */
proto.protocol.core.v1.Message.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Action, 9));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Action>} value
 * @return {!proto.protocol.core.v1.Message} returns this
*/
proto.protocol.core.v1.Message.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.protocol.core.v1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Action}
 */
proto.protocol.core.v1.Message.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.protocol.core.v1.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * repeated string attachments = 10;
 * @return {!Array<string>}
 */
proto.protocol.core.v1.Message.prototype.getAttachmentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.addAttachments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * optional uint64 in_reply_to = 11;
 * @return {string}
 */
proto.protocol.core.v1.Message.prototype.getInReplyTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.setInReplyTo = function(value) {
  return jspb.Message.setProto3StringIntField(this, 11, value);
};


/**
 * optional Override overrides = 12;
 * @return {?proto.protocol.core.v1.Override}
 */
proto.protocol.core.v1.Message.prototype.getOverrides = function() {
  return /** @type{?proto.protocol.core.v1.Override} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Override, 12));
};


/**
 * @param {?proto.protocol.core.v1.Override|undefined} value
 * @return {!proto.protocol.core.v1.Message} returns this
*/
proto.protocol.core.v1.Message.prototype.setOverrides = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Message} returns this
 */
proto.protocol.core.v1.Message.prototype.clearOverrides = function() {
  return this.setOverrides(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Message.prototype.hasOverrides = function() {
  return jspb.Message.getField(this, 12) != null;
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
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
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
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setGuildId(value);
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
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
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
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.CreateInviteRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.CreateInviteRequest} returns this
 */
proto.protocol.core.v1.CreateInviteRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
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
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isCategory: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    previousId: jspb.Message.getFieldWithDefault(msg, 5, "0"),
    nextId: jspb.Message.getFieldWithDefault(msg, 4, "0")
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
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setGuildId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannelName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCategory(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPreviousId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setNextId(value);
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
  f = message.getGuildId();
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
  f = message.getIsCategory();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPreviousId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
  f = message.getNextId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.CreateChannelRequest} returns this
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
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


/**
 * optional bool is_category = 3;
 * @return {boolean}
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.getIsCategory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.CreateChannelRequest} returns this
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.setIsCategory = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint64 previous_id = 5;
 * @return {string}
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.getPreviousId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.CreateChannelRequest} returns this
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.setPreviousId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * optional uint64 next_id = 4;
 * @return {string}
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.getNextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.CreateChannelRequest} returns this
 */
proto.protocol.core.v1.CreateChannelRequest.prototype.setNextId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
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
proto.protocol.core.v1.CreateEmotePackRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.CreateEmotePackRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.CreateEmotePackRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateEmotePackRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    packName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.protocol.core.v1.CreateEmotePackRequest}
 */
proto.protocol.core.v1.CreateEmotePackRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.CreateEmotePackRequest;
  return proto.protocol.core.v1.CreateEmotePackRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.CreateEmotePackRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.CreateEmotePackRequest}
 */
proto.protocol.core.v1.CreateEmotePackRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackName(value);
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
proto.protocol.core.v1.CreateEmotePackRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.CreateEmotePackRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.CreateEmotePackRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateEmotePackRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string pack_name = 1;
 * @return {string}
 */
proto.protocol.core.v1.CreateEmotePackRequest.prototype.getPackName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.CreateEmotePackRequest} returns this
 */
proto.protocol.core.v1.CreateEmotePackRequest.prototype.setPackName = function(value) {
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
proto.protocol.core.v1.CreateEmotePackResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.CreateEmotePackResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.CreateEmotePackResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateEmotePackResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    packId: jspb.Message.getFieldWithDefault(msg, 1, "0")
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
 * @return {!proto.protocol.core.v1.CreateEmotePackResponse}
 */
proto.protocol.core.v1.CreateEmotePackResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.CreateEmotePackResponse;
  return proto.protocol.core.v1.CreateEmotePackResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.CreateEmotePackResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.CreateEmotePackResponse}
 */
proto.protocol.core.v1.CreateEmotePackResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPackId(value);
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
proto.protocol.core.v1.CreateEmotePackResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.CreateEmotePackResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.CreateEmotePackResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.CreateEmotePackResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 pack_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.CreateEmotePackResponse.prototype.getPackId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.CreateEmotePackResponse} returns this
 */
proto.protocol.core.v1.CreateEmotePackResponse.prototype.setPackId = function(value) {
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
proto.protocol.core.v1.GetGuildListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildListRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protocol.core.v1.GetGuildListRequest}
 */
proto.protocol.core.v1.GetGuildListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildListRequest;
  return proto.protocol.core.v1.GetGuildListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildListRequest}
 */
proto.protocol.core.v1.GetGuildListRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.GetGuildListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.GetGuildListResponse.repeatedFields_ = [1];



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
proto.protocol.core.v1.GetGuildListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildsList: jspb.Message.toObjectList(msg.getGuildsList(),
    proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.toObject, includeInstance)
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
 * @return {!proto.protocol.core.v1.GetGuildListResponse}
 */
proto.protocol.core.v1.GetGuildListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildListResponse;
  return proto.protocol.core.v1.GetGuildListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildListResponse}
 */
proto.protocol.core.v1.GetGuildListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.GetGuildListResponse.GuildListEntry;
      reader.readMessage(value,proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.deserializeBinaryFromReader);
      msg.addGuilds(value);
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
proto.protocol.core.v1.GetGuildListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.serializeBinaryToWriter
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
proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildListResponse.GuildListEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    host: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.protocol.core.v1.GetGuildListResponse.GuildListEntry}
 */
proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildListResponse.GuildListEntry;
  return proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildListResponse.GuildListEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildListResponse.GuildListEntry}
 */
proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
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
proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildListResponse.GuildListEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetGuildListResponse.GuildListEntry} returns this
 */
proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetGuildListResponse.GuildListEntry} returns this
 */
proto.protocol.core.v1.GetGuildListResponse.GuildListEntry.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated GuildListEntry guilds = 1;
 * @return {!Array<!proto.protocol.core.v1.GetGuildListResponse.GuildListEntry>}
 */
proto.protocol.core.v1.GetGuildListResponse.prototype.getGuildsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.GetGuildListResponse.GuildListEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.GetGuildListResponse.GuildListEntry, 1));
};


/**
 * @param {!Array<!proto.protocol.core.v1.GetGuildListResponse.GuildListEntry>} value
 * @return {!proto.protocol.core.v1.GetGuildListResponse} returns this
*/
proto.protocol.core.v1.GetGuildListResponse.prototype.setGuildsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.core.v1.GetGuildListResponse.GuildListEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.GetGuildListResponse.GuildListEntry}
 */
proto.protocol.core.v1.GetGuildListResponse.prototype.addGuilds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.core.v1.GetGuildListResponse.GuildListEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.GetGuildListResponse} returns this
 */
proto.protocol.core.v1.GetGuildListResponse.prototype.clearGuildsList = function() {
  return this.setGuildsList([]);
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
proto.protocol.core.v1.GetGuildRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetGuildRequest} returns this
 */
proto.protocol.core.v1.GetGuildRequest.prototype.setGuildId = function(value) {
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
proto.protocol.core.v1.GetGuildInvitesRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetGuildInvitesRequest} returns this
 */
proto.protocol.core.v1.GetGuildInvitesRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
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
proto.protocol.core.v1.GetGuildMembersRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetGuildMembersRequest} returns this
 */
proto.protocol.core.v1.GetGuildMembersRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
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
proto.protocol.core.v1.GetGuildChannelsRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetGuildChannelsRequest} returns this
 */
proto.protocol.core.v1.GetGuildChannelsRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
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
    channelName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isCategory: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    isVoice: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCategory(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsVoice(value);
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
  f = message.getIsCategory();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIsVoice();
  if (f) {
    writer.writeBool(
      4,
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
 * optional bool is_category = 3;
 * @return {boolean}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.prototype.getIsCategory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.GetGuildChannelsResponse.Channel} returns this
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.prototype.setIsCategory = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool is_voice = 4;
 * @return {boolean}
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.prototype.getIsVoice = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.GetGuildChannelsResponse.Channel} returns this
 */
proto.protocol.core.v1.GetGuildChannelsResponse.Channel.prototype.setIsVoice = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
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
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setGuildId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setChannelId(value);
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
  f = message.getBeforeMessage();
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
proto.protocol.core.v1.GetChannelMessagesRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetChannelMessagesRequest} returns this
 */
proto.protocol.core.v1.GetChannelMessagesRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.GetChannelMessagesRequest.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetChannelMessagesRequest} returns this
 */
proto.protocol.core.v1.GetChannelMessagesRequest.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
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
proto.protocol.core.v1.GetChannelMessagesResponse.repeatedFields_ = [2];



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
    reachedTop: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReachedTop(value);
      break;
    case 2:
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
  f = message.getReachedTop();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protocol.core.v1.Message.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool reached_top = 1;
 * @return {boolean}
 */
proto.protocol.core.v1.GetChannelMessagesResponse.prototype.getReachedTop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.GetChannelMessagesResponse} returns this
 */
proto.protocol.core.v1.GetChannelMessagesResponse.prototype.setReachedTop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated Message messages = 2;
 * @return {!Array<!proto.protocol.core.v1.Message>}
 */
proto.protocol.core.v1.GetChannelMessagesResponse.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Message, 2));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Message>} value
 * @return {!proto.protocol.core.v1.GetChannelMessagesResponse} returns this
*/
proto.protocol.core.v1.GetChannelMessagesResponse.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocol.core.v1.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Message}
 */
proto.protocol.core.v1.GetChannelMessagesResponse.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocol.core.v1.Message, opt_index);
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
proto.protocol.core.v1.GetMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetMessageRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protocol.core.v1.GetMessageRequest}
 */
proto.protocol.core.v1.GetMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetMessageRequest;
  return proto.protocol.core.v1.GetMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetMessageRequest}
 */
proto.protocol.core.v1.GetMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.GetMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetMessageRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.protocol.core.v1.GetMessageRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetMessageRequest} returns this
 */
proto.protocol.core.v1.GetMessageRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.GetMessageRequest.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetMessageRequest} returns this
 */
proto.protocol.core.v1.GetMessageRequest.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 message_id = 3;
 * @return {string}
 */
proto.protocol.core.v1.GetMessageRequest.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetMessageRequest} returns this
 */
proto.protocol.core.v1.GetMessageRequest.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
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
proto.protocol.core.v1.GetMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetMessageResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protocol.core.v1.GetMessageResponse}
 */
proto.protocol.core.v1.GetMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetMessageResponse;
  return proto.protocol.core.v1.GetMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetMessageResponse}
 */
proto.protocol.core.v1.GetMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.GetMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetMessageResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.protocol.core.v1.GetMessageResponse.prototype.getMessage = function() {
  return /** @type{?proto.protocol.core.v1.Message} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Message, 1));
};


/**
 * @param {?proto.protocol.core.v1.Message|undefined} value
 * @return {!proto.protocol.core.v1.GetMessageResponse} returns this
*/
proto.protocol.core.v1.GetMessageResponse.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GetMessageResponse} returns this
 */
proto.protocol.core.v1.GetMessageResponse.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GetMessageResponse.prototype.hasMessage = function() {
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
proto.protocol.core.v1.GetEmotePacksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetEmotePacksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetEmotePacksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetEmotePacksRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protocol.core.v1.GetEmotePacksRequest}
 */
proto.protocol.core.v1.GetEmotePacksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetEmotePacksRequest;
  return proto.protocol.core.v1.GetEmotePacksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetEmotePacksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetEmotePacksRequest}
 */
proto.protocol.core.v1.GetEmotePacksRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.GetEmotePacksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetEmotePacksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetEmotePacksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetEmotePacksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.GetEmotePacksResponse.repeatedFields_ = [1];



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
proto.protocol.core.v1.GetEmotePacksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetEmotePacksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetEmotePacksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetEmotePacksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    packsList: jspb.Message.toObjectList(msg.getPacksList(),
    proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.toObject, includeInstance)
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
 * @return {!proto.protocol.core.v1.GetEmotePacksResponse}
 */
proto.protocol.core.v1.GetEmotePacksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetEmotePacksResponse;
  return proto.protocol.core.v1.GetEmotePacksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetEmotePacksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetEmotePacksResponse}
 */
proto.protocol.core.v1.GetEmotePacksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.GetEmotePacksResponse.EmotePack;
      reader.readMessage(value,proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.deserializeBinaryFromReader);
      msg.addPacks(value);
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
proto.protocol.core.v1.GetEmotePacksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetEmotePacksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetEmotePacksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetEmotePacksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPacksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.serializeBinaryToWriter
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
proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetEmotePacksResponse.EmotePack} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.toObject = function(includeInstance, msg) {
  var f, obj = {
    packId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    packOwner: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    packName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.protocol.core.v1.GetEmotePacksResponse.EmotePack}
 */
proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetEmotePacksResponse.EmotePack;
  return proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetEmotePacksResponse.EmotePack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetEmotePacksResponse.EmotePack}
 */
proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPackId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPackOwner(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPackName(value);
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
proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetEmotePacksResponse.EmotePack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getPackOwner();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
  f = message.getPackName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint64 pack_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.prototype.getPackId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetEmotePacksResponse.EmotePack} returns this
 */
proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.prototype.setPackId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 pack_owner = 2;
 * @return {string}
 */
proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.prototype.getPackOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetEmotePacksResponse.EmotePack} returns this
 */
proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.prototype.setPackOwner = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string pack_name = 3;
 * @return {string}
 */
proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.prototype.getPackName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetEmotePacksResponse.EmotePack} returns this
 */
proto.protocol.core.v1.GetEmotePacksResponse.EmotePack.prototype.setPackName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated EmotePack packs = 1;
 * @return {!Array<!proto.protocol.core.v1.GetEmotePacksResponse.EmotePack>}
 */
proto.protocol.core.v1.GetEmotePacksResponse.prototype.getPacksList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.GetEmotePacksResponse.EmotePack>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.GetEmotePacksResponse.EmotePack, 1));
};


/**
 * @param {!Array<!proto.protocol.core.v1.GetEmotePacksResponse.EmotePack>} value
 * @return {!proto.protocol.core.v1.GetEmotePacksResponse} returns this
*/
proto.protocol.core.v1.GetEmotePacksResponse.prototype.setPacksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.core.v1.GetEmotePacksResponse.EmotePack=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.GetEmotePacksResponse.EmotePack}
 */
proto.protocol.core.v1.GetEmotePacksResponse.prototype.addPacks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.core.v1.GetEmotePacksResponse.EmotePack, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.GetEmotePacksResponse} returns this
 */
proto.protocol.core.v1.GetEmotePacksResponse.prototype.clearPacksList = function() {
  return this.setPacksList([]);
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
proto.protocol.core.v1.GetEmotePackEmotesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetEmotePackEmotesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetEmotePackEmotesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetEmotePackEmotesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    packId: jspb.Message.getFieldWithDefault(msg, 1, "0")
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
 * @return {!proto.protocol.core.v1.GetEmotePackEmotesRequest}
 */
proto.protocol.core.v1.GetEmotePackEmotesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetEmotePackEmotesRequest;
  return proto.protocol.core.v1.GetEmotePackEmotesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetEmotePackEmotesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetEmotePackEmotesRequest}
 */
proto.protocol.core.v1.GetEmotePackEmotesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPackId(value);
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
proto.protocol.core.v1.GetEmotePackEmotesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetEmotePackEmotesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetEmotePackEmotesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetEmotePackEmotesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 pack_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.GetEmotePackEmotesRequest.prototype.getPackId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetEmotePackEmotesRequest} returns this
 */
proto.protocol.core.v1.GetEmotePackEmotesRequest.prototype.setPackId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.repeatedFields_ = [1];



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
proto.protocol.core.v1.GetEmotePackEmotesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetEmotePackEmotesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetEmotePackEmotesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    emotesList: jspb.Message.toObjectList(msg.getEmotesList(),
    proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.toObject, includeInstance)
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
 * @return {!proto.protocol.core.v1.GetEmotePackEmotesResponse}
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetEmotePackEmotesResponse;
  return proto.protocol.core.v1.GetEmotePackEmotesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetEmotePackEmotesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetEmotePackEmotesResponse}
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote;
      reader.readMessage(value,proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.deserializeBinaryFromReader);
      msg.addEmotes(value);
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
proto.protocol.core.v1.GetEmotePackEmotesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetEmotePackEmotesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetEmotePackEmotesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.serializeBinaryToWriter
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
proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.toObject = function(includeInstance, msg) {
  var f, obj = {
    imageId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote}
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote;
  return proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote}
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageId(value);
      break;
    case 2:
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
proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImageId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string image_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.prototype.getImageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote} returns this
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.prototype.setImageId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote} returns this
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Emote emotes = 1;
 * @return {!Array<!proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote>}
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.prototype.getEmotesList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote, 1));
};


/**
 * @param {!Array<!proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote>} value
 * @return {!proto.protocol.core.v1.GetEmotePackEmotesResponse} returns this
*/
proto.protocol.core.v1.GetEmotePackEmotesResponse.prototype.setEmotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote}
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.prototype.addEmotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.core.v1.GetEmotePackEmotesResponse.Emote, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.GetEmotePackEmotesResponse} returns this
 */
proto.protocol.core.v1.GetEmotePackEmotesResponse.prototype.clearEmotesList = function() {
  return this.setEmotesList([]);
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
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
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
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setGuildId(value);
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
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
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
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.UpdateGuildNameRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateGuildNameRequest} returns this
 */
proto.protocol.core.v1.UpdateGuildNameRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
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
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    newChannelName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setGuildId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setChannelId(value);
      break;
    case 3:
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
  f = message.getNewChannelName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateChannelNameRequest} returns this
 */
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateChannelNameRequest} returns this
 */
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string new_channel_name = 3;
 * @return {string}
 */
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.getNewChannelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateChannelNameRequest} returns this
 */
proto.protocol.core.v1.UpdateChannelNameRequest.prototype.setNewChannelName = function(value) {
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
proto.protocol.core.v1.UpdateChannelOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.UpdateChannelOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.UpdateChannelOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.UpdateChannelOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    previousId: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    nextId: jspb.Message.getFieldWithDefault(msg, 4, "0")
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
 * @return {!proto.protocol.core.v1.UpdateChannelOrderRequest}
 */
proto.protocol.core.v1.UpdateChannelOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.UpdateChannelOrderRequest;
  return proto.protocol.core.v1.UpdateChannelOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.UpdateChannelOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.UpdateChannelOrderRequest}
 */
proto.protocol.core.v1.UpdateChannelOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPreviousId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setNextId(value);
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
proto.protocol.core.v1.UpdateChannelOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.UpdateChannelOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.UpdateChannelOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.UpdateChannelOrderRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPreviousId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
  f = message.getNextId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.UpdateChannelOrderRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateChannelOrderRequest} returns this
 */
proto.protocol.core.v1.UpdateChannelOrderRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.UpdateChannelOrderRequest.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateChannelOrderRequest} returns this
 */
proto.protocol.core.v1.UpdateChannelOrderRequest.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 previous_id = 3;
 * @return {string}
 */
proto.protocol.core.v1.UpdateChannelOrderRequest.prototype.getPreviousId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateChannelOrderRequest} returns this
 */
proto.protocol.core.v1.UpdateChannelOrderRequest.prototype.setPreviousId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional uint64 next_id = 4;
 * @return {string}
 */
proto.protocol.core.v1.UpdateChannelOrderRequest.prototype.getNextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateChannelOrderRequest} returns this
 */
proto.protocol.core.v1.UpdateChannelOrderRequest.prototype.setNextId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.UpdateMessageRequest.repeatedFields_ = [6,8,10];



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
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    messageId: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updateContent: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    embedsList: jspb.Message.toObjectList(msg.getEmbedsList(),
    proto.protocol.core.v1.Embed.toObject, includeInstance),
    updateEmbeds: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.protocol.core.v1.Action.toObject, includeInstance),
    updateActions: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    attachmentsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    updateAttachments: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    overrides: (f = msg.getOverrides()) && proto.protocol.core.v1.Override.toObject(includeInstance, f),
    updateOverrides: jspb.Message.getBooleanFieldWithDefault(msg, 13, false)
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
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateContent(value);
      break;
    case 6:
      var value = new proto.protocol.core.v1.Embed;
      reader.readMessage(value,proto.protocol.core.v1.Embed.deserializeBinaryFromReader);
      msg.addEmbeds(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateEmbeds(value);
      break;
    case 8:
      var value = new proto.protocol.core.v1.Action;
      reader.readMessage(value,proto.protocol.core.v1.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateActions(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttachments(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateAttachments(value);
      break;
    case 12:
      var value = new proto.protocol.core.v1.Override;
      reader.readMessage(value,proto.protocol.core.v1.Override.deserializeBinaryFromReader);
      msg.setOverrides(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateOverrides(value);
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
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdateContent();
  if (f) {
    writer.writeBool(
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
  f = message.getUpdateEmbeds();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.protocol.core.v1.Action.serializeBinaryToWriter
    );
  }
  f = message.getUpdateActions();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getUpdateAttachments();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getOverrides();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.protocol.core.v1.Override.serializeBinaryToWriter
    );
  }
  f = message.getUpdateOverrides();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 message_id = 3;
 * @return {string}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool update_content = 5;
 * @return {boolean}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getUpdateContent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setUpdateContent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated Embed embeds = 6;
 * @return {!Array<!proto.protocol.core.v1.Embed>}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getEmbedsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Embed>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Embed, 6));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Embed>} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
*/
proto.protocol.core.v1.UpdateMessageRequest.prototype.setEmbedsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.protocol.core.v1.Embed=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Embed}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.addEmbeds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.protocol.core.v1.Embed, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.clearEmbedsList = function() {
  return this.setEmbedsList([]);
};


/**
 * optional bool update_embeds = 7;
 * @return {boolean}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getUpdateEmbeds = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setUpdateEmbeds = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated Action actions = 8;
 * @return {!Array<!proto.protocol.core.v1.Action>}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Action, 8));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Action>} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
*/
proto.protocol.core.v1.UpdateMessageRequest.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.protocol.core.v1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Action}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.protocol.core.v1.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * optional bool update_actions = 9;
 * @return {boolean}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getUpdateActions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setUpdateActions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * repeated string attachments = 10;
 * @return {!Array<string>}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getAttachmentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.addAttachments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * optional bool update_attachments = 11;
 * @return {boolean}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getUpdateAttachments = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setUpdateAttachments = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional Override overrides = 12;
 * @return {?proto.protocol.core.v1.Override}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getOverrides = function() {
  return /** @type{?proto.protocol.core.v1.Override} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Override, 12));
};


/**
 * @param {?proto.protocol.core.v1.Override|undefined} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
*/
proto.protocol.core.v1.UpdateMessageRequest.prototype.setOverrides = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.clearOverrides = function() {
  return this.setOverrides(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.hasOverrides = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool update_overrides = 13;
 * @return {boolean}
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.getUpdateOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.UpdateMessageRequest} returns this
 */
proto.protocol.core.v1.UpdateMessageRequest.prototype.setUpdateOverrides = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
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
proto.protocol.core.v1.AddEmoteToPackRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.AddEmoteToPackRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.AddEmoteToPackRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.AddEmoteToPackRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    packId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    imageId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.protocol.core.v1.AddEmoteToPackRequest}
 */
proto.protocol.core.v1.AddEmoteToPackRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.AddEmoteToPackRequest;
  return proto.protocol.core.v1.AddEmoteToPackRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.AddEmoteToPackRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.AddEmoteToPackRequest}
 */
proto.protocol.core.v1.AddEmoteToPackRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPackId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageId(value);
      break;
    case 3:
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
proto.protocol.core.v1.AddEmoteToPackRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.AddEmoteToPackRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.AddEmoteToPackRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.AddEmoteToPackRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getImageId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint64 pack_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.AddEmoteToPackRequest.prototype.getPackId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.AddEmoteToPackRequest} returns this
 */
proto.protocol.core.v1.AddEmoteToPackRequest.prototype.setPackId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string image_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.AddEmoteToPackRequest.prototype.getImageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.AddEmoteToPackRequest} returns this
 */
proto.protocol.core.v1.AddEmoteToPackRequest.prototype.setImageId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.protocol.core.v1.AddEmoteToPackRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.AddEmoteToPackRequest} returns this
 */
proto.protocol.core.v1.AddEmoteToPackRequest.prototype.setName = function(value) {
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
proto.protocol.core.v1.DeleteGuildRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.DeleteGuildRequest} returns this
 */
proto.protocol.core.v1.DeleteGuildRequest.prototype.setGuildId = function(value) {
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
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
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
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setGuildId(value);
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
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
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
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.DeleteInviteRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.DeleteInviteRequest} returns this
 */
proto.protocol.core.v1.DeleteInviteRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
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
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0")
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
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setGuildId(value);
      break;
    case 2:
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
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.DeleteChannelRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.DeleteChannelRequest} returns this
 */
proto.protocol.core.v1.DeleteChannelRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.DeleteChannelRequest.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.DeleteChannelRequest} returns this
 */
proto.protocol.core.v1.DeleteChannelRequest.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
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
proto.protocol.core.v1.DeleteMessageRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.DeleteMessageRequest} returns this
 */
proto.protocol.core.v1.DeleteMessageRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.DeleteMessageRequest.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.DeleteMessageRequest} returns this
 */
proto.protocol.core.v1.DeleteMessageRequest.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 message_id = 3;
 * @return {string}
 */
proto.protocol.core.v1.DeleteMessageRequest.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.DeleteMessageRequest} returns this
 */
proto.protocol.core.v1.DeleteMessageRequest.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
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
proto.protocol.core.v1.DeleteEmoteFromPackRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.DeleteEmoteFromPackRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.DeleteEmoteFromPackRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteEmoteFromPackRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    packId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    imageId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.protocol.core.v1.DeleteEmoteFromPackRequest}
 */
proto.protocol.core.v1.DeleteEmoteFromPackRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.DeleteEmoteFromPackRequest;
  return proto.protocol.core.v1.DeleteEmoteFromPackRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.DeleteEmoteFromPackRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.DeleteEmoteFromPackRequest}
 */
proto.protocol.core.v1.DeleteEmoteFromPackRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPackId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageId(value);
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
proto.protocol.core.v1.DeleteEmoteFromPackRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.DeleteEmoteFromPackRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.DeleteEmoteFromPackRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteEmoteFromPackRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getImageId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 pack_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.DeleteEmoteFromPackRequest.prototype.getPackId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.DeleteEmoteFromPackRequest} returns this
 */
proto.protocol.core.v1.DeleteEmoteFromPackRequest.prototype.setPackId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string image_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.DeleteEmoteFromPackRequest.prototype.getImageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.DeleteEmoteFromPackRequest} returns this
 */
proto.protocol.core.v1.DeleteEmoteFromPackRequest.prototype.setImageId = function(value) {
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
proto.protocol.core.v1.DeleteEmotePackRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.DeleteEmotePackRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.DeleteEmotePackRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteEmotePackRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    packId: jspb.Message.getFieldWithDefault(msg, 1, "0")
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
 * @return {!proto.protocol.core.v1.DeleteEmotePackRequest}
 */
proto.protocol.core.v1.DeleteEmotePackRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.DeleteEmotePackRequest;
  return proto.protocol.core.v1.DeleteEmotePackRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.DeleteEmotePackRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.DeleteEmotePackRequest}
 */
proto.protocol.core.v1.DeleteEmotePackRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPackId(value);
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
proto.protocol.core.v1.DeleteEmotePackRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.DeleteEmotePackRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.DeleteEmotePackRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteEmotePackRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 pack_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.DeleteEmotePackRequest.prototype.getPackId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.DeleteEmotePackRequest} returns this
 */
proto.protocol.core.v1.DeleteEmotePackRequest.prototype.setPackId = function(value) {
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
proto.protocol.core.v1.DequipEmotePackRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.DequipEmotePackRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.DequipEmotePackRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DequipEmotePackRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    packId: jspb.Message.getFieldWithDefault(msg, 1, "0")
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
 * @return {!proto.protocol.core.v1.DequipEmotePackRequest}
 */
proto.protocol.core.v1.DequipEmotePackRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.DequipEmotePackRequest;
  return proto.protocol.core.v1.DequipEmotePackRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.DequipEmotePackRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.DequipEmotePackRequest}
 */
proto.protocol.core.v1.DequipEmotePackRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPackId(value);
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
proto.protocol.core.v1.DequipEmotePackRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.DequipEmotePackRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.DequipEmotePackRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DequipEmotePackRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPackId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 pack_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.DequipEmotePackRequest.prototype.getPackId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.DequipEmotePackRequest} returns this
 */
proto.protocol.core.v1.DequipEmotePackRequest.prototype.setPackId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protocol.core.v1.StreamEventsRequest.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.protocol.core.v1.StreamEventsRequest.RequestCase = {
  REQUEST_NOT_SET: 0,
  SUBSCRIBE_TO_GUILD: 1,
  SUBSCRIBE_TO_ACTIONS: 2,
  SUBSCRIBE_TO_HOMESERVER_EVENTS: 3
};

/**
 * @return {proto.protocol.core.v1.StreamEventsRequest.RequestCase}
 */
proto.protocol.core.v1.StreamEventsRequest.prototype.getRequestCase = function() {
  return /** @type {proto.protocol.core.v1.StreamEventsRequest.RequestCase} */(jspb.Message.computeOneofCase(this, proto.protocol.core.v1.StreamEventsRequest.oneofGroups_[0]));
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
proto.protocol.core.v1.StreamEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.StreamEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.StreamEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.StreamEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscribeToGuild: (f = msg.getSubscribeToGuild()) && proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.toObject(includeInstance, f),
    subscribeToActions: (f = msg.getSubscribeToActions()) && proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions.toObject(includeInstance, f),
    subscribeToHomeserverEvents: (f = msg.getSubscribeToHomeserverEvents()) && proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents.toObject(includeInstance, f)
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
 * @return {!proto.protocol.core.v1.StreamEventsRequest}
 */
proto.protocol.core.v1.StreamEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.StreamEventsRequest;
  return proto.protocol.core.v1.StreamEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.StreamEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.StreamEventsRequest}
 */
proto.protocol.core.v1.StreamEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild;
      reader.readMessage(value,proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.deserializeBinaryFromReader);
      msg.setSubscribeToGuild(value);
      break;
    case 2:
      var value = new proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions;
      reader.readMessage(value,proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions.deserializeBinaryFromReader);
      msg.setSubscribeToActions(value);
      break;
    case 3:
      var value = new proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents;
      reader.readMessage(value,proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents.deserializeBinaryFromReader);
      msg.setSubscribeToHomeserverEvents(value);
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
proto.protocol.core.v1.StreamEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.StreamEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.StreamEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.StreamEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscribeToGuild();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeToActions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions.serializeBinaryToWriter
    );
  }
  f = message.getSubscribeToHomeserverEvents();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents.serializeBinaryToWriter
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
proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild}
 */
proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild;
  return proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild}
 */
proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.serializeBinaryToWriter = function(message, writer) {
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
proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild} returns this
 */
proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild.prototype.setGuildId = function(value) {
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
proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions}
 */
proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions;
  return proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions}
 */
proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions.serializeBinaryToWriter = function(message, writer) {
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
proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents}
 */
proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents;
  return proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents}
 */
proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional SubscribeToGuild subscribe_to_guild = 1;
 * @return {?proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild}
 */
proto.protocol.core.v1.StreamEventsRequest.prototype.getSubscribeToGuild = function() {
  return /** @type{?proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild, 1));
};


/**
 * @param {?proto.protocol.core.v1.StreamEventsRequest.SubscribeToGuild|undefined} value
 * @return {!proto.protocol.core.v1.StreamEventsRequest} returns this
*/
proto.protocol.core.v1.StreamEventsRequest.prototype.setSubscribeToGuild = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.protocol.core.v1.StreamEventsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.StreamEventsRequest} returns this
 */
proto.protocol.core.v1.StreamEventsRequest.prototype.clearSubscribeToGuild = function() {
  return this.setSubscribeToGuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.StreamEventsRequest.prototype.hasSubscribeToGuild = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SubscribeToActions subscribe_to_actions = 2;
 * @return {?proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions}
 */
proto.protocol.core.v1.StreamEventsRequest.prototype.getSubscribeToActions = function() {
  return /** @type{?proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions, 2));
};


/**
 * @param {?proto.protocol.core.v1.StreamEventsRequest.SubscribeToActions|undefined} value
 * @return {!proto.protocol.core.v1.StreamEventsRequest} returns this
*/
proto.protocol.core.v1.StreamEventsRequest.prototype.setSubscribeToActions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.protocol.core.v1.StreamEventsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.StreamEventsRequest} returns this
 */
proto.protocol.core.v1.StreamEventsRequest.prototype.clearSubscribeToActions = function() {
  return this.setSubscribeToActions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.StreamEventsRequest.prototype.hasSubscribeToActions = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SubscribeToHomeserverEvents subscribe_to_homeserver_events = 3;
 * @return {?proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents}
 */
proto.protocol.core.v1.StreamEventsRequest.prototype.getSubscribeToHomeserverEvents = function() {
  return /** @type{?proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents, 3));
};


/**
 * @param {?proto.protocol.core.v1.StreamEventsRequest.SubscribeToHomeserverEvents|undefined} value
 * @return {!proto.protocol.core.v1.StreamEventsRequest} returns this
*/
proto.protocol.core.v1.StreamEventsRequest.prototype.setSubscribeToHomeserverEvents = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.protocol.core.v1.StreamEventsRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.StreamEventsRequest} returns this
 */
proto.protocol.core.v1.StreamEventsRequest.prototype.clearSubscribeToHomeserverEvents = function() {
  return this.setSubscribeToHomeserverEvents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.StreamEventsRequest.prototype.hasSubscribeToHomeserverEvents = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protocol.core.v1.Event.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13]];

/**
 * @enum {number}
 */
proto.protocol.core.v1.Event.EventCase = {
  EVENT_NOT_SET: 0,
  GUILD_ADDED_TO_LIST: 1,
  GUILD_REMOVED_FROM_LIST: 2,
  ACTION_PERFORMED: 3,
  SENT_MESSAGE: 4,
  EDITED_MESSAGE: 5,
  DELETED_MESSAGE: 6,
  CREATED_CHANNEL: 7,
  EDITED_CHANNEL: 8,
  DELETED_CHANNEL: 9,
  EDITED_GUILD: 10,
  DELETED_GUILD: 11,
  JOINED_MEMBER: 12,
  LEFT_MEMBER: 13
};

/**
 * @return {proto.protocol.core.v1.Event.EventCase}
 */
proto.protocol.core.v1.Event.prototype.getEventCase = function() {
  return /** @type {proto.protocol.core.v1.Event.EventCase} */(jspb.Message.computeOneofCase(this, proto.protocol.core.v1.Event.oneofGroups_[0]));
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
proto.protocol.core.v1.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildAddedToList: (f = msg.getGuildAddedToList()) && proto.protocol.core.v1.Event.GuildAddedToList.toObject(includeInstance, f),
    guildRemovedFromList: (f = msg.getGuildRemovedFromList()) && proto.protocol.core.v1.Event.GuildRemovedFromList.toObject(includeInstance, f),
    actionPerformed: (f = msg.getActionPerformed()) && proto.protocol.core.v1.Event.ActionPerformed.toObject(includeInstance, f),
    sentMessage: (f = msg.getSentMessage()) && proto.protocol.core.v1.Event.MessageSent.toObject(includeInstance, f),
    editedMessage: (f = msg.getEditedMessage()) && proto.protocol.core.v1.Event.MessageUpdated.toObject(includeInstance, f),
    deletedMessage: (f = msg.getDeletedMessage()) && proto.protocol.core.v1.Event.MessageDeleted.toObject(includeInstance, f),
    createdChannel: (f = msg.getCreatedChannel()) && proto.protocol.core.v1.Event.ChannelCreated.toObject(includeInstance, f),
    editedChannel: (f = msg.getEditedChannel()) && proto.protocol.core.v1.Event.ChannelUpdated.toObject(includeInstance, f),
    deletedChannel: (f = msg.getDeletedChannel()) && proto.protocol.core.v1.Event.ChannelDeleted.toObject(includeInstance, f),
    editedGuild: (f = msg.getEditedGuild()) && proto.protocol.core.v1.Event.GuildUpdated.toObject(includeInstance, f),
    deletedGuild: (f = msg.getDeletedGuild()) && proto.protocol.core.v1.Event.GuildDeleted.toObject(includeInstance, f),
    joinedMember: (f = msg.getJoinedMember()) && proto.protocol.core.v1.Event.MemberJoined.toObject(includeInstance, f),
    leftMember: (f = msg.getLeftMember()) && proto.protocol.core.v1.Event.MemberLeft.toObject(includeInstance, f)
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
 * @return {!proto.protocol.core.v1.Event}
 */
proto.protocol.core.v1.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event;
  return proto.protocol.core.v1.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event}
 */
proto.protocol.core.v1.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Event.GuildAddedToList;
      reader.readMessage(value,proto.protocol.core.v1.Event.GuildAddedToList.deserializeBinaryFromReader);
      msg.setGuildAddedToList(value);
      break;
    case 2:
      var value = new proto.protocol.core.v1.Event.GuildRemovedFromList;
      reader.readMessage(value,proto.protocol.core.v1.Event.GuildRemovedFromList.deserializeBinaryFromReader);
      msg.setGuildRemovedFromList(value);
      break;
    case 3:
      var value = new proto.protocol.core.v1.Event.ActionPerformed;
      reader.readMessage(value,proto.protocol.core.v1.Event.ActionPerformed.deserializeBinaryFromReader);
      msg.setActionPerformed(value);
      break;
    case 4:
      var value = new proto.protocol.core.v1.Event.MessageSent;
      reader.readMessage(value,proto.protocol.core.v1.Event.MessageSent.deserializeBinaryFromReader);
      msg.setSentMessage(value);
      break;
    case 5:
      var value = new proto.protocol.core.v1.Event.MessageUpdated;
      reader.readMessage(value,proto.protocol.core.v1.Event.MessageUpdated.deserializeBinaryFromReader);
      msg.setEditedMessage(value);
      break;
    case 6:
      var value = new proto.protocol.core.v1.Event.MessageDeleted;
      reader.readMessage(value,proto.protocol.core.v1.Event.MessageDeleted.deserializeBinaryFromReader);
      msg.setDeletedMessage(value);
      break;
    case 7:
      var value = new proto.protocol.core.v1.Event.ChannelCreated;
      reader.readMessage(value,proto.protocol.core.v1.Event.ChannelCreated.deserializeBinaryFromReader);
      msg.setCreatedChannel(value);
      break;
    case 8:
      var value = new proto.protocol.core.v1.Event.ChannelUpdated;
      reader.readMessage(value,proto.protocol.core.v1.Event.ChannelUpdated.deserializeBinaryFromReader);
      msg.setEditedChannel(value);
      break;
    case 9:
      var value = new proto.protocol.core.v1.Event.ChannelDeleted;
      reader.readMessage(value,proto.protocol.core.v1.Event.ChannelDeleted.deserializeBinaryFromReader);
      msg.setDeletedChannel(value);
      break;
    case 10:
      var value = new proto.protocol.core.v1.Event.GuildUpdated;
      reader.readMessage(value,proto.protocol.core.v1.Event.GuildUpdated.deserializeBinaryFromReader);
      msg.setEditedGuild(value);
      break;
    case 11:
      var value = new proto.protocol.core.v1.Event.GuildDeleted;
      reader.readMessage(value,proto.protocol.core.v1.Event.GuildDeleted.deserializeBinaryFromReader);
      msg.setDeletedGuild(value);
      break;
    case 12:
      var value = new proto.protocol.core.v1.Event.MemberJoined;
      reader.readMessage(value,proto.protocol.core.v1.Event.MemberJoined.deserializeBinaryFromReader);
      msg.setJoinedMember(value);
      break;
    case 13:
      var value = new proto.protocol.core.v1.Event.MemberLeft;
      reader.readMessage(value,proto.protocol.core.v1.Event.MemberLeft.deserializeBinaryFromReader);
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
proto.protocol.core.v1.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildAddedToList();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.Event.GuildAddedToList.serializeBinaryToWriter
    );
  }
  f = message.getGuildRemovedFromList();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protocol.core.v1.Event.GuildRemovedFromList.serializeBinaryToWriter
    );
  }
  f = message.getActionPerformed();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.protocol.core.v1.Event.ActionPerformed.serializeBinaryToWriter
    );
  }
  f = message.getSentMessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protocol.core.v1.Event.MessageSent.serializeBinaryToWriter
    );
  }
  f = message.getEditedMessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.protocol.core.v1.Event.MessageUpdated.serializeBinaryToWriter
    );
  }
  f = message.getDeletedMessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.protocol.core.v1.Event.MessageDeleted.serializeBinaryToWriter
    );
  }
  f = message.getCreatedChannel();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.protocol.core.v1.Event.ChannelCreated.serializeBinaryToWriter
    );
  }
  f = message.getEditedChannel();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.protocol.core.v1.Event.ChannelUpdated.serializeBinaryToWriter
    );
  }
  f = message.getDeletedChannel();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.protocol.core.v1.Event.ChannelDeleted.serializeBinaryToWriter
    );
  }
  f = message.getEditedGuild();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.protocol.core.v1.Event.GuildUpdated.serializeBinaryToWriter
    );
  }
  f = message.getDeletedGuild();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.protocol.core.v1.Event.GuildDeleted.serializeBinaryToWriter
    );
  }
  f = message.getJoinedMember();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.protocol.core.v1.Event.MemberJoined.serializeBinaryToWriter
    );
  }
  f = message.getLeftMember();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.protocol.core.v1.Event.MemberLeft.serializeBinaryToWriter
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
proto.protocol.core.v1.Event.MessageSent.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.MessageSent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event.MessageSent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.MessageSent.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protocol.core.v1.Event.MessageSent}
 */
proto.protocol.core.v1.Event.MessageSent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event.MessageSent;
  return proto.protocol.core.v1.Event.MessageSent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event.MessageSent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event.MessageSent}
 */
proto.protocol.core.v1.Event.MessageSent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
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
proto.protocol.core.v1.Event.MessageSent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.MessageSent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event.MessageSent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.MessageSent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protocol.core.v1.Message.serializeBinaryToWriter
    );
  }
};


/**
 * optional Message message = 2;
 * @return {?proto.protocol.core.v1.Message}
 */
proto.protocol.core.v1.Event.MessageSent.prototype.getMessage = function() {
  return /** @type{?proto.protocol.core.v1.Message} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Message, 2));
};


/**
 * @param {?proto.protocol.core.v1.Message|undefined} value
 * @return {!proto.protocol.core.v1.Event.MessageSent} returns this
*/
proto.protocol.core.v1.Event.MessageSent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event.MessageSent} returns this
 */
proto.protocol.core.v1.Event.MessageSent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.MessageSent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.Event.MessageUpdated.repeatedFields_ = [7,9,11];



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
proto.protocol.core.v1.Event.MessageUpdated.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.MessageUpdated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event.MessageUpdated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.MessageUpdated.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    messageId: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    editedAt: (f = msg.getEditedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 5, ""),
    updateContent: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    embedsList: jspb.Message.toObjectList(msg.getEmbedsList(),
    proto.protocol.core.v1.Embed.toObject, includeInstance),
    updateEmbeds: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.protocol.core.v1.Action.toObject, includeInstance),
    updateActions: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    attachmentsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    updateAttachments: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    overrides: (f = msg.getOverrides()) && proto.protocol.core.v1.Override.toObject(includeInstance, f),
    updateOverrides: jspb.Message.getBooleanFieldWithDefault(msg, 14, false)
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
 * @return {!proto.protocol.core.v1.Event.MessageUpdated}
 */
proto.protocol.core.v1.Event.MessageUpdated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event.MessageUpdated;
  return proto.protocol.core.v1.Event.MessageUpdated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event.MessageUpdated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event.MessageUpdated}
 */
proto.protocol.core.v1.Event.MessageUpdated.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateContent(value);
      break;
    case 7:
      var value = new proto.protocol.core.v1.Embed;
      reader.readMessage(value,proto.protocol.core.v1.Embed.deserializeBinaryFromReader);
      msg.addEmbeds(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateEmbeds(value);
      break;
    case 9:
      var value = new proto.protocol.core.v1.Action;
      reader.readMessage(value,proto.protocol.core.v1.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateActions(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttachments(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateAttachments(value);
      break;
    case 13:
      var value = new proto.protocol.core.v1.Override;
      reader.readMessage(value,proto.protocol.core.v1.Override.deserializeBinaryFromReader);
      msg.setOverrides(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateOverrides(value);
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
proto.protocol.core.v1.Event.MessageUpdated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.MessageUpdated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event.MessageUpdated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.MessageUpdated.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getUpdateContent();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getEmbedsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.protocol.core.v1.Embed.serializeBinaryToWriter
    );
  }
  f = message.getUpdateEmbeds();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.protocol.core.v1.Action.serializeBinaryToWriter
    );
  }
  f = message.getUpdateActions();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getUpdateAttachments();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getOverrides();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.protocol.core.v1.Override.serializeBinaryToWriter
    );
  }
  f = message.getUpdateOverrides();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 message_id = 3;
 * @return {string}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp edited_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getEditedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
*/
proto.protocol.core.v1.Event.MessageUpdated.prototype.setEditedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.clearEditedAt = function() {
  return this.setEditedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.hasEditedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string content = 5;
 * @return {string}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool update_content = 6;
 * @return {boolean}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getUpdateContent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.setUpdateContent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * repeated Embed embeds = 7;
 * @return {!Array<!proto.protocol.core.v1.Embed>}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getEmbedsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Embed>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Embed, 7));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Embed>} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
*/
proto.protocol.core.v1.Event.MessageUpdated.prototype.setEmbedsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.protocol.core.v1.Embed=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Embed}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.addEmbeds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.protocol.core.v1.Embed, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.clearEmbedsList = function() {
  return this.setEmbedsList([]);
};


/**
 * optional bool update_embeds = 8;
 * @return {boolean}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getUpdateEmbeds = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.setUpdateEmbeds = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * repeated Action actions = 9;
 * @return {!Array<!proto.protocol.core.v1.Action>}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Action, 9));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Action>} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
*/
proto.protocol.core.v1.Event.MessageUpdated.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.protocol.core.v1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Action}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.protocol.core.v1.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * optional bool update_actions = 10;
 * @return {boolean}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getUpdateActions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.setUpdateActions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * repeated string attachments = 11;
 * @return {!Array<string>}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getAttachmentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.addAttachments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * optional bool update_attachments = 12;
 * @return {boolean}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getUpdateAttachments = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.setUpdateAttachments = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional Override overrides = 13;
 * @return {?proto.protocol.core.v1.Override}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getOverrides = function() {
  return /** @type{?proto.protocol.core.v1.Override} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Override, 13));
};


/**
 * @param {?proto.protocol.core.v1.Override|undefined} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
*/
proto.protocol.core.v1.Event.MessageUpdated.prototype.setOverrides = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.clearOverrides = function() {
  return this.setOverrides(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.hasOverrides = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool update_overrides = 14;
 * @return {boolean}
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.getUpdateOverrides = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.Event.MessageUpdated} returns this
 */
proto.protocol.core.v1.Event.MessageUpdated.prototype.setUpdateOverrides = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
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
proto.protocol.core.v1.Event.MessageDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.MessageDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event.MessageDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.MessageDeleted.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protocol.core.v1.Event.MessageDeleted}
 */
proto.protocol.core.v1.Event.MessageDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event.MessageDeleted;
  return proto.protocol.core.v1.Event.MessageDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event.MessageDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event.MessageDeleted}
 */
proto.protocol.core.v1.Event.MessageDeleted.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.Event.MessageDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.MessageDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event.MessageDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.MessageDeleted.serializeBinaryToWriter = function(message, writer) {
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
proto.protocol.core.v1.Event.MessageDeleted.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.MessageDeleted} returns this
 */
proto.protocol.core.v1.Event.MessageDeleted.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.Event.MessageDeleted.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.MessageDeleted} returns this
 */
proto.protocol.core.v1.Event.MessageDeleted.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 message_id = 3;
 * @return {string}
 */
proto.protocol.core.v1.Event.MessageDeleted.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.MessageDeleted} returns this
 */
proto.protocol.core.v1.Event.MessageDeleted.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
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
proto.protocol.core.v1.Event.ChannelCreated.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.ChannelCreated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event.ChannelCreated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.ChannelCreated.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    previousId: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    nextId: jspb.Message.getFieldWithDefault(msg, 5, "0"),
    isCategory: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.protocol.core.v1.Event.ChannelCreated}
 */
proto.protocol.core.v1.Event.ChannelCreated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event.ChannelCreated;
  return proto.protocol.core.v1.Event.ChannelCreated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event.ChannelCreated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event.ChannelCreated}
 */
proto.protocol.core.v1.Event.ChannelCreated.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPreviousId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setNextId(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCategory(value);
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
proto.protocol.core.v1.Event.ChannelCreated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.ChannelCreated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event.ChannelCreated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.ChannelCreated.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPreviousId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      4,
      f
    );
  }
  f = message.getNextId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
  f = message.getIsCategory();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.Event.ChannelCreated.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ChannelCreated} returns this
 */
proto.protocol.core.v1.Event.ChannelCreated.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.Event.ChannelCreated.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ChannelCreated} returns this
 */
proto.protocol.core.v1.Event.ChannelCreated.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.protocol.core.v1.Event.ChannelCreated.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ChannelCreated} returns this
 */
proto.protocol.core.v1.Event.ChannelCreated.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 previous_id = 4;
 * @return {string}
 */
proto.protocol.core.v1.Event.ChannelCreated.prototype.getPreviousId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ChannelCreated} returns this
 */
proto.protocol.core.v1.Event.ChannelCreated.prototype.setPreviousId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional uint64 next_id = 5;
 * @return {string}
 */
proto.protocol.core.v1.Event.ChannelCreated.prototype.getNextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ChannelCreated} returns this
 */
proto.protocol.core.v1.Event.ChannelCreated.prototype.setNextId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * optional bool is_category = 6;
 * @return {boolean}
 */
proto.protocol.core.v1.Event.ChannelCreated.prototype.getIsCategory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.Event.ChannelCreated} returns this
 */
proto.protocol.core.v1.Event.ChannelCreated.prototype.setIsCategory = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.protocol.core.v1.Event.ChannelUpdated.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.ChannelUpdated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event.ChannelUpdated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.ChannelUpdated.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    updateName: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    previousId: jspb.Message.getFieldWithDefault(msg, 5, "0"),
    nextId: jspb.Message.getFieldWithDefault(msg, 6, "0"),
    updateOrder: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.protocol.core.v1.Event.ChannelUpdated}
 */
proto.protocol.core.v1.Event.ChannelUpdated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event.ChannelUpdated;
  return proto.protocol.core.v1.Event.ChannelUpdated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event.ChannelUpdated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event.ChannelUpdated}
 */
proto.protocol.core.v1.Event.ChannelUpdated.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setPreviousId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setNextId(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateOrder(value);
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
proto.protocol.core.v1.Event.ChannelUpdated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.ChannelUpdated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event.ChannelUpdated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.ChannelUpdated.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUpdateName();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPreviousId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      5,
      f
    );
  }
  f = message.getNextId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      6,
      f
    );
  }
  f = message.getUpdateOrder();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ChannelUpdated} returns this
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ChannelUpdated} returns this
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ChannelUpdated} returns this
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool update_name = 4;
 * @return {boolean}
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.getUpdateName = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.Event.ChannelUpdated} returns this
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.setUpdateName = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional uint64 previous_id = 5;
 * @return {string}
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.getPreviousId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ChannelUpdated} returns this
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.setPreviousId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};


/**
 * optional uint64 next_id = 6;
 * @return {string}
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.getNextId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ChannelUpdated} returns this
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.setNextId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};


/**
 * optional bool update_order = 7;
 * @return {boolean}
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.getUpdateOrder = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.Event.ChannelUpdated} returns this
 */
proto.protocol.core.v1.Event.ChannelUpdated.prototype.setUpdateOrder = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
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
proto.protocol.core.v1.Event.ChannelDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.ChannelDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event.ChannelDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.ChannelDeleted.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0")
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
 * @return {!proto.protocol.core.v1.Event.ChannelDeleted}
 */
proto.protocol.core.v1.Event.ChannelDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event.ChannelDeleted;
  return proto.protocol.core.v1.Event.ChannelDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event.ChannelDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event.ChannelDeleted}
 */
proto.protocol.core.v1.Event.ChannelDeleted.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.Event.ChannelDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.ChannelDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event.ChannelDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.ChannelDeleted.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.Event.ChannelDeleted.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ChannelDeleted} returns this
 */
proto.protocol.core.v1.Event.ChannelDeleted.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.Event.ChannelDeleted.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ChannelDeleted} returns this
 */
proto.protocol.core.v1.Event.ChannelDeleted.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
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
proto.protocol.core.v1.Event.GuildUpdated.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.GuildUpdated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event.GuildUpdated} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.GuildUpdated.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
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
 * @return {!proto.protocol.core.v1.Event.GuildUpdated}
 */
proto.protocol.core.v1.Event.GuildUpdated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event.GuildUpdated;
  return proto.protocol.core.v1.Event.GuildUpdated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event.GuildUpdated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event.GuildUpdated}
 */
proto.protocol.core.v1.Event.GuildUpdated.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.Event.GuildUpdated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.GuildUpdated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event.GuildUpdated} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.GuildUpdated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
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
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.Event.GuildUpdated.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.GuildUpdated} returns this
 */
proto.protocol.core.v1.Event.GuildUpdated.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.protocol.core.v1.Event.GuildUpdated.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.GuildUpdated} returns this
 */
proto.protocol.core.v1.Event.GuildUpdated.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool update_name = 3;
 * @return {boolean}
 */
proto.protocol.core.v1.Event.GuildUpdated.prototype.getUpdateName = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.Event.GuildUpdated} returns this
 */
proto.protocol.core.v1.Event.GuildUpdated.prototype.setUpdateName = function(value) {
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
proto.protocol.core.v1.Event.GuildDeleted.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.GuildDeleted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event.GuildDeleted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.GuildDeleted.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protocol.core.v1.Event.GuildDeleted}
 */
proto.protocol.core.v1.Event.GuildDeleted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event.GuildDeleted;
  return proto.protocol.core.v1.Event.GuildDeleted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event.GuildDeleted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event.GuildDeleted}
 */
proto.protocol.core.v1.Event.GuildDeleted.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.Event.GuildDeleted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.GuildDeleted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event.GuildDeleted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.GuildDeleted.serializeBinaryToWriter = function(message, writer) {
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
proto.protocol.core.v1.Event.GuildDeleted.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.GuildDeleted} returns this
 */
proto.protocol.core.v1.Event.GuildDeleted.prototype.setGuildId = function(value) {
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
proto.protocol.core.v1.Event.MemberJoined.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.MemberJoined.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event.MemberJoined} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.MemberJoined.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    guildId: jspb.Message.getFieldWithDefault(msg, 2, "0")
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
 * @return {!proto.protocol.core.v1.Event.MemberJoined}
 */
proto.protocol.core.v1.Event.MemberJoined.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event.MemberJoined;
  return proto.protocol.core.v1.Event.MemberJoined.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event.MemberJoined} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event.MemberJoined}
 */
proto.protocol.core.v1.Event.MemberJoined.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
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
proto.protocol.core.v1.Event.MemberJoined.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.MemberJoined.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event.MemberJoined} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.MemberJoined.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
};


/**
 * optional uint64 member_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.Event.MemberJoined.prototype.getMemberId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.MemberJoined} returns this
 */
proto.protocol.core.v1.Event.MemberJoined.prototype.setMemberId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 guild_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.Event.MemberJoined.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.MemberJoined} returns this
 */
proto.protocol.core.v1.Event.MemberJoined.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
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
proto.protocol.core.v1.Event.MemberLeft.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.MemberLeft.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event.MemberLeft} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.MemberLeft.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    guildId: jspb.Message.getFieldWithDefault(msg, 2, "0")
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
 * @return {!proto.protocol.core.v1.Event.MemberLeft}
 */
proto.protocol.core.v1.Event.MemberLeft.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event.MemberLeft;
  return proto.protocol.core.v1.Event.MemberLeft.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event.MemberLeft} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event.MemberLeft}
 */
proto.protocol.core.v1.Event.MemberLeft.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
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
proto.protocol.core.v1.Event.MemberLeft.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.MemberLeft.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event.MemberLeft} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.MemberLeft.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
};


/**
 * optional uint64 member_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.Event.MemberLeft.prototype.getMemberId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.MemberLeft} returns this
 */
proto.protocol.core.v1.Event.MemberLeft.prototype.setMemberId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 guild_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.Event.MemberLeft.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.MemberLeft} returns this
 */
proto.protocol.core.v1.Event.MemberLeft.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
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
proto.protocol.core.v1.Event.GuildAddedToList.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.GuildAddedToList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event.GuildAddedToList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.GuildAddedToList.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    homeserver: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.protocol.core.v1.Event.GuildAddedToList}
 */
proto.protocol.core.v1.Event.GuildAddedToList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event.GuildAddedToList;
  return proto.protocol.core.v1.Event.GuildAddedToList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event.GuildAddedToList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event.GuildAddedToList}
 */
proto.protocol.core.v1.Event.GuildAddedToList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHomeserver(value);
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
proto.protocol.core.v1.Event.GuildAddedToList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.GuildAddedToList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event.GuildAddedToList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.GuildAddedToList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getHomeserver();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.Event.GuildAddedToList.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.GuildAddedToList} returns this
 */
proto.protocol.core.v1.Event.GuildAddedToList.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string homeserver = 2;
 * @return {string}
 */
proto.protocol.core.v1.Event.GuildAddedToList.prototype.getHomeserver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.GuildAddedToList} returns this
 */
proto.protocol.core.v1.Event.GuildAddedToList.prototype.setHomeserver = function(value) {
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
proto.protocol.core.v1.Event.GuildRemovedFromList.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.GuildRemovedFromList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event.GuildRemovedFromList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.GuildRemovedFromList.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    homeserver: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.protocol.core.v1.Event.GuildRemovedFromList}
 */
proto.protocol.core.v1.Event.GuildRemovedFromList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event.GuildRemovedFromList;
  return proto.protocol.core.v1.Event.GuildRemovedFromList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event.GuildRemovedFromList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event.GuildRemovedFromList}
 */
proto.protocol.core.v1.Event.GuildRemovedFromList.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHomeserver(value);
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
proto.protocol.core.v1.Event.GuildRemovedFromList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.GuildRemovedFromList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event.GuildRemovedFromList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.GuildRemovedFromList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getHomeserver();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.Event.GuildRemovedFromList.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.GuildRemovedFromList} returns this
 */
proto.protocol.core.v1.Event.GuildRemovedFromList.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string homeserver = 2;
 * @return {string}
 */
proto.protocol.core.v1.Event.GuildRemovedFromList.prototype.getHomeserver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.GuildRemovedFromList} returns this
 */
proto.protocol.core.v1.Event.GuildRemovedFromList.prototype.setHomeserver = function(value) {
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
proto.protocol.core.v1.Event.ActionPerformed.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Event.ActionPerformed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Event.ActionPerformed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.ActionPerformed.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    messageId: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    actionId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    actionData: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.protocol.core.v1.Event.ActionPerformed}
 */
proto.protocol.core.v1.Event.ActionPerformed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Event.ActionPerformed;
  return proto.protocol.core.v1.Event.ActionPerformed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Event.ActionPerformed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Event.ActionPerformed}
 */
proto.protocol.core.v1.Event.ActionPerformed.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionId(value);
      break;
    case 5:
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
proto.protocol.core.v1.Event.ActionPerformed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Event.ActionPerformed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Event.ActionPerformed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Event.ActionPerformed.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getActionId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getActionData();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.Event.ActionPerformed.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ActionPerformed} returns this
 */
proto.protocol.core.v1.Event.ActionPerformed.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.Event.ActionPerformed.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ActionPerformed} returns this
 */
proto.protocol.core.v1.Event.ActionPerformed.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 message_id = 3;
 * @return {string}
 */
proto.protocol.core.v1.Event.ActionPerformed.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ActionPerformed} returns this
 */
proto.protocol.core.v1.Event.ActionPerformed.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional string action_id = 4;
 * @return {string}
 */
proto.protocol.core.v1.Event.ActionPerformed.prototype.getActionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ActionPerformed} returns this
 */
proto.protocol.core.v1.Event.ActionPerformed.prototype.setActionId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string action_data = 5;
 * @return {string}
 */
proto.protocol.core.v1.Event.ActionPerformed.prototype.getActionData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Event.ActionPerformed} returns this
 */
proto.protocol.core.v1.Event.ActionPerformed.prototype.setActionData = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional GuildAddedToList guild_added_to_list = 1;
 * @return {?proto.protocol.core.v1.Event.GuildAddedToList}
 */
proto.protocol.core.v1.Event.prototype.getGuildAddedToList = function() {
  return /** @type{?proto.protocol.core.v1.Event.GuildAddedToList} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Event.GuildAddedToList, 1));
};


/**
 * @param {?proto.protocol.core.v1.Event.GuildAddedToList|undefined} value
 * @return {!proto.protocol.core.v1.Event} returns this
*/
proto.protocol.core.v1.Event.prototype.setGuildAddedToList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.protocol.core.v1.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event} returns this
 */
proto.protocol.core.v1.Event.prototype.clearGuildAddedToList = function() {
  return this.setGuildAddedToList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.prototype.hasGuildAddedToList = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GuildRemovedFromList guild_removed_from_list = 2;
 * @return {?proto.protocol.core.v1.Event.GuildRemovedFromList}
 */
proto.protocol.core.v1.Event.prototype.getGuildRemovedFromList = function() {
  return /** @type{?proto.protocol.core.v1.Event.GuildRemovedFromList} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Event.GuildRemovedFromList, 2));
};


/**
 * @param {?proto.protocol.core.v1.Event.GuildRemovedFromList|undefined} value
 * @return {!proto.protocol.core.v1.Event} returns this
*/
proto.protocol.core.v1.Event.prototype.setGuildRemovedFromList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.protocol.core.v1.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event} returns this
 */
proto.protocol.core.v1.Event.prototype.clearGuildRemovedFromList = function() {
  return this.setGuildRemovedFromList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.prototype.hasGuildRemovedFromList = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ActionPerformed action_performed = 3;
 * @return {?proto.protocol.core.v1.Event.ActionPerformed}
 */
proto.protocol.core.v1.Event.prototype.getActionPerformed = function() {
  return /** @type{?proto.protocol.core.v1.Event.ActionPerformed} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Event.ActionPerformed, 3));
};


/**
 * @param {?proto.protocol.core.v1.Event.ActionPerformed|undefined} value
 * @return {!proto.protocol.core.v1.Event} returns this
*/
proto.protocol.core.v1.Event.prototype.setActionPerformed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.protocol.core.v1.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event} returns this
 */
proto.protocol.core.v1.Event.prototype.clearActionPerformed = function() {
  return this.setActionPerformed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.prototype.hasActionPerformed = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MessageSent sent_message = 4;
 * @return {?proto.protocol.core.v1.Event.MessageSent}
 */
proto.protocol.core.v1.Event.prototype.getSentMessage = function() {
  return /** @type{?proto.protocol.core.v1.Event.MessageSent} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Event.MessageSent, 4));
};


/**
 * @param {?proto.protocol.core.v1.Event.MessageSent|undefined} value
 * @return {!proto.protocol.core.v1.Event} returns this
*/
proto.protocol.core.v1.Event.prototype.setSentMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.protocol.core.v1.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event} returns this
 */
proto.protocol.core.v1.Event.prototype.clearSentMessage = function() {
  return this.setSentMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.prototype.hasSentMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MessageUpdated edited_message = 5;
 * @return {?proto.protocol.core.v1.Event.MessageUpdated}
 */
proto.protocol.core.v1.Event.prototype.getEditedMessage = function() {
  return /** @type{?proto.protocol.core.v1.Event.MessageUpdated} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Event.MessageUpdated, 5));
};


/**
 * @param {?proto.protocol.core.v1.Event.MessageUpdated|undefined} value
 * @return {!proto.protocol.core.v1.Event} returns this
*/
proto.protocol.core.v1.Event.prototype.setEditedMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.protocol.core.v1.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event} returns this
 */
proto.protocol.core.v1.Event.prototype.clearEditedMessage = function() {
  return this.setEditedMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.prototype.hasEditedMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MessageDeleted deleted_message = 6;
 * @return {?proto.protocol.core.v1.Event.MessageDeleted}
 */
proto.protocol.core.v1.Event.prototype.getDeletedMessage = function() {
  return /** @type{?proto.protocol.core.v1.Event.MessageDeleted} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Event.MessageDeleted, 6));
};


/**
 * @param {?proto.protocol.core.v1.Event.MessageDeleted|undefined} value
 * @return {!proto.protocol.core.v1.Event} returns this
*/
proto.protocol.core.v1.Event.prototype.setDeletedMessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.protocol.core.v1.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event} returns this
 */
proto.protocol.core.v1.Event.prototype.clearDeletedMessage = function() {
  return this.setDeletedMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.prototype.hasDeletedMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ChannelCreated created_channel = 7;
 * @return {?proto.protocol.core.v1.Event.ChannelCreated}
 */
proto.protocol.core.v1.Event.prototype.getCreatedChannel = function() {
  return /** @type{?proto.protocol.core.v1.Event.ChannelCreated} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Event.ChannelCreated, 7));
};


/**
 * @param {?proto.protocol.core.v1.Event.ChannelCreated|undefined} value
 * @return {!proto.protocol.core.v1.Event} returns this
*/
proto.protocol.core.v1.Event.prototype.setCreatedChannel = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.protocol.core.v1.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event} returns this
 */
proto.protocol.core.v1.Event.prototype.clearCreatedChannel = function() {
  return this.setCreatedChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.prototype.hasCreatedChannel = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ChannelUpdated edited_channel = 8;
 * @return {?proto.protocol.core.v1.Event.ChannelUpdated}
 */
proto.protocol.core.v1.Event.prototype.getEditedChannel = function() {
  return /** @type{?proto.protocol.core.v1.Event.ChannelUpdated} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Event.ChannelUpdated, 8));
};


/**
 * @param {?proto.protocol.core.v1.Event.ChannelUpdated|undefined} value
 * @return {!proto.protocol.core.v1.Event} returns this
*/
proto.protocol.core.v1.Event.prototype.setEditedChannel = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.protocol.core.v1.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event} returns this
 */
proto.protocol.core.v1.Event.prototype.clearEditedChannel = function() {
  return this.setEditedChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.prototype.hasEditedChannel = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ChannelDeleted deleted_channel = 9;
 * @return {?proto.protocol.core.v1.Event.ChannelDeleted}
 */
proto.protocol.core.v1.Event.prototype.getDeletedChannel = function() {
  return /** @type{?proto.protocol.core.v1.Event.ChannelDeleted} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Event.ChannelDeleted, 9));
};


/**
 * @param {?proto.protocol.core.v1.Event.ChannelDeleted|undefined} value
 * @return {!proto.protocol.core.v1.Event} returns this
*/
proto.protocol.core.v1.Event.prototype.setDeletedChannel = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.protocol.core.v1.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event} returns this
 */
proto.protocol.core.v1.Event.prototype.clearDeletedChannel = function() {
  return this.setDeletedChannel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.prototype.hasDeletedChannel = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional GuildUpdated edited_guild = 10;
 * @return {?proto.protocol.core.v1.Event.GuildUpdated}
 */
proto.protocol.core.v1.Event.prototype.getEditedGuild = function() {
  return /** @type{?proto.protocol.core.v1.Event.GuildUpdated} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Event.GuildUpdated, 10));
};


/**
 * @param {?proto.protocol.core.v1.Event.GuildUpdated|undefined} value
 * @return {!proto.protocol.core.v1.Event} returns this
*/
proto.protocol.core.v1.Event.prototype.setEditedGuild = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.protocol.core.v1.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event} returns this
 */
proto.protocol.core.v1.Event.prototype.clearEditedGuild = function() {
  return this.setEditedGuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.prototype.hasEditedGuild = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional GuildDeleted deleted_guild = 11;
 * @return {?proto.protocol.core.v1.Event.GuildDeleted}
 */
proto.protocol.core.v1.Event.prototype.getDeletedGuild = function() {
  return /** @type{?proto.protocol.core.v1.Event.GuildDeleted} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Event.GuildDeleted, 11));
};


/**
 * @param {?proto.protocol.core.v1.Event.GuildDeleted|undefined} value
 * @return {!proto.protocol.core.v1.Event} returns this
*/
proto.protocol.core.v1.Event.prototype.setDeletedGuild = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.protocol.core.v1.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event} returns this
 */
proto.protocol.core.v1.Event.prototype.clearDeletedGuild = function() {
  return this.setDeletedGuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.prototype.hasDeletedGuild = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional MemberJoined joined_member = 12;
 * @return {?proto.protocol.core.v1.Event.MemberJoined}
 */
proto.protocol.core.v1.Event.prototype.getJoinedMember = function() {
  return /** @type{?proto.protocol.core.v1.Event.MemberJoined} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Event.MemberJoined, 12));
};


/**
 * @param {?proto.protocol.core.v1.Event.MemberJoined|undefined} value
 * @return {!proto.protocol.core.v1.Event} returns this
*/
proto.protocol.core.v1.Event.prototype.setJoinedMember = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.protocol.core.v1.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event} returns this
 */
proto.protocol.core.v1.Event.prototype.clearJoinedMember = function() {
  return this.setJoinedMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.prototype.hasJoinedMember = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional MemberLeft left_member = 13;
 * @return {?proto.protocol.core.v1.Event.MemberLeft}
 */
proto.protocol.core.v1.Event.prototype.getLeftMember = function() {
  return /** @type{?proto.protocol.core.v1.Event.MemberLeft} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Event.MemberLeft, 13));
};


/**
 * @param {?proto.protocol.core.v1.Event.MemberLeft|undefined} value
 * @return {!proto.protocol.core.v1.Event} returns this
*/
proto.protocol.core.v1.Event.prototype.setLeftMember = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.protocol.core.v1.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.Event} returns this
 */
proto.protocol.core.v1.Event.prototype.clearLeftMember = function() {
  return this.setLeftMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.Event.prototype.hasLeftMember = function() {
  return jspb.Message.getField(this, 13) != null;
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
proto.protocol.core.v1.JoinGuildResponse.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.JoinGuildResponse} returns this
 */
proto.protocol.core.v1.JoinGuildResponse.prototype.setGuildId = function(value) {
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
proto.protocol.core.v1.LeaveGuildRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.LeaveGuildRequest} returns this
 */
proto.protocol.core.v1.LeaveGuildRequest.prototype.setGuildId = function(value) {
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
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    messageId: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    actionId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    actionData: jspb.Message.getFieldWithDefault(msg, 5, "")
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
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionId(value);
      break;
    case 5:
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
  f = message.getActionId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getActionData();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.TriggerActionRequest} returns this
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.TriggerActionRequest} returns this
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 message_id = 3;
 * @return {string}
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.TriggerActionRequest} returns this
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional string action_id = 4;
 * @return {string}
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.getActionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.TriggerActionRequest} returns this
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.setActionId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string action_data = 5;
 * @return {string}
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.getActionData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.TriggerActionRequest} returns this
 */
proto.protocol.core.v1.TriggerActionRequest.prototype.setActionData = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.SendMessageRequest.repeatedFields_ = [4,5,6];



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
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.protocol.core.v1.Action.toObject, includeInstance),
    embedsList: jspb.Message.toObjectList(msg.getEmbedsList(),
    proto.protocol.core.v1.Embed.toObject, includeInstance),
    attachmentsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    inReplyTo: jspb.Message.getFieldWithDefault(msg, 7, 0),
    overrides: (f = msg.getOverrides()) && proto.protocol.core.v1.Override.toObject(includeInstance, f)
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
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setGuildId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setChannelId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = new proto.protocol.core.v1.Action;
      reader.readMessage(value,proto.protocol.core.v1.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 5:
      var value = new proto.protocol.core.v1.Embed;
      reader.readMessage(value,proto.protocol.core.v1.Embed.deserializeBinaryFromReader);
      msg.addEmbeds(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttachments(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setInReplyTo(value);
      break;
    case 8:
      var value = new proto.protocol.core.v1.Override;
      reader.readMessage(value,proto.protocol.core.v1.Override.deserializeBinaryFromReader);
      msg.setOverrides(value);
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
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.protocol.core.v1.Action.serializeBinaryToWriter
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
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getInReplyTo();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getOverrides();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.protocol.core.v1.Override.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
 */
proto.protocol.core.v1.SendMessageRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
 */
proto.protocol.core.v1.SendMessageRequest.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
 */
proto.protocol.core.v1.SendMessageRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Action actions = 4;
 * @return {!Array<!proto.protocol.core.v1.Action>}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Action, 4));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Action>} value
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
*/
proto.protocol.core.v1.SendMessageRequest.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.protocol.core.v1.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Action}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.protocol.core.v1.Action, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
 */
proto.protocol.core.v1.SendMessageRequest.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};


/**
 * repeated Embed embeds = 5;
 * @return {!Array<!proto.protocol.core.v1.Embed>}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.getEmbedsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Embed>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Embed, 5));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Embed>} value
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
*/
proto.protocol.core.v1.SendMessageRequest.prototype.setEmbedsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.protocol.core.v1.Embed=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Embed}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.addEmbeds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.protocol.core.v1.Embed, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
 */
proto.protocol.core.v1.SendMessageRequest.prototype.clearEmbedsList = function() {
  return this.setEmbedsList([]);
};


/**
 * repeated string attachments = 6;
 * @return {!Array<string>}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.getAttachmentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
 */
proto.protocol.core.v1.SendMessageRequest.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
 */
proto.protocol.core.v1.SendMessageRequest.prototype.addAttachments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
 */
proto.protocol.core.v1.SendMessageRequest.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * optional uint64 in_reply_to = 7;
 * @return {number}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.getInReplyTo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
 */
proto.protocol.core.v1.SendMessageRequest.prototype.setInReplyTo = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional Override overrides = 8;
 * @return {?proto.protocol.core.v1.Override}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.getOverrides = function() {
  return /** @type{?proto.protocol.core.v1.Override} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Override, 8));
};


/**
 * @param {?proto.protocol.core.v1.Override|undefined} value
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
*/
proto.protocol.core.v1.SendMessageRequest.prototype.setOverrides = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.SendMessageRequest} returns this
 */
proto.protocol.core.v1.SendMessageRequest.prototype.clearOverrides = function() {
  return this.setOverrides(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.SendMessageRequest.prototype.hasOverrides = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.protocol.core.v1.SendMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.SendMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.SendMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.SendMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageId: jspb.Message.getFieldWithDefault(msg, 1, "0")
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
 * @return {!proto.protocol.core.v1.SendMessageResponse}
 */
proto.protocol.core.v1.SendMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.SendMessageResponse;
  return proto.protocol.core.v1.SendMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.SendMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.SendMessageResponse}
 */
proto.protocol.core.v1.SendMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
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
proto.protocol.core.v1.SendMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.SendMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.SendMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.SendMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 message_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.SendMessageResponse.prototype.getMessageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.SendMessageResponse} returns this
 */
proto.protocol.core.v1.SendMessageResponse.prototype.setMessageId = function(value) {
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
proto.protocol.core.v1.AddGuildToGuildListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.AddGuildToGuildListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.AddGuildToGuildListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.AddGuildToGuildListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    homeserver: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.protocol.core.v1.AddGuildToGuildListRequest}
 */
proto.protocol.core.v1.AddGuildToGuildListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.AddGuildToGuildListRequest;
  return proto.protocol.core.v1.AddGuildToGuildListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.AddGuildToGuildListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.AddGuildToGuildListRequest}
 */
proto.protocol.core.v1.AddGuildToGuildListRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHomeserver(value);
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
proto.protocol.core.v1.AddGuildToGuildListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.AddGuildToGuildListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.AddGuildToGuildListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.AddGuildToGuildListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getHomeserver();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.AddGuildToGuildListRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.AddGuildToGuildListRequest} returns this
 */
proto.protocol.core.v1.AddGuildToGuildListRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string homeserver = 2;
 * @return {string}
 */
proto.protocol.core.v1.AddGuildToGuildListRequest.prototype.getHomeserver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.AddGuildToGuildListRequest} returns this
 */
proto.protocol.core.v1.AddGuildToGuildListRequest.prototype.setHomeserver = function(value) {
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
proto.protocol.core.v1.AddGuildToGuildListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.AddGuildToGuildListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.AddGuildToGuildListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.AddGuildToGuildListResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protocol.core.v1.AddGuildToGuildListResponse}
 */
proto.protocol.core.v1.AddGuildToGuildListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.AddGuildToGuildListResponse;
  return proto.protocol.core.v1.AddGuildToGuildListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.AddGuildToGuildListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.AddGuildToGuildListResponse}
 */
proto.protocol.core.v1.AddGuildToGuildListResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.AddGuildToGuildListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.AddGuildToGuildListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.AddGuildToGuildListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.AddGuildToGuildListResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.protocol.core.v1.RemoveGuildFromGuildListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.RemoveGuildFromGuildListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.RemoveGuildFromGuildListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.RemoveGuildFromGuildListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    homeserver: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.protocol.core.v1.RemoveGuildFromGuildListRequest}
 */
proto.protocol.core.v1.RemoveGuildFromGuildListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.RemoveGuildFromGuildListRequest;
  return proto.protocol.core.v1.RemoveGuildFromGuildListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.RemoveGuildFromGuildListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.RemoveGuildFromGuildListRequest}
 */
proto.protocol.core.v1.RemoveGuildFromGuildListRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHomeserver(value);
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
proto.protocol.core.v1.RemoveGuildFromGuildListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.RemoveGuildFromGuildListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.RemoveGuildFromGuildListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.RemoveGuildFromGuildListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getHomeserver();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.RemoveGuildFromGuildListRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.RemoveGuildFromGuildListRequest} returns this
 */
proto.protocol.core.v1.RemoveGuildFromGuildListRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string homeserver = 2;
 * @return {string}
 */
proto.protocol.core.v1.RemoveGuildFromGuildListRequest.prototype.getHomeserver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.RemoveGuildFromGuildListRequest} returns this
 */
proto.protocol.core.v1.RemoveGuildFromGuildListRequest.prototype.setHomeserver = function(value) {
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
proto.protocol.core.v1.RemoveGuildFromGuildListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.RemoveGuildFromGuildListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.RemoveGuildFromGuildListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.RemoveGuildFromGuildListResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protocol.core.v1.RemoveGuildFromGuildListResponse}
 */
proto.protocol.core.v1.RemoveGuildFromGuildListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.RemoveGuildFromGuildListResponse;
  return proto.protocol.core.v1.RemoveGuildFromGuildListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.RemoveGuildFromGuildListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.RemoveGuildFromGuildListResponse}
 */
proto.protocol.core.v1.RemoveGuildFromGuildListResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.RemoveGuildFromGuildListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.RemoveGuildFromGuildListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.RemoveGuildFromGuildListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.RemoveGuildFromGuildListResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.protocol.core.v1.QueryPermissionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.QueryPermissionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.QueryPermissionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.QueryPermissionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    checkFor: jspb.Message.getFieldWithDefault(msg, 3, ""),
    as: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.protocol.core.v1.QueryPermissionsRequest}
 */
proto.protocol.core.v1.QueryPermissionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.QueryPermissionsRequest;
  return proto.protocol.core.v1.QueryPermissionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.QueryPermissionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.QueryPermissionsRequest}
 */
proto.protocol.core.v1.QueryPermissionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setCheckFor(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAs(value);
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
proto.protocol.core.v1.QueryPermissionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.QueryPermissionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.QueryPermissionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.QueryPermissionsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCheckFor();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAs();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.QueryPermissionsRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.QueryPermissionsRequest} returns this
 */
proto.protocol.core.v1.QueryPermissionsRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.QueryPermissionsRequest.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.QueryPermissionsRequest} returns this
 */
proto.protocol.core.v1.QueryPermissionsRequest.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string check_for = 3;
 * @return {string}
 */
proto.protocol.core.v1.QueryPermissionsRequest.prototype.getCheckFor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.QueryPermissionsRequest} returns this
 */
proto.protocol.core.v1.QueryPermissionsRequest.prototype.setCheckFor = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 as = 4;
 * @return {number}
 */
proto.protocol.core.v1.QueryPermissionsRequest.prototype.getAs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.core.v1.QueryPermissionsRequest} returns this
 */
proto.protocol.core.v1.QueryPermissionsRequest.prototype.setAs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.protocol.core.v1.QueryPermissionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.QueryPermissionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.QueryPermissionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.QueryPermissionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.protocol.core.v1.QueryPermissionsResponse}
 */
proto.protocol.core.v1.QueryPermissionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.QueryPermissionsResponse;
  return proto.protocol.core.v1.QueryPermissionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.QueryPermissionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.QueryPermissionsResponse}
 */
proto.protocol.core.v1.QueryPermissionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOk(value);
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
proto.protocol.core.v1.QueryPermissionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.QueryPermissionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.QueryPermissionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.QueryPermissionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool ok = 1;
 * @return {boolean}
 */
proto.protocol.core.v1.QueryPermissionsResponse.prototype.getOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.QueryPermissionsResponse} returns this
 */
proto.protocol.core.v1.QueryPermissionsResponse.prototype.setOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.protocol.core.v1.Permission.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Permission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Permission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Permission.toObject = function(includeInstance, msg) {
  var f, obj = {
    matches: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mode: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.protocol.core.v1.Permission}
 */
proto.protocol.core.v1.Permission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Permission;
  return proto.protocol.core.v1.Permission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Permission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Permission}
 */
proto.protocol.core.v1.Permission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatches(value);
      break;
    case 2:
      var value = /** @type {!proto.protocol.core.v1.Permission.Mode} */ (reader.readEnum());
      msg.setMode(value);
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
proto.protocol.core.v1.Permission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Permission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Permission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Permission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatches();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.protocol.core.v1.Permission.Mode = {
  ALLOW: 0,
  DENY: 1
};

/**
 * optional string matches = 1;
 * @return {string}
 */
proto.protocol.core.v1.Permission.prototype.getMatches = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Permission} returns this
 */
proto.protocol.core.v1.Permission.prototype.setMatches = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Mode mode = 2;
 * @return {!proto.protocol.core.v1.Permission.Mode}
 */
proto.protocol.core.v1.Permission.prototype.getMode = function() {
  return /** @type {!proto.protocol.core.v1.Permission.Mode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.protocol.core.v1.Permission.Mode} value
 * @return {!proto.protocol.core.v1.Permission} returns this
 */
proto.protocol.core.v1.Permission.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.PermissionList.repeatedFields_ = [1];



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
proto.protocol.core.v1.PermissionList.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.PermissionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.PermissionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.PermissionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.protocol.core.v1.Permission.toObject, includeInstance)
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
 * @return {!proto.protocol.core.v1.PermissionList}
 */
proto.protocol.core.v1.PermissionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.PermissionList;
  return proto.protocol.core.v1.PermissionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.PermissionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.PermissionList}
 */
proto.protocol.core.v1.PermissionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Permission;
      reader.readMessage(value,proto.protocol.core.v1.Permission.deserializeBinaryFromReader);
      msg.addPermissions(value);
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
proto.protocol.core.v1.PermissionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.PermissionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.PermissionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.PermissionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.core.v1.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Permission permissions = 1;
 * @return {!Array<!proto.protocol.core.v1.Permission>}
 */
proto.protocol.core.v1.PermissionList.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Permission, 1));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Permission>} value
 * @return {!proto.protocol.core.v1.PermissionList} returns this
*/
proto.protocol.core.v1.PermissionList.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.core.v1.Permission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Permission}
 */
proto.protocol.core.v1.PermissionList.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.core.v1.Permission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.PermissionList} returns this
 */
proto.protocol.core.v1.PermissionList.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
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
proto.protocol.core.v1.SetPermissionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.SetPermissionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.SetPermissionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.SetPermissionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    roleId: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    perms: (f = msg.getPerms()) && proto.protocol.core.v1.PermissionList.toObject(includeInstance, f)
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
 * @return {!proto.protocol.core.v1.SetPermissionsRequest}
 */
proto.protocol.core.v1.SetPermissionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.SetPermissionsRequest;
  return proto.protocol.core.v1.SetPermissionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.SetPermissionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.SetPermissionsRequest}
 */
proto.protocol.core.v1.SetPermissionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRoleId(value);
      break;
    case 4:
      var value = new proto.protocol.core.v1.PermissionList;
      reader.readMessage(value,proto.protocol.core.v1.PermissionList.deserializeBinaryFromReader);
      msg.setPerms(value);
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
proto.protocol.core.v1.SetPermissionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.SetPermissionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.SetPermissionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.SetPermissionsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRoleId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      3,
      f
    );
  }
  f = message.getPerms();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.protocol.core.v1.PermissionList.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.SetPermissionsRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.SetPermissionsRequest} returns this
 */
proto.protocol.core.v1.SetPermissionsRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.SetPermissionsRequest.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.SetPermissionsRequest} returns this
 */
proto.protocol.core.v1.SetPermissionsRequest.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 role_id = 3;
 * @return {string}
 */
proto.protocol.core.v1.SetPermissionsRequest.prototype.getRoleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.SetPermissionsRequest} returns this
 */
proto.protocol.core.v1.SetPermissionsRequest.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional PermissionList perms = 4;
 * @return {?proto.protocol.core.v1.PermissionList}
 */
proto.protocol.core.v1.SetPermissionsRequest.prototype.getPerms = function() {
  return /** @type{?proto.protocol.core.v1.PermissionList} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.PermissionList, 4));
};


/**
 * @param {?proto.protocol.core.v1.PermissionList|undefined} value
 * @return {!proto.protocol.core.v1.SetPermissionsRequest} returns this
*/
proto.protocol.core.v1.SetPermissionsRequest.prototype.setPerms = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.SetPermissionsRequest} returns this
 */
proto.protocol.core.v1.SetPermissionsRequest.prototype.clearPerms = function() {
  return this.setPerms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.SetPermissionsRequest.prototype.hasPerms = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.protocol.core.v1.GetPermissionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetPermissionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetPermissionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetPermissionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    channelId: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    roleId: jspb.Message.getFieldWithDefault(msg, 3, "0")
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
 * @return {!proto.protocol.core.v1.GetPermissionsRequest}
 */
proto.protocol.core.v1.GetPermissionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetPermissionsRequest;
  return proto.protocol.core.v1.GetPermissionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetPermissionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetPermissionsRequest}
 */
proto.protocol.core.v1.GetPermissionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setRoleId(value);
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
proto.protocol.core.v1.GetPermissionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetPermissionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetPermissionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetPermissionsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRoleId();
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
proto.protocol.core.v1.GetPermissionsRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetPermissionsRequest} returns this
 */
proto.protocol.core.v1.GetPermissionsRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional uint64 channel_id = 2;
 * @return {string}
 */
proto.protocol.core.v1.GetPermissionsRequest.prototype.getChannelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetPermissionsRequest} returns this
 */
proto.protocol.core.v1.GetPermissionsRequest.prototype.setChannelId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional uint64 role_id = 3;
 * @return {string}
 */
proto.protocol.core.v1.GetPermissionsRequest.prototype.getRoleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetPermissionsRequest} returns this
 */
proto.protocol.core.v1.GetPermissionsRequest.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
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
proto.protocol.core.v1.GetPermissionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetPermissionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetPermissionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetPermissionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    perms: (f = msg.getPerms()) && proto.protocol.core.v1.PermissionList.toObject(includeInstance, f)
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
 * @return {!proto.protocol.core.v1.GetPermissionsResponse}
 */
proto.protocol.core.v1.GetPermissionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetPermissionsResponse;
  return proto.protocol.core.v1.GetPermissionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetPermissionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetPermissionsResponse}
 */
proto.protocol.core.v1.GetPermissionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.PermissionList;
      reader.readMessage(value,proto.protocol.core.v1.PermissionList.deserializeBinaryFromReader);
      msg.setPerms(value);
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
proto.protocol.core.v1.GetPermissionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetPermissionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetPermissionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetPermissionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPerms();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.protocol.core.v1.PermissionList.serializeBinaryToWriter
    );
  }
};


/**
 * optional PermissionList perms = 1;
 * @return {?proto.protocol.core.v1.PermissionList}
 */
proto.protocol.core.v1.GetPermissionsResponse.prototype.getPerms = function() {
  return /** @type{?proto.protocol.core.v1.PermissionList} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.PermissionList, 1));
};


/**
 * @param {?proto.protocol.core.v1.PermissionList|undefined} value
 * @return {!proto.protocol.core.v1.GetPermissionsResponse} returns this
*/
proto.protocol.core.v1.GetPermissionsResponse.prototype.setPerms = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.GetPermissionsResponse} returns this
 */
proto.protocol.core.v1.GetPermissionsResponse.prototype.clearPerms = function() {
  return this.setPerms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.GetPermissionsResponse.prototype.hasPerms = function() {
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
proto.protocol.core.v1.Role.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.Role.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.Role} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Role.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    color: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hoist: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    pingable: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.protocol.core.v1.Role}
 */
proto.protocol.core.v1.Role.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.Role;
  return proto.protocol.core.v1.Role.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.Role} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.Role}
 */
proto.protocol.core.v1.Role.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setRoleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setColor(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHoist(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPingable(value);
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
proto.protocol.core.v1.Role.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.Role.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.Role} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.Role.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColor();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getHoist();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPingable();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional uint64 role_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.Role.prototype.getRoleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Role} returns this
 */
proto.protocol.core.v1.Role.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.protocol.core.v1.Role.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.Role} returns this
 */
proto.protocol.core.v1.Role.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 color = 3;
 * @return {number}
 */
proto.protocol.core.v1.Role.prototype.getColor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.core.v1.Role} returns this
 */
proto.protocol.core.v1.Role.prototype.setColor = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool hoist = 4;
 * @return {boolean}
 */
proto.protocol.core.v1.Role.prototype.getHoist = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.Role} returns this
 */
proto.protocol.core.v1.Role.prototype.setHoist = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool pingable = 5;
 * @return {boolean}
 */
proto.protocol.core.v1.Role.prototype.getPingable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.core.v1.Role} returns this
 */
proto.protocol.core.v1.Role.prototype.setPingable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.protocol.core.v1.GetGuildRolesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildRolesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildRolesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildRolesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.protocol.core.v1.GetGuildRolesRequest}
 */
proto.protocol.core.v1.GetGuildRolesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildRolesRequest;
  return proto.protocol.core.v1.GetGuildRolesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildRolesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildRolesRequest}
 */
proto.protocol.core.v1.GetGuildRolesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.protocol.core.v1.GetGuildRolesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildRolesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildRolesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildRolesRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.protocol.core.v1.GetGuildRolesRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.GetGuildRolesRequest} returns this
 */
proto.protocol.core.v1.GetGuildRolesRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.GetGuildRolesResponse.repeatedFields_ = [1];



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
proto.protocol.core.v1.GetGuildRolesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetGuildRolesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetGuildRolesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildRolesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: jspb.Message.toObjectList(msg.getRolesList(),
    proto.protocol.core.v1.Role.toObject, includeInstance)
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
 * @return {!proto.protocol.core.v1.GetGuildRolesResponse}
 */
proto.protocol.core.v1.GetGuildRolesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetGuildRolesResponse;
  return proto.protocol.core.v1.GetGuildRolesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetGuildRolesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetGuildRolesResponse}
 */
proto.protocol.core.v1.GetGuildRolesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.protocol.core.v1.Role;
      reader.readMessage(value,proto.protocol.core.v1.Role.deserializeBinaryFromReader);
      msg.addRoles(value);
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
proto.protocol.core.v1.GetGuildRolesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetGuildRolesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetGuildRolesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetGuildRolesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.protocol.core.v1.Role.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Role roles = 1;
 * @return {!Array<!proto.protocol.core.v1.Role>}
 */
proto.protocol.core.v1.GetGuildRolesResponse.prototype.getRolesList = function() {
  return /** @type{!Array<!proto.protocol.core.v1.Role>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocol.core.v1.Role, 1));
};


/**
 * @param {!Array<!proto.protocol.core.v1.Role>} value
 * @return {!proto.protocol.core.v1.GetGuildRolesResponse} returns this
*/
proto.protocol.core.v1.GetGuildRolesResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.protocol.core.v1.Role=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.Role}
 */
proto.protocol.core.v1.GetGuildRolesResponse.prototype.addRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.protocol.core.v1.Role, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.GetGuildRolesResponse} returns this
 */
proto.protocol.core.v1.GetGuildRolesResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
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
proto.protocol.core.v1.AddGuildRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.AddGuildRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.AddGuildRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.AddGuildRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    role: (f = msg.getRole()) && proto.protocol.core.v1.Role.toObject(includeInstance, f)
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
 * @return {!proto.protocol.core.v1.AddGuildRoleRequest}
 */
proto.protocol.core.v1.AddGuildRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.AddGuildRoleRequest;
  return proto.protocol.core.v1.AddGuildRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.AddGuildRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.AddGuildRoleRequest}
 */
proto.protocol.core.v1.AddGuildRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.protocol.core.v1.Role;
      reader.readMessage(value,proto.protocol.core.v1.Role.deserializeBinaryFromReader);
      msg.setRole(value);
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
proto.protocol.core.v1.AddGuildRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.AddGuildRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.AddGuildRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.AddGuildRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
  f = message.getRole();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.protocol.core.v1.Role.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.AddGuildRoleRequest.prototype.getGuildId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.AddGuildRoleRequest} returns this
 */
proto.protocol.core.v1.AddGuildRoleRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional Role role = 2;
 * @return {?proto.protocol.core.v1.Role}
 */
proto.protocol.core.v1.AddGuildRoleRequest.prototype.getRole = function() {
  return /** @type{?proto.protocol.core.v1.Role} */ (
    jspb.Message.getWrapperField(this, proto.protocol.core.v1.Role, 2));
};


/**
 * @param {?proto.protocol.core.v1.Role|undefined} value
 * @return {!proto.protocol.core.v1.AddGuildRoleRequest} returns this
*/
proto.protocol.core.v1.AddGuildRoleRequest.prototype.setRole = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.core.v1.AddGuildRoleRequest} returns this
 */
proto.protocol.core.v1.AddGuildRoleRequest.prototype.clearRole = function() {
  return this.setRole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.core.v1.AddGuildRoleRequest.prototype.hasRole = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.protocol.core.v1.AddGuildRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.AddGuildRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.AddGuildRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.AddGuildRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleId: jspb.Message.getFieldWithDefault(msg, 1, "0")
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
 * @return {!proto.protocol.core.v1.AddGuildRoleResponse}
 */
proto.protocol.core.v1.AddGuildRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.AddGuildRoleResponse;
  return proto.protocol.core.v1.AddGuildRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.AddGuildRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.AddGuildRoleResponse}
 */
proto.protocol.core.v1.AddGuildRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setRoleId(value);
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
proto.protocol.core.v1.AddGuildRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.AddGuildRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.AddGuildRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.AddGuildRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 role_id = 1;
 * @return {string}
 */
proto.protocol.core.v1.AddGuildRoleResponse.prototype.getRoleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.protocol.core.v1.AddGuildRoleResponse} returns this
 */
proto.protocol.core.v1.AddGuildRoleResponse.prototype.setRoleId = function(value) {
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
proto.protocol.core.v1.DeleteGuildRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.DeleteGuildRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.DeleteGuildRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteGuildRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roleId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.protocol.core.v1.DeleteGuildRoleRequest}
 */
proto.protocol.core.v1.DeleteGuildRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.DeleteGuildRoleRequest;
  return proto.protocol.core.v1.DeleteGuildRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.DeleteGuildRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.DeleteGuildRoleRequest}
 */
proto.protocol.core.v1.DeleteGuildRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGuildId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRoleId(value);
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
proto.protocol.core.v1.DeleteGuildRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.DeleteGuildRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.DeleteGuildRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.DeleteGuildRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRoleId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {number}
 */
proto.protocol.core.v1.DeleteGuildRoleRequest.prototype.getGuildId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.core.v1.DeleteGuildRoleRequest} returns this
 */
proto.protocol.core.v1.DeleteGuildRoleRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 role_id = 2;
 * @return {number}
 */
proto.protocol.core.v1.DeleteGuildRoleRequest.prototype.getRoleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.core.v1.DeleteGuildRoleRequest} returns this
 */
proto.protocol.core.v1.DeleteGuildRoleRequest.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.ManageUserRolesRequest.repeatedFields_ = [3,4];



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
proto.protocol.core.v1.ManageUserRolesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.ManageUserRolesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.ManageUserRolesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.ManageUserRolesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    giveRoleIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    takeRoleIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.protocol.core.v1.ManageUserRolesRequest}
 */
proto.protocol.core.v1.ManageUserRolesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.ManageUserRolesRequest;
  return proto.protocol.core.v1.ManageUserRolesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.ManageUserRolesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.ManageUserRolesRequest}
 */
proto.protocol.core.v1.ManageUserRolesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGuildId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setGiveRoleIdsList(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setTakeRoleIdsList(value);
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
proto.protocol.core.v1.ManageUserRolesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.ManageUserRolesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.ManageUserRolesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.ManageUserRolesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getGiveRoleIdsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      3,
      f
    );
  }
  f = message.getTakeRoleIdsList();
  if (f.length > 0) {
    writer.writePackedUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {number}
 */
proto.protocol.core.v1.ManageUserRolesRequest.prototype.getGuildId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.core.v1.ManageUserRolesRequest} returns this
 */
proto.protocol.core.v1.ManageUserRolesRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 user_id = 2;
 * @return {number}
 */
proto.protocol.core.v1.ManageUserRolesRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.core.v1.ManageUserRolesRequest} returns this
 */
proto.protocol.core.v1.ManageUserRolesRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated uint64 give_role_ids = 3;
 * @return {!Array<number>}
 */
proto.protocol.core.v1.ManageUserRolesRequest.prototype.getGiveRoleIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protocol.core.v1.ManageUserRolesRequest} returns this
 */
proto.protocol.core.v1.ManageUserRolesRequest.prototype.setGiveRoleIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.ManageUserRolesRequest} returns this
 */
proto.protocol.core.v1.ManageUserRolesRequest.prototype.addGiveRoleIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.ManageUserRolesRequest} returns this
 */
proto.protocol.core.v1.ManageUserRolesRequest.prototype.clearGiveRoleIdsList = function() {
  return this.setGiveRoleIdsList([]);
};


/**
 * repeated uint64 take_role_ids = 4;
 * @return {!Array<number>}
 */
proto.protocol.core.v1.ManageUserRolesRequest.prototype.getTakeRoleIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protocol.core.v1.ManageUserRolesRequest} returns this
 */
proto.protocol.core.v1.ManageUserRolesRequest.prototype.setTakeRoleIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.ManageUserRolesRequest} returns this
 */
proto.protocol.core.v1.ManageUserRolesRequest.prototype.addTakeRoleIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.ManageUserRolesRequest} returns this
 */
proto.protocol.core.v1.ManageUserRolesRequest.prototype.clearTakeRoleIdsList = function() {
  return this.setTakeRoleIdsList([]);
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
proto.protocol.core.v1.GetUserRolesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetUserRolesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetUserRolesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetUserRolesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    guildId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.protocol.core.v1.GetUserRolesRequest}
 */
proto.protocol.core.v1.GetUserRolesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetUserRolesRequest;
  return proto.protocol.core.v1.GetUserRolesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetUserRolesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetUserRolesRequest}
 */
proto.protocol.core.v1.GetUserRolesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGuildId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserId(value);
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
proto.protocol.core.v1.GetUserRolesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetUserRolesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetUserRolesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetUserRolesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuildId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 guild_id = 1;
 * @return {number}
 */
proto.protocol.core.v1.GetUserRolesRequest.prototype.getGuildId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.core.v1.GetUserRolesRequest} returns this
 */
proto.protocol.core.v1.GetUserRolesRequest.prototype.setGuildId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 user_id = 2;
 * @return {number}
 */
proto.protocol.core.v1.GetUserRolesRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.core.v1.GetUserRolesRequest} returns this
 */
proto.protocol.core.v1.GetUserRolesRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.core.v1.GetUserRolesResponse.repeatedFields_ = [1];



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
proto.protocol.core.v1.GetUserRolesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.core.v1.GetUserRolesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.core.v1.GetUserRolesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetUserRolesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.protocol.core.v1.GetUserRolesResponse}
 */
proto.protocol.core.v1.GetUserRolesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.core.v1.GetUserRolesResponse;
  return proto.protocol.core.v1.GetUserRolesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.core.v1.GetUserRolesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.core.v1.GetUserRolesResponse}
 */
proto.protocol.core.v1.GetUserRolesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setRolesList(value);
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
proto.protocol.core.v1.GetUserRolesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.core.v1.GetUserRolesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.core.v1.GetUserRolesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.core.v1.GetUserRolesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
};


/**
 * repeated uint64 roles = 1;
 * @return {!Array<number>}
 */
proto.protocol.core.v1.GetUserRolesResponse.prototype.getRolesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protocol.core.v1.GetUserRolesResponse} returns this
 */
proto.protocol.core.v1.GetUserRolesResponse.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protocol.core.v1.GetUserRolesResponse} returns this
 */
proto.protocol.core.v1.GetUserRolesResponse.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.core.v1.GetUserRolesResponse} returns this
 */
proto.protocol.core.v1.GetUserRolesResponse.prototype.clearRolesList = function() {
  return this.setRolesList([]);
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
  LARGEENTRY: 4
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
