/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ProtocolHarmonytypesV1Types from "../../harmonytypes/v1/types.pb"
export type CreateChannelRequest = {
  guildId?: string
  channelName?: string
  isCategory?: boolean
  previousId?: string
  nextId?: string
  metadata?: ProtocolHarmonytypesV1Types.Metadata
}

export type CreateChannelResponse = {
  channelId?: string
}

export type GetGuildChannelsRequest = {
  guildId?: string
}

export type GetGuildChannelsResponseChannel = {
  metadata?: ProtocolHarmonytypesV1Types.Metadata
  channelId?: string
  channelName?: string
  isCategory?: boolean
}

export type GetGuildChannelsResponse = {
  channels?: GetGuildChannelsResponseChannel[]
}

export type UpdateChannelInformationRequest = {
  guildId?: string
  channelId?: string
  name?: string
  updateName?: boolean
  metadata?: ProtocolHarmonytypesV1Types.Metadata
  updateMetadata?: boolean
}

export type UpdateChannelOrderRequest = {
  guildId?: string
  channelId?: string
  previousId?: string
  nextId?: string
}

export type DeleteChannelRequest = {
  guildId?: string
  channelId?: string
}

export type TypingRequest = {
  guildId?: string
  channelId?: string
}