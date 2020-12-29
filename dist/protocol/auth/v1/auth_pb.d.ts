// package: protocol.auth.v1
// file: auth/v1/auth.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as harmonytypes_v1_types_pb from "../../harmonytypes/v1/types_pb";

export class BeginAuthResponse extends jspb.Message {
  getAuthId(): string;
  setAuthId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeginAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BeginAuthResponse): BeginAuthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BeginAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeginAuthResponse;
  static deserializeBinaryFromReader(message: BeginAuthResponse, reader: jspb.BinaryReader): BeginAuthResponse;
}

export namespace BeginAuthResponse {
  export type AsObject = {
    authId: string,
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

export class AuthStep extends jspb.Message {
  getFallbackUrl(): string;
  setFallbackUrl(value: string): void;

  hasChoice(): boolean;
  clearChoice(): void;
  getChoice(): AuthStep.Choice | undefined;
  setChoice(value?: AuthStep.Choice): void;

  hasForm(): boolean;
  clearForm(): void;
  getForm(): AuthStep.Form | undefined;
  setForm(value?: AuthStep.Form): void;

  hasSession(): boolean;
  clearSession(): void;
  getSession(): Session | undefined;
  setSession(value?: Session): void;

  hasWaiting(): boolean;
  clearWaiting(): void;
  getWaiting(): AuthStep.Waiting | undefined;
  setWaiting(value?: AuthStep.Waiting): void;

  getStepCase(): AuthStep.StepCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthStep.AsObject;
  static toObject(includeInstance: boolean, msg: AuthStep): AuthStep.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthStep, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthStep;
  static deserializeBinaryFromReader(message: AuthStep, reader: jspb.BinaryReader): AuthStep;
}

export namespace AuthStep {
  export type AsObject = {
    fallbackUrl: string,
    choice?: AuthStep.Choice.AsObject,
    form?: AuthStep.Form.AsObject,
    session?: Session.AsObject,
    waiting?: AuthStep.Waiting.AsObject,
  }

  export class Choice extends jspb.Message {
    getTitle(): string;
    setTitle(value: string): void;

    clearOptionsList(): void;
    getOptionsList(): Array<string>;
    setOptionsList(value: Array<string>): void;
    addOptions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Choice.AsObject;
    static toObject(includeInstance: boolean, msg: Choice): Choice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Choice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Choice;
    static deserializeBinaryFromReader(message: Choice, reader: jspb.BinaryReader): Choice;
  }

  export namespace Choice {
    export type AsObject = {
      title: string,
      optionsList: Array<string>,
    }
  }

  export class Form extends jspb.Message {
    getTitle(): string;
    setTitle(value: string): void;

    clearFieldsList(): void;
    getFieldsList(): Array<AuthStep.Form.FormField>;
    setFieldsList(value: Array<AuthStep.Form.FormField>): void;
    addFields(value?: AuthStep.Form.FormField, index?: number): AuthStep.Form.FormField;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Form.AsObject;
    static toObject(includeInstance: boolean, msg: Form): Form.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Form, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Form;
    static deserializeBinaryFromReader(message: Form, reader: jspb.BinaryReader): Form;
  }

  export namespace Form {
    export type AsObject = {
      title: string,
      fieldsList: Array<AuthStep.Form.FormField.AsObject>,
    }

    export class FormField extends jspb.Message {
      getName(): string;
      setName(value: string): void;

      getType(): string;
      setType(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): FormField.AsObject;
      static toObject(includeInstance: boolean, msg: FormField): FormField.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: FormField, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): FormField;
      static deserializeBinaryFromReader(message: FormField, reader: jspb.BinaryReader): FormField;
    }

    export namespace FormField {
      export type AsObject = {
        name: string,
        type: string,
      }
    }
  }

  export class Waiting extends jspb.Message {
    getTitle(): string;
    setTitle(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Waiting.AsObject;
    static toObject(includeInstance: boolean, msg: Waiting): Waiting.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Waiting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Waiting;
    static deserializeBinaryFromReader(message: Waiting, reader: jspb.BinaryReader): Waiting;
  }

  export namespace Waiting {
    export type AsObject = {
      title: string,
      description: string,
    }
  }

  export enum StepCase {
    STEP_NOT_SET = 0,
    CHOICE = 2,
    FORM = 3,
    SESSION = 4,
    WAITING = 5,
  }
}

export class NextStepRequest extends jspb.Message {
  getAuthId(): string;
  setAuthId(value: string): void;

  hasChoice(): boolean;
  clearChoice(): void;
  getChoice(): NextStepRequest.Choice | undefined;
  setChoice(value?: NextStepRequest.Choice): void;

  hasForm(): boolean;
  clearForm(): void;
  getForm(): NextStepRequest.Form | undefined;
  setForm(value?: NextStepRequest.Form): void;

  getStepCase(): NextStepRequest.StepCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NextStepRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NextStepRequest): NextStepRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NextStepRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NextStepRequest;
  static deserializeBinaryFromReader(message: NextStepRequest, reader: jspb.BinaryReader): NextStepRequest;
}

export namespace NextStepRequest {
  export type AsObject = {
    authId: string,
    choice?: NextStepRequest.Choice.AsObject,
    form?: NextStepRequest.Form.AsObject,
  }

  export class Choice extends jspb.Message {
    getChoice(): string;
    setChoice(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Choice.AsObject;
    static toObject(includeInstance: boolean, msg: Choice): Choice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Choice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Choice;
    static deserializeBinaryFromReader(message: Choice, reader: jspb.BinaryReader): Choice;
  }

  export namespace Choice {
    export type AsObject = {
      choice: string,
    }
  }

  export class FormFields extends jspb.Message {
    hasBytes(): boolean;
    clearBytes(): void;
    getBytes(): Uint8Array | string;
    getBytes_asU8(): Uint8Array;
    getBytes_asB64(): string;
    setBytes(value: Uint8Array | string): void;

    hasString(): boolean;
    clearString(): void;
    getString(): string;
    setString(value: string): void;

    hasNumber(): boolean;
    clearNumber(): void;
    getNumber(): number;
    setNumber(value: number): void;

    getFieldCase(): FormFields.FieldCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FormFields.AsObject;
    static toObject(includeInstance: boolean, msg: FormFields): FormFields.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FormFields, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FormFields;
    static deserializeBinaryFromReader(message: FormFields, reader: jspb.BinaryReader): FormFields;
  }

  export namespace FormFields {
    export type AsObject = {
      bytes: Uint8Array | string,
      string: string,
      number: number,
    }

    export enum FieldCase {
      FIELD_NOT_SET = 0,
      BYTES = 1,
      STRING = 2,
      NUMBER = 3,
    }
  }

  export class Form extends jspb.Message {
    clearFieldsList(): void;
    getFieldsList(): Array<NextStepRequest.FormFields>;
    setFieldsList(value: Array<NextStepRequest.FormFields>): void;
    addFields(value?: NextStepRequest.FormFields, index?: number): NextStepRequest.FormFields;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Form.AsObject;
    static toObject(includeInstance: boolean, msg: Form): Form.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Form, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Form;
    static deserializeBinaryFromReader(message: Form, reader: jspb.BinaryReader): Form;
  }

  export namespace Form {
    export type AsObject = {
      fieldsList: Array<NextStepRequest.FormFields.AsObject>,
    }
  }

  export enum StepCase {
    STEP_NOT_SET = 0,
    CHOICE = 2,
    FORM = 3,
  }
}

export class StepBackRequest extends jspb.Message {
  getAuthId(): string;
  setAuthId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StepBackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StepBackRequest): StepBackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StepBackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StepBackRequest;
  static deserializeBinaryFromReader(message: StepBackRequest, reader: jspb.BinaryReader): StepBackRequest;
}

export namespace StepBackRequest {
  export type AsObject = {
    authId: string,
  }
}

export class StreamStepsRequest extends jspb.Message {
  getAuthId(): string;
  setAuthId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamStepsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamStepsRequest): StreamStepsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamStepsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamStepsRequest;
  static deserializeBinaryFromReader(message: StreamStepsRequest, reader: jspb.BinaryReader): StreamStepsRequest;
}

export namespace StreamStepsRequest {
  export type AsObject = {
    authId: string,
  }
}

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

export class LoginFederatedRequest extends jspb.Message {
  getAuthToken(): string;
  setAuthToken(value: string): void;

  getDomain(): string;
  setDomain(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginFederatedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginFederatedRequest): LoginFederatedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginFederatedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginFederatedRequest;
  static deserializeBinaryFromReader(message: LoginFederatedRequest, reader: jspb.BinaryReader): LoginFederatedRequest;
}

export namespace LoginFederatedRequest {
  export type AsObject = {
    authToken: string,
    domain: string,
  }
}

