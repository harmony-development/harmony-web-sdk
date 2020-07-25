// package: protocol.foundation.v1
// file: foundation/v1/foundation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class FederateRequest extends jspb.Message {
  getTarget(): string;
  setTarget(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FederateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FederateRequest): FederateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FederateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FederateRequest;
  static deserializeBinaryFromReader(message: FederateRequest, reader: jspb.BinaryReader): FederateRequest;
}

export namespace FederateRequest {
  export type AsObject = {
    target: string,
  }
}

export class FederateReply extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getNonce(): string;
  setNonce(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FederateReply.AsObject;
  static toObject(includeInstance: boolean, msg: FederateReply): FederateReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FederateReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FederateReply;
  static deserializeBinaryFromReader(message: FederateReply, reader: jspb.BinaryReader): FederateReply;
}

export namespace FederateReply {
  export type AsObject = {
    token: string,
    nonce: string,
  }
}

export class KeyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeyRequest): KeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyRequest;
  static deserializeBinaryFromReader(message: KeyRequest, reader: jspb.BinaryReader): KeyRequest;
}

export namespace KeyRequest {
  export type AsObject = {
  }
}

export class KeyReply extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyReply.AsObject;
  static toObject(includeInstance: boolean, msg: KeyReply): KeyReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyReply;
  static deserializeBinaryFromReader(message: KeyReply, reader: jspb.BinaryReader): KeyReply;
}

export namespace KeyReply {
  export type AsObject = {
    key: string,
  }
}

export class LoginRequest extends jspb.Message {
  hasFederated(): boolean;
  clearFederated(): void;
  getFederated(): LoginRequest.Federated | undefined;
  setFederated(value?: LoginRequest.Federated): void;

  hasLocal(): boolean;
  clearLocal(): void;
  getLocal(): LoginRequest.Local | undefined;
  setLocal(value?: LoginRequest.Local): void;

  getLoginCase(): LoginRequest.LoginCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    federated?: LoginRequest.Federated.AsObject,
    local?: LoginRequest.Local.AsObject,
  }

  export class Federated extends jspb.Message {
    getAuthToken(): string;
    setAuthToken(value: string): void;

    getDomain(): string;
    setDomain(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Federated.AsObject;
    static toObject(includeInstance: boolean, msg: Federated): Federated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Federated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Federated;
    static deserializeBinaryFromReader(message: Federated, reader: jspb.BinaryReader): Federated;
  }

  export namespace Federated {
    export type AsObject = {
      authToken: string,
      domain: string,
    }
  }

  export class Local extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Local.AsObject;
    static toObject(includeInstance: boolean, msg: Local): Local.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Local, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Local;
    static deserializeBinaryFromReader(message: Local, reader: jspb.BinaryReader): Local;
  }

  export namespace Local {
    export type AsObject = {
      email: string,
      password: string,
    }
  }

  export enum LoginCase {
    LOGIN_NOT_SET = 0,
    FEDERATED = 1,
    LOCAL = 2,
  }
}

export class RegisterRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): Uint8Array | string;
  getPassword_asU8(): Uint8Array;
  getPassword_asB64(): string;
  setPassword(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    email: string,
    username: string,
    password: Uint8Array | string,
  }
}

export class Session extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getSessionToken(): string;
  setSessionToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    userId: string,
    sessionToken: string,
  }
}

