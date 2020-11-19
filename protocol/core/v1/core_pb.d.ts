// package: protocol.core.v1
// file: core/v1/core.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Override extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  hasUserDefined(): boolean;
  clearUserDefined(): void;
  getUserDefined(): string;
  setUserDefined(value: string): void;

  hasWebhook(): boolean;
  clearWebhook(): void;
  getWebhook(): google_protobuf_empty_pb.Empty | undefined;
  setWebhook(value?: google_protobuf_empty_pb.Empty): void;

  hasSystemPlurality(): boolean;
  clearSystemPlurality(): void;
  getSystemPlurality(): google_protobuf_empty_pb.Empty | undefined;
  setSystemPlurality(value?: google_protobuf_empty_pb.Empty): void;

  hasSystemMessage(): boolean;
  clearSystemMessage(): void;
  getSystemMessage(): google_protobuf_empty_pb.Empty | undefined;
  setSystemMessage(value?: google_protobuf_empty_pb.Empty): void;

  hasBridge(): boolean;
  clearBridge(): void;
  getBridge(): google_protobuf_empty_pb.Empty | undefined;
  setBridge(value?: google_protobuf_empty_pb.Empty): void;

  getReasonCase(): Override.ReasonCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Override.AsObject;
  static toObject(includeInstance: boolean, msg: Override): Override.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Override, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Override;
  static deserializeBinaryFromReader(message: Override, reader: jspb.BinaryReader): Override;
}

export namespace Override {
  export type AsObject = {
    name: string,
    avatar: string,
    userDefined: string,
    webhook?: google_protobuf_empty_pb.Empty.AsObject,
    systemPlurality?: google_protobuf_empty_pb.Empty.AsObject,
    systemMessage?: google_protobuf_empty_pb.Empty.AsObject,
    bridge?: google_protobuf_empty_pb.Empty.AsObject,
  }

  export enum ReasonCase {
    REASON_NOT_SET = 0,
    USER_DEFINED = 3,
    WEBHOOK = 4,
    SYSTEM_PLURALITY = 5,
    SYSTEM_MESSAGE = 6,
    BRIDGE = 7,
  }
}

export class Action extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getId(): string;
  setId(value: string): void;

  getType(): ActionTypeMap[keyof ActionTypeMap];
  setType(value: ActionTypeMap[keyof ActionTypeMap]): void;

  getPresentation(): ActionPresentationMap[keyof ActionPresentationMap];
  setPresentation(value: ActionPresentationMap[keyof ActionPresentationMap]): void;

  clearChildrenList(): void;
  getChildrenList(): Array<Action>;
  setChildrenList(value: Array<Action>): void;
  addChildren(value?: Action, index?: number): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Action.AsObject;
  static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Action;
  static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
  export type AsObject = {
    text: string,
    url: string,
    id: string,
    type: ActionTypeMap[keyof ActionTypeMap],
    presentation: ActionPresentationMap[keyof ActionPresentationMap],
    childrenList: Array<Action.AsObject>,
  }
}

export class EmbedHeading extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getSubtext(): string;
  setSubtext(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbedHeading.AsObject;
  static toObject(includeInstance: boolean, msg: EmbedHeading): EmbedHeading.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmbedHeading, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbedHeading;
  static deserializeBinaryFromReader(message: EmbedHeading, reader: jspb.BinaryReader): EmbedHeading;
}

export namespace EmbedHeading {
  export type AsObject = {
    text: string,
    subtext: string,
    url: string,
    icon: string,
  }
}

export class EmbedField extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getSubtitle(): string;
  setSubtitle(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getImageUrl(): string;
  setImageUrl(value: string): void;

  getPresentation(): FieldPresentationMap[keyof FieldPresentationMap];
  setPresentation(value: FieldPresentationMap[keyof FieldPresentationMap]): void;

  clearActionsList(): void;
  getActionsList(): Array<Action>;
  setActionsList(value: Array<Action>): void;
  addActions(value?: Action, index?: number): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmbedField.AsObject;
  static toObject(includeInstance: boolean, msg: EmbedField): EmbedField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmbedField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmbedField;
  static deserializeBinaryFromReader(message: EmbedField, reader: jspb.BinaryReader): EmbedField;
}

export namespace EmbedField {
  export type AsObject = {
    title: string,
    subtitle: string,
    body: string,
    imageUrl: string,
    presentation: FieldPresentationMap[keyof FieldPresentationMap],
    actionsList: Array<Action.AsObject>,
  }
}

export class Embed extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getColor(): number;
  setColor(value: number): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): EmbedHeading | undefined;
  setHeader(value?: EmbedHeading): void;

  hasFooter(): boolean;
  clearFooter(): void;
  getFooter(): EmbedHeading | undefined;
  setFooter(value?: EmbedHeading): void;

  clearFieldsList(): void;
  getFieldsList(): Array<EmbedField>;
  setFieldsList(value: Array<EmbedField>): void;
  addFields(value?: EmbedField, index?: number): EmbedField;

  clearActionsList(): void;
  getActionsList(): Array<Action>;
  setActionsList(value: Array<Action>): void;
  addActions(value?: Action, index?: number): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Embed.AsObject;
  static toObject(includeInstance: boolean, msg: Embed): Embed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Embed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Embed;
  static deserializeBinaryFromReader(message: Embed, reader: jspb.BinaryReader): Embed;
}

export namespace Embed {
  export type AsObject = {
    title: string,
    body: string,
    color: number,
    header?: EmbedHeading.AsObject,
    footer?: EmbedHeading.AsObject,
    fieldsList: Array<EmbedField.AsObject>,
    actionsList: Array<Action.AsObject>,
  }
}

export class Message extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  getAuthorId(): string;
  setAuthorId(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEditedAt(): boolean;
  clearEditedAt(): void;
  getEditedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEditedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getContent(): string;
  setContent(value: string): void;

  clearEmbedsList(): void;
  getEmbedsList(): Array<Embed>;
  setEmbedsList(value: Array<Embed>): void;
  addEmbeds(value?: Embed, index?: number): Embed;

  clearActionsList(): void;
  getActionsList(): Array<Action>;
  setActionsList(value: Array<Action>): void;
  addActions(value?: Action, index?: number): Action;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<string>;
  setAttachmentsList(value: Array<string>): void;
  addAttachments(value: string, index?: number): string;

  getInReplyTo(): string;
  setInReplyTo(value: string): void;

  hasOverrides(): boolean;
  clearOverrides(): void;
  getOverrides(): Override | undefined;
  setOverrides(value?: Override): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    guildId: string,
    channelId: string,
    messageId: string,
    authorId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    editedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    content: string,
    embedsList: Array<Embed.AsObject>,
    actionsList: Array<Action.AsObject>,
    attachmentsList: Array<string>,
    inReplyTo: string,
    overrides?: Override.AsObject,
  }
}

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

export class CreateChannelRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelName(): string;
  setChannelName(value: string): void;

  getIsCategory(): boolean;
  setIsCategory(value: boolean): void;

  getPreviousId(): string;
  setPreviousId(value: string): void;

  getNextId(): string;
  setNextId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChannelRequest): CreateChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChannelRequest;
  static deserializeBinaryFromReader(message: CreateChannelRequest, reader: jspb.BinaryReader): CreateChannelRequest;
}

export namespace CreateChannelRequest {
  export type AsObject = {
    guildId: string,
    channelName: string,
    isCategory: boolean,
    previousId: string,
    nextId: string,
  }
}

export class CreateChannelResponse extends jspb.Message {
  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChannelResponse): CreateChannelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChannelResponse;
  static deserializeBinaryFromReader(message: CreateChannelResponse, reader: jspb.BinaryReader): CreateChannelResponse;
}

export namespace CreateChannelResponse {
  export type AsObject = {
    channelId: string,
  }
}

export class CreateEmotePackRequest extends jspb.Message {
  getPackName(): string;
  setPackName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmotePackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmotePackRequest): CreateEmotePackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEmotePackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmotePackRequest;
  static deserializeBinaryFromReader(message: CreateEmotePackRequest, reader: jspb.BinaryReader): CreateEmotePackRequest;
}

export namespace CreateEmotePackRequest {
  export type AsObject = {
    packName: string,
  }
}

export class CreateEmotePackResponse extends jspb.Message {
  getPackId(): string;
  setPackId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEmotePackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEmotePackResponse): CreateEmotePackResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEmotePackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEmotePackResponse;
  static deserializeBinaryFromReader(message: CreateEmotePackResponse, reader: jspb.BinaryReader): CreateEmotePackResponse;
}

export namespace CreateEmotePackResponse {
  export type AsObject = {
    packId: string,
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

export class GetGuildChannelsRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildChannelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildChannelsRequest): GetGuildChannelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildChannelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildChannelsRequest;
  static deserializeBinaryFromReader(message: GetGuildChannelsRequest, reader: jspb.BinaryReader): GetGuildChannelsRequest;
}

export namespace GetGuildChannelsRequest {
  export type AsObject = {
    guildId: string,
  }
}

export class GetGuildChannelsResponse extends jspb.Message {
  clearChannelsList(): void;
  getChannelsList(): Array<GetGuildChannelsResponse.Channel>;
  setChannelsList(value: Array<GetGuildChannelsResponse.Channel>): void;
  addChannels(value?: GetGuildChannelsResponse.Channel, index?: number): GetGuildChannelsResponse.Channel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGuildChannelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGuildChannelsResponse): GetGuildChannelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGuildChannelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGuildChannelsResponse;
  static deserializeBinaryFromReader(message: GetGuildChannelsResponse, reader: jspb.BinaryReader): GetGuildChannelsResponse;
}

export namespace GetGuildChannelsResponse {
  export type AsObject = {
    channelsList: Array<GetGuildChannelsResponse.Channel.AsObject>,
  }

  export class Channel extends jspb.Message {
    getChannelId(): string;
    setChannelId(value: string): void;

    getChannelName(): string;
    setChannelName(value: string): void;

    getIsCategory(): boolean;
    setIsCategory(value: boolean): void;

    getIsVoice(): boolean;
    setIsVoice(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Channel.AsObject;
    static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Channel;
    static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
  }

  export namespace Channel {
    export type AsObject = {
      channelId: string,
      channelName: string,
      isCategory: boolean,
      isVoice: boolean,
    }
  }
}

export class GetChannelMessagesRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getBeforeMessage(): string;
  setBeforeMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChannelMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChannelMessagesRequest): GetChannelMessagesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetChannelMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChannelMessagesRequest;
  static deserializeBinaryFromReader(message: GetChannelMessagesRequest, reader: jspb.BinaryReader): GetChannelMessagesRequest;
}

export namespace GetChannelMessagesRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    beforeMessage: string,
  }
}

export class GetChannelMessagesResponse extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<Message>;
  setMessagesList(value: Array<Message>): void;
  addMessages(value?: Message, index?: number): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChannelMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChannelMessagesResponse): GetChannelMessagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetChannelMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChannelMessagesResponse;
  static deserializeBinaryFromReader(message: GetChannelMessagesResponse, reader: jspb.BinaryReader): GetChannelMessagesResponse;
}

export namespace GetChannelMessagesResponse {
  export type AsObject = {
    messagesList: Array<Message.AsObject>,
  }
}

export class GetMessageRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessageRequest): GetMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessageRequest;
  static deserializeBinaryFromReader(message: GetMessageRequest, reader: jspb.BinaryReader): GetMessageRequest;
}

export namespace GetMessageRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    messageId: string,
  }
}

export class GetMessageResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMessageResponse): GetMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMessageResponse;
  static deserializeBinaryFromReader(message: GetMessageResponse, reader: jspb.BinaryReader): GetMessageResponse;
}

export namespace GetMessageResponse {
  export type AsObject = {
    message?: Message.AsObject,
  }
}

export class GetEmotePacksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmotePacksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmotePacksRequest): GetEmotePacksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmotePacksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmotePacksRequest;
  static deserializeBinaryFromReader(message: GetEmotePacksRequest, reader: jspb.BinaryReader): GetEmotePacksRequest;
}

export namespace GetEmotePacksRequest {
  export type AsObject = {
  }
}

export class GetEmotePacksResponse extends jspb.Message {
  clearPacksList(): void;
  getPacksList(): Array<GetEmotePacksResponse.EmotePack>;
  setPacksList(value: Array<GetEmotePacksResponse.EmotePack>): void;
  addPacks(value?: GetEmotePacksResponse.EmotePack, index?: number): GetEmotePacksResponse.EmotePack;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmotePacksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmotePacksResponse): GetEmotePacksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmotePacksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmotePacksResponse;
  static deserializeBinaryFromReader(message: GetEmotePacksResponse, reader: jspb.BinaryReader): GetEmotePacksResponse;
}

export namespace GetEmotePacksResponse {
  export type AsObject = {
    packsList: Array<GetEmotePacksResponse.EmotePack.AsObject>,
  }

  export class EmotePack extends jspb.Message {
    getPackId(): string;
    setPackId(value: string): void;

    getPackOwner(): string;
    setPackOwner(value: string): void;

    getPackName(): string;
    setPackName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmotePack.AsObject;
    static toObject(includeInstance: boolean, msg: EmotePack): EmotePack.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmotePack, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmotePack;
    static deserializeBinaryFromReader(message: EmotePack, reader: jspb.BinaryReader): EmotePack;
  }

  export namespace EmotePack {
    export type AsObject = {
      packId: string,
      packOwner: string,
      packName: string,
    }
  }
}

export class GetEmotePackEmotesRequest extends jspb.Message {
  getPackId(): string;
  setPackId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmotePackEmotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmotePackEmotesRequest): GetEmotePackEmotesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmotePackEmotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmotePackEmotesRequest;
  static deserializeBinaryFromReader(message: GetEmotePackEmotesRequest, reader: jspb.BinaryReader): GetEmotePackEmotesRequest;
}

export namespace GetEmotePackEmotesRequest {
  export type AsObject = {
    packId: string,
  }
}

export class GetEmotePackEmotesResponse extends jspb.Message {
  clearEmotesList(): void;
  getEmotesList(): Array<GetEmotePackEmotesResponse.Emote>;
  setEmotesList(value: Array<GetEmotePackEmotesResponse.Emote>): void;
  addEmotes(value?: GetEmotePackEmotesResponse.Emote, index?: number): GetEmotePackEmotesResponse.Emote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEmotePackEmotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEmotePackEmotesResponse): GetEmotePackEmotesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEmotePackEmotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEmotePackEmotesResponse;
  static deserializeBinaryFromReader(message: GetEmotePackEmotesResponse, reader: jspb.BinaryReader): GetEmotePackEmotesResponse;
}

export namespace GetEmotePackEmotesResponse {
  export type AsObject = {
    emotesList: Array<GetEmotePackEmotesResponse.Emote.AsObject>,
  }

  export class Emote extends jspb.Message {
    getImageId(): string;
    setImageId(value: string): void;

    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Emote.AsObject;
    static toObject(includeInstance: boolean, msg: Emote): Emote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Emote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Emote;
    static deserializeBinaryFromReader(message: Emote, reader: jspb.BinaryReader): Emote;
  }

  export namespace Emote {
    export type AsObject = {
      imageId: string,
      name: string,
    }
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

export class UpdateChannelNameRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getNewChannelName(): string;
  setNewChannelName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChannelNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChannelNameRequest): UpdateChannelNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateChannelNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChannelNameRequest;
  static deserializeBinaryFromReader(message: UpdateChannelNameRequest, reader: jspb.BinaryReader): UpdateChannelNameRequest;
}

export namespace UpdateChannelNameRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    newChannelName: string,
  }
}

export class UpdateChannelOrderRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getPreviousId(): string;
  setPreviousId(value: string): void;

  getNextId(): string;
  setNextId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChannelOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChannelOrderRequest): UpdateChannelOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateChannelOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChannelOrderRequest;
  static deserializeBinaryFromReader(message: UpdateChannelOrderRequest, reader: jspb.BinaryReader): UpdateChannelOrderRequest;
}

export namespace UpdateChannelOrderRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    previousId: string,
    nextId: string,
  }
}

export class UpdateMessageRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getUpdateContent(): boolean;
  setUpdateContent(value: boolean): void;

  clearEmbedsList(): void;
  getEmbedsList(): Array<Embed>;
  setEmbedsList(value: Array<Embed>): void;
  addEmbeds(value?: Embed, index?: number): Embed;

  getUpdateEmbeds(): boolean;
  setUpdateEmbeds(value: boolean): void;

  clearActionsList(): void;
  getActionsList(): Array<Action>;
  setActionsList(value: Array<Action>): void;
  addActions(value?: Action, index?: number): Action;

  getUpdateActions(): boolean;
  setUpdateActions(value: boolean): void;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<string>;
  setAttachmentsList(value: Array<string>): void;
  addAttachments(value: string, index?: number): string;

  getUpdateAttachments(): boolean;
  setUpdateAttachments(value: boolean): void;

  hasOverrides(): boolean;
  clearOverrides(): void;
  getOverrides(): Override | undefined;
  setOverrides(value?: Override): void;

  getUpdateOverrides(): boolean;
  setUpdateOverrides(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMessageRequest): UpdateMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMessageRequest;
  static deserializeBinaryFromReader(message: UpdateMessageRequest, reader: jspb.BinaryReader): UpdateMessageRequest;
}

export namespace UpdateMessageRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    messageId: string,
    content: string,
    updateContent: boolean,
    embedsList: Array<Embed.AsObject>,
    updateEmbeds: boolean,
    actionsList: Array<Action.AsObject>,
    updateActions: boolean,
    attachmentsList: Array<string>,
    updateAttachments: boolean,
    overrides?: Override.AsObject,
    updateOverrides: boolean,
  }
}

export class AddEmoteToPackRequest extends jspb.Message {
  getPackId(): string;
  setPackId(value: string): void;

  getImageId(): string;
  setImageId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddEmoteToPackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddEmoteToPackRequest): AddEmoteToPackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddEmoteToPackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddEmoteToPackRequest;
  static deserializeBinaryFromReader(message: AddEmoteToPackRequest, reader: jspb.BinaryReader): AddEmoteToPackRequest;
}

export namespace AddEmoteToPackRequest {
  export type AsObject = {
    packId: string,
    imageId: string,
    name: string,
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

export class DeleteChannelRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteChannelRequest): DeleteChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteChannelRequest;
  static deserializeBinaryFromReader(message: DeleteChannelRequest, reader: jspb.BinaryReader): DeleteChannelRequest;
}

export namespace DeleteChannelRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
  }
}

export class DeleteMessageRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMessageRequest): DeleteMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMessageRequest;
  static deserializeBinaryFromReader(message: DeleteMessageRequest, reader: jspb.BinaryReader): DeleteMessageRequest;
}

export namespace DeleteMessageRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    messageId: string,
  }
}

export class DeleteEmoteFromPackRequest extends jspb.Message {
  getPackId(): string;
  setPackId(value: string): void;

  getImageId(): string;
  setImageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEmoteFromPackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEmoteFromPackRequest): DeleteEmoteFromPackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEmoteFromPackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEmoteFromPackRequest;
  static deserializeBinaryFromReader(message: DeleteEmoteFromPackRequest, reader: jspb.BinaryReader): DeleteEmoteFromPackRequest;
}

export namespace DeleteEmoteFromPackRequest {
  export type AsObject = {
    packId: string,
    imageId: string,
  }
}

export class DeleteEmotePackRequest extends jspb.Message {
  getPackId(): string;
  setPackId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEmotePackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEmotePackRequest): DeleteEmotePackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEmotePackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEmotePackRequest;
  static deserializeBinaryFromReader(message: DeleteEmotePackRequest, reader: jspb.BinaryReader): DeleteEmotePackRequest;
}

export namespace DeleteEmotePackRequest {
  export type AsObject = {
    packId: string,
  }
}

export class DequipEmotePackRequest extends jspb.Message {
  getPackId(): string;
  setPackId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DequipEmotePackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DequipEmotePackRequest): DequipEmotePackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DequipEmotePackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DequipEmotePackRequest;
  static deserializeBinaryFromReader(message: DequipEmotePackRequest, reader: jspb.BinaryReader): DequipEmotePackRequest;
}

export namespace DequipEmotePackRequest {
  export type AsObject = {
    packId: string,
  }
}

export class StreamEventsRequest extends jspb.Message {
  hasSubscribeToGuild(): boolean;
  clearSubscribeToGuild(): void;
  getSubscribeToGuild(): StreamEventsRequest.SubscribeToGuild | undefined;
  setSubscribeToGuild(value?: StreamEventsRequest.SubscribeToGuild): void;

  hasSubscribeToActions(): boolean;
  clearSubscribeToActions(): void;
  getSubscribeToActions(): StreamEventsRequest.SubscribeToActions | undefined;
  setSubscribeToActions(value?: StreamEventsRequest.SubscribeToActions): void;

  hasSubscribeToHomeserverEvents(): boolean;
  clearSubscribeToHomeserverEvents(): void;
  getSubscribeToHomeserverEvents(): StreamEventsRequest.SubscribeToHomeserverEvents | undefined;
  setSubscribeToHomeserverEvents(value?: StreamEventsRequest.SubscribeToHomeserverEvents): void;

  getRequestCase(): StreamEventsRequest.RequestCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamEventsRequest): StreamEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamEventsRequest;
  static deserializeBinaryFromReader(message: StreamEventsRequest, reader: jspb.BinaryReader): StreamEventsRequest;
}

export namespace StreamEventsRequest {
  export type AsObject = {
    subscribeToGuild?: StreamEventsRequest.SubscribeToGuild.AsObject,
    subscribeToActions?: StreamEventsRequest.SubscribeToActions.AsObject,
    subscribeToHomeserverEvents?: StreamEventsRequest.SubscribeToHomeserverEvents.AsObject,
  }

  export class SubscribeToGuild extends jspb.Message {
    getGuildId(): string;
    setGuildId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeToGuild.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeToGuild): SubscribeToGuild.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeToGuild, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeToGuild;
    static deserializeBinaryFromReader(message: SubscribeToGuild, reader: jspb.BinaryReader): SubscribeToGuild;
  }

  export namespace SubscribeToGuild {
    export type AsObject = {
      guildId: string,
    }
  }

  export class SubscribeToActions extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeToActions.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeToActions): SubscribeToActions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeToActions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeToActions;
    static deserializeBinaryFromReader(message: SubscribeToActions, reader: jspb.BinaryReader): SubscribeToActions;
  }

  export namespace SubscribeToActions {
    export type AsObject = {
    }
  }

  export class SubscribeToHomeserverEvents extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeToHomeserverEvents.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeToHomeserverEvents): SubscribeToHomeserverEvents.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeToHomeserverEvents, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeToHomeserverEvents;
    static deserializeBinaryFromReader(message: SubscribeToHomeserverEvents, reader: jspb.BinaryReader): SubscribeToHomeserverEvents;
  }

  export namespace SubscribeToHomeserverEvents {
    export type AsObject = {
    }
  }

  export enum RequestCase {
    REQUEST_NOT_SET = 0,
    SUBSCRIBE_TO_GUILD = 1,
    SUBSCRIBE_TO_ACTIONS = 2,
    SUBSCRIBE_TO_HOMESERVER_EVENTS = 3,
  }
}

export class Event extends jspb.Message {
  hasGuildAddedToList(): boolean;
  clearGuildAddedToList(): void;
  getGuildAddedToList(): Event.GuildAddedToList | undefined;
  setGuildAddedToList(value?: Event.GuildAddedToList): void;

  hasGuildRemovedFromList(): boolean;
  clearGuildRemovedFromList(): void;
  getGuildRemovedFromList(): Event.GuildRemovedFromList | undefined;
  setGuildRemovedFromList(value?: Event.GuildRemovedFromList): void;

  hasActionPerformed(): boolean;
  clearActionPerformed(): void;
  getActionPerformed(): Event.ActionPerformed | undefined;
  setActionPerformed(value?: Event.ActionPerformed): void;

  hasSentMessage(): boolean;
  clearSentMessage(): void;
  getSentMessage(): Event.MessageSent | undefined;
  setSentMessage(value?: Event.MessageSent): void;

  hasEditedMessage(): boolean;
  clearEditedMessage(): void;
  getEditedMessage(): Event.MessageUpdated | undefined;
  setEditedMessage(value?: Event.MessageUpdated): void;

  hasDeletedMessage(): boolean;
  clearDeletedMessage(): void;
  getDeletedMessage(): Event.MessageDeleted | undefined;
  setDeletedMessage(value?: Event.MessageDeleted): void;

  hasCreatedChannel(): boolean;
  clearCreatedChannel(): void;
  getCreatedChannel(): Event.ChannelCreated | undefined;
  setCreatedChannel(value?: Event.ChannelCreated): void;

  hasEditedChannel(): boolean;
  clearEditedChannel(): void;
  getEditedChannel(): Event.ChannelUpdated | undefined;
  setEditedChannel(value?: Event.ChannelUpdated): void;

  hasDeletedChannel(): boolean;
  clearDeletedChannel(): void;
  getDeletedChannel(): Event.ChannelDeleted | undefined;
  setDeletedChannel(value?: Event.ChannelDeleted): void;

  hasEditedGuild(): boolean;
  clearEditedGuild(): void;
  getEditedGuild(): Event.GuildUpdated | undefined;
  setEditedGuild(value?: Event.GuildUpdated): void;

  hasDeletedGuild(): boolean;
  clearDeletedGuild(): void;
  getDeletedGuild(): Event.GuildDeleted | undefined;
  setDeletedGuild(value?: Event.GuildDeleted): void;

  hasJoinedMember(): boolean;
  clearJoinedMember(): void;
  getJoinedMember(): Event.MemberJoined | undefined;
  setJoinedMember(value?: Event.MemberJoined): void;

  hasLeftMember(): boolean;
  clearLeftMember(): void;
  getLeftMember(): Event.MemberLeft | undefined;
  setLeftMember(value?: Event.MemberLeft): void;

  getEventCase(): Event.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    guildAddedToList?: Event.GuildAddedToList.AsObject,
    guildRemovedFromList?: Event.GuildRemovedFromList.AsObject,
    actionPerformed?: Event.ActionPerformed.AsObject,
    sentMessage?: Event.MessageSent.AsObject,
    editedMessage?: Event.MessageUpdated.AsObject,
    deletedMessage?: Event.MessageDeleted.AsObject,
    createdChannel?: Event.ChannelCreated.AsObject,
    editedChannel?: Event.ChannelUpdated.AsObject,
    deletedChannel?: Event.ChannelDeleted.AsObject,
    editedGuild?: Event.GuildUpdated.AsObject,
    deletedGuild?: Event.GuildDeleted.AsObject,
    joinedMember?: Event.MemberJoined.AsObject,
    leftMember?: Event.MemberLeft.AsObject,
  }

  export class MessageSent extends jspb.Message {
    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): Message | undefined;
    setMessage(value?: Message): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageSent.AsObject;
    static toObject(includeInstance: boolean, msg: MessageSent): MessageSent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageSent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageSent;
    static deserializeBinaryFromReader(message: MessageSent, reader: jspb.BinaryReader): MessageSent;
  }

  export namespace MessageSent {
    export type AsObject = {
      message?: Message.AsObject,
    }
  }

  export class MessageUpdated extends jspb.Message {
    getGuildId(): string;
    setGuildId(value: string): void;

    getChannelId(): string;
    setChannelId(value: string): void;

    getMessageId(): string;
    setMessageId(value: string): void;

    hasEditedAt(): boolean;
    clearEditedAt(): void;
    getEditedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEditedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getContent(): string;
    setContent(value: string): void;

    getUpdateContent(): boolean;
    setUpdateContent(value: boolean): void;

    clearEmbedsList(): void;
    getEmbedsList(): Array<Embed>;
    setEmbedsList(value: Array<Embed>): void;
    addEmbeds(value?: Embed, index?: number): Embed;

    getUpdateEmbeds(): boolean;
    setUpdateEmbeds(value: boolean): void;

    clearActionsList(): void;
    getActionsList(): Array<Action>;
    setActionsList(value: Array<Action>): void;
    addActions(value?: Action, index?: number): Action;

    getUpdateActions(): boolean;
    setUpdateActions(value: boolean): void;

    clearAttachmentsList(): void;
    getAttachmentsList(): Array<string>;
    setAttachmentsList(value: Array<string>): void;
    addAttachments(value: string, index?: number): string;

    getUpdateAttachments(): boolean;
    setUpdateAttachments(value: boolean): void;

    hasOverrides(): boolean;
    clearOverrides(): void;
    getOverrides(): Override | undefined;
    setOverrides(value?: Override): void;

    getUpdateOverrides(): boolean;
    setUpdateOverrides(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: MessageUpdated): MessageUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageUpdated;
    static deserializeBinaryFromReader(message: MessageUpdated, reader: jspb.BinaryReader): MessageUpdated;
  }

  export namespace MessageUpdated {
    export type AsObject = {
      guildId: string,
      channelId: string,
      messageId: string,
      editedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      content: string,
      updateContent: boolean,
      embedsList: Array<Embed.AsObject>,
      updateEmbeds: boolean,
      actionsList: Array<Action.AsObject>,
      updateActions: boolean,
      attachmentsList: Array<string>,
      updateAttachments: boolean,
      overrides?: Override.AsObject,
      updateOverrides: boolean,
    }
  }

  export class MessageDeleted extends jspb.Message {
    getGuildId(): string;
    setGuildId(value: string): void;

    getChannelId(): string;
    setChannelId(value: string): void;

    getMessageId(): string;
    setMessageId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageDeleted.AsObject;
    static toObject(includeInstance: boolean, msg: MessageDeleted): MessageDeleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageDeleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageDeleted;
    static deserializeBinaryFromReader(message: MessageDeleted, reader: jspb.BinaryReader): MessageDeleted;
  }

  export namespace MessageDeleted {
    export type AsObject = {
      guildId: string,
      channelId: string,
      messageId: string,
    }
  }

  export class ChannelCreated extends jspb.Message {
    getGuildId(): string;
    setGuildId(value: string): void;

    getChannelId(): string;
    setChannelId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getPreviousId(): string;
    setPreviousId(value: string): void;

    getNextId(): string;
    setNextId(value: string): void;

    getIsCategory(): boolean;
    setIsCategory(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChannelCreated.AsObject;
    static toObject(includeInstance: boolean, msg: ChannelCreated): ChannelCreated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChannelCreated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChannelCreated;
    static deserializeBinaryFromReader(message: ChannelCreated, reader: jspb.BinaryReader): ChannelCreated;
  }

  export namespace ChannelCreated {
    export type AsObject = {
      guildId: string,
      channelId: string,
      name: string,
      previousId: string,
      nextId: string,
      isCategory: boolean,
    }
  }

  export class ChannelUpdated extends jspb.Message {
    getGuildId(): string;
    setGuildId(value: string): void;

    getChannelId(): string;
    setChannelId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getUpdateName(): boolean;
    setUpdateName(value: boolean): void;

    getPreviousId(): string;
    setPreviousId(value: string): void;

    getNextId(): string;
    setNextId(value: string): void;

    getUpdateOrder(): boolean;
    setUpdateOrder(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChannelUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: ChannelUpdated): ChannelUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChannelUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChannelUpdated;
    static deserializeBinaryFromReader(message: ChannelUpdated, reader: jspb.BinaryReader): ChannelUpdated;
  }

  export namespace ChannelUpdated {
    export type AsObject = {
      guildId: string,
      channelId: string,
      name: string,
      updateName: boolean,
      previousId: string,
      nextId: string,
      updateOrder: boolean,
    }
  }

  export class ChannelDeleted extends jspb.Message {
    getGuildId(): string;
    setGuildId(value: string): void;

    getChannelId(): string;
    setChannelId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChannelDeleted.AsObject;
    static toObject(includeInstance: boolean, msg: ChannelDeleted): ChannelDeleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChannelDeleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChannelDeleted;
    static deserializeBinaryFromReader(message: ChannelDeleted, reader: jspb.BinaryReader): ChannelDeleted;
  }

  export namespace ChannelDeleted {
    export type AsObject = {
      guildId: string,
      channelId: string,
    }
  }

  export class GuildUpdated extends jspb.Message {
    getGuildId(): string;
    setGuildId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getUpdateName(): boolean;
    setUpdateName(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GuildUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: GuildUpdated): GuildUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GuildUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GuildUpdated;
    static deserializeBinaryFromReader(message: GuildUpdated, reader: jspb.BinaryReader): GuildUpdated;
  }

  export namespace GuildUpdated {
    export type AsObject = {
      guildId: string,
      name: string,
      updateName: boolean,
    }
  }

  export class GuildDeleted extends jspb.Message {
    getGuildId(): string;
    setGuildId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GuildDeleted.AsObject;
    static toObject(includeInstance: boolean, msg: GuildDeleted): GuildDeleted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GuildDeleted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GuildDeleted;
    static deserializeBinaryFromReader(message: GuildDeleted, reader: jspb.BinaryReader): GuildDeleted;
  }

  export namespace GuildDeleted {
    export type AsObject = {
      guildId: string,
    }
  }

  export class MemberJoined extends jspb.Message {
    getMemberId(): string;
    setMemberId(value: string): void;

    getGuildId(): string;
    setGuildId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberJoined.AsObject;
    static toObject(includeInstance: boolean, msg: MemberJoined): MemberJoined.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberJoined, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberJoined;
    static deserializeBinaryFromReader(message: MemberJoined, reader: jspb.BinaryReader): MemberJoined;
  }

  export namespace MemberJoined {
    export type AsObject = {
      memberId: string,
      guildId: string,
    }
  }

  export class MemberLeft extends jspb.Message {
    getMemberId(): string;
    setMemberId(value: string): void;

    getGuildId(): string;
    setGuildId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberLeft.AsObject;
    static toObject(includeInstance: boolean, msg: MemberLeft): MemberLeft.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberLeft, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberLeft;
    static deserializeBinaryFromReader(message: MemberLeft, reader: jspb.BinaryReader): MemberLeft;
  }

  export namespace MemberLeft {
    export type AsObject = {
      memberId: string,
      guildId: string,
    }
  }

  export class GuildAddedToList extends jspb.Message {
    getGuildId(): string;
    setGuildId(value: string): void;

    getHomeserver(): string;
    setHomeserver(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GuildAddedToList.AsObject;
    static toObject(includeInstance: boolean, msg: GuildAddedToList): GuildAddedToList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GuildAddedToList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GuildAddedToList;
    static deserializeBinaryFromReader(message: GuildAddedToList, reader: jspb.BinaryReader): GuildAddedToList;
  }

  export namespace GuildAddedToList {
    export type AsObject = {
      guildId: string,
      homeserver: string,
    }
  }

  export class GuildRemovedFromList extends jspb.Message {
    getGuildId(): string;
    setGuildId(value: string): void;

    getHomeserver(): string;
    setHomeserver(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GuildRemovedFromList.AsObject;
    static toObject(includeInstance: boolean, msg: GuildRemovedFromList): GuildRemovedFromList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GuildRemovedFromList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GuildRemovedFromList;
    static deserializeBinaryFromReader(message: GuildRemovedFromList, reader: jspb.BinaryReader): GuildRemovedFromList;
  }

  export namespace GuildRemovedFromList {
    export type AsObject = {
      guildId: string,
      homeserver: string,
    }
  }

  export class ActionPerformed extends jspb.Message {
    getGuildId(): string;
    setGuildId(value: string): void;

    getChannelId(): string;
    setChannelId(value: string): void;

    getMessageId(): string;
    setMessageId(value: string): void;

    getActionId(): string;
    setActionId(value: string): void;

    getActionData(): string;
    setActionData(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionPerformed.AsObject;
    static toObject(includeInstance: boolean, msg: ActionPerformed): ActionPerformed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActionPerformed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionPerformed;
    static deserializeBinaryFromReader(message: ActionPerformed, reader: jspb.BinaryReader): ActionPerformed;
  }

  export namespace ActionPerformed {
    export type AsObject = {
      guildId: string,
      channelId: string,
      messageId: string,
      actionId: string,
      actionData: string,
    }
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    GUILD_ADDED_TO_LIST = 1,
    GUILD_REMOVED_FROM_LIST = 2,
    ACTION_PERFORMED = 3,
    SENT_MESSAGE = 4,
    EDITED_MESSAGE = 5,
    DELETED_MESSAGE = 6,
    CREATED_CHANNEL = 7,
    EDITED_CHANNEL = 8,
    DELETED_CHANNEL = 9,
    EDITED_GUILD = 10,
    DELETED_GUILD = 11,
    JOINED_MEMBER = 12,
    LEFT_MEMBER = 13,
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

export class TriggerActionRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  getActionId(): string;
  setActionId(value: string): void;

  getActionData(): string;
  setActionData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerActionRequest): TriggerActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerActionRequest;
  static deserializeBinaryFromReader(message: TriggerActionRequest, reader: jspb.BinaryReader): TriggerActionRequest;
}

export namespace TriggerActionRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    messageId: string,
    actionId: string,
    actionData: string,
  }
}

export class SendMessageRequest extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  clearActionsList(): void;
  getActionsList(): Array<Action>;
  setActionsList(value: Array<Action>): void;
  addActions(value?: Action, index?: number): Action;

  clearEmbedsList(): void;
  getEmbedsList(): Array<Embed>;
  setEmbedsList(value: Array<Embed>): void;
  addEmbeds(value?: Embed, index?: number): Embed;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<string>;
  setAttachmentsList(value: Array<string>): void;
  addAttachments(value: string, index?: number): string;

  getInReplyTo(): number;
  setInReplyTo(value: number): void;

  hasOverrides(): boolean;
  clearOverrides(): void;
  getOverrides(): Override | undefined;
  setOverrides(value?: Override): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
  static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
  export type AsObject = {
    guildId: string,
    channelId: string,
    content: string,
    actionsList: Array<Action.AsObject>,
    embedsList: Array<Embed.AsObject>,
    attachmentsList: Array<string>,
    inReplyTo: number,
    overrides?: Override.AsObject,
  }
}

export class SendMessageResponse extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageResponse): SendMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageResponse;
  static deserializeBinaryFromReader(message: SendMessageResponse, reader: jspb.BinaryReader): SendMessageResponse;
}

export namespace SendMessageResponse {
  export type AsObject = {
    messageId: string,
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

export interface ActionTypeMap {
  NORMAL: 0;
  PRIMARY: 1;
  DESTRUCTIVE: 2;
}

export const ActionType: ActionTypeMap;

export interface ActionPresentationMap {
  BUTTON: 0;
  DROPDOWN: 1;
  MENU: 2;
  SMALLENTRY: 3;
  LARGEENTRY: 4;
}

export const ActionPresentation: ActionPresentationMap;

export interface FieldPresentationMap {
  DATA: 0;
  CAPTIONEDIMAGE: 1;
  ROW: 2;
}

export const FieldPresentation: FieldPresentationMap;

