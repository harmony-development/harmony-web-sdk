import { grpc } from "@improbable-eng/grpc-web";
import { Event, StreamEventsRequest } from "../protocol/chat/v1/streaming_pb";
import { UserStatusMap, Action, Embed } from "../protocol/harmonytypes/v1/types_pb";
import { UnaryOutput } from "@improbable-eng/grpc-web/dist/typings/unary";
import { ProtobufMessage } from "@improbable-eng/grpc-web/dist/typings/message";
import { UnaryMethodDefinition } from "@improbable-eng/grpc-web/dist/typings/service";
import EventEmitter from "eventemitter3";
declare type ServerStreamResponses = {
    [Event.EventCase.SENT_MESSAGE]: [string, Event.MessageSent.AsObject];
    [Event.EventCase.LEFT_MEMBER]: [string, Event.MemberLeft.AsObject];
    [Event.EventCase.JOINED_MEMBER]: [string, Event.MemberJoined.AsObject];
    [Event.EventCase.EDITED_MESSAGE]: [string, Event.MessageUpdated.AsObject];
    [Event.EventCase.EDITED_GUILD]: [string, Event.GuildUpdated.AsObject];
    [Event.EventCase.EDITED_CHANNEL]: [string, Event.ChannelUpdated.AsObject];
    [Event.EventCase.DELETED_MESSAGE]: [string, Event.MessageDeleted.AsObject];
    [Event.EventCase.DELETED_GUILD]: [string, Event.GuildDeleted.AsObject];
    [Event.EventCase.DELETED_CHANNEL]: [string, Event.ChannelDeleted.AsObject];
    [Event.EventCase.CREATED_CHANNEL]: [string, Event.ChannelCreated.AsObject];
    [Event.EventCase.PROFILE_UPDATED]: [string, Event.ProfileUpdated.AsObject];
    disconnect: [grpc.Code, string, grpc.Metadata];
};
export declare class Connection {
    host: string;
    session?: string;
    events: EventEmitter<ServerStreamResponses>;
    client?: grpc.Client<StreamEventsRequest, Event>;
    constructor(host: string);
    unaryReq<T1 extends ProtobufMessage, T2 extends ProtobufMessage>(descriptor: UnaryMethodDefinition<T1, T2>, request: T1, auth?: boolean): Promise<UnaryOutput<T2>>;
    /**
     * This function is an ugly bastard
     * @param msg an event message
     */
    onGuildEvent(msg: Event): void;
    beginStream(): void;
    subscribe(guildID: string): void;
    getKey(): Promise<UnaryOutput<import("../protocol/auth/v1/auth_pb").KeyReply>>;
    loginLocal(email: string, password: string): Promise<UnaryOutput<import("../protocol/auth/v1/auth_pb").Session>>;
    loginFederated(token: string, domain: string): Promise<UnaryOutput<import("../protocol/auth/v1/auth_pb").Session>>;
    register(email: string, username: string, password: string): Promise<UnaryOutput<import("../protocol/auth/v1/auth_pb").Session>>;
    federate(target: string): Promise<UnaryOutput<import("../protocol/auth/v1/auth_pb").FederateReply>>;
    createGuild(guildName: string, pictureURL?: string): Promise<UnaryOutput<import("../protocol/chat/v1/guilds_pb").CreateGuildResponse>>;
    createInvite(guildID: string, name?: string, possibleUses?: number): Promise<UnaryOutput<import("../protocol/chat/v1/guilds_pb").CreateInviteResponse>>;
    createChannel(guildID: string, channelName: string): Promise<UnaryOutput<import("../protocol/chat/v1/channels_pb").CreateChannelResponse>>;
    getGuild(guildID: string): Promise<UnaryOutput<import("../protocol/chat/v1/guilds_pb").GetGuildResponse>>;
    getGuildInvites(guildID: string): Promise<UnaryOutput<import("../protocol/chat/v1/guilds_pb").GetGuildInvitesResponse>>;
    getGuildMembers(guildID: string): Promise<UnaryOutput<import("../protocol/chat/v1/guilds_pb").GetGuildMembersResponse>>;
    getGuildChannels(guildID: string): Promise<UnaryOutput<import("../protocol/chat/v1/channels_pb").GetGuildChannelsResponse>>;
    getChannelMessages(guildID: string, channelID: string, beforeMessage?: string): Promise<UnaryOutput<import("../protocol/chat/v1/messages_pb").GetChannelMessagesResponse>>;
    updateGuildName(guildID: string, newName: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    updateChannelName(guildID: string, channelID: string, newName: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    updateMessage(guildID: string, channelID: string, messageID: string, newContent?: any, newAttachments?: any, newActions?: any, newEmbeds?: any): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    deleteGuild(guildID: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    deleteInvite(guildID: string, inviteID: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    deleteChannel(guildID: string, channelID: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    deleteMessage(guildID: string, channelID: string, messageID: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    joinGuild(inviteID: string): Promise<UnaryOutput<import("../protocol/chat/v1/guilds_pb").JoinGuildResponse>>;
    leaveGuild(guildID: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    triggerAction(guildID: string, channelID: string, messageID: string, actionID: string, actionData?: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    sendMessage(guildID: string, channelID: string, content?: string, attachments?: string[], embeds?: Embed[], actions?: Action[]): Promise<UnaryOutput<import("../protocol/chat/v1/messages_pb").SendMessageResponse>>;
    uploadFile(f: File): Promise<{
        id: string;
    }>;
    getGuildList(): Promise<UnaryOutput<import("../protocol/chat/v1/guilds_pb").GetGuildListResponse>>;
    getUser(userID: string): Promise<UnaryOutput<import("../protocol/chat/v1/profile_pb").GetUserResponse>>;
    getUserMetadata(appID: string): Promise<void>;
    profileUpdate(profile: {
        newUsername?: string;
        newAvatar?: string;
        newStatus?: UserStatusMap[keyof UserStatusMap];
    }): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    addGuildToGuildList(guildID: string, homeserver: string): Promise<UnaryOutput<import("../protocol/chat/v1/guilds_pb").AddGuildToGuildListResponse>>;
    getGuildRoles(guildID: string): Promise<UnaryOutput<import("../protocol/chat/v1/permissions_pb").GetGuildRolesResponse>>;
    moveRole(guildID: string, roleID: string, beforeID: string, afterID: string): Promise<UnaryOutput<import("../protocol/chat/v1/permissions_pb").MoveRoleResponse>>;
    deleteGuildRole(guildID: string, roleID: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    modifyGuildRole(guildID: string, roleID: string, modify: {
        name?: string;
        color?: number;
        hoist?: boolean;
        pingable?: boolean;
    }): Promise<void>;
    manageUserRoles(guildID: string, userID: string, giveRoleIDs?: string[], takeRoleIDs?: string[]): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    getUserRoles(guildID: string, userID: string): Promise<UnaryOutput<import("../protocol/chat/v1/permissions_pb").GetUserRolesResponse>>;
}
export {};
