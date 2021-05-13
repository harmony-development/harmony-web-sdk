/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ProtocolHarmonytypesV1Types from "../../harmonytypes/v1/types.pb"
export type GetUserRequest = {
  userId?: string
}

export type GetUserResponse = {
  userName?: string
  userAvatar?: string
  userStatus?: ProtocolHarmonytypesV1Types.UserStatus
  isBot?: boolean
}

export type GetUserBulkRequest = {
  userIds?: string[]
}

export type GetUserBulkResponse = {
  users?: GetUserResponse[]
}

export type GetUserMetadataRequest = {
  appId?: string
}

export type GetUserMetadataResponse = {
  metadata?: string
}

export type ProfileUpdateRequest = {
  newUsername?: string
  updateUsername?: boolean
  newAvatar?: string
  updateAvatar?: boolean
  newStatus?: ProtocolHarmonytypesV1Types.UserStatus
  updateStatus?: boolean
  isBot?: boolean
  updateIsBot?: boolean
}