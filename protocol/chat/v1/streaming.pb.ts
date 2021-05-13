/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb"
import * as ProtocolHarmonytypesV1Types from "../../harmonytypes/v1/types.pb"

type Absent<T, K extends keyof T> = { [k in Exclude<keyof T, K>]?: undefined };
type OneOf<T> =
  | { [k in keyof T]?: undefined }
  | (
    keyof T extends infer K ?
      (K extends string & keyof T ? { [k in K]: T[K] } & Absent<T, K>
        : never)
    : never);

export enum EventLeaveReason {
  willingly = "willingly",
  banned = "banned",
  kicked = "kicked",
}

export type StreamEventsRequestSubscribeToGuild = {
  guildId?: string
}

export type StreamEventsRequestSubscribeToActions = {
}

export type StreamEventsRequestSubscribeToHomeserverEvents = {
}


type BaseStreamEventsRequest = {
}

export type StreamEventsRequest = BaseStreamEventsRequest
  & OneOf<{ subscribeToGuild: StreamEventsRequestSubscribeToGuild; subscribeToActions: StreamEventsRequestSubscribeToActions; subscribeToHomeserverEvents: StreamEventsRequestSubscribeToHomeserverEvents }>

export type EventMessageSent = {
  echoId?: string
  message?: ProtocolHarmonytypesV1Types.Message
}

export type EventMessageUpdated = {
  guildId?: string
  channelId?: string
  messageId?: string
  editedAt?: GoogleProtobufTimestamp.Timestamp
  content?: string
}

export type EventMessageDeleted = {
  guildId?: string
  channelId?: string
  messageId?: string
}

export type EventChannelCreated = {
  guildId?: string
  channelId?: string
  name?: string
  previousId?: string
  nextId?: string
  isCategory?: boolean
  metadata?: ProtocolHarmonytypesV1Types.Metadata
}

export type EventChannelUpdated = {
  guildId?: string
  channelId?: string
  name?: string
  updateName?: boolean
  previousId?: string
  nextId?: string
  updateOrder?: boolean
  metadata?: ProtocolHarmonytypesV1Types.Metadata
  updateMetadata?: boolean
}

export type EventChannelDeleted = {
  guildId?: string
  channelId?: string
}

export type EventGuildUpdated = {
  guildId?: string
  name?: string
  updateName?: boolean
  picture?: string
  updatePicture?: boolean
  metadata?: ProtocolHarmonytypesV1Types.Metadata
  updateMetadata?: boolean
}

export type EventGuildDeleted = {
  guildId?: string
}

export type EventMemberJoined = {
  memberId?: string
  guildId?: string
}

export type EventMemberLeft = {
  memberId?: string
  guildId?: string
  leaveReason?: EventLeaveReason
}

export type EventGuildAddedToList = {
  guildId?: string
  homeserver?: string
}

export type EventGuildRemovedFromList = {
  guildId?: string
  homeserver?: string
}

export type EventActionPerformed = {
  guildId?: string
  channelId?: string
  messageId?: string
  actionId?: string
  actionData?: string
}

export type EventRoleMoved = {
  guildId?: string
  roleId?: string
}

export type EventProfileUpdated = {
  userId?: string
  newUsername?: string
  updateUsername?: boolean
  newAvatar?: string
  updateAvatar?: boolean
  newStatus?: ProtocolHarmonytypesV1Types.UserStatus
  updateStatus?: boolean
  isBot?: boolean
  updateIsBot?: boolean
}

export type EventTyping = {
  userId?: string
  guildId?: string
  channelId?: string
}


type BaseEvent = {
}

export type Event = BaseEvent
  & OneOf<{ guildAddedToList: EventGuildAddedToList; guildRemovedFromList: EventGuildRemovedFromList; actionPerformed: EventActionPerformed; sentMessage: EventMessageSent; editedMessage: EventMessageUpdated; deletedMessage: EventMessageDeleted; createdChannel: EventChannelCreated; editedChannel: EventChannelUpdated; deletedChannel: EventChannelDeleted; editedGuild: EventGuildUpdated; deletedGuild: EventGuildDeleted; joinedMember: EventMemberJoined; leftMember: EventMemberLeft; roleMoved: EventRoleMoved; profileUpdated: EventProfileUpdated; typing: EventTyping }>