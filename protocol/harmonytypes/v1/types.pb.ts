/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufAny from "../../google/protobuf/any.pb"
import * as GoogleProtobufEmpty from "../../google/protobuf/empty.pb"
import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb"

type Absent<T, K extends keyof T> = { [k in Exclude<keyof T, K>]?: undefined };
type OneOf<T> =
  | { [k in keyof T]?: undefined }
  | (
    keyof T extends infer K ?
      (K extends string & keyof T ? { [k in K]: T[K] } & Absent<T, K>
        : never)
    : never);

export enum UserStatus {
  USER_STATUS_ONLINE_UNSPECIFIED = "USER_STATUS_ONLINE_UNSPECIFIED",
  USER_STATUS_STREAMING = "USER_STATUS_STREAMING",
  USER_STATUS_DO_NOT_DISTURB = "USER_STATUS_DO_NOT_DISTURB",
  USER_STATUS_IDLE = "USER_STATUS_IDLE",
  USER_STATUS_OFFLINE = "USER_STATUS_OFFLINE",
}

export enum ActionType {
  Normal = "Normal",
  Primary = "Primary",
  Destructive = "Destructive",
}

export enum EmbedFieldPresentation {
  Data = "Data",
  CaptionedImage = "CaptionedImage",
  Row = "Row",
}

export type HarmonyMethodMetadata = {
  requiresAuthentication?: boolean
  requiresLocal?: boolean
  requiresPermissionNode?: string
}


type BaseOverride = {
  name?: string
  avatar?: string
}

export type Override = BaseOverride
  & OneOf<{ userDefined: string; webhook: GoogleProtobufEmpty.Empty; systemPlurality: GoogleProtobufEmpty.Empty; systemMessage: GoogleProtobufEmpty.Empty; bridge: GoogleProtobufEmpty.Empty }>

export type ActionButton = {
  text?: string
  url?: string
}

export type ActionDropdown = {
  text?: string
  options?: string[]
}

export type ActionInput = {
  label?: string
  wide?: boolean
}


type BaseAction = {
  actionType?: ActionType
  id?: string
}

export type Action = BaseAction
  & OneOf<{ button: ActionButton; dropdown: ActionDropdown; input: ActionInput }>

export type EmbedHeading = {
  text?: string
  subtext?: string
  url?: string
  icon?: string
}

export type EmbedField = {
  title?: string
  subtitle?: string
  body?: string
  imageUrl?: string
  presentation?: EmbedFieldPresentation
  actions?: Action[]
}

export type Embed = {
  title?: string
  body?: string
  color?: string
  header?: EmbedHeading
  footer?: EmbedHeading
  fields?: EmbedField[]
}

export type Attachment = {
  id?: string
  name?: string
  type?: string
  size?: number
  caption?: string
}

export type Metadata = {
  kind?: string
  extension?: {[key: string]: GoogleProtobufAny.Any}
}

export type ContentText = {
  content?: string
}

export type ContentEmbed = {
  embeds?: Embed
}

export type ContentFiles = {
  attachments?: Attachment[]
}


type BaseContent = {
}

export type Content = BaseContent
  & OneOf<{ textMessage: ContentText; embedMessage: ContentEmbed; filesMessage: ContentFiles }>

export type Message = {
  metadata?: Metadata
  overrides?: Override
  guildId?: string
  channelId?: string
  messageId?: string
  authorId?: string
  createdAt?: GoogleProtobufTimestamp.Timestamp
  editedAt?: GoogleProtobufTimestamp.Timestamp
  inReplyTo?: string
  content?: Content
}

export type Error = {
  identifier?: string
  humanMessage?: string
  moreDetails?: Uint8Array
}