// @generated by protobuf-ts 1.0.12 with parameters long_type_string,optimize_code_size,generate_dependencies
// @generated from protobuf file "chat/v1/messages.proto" (package "protocol.chat.v1", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { Metadata } from "../../harmonytypes/v1/types";
import { Override } from "../../harmonytypes/v1/types";
import { Action } from "../../harmonytypes/v1/types";
import { Embed } from "../../harmonytypes/v1/types";
import { Message } from "../../harmonytypes/v1/types";
/**
 * @generated from protobuf message protocol.chat.v1.GetChannelMessagesRequest
 */
export interface GetChannelMessagesRequest {
  /**
   * @generated from protobuf field: uint64 guild_id = 1 [jstype = JS_STRING];
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 2 [jstype = JS_STRING];
   */
  channelId: string;
  /**
   * @generated from protobuf field: uint64 before_message = 3 [jstype = JS_STRING];
   */
  beforeMessage: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.GetChannelMessagesResponse
 */
export interface GetChannelMessagesResponse {
  /**
   * @generated from protobuf field: bool reached_top = 1;
   */
  reachedTop: boolean;
  /**
   * @generated from protobuf field: repeated protocol.harmonytypes.v1.Message messages = 2;
   */
  messages: Message[];
}
/**
 * @generated from protobuf message protocol.chat.v1.GetMessageRequest
 */
export interface GetMessageRequest {
  /**
   * @generated from protobuf field: uint64 guild_id = 1 [jstype = JS_STRING];
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 2 [jstype = JS_STRING];
   */
  channelId: string;
  /**
   * @generated from protobuf field: uint64 message_id = 3 [jstype = JS_STRING];
   */
  messageId: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.GetMessageResponse
 */
export interface GetMessageResponse {
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Message message = 1;
   */
  message?: Message;
}
/**
 * @generated from protobuf message protocol.chat.v1.UpdateMessageRequest
 */
export interface UpdateMessageRequest {
  /**
   * @generated from protobuf field: uint64 guild_id = 1 [jstype = JS_STRING];
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 2 [jstype = JS_STRING];
   */
  channelId: string;
  /**
   * @generated from protobuf field: uint64 message_id = 3 [jstype = JS_STRING];
   */
  messageId: string;
  /**
   * @generated from protobuf field: string content = 4;
   */
  content: string;
  /**
   * @generated from protobuf field: bool update_content = 5;
   */
  updateContent: boolean;
  /**
   * @generated from protobuf field: repeated protocol.harmonytypes.v1.Embed embeds = 6;
   */
  embeds: Embed[];
  /**
   * @generated from protobuf field: bool update_embeds = 7;
   */
  updateEmbeds: boolean;
  /**
   * @generated from protobuf field: repeated protocol.harmonytypes.v1.Action actions = 8;
   */
  actions: Action[];
  /**
   * @generated from protobuf field: bool update_actions = 9;
   */
  updateActions: boolean;
  /**
   * @generated from protobuf field: repeated string attachments = 10;
   */
  attachments: string[];
  /**
   * @generated from protobuf field: bool update_attachments = 11;
   */
  updateAttachments: boolean;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Override overrides = 12;
   */
  overrides?: Override;
  /**
   * @generated from protobuf field: bool update_overrides = 13;
   */
  updateOverrides: boolean;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Metadata metadata = 14;
   */
  metadata?: Metadata;
  /**
   * @generated from protobuf field: bool update_metadata = 15;
   */
  updateMetadata: boolean;
}
/**
 * @generated from protobuf message protocol.chat.v1.DeleteMessageRequest
 */
export interface DeleteMessageRequest {
  /**
   * @generated from protobuf field: uint64 guild_id = 1 [jstype = JS_STRING];
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 2 [jstype = JS_STRING];
   */
  channelId: string;
  /**
   * @generated from protobuf field: uint64 message_id = 3 [jstype = JS_STRING];
   */
  messageId: string;
}
// TRIGGERS

/**
 * @generated from protobuf message protocol.chat.v1.TriggerActionRequest
 */
export interface TriggerActionRequest {
  /**
   * @generated from protobuf field: uint64 guild_id = 1 [jstype = JS_STRING];
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 2 [jstype = JS_STRING];
   */
  channelId: string;
  /**
   * @generated from protobuf field: uint64 message_id = 3 [jstype = JS_STRING];
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
 * SendMessage
 *
 * @generated from protobuf message protocol.chat.v1.SendMessageRequest
 */
export interface SendMessageRequest {
  /**
   * @generated from protobuf field: uint64 guild_id = 1 [jstype = JS_STRING];
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 2 [jstype = JS_STRING];
   */
  channelId: string;
  /**
   * @generated from protobuf field: string content = 3;
   */
  content: string;
  /**
   * @generated from protobuf field: repeated protocol.harmonytypes.v1.Action actions = 4;
   */
  actions: Action[];
  /**
   * @generated from protobuf field: repeated protocol.harmonytypes.v1.Embed embeds = 5;
   */
  embeds: Embed[];
  /**
   * @generated from protobuf field: repeated string attachments = 6;
   */
  attachments: string[];
  /**
   * @generated from protobuf field: uint64 in_reply_to = 7;
   */
  inReplyTo: string;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Override overrides = 8;
   */
  overrides?: Override;
  /**
   * @generated from protobuf field: uint64 echo_id = 9;
   */
  echoId: string;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Metadata metadata = 10;
   */
  metadata?: Metadata;
}
/**
 * @generated from protobuf message protocol.chat.v1.SendMessageResponse
 */
export interface SendMessageResponse {
  /**
   * @generated from protobuf field: uint64 message_id = 1 [jstype = JS_STRING];
   */
  messageId: string;
}
/**
 * Type for protobuf message protocol.chat.v1.GetChannelMessagesRequest
 */
class GetChannelMessagesRequest$Type extends MessageType<GetChannelMessagesRequest> {
  constructor() {
    super("protocol.chat.v1.GetChannelMessagesRequest", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      {
        no: 3,
        name: "before_message",
        kind: "scalar",
        T: 4 /*ScalarType.UINT64*/,
      },
    ]);
  }
}
export const GetChannelMessagesRequest = new GetChannelMessagesRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.GetChannelMessagesResponse
 */
class GetChannelMessagesResponse$Type extends MessageType<GetChannelMessagesResponse> {
  constructor() {
    super("protocol.chat.v1.GetChannelMessagesResponse", [
      { no: 1, name: "reached_top", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
      {
        no: 2,
        name: "messages",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Message,
      },
    ]);
  }
}
export const GetChannelMessagesResponse = new GetChannelMessagesResponse$Type();
/**
 * Type for protobuf message protocol.chat.v1.GetMessageRequest
 */
class GetMessageRequest$Type extends MessageType<GetMessageRequest> {
  constructor() {
    super("protocol.chat.v1.GetMessageRequest", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 3, name: "message_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const GetMessageRequest = new GetMessageRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.GetMessageResponse
 */
class GetMessageResponse$Type extends MessageType<GetMessageResponse> {
  constructor() {
    super("protocol.chat.v1.GetMessageResponse", [
      { no: 1, name: "message", kind: "message", T: () => Message },
    ]);
  }
}
export const GetMessageResponse = new GetMessageResponse$Type();
/**
 * Type for protobuf message protocol.chat.v1.UpdateMessageRequest
 */
class UpdateMessageRequest$Type extends MessageType<UpdateMessageRequest> {
  constructor() {
    super("protocol.chat.v1.UpdateMessageRequest", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 3, name: "message_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 4, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 5,
        name: "update_content",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      {
        no: 6,
        name: "embeds",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Embed,
      },
      {
        no: 7,
        name: "update_embeds",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      {
        no: 8,
        name: "actions",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Action,
      },
      {
        no: 9,
        name: "update_actions",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      {
        no: 10,
        name: "attachments",
        kind: "scalar",
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: 9 /*ScalarType.STRING*/,
      },
      {
        no: 11,
        name: "update_attachments",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      { no: 12, name: "overrides", kind: "message", T: () => Override },
      {
        no: 13,
        name: "update_overrides",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      { no: 14, name: "metadata", kind: "message", T: () => Metadata },
      {
        no: 15,
        name: "update_metadata",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
    ]);
  }
}
export const UpdateMessageRequest = new UpdateMessageRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.DeleteMessageRequest
 */
class DeleteMessageRequest$Type extends MessageType<DeleteMessageRequest> {
  constructor() {
    super("protocol.chat.v1.DeleteMessageRequest", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 3, name: "message_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const DeleteMessageRequest = new DeleteMessageRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.TriggerActionRequest
 */
class TriggerActionRequest$Type extends MessageType<TriggerActionRequest> {
  constructor() {
    super("protocol.chat.v1.TriggerActionRequest", [
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
export const TriggerActionRequest = new TriggerActionRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.SendMessageRequest
 */
class SendMessageRequest$Type extends MessageType<SendMessageRequest> {
  constructor() {
    super("protocol.chat.v1.SendMessageRequest", [
      { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 3, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 4,
        name: "actions",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Action,
      },
      {
        no: 5,
        name: "embeds",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Embed,
      },
      {
        no: 6,
        name: "attachments",
        kind: "scalar",
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: 9 /*ScalarType.STRING*/,
      },
      {
        no: 7,
        name: "in_reply_to",
        kind: "scalar",
        T: 4 /*ScalarType.UINT64*/,
      },
      { no: 8, name: "overrides", kind: "message", T: () => Override },
      { no: 9, name: "echo_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 10, name: "metadata", kind: "message", T: () => Metadata },
    ]);
  }
}
export const SendMessageRequest = new SendMessageRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.SendMessageResponse
 */
class SendMessageResponse$Type extends MessageType<SendMessageResponse> {
  constructor() {
    super("protocol.chat.v1.SendMessageResponse", [
      { no: 1, name: "message_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const SendMessageResponse = new SendMessageResponse$Type();