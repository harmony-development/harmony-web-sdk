// package: protocol.chat.v1
// file: chat/v1/streaming.proto

import * as jspb from "google-protobuf";
import * as harmonytypes_v1_types_pb from "../../harmonytypes/v1/types_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

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

  hasRoleMoved(): boolean;
  clearRoleMoved(): void;
  getRoleMoved(): Event.RoleMoved | undefined;
  setRoleMoved(value?: Event.RoleMoved): void;

  hasProfileUpdated(): boolean;
  clearProfileUpdated(): void;
  getProfileUpdated(): Event.ProfileUpdated | undefined;
  setProfileUpdated(value?: Event.ProfileUpdated): void;

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
    roleMoved?: Event.RoleMoved.AsObject,
    profileUpdated?: Event.ProfileUpdated.AsObject,
  }

  export class MessageSent extends jspb.Message {
    getEchoId(): number;
    setEchoId(value: number): void;

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): harmonytypes_v1_types_pb.Message | undefined;
    setMessage(value?: harmonytypes_v1_types_pb.Message): void;

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
      echoId: number,
      message?: harmonytypes_v1_types_pb.Message.AsObject,
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
    getEmbedsList(): Array<harmonytypes_v1_types_pb.Embed>;
    setEmbedsList(value: Array<harmonytypes_v1_types_pb.Embed>): void;
    addEmbeds(value?: harmonytypes_v1_types_pb.Embed, index?: number): harmonytypes_v1_types_pb.Embed;

    getUpdateEmbeds(): boolean;
    setUpdateEmbeds(value: boolean): void;

    clearActionsList(): void;
    getActionsList(): Array<harmonytypes_v1_types_pb.Action>;
    setActionsList(value: Array<harmonytypes_v1_types_pb.Action>): void;
    addActions(value?: harmonytypes_v1_types_pb.Action, index?: number): harmonytypes_v1_types_pb.Action;

    getUpdateActions(): boolean;
    setUpdateActions(value: boolean): void;

    clearAttachmentsList(): void;
    getAttachmentsList(): Array<harmonytypes_v1_types_pb.Attachment>;
    setAttachmentsList(value: Array<harmonytypes_v1_types_pb.Attachment>): void;
    addAttachments(value?: harmonytypes_v1_types_pb.Attachment, index?: number): harmonytypes_v1_types_pb.Attachment;

    getUpdateAttachments(): boolean;
    setUpdateAttachments(value: boolean): void;

    hasOverrides(): boolean;
    clearOverrides(): void;
    getOverrides(): harmonytypes_v1_types_pb.Override | undefined;
    setOverrides(value?: harmonytypes_v1_types_pb.Override): void;

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
      embedsList: Array<harmonytypes_v1_types_pb.Embed.AsObject>,
      updateEmbeds: boolean,
      actionsList: Array<harmonytypes_v1_types_pb.Action.AsObject>,
      updateActions: boolean,
      attachmentsList: Array<harmonytypes_v1_types_pb.Attachment.AsObject>,
      updateAttachments: boolean,
      overrides?: harmonytypes_v1_types_pb.Override.AsObject,
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

    getPicture(): string;
    setPicture(value: string): void;

    getUpdatePicture(): boolean;
    setUpdatePicture(value: boolean): void;

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
      picture: string,
      updatePicture: boolean,
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

  export class RoleMoved extends jspb.Message {
    getGuildId(): string;
    setGuildId(value: string): void;

    getRoleId(): string;
    setRoleId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoleMoved.AsObject;
    static toObject(includeInstance: boolean, msg: RoleMoved): RoleMoved.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoleMoved, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoleMoved;
    static deserializeBinaryFromReader(message: RoleMoved, reader: jspb.BinaryReader): RoleMoved;
  }

  export namespace RoleMoved {
    export type AsObject = {
      guildId: string,
      roleId: string,
    }
  }

  export class ProfileUpdated extends jspb.Message {
    getUserId(): string;
    setUserId(value: string): void;

    getNewUsername(): string;
    setNewUsername(value: string): void;

    getUpdateUsername(): boolean;
    setUpdateUsername(value: boolean): void;

    getNewAvatar(): string;
    setNewAvatar(value: string): void;

    getUpdateAvatar(): boolean;
    setUpdateAvatar(value: boolean): void;

    getNewStatus(): harmonytypes_v1_types_pb.UserStatusMap[keyof harmonytypes_v1_types_pb.UserStatusMap];
    setNewStatus(value: harmonytypes_v1_types_pb.UserStatusMap[keyof harmonytypes_v1_types_pb.UserStatusMap]): void;

    getUpdateStatus(): boolean;
    setUpdateStatus(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProfileUpdated.AsObject;
    static toObject(includeInstance: boolean, msg: ProfileUpdated): ProfileUpdated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProfileUpdated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProfileUpdated;
    static deserializeBinaryFromReader(message: ProfileUpdated, reader: jspb.BinaryReader): ProfileUpdated;
  }

  export namespace ProfileUpdated {
    export type AsObject = {
      userId: string,
      newUsername: string,
      updateUsername: boolean,
      newAvatar: string,
      updateAvatar: boolean,
      newStatus: harmonytypes_v1_types_pb.UserStatusMap[keyof harmonytypes_v1_types_pb.UserStatusMap],
      updateStatus: boolean,
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
    ROLE_MOVED = 14,
    PROFILE_UPDATED = 15,
  }
}

