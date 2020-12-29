// package: protocol.harmonytypes.v1
// file: harmonytypes/v1/types.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class Override extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  hasUserDefined(): boolean;
  clearUserDefined(): void;
  getUserDefined(): string;
  setUserDefined(value: string): void;

  hasWebhook(): boolean;
  clearWebhook(): void;
  getWebhook(): google_protobuf_empty_pb.Empty | undefined;
  setWebhook(value?: google_protobuf_empty_pb.Empty): void;

  hasSystemPlurality(): boolean;
  clearSystemPlurality(): void;
  getSystemPlurality(): google_protobuf_empty_pb.Empty | undefined;
  setSystemPlurality(value?: google_protobuf_empty_pb.Empty): void;

  hasSystemMessage(): boolean;
  clearSystemMessage(): void;
  getSystemMessage(): google_protobuf_empty_pb.Empty | undefined;
  setSystemMessage(value?: google_protobuf_empty_pb.Empty): void;

  hasBridge(): boolean;
  clearBridge(): void;
  getBridge(): google_protobuf_empty_pb.Empty | undefined;
  setBridge(value?: google_protobuf_empty_pb.Empty): void;

  getReasonCase(): Override.ReasonCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Override.AsObject;
  static toObject(includeInstance: boolean, msg: Override): Override.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Override, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Override;
  static deserializeBinaryFromReader(message: Override, reader: jspb.BinaryReader): Override;
}

export namespace Override {
  export type AsObject = {
    name: string,
    avatar: string,
    userDefined: string,
    webhook?: google_protobuf_empty_pb.Empty.AsObject,
    systemPlurality?: google_protobuf_empty_pb.Empty.AsObject,
    systemMessage?: google_protobuf_empty_pb.Empty.AsObject,
    bridge?: google_protobuf_empty_pb.Empty.AsObject,
  }

  export enum ReasonCase {
    REASON_NOT_SET = 0,
    USER_DEFINED = 3,
    WEBHOOK = 4,
    SYSTEM_PLURALITY = 5,
    SYSTEM_MESSAGE = 6,
    BRIDGE = 7,
  }
}

export class Action extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getId(): string;
  setId(value: string): void;

  getType(): ActionTypeMap[keyof ActionTypeMap];
  setType(value: ActionTypeMap[keyof ActionTypeMap]): void;

  getPresentation(): ActionPresentationMap[keyof ActionPresentationMap];
  setPresentation(value: ActionPresentationMap[keyof ActionPresentationMap]): void;

  clearChildrenList(): void;
  getChildrenList(): Array<Action>;
  setChildrenList(value: Array<Action>): void;
  addChildren(value?: Action, index?: number): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Action.AsObject;
  static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Action;
  static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
  export type AsObject = {
    text: string,
    url: string,
    id: string,
    type: ActionTypeMap[keyof ActionTypeMap],
    presentation: ActionPresentationMap[keyof ActionPresentationMap],
    childrenList: Array<Action.AsObject>,
  }
}

export class EmbedHeading extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getSubtext(): string;
  setSubtext(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbedHeading.AsObject;
  static toObject(includeInstance: boolean, msg: EmbedHeading): EmbedHeading.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmbedHeading, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbedHeading;
  static deserializeBinaryFromReader(message: EmbedHeading, reader: jspb.BinaryReader): EmbedHeading;
}

export namespace EmbedHeading {
  export type AsObject = {
    text: string,
    subtext: string,
    url: string,
    icon: string,
  }
}

export class EmbedField extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getSubtitle(): string;
  setSubtitle(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getImageUrl(): string;
  setImageUrl(value: string): void;

  getPresentation(): FieldPresentationMap[keyof FieldPresentationMap];
  setPresentation(value: FieldPresentationMap[keyof FieldPresentationMap]): void;

  clearActionsList(): void;
  getActionsList(): Array<Action>;
  setActionsList(value: Array<Action>): void;
  addActions(value?: Action, index?: number): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbedField.AsObject;
  static toObject(includeInstance: boolean, msg: EmbedField): EmbedField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmbedField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbedField;
  static deserializeBinaryFromReader(message: EmbedField, reader: jspb.BinaryReader): EmbedField;
}

export namespace EmbedField {
  export type AsObject = {
    title: string,
    subtitle: string,
    body: string,
    imageUrl: string,
    presentation: FieldPresentationMap[keyof FieldPresentationMap],
    actionsList: Array<Action.AsObject>,
  }
}

export class Embed extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getColor(): number;
  setColor(value: number): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): EmbedHeading | undefined;
  setHeader(value?: EmbedHeading): void;

  hasFooter(): boolean;
  clearFooter(): void;
  getFooter(): EmbedHeading | undefined;
  setFooter(value?: EmbedHeading): void;

  clearFieldsList(): void;
  getFieldsList(): Array<EmbedField>;
  setFieldsList(value: Array<EmbedField>): void;
  addFields(value?: EmbedField, index?: number): EmbedField;

  clearActionsList(): void;
  getActionsList(): Array<Action>;
  setActionsList(value: Array<Action>): void;
  addActions(value?: Action, index?: number): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Embed.AsObject;
  static toObject(includeInstance: boolean, msg: Embed): Embed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Embed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Embed;
  static deserializeBinaryFromReader(message: Embed, reader: jspb.BinaryReader): Embed;
}

export namespace Embed {
  export type AsObject = {
    title: string,
    body: string,
    color: number,
    header?: EmbedHeading.AsObject,
    footer?: EmbedHeading.AsObject,
    fieldsList: Array<EmbedField.AsObject>,
    actionsList: Array<Action.AsObject>,
  }
}

export class Attachment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attachment.AsObject;
  static toObject(includeInstance: boolean, msg: Attachment): Attachment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Attachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attachment;
  static deserializeBinaryFromReader(message: Attachment, reader: jspb.BinaryReader): Attachment;
}

export namespace Attachment {
  export type AsObject = {
    id: string,
    name: string,
    type: string,
    size: number,
  }
}

export class Metadata extends jspb.Message {
  getKind(): string;
  setKind(value: string): void;

  getExtensionMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearExtensionMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    kind: string,
    extensionMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
  }
}

export class Message extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): void;

  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  getAuthorId(): string;
  setAuthorId(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEditedAt(): boolean;
  clearEditedAt(): void;
  getEditedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEditedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getContent(): string;
  setContent(value: string): void;

  clearEmbedsList(): void;
  getEmbedsList(): Array<Embed>;
  setEmbedsList(value: Array<Embed>): void;
  addEmbeds(value?: Embed, index?: number): Embed;

  clearActionsList(): void;
  getActionsList(): Array<Action>;
  setActionsList(value: Array<Action>): void;
  addActions(value?: Action, index?: number): Action;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<Attachment>;
  setAttachmentsList(value: Array<Attachment>): void;
  addAttachments(value?: Attachment, index?: number): Attachment;

  getInReplyTo(): string;
  setInReplyTo(value: string): void;

  hasOverrides(): boolean;
  clearOverrides(): void;
  getOverrides(): Override | undefined;
  setOverrides(value?: Override): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    metadata?: Metadata.AsObject,
    guildId: string,
    channelId: string,
    messageId: string,
    authorId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    editedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    content: string,
    embedsList: Array<Embed.AsObject>,
    actionsList: Array<Action.AsObject>,
    attachmentsList: Array<Attachment.AsObject>,
    inReplyTo: string,
    overrides?: Override.AsObject,
  }
}

export interface UserStatusMap {
  USER_STATUS_ONLINE_UNSPECIFIED: 0;
  USER_STATUS_STREAMING: 1;
  USER_STATUS_DO_NOT_DISTURB: 2;
  USER_STATUS_IDLE: 3;
  USER_STATUS_OFFLINE: 4;
}

export const UserStatus: UserStatusMap;

export interface ActionTypeMap {
  NORMAL: 0;
  PRIMARY: 1;
  DESTRUCTIVE: 2;
}

export const ActionType: ActionTypeMap;

export interface ActionPresentationMap {
  BUTTON: 0;
  DROPDOWN: 1;
  MENU: 2;
  SMALLENTRY: 3;
  LARGEENTRY: 4;
}

export const ActionPresentation: ActionPresentationMap;

export interface FieldPresentationMap {
  DATA: 0;
  CAPTIONEDIMAGE: 1;
  ROW: 2;
}

export const FieldPresentation: FieldPresentationMap;

