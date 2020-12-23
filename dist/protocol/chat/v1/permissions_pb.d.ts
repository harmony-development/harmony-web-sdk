// package: protocol.chat.v1
// file: chat/v1/permissions.proto

import * as jspb from "google-protobuf";

export class QueryPermissionsRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getCheckFor(): string;
  setCheckFor(value: string): void;

  getAs(): number;
  setAs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPermissionsRequest): QueryPermissionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPermissionsRequest;
  static deserializeBinaryFromReader(message: QueryPermissionsRequest, reader: jspb.BinaryReader): QueryPermissionsRequest;
}

export namespace QueryPermissionsRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    checkFor: string,
    as: number,
  }
}

export class QueryPermissionsResponse extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPermissionsResponse): QueryPermissionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPermissionsResponse;
  static deserializeBinaryFromReader(message: QueryPermissionsResponse, reader: jspb.BinaryReader): QueryPermissionsResponse;
}

export namespace QueryPermissionsResponse {
  export type AsObject = {
    ok: boolean,
  }
}

export class Permission extends jspb.Message {
  getMatches(): string;
  setMatches(value: string): void;

  getMode(): Permission.ModeMap[keyof Permission.ModeMap];
  setMode(value: Permission.ModeMap[keyof Permission.ModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    matches: string,
    mode: Permission.ModeMap[keyof Permission.ModeMap],
  }

  export interface ModeMap {
    ALLOW: 0;
    DENY: 1;
  }

  export const Mode: ModeMap;
}

export class PermissionList extends jspb.Message {
  clearPermissionsList(): void;
  getPermissionsList(): Array<Permission>;
  setPermissionsList(value: Array<Permission>): void;
  addPermissions(value?: Permission, index?: number): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermissionList.AsObject;
  static toObject(includeInstance: boolean, msg: PermissionList): PermissionList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PermissionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermissionList;
  static deserializeBinaryFromReader(message: PermissionList, reader: jspb.BinaryReader): PermissionList;
}

export namespace PermissionList {
  export type AsObject = {
    permissionsList: Array<Permission.AsObject>,
  }
}

export class SetPermissionsRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getRoleId(): string;
  setRoleId(value: string): void;

  hasPerms(): boolean;
  clearPerms(): void;
  getPerms(): PermissionList | undefined;
  setPerms(value?: PermissionList): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPermissionsRequest): SetPermissionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPermissionsRequest;
  static deserializeBinaryFromReader(message: SetPermissionsRequest, reader: jspb.BinaryReader): SetPermissionsRequest;
}

export namespace SetPermissionsRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    roleId: string,
    perms?: PermissionList.AsObject,
  }
}

export class GetPermissionsRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getRoleId(): string;
  setRoleId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionsRequest): GetPermissionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionsRequest;
  static deserializeBinaryFromReader(message: GetPermissionsRequest, reader: jspb.BinaryReader): GetPermissionsRequest;
}

export namespace GetPermissionsRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    roleId: string,
  }
}

export class GetPermissionsResponse extends jspb.Message {
  hasPerms(): boolean;
  clearPerms(): void;
  getPerms(): PermissionList | undefined;
  setPerms(value?: PermissionList): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionsResponse): GetPermissionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionsResponse;
  static deserializeBinaryFromReader(message: GetPermissionsResponse, reader: jspb.BinaryReader): GetPermissionsResponse;
}

export namespace GetPermissionsResponse {
  export type AsObject = {
    perms?: PermissionList.AsObject,
  }
}

export class Role extends jspb.Message {
  getRoleId(): string;
  setRoleId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getColor(): number;
  setColor(value: number): void;

  getHoist(): boolean;
  setHoist(value: boolean): void;

  getPingable(): boolean;
  setPingable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    roleId: string,
    name: string,
    color: number,
    hoist: boolean,
    pingable: boolean,
  }
}

export class MoveRoleRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getRoleId(): string;
  setRoleId(value: string): void;

  getBeforeId(): string;
  setBeforeId(value: string): void;

  getAfterId(): string;
  setAfterId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveRoleRequest): MoveRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveRoleRequest;
  static deserializeBinaryFromReader(message: MoveRoleRequest, reader: jspb.BinaryReader): MoveRoleRequest;
}

export namespace MoveRoleRequest {
  export type AsObject = {
    guildId: string,
    roleId: string,
    beforeId: string,
    afterId: string,
  }
}

export class MoveRoleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MoveRoleResponse): MoveRoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveRoleResponse;
  static deserializeBinaryFromReader(message: MoveRoleResponse, reader: jspb.BinaryReader): MoveRoleResponse;
}

export namespace MoveRoleResponse {
  export type AsObject = {
  }
}

export class GetGuildRolesRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildRolesRequest): GetGuildRolesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildRolesRequest;
  static deserializeBinaryFromReader(message: GetGuildRolesRequest, reader: jspb.BinaryReader): GetGuildRolesRequest;
}

export namespace GetGuildRolesRequest {
  export type AsObject = {
    guildId: string,
  }
}

export class GetGuildRolesResponse extends jspb.Message {
  clearRolesList(): void;
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): void;
  addRoles(value?: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildRolesResponse): GetGuildRolesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildRolesResponse;
  static deserializeBinaryFromReader(message: GetGuildRolesResponse, reader: jspb.BinaryReader): GetGuildRolesResponse;
}

export namespace GetGuildRolesResponse {
  export type AsObject = {
    rolesList: Array<Role.AsObject>,
  }
}

export class AddGuildRoleRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): Role | undefined;
  setRole(value?: Role): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddGuildRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddGuildRoleRequest): AddGuildRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddGuildRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddGuildRoleRequest;
  static deserializeBinaryFromReader(message: AddGuildRoleRequest, reader: jspb.BinaryReader): AddGuildRoleRequest;
}

export namespace AddGuildRoleRequest {
  export type AsObject = {
    guildId: string,
    role?: Role.AsObject,
  }
}

export class AddGuildRoleResponse extends jspb.Message {
  getRoleId(): string;
  setRoleId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddGuildRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddGuildRoleResponse): AddGuildRoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddGuildRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddGuildRoleResponse;
  static deserializeBinaryFromReader(message: AddGuildRoleResponse, reader: jspb.BinaryReader): AddGuildRoleResponse;
}

export namespace AddGuildRoleResponse {
  export type AsObject = {
    roleId: string,
  }
}

export class DeleteGuildRoleRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getRoleId(): string;
  setRoleId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGuildRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGuildRoleRequest): DeleteGuildRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteGuildRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGuildRoleRequest;
  static deserializeBinaryFromReader(message: DeleteGuildRoleRequest, reader: jspb.BinaryReader): DeleteGuildRoleRequest;
}

export namespace DeleteGuildRoleRequest {
  export type AsObject = {
    guildId: string,
    roleId: string,
  }
}

export class ModifyGuildRoleRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): Role | undefined;
  setRole(value?: Role): void;

  getModifyName(): boolean;
  setModifyName(value: boolean): void;

  getModifyColor(): boolean;
  setModifyColor(value: boolean): void;

  getModifyHoist(): boolean;
  setModifyHoist(value: boolean): void;

  getModifyPingable(): boolean;
  setModifyPingable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyGuildRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyGuildRoleRequest): ModifyGuildRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModifyGuildRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyGuildRoleRequest;
  static deserializeBinaryFromReader(message: ModifyGuildRoleRequest, reader: jspb.BinaryReader): ModifyGuildRoleRequest;
}

export namespace ModifyGuildRoleRequest {
  export type AsObject = {
    guildId: string,
    role?: Role.AsObject,
    modifyName: boolean,
    modifyColor: boolean,
    modifyHoist: boolean,
    modifyPingable: boolean,
  }
}

export class ManageUserRolesRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  clearGiveRoleIdsList(): void;
  getGiveRoleIdsList(): Array<string>;
  setGiveRoleIdsList(value: Array<string>): void;
  addGiveRoleIds(value: string, index?: number): string;

  clearTakeRoleIdsList(): void;
  getTakeRoleIdsList(): Array<string>;
  setTakeRoleIdsList(value: Array<string>): void;
  addTakeRoleIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManageUserRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ManageUserRolesRequest): ManageUserRolesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManageUserRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManageUserRolesRequest;
  static deserializeBinaryFromReader(message: ManageUserRolesRequest, reader: jspb.BinaryReader): ManageUserRolesRequest;
}

export namespace ManageUserRolesRequest {
  export type AsObject = {
    guildId: string,
    userId: string,
    giveRoleIdsList: Array<string>,
    takeRoleIdsList: Array<string>,
  }
}

export class GetUserRolesRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRolesRequest): GetUserRolesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRolesRequest;
  static deserializeBinaryFromReader(message: GetUserRolesRequest, reader: jspb.BinaryReader): GetUserRolesRequest;
}

export namespace GetUserRolesRequest {
  export type AsObject = {
    guildId: string,
    userId: string,
  }
}

export class GetUserRolesResponse extends jspb.Message {
  clearRolesList(): void;
  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): void;
  addRoles(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRolesResponse): GetUserRolesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRolesResponse;
  static deserializeBinaryFromReader(message: GetUserRolesResponse, reader: jspb.BinaryReader): GetUserRolesResponse;
}

export namespace GetUserRolesResponse {
  export type AsObject = {
    rolesList: Array<string>,
  }
}

