// package: protocol.chat.v1
// file: chat/v1/guilds.proto

import * as jspb from "google-protobuf";

export class CreateGuildRequest extends jspb.Message {
  getGuildName(): string;
  setGuildName(value: string): void;

  getPictureUrl(): string;
  setPictureUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGuildRequest): CreateGuildRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGuildRequest;
  static deserializeBinaryFromReader(message: CreateGuildRequest, reader: jspb.BinaryReader): CreateGuildRequest;
}

export namespace CreateGuildRequest {
  export type AsObject = {
    guildName: string,
    pictureUrl: string,
  }
}

export class CreateGuildResponse extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGuildResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGuildResponse): CreateGuildResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGuildResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGuildResponse;
  static deserializeBinaryFromReader(message: CreateGuildResponse, reader: jspb.BinaryReader): CreateGuildResponse;
}

export namespace CreateGuildResponse {
  export type AsObject = {
    guildId: string,
  }
}

export class CreateInviteRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPossibleUses(): number;
  setPossibleUses(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInviteRequest): CreateInviteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInviteRequest;
  static deserializeBinaryFromReader(message: CreateInviteRequest, reader: jspb.BinaryReader): CreateInviteRequest;
}

export namespace CreateInviteRequest {
  export type AsObject = {
    guildId: string,
    name: string,
    possibleUses: number,
  }
}

export class CreateInviteResponse extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInviteResponse): CreateInviteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInviteResponse;
  static deserializeBinaryFromReader(message: CreateInviteResponse, reader: jspb.BinaryReader): CreateInviteResponse;
}

export namespace CreateInviteResponse {
  export type AsObject = {
    name: string,
  }
}

export class GetGuildListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildListRequest): GetGuildListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildListRequest;
  static deserializeBinaryFromReader(message: GetGuildListRequest, reader: jspb.BinaryReader): GetGuildListRequest;
}

export namespace GetGuildListRequest {
  export type AsObject = {
  }
}

export class GetGuildListResponse extends jspb.Message {
  clearGuildsList(): void;
  getGuildsList(): Array<GetGuildListResponse.GuildListEntry>;
  setGuildsList(value: Array<GetGuildListResponse.GuildListEntry>): void;
  addGuilds(value?: GetGuildListResponse.GuildListEntry, index?: number): GetGuildListResponse.GuildListEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildListResponse): GetGuildListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildListResponse;
  static deserializeBinaryFromReader(message: GetGuildListResponse, reader: jspb.BinaryReader): GetGuildListResponse;
}

export namespace GetGuildListResponse {
  export type AsObject = {
    guildsList: Array<GetGuildListResponse.GuildListEntry.AsObject>,
  }

  export class GuildListEntry extends jspb.Message {
    getGuildId(): string;
    setGuildId(value: string): void;

    getHost(): string;
    setHost(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GuildListEntry.AsObject;
    static toObject(includeInstance: boolean, msg: GuildListEntry): GuildListEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GuildListEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GuildListEntry;
    static deserializeBinaryFromReader(message: GuildListEntry, reader: jspb.BinaryReader): GuildListEntry;
  }

  export namespace GuildListEntry {
    export type AsObject = {
      guildId: string,
      host: string,
    }
  }
}

export class GetGuildRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildRequest): GetGuildRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildRequest;
  static deserializeBinaryFromReader(message: GetGuildRequest, reader: jspb.BinaryReader): GetGuildRequest;
}

export namespace GetGuildRequest {
  export type AsObject = {
    guildId: string,
  }
}

export class GetGuildResponse extends jspb.Message {
  getGuildName(): string;
  setGuildName(value: string): void;

  getGuildOwner(): string;
  setGuildOwner(value: string): void;

  getGuildPicture(): string;
  setGuildPicture(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildResponse): GetGuildResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildResponse;
  static deserializeBinaryFromReader(message: GetGuildResponse, reader: jspb.BinaryReader): GetGuildResponse;
}

export namespace GetGuildResponse {
  export type AsObject = {
    guildName: string,
    guildOwner: string,
    guildPicture: string,
  }
}

export class GetGuildInvitesRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildInvitesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildInvitesRequest): GetGuildInvitesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildInvitesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildInvitesRequest;
  static deserializeBinaryFromReader(message: GetGuildInvitesRequest, reader: jspb.BinaryReader): GetGuildInvitesRequest;
}

export namespace GetGuildInvitesRequest {
  export type AsObject = {
    guildId: string,
  }
}

export class GetGuildInvitesResponse extends jspb.Message {
  clearInvitesList(): void;
  getInvitesList(): Array<GetGuildInvitesResponse.Invite>;
  setInvitesList(value: Array<GetGuildInvitesResponse.Invite>): void;
  addInvites(value?: GetGuildInvitesResponse.Invite, index?: number): GetGuildInvitesResponse.Invite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildInvitesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildInvitesResponse): GetGuildInvitesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildInvitesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildInvitesResponse;
  static deserializeBinaryFromReader(message: GetGuildInvitesResponse, reader: jspb.BinaryReader): GetGuildInvitesResponse;
}

export namespace GetGuildInvitesResponse {
  export type AsObject = {
    invitesList: Array<GetGuildInvitesResponse.Invite.AsObject>,
  }

  export class Invite extends jspb.Message {
    getInviteId(): string;
    setInviteId(value: string): void;

    getPossibleUses(): number;
    setPossibleUses(value: number): void;

    getUseCount(): number;
    setUseCount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Invite.AsObject;
    static toObject(includeInstance: boolean, msg: Invite): Invite.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Invite, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Invite;
    static deserializeBinaryFromReader(message: Invite, reader: jspb.BinaryReader): Invite;
  }

  export namespace Invite {
    export type AsObject = {
      inviteId: string,
      possibleUses: number,
      useCount: number,
    }
  }
}

export class GetGuildMembersRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildMembersRequest): GetGuildMembersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildMembersRequest;
  static deserializeBinaryFromReader(message: GetGuildMembersRequest, reader: jspb.BinaryReader): GetGuildMembersRequest;
}

export namespace GetGuildMembersRequest {
  export type AsObject = {
    guildId: string,
  }
}

export class GetGuildMembersResponse extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<string>;
  setMembersList(value: Array<string>): void;
  addMembers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildMembersResponse): GetGuildMembersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildMembersResponse;
  static deserializeBinaryFromReader(message: GetGuildMembersResponse, reader: jspb.BinaryReader): GetGuildMembersResponse;
}

export namespace GetGuildMembersResponse {
  export type AsObject = {
    membersList: Array<string>,
  }
}

export class UpdateGuildNameRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getNewGuildName(): string;
  setNewGuildName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGuildNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGuildNameRequest): UpdateGuildNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGuildNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGuildNameRequest;
  static deserializeBinaryFromReader(message: UpdateGuildNameRequest, reader: jspb.BinaryReader): UpdateGuildNameRequest;
}

export namespace UpdateGuildNameRequest {
  export type AsObject = {
    guildId: string,
    newGuildName: string,
  }
}

export class DeleteGuildRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGuildRequest): DeleteGuildRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteGuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGuildRequest;
  static deserializeBinaryFromReader(message: DeleteGuildRequest, reader: jspb.BinaryReader): DeleteGuildRequest;
}

export namespace DeleteGuildRequest {
  export type AsObject = {
    guildId: string,
  }
}

export class DeleteInviteRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getInviteId(): string;
  setInviteId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInviteRequest): DeleteInviteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInviteRequest;
  static deserializeBinaryFromReader(message: DeleteInviteRequest, reader: jspb.BinaryReader): DeleteInviteRequest;
}

export namespace DeleteInviteRequest {
  export type AsObject = {
    guildId: string,
    inviteId: string,
  }
}

export class JoinGuildRequest extends jspb.Message {
  getInviteId(): string;
  setInviteId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGuildRequest): JoinGuildRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinGuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGuildRequest;
  static deserializeBinaryFromReader(message: JoinGuildRequest, reader: jspb.BinaryReader): JoinGuildRequest;
}

export namespace JoinGuildRequest {
  export type AsObject = {
    inviteId: string,
  }
}

export class JoinGuildResponse extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGuildResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGuildResponse): JoinGuildResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinGuildResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGuildResponse;
  static deserializeBinaryFromReader(message: JoinGuildResponse, reader: jspb.BinaryReader): JoinGuildResponse;
}

export namespace JoinGuildResponse {
  export type AsObject = {
    guildId: string,
  }
}

export class LeaveGuildRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveGuildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveGuildRequest): LeaveGuildRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaveGuildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveGuildRequest;
  static deserializeBinaryFromReader(message: LeaveGuildRequest, reader: jspb.BinaryReader): LeaveGuildRequest;
}

export namespace LeaveGuildRequest {
  export type AsObject = {
    guildId: string,
  }
}

export class AddGuildToGuildListRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getHomeserver(): string;
  setHomeserver(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddGuildToGuildListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddGuildToGuildListRequest): AddGuildToGuildListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddGuildToGuildListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddGuildToGuildListRequest;
  static deserializeBinaryFromReader(message: AddGuildToGuildListRequest, reader: jspb.BinaryReader): AddGuildToGuildListRequest;
}

export namespace AddGuildToGuildListRequest {
  export type AsObject = {
    guildId: string,
    homeserver: string,
  }
}

export class AddGuildToGuildListResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddGuildToGuildListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddGuildToGuildListResponse): AddGuildToGuildListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddGuildToGuildListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddGuildToGuildListResponse;
  static deserializeBinaryFromReader(message: AddGuildToGuildListResponse, reader: jspb.BinaryReader): AddGuildToGuildListResponse;
}

export namespace AddGuildToGuildListResponse {
  export type AsObject = {
  }
}

export class RemoveGuildFromGuildListRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getHomeserver(): string;
  setHomeserver(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveGuildFromGuildListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveGuildFromGuildListRequest): RemoveGuildFromGuildListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveGuildFromGuildListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveGuildFromGuildListRequest;
  static deserializeBinaryFromReader(message: RemoveGuildFromGuildListRequest, reader: jspb.BinaryReader): RemoveGuildFromGuildListRequest;
}

export namespace RemoveGuildFromGuildListRequest {
  export type AsObject = {
    guildId: string,
    homeserver: string,
  }
}

export class RemoveGuildFromGuildListResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveGuildFromGuildListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveGuildFromGuildListResponse): RemoveGuildFromGuildListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveGuildFromGuildListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveGuildFromGuildListResponse;
  static deserializeBinaryFromReader(message: RemoveGuildFromGuildListResponse, reader: jspb.BinaryReader): RemoveGuildFromGuildListResponse;
}

export namespace RemoveGuildFromGuildListResponse {
  export type AsObject = {
  }
}

