// package: protocol.profile.v1
// file: profile/v1/profile.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetUserRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    userId: number,
  }
}

export class GetUserResponse extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): void;

  getUserAvatar(): string;
  setUserAvatar(value: string): void;

  getUserStatus(): UserStatusMap[keyof UserStatusMap];
  setUserStatus(value: UserStatusMap[keyof UserStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    userName: string,
    userAvatar: string,
    userStatus: UserStatusMap[keyof UserStatusMap],
  }
}

export class GetUserMetadataRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserMetadataRequest): GetUserMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserMetadataRequest;
  static deserializeBinaryFromReader(message: GetUserMetadataRequest, reader: jspb.BinaryReader): GetUserMetadataRequest;
}

export namespace GetUserMetadataRequest {
  export type AsObject = {
    appId: string,
  }
}

export class GetUserMetadataResponse extends jspb.Message {
  getMetadata(): string;
  setMetadata(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserMetadataResponse): GetUserMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserMetadataResponse;
  static deserializeBinaryFromReader(message: GetUserMetadataResponse, reader: jspb.BinaryReader): GetUserMetadataResponse;
}

export namespace GetUserMetadataResponse {
  export type AsObject = {
    metadata: string,
  }
}

export class UsernameUpdateRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsernameUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UsernameUpdateRequest): UsernameUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsernameUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsernameUpdateRequest;
  static deserializeBinaryFromReader(message: UsernameUpdateRequest, reader: jspb.BinaryReader): UsernameUpdateRequest;
}

export namespace UsernameUpdateRequest {
  export type AsObject = {
    userName: string,
  }
}

export class StatusUpdateRequest extends jspb.Message {
  getNewStatus(): UserStatusMap[keyof UserStatusMap];
  setNewStatus(value: UserStatusMap[keyof UserStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusUpdateRequest): StatusUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusUpdateRequest;
  static deserializeBinaryFromReader(message: StatusUpdateRequest, reader: jspb.BinaryReader): StatusUpdateRequest;
}

export namespace StatusUpdateRequest {
  export type AsObject = {
    newStatus: UserStatusMap[keyof UserStatusMap],
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

