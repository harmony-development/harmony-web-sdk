/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ProtocolHarmonytypesV1Types from "../../harmonytypes/v1/types.pb"
export type CreateGuildRequest = {
  metadata?: ProtocolHarmonytypesV1Types.Metadata
  guildName?: string
  pictureUrl?: string
}

export type CreateGuildResponse = {
  guildId?: string
}

export type CreateInviteRequest = {
  guildId?: string
  name?: string
  possibleUses?: number
}

export type CreateInviteResponse = {
  name?: string
}

export type GetGuildListRequest = {
}

export type GetGuildListResponseGuildListEntry = {
  guildId?: string
  host?: string
}

export type GetGuildListResponse = {
  guilds?: GetGuildListResponseGuildListEntry[]
}

export type GetGuildRequest = {
  guildId?: string
}

export type GetGuildResponse = {
  metadata?: ProtocolHarmonytypesV1Types.Metadata
  guildName?: string
  guildOwner?: string
  guildPicture?: string
}

export type GetGuildInvitesRequest = {
  guildId?: string
}

export type GetGuildInvitesResponseInvite = {
  inviteId?: string
  possibleUses?: number
  useCount?: number
}

export type GetGuildInvitesResponse = {
  invites?: GetGuildInvitesResponseInvite[]
}

export type GetGuildMembersRequest = {
  guildId?: string
}

export type GetGuildMembersResponse = {
  members?: string[]
}

export type UpdateGuildInformationRequest = {
  guildId?: string
  newGuildName?: string
  updateGuildName?: boolean
  newGuildPicture?: string
  updateGuildPicture?: boolean
  metadata?: ProtocolHarmonytypesV1Types.Metadata
  updateMetadata?: boolean
}

export type DeleteGuildRequest = {
  guildId?: string
}

export type DeleteInviteRequest = {
  guildId?: string
  inviteId?: string
}

export type JoinGuildRequest = {
  inviteId?: string
}

export type JoinGuildResponse = {
  guildId?: string
}

export type PreviewGuildRequest = {
  inviteId?: string
}

export type PreviewGuildResponse = {
  name?: string
  avatar?: string
  memberCount?: string
}

export type LeaveGuildRequest = {
  guildId?: string
}

export type AddGuildToGuildListRequest = {
  guildId?: string
  homeserver?: string
}

export type AddGuildToGuildListResponse = {
}

export type RemoveGuildFromGuildListRequest = {
  guildId?: string
  homeserver?: string
}

export type RemoveGuildFromGuildListResponse = {
}

export type BanUserRequest = {
  guildId?: string
  userId?: string
}

export type KickUserRequest = {
  guildId?: string
  userId?: string
}

export type UnbanUserRequest = {
  guildId?: string
  userId?: string
}