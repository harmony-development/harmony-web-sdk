/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as ProtocolHarmonytypesV1Types from "../../harmonytypes/v1/types.pb"
export type GetChannelMessagesRequest = {
  guildId?: string
  channelId?: string
  beforeMessage?: string
}

export type GetChannelMessagesResponse = {
  reachedTop?: boolean
  messages?: ProtocolHarmonytypesV1Types.Message[]
}

export type GetMessageRequest = {
  guildId?: string
  channelId?: string
  messageId?: string
}

export type GetMessageResponse = {
  message?: ProtocolHarmonytypesV1Types.Message
}

export type DeleteMessageRequest = {
  guildId?: string
  channelId?: string
  messageId?: string
}

export type TriggerActionRequest = {
  guildId?: string
  channelId?: string
  messageId?: string
  actionId?: string
  actionData?: string
}

export type SendMessageRequest = {
  guildId?: string
  channelId?: string
  content?: ProtocolHarmonytypesV1Types.Content
  echoId?: string
  metadata?: ProtocolHarmonytypesV1Types.Metadata
  overrides?: ProtocolHarmonytypesV1Types.Override
  inReplyTo?: string
}

export type SendMessageResponse = {
  messageId?: string
}

export type UpdateMessageTextRequest = {
  guildId?: string
  channelId?: string
  messageId?: string
  newContent?: string
}