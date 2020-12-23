// package: protocol.chat.v1
// file: chat/v1/profile.proto

import * as jspb from "google-protobuf";
import * as harmonytypes_v1_types_pb from "../../harmonytypes/v1/types_pb";

export class GetUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

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
    userId: string,
  }
}

export class GetUserResponse extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): void;

  getUserAvatar(): string;
  setUserAvatar(value: string): void;

  getUserStatus(): harmonytypes_v1_types_pb.UserStatusMap[keyof harmonytypes_v1_types_pb.UserStatusMap];
  setUserStatus(value: harmonytypes_v1_types_pb.UserStatusMap[keyof harmonytypes_v1_types_pb.UserStatusMap]): void;

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
    userStatus: harmonytypes_v1_types_pb.UserStatusMap[keyof harmonytypes_v1_types_pb.UserStatusMap],
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

export class LocalAvatarUpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalAvatarUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocalAvatarUpdateRequest): LocalAvatarUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalAvatarUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalAvatarUpdateRequest;
  static deserializeBinaryFromReader(message: LocalAvatarUpdateRequest, reader: jspb.BinaryReader): LocalAvatarUpdateRequest;
}

export namespace LocalAvatarUpdateRequest {
  export type AsObject = {
    id: string,
  }
}

export class AvatarUpdateRequest extends jspb.Message {
  getOrigin(): string;
  setOrigin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvatarUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AvatarUpdateRequest): AvatarUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvatarUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvatarUpdateRequest;
  static deserializeBinaryFromReader(message: AvatarUpdateRequest, reader: jspb.BinaryReader): AvatarUpdateRequest;
}

export namespace AvatarUpdateRequest {
  export type AsObject = {
    origin: string,
  }
}

export class StatusUpdateRequest extends jspb.Message {
  getNewStatus(): harmonytypes_v1_types_pb.UserStatusMap[keyof harmonytypes_v1_types_pb.UserStatusMap];
  setNewStatus(value: harmonytypes_v1_types_pb.UserStatusMap[keyof harmonytypes_v1_types_pb.UserStatusMap]): void;

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
    newStatus: harmonytypes_v1_types_pb.UserStatusMap[keyof harmonytypes_v1_types_pb.UserStatusMap],
  }
}

export class ProfileUpdateRequest extends jspb.Message {
  getNewUsername(): string;
  setNewUsername(value: string): void;

  getUpdateUsername(): boolean;
  setUpdateUsername(value: boolean): void;

  getNewAvatar(): string;
  setNewAvatar(value: string): void;

  getUpdateAvatar(): boolean;
  setUpdateAvatar(value: boolean): void;

  getNewStatus(): harmonytypes_v1_types_pb.UserStatusMap[keyof harmonytypes_v1_types_pb.UserStatusMap];
  setNewStatus(value: harmonytypes_v1_types_pb.UserStatusMap[keyof harmonytypes_v1_types_pb.UserStatusMap]): void;

  getUpdateStatus(): boolean;
  setUpdateStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileUpdateRequest): ProfileUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileUpdateRequest;
  static deserializeBinaryFromReader(message: ProfileUpdateRequest, reader: jspb.BinaryReader): ProfileUpdateRequest;
}

export namespace ProfileUpdateRequest {
  export type AsObject = {
    newUsername: string,
    updateUsername: boolean,
    newAvatar: string,
    updateAvatar: boolean,
    newStatus: harmonytypes_v1_types_pb.UserStatusMap[keyof harmonytypes_v1_types_pb.UserStatusMap],
    updateStatus: boolean,
  }
}

