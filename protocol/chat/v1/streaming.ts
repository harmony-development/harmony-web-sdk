// @generated by protobuf-ts 1.0.12 with parameters long_type_string,optimize_code_size,generate_dependencies
// @generated from protobuf file "chat/v1/streaming.proto" (package "protocol.chat.v1", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { UserStatus } from "../../harmonytypes/v1/types";
import { Metadata } from "../../harmonytypes/v1/types";
import { Override } from "../../harmonytypes/v1/types";
import { Attachment } from "../../harmonytypes/v1/types";
import { Action } from "../../harmonytypes/v1/types";
import { Embed } from "../../harmonytypes/v1/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Message } from "../../harmonytypes/v1/types";
/**
 * @generated from protobuf message protocol.chat.v1.StreamEventsRequest
 */
export interface StreamEventsRequest {
  /**
   * @generated from protobuf oneof: request
   */
  request:
    | {
        oneofKind: "subscribeToGuild";
        /**
         * @generated from protobuf field: protocol.chat.v1.StreamEventsRequest.SubscribeToGuild subscribe_to_guild = 1;
         */
        subscribeToGuild: StreamEventsRequest_SubscribeToGuild;
      }
    | {
        oneofKind: "subscribeToActions";
        /**
         * @generated from protobuf field: protocol.chat.v1.StreamEventsRequest.SubscribeToActions subscribe_to_actions = 2;
         */
        subscribeToActions: StreamEventsRequest_SubscribeToActions;
      }
    | {
        oneofKind: "subscribeToHomeserverEvents";
        /**
         * @generated from protobuf field: protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents subscribe_to_homeserver_events = 3;
         */
        subscribeToHomeserverEvents: StreamEventsRequest_SubscribeToHomeserverEvents;
      }
    | {
        oneofKind: undefined;
      };
}
/**
 * @generated from protobuf message protocol.chat.v1.StreamEventsRequest.SubscribeToGuild
 */
export interface StreamEventsRequest_SubscribeToGuild {
  /**
   * @generated from protobuf field: uint64 guild_id = 1;
   */
  guildId: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.StreamEventsRequest.SubscribeToActions
 */
export interface StreamEventsRequest_SubscribeToActions {}
/**
 * @generated from protobuf message protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents
 */
export interface StreamEventsRequest_SubscribeToHomeserverEvents {}
/**
 * @generated from protobuf message protocol.chat.v1.Event
 */
export interface Event {
  /**
   * @generated from protobuf oneof: event
   */
  event:
    | {
        oneofKind: "guildAddedToList";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.GuildAddedToList guild_added_to_list = 1;
         */
        guildAddedToList: Event_GuildAddedToList;
      }
    | {
        oneofKind: "guildRemovedFromList";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.GuildRemovedFromList guild_removed_from_list = 2;
         */
        guildRemovedFromList: Event_GuildRemovedFromList;
      }
    | {
        oneofKind: "actionPerformed";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.ActionPerformed action_performed = 3;
         */
        actionPerformed: Event_ActionPerformed;
      }
    | {
        oneofKind: "sentMessage";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.MessageSent sent_message = 4;
         */
        sentMessage: Event_MessageSent;
      }
    | {
        oneofKind: "editedMessage";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.MessageUpdated edited_message = 5;
         */
        editedMessage: Event_MessageUpdated;
      }
    | {
        oneofKind: "deletedMessage";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.MessageDeleted deleted_message = 6;
         */
        deletedMessage: Event_MessageDeleted;
      }
    | {
        oneofKind: "createdChannel";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.ChannelCreated created_channel = 7;
         */
        createdChannel: Event_ChannelCreated;
      }
    | {
        oneofKind: "editedChannel";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.ChannelUpdated edited_channel = 8;
         */
        editedChannel: Event_ChannelUpdated;
      }
    | {
        oneofKind: "deletedChannel";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.ChannelDeleted deleted_channel = 9;
         */
        deletedChannel: Event_ChannelDeleted;
      }
    | {
        oneofKind: "editedGuild";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.GuildUpdated edited_guild = 10;
         */
        editedGuild: Event_GuildUpdated;
      }
    | {
        oneofKind: "deletedGuild";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.GuildDeleted deleted_guild = 11;
         */
        deletedGuild: Event_GuildDeleted;
      }
    | {
        oneofKind: "joinedMember";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.MemberJoined joined_member = 12;
         */
        joinedMember: Event_MemberJoined;
      }
    | {
        oneofKind: "leftMember";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.MemberLeft left_member = 13;
         */
        leftMember: Event_MemberLeft;
      }
    | {
        oneofKind: "roleMoved";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.RoleMoved role_moved = 14;
         */
        roleMoved: Event_RoleMoved;
      }
    | {
        oneofKind: "profileUpdated";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.ProfileUpdated profile_updated = 15;
         */
        profileUpdated: Event_ProfileUpdated;
      }
    | {
        oneofKind: "typing";
        /**
         * @generated from protobuf field: protocol.chat.v1.Event.Typing typing = 16;
         */
        typing: Event_Typing;
      }
    | {
        oneofKind: undefined;
      };
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.MessageSent
 */
export interface Event_MessageSent {
  /**
   * @generated from protobuf field: uint64 echo_id = 1;
   */
  echoId: string;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Message message = 2;
   */
  message?: Message;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.MessageUpdated
 */
export interface Event_MessageUpdated {
  /**
   * @generated from protobuf field: uint64 guild_id = 1;
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 2;
   */
  channelId: string;
  /**
   * @generated from protobuf field: uint64 message_id = 3;
   */
  messageId: string;
  /**
   * @generated from protobuf field: google.protobuf.Timestamp edited_at = 4;
   */
  editedAt?: Timestamp;
  /**
   * @generated from protobuf field: string content = 5;
   */
  content: string;
  /**
   * @generated from protobuf field: bool update_content = 6;
   */
  updateContent: boolean;
  /**
   * @generated from protobuf field: repeated protocol.harmonytypes.v1.Embed embeds = 7;
   */
  embeds: Embed[];
  /**
   * @generated from protobuf field: bool update_embeds = 8;
   */
  updateEmbeds: boolean;
  /**
   * @generated from protobuf field: repeated protocol.harmonytypes.v1.Action actions = 9;
   */
  actions: Action[];
  /**
   * @generated from protobuf field: bool update_actions = 10;
   */
  updateActions: boolean;
  /**
   * @generated from protobuf field: repeated protocol.harmonytypes.v1.Attachment attachments = 11;
   */
  attachments: Attachment[];
  /**
   * @generated from protobuf field: bool update_attachments = 12;
   */
  updateAttachments: boolean;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Override overrides = 13;
   */
  overrides?: Override;
  /**
   * @generated from protobuf field: bool update_overrides = 14;
   */
  updateOverrides: boolean;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Metadata metadata = 15;
   */
  metadata?: Metadata;
  /**
   * @generated from protobuf field: bool update_metadata = 16;
   */
  updateMetadata: boolean;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.MessageDeleted
 */
export interface Event_MessageDeleted {
  /**
   * @generated from protobuf field: uint64 guild_id = 1;
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 2;
   */
  channelId: string;
  /**
   * @generated from protobuf field: uint64 message_id = 3;
   */
  messageId: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.ChannelCreated
 */
export interface Event_ChannelCreated {
  /**
   * @generated from protobuf field: uint64 guild_id = 1;
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 2;
   */
  channelId: string;
  /**
   * @generated from protobuf field: string name = 3;
   */
  name: string;
  /**
   * @generated from protobuf field: uint64 previous_id = 4;
   */
  previousId: string;
  /**
   * @generated from protobuf field: uint64 next_id = 5;
   */
  nextId: string;
  /**
   * @generated from protobuf field: bool is_category = 6;
   */
  isCategory: boolean;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Metadata metadata = 7;
   */
  metadata?: Metadata;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.ChannelUpdated
 */
export interface Event_ChannelUpdated {
  /**
   * @generated from protobuf field: uint64 guild_id = 1;
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 2;
   */
  channelId: string;
  /**
   * @generated from protobuf field: string name = 3;
   */
  name: string;
  /**
   * @generated from protobuf field: bool update_name = 4;
   */
  updateName: boolean;
  /**
   * @generated from protobuf field: uint64 previous_id = 5;
   */
  previousId: string;
  /**
   * @generated from protobuf field: uint64 next_id = 6;
   */
  nextId: string;
  /**
   * @generated from protobuf field: bool update_order = 7;
   */
  updateOrder: boolean;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Metadata metadata = 8;
   */
  metadata?: Metadata;
  /**
   * @generated from protobuf field: bool update_metadata = 9;
   */
  updateMetadata: boolean;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.ChannelDeleted
 */
export interface Event_ChannelDeleted {
  /**
   * @generated from protobuf field: uint64 guild_id = 1;
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 2;
   */
  channelId: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.GuildUpdated
 */
export interface Event_GuildUpdated {
  /**
   * @generated from protobuf field: uint64 guild_id = 1;
   */
  guildId: string;
  /**
   * @generated from protobuf field: string name = 2;
   */
  name: string;
  /**
   * @generated from protobuf field: bool update_name = 3;
   */
  updateName: boolean;
  /**
   * @generated from protobuf field: string picture = 4;
   */
  picture: string;
  /**
   * @generated from protobuf field: bool update_picture = 5;
   */
  updatePicture: boolean;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Metadata metadata = 6;
   */
  metadata?: Metadata;
  /**
   * @generated from protobuf field: bool update_metadata = 7;
   */
  updateMetadata: boolean;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.GuildDeleted
 */
export interface Event_GuildDeleted {
  /**
   * @generated from protobuf field: uint64 guild_id = 1;
   */
  guildId: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.MemberJoined
 */
export interface Event_MemberJoined {
  /**
   * @generated from protobuf field: uint64 member_id = 1;
   */
  memberId: string;
  /**
   * @generated from protobuf field: uint64 guild_id = 2;
   */
  guildId: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.MemberLeft
 */
export interface Event_MemberLeft {
  /**
   * @generated from protobuf field: uint64 member_id = 1;
   */
  memberId: string;
  /**
   * @generated from protobuf field: uint64 guild_id = 2;
   */
  guildId: string;
  /**
   * @generated from protobuf field: protocol.chat.v1.Event.LeaveReason leave_reason = 3;
   */
  leaveReason: Event_LeaveReason;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.GuildAddedToList
 */
export interface Event_GuildAddedToList {
  /**
   * @generated from protobuf field: uint64 guild_id = 1;
   */
  guildId: string;
  /**
   * @generated from protobuf field: string homeserver = 2;
   */
  homeserver: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.GuildRemovedFromList
 */
export interface Event_GuildRemovedFromList {
  /**
   * @generated from protobuf field: uint64 guild_id = 1;
   */
  guildId: string;
  /**
   * @generated from protobuf field: string homeserver = 2;
   */
  homeserver: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.ActionPerformed
 */
export interface Event_ActionPerformed {
  /**
   * @generated from protobuf field: uint64 guild_id = 1;
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 2;
   */
  channelId: string;
  /**
   * @generated from protobuf field: uint64 message_id = 3;
   */
  messageId: string;
  /**
   * @generated from protobuf field: string action_id = 4;
   */
  actionId: string;
  /**
   * @generated from protobuf field: string action_data = 5;
   */
  actionData: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.RoleMoved
 */
export interface Event_RoleMoved {
  /**
   * @generated from protobuf field: uint64 guild_id = 1;
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 role_id = 2;
   */
  roleId: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.ProfileUpdated
 */
export interface Event_ProfileUpdated {
  /**
   * @generated from protobuf field: uint64 user_id = 1;
   */
  userId: string;
  /**
   * @generated from protobuf field: string new_username = 2;
   */
  newUsername: string;
  /**
   * @generated from protobuf field: bool update_username = 3;
   */
  updateUsername: boolean;
  /**
   * @generated from protobuf field: string new_avatar = 4;
   */
  newAvatar: string;
  /**
   * @generated from protobuf field: bool update_avatar = 5;
   */
  updateAvatar: boolean;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.UserStatus new_status = 6;
   */
  newStatus: UserStatus;
  /**
   * @generated from protobuf field: bool update_status = 7;
   */
  updateStatus: boolean;
  /**
   * @generated from protobuf field: bool is_bot = 8;
   */
  isBot: boolean;
  /**
   * @generated from protobuf field: bool update_is_bot = 9;
   */
  updateIsBot: boolean;
}
/**
 * @generated from protobuf message protocol.chat.v1.Event.Typing
 */
export interface Event_Typing {
  /**
   * @generated from protobuf field: uint64 user_id = 1;
   */
  userId: string;
  /**
   * @generated from protobuf field: uint64 guild_id = 2;
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 3;
   */
  channelId: string;
}
/**
 * @generated from protobuf enum protocol.chat.v1.Event.LeaveReason
 */
export enum Event_LeaveReason {
  /**
   * @generated from protobuf enum value: willingly = 0;
   */
  willingly = 0,
  /**
   * @generated from protobuf enum value: banned = 1;
   */
  banned = 1,
  /**
   * @generated from protobuf enum value: kicked = 2;
   */
  kicked = 2,
}
/**
 * Type for protobuf message protocol.chat.v1.StreamEventsRequest
 */
class StreamEventsRequest$Type extends MessageType<StreamEventsRequest> {
  constructor() {
    super("protocol.chat.v1.StreamEventsRequest", [
      {
        no: 1,
        name: "subscribe_to_guild",
        kind: "message",
        oneof: "request",
        T: () => StreamEventsRequest_SubscribeToGuild,
      },
      {
        no: 2,
        name: "subscribe_to_actions",
        kind: "message",
        oneof: "request",
        T: () => StreamEventsRequest_SubscribeToActions,
      },
      {
        no: 3,
        name: "subscribe_to_homeserver_events",
        kind: "message",
        oneof: "request",
        T: () => StreamEventsRequest_SubscribeToHomeserverEvents,
      },
    ]);
  }
}
export const StreamEventsRequest = new StreamEventsRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.StreamEventsRequest.SubscribeToGuild
 */
class StreamEventsRequest_SubscribeToGuild$Type extends MessageType<StreamEventsRequest_SubscribeToGuild> {
  constructor() {
    super("protocol.chat.v1.StreamEventsRequest.SubscribeToGuild", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const StreamEventsRequest_SubscribeToGuild = new StreamEventsRequest_SubscribeToGuild$Type();
/**
 * Type for protobuf message protocol.chat.v1.StreamEventsRequest.SubscribeToActions
 */
class StreamEventsRequest_SubscribeToActions$Type extends MessageType<StreamEventsRequest_SubscribeToActions> {
  constructor() {
    super("protocol.chat.v1.StreamEventsRequest.SubscribeToActions", []);
  }
}
export const StreamEventsRequest_SubscribeToActions = new StreamEventsRequest_SubscribeToActions$Type();
/**
 * Type for protobuf message protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents
 */
class StreamEventsRequest_SubscribeToHomeserverEvents$Type extends MessageType<StreamEventsRequest_SubscribeToHomeserverEvents> {
  constructor() {
    super(
      "protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents",
      []
    );
  }
}
export const StreamEventsRequest_SubscribeToHomeserverEvents = new StreamEventsRequest_SubscribeToHomeserverEvents$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event
 */
class Event$Type extends MessageType<Event> {
  constructor() {
    super("protocol.chat.v1.Event", [
      {
        no: 1,
        name: "guild_added_to_list",
        kind: "message",
        oneof: "event",
        T: () => Event_GuildAddedToList,
      },
      {
        no: 2,
        name: "guild_removed_from_list",
        kind: "message",
        oneof: "event",
        T: () => Event_GuildRemovedFromList,
      },
      {
        no: 3,
        name: "action_performed",
        kind: "message",
        oneof: "event",
        T: () => Event_ActionPerformed,
      },
      {
        no: 4,
        name: "sent_message",
        kind: "message",
        oneof: "event",
        T: () => Event_MessageSent,
      },
      {
        no: 5,
        name: "edited_message",
        kind: "message",
        oneof: "event",
        T: () => Event_MessageUpdated,
      },
      {
        no: 6,
        name: "deleted_message",
        kind: "message",
        oneof: "event",
        T: () => Event_MessageDeleted,
      },
      {
        no: 7,
        name: "created_channel",
        kind: "message",
        oneof: "event",
        T: () => Event_ChannelCreated,
      },
      {
        no: 8,
        name: "edited_channel",
        kind: "message",
        oneof: "event",
        T: () => Event_ChannelUpdated,
      },
      {
        no: 9,
        name: "deleted_channel",
        kind: "message",
        oneof: "event",
        T: () => Event_ChannelDeleted,
      },
      {
        no: 10,
        name: "edited_guild",
        kind: "message",
        oneof: "event",
        T: () => Event_GuildUpdated,
      },
      {
        no: 11,
        name: "deleted_guild",
        kind: "message",
        oneof: "event",
        T: () => Event_GuildDeleted,
      },
      {
        no: 12,
        name: "joined_member",
        kind: "message",
        oneof: "event",
        T: () => Event_MemberJoined,
      },
      {
        no: 13,
        name: "left_member",
        kind: "message",
        oneof: "event",
        T: () => Event_MemberLeft,
      },
      {
        no: 14,
        name: "role_moved",
        kind: "message",
        oneof: "event",
        T: () => Event_RoleMoved,
      },
      {
        no: 15,
        name: "profile_updated",
        kind: "message",
        oneof: "event",
        T: () => Event_ProfileUpdated,
      },
      {
        no: 16,
        name: "typing",
        kind: "message",
        oneof: "event",
        T: () => Event_Typing,
      },
    ]);
  }
}
export const Event = new Event$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.MessageSent
 */
class Event_MessageSent$Type extends MessageType<Event_MessageSent> {
  constructor() {
    super("protocol.chat.v1.Event.MessageSent", [
      { no: 1, name: "echo_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "message", kind: "message", T: () => Message },
    ]);
  }
}
export const Event_MessageSent = new Event_MessageSent$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.MessageUpdated
 */
class Event_MessageUpdated$Type extends MessageType<Event_MessageUpdated> {
  constructor() {
    super("protocol.chat.v1.Event.MessageUpdated", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 3, name: "message_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 4, name: "edited_at", kind: "message", T: () => Timestamp },
      { no: 5, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 6,
        name: "update_content",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      {
        no: 7,
        name: "embeds",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Embed,
      },
      {
        no: 8,
        name: "update_embeds",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      {
        no: 9,
        name: "actions",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Action,
      },
      {
        no: 10,
        name: "update_actions",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      {
        no: 11,
        name: "attachments",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Attachment,
      },
      {
        no: 12,
        name: "update_attachments",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      { no: 13, name: "overrides", kind: "message", T: () => Override },
      {
        no: 14,
        name: "update_overrides",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      { no: 15, name: "metadata", kind: "message", T: () => Metadata },
      {
        no: 16,
        name: "update_metadata",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
    ]);
  }
}
export const Event_MessageUpdated = new Event_MessageUpdated$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.MessageDeleted
 */
class Event_MessageDeleted$Type extends MessageType<Event_MessageDeleted> {
  constructor() {
    super("protocol.chat.v1.Event.MessageDeleted", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 3, name: "message_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const Event_MessageDeleted = new Event_MessageDeleted$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.ChannelCreated
 */
class Event_ChannelCreated$Type extends MessageType<Event_ChannelCreated> {
  constructor() {
    super("protocol.chat.v1.Event.ChannelCreated", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 3, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 4,
        name: "previous_id",
        kind: "scalar",
        T: 4 /*ScalarType.UINT64*/,
      },
      { no: 5, name: "next_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 6, name: "is_category", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
      { no: 7, name: "metadata", kind: "message", T: () => Metadata },
    ]);
  }
}
export const Event_ChannelCreated = new Event_ChannelCreated$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.ChannelUpdated
 */
class Event_ChannelUpdated$Type extends MessageType<Event_ChannelUpdated> {
  constructor() {
    super("protocol.chat.v1.Event.ChannelUpdated", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 3, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 4, name: "update_name", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
      {
        no: 5,
        name: "previous_id",
        kind: "scalar",
        T: 4 /*ScalarType.UINT64*/,
      },
      { no: 6, name: "next_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 7, name: "update_order", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
      { no: 8, name: "metadata", kind: "message", T: () => Metadata },
      {
        no: 9,
        name: "update_metadata",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
    ]);
  }
}
export const Event_ChannelUpdated = new Event_ChannelUpdated$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.ChannelDeleted
 */
class Event_ChannelDeleted$Type extends MessageType<Event_ChannelDeleted> {
  constructor() {
    super("protocol.chat.v1.Event.ChannelDeleted", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const Event_ChannelDeleted = new Event_ChannelDeleted$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.GuildUpdated
 */
class Event_GuildUpdated$Type extends MessageType<Event_GuildUpdated> {
  constructor() {
    super("protocol.chat.v1.Event.GuildUpdated", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "update_name", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
      { no: 4, name: "picture", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 5,
        name: "update_picture",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      { no: 6, name: "metadata", kind: "message", T: () => Metadata },
      {
        no: 7,
        name: "update_metadata",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
    ]);
  }
}
export const Event_GuildUpdated = new Event_GuildUpdated$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.GuildDeleted
 */
class Event_GuildDeleted$Type extends MessageType<Event_GuildDeleted> {
  constructor() {
    super("protocol.chat.v1.Event.GuildDeleted", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const Event_GuildDeleted = new Event_GuildDeleted$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.MemberJoined
 */
class Event_MemberJoined$Type extends MessageType<Event_MemberJoined> {
  constructor() {
    super("protocol.chat.v1.Event.MemberJoined", [
      { no: 1, name: "member_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const Event_MemberJoined = new Event_MemberJoined$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.MemberLeft
 */
class Event_MemberLeft$Type extends MessageType<Event_MemberLeft> {
  constructor() {
    super("protocol.chat.v1.Event.MemberLeft", [
      { no: 1, name: "member_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      {
        no: 3,
        name: "leave_reason",
        kind: "enum",
        T: () => ["protocol.chat.v1.Event.LeaveReason", Event_LeaveReason],
      },
    ]);
  }
}
export const Event_MemberLeft = new Event_MemberLeft$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.GuildAddedToList
 */
class Event_GuildAddedToList$Type extends MessageType<Event_GuildAddedToList> {
  constructor() {
    super("protocol.chat.v1.Event.GuildAddedToList", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "homeserver", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
}
export const Event_GuildAddedToList = new Event_GuildAddedToList$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.GuildRemovedFromList
 */
class Event_GuildRemovedFromList$Type extends MessageType<Event_GuildRemovedFromList> {
  constructor() {
    super("protocol.chat.v1.Event.GuildRemovedFromList", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "homeserver", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
}
export const Event_GuildRemovedFromList = new Event_GuildRemovedFromList$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.ActionPerformed
 */
class Event_ActionPerformed$Type extends MessageType<Event_ActionPerformed> {
  constructor() {
    super("protocol.chat.v1.Event.ActionPerformed", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 3, name: "message_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 4, name: "action_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 5,
        name: "action_data",
        kind: "scalar",
        T: 9 /*ScalarType.STRING*/,
      },
    ]);
  }
}
export const Event_ActionPerformed = new Event_ActionPerformed$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.RoleMoved
 */
class Event_RoleMoved$Type extends MessageType<Event_RoleMoved> {
  constructor() {
    super("protocol.chat.v1.Event.RoleMoved", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "role_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const Event_RoleMoved = new Event_RoleMoved$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.ProfileUpdated
 */
class Event_ProfileUpdated$Type extends MessageType<Event_ProfileUpdated> {
  constructor() {
    super("protocol.chat.v1.Event.ProfileUpdated", [
      { no: 1, name: "user_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      {
        no: 2,
        name: "new_username",
        kind: "scalar",
        T: 9 /*ScalarType.STRING*/,
      },
      {
        no: 3,
        name: "update_username",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      { no: 4, name: "new_avatar", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 5,
        name: "update_avatar",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      {
        no: 6,
        name: "new_status",
        kind: "enum",
        T: () => [
          "protocol.harmonytypes.v1.UserStatus",
          UserStatus,
          "USER_STATUS_",
        ],
      },
      {
        no: 7,
        name: "update_status",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      { no: 8, name: "is_bot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
      {
        no: 9,
        name: "update_is_bot",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
    ]);
  }
}
export const Event_ProfileUpdated = new Event_ProfileUpdated$Type();
/**
 * Type for protobuf message protocol.chat.v1.Event.Typing
 */
class Event_Typing$Type extends MessageType<Event_Typing> {
  constructor() {
    super("protocol.chat.v1.Event.Typing", [
      { no: 1, name: "user_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 3, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const Event_Typing = new Event_Typing$Type();
