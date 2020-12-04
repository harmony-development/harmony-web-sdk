import { grpc } from "@improbable-eng/grpc-web";
import { Embed, Action, StreamEventsRequest, Event } from "../protocol/core/v1/core_pb";
import { UserStatusMap } from "../protocol/profile/v1/profile_pb";
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
    getKey(): Promise<UnaryOutput<import("../protocol/foundation/v1/foundation_pb").KeyReply>>;
    loginLocal(email: string, password: string): Promise<UnaryOutput<import("../protocol/foundation/v1/foundation_pb").Session>>;
    loginFederated(token: string, domain: string): Promise<UnaryOutput<import("../protocol/foundation/v1/foundation_pb").Session>>;
    register(email: string, username: string, password: string): Promise<UnaryOutput<import("../protocol/foundation/v1/foundation_pb").Session>>;
    federate(target: string): Promise<UnaryOutput<import("../protocol/foundation/v1/foundation_pb").FederateReply>>;
    createGuild(guildName: string, pictureURL?: string): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").CreateGuildResponse>>;
    createInvite(guildID: string, name?: string, possibleUses?: number): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").CreateInviteResponse>>;
    createChannel(guildID: string, channelName: string): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").CreateChannelResponse>>;
    getGuild(guildID: string): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").GetGuildResponse>>;
    getGuildInvites(guildID: string): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").GetGuildInvitesResponse>>;
    getGuildMembers(guildID: string): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").GetGuildMembersResponse>>;
    getGuildChannels(guildID: string): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").GetGuildChannelsResponse>>;
    getChannelMessages(guildID: string, channelID: string, beforeMessage?: string): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").GetChannelMessagesResponse>>;
    updateGuildName(guildID: string, newName: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    updateChannelName(guildID: string, channelID: string, newName: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    updateMessage(guildID: string, channelID: string, messageID: string, newContent?: any, newAttachments?: any, newActions?: any, newEmbeds?: any): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    deleteGuild(guildID: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    deleteInvite(guildID: string, inviteID: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    deleteChannel(guildID: string, channelID: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    deleteMessage(guildID: string, channelID: string, messageID: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    joinGuild(inviteID: string): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").JoinGuildResponse>>;
    leaveGuild(guildID: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    triggerAction(guildID: string, channelID: string, messageID: string, actionID: string, actionData?: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    sendMessage(guildID: string, channelID: string, content?: string, attachments?: string[], embeds?: Embed[], actions?: Action[]): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").SendMessageResponse>>;
    uploadFile(f: File): Promise<{
        id: string;
    }>;
    getGuildList(): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").GetGuildListResponse>>;
    getUser(userID: string): Promise<UnaryOutput<import("../protocol/profile/v1/profile_pb").GetUserResponse>>;
    getUserMetadata(appID: string): Promise<void>;
    usernameUpdate(newUsername: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    statusUpdate(newStatus: keyof UserStatusMap): Promise<void>;
    addGuildToGuildList(guildID: string, homeserver: string): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").AddGuildToGuildListResponse>>;
    getGuildRoles(guildID: string): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").GetGuildRolesResponse>>;
    moveRole(guildID: string, roleID: string, beforeID: string, afterID: string): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").MoveRoleResponse>>;
    deleteGuildRole(guildID: string, roleID: string): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    modifyGuildRole(guildID: string, roleID: string, modify: {
        name?: string;
        color?: number;
        hoist?: boolean;
        pingable?: boolean;
    }): Promise<void>;
    manageUserRoles(guildID: string, userID: string, giveRoleIDs?: string[], takeRoleIDs?: string[]): Promise<UnaryOutput<import("google-protobuf/google/protobuf/empty_pb").Empty>>;
    getUserRoles(guildID: string, userID: string): Promise<UnaryOutput<import("../protocol/core/v1/core_pb").GetUserRolesResponse>>;
}
export {};
