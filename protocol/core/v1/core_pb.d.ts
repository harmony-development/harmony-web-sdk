// package: protocol.core.v1
// file: core/v1/core.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Location extends jspb.Message {
  getGuildId(): string;
  setGuildId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getMessageId(): string;
  setMessageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    guildId: string,
    channelId: string,
    messageId: string,
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
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
    authorId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    editedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    content: string,
    embedsList: Array<Embed.AsObject>,
    actionsList: Array<Action.AsObject>,
    attachmentsList: Array<string>,
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
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
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
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  getChannelName(): string;
  setChannelName(value: string): void;

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
    location?: Location.AsObject,
    channelName: string,
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

export class GetGuildRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
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
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
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
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
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
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
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
    }
  }
}

export class GetChannelMessagesRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
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

export class UpdateGuildNameRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
    newGuildName: string,
  }
}

export class UpdateChannelNameRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
    newChannelName: string,
  }
}

export class UpdateMessageRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
    content: string,
    updateContent: boolean,
    embedsList: Array<Embed.AsObject>,
    updateEmbeds: boolean,
    actionsList: Array<Action.AsObject>,
    updateActions: boolean,
    attachmentsList: Array<string>,
    updateAttachments: boolean,
  }
}

export class DeleteGuildRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
  }
}

export class DeleteInviteRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
    inviteId: string,
  }
}

export class DeleteChannelRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
  }
}

export class DeleteMessageRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
  }
}

export class StreamGuildEventsRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamGuildEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamGuildEventsRequest): StreamGuildEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamGuildEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamGuildEventsRequest;
  static deserializeBinaryFromReader(message: StreamGuildEventsRequest, reader: jspb.BinaryReader): StreamGuildEventsRequest;
}

export namespace StreamGuildEventsRequest {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class GuildEvent extends jspb.Message {
  hasSentMessage(): boolean;
  clearSentMessage(): void;
  getSentMessage(): GuildEvent.MessageSent | undefined;
  setSentMessage(value?: GuildEvent.MessageSent): void;

  hasEditedMessage(): boolean;
  clearEditedMessage(): void;
  getEditedMessage(): GuildEvent.MessageUpdated | undefined;
  setEditedMessage(value?: GuildEvent.MessageUpdated): void;

  hasDeletedMessage(): boolean;
  clearDeletedMessage(): void;
  getDeletedMessage(): GuildEvent.MessageDeleted | undefined;
  setDeletedMessage(value?: GuildEvent.MessageDeleted): void;

  hasEditedChannel(): boolean;
  clearEditedChannel(): void;
  getEditedChannel(): GuildEvent.ChannelUpdated | undefined;
  setEditedChannel(value?: GuildEvent.ChannelUpdated): void;

  hasDeletedChannel(): boolean;
  clearDeletedChannel(): void;
  getDeletedChannel(): GuildEvent.ChannelDeleted | undefined;
  setDeletedChannel(value?: GuildEvent.ChannelDeleted): void;

  hasEditedGuild(): boolean;
  clearEditedGuild(): void;
  getEditedGuild(): GuildEvent.GuildUpdated | undefined;
  setEditedGuild(value?: GuildEvent.GuildUpdated): void;

  hasDeletedGuild(): boolean;
  clearDeletedGuild(): void;
  getDeletedGuild(): GuildEvent.GuildDeleted | undefined;
  setDeletedGuild(value?: GuildEvent.GuildDeleted): void;

  hasJoinedMember(): boolean;
  clearJoinedMember(): void;
  getJoinedMember(): GuildEvent.MemberJoined | undefined;
  setJoinedMember(value?: GuildEvent.MemberJoined): void;

  hasLeftMember(): boolean;
  clearLeftMember(): void;
  getLeftMember(): GuildEvent.MemberLeft | undefined;
  setLeftMember(value?: GuildEvent.MemberLeft): void;

  getEventCase(): GuildEvent.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GuildEvent.AsObject;
  static toObject(includeInstance: boolean, msg: GuildEvent): GuildEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GuildEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GuildEvent;
  static deserializeBinaryFromReader(message: GuildEvent, reader: jspb.BinaryReader): GuildEvent;
}

export namespace GuildEvent {
  export type AsObject = {
    sentMessage?: GuildEvent.MessageSent.AsObject,
    editedMessage?: GuildEvent.MessageUpdated.AsObject,
    deletedMessage?: GuildEvent.MessageDeleted.AsObject,
    editedChannel?: GuildEvent.ChannelUpdated.AsObject,
    deletedChannel?: GuildEvent.ChannelDeleted.AsObject,
    editedGuild?: GuildEvent.GuildUpdated.AsObject,
    deletedGuild?: GuildEvent.GuildDeleted.AsObject,
    joinedMember?: GuildEvent.MemberJoined.AsObject,
    leftMember?: GuildEvent.MemberLeft.AsObject,
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
    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Location | undefined;
    setLocation(value?: Location): void;

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
      location?: Location.AsObject,
      editedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      content: string,
      updateContent: boolean,
      embedsList: Array<Embed.AsObject>,
      updateEmbeds: boolean,
      actionsList: Array<Action.AsObject>,
      updateActions: boolean,
      attachmentsList: Array<string>,
      updateAttachments: boolean,
    }
  }

  export class MessageDeleted extends jspb.Message {
    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Location | undefined;
    setLocation(value?: Location): void;

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
      location?: Location.AsObject,
    }
  }

  export class ChannelUpdated extends jspb.Message {
    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Location | undefined;
    setLocation(value?: Location): void;

    getName(): string;
    setName(value: string): void;

    getUpdateName(): boolean;
    setUpdateName(value: boolean): void;

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
      location?: Location.AsObject,
      name: string,
      updateName: boolean,
    }
  }

  export class ChannelDeleted extends jspb.Message {
    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Location | undefined;
    setLocation(value?: Location): void;

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
      location?: Location.AsObject,
    }
  }

  export class GuildUpdated extends jspb.Message {
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
      name: string,
      updateName: boolean,
    }
  }

  export class GuildDeleted extends jspb.Message {
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
    }
  }

  export class MemberJoined extends jspb.Message {
    getMemberId(): string;
    setMemberId(value: string): void;

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
    }
  }

  export class MemberLeft extends jspb.Message {
    getMemberId(): string;
    setMemberId(value: string): void;

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
    }
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    SENT_MESSAGE = 1,
    EDITED_MESSAGE = 2,
    DELETED_MESSAGE = 3,
    EDITED_CHANNEL = 4,
    DELETED_CHANNEL = 5,
    EDITED_GUILD = 6,
    DELETED_GUILD = 7,
    JOINED_MEMBER = 8,
    LEFT_MEMBER = 9,
  }
}

export class StreamActionEventsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamActionEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamActionEventsRequest): StreamActionEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamActionEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamActionEventsRequest;
  static deserializeBinaryFromReader(message: StreamActionEventsRequest, reader: jspb.BinaryReader): StreamActionEventsRequest;
}

export namespace StreamActionEventsRequest {
  export type AsObject = {
  }
}

export class ActionEvent extends jspb.Message {
  hasAction(): boolean;
  clearAction(): void;
  getAction(): ActionEvent.Action | undefined;
  setAction(value?: ActionEvent.Action): void;

  getEventCase(): ActionEvent.EventCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ActionEvent): ActionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionEvent;
  static deserializeBinaryFromReader(message: ActionEvent, reader: jspb.BinaryReader): ActionEvent;
}

export namespace ActionEvent {
  export type AsObject = {
    action?: ActionEvent.Action.AsObject,
  }

  export class Action extends jspb.Message {
    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Location | undefined;
    setLocation(value?: Location): void;

    getActionId(): string;
    setActionId(value: string): void;

    getActionData(): string;
    setActionData(value: string): void;

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
      location?: Location.AsObject,
      actionId: string,
      actionData: string,
    }
  }

  export enum EventCase {
    EVENT_NOT_SET = 0,
    ACTION = 1,
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
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
  }
}

export class LeaveGuildRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
  }
}

export class JoinedLocalGuildsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinedLocalGuildsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinedLocalGuildsRequest): JoinedLocalGuildsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinedLocalGuildsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinedLocalGuildsRequest;
  static deserializeBinaryFromReader(message: JoinedLocalGuildsRequest, reader: jspb.BinaryReader): JoinedLocalGuildsRequest;
}

export namespace JoinedLocalGuildsRequest {
  export type AsObject = {
  }
}

export class JoinedLocalGuildsResponse extends jspb.Message {
  clearGuildIdList(): void;
  getGuildIdList(): Array<number>;
  setGuildIdList(value: Array<number>): void;
  addGuildId(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinedLocalGuildsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinedLocalGuildsResponse): JoinedLocalGuildsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinedLocalGuildsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinedLocalGuildsResponse;
  static deserializeBinaryFromReader(message: JoinedLocalGuildsResponse, reader: jspb.BinaryReader): JoinedLocalGuildsResponse;
}

export namespace JoinedLocalGuildsResponse {
  export type AsObject = {
    guildIdList: Array<number>,
  }
}

export class TriggerActionRequest extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

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
    location?: Location.AsObject,
    actionId: string,
    actionData: string,
  }
}

export class SendMessageRequest extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

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
    message?: Message.AsObject,
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
  LARGEENTR: 4;
}

export const ActionPresentation: ActionPresentationMap;

export interface FieldPresentationMap {
  DATA: 0;
  CAPTIONEDIMAGE: 1;
  ROW: 2;
}

export const FieldPresentation: FieldPresentationMap;

