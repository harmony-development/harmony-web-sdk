// package: protocol.mediaproxy.v1
// file: mediaproxy/v1/mediaproxy.proto

import * as jspb from "google-protobuf";

export class SiteMetadata extends jspb.Message {
  getSiteTitle(): string;
  setSiteTitle(value: string): void;

  getPageTitle(): string;
  setPageTitle(value: string): void;

  getKind(): string;
  setKind(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiteMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: SiteMetadata): SiteMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SiteMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiteMetadata;
  static deserializeBinaryFromReader(message: SiteMetadata, reader: jspb.BinaryReader): SiteMetadata;
}

export namespace SiteMetadata {
  export type AsObject = {
    siteTitle: string,
    pageTitle: string,
    kind: string,
    description: string,
    url: string,
    image: string,
  }
}

export class FetchLinkMetadataRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchLinkMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchLinkMetadataRequest): FetchLinkMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchLinkMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchLinkMetadataRequest;
  static deserializeBinaryFromReader(message: FetchLinkMetadataRequest, reader: jspb.BinaryReader): FetchLinkMetadataRequest;
}

export namespace FetchLinkMetadataRequest {
  export type AsObject = {
    url: string,
  }
}

export class InstantViewRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstantViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InstantViewRequest): InstantViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstantViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstantViewRequest;
  static deserializeBinaryFromReader(message: InstantViewRequest, reader: jspb.BinaryReader): InstantViewRequest;
}

export namespace InstantViewRequest {
  export type AsObject = {
    url: string,
  }
}

export class InstantViewResponse extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): SiteMetadata | undefined;
  setMetadata(value?: SiteMetadata): void;

  getContent(): string;
  setContent(value: string): void;

  getIsValid(): boolean;
  setIsValid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstantViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InstantViewResponse): InstantViewResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstantViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstantViewResponse;
  static deserializeBinaryFromReader(message: InstantViewResponse, reader: jspb.BinaryReader): InstantViewResponse;
}

export namespace InstantViewResponse {
  export type AsObject = {
    metadata?: SiteMetadata.AsObject,
    content: string,
    isValid: boolean,
  }
}

export class CanInstantViewResponse extends jspb.Message {
  getCanInstantView(): boolean;
  setCanInstantView(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CanInstantViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CanInstantViewResponse): CanInstantViewResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CanInstantViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CanInstantViewResponse;
  static deserializeBinaryFromReader(message: CanInstantViewResponse, reader: jspb.BinaryReader): CanInstantViewResponse;
}

export namespace CanInstantViewResponse {
  export type AsObject = {
    canInstantView: boolean,
  }
}

