// package: protocol.chat.v1
// file: chat/v1/emotes.proto

import * as jspb from "google-protobuf";

export class CreateEmotePackRequest extends jspb.Message {
  getPackName(): string;
  setPackName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmotePackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmotePackRequest): CreateEmotePackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEmotePackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmotePackRequest;
  static deserializeBinaryFromReader(message: CreateEmotePackRequest, reader: jspb.BinaryReader): CreateEmotePackRequest;
}

export namespace CreateEmotePackRequest {
  export type AsObject = {
    packName: string,
  }
}

export class CreateEmotePackResponse extends jspb.Message {
  getPackId(): string;
  setPackId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmotePackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmotePackResponse): CreateEmotePackResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEmotePackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmotePackResponse;
  static deserializeBinaryFromReader(message: CreateEmotePackResponse, reader: jspb.BinaryReader): CreateEmotePackResponse;
}

export namespace CreateEmotePackResponse {
  export type AsObject = {
    packId: string,
  }
}

export class GetEmotePacksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmotePacksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmotePacksRequest): GetEmotePacksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmotePacksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmotePacksRequest;
  static deserializeBinaryFromReader(message: GetEmotePacksRequest, reader: jspb.BinaryReader): GetEmotePacksRequest;
}

export namespace GetEmotePacksRequest {
  export type AsObject = {
  }
}

export class GetEmotePacksResponse extends jspb.Message {
  clearPacksList(): void;
  getPacksList(): Array<GetEmotePacksResponse.EmotePack>;
  setPacksList(value: Array<GetEmotePacksResponse.EmotePack>): void;
  addPacks(value?: GetEmotePacksResponse.EmotePack, index?: number): GetEmotePacksResponse.EmotePack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmotePacksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmotePacksResponse): GetEmotePacksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmotePacksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmotePacksResponse;
  static deserializeBinaryFromReader(message: GetEmotePacksResponse, reader: jspb.BinaryReader): GetEmotePacksResponse;
}

export namespace GetEmotePacksResponse {
  export type AsObject = {
    packsList: Array<GetEmotePacksResponse.EmotePack.AsObject>,
  }

  export class EmotePack extends jspb.Message {
    getPackId(): string;
    setPackId(value: string): void;

    getPackOwner(): string;
    setPackOwner(value: string): void;

    getPackName(): string;
    setPackName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmotePack.AsObject;
    static toObject(includeInstance: boolean, msg: EmotePack): EmotePack.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmotePack, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmotePack;
    static deserializeBinaryFromReader(message: EmotePack, reader: jspb.BinaryReader): EmotePack;
  }

  export namespace EmotePack {
    export type AsObject = {
      packId: string,
      packOwner: string,
      packName: string,
    }
  }
}

export class GetEmotePackEmotesRequest extends jspb.Message {
  getPackId(): string;
  setPackId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmotePackEmotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmotePackEmotesRequest): GetEmotePackEmotesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmotePackEmotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmotePackEmotesRequest;
  static deserializeBinaryFromReader(message: GetEmotePackEmotesRequest, reader: jspb.BinaryReader): GetEmotePackEmotesRequest;
}

export namespace GetEmotePackEmotesRequest {
  export type AsObject = {
    packId: string,
  }
}

export class GetEmotePackEmotesResponse extends jspb.Message {
  clearEmotesList(): void;
  getEmotesList(): Array<GetEmotePackEmotesResponse.Emote>;
  setEmotesList(value: Array<GetEmotePackEmotesResponse.Emote>): void;
  addEmotes(value?: GetEmotePackEmotesResponse.Emote, index?: number): GetEmotePackEmotesResponse.Emote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmotePackEmotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmotePackEmotesResponse): GetEmotePackEmotesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmotePackEmotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmotePackEmotesResponse;
  static deserializeBinaryFromReader(message: GetEmotePackEmotesResponse, reader: jspb.BinaryReader): GetEmotePackEmotesResponse;
}

export namespace GetEmotePackEmotesResponse {
  export type AsObject = {
    emotesList: Array<GetEmotePackEmotesResponse.Emote.AsObject>,
  }

  export class Emote extends jspb.Message {
    getImageId(): string;
    setImageId(value: string): void;

    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Emote.AsObject;
    static toObject(includeInstance: boolean, msg: Emote): Emote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Emote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Emote;
    static deserializeBinaryFromReader(message: Emote, reader: jspb.BinaryReader): Emote;
  }

  export namespace Emote {
    export type AsObject = {
      imageId: string,
      name: string,
    }
  }
}

export class AddEmoteToPackRequest extends jspb.Message {
  getPackId(): string;
  setPackId(value: string): void;

  getImageId(): string;
  setImageId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddEmoteToPackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddEmoteToPackRequest): AddEmoteToPackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddEmoteToPackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddEmoteToPackRequest;
  static deserializeBinaryFromReader(message: AddEmoteToPackRequest, reader: jspb.BinaryReader): AddEmoteToPackRequest;
}

export namespace AddEmoteToPackRequest {
  export type AsObject = {
    packId: string,
    imageId: string,
    name: string,
  }
}

export class DeleteEmoteFromPackRequest extends jspb.Message {
  getPackId(): string;
  setPackId(value: string): void;

  getImageId(): string;
  setImageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEmoteFromPackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEmoteFromPackRequest): DeleteEmoteFromPackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEmoteFromPackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEmoteFromPackRequest;
  static deserializeBinaryFromReader(message: DeleteEmoteFromPackRequest, reader: jspb.BinaryReader): DeleteEmoteFromPackRequest;
}

export namespace DeleteEmoteFromPackRequest {
  export type AsObject = {
    packId: string,
    imageId: string,
  }
}

export class DeleteEmotePackRequest extends jspb.Message {
  getPackId(): string;
  setPackId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEmotePackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEmotePackRequest): DeleteEmotePackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEmotePackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEmotePackRequest;
  static deserializeBinaryFromReader(message: DeleteEmotePackRequest, reader: jspb.BinaryReader): DeleteEmotePackRequest;
}

export namespace DeleteEmotePackRequest {
  export type AsObject = {
    packId: string,
  }
}

export class DequipEmotePackRequest extends jspb.Message {
  getPackId(): string;
  setPackId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DequipEmotePackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DequipEmotePackRequest): DequipEmotePackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DequipEmotePackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DequipEmotePackRequest;
  static deserializeBinaryFromReader(message: DequipEmotePackRequest, reader: jspb.BinaryReader): DequipEmotePackRequest;
}

export namespace DequipEmotePackRequest {
  export type AsObject = {
    packId: string,
  }
}

