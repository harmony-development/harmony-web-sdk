// package: protocol.chat.v1
// file: chat/v1/messages.proto

import * as jspb from "google-protobuf";
import * as harmonytypes_v1_types_pb from "../../harmonytypes/v1/types_pb";

export class GetChannelMessagesRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getBeforeMessage(): string;
  setBeforeMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChannelMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChannelMessagesRequest): GetChannelMessagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetChannelMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChannelMessagesRequest;
  static deserializeBinaryFromReader(message: GetChannelMessagesRequest, reader: jspb.BinaryReader): GetChannelMessagesRequest;
}

export namespace GetChannelMessagesRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    beforeMessage: string,
  }
}

export class GetChannelMessagesResponse extends jspb.Message {
  getReachedTop(): boolean;
  setReachedTop(value: boolean): void;

  clearMessagesList(): void;
  getMessagesList(): Array<harmonytypes_v1_types_pb.Message>;
  setMessagesList(value: Array<harmonytypes_v1_types_pb.Message>): void;
  addMessages(value?: harmonytypes_v1_types_pb.Message, index?: number): harmonytypes_v1_types_pb.Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChannelMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChannelMessagesResponse): GetChannelMessagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetChannelMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChannelMessagesResponse;
  static deserializeBinaryFromReader(message: GetChannelMessagesResponse, reader: jspb.BinaryReader): GetChannelMessagesResponse;
}

export namespace GetChannelMessagesResponse {
  export type AsObject = {
    reachedTop: boolean,
    messagesList: Array<harmonytypes_v1_types_pb.Message.AsObject>,
  }
}

export class GetMessageRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessageRequest): GetMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessageRequest;
  static deserializeBinaryFromReader(message: GetMessageRequest, reader: jspb.BinaryReader): GetMessageRequest;
}

export namespace GetMessageRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    messageId: string,
  }
}

export class GetMessageResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): harmonytypes_v1_types_pb.Message | undefined;
  setMessage(value?: harmonytypes_v1_types_pb.Message): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessageResponse): GetMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessageResponse;
  static deserializeBinaryFromReader(message: GetMessageResponse, reader: jspb.BinaryReader): GetMessageResponse;
}

export namespace GetMessageResponse {
  export type AsObject = {
    message?: harmonytypes_v1_types_pb.Message.AsObject,
  }
}

export class UpdateMessageRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getUpdateContent(): boolean;
  setUpdateContent(value: boolean): void;

  clearEmbedsList(): void;
  getEmbedsList(): Array<harmonytypes_v1_types_pb.Embed>;
  setEmbedsList(value: Array<harmonytypes_v1_types_pb.Embed>): void;
  addEmbeds(value?: harmonytypes_v1_types_pb.Embed, index?: number): harmonytypes_v1_types_pb.Embed;

  getUpdateEmbeds(): boolean;
  setUpdateEmbeds(value: boolean): void;

  clearActionsList(): void;
  getActionsList(): Array<harmonytypes_v1_types_pb.Action>;
  setActionsList(value: Array<harmonytypes_v1_types_pb.Action>): void;
  addActions(value?: harmonytypes_v1_types_pb.Action, index?: number): harmonytypes_v1_types_pb.Action;

  getUpdateActions(): boolean;
  setUpdateActions(value: boolean): void;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<string>;
  setAttachmentsList(value: Array<string>): void;
  addAttachments(value: string, index?: number): string;

  getUpdateAttachments(): boolean;
  setUpdateAttachments(value: boolean): void;

  hasOverrides(): boolean;
  clearOverrides(): void;
  getOverrides(): harmonytypes_v1_types_pb.Override | undefined;
  setOverrides(value?: harmonytypes_v1_types_pb.Override): void;

  getUpdateOverrides(): boolean;
  setUpdateOverrides(value: boolean): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): harmonytypes_v1_types_pb.Metadata | undefined;
  setMetadata(value?: harmonytypes_v1_types_pb.Metadata): void;

  getUpdateMetadata(): boolean;
  setUpdateMetadata(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMessageRequest): UpdateMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMessageRequest;
  static deserializeBinaryFromReader(message: UpdateMessageRequest, reader: jspb.BinaryReader): UpdateMessageRequest;
}

export namespace UpdateMessageRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    messageId: string,
    content: string,
    updateContent: boolean,
    embedsList: Array<harmonytypes_v1_types_pb.Embed.AsObject>,
    updateEmbeds: boolean,
    actionsList: Array<harmonytypes_v1_types_pb.Action.AsObject>,
    updateActions: boolean,
    attachmentsList: Array<string>,
    updateAttachments: boolean,
    overrides?: harmonytypes_v1_types_pb.Override.AsObject,
    updateOverrides: boolean,
    metadata?: harmonytypes_v1_types_pb.Metadata.AsObject,
    updateMetadata: boolean,
  }
}

export class DeleteMessageRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMessageRequest): DeleteMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMessageRequest;
  static deserializeBinaryFromReader(message: DeleteMessageRequest, reader: jspb.BinaryReader): DeleteMessageRequest;
}

export namespace DeleteMessageRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    messageId: string,
  }
}

export class TriggerActionRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  getActionId(): string;
  setActionId(value: string): void;

  getActionData(): string;
  setActionData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerActionRequest): TriggerActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerActionRequest;
  static deserializeBinaryFromReader(message: TriggerActionRequest, reader: jspb.BinaryReader): TriggerActionRequest;
}

export namespace TriggerActionRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    messageId: string,
    actionId: string,
    actionData: string,
  }
}

export class SendMessageRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  clearActionsList(): void;
  getActionsList(): Array<harmonytypes_v1_types_pb.Action>;
  setActionsList(value: Array<harmonytypes_v1_types_pb.Action>): void;
  addActions(value?: harmonytypes_v1_types_pb.Action, index?: number): harmonytypes_v1_types_pb.Action;

  clearEmbedsList(): void;
  getEmbedsList(): Array<harmonytypes_v1_types_pb.Embed>;
  setEmbedsList(value: Array<harmonytypes_v1_types_pb.Embed>): void;
  addEmbeds(value?: harmonytypes_v1_types_pb.Embed, index?: number): harmonytypes_v1_types_pb.Embed;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<string>;
  setAttachmentsList(value: Array<string>): void;
  addAttachments(value: string, index?: number): string;

  getInReplyTo(): number;
  setInReplyTo(value: number): void;

  hasOverrides(): boolean;
  clearOverrides(): void;
  getOverrides(): harmonytypes_v1_types_pb.Override | undefined;
  setOverrides(value?: harmonytypes_v1_types_pb.Override): void;

  getEchoId(): number;
  setEchoId(value: number): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): harmonytypes_v1_types_pb.Metadata | undefined;
  setMetadata(value?: harmonytypes_v1_types_pb.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
  static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    content: string,
    actionsList: Array<harmonytypes_v1_types_pb.Action.AsObject>,
    embedsList: Array<harmonytypes_v1_types_pb.Embed.AsObject>,
    attachmentsList: Array<string>,
    inReplyTo: number,
    overrides?: harmonytypes_v1_types_pb.Override.AsObject,
    echoId: number,
    metadata?: harmonytypes_v1_types_pb.Metadata.AsObject,
  }
}

export class SendMessageResponse extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageResponse): SendMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageResponse;
  static deserializeBinaryFromReader(message: SendMessageResponse, reader: jspb.BinaryReader): SendMessageResponse;
}

export namespace SendMessageResponse {
  export type AsObject = {
    messageId: string,
  }
}

