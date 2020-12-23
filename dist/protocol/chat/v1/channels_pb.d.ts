// package: protocol.chat.v1
// file: chat/v1/channels.proto

import * as jspb from "google-protobuf";

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

  getChannelKind(): string;
  setChannelKind(value: string): void;

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
    channelKind: string,
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
    getChannelId(): string;
    setChannelId(value: string): void;

    getChannelName(): string;
    setChannelName(value: string): void;

    getIsCategory(): boolean;
    setIsCategory(value: boolean): void;

    getKind(): string;
    setKind(value: string): void;

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
      channelId: string,
      channelName: string,
      isCategory: boolean,
      kind: string,
    }
  }
}

export class UpdateChannelNameRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getNewChannelName(): string;
  setNewChannelName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChannelNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChannelNameRequest): UpdateChannelNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateChannelNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChannelNameRequest;
  static deserializeBinaryFromReader(message: UpdateChannelNameRequest, reader: jspb.BinaryReader): UpdateChannelNameRequest;
}

export namespace UpdateChannelNameRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    newChannelName: string,
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

