/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum PermissionMode {
  Allow = "Allow",
  Deny = "Deny",
}

export type QueryPermissionsRequest = {
  guildId?: string
  channelId?: string
  checkFor?: string
  as?: string
}

export type QueryPermissionsResponse = {
  ok?: boolean
}

export type Permission = {
  matches?: string
  mode?: PermissionMode
}

export type PermissionList = {
  permissions?: Permission[]
}

export type SetPermissionsRequest = {
  guildId?: string
  channelId?: string
  roleId?: string
  perms?: PermissionList
}

export type GetPermissionsRequest = {
  guildId?: string
  channelId?: string
  roleId?: string
}

export type GetPermissionsResponse = {
  perms?: PermissionList
}

export type Role = {
  roleId?: string
  name?: string
  color?: number
  hoist?: boolean
  pingable?: boolean
}

export type MoveRoleRequest = {
  guildId?: string
  roleId?: string
  beforeId?: string
  afterId?: string
}

export type MoveRoleResponse = {
}

export type GetGuildRolesRequest = {
  guildId?: string
}

export type GetGuildRolesResponse = {
  roles?: Role[]
}

export type AddGuildRoleRequest = {
  guildId?: string
  role?: Role
}

export type AddGuildRoleResponse = {
  roleId?: string
}

export type DeleteGuildRoleRequest = {
  guildId?: string
  roleId?: string
}

export type ModifyGuildRoleRequest = {
  guildId?: string
  role?: Role
  modifyName?: boolean
  modifyColor?: boolean
  modifyHoist?: boolean
  modifyPingable?: boolean
}

export type ManageUserRolesRequest = {
  guildId?: string
  userId?: string
  giveRoleIds?: string[]
  takeRoleIds?: string[]
}

export type GetUserRolesRequest = {
  guildId?: string
  userId?: string
}

export type GetUserRolesResponse = {
  roles?: string[]
}