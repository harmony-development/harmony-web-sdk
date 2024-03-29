// @generated by protobuf-ts 2.2.2 with parameter long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "chat/v1/private_channel.proto" (package "protocol.chat.v1", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
/**
 * PrivateChannel is a private channel between a list of users, independent of a guild.
 * It should be possible to use this channel for both text and voice communications.
 *
 * @generated from protobuf message protocol.chat.v1.PrivateChannel
 */
export interface PrivateChannel {
    /**
     * The list of users that have access to this channel.
     *
     * @generated from protobuf field: repeated uint64 members = 1;
     */
    members: string[];
    /**
     * Whether this is a direct message (1:1) channel or not.
     *
     * If a channel is a direct message, the number of recipients is two.
     * It should not be possible to have multiple direct message channels between the same two users.
     *
     * @generated from protobuf field: bool is_dm = 2;
     */
    isDm: boolean;
    /**
     * The name of the channel.
     *
     * @generated from protobuf field: optional string name = 3;
     */
    name?: string;
}
/**
 * An entry in the list of private channels.
 *
 * @generated from protobuf message protocol.chat.v1.PrivateChannelListEntry
 */
export interface PrivateChannelListEntry {
    /**
     * The channel ID of this channel list entry.
     *
     * @generated from protobuf field: uint64 channel_id = 1;
     */
    channelId: string;
    /**
     * The server ID of the homeserver of this private channel. If local, this is not set.
     *
     * @generated from protobuf field: optional string server_id = 2;
     */
    serverId?: string;
}
/**
 * Request type used in `GetPrivateChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.GetPrivateChannelRequest
 */
export interface GetPrivateChannelRequest {
    /**
     * The IDs of the channels to get data for.
     *
     * @generated from protobuf field: repeated uint64 channel_ids = 1;
     */
    channelIds: string[];
}
/**
 * Response type used in `GetPrivateChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.GetPrivateChannelResponse
 */
export interface GetPrivateChannelResponse {
    /**
     * The list of private channels.
     *
     * @generated from protobuf field: map<uint64, protocol.chat.v1.PrivateChannel> channels = 1;
     */
    channels: {
        [key: string]: PrivateChannel;
    };
}
/**
 * Request type used in `CreatePrivateChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.CreatePrivateChannelRequest
 */
export interface CreatePrivateChannelRequest {
    /**
     * The list of users that have access to this channel.
     *
     * These users will be sent an invite.
     * If `is_dm` is `true`, this must only have one member specified.
     *
     * @generated from protobuf field: repeated uint64 members = 1;
     */
    members: string[];
    /**
     * Whether this is a direct message (1:1) channel or not.
     *
     * @generated from protobuf field: bool is_dm = 2;
     */
    isDm: boolean;
    /**
     * The name of the channel.
     *
     * @generated from protobuf field: optional string name = 3;
     */
    name?: string;
}
/**
 * Response type used in `CreatePrivateChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.CreatePrivateChannelResponse
 */
export interface CreatePrivateChannelResponse {
    /**
     * The channel ID of the newly created private channel.
     *
     * @generated from protobuf field: uint64 channel_id = 1;
     */
    channelId: string;
}
/**
 * Request type used in `UpdatePrivateChannelMembers` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.UpdatePrivateChannelMembersRequest
 */
export interface UpdatePrivateChannelMembersRequest {
    /**
     * The channel ID of the private channel to update the member list for.
     *
     * @generated from protobuf field: uint64 channel_id = 1;
     */
    channelId: string;
    /**
     * The list of member IDs of members to add to the private channel.
     *
     * These users will be sent an invite.
     *
     * @generated from protobuf field: repeated uint64 added_members = 2;
     */
    addedMembers: string[];
    /**
     * The list of member IDs of members to remove from the private channel.
     *
     * @generated from protobuf field: repeated uint64 removed_members = 3;
     */
    removedMembers: string[];
}
/**
 * Request type used in `UpdatePrivateChannelMembers` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.UpdatePrivateChannelMembersResponse
 */
export interface UpdatePrivateChannelMembersResponse {
}
/**
 * Request type used in `UpdatePrivateChannelName` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.UpdatePrivateChannelNameRequest
 */
export interface UpdatePrivateChannelNameRequest {
    /**
     * The channel ID of the private channel to update the name for.
     *
     * @generated from protobuf field: uint64 channel_id = 1;
     */
    channelId: string;
    /**
     * The new name of the private channel.
     *
     * @generated from protobuf field: optional string name = 2;
     */
    name?: string;
}
/**
 * Response type used in `UpdatePrivateChannelName` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.UpdatePrivateChannelNameResponse
 */
export interface UpdatePrivateChannelNameResponse {
}
/**
 * Request type used in `DeletePrivateChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.DeletePrivateChannelRequest
 */
export interface DeletePrivateChannelRequest {
    /**
     * The channel ID of the private channel to delete.
     *
     * @generated from protobuf field: uint64 channel_id = 1;
     */
    channelId: string;
}
/**
 * Response type used in `DeletePrivateChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.DeletePrivateChannelResponse
 */
export interface DeletePrivateChannelResponse {
}
/**
 * Request type used in `GetPrivateChannelList` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.GetPrivateChannelListRequest
 */
export interface GetPrivateChannelListRequest {
}
/**
 * Response type used in `GetPrivateChannelList` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.GetPrivateChannelListResponse
 */
export interface GetPrivateChannelListResponse {
    /**
     * The list of private channels that the user is in.
     *
     * @generated from protobuf field: repeated protocol.chat.v1.PrivateChannelListEntry channels = 1;
     */
    channels: PrivateChannelListEntry[];
}
/**
 * Request type used in `JoinPrivateChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.JoinPrivateChannelRequest
 */
export interface JoinPrivateChannelRequest {
    /**
     * The channel ID of the private channel to join.
     *
     * @generated from protobuf field: uint64 channel_id = 1;
     */
    channelId: string;
}
/**
 * Response type used in `JoinPrivateChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.JoinPrivateChannelResponse
 */
export interface JoinPrivateChannelResponse {
}
/**
 * Request type used in `LeavePrivateChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.LeavePrivateChannelRequest
 */
export interface LeavePrivateChannelRequest {
    /**
     * The channel ID of the private channel to leave.
     *
     * @generated from protobuf field: uint64 channel_id = 1;
     */
    channelId: string;
}
/**
 * Response type used in `LeavePrivateChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.LeavePrivateChannelResponse
 */
export interface LeavePrivateChannelResponse {
}
// @generated message type with reflection information, may provide speed optimized methods
class PrivateChannel$Type extends MessageType<PrivateChannel> {
    constructor() {
        super("protocol.chat.v1.PrivateChannel", [
            { no: 1, name: "members", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "is_dm", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.PrivateChannel
 */
export const PrivateChannel = new PrivateChannel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PrivateChannelListEntry$Type extends MessageType<PrivateChannelListEntry> {
    constructor() {
        super("protocol.chat.v1.PrivateChannelListEntry", [
            { no: 1, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "server_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.PrivateChannelListEntry
 */
export const PrivateChannelListEntry = new PrivateChannelListEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPrivateChannelRequest$Type extends MessageType<GetPrivateChannelRequest> {
    constructor() {
        super("protocol.chat.v1.GetPrivateChannelRequest", [
            { no: 1, name: "channel_ids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.GetPrivateChannelRequest
 */
export const GetPrivateChannelRequest = new GetPrivateChannelRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPrivateChannelResponse$Type extends MessageType<GetPrivateChannelResponse> {
    constructor() {
        super("protocol.chat.v1.GetPrivateChannelResponse", [
            { no: 1, name: "channels", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "message", T: () => PrivateChannel } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.GetPrivateChannelResponse
 */
export const GetPrivateChannelResponse = new GetPrivateChannelResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreatePrivateChannelRequest$Type extends MessageType<CreatePrivateChannelRequest> {
    constructor() {
        super("protocol.chat.v1.CreatePrivateChannelRequest", [
            { no: 1, name: "members", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "is_dm", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.CreatePrivateChannelRequest
 */
export const CreatePrivateChannelRequest = new CreatePrivateChannelRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreatePrivateChannelResponse$Type extends MessageType<CreatePrivateChannelResponse> {
    constructor() {
        super("protocol.chat.v1.CreatePrivateChannelResponse", [
            { no: 1, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.CreatePrivateChannelResponse
 */
export const CreatePrivateChannelResponse = new CreatePrivateChannelResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePrivateChannelMembersRequest$Type extends MessageType<UpdatePrivateChannelMembersRequest> {
    constructor() {
        super("protocol.chat.v1.UpdatePrivateChannelMembersRequest", [
            { no: 1, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "added_members", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/ },
            { no: 3, name: "removed_members", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.UpdatePrivateChannelMembersRequest
 */
export const UpdatePrivateChannelMembersRequest = new UpdatePrivateChannelMembersRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePrivateChannelMembersResponse$Type extends MessageType<UpdatePrivateChannelMembersResponse> {
    constructor() {
        super("protocol.chat.v1.UpdatePrivateChannelMembersResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.UpdatePrivateChannelMembersResponse
 */
export const UpdatePrivateChannelMembersResponse = new UpdatePrivateChannelMembersResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePrivateChannelNameRequest$Type extends MessageType<UpdatePrivateChannelNameRequest> {
    constructor() {
        super("protocol.chat.v1.UpdatePrivateChannelNameRequest", [
            { no: 1, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.UpdatePrivateChannelNameRequest
 */
export const UpdatePrivateChannelNameRequest = new UpdatePrivateChannelNameRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePrivateChannelNameResponse$Type extends MessageType<UpdatePrivateChannelNameResponse> {
    constructor() {
        super("protocol.chat.v1.UpdatePrivateChannelNameResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.UpdatePrivateChannelNameResponse
 */
export const UpdatePrivateChannelNameResponse = new UpdatePrivateChannelNameResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeletePrivateChannelRequest$Type extends MessageType<DeletePrivateChannelRequest> {
    constructor() {
        super("protocol.chat.v1.DeletePrivateChannelRequest", [
            { no: 1, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.DeletePrivateChannelRequest
 */
export const DeletePrivateChannelRequest = new DeletePrivateChannelRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeletePrivateChannelResponse$Type extends MessageType<DeletePrivateChannelResponse> {
    constructor() {
        super("protocol.chat.v1.DeletePrivateChannelResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.DeletePrivateChannelResponse
 */
export const DeletePrivateChannelResponse = new DeletePrivateChannelResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPrivateChannelListRequest$Type extends MessageType<GetPrivateChannelListRequest> {
    constructor() {
        super("protocol.chat.v1.GetPrivateChannelListRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.GetPrivateChannelListRequest
 */
export const GetPrivateChannelListRequest = new GetPrivateChannelListRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPrivateChannelListResponse$Type extends MessageType<GetPrivateChannelListResponse> {
    constructor() {
        super("protocol.chat.v1.GetPrivateChannelListResponse", [
            { no: 1, name: "channels", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PrivateChannelListEntry }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.GetPrivateChannelListResponse
 */
export const GetPrivateChannelListResponse = new GetPrivateChannelListResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JoinPrivateChannelRequest$Type extends MessageType<JoinPrivateChannelRequest> {
    constructor() {
        super("protocol.chat.v1.JoinPrivateChannelRequest", [
            { no: 1, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.JoinPrivateChannelRequest
 */
export const JoinPrivateChannelRequest = new JoinPrivateChannelRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JoinPrivateChannelResponse$Type extends MessageType<JoinPrivateChannelResponse> {
    constructor() {
        super("protocol.chat.v1.JoinPrivateChannelResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.JoinPrivateChannelResponse
 */
export const JoinPrivateChannelResponse = new JoinPrivateChannelResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LeavePrivateChannelRequest$Type extends MessageType<LeavePrivateChannelRequest> {
    constructor() {
        super("protocol.chat.v1.LeavePrivateChannelRequest", [
            { no: 1, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.LeavePrivateChannelRequest
 */
export const LeavePrivateChannelRequest = new LeavePrivateChannelRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LeavePrivateChannelResponse$Type extends MessageType<LeavePrivateChannelResponse> {
    constructor() {
        super("protocol.chat.v1.LeavePrivateChannelResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message protocol.chat.v1.LeavePrivateChannelResponse
 */
export const LeavePrivateChannelResponse = new LeavePrivateChannelResponse$Type();
