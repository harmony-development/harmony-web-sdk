// package: protocol.chat.v1
// file: chat/v1/channels.proto

import * as jspb from "google-protobuf";
import * as harmonytypes_v1_types_pb from "../../harmonytypes/v1/types_pb";

export class CreateChannelRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelName(): string;
  setChannelName(value: string): void;

  getIsCategory(): boolean;
  setIsCategory(value: boolean): void;

  getPreviousId(): string;
  setPreviousId(value: string): void;

  getNextId(): string;
  setNextId(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): harmonytypes_v1_types_pb.Metadata | undefined;
  setMetadata(value?: harmonytypes_v1_types_pb.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChannelRequest): CreateChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChannelRequest;
  static deserializeBinaryFromReader(message: CreateChannelRequest, reader: jspb.BinaryReader): CreateChannelRequest;
}

export namespace CreateChannelRequest {
  export type AsObject = {
    guildId: string,
    channelName: string,
    isCategory: boolean,
    previousId: string,
    nextId: string,
    metadata?: harmonytypes_v1_types_pb.Metadata.AsObject,
  }
}

export class CreateChannelResponse extends jspb.Message {
  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChannelResponse): CreateChannelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChannelResponse;
  static deserializeBinaryFromReader(message: CreateChannelResponse, reader: jspb.BinaryReader): CreateChannelResponse;
}

export namespace CreateChannelResponse {
  export type AsObject = {
    channelId: string,
  }
}

export class GetGuildChannelsRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildChannelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildChannelsRequest): GetGuildChannelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildChannelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildChannelsRequest;
  static deserializeBinaryFromReader(message: GetGuildChannelsRequest, reader: jspb.BinaryReader): GetGuildChannelsRequest;
}

export namespace GetGuildChannelsRequest {
  export type AsObject = {
    guildId: string,
  }
}

export class GetGuildChannelsResponse extends jspb.Message {
  clearChannelsList(): void;
  getChannelsList(): Array<GetGuildChannelsResponse.Channel>;
  setChannelsList(value: Array<GetGuildChannelsResponse.Channel>): void;
  addChannels(value?: GetGuildChannelsResponse.Channel, index?: number): GetGuildChannelsResponse.Channel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildChannelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildChannelsResponse): GetGuildChannelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildChannelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildChannelsResponse;
  static deserializeBinaryFromReader(message: GetGuildChannelsResponse, reader: jspb.BinaryReader): GetGuildChannelsResponse;
}

export namespace GetGuildChannelsResponse {
  export type AsObject = {
    channelsList: Array<GetGuildChannelsResponse.Channel.AsObject>,
  }

  export class Channel extends jspb.Message {
    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): harmonytypes_v1_types_pb.Metadata | undefined;
    setMetadata(value?: harmonytypes_v1_types_pb.Metadata): void;

    getChannelId(): string;
    setChannelId(value: string): void;

    getChannelName(): string;
    setChannelName(value: string): void;

    getIsCategory(): boolean;
    setIsCategory(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Channel.AsObject;
    static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Channel;
    static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
  }

  export namespace Channel {
    export type AsObject = {
      metadata?: harmonytypes_v1_types_pb.Metadata.AsObject,
      channelId: string,
      channelName: string,
      isCategory: boolean,
    }
  }
}

export class UpdateChannelInformationRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUpdateName(): boolean;
  setUpdateName(value: boolean): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): harmonytypes_v1_types_pb.Metadata | undefined;
  setMetadata(value?: harmonytypes_v1_types_pb.Metadata): void;

  getUpdateMetadata(): boolean;
  setUpdateMetadata(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChannelInformationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChannelInformationRequest): UpdateChannelInformationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateChannelInformationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChannelInformationRequest;
  static deserializeBinaryFromReader(message: UpdateChannelInformationRequest, reader: jspb.BinaryReader): UpdateChannelInformationRequest;
}

export namespace UpdateChannelInformationRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    name: string,
    updateName: boolean,
    metadata?: harmonytypes_v1_types_pb.Metadata.AsObject,
    updateMetadata: boolean,
  }
}

export class UpdateChannelOrderRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getPreviousId(): string;
  setPreviousId(value: string): void;

  getNextId(): string;
  setNextId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChannelOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChannelOrderRequest): UpdateChannelOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateChannelOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChannelOrderRequest;
  static deserializeBinaryFromReader(message: UpdateChannelOrderRequest, reader: jspb.BinaryReader): UpdateChannelOrderRequest;
}

export namespace UpdateChannelOrderRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    previousId: string,
    nextId: string,
  }
}

export class DeleteChannelRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChannelRequest): DeleteChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChannelRequest;
  static deserializeBinaryFromReader(message: DeleteChannelRequest, reader: jspb.BinaryReader): DeleteChannelRequest;
}

export namespace DeleteChannelRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
  }
}

export class TypingRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TypingRequest): TypingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypingRequest;
  static deserializeBinaryFromReader(message: TypingRequest, reader: jspb.BinaryReader): TypingRequest;
}

export namespace TypingRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
  }
}

