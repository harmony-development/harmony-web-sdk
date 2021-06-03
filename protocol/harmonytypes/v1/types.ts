// @generated by protobuf-ts 1.0.13 with parameters long_type_string,optimize_code_size,generate_dependencies
// @generated from protobuf file "harmonytypes/v1/types.proto" (package "protocol.harmonytypes.v1", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Any } from "../../google/protobuf/any";
import { Empty } from "../../google/protobuf/empty";
/**
 * @generated from protobuf message protocol.harmonytypes.v1.HarmonyMethodMetadata
 */
export interface HarmonyMethodMetadata {
  /**
   * @generated from protobuf field: bool requires_authentication = 1;
   */
  requiresAuthentication: boolean;
  /**
   * @generated from protobuf field: bool requires_local = 2;
   */
  requiresLocal: boolean;
  /**
   * @generated from protobuf field: string requires_permission_node = 3;
   */
  requiresPermissionNode: string;
}
/**
 * OVERRIDES
 *
 * @generated from protobuf message protocol.harmonytypes.v1.Override
 */
export interface Override {
  /**
   * @generated from protobuf field: string name = 1;
   */
  name: string;
  /**
   * @generated from protobuf field: string avatar = 2;
   */
  avatar: string;
  /**
   * @generated from protobuf oneof: reason
   */
  reason:
    | {
        oneofKind: "userDefined";
        /**
         * @generated from protobuf field: string user_defined = 3;
         */
        userDefined: string;
      }
    | {
        oneofKind: "webhook";
        /**
         * @generated from protobuf field: google.protobuf.Empty webhook = 4;
         */
        webhook: Empty;
      }
    | {
        oneofKind: "systemPlurality";
        /**
         * @generated from protobuf field: google.protobuf.Empty system_plurality = 5;
         */
        systemPlurality: Empty; // plurality, not system as in computer
      }
    | {
        oneofKind: "systemMessage";
        /**
         * @generated from protobuf field: google.protobuf.Empty system_message = 6;
         */
        systemMessage: Empty;
      }
    | {
        oneofKind: "bridge";
        /**
         * @generated from protobuf field: google.protobuf.Empty bridge = 7;
         */
        bridge: Empty;
      }
    | {
        oneofKind: undefined;
      };
}
// EMBEDS AND ACTIONS

/**
 * @generated from protobuf message protocol.harmonytypes.v1.Action
 */
export interface Action {
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Action.Type action_type = 1;
   */
  actionType: Action_Type;
  /**
   * @generated from protobuf field: string id = 2;
   */
  id: string;
  /**
   * @generated from protobuf oneof: kind
   */
  kind:
    | {
        oneofKind: "button";
        /**
         * @generated from protobuf field: protocol.harmonytypes.v1.Action.Button button = 3;
         */
        button: Action_Button;
      }
    | {
        oneofKind: "dropdown";
        /**
         * @generated from protobuf field: protocol.harmonytypes.v1.Action.Dropdown dropdown = 4;
         */
        dropdown: Action_Dropdown;
      }
    | {
        oneofKind: "input";
        /**
         * @generated from protobuf field: protocol.harmonytypes.v1.Action.Input input = 5;
         */
        input: Action_Input;
      }
    | {
        oneofKind: undefined;
      };
}
/**
 * @generated from protobuf message protocol.harmonytypes.v1.Action.Button
 */
export interface Action_Button {
  /**
   * @generated from protobuf field: string text = 1;
   */
  text: string;
  /**
   * @generated from protobuf field: string url = 2;
   */
  url: string;
}
/**
 * @generated from protobuf message protocol.harmonytypes.v1.Action.Dropdown
 */
export interface Action_Dropdown {
  /**
   * @generated from protobuf field: string text = 1;
   */
  text: string;
  /**
   * @generated from protobuf field: repeated string options = 2;
   */
  options: string[];
}
/**
 * @generated from protobuf message protocol.harmonytypes.v1.Action.Input
 */
export interface Action_Input {
  /**
   * @generated from protobuf field: string label = 1;
   */
  label: string;
  /**
   * @generated from protobuf field: bool wide = 2;
   */
  wide: boolean;
}
/**
 * @generated from protobuf enum protocol.harmonytypes.v1.Action.Type
 */
export enum Action_Type {
  /**
   * @generated from protobuf enum value: Normal = 0;
   */
  Normal = 0,
  /**
   * @generated from protobuf enum value: Primary = 1;
   */
  Primary = 1,
  /**
   * @generated from protobuf enum value: Destructive = 2;
   */
  Destructive = 2,
}
/**
 * @generated from protobuf message protocol.harmonytypes.v1.EmbedHeading
 */
export interface EmbedHeading {
  /**
   * @generated from protobuf field: string text = 1;
   */
  text: string;
  /**
   * @generated from protobuf field: string subtext = 2;
   */
  subtext: string;
  /**
   * @generated from protobuf field: string url = 3;
   */
  url: string;
  /**
   * @generated from protobuf field: string icon = 4;
   */
  icon: string;
}
/**
 * @generated from protobuf message protocol.harmonytypes.v1.EmbedField
 */
export interface EmbedField {
  /**
   * @generated from protobuf field: string title = 1;
   */
  title: string;
  /**
   * @generated from protobuf field: string subtitle = 2;
   */
  subtitle: string;
  /**
   * @generated from protobuf field: string body = 3;
   */
  body: string;
  /**
   * @generated from protobuf field: string image_url = 4;
   */
  imageUrl: string;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.EmbedField.Presentation presentation = 5;
   */
  presentation: EmbedField_Presentation;
  /**
   * @generated from protobuf field: repeated protocol.harmonytypes.v1.Action actions = 6;
   */
  actions: Action[];
}
/**
 * @generated from protobuf enum protocol.harmonytypes.v1.EmbedField.Presentation
 */
export enum EmbedField_Presentation {
  /**
   * @generated from protobuf enum value: Data = 0;
   */
  Data = 0,
  /**
   * @generated from protobuf enum value: CaptionedImage = 1;
   */
  CaptionedImage = 1,
  /**
   * @generated from protobuf enum value: Row = 2;
   */
  Row = 2,
}
/**
 * @generated from protobuf message protocol.harmonytypes.v1.Embed
 */
export interface Embed {
  /**
   * @generated from protobuf field: string title = 1;
   */
  title: string;
  /**
   * @generated from protobuf field: string body = 2;
   */
  body: string;
  /**
   * @generated from protobuf field: int64 color = 3;
   */
  color: string;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.EmbedHeading header = 4;
   */
  header?: EmbedHeading;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.EmbedHeading footer = 5;
   */
  footer?: EmbedHeading;
  /**
   * @generated from protobuf field: repeated protocol.harmonytypes.v1.EmbedField fields = 6;
   */
  fields: EmbedField[];
}
/**
 * TYPES
 *
 * @generated from protobuf message protocol.harmonytypes.v1.Attachment
 */
export interface Attachment {
  /**
   * @generated from protobuf field: string id = 1;
   */
  id: string;
  /**
   * @generated from protobuf field: string name = 2;
   */
  name: string;
  /**
   * @generated from protobuf field: string type = 3;
   */
  type: string;
  /**
   * @generated from protobuf field: int32 size = 4;
   */
  size: number;
  /**
   * @generated from protobuf field: string caption = 5;
   */
  caption: string;
}
/**
 * @generated from protobuf message protocol.harmonytypes.v1.Metadata
 */
export interface Metadata {
  /**
   * @generated from protobuf field: string kind = 1;
   */
  kind: string;
  /**
   * @generated from protobuf field: map<string, google.protobuf.Any> extension = 2;
   */
  extension: {
    [key: string]: Any;
  };
}
/**
 * @generated from protobuf message protocol.harmonytypes.v1.ContentText
 */
export interface ContentText {
  /**
   * @generated from protobuf field: string content = 1;
   */
  content: string;
}
/**
 * @generated from protobuf message protocol.harmonytypes.v1.ContentEmbed
 */
export interface ContentEmbed {
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Embed embeds = 1;
   */
  embeds?: Embed;
}
/**
 * @generated from protobuf message protocol.harmonytypes.v1.ContentFiles
 */
export interface ContentFiles {
  /**
   * @generated from protobuf field: repeated protocol.harmonytypes.v1.Attachment attachments = 1;
   */
  attachments: Attachment[];
}
/**
 * @generated from protobuf message protocol.harmonytypes.v1.Content
 */
export interface Content {
  /**
   * @generated from protobuf oneof: content
   */
  content:
    | {
        oneofKind: "textMessage";
        /**
         * @generated from protobuf field: protocol.harmonytypes.v1.ContentText text_message = 2;
         */
        textMessage: ContentText;
      }
    | {
        oneofKind: "embedMessage";
        /**
         * @generated from protobuf field: protocol.harmonytypes.v1.ContentEmbed embed_message = 4;
         */
        embedMessage: ContentEmbed;
      }
    | {
        oneofKind: "filesMessage";
        /**
         * @generated from protobuf field: protocol.harmonytypes.v1.ContentFiles files_message = 5;
         */
        filesMessage: ContentFiles;
      }
    | {
        oneofKind: undefined;
      };
}
/**
 * @generated from protobuf message protocol.harmonytypes.v1.Message
 */
export interface Message {
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Metadata metadata = 1;
   */
  metadata?: Metadata;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Override overrides = 2;
   */
  overrides?: Override;
  /**
   * @generated from protobuf field: uint64 guild_id = 3 [jstype = JS_STRING];
   */
  guildId: string;
  /**
   * @generated from protobuf field: uint64 channel_id = 4 [jstype = JS_STRING];
   */
  channelId: string;
  /**
   * @generated from protobuf field: uint64 message_id = 5 [jstype = JS_STRING];
   */
  messageId: string;
  /**
   * @generated from protobuf field: uint64 author_id = 6 [jstype = JS_STRING];
   */
  authorId: string;
  /**
   * @generated from protobuf field: google.protobuf.Timestamp created_at = 7;
   */
  createdAt?: Timestamp;
  /**
   * @generated from protobuf field: google.protobuf.Timestamp edited_at = 8;
   */
  editedAt?: Timestamp;
  /**
   * @generated from protobuf field: uint64 in_reply_to = 9 [jstype = JS_STRING];
   */
  inReplyTo: string;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.Content content = 10;
   */
  content?: Content;
}
/**
 * @generated from protobuf message protocol.harmonytypes.v1.Error
 */
export interface Error {
  /**
   * @generated from protobuf field: string identifier = 1;
   */
  identifier: string;
  /**
   * @generated from protobuf field: string human_message = 2;
   */
  humanMessage: string;
  /**
   * @generated from protobuf field: bytes more_details = 3;
   */
  moreDetails: Uint8Array;
}
/**
 * @generated from protobuf enum protocol.harmonytypes.v1.UserStatus
 */
export enum UserStatus {
  /**
   * @generated from protobuf enum value: USER_STATUS_ONLINE_UNSPECIFIED = 0;
   */
  ONLINE_UNSPECIFIED = 0,
  /**
   * @generated from protobuf enum value: USER_STATUS_STREAMING = 1;
   */
  STREAMING = 1,
  /**
   * @generated from protobuf enum value: USER_STATUS_DO_NOT_DISTURB = 2;
   */
  DO_NOT_DISTURB = 2,
  /**
   * @generated from protobuf enum value: USER_STATUS_IDLE = 3;
   */
  IDLE = 3,
  /**
   * @generated from protobuf enum value: USER_STATUS_OFFLINE = 4;
   */
  OFFLINE = 4,
}
/**
 * Type for protobuf message protocol.harmonytypes.v1.HarmonyMethodMetadata
 */
class HarmonyMethodMetadata$Type extends MessageType<HarmonyMethodMetadata> {
  constructor() {
    super("protocol.harmonytypes.v1.HarmonyMethodMetadata", [
      {
        no: 1,
        name: "requires_authentication",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      {
        no: 2,
        name: "requires_local",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      {
        no: 3,
        name: "requires_permission_node",
        kind: "scalar",
        T: 9 /*ScalarType.STRING*/,
      },
    ]);
  }
}
export const HarmonyMethodMetadata = new HarmonyMethodMetadata$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.Override
 */
class Override$Type extends MessageType<Override> {
  constructor() {
    super("protocol.harmonytypes.v1.Override", [
      { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "avatar", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 3,
        name: "user_defined",
        kind: "scalar",
        oneof: "reason",
        T: 9 /*ScalarType.STRING*/,
      },
      {
        no: 4,
        name: "webhook",
        kind: "message",
        oneof: "reason",
        T: () => Empty,
      },
      {
        no: 5,
        name: "system_plurality",
        kind: "message",
        oneof: "reason",
        T: () => Empty,
      },
      {
        no: 6,
        name: "system_message",
        kind: "message",
        oneof: "reason",
        T: () => Empty,
      },
      {
        no: 7,
        name: "bridge",
        kind: "message",
        oneof: "reason",
        T: () => Empty,
      },
    ]);
  }
}
export const Override = new Override$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.Action
 */
class Action$Type extends MessageType<Action> {
  constructor() {
    super("protocol.harmonytypes.v1.Action", [
      {
        no: 1,
        name: "action_type",
        kind: "enum",
        T: () => ["protocol.harmonytypes.v1.Action.Type", Action_Type],
      },
      { no: 2, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 3,
        name: "button",
        kind: "message",
        oneof: "kind",
        T: () => Action_Button,
      },
      {
        no: 4,
        name: "dropdown",
        kind: "message",
        oneof: "kind",
        T: () => Action_Dropdown,
      },
      {
        no: 5,
        name: "input",
        kind: "message",
        oneof: "kind",
        T: () => Action_Input,
      },
    ]);
  }
}
export const Action = new Action$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.Action.Button
 */
class Action_Button$Type extends MessageType<Action_Button> {
  constructor() {
    super("protocol.harmonytypes.v1.Action.Button", [
      { no: 1, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
}
export const Action_Button = new Action_Button$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.Action.Dropdown
 */
class Action_Dropdown$Type extends MessageType<Action_Dropdown> {
  constructor() {
    super("protocol.harmonytypes.v1.Action.Dropdown", [
      { no: 1, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 2,
        name: "options",
        kind: "scalar",
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: 9 /*ScalarType.STRING*/,
      },
    ]);
  }
}
export const Action_Dropdown = new Action_Dropdown$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.Action.Input
 */
class Action_Input$Type extends MessageType<Action_Input> {
  constructor() {
    super("protocol.harmonytypes.v1.Action.Input", [
      { no: 1, name: "label", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "wide", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
    ]);
  }
}
export const Action_Input = new Action_Input$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.EmbedHeading
 */
class EmbedHeading$Type extends MessageType<EmbedHeading> {
  constructor() {
    super("protocol.harmonytypes.v1.EmbedHeading", [
      { no: 1, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "subtext", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 4, name: "icon", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
}
export const EmbedHeading = new EmbedHeading$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.EmbedField
 */
class EmbedField$Type extends MessageType<EmbedField> {
  constructor() {
    super("protocol.harmonytypes.v1.EmbedField", [
      { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "subtitle", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "body", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 4, name: "image_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 5,
        name: "presentation",
        kind: "enum",
        T: () => [
          "protocol.harmonytypes.v1.EmbedField.Presentation",
          EmbedField_Presentation,
        ],
      },
      {
        no: 6,
        name: "actions",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Action,
      },
    ]);
  }
}
export const EmbedField = new EmbedField$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.Embed
 */
class Embed$Type extends MessageType<Embed> {
  constructor() {
    super("protocol.harmonytypes.v1.Embed", [
      { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "body", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "color", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
      { no: 4, name: "header", kind: "message", T: () => EmbedHeading },
      { no: 5, name: "footer", kind: "message", T: () => EmbedHeading },
      {
        no: 6,
        name: "fields",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => EmbedField,
      },
    ]);
  }
}
export const Embed = new Embed$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.Attachment
 */
class Attachment$Type extends MessageType<Attachment> {
  constructor() {
    super("protocol.harmonytypes.v1.Attachment", [
      { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 4, name: "size", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
      { no: 5, name: "caption", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
}
export const Attachment = new Attachment$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.Metadata
 */
class Metadata$Type extends MessageType<Metadata> {
  constructor() {
    super("protocol.harmonytypes.v1.Metadata", [
      { no: 1, name: "kind", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 2,
        name: "extension",
        kind: "map",
        K: 9 /*ScalarType.STRING*/,
        V: { kind: "message", T: () => Any },
      },
    ]);
  }
}
export const Metadata = new Metadata$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.ContentText
 */
class ContentText$Type extends MessageType<ContentText> {
  constructor() {
    super("protocol.harmonytypes.v1.ContentText", [
      { no: 1, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
}
export const ContentText = new ContentText$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.ContentEmbed
 */
class ContentEmbed$Type extends MessageType<ContentEmbed> {
  constructor() {
    super("protocol.harmonytypes.v1.ContentEmbed", [
      { no: 1, name: "embeds", kind: "message", T: () => Embed },
    ]);
  }
}
export const ContentEmbed = new ContentEmbed$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.ContentFiles
 */
class ContentFiles$Type extends MessageType<ContentFiles> {
  constructor() {
    super("protocol.harmonytypes.v1.ContentFiles", [
      {
        no: 1,
        name: "attachments",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Attachment,
      },
    ]);
  }
}
export const ContentFiles = new ContentFiles$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.Content
 */
class Content$Type extends MessageType<Content> {
  constructor() {
    super("protocol.harmonytypes.v1.Content", [
      {
        no: 2,
        name: "text_message",
        kind: "message",
        oneof: "content",
        T: () => ContentText,
      },
      {
        no: 4,
        name: "embed_message",
        kind: "message",
        oneof: "content",
        T: () => ContentEmbed,
      },
      {
        no: 5,
        name: "files_message",
        kind: "message",
        oneof: "content",
        T: () => ContentFiles,
      },
    ]);
  }
}
export const Content = new Content$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.Message
 */
class Message$Type extends MessageType<Message> {
  constructor() {
    super("protocol.harmonytypes.v1.Message", [
      { no: 1, name: "metadata", kind: "message", T: () => Metadata },
      { no: 2, name: "overrides", kind: "message", T: () => Override },
      { no: 3, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 4, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 5, name: "message_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 6, name: "author_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 7, name: "created_at", kind: "message", T: () => Timestamp },
      { no: 8, name: "edited_at", kind: "message", T: () => Timestamp },
      {
        no: 9,
        name: "in_reply_to",
        kind: "scalar",
        T: 4 /*ScalarType.UINT64*/,
      },
      { no: 10, name: "content", kind: "message", T: () => Content },
    ]);
  }
}
export const Message = new Message$Type();
/**
 * Type for protobuf message protocol.harmonytypes.v1.Error
 */
class Error$Type extends MessageType<Error> {
  constructor() {
    super("protocol.harmonytypes.v1.Error", [
      { no: 1, name: "identifier", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 2,
        name: "human_message",
        kind: "scalar",
        T: 9 /*ScalarType.STRING*/,
      },
      {
        no: 3,
        name: "more_details",
        kind: "scalar",
        T: 12 /*ScalarType.BYTES*/,
      },
    ]);
  }
}
export const Error = new Error$Type();
