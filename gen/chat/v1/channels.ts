// @generated by protobuf-ts 1.0.13 with parameters long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "chat/v1/channels.proto" (package "protocol.chat.v1", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { ItemPosition } from "../../harmonytypes/v1/types";
import { Metadata } from "../../harmonytypes/v1/types";
/**
 * An object representing a channel, without the ID.
 *
 * @generated from protobuf message protocol.chat.v1.Channel
 */
export interface Channel {
    /**
     * The name of this channel.
     *
     * @generated from protobuf field: string channel_name = 1;
     */
    channelName: string;
    /**
     * Whether this channel is a category or not.
     *
     * @generated from protobuf field: bool is_category = 2;
     */
    isCategory: boolean;
    /**
     * The metadata of this channel.
     *
     * @generated from protobuf field: optional protocol.harmonytypes.v1.Metadata metadata = 3;
     */
    metadata?: Metadata;
}
/**
 * The channel alongside with an ID.
 *
 * @generated from protobuf message protocol.chat.v1.ChannelWithId
 */
export interface ChannelWithId {
    /**
     * ID of the channel.
     *
     * @generated from protobuf field: uint64 channel_id = 1;
     */
    channelId: string;
    /**
     * The channel data.
     *
     * @generated from protobuf field: protocol.chat.v1.Channel channel = 2;
     */
    channel?: Channel;
}
/**
 * Channel Kinds:
 *
 * Channel kinds specified in an official Harmony protocol will start with a
 * "h." prefix. Third-party extensions should not use the "h." prefix. If no
 * kind is specified, the channel is a text channel.
 *
 * Kinds indicate additional functionality a channel may have: for example,
 * h.voice can indicate that a channel has voice functionalities alongside
 * the usual text fare.
 *
 * Used in the `CreateChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.CreateChannelRequest
 */
export interface CreateChannelRequest {
    /**
     * Guild ID of the guild to create a channel in.
     *
     * @generated from protobuf field: uint64 guild_id = 1;
     */
    guildId: string;
    /**
     * The name of this channel.
     *
     * @generated from protobuf field: string channel_name = 2;
     */
    channelName: string;
    /**
     * Whether this channel is a category or not.
     *
     * @generated from protobuf field: bool is_category = 3;
     */
    isCategory: boolean;
    /**
     * The metadata of this channel.
     *
     * @generated from protobuf field: optional protocol.harmonytypes.v1.Metadata metadata = 4;
     */
    metadata?: Metadata;
    /**
     * The position of your new channel in the channel list.
     *
     * If not specified, it will be put at the bottom of the channel list.
     *
     * @generated from protobuf field: optional protocol.harmonytypes.v1.ItemPosition position = 5;
     */
    position?: ItemPosition;
}
/**
 * Used in the `CreateChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.CreateChannelResponse
 */
export interface CreateChannelResponse {
    /**
     * ID of the channel that was created.
     *
     * @generated from protobuf field: uint64 channel_id = 1;
     */
    channelId: string;
}
/**
 * Used in the `GetGuildChannels` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.GetGuildChannelsRequest
 */
export interface GetGuildChannelsRequest {
    /**
     * Guild ID of the guild you want to get channels from.
     *
     * @generated from protobuf field: uint64 guild_id = 1;
     */
    guildId: string;
}
/**
 * Used in the `GetGuildChannels` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.GetGuildChannelsResponse
 */
export interface GetGuildChannelsResponse {
    /**
     * Channels' data and ID the server responded with.
     *
     * @generated from protobuf field: repeated protocol.chat.v1.ChannelWithId channels = 1;
     */
    channels: ChannelWithId[];
}
/**
 * Used in the `UpdateChannelInformation` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.UpdateChannelInformationRequest
 */
export interface UpdateChannelInformationRequest {
    /**
     * Guild ID of the guild where the channel is.
     *
     * @generated from protobuf field: uint64 guild_id = 1;
     */
    guildId: string;
    /**
     * Channel ID of the channel you want to change the information of.
     *
     * @generated from protobuf field: uint64 channel_id = 2;
     */
    channelId: string;
    /**
     * New name to set for this channel.
     *
     * @generated from protobuf field: optional string new_name = 3;
     */
    newName?: string;
    /**
     * New metadata to set for this channel.
     *
     * @generated from protobuf field: optional protocol.harmonytypes.v1.Metadata new_metadata = 4;
     */
    newMetadata?: Metadata;
}
/**
 * Used in the `UpdateChannelInformation` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.UpdateChannelInformationResponse
 */
export interface UpdateChannelInformationResponse {
}
/**
 * Used in the `UpdateChannelOrder` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.UpdateChannelOrderRequest
 */
export interface UpdateChannelOrderRequest {
    /**
     * Guild ID of the guild that has the channel.
     *
     * @generated from protobuf field: uint64 guild_id = 1;
     */
    guildId: string;
    /**
     * Channel ID of the channel that you want to move.
     *
     * @generated from protobuf field: uint64 channel_id = 2;
     */
    channelId: string;
    /**
     * The new position of this channel.
     *
     * @generated from protobuf field: protocol.harmonytypes.v1.ItemPosition new_position = 3;
     */
    newPosition?: ItemPosition;
}
/**
 * Used in the `UpdateChannelOrder` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.UpdateChannelOrderResponse
 */
export interface UpdateChannelOrderResponse {
}
/**
 * Request specifiying the order of all channels in a guild at once
 *
 * @generated from protobuf message protocol.chat.v1.UpdateAllChannelOrderRequest
 */
export interface UpdateAllChannelOrderRequest {
    /**
     * guild_id: the guild to specify the new channel order for
     *
     * @generated from protobuf field: uint64 guild_id = 1;
     */
    guildId: string;
    /**
     * channel_ids: the new order of channel ids
     *
     * @generated from protobuf field: repeated uint64 channel_ids = 2;
     */
    channelIds: string[];
}
/**
 * Used in the `UpdateAllChannelOrder` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.UpdateAllChannelOrderResponse
 */
export interface UpdateAllChannelOrderResponse {
}
/**
 * Used in the `DeleteChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.DeleteChannelRequest
 */
export interface DeleteChannelRequest {
    /**
     * Guild ID of the guild that has the channel.
     *
     * @generated from protobuf field: uint64 guild_id = 1;
     */
    guildId: string;
    /**
     * Channel ID of the channel you want to delete.
     *
     * @generated from protobuf field: uint64 channel_id = 2;
     */
    channelId: string;
}
/**
 * Used in the `DeleteChannel` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.DeleteChannelResponse
 */
export interface DeleteChannelResponse {
}
/**
 * Used in `Typing` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.TypingRequest
 */
export interface TypingRequest {
    /**
     * The guild id of the channel the user is typing in.
     *
     * @generated from protobuf field: uint64 guild_id = 1;
     */
    guildId: string;
    /**
     * The channel id of the channel the user is typing in.
     *
     * @generated from protobuf field: uint64 channel_id = 2;
     */
    channelId: string;
}
/**
 * Used in `Typing` endpoint.
 *
 * @generated from protobuf message protocol.chat.v1.TypingResponse
 */
export interface TypingResponse {
}
/**
 * Type for protobuf message protocol.chat.v1.Channel
 */
class Channel$Type extends MessageType<Channel> {
    constructor() {
        super("protocol.chat.v1.Channel", [
            { no: 1, name: "channel_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "is_category", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "metadata", kind: "message", T: () => Metadata }
        ]);
    }
}
export const Channel = new Channel$Type();
/**
 * Type for protobuf message protocol.chat.v1.ChannelWithId
 */
class ChannelWithId$Type extends MessageType<ChannelWithId> {
    constructor() {
        super("protocol.chat.v1.ChannelWithId", [
            { no: 1, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "channel", kind: "message", T: () => Channel }
        ]);
    }
}
export const ChannelWithId = new ChannelWithId$Type();
/**
 * Type for protobuf message protocol.chat.v1.CreateChannelRequest
 */
class CreateChannelRequest$Type extends MessageType<CreateChannelRequest> {
    constructor() {
        super("protocol.chat.v1.CreateChannelRequest", [
            { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "channel_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "is_category", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "metadata", kind: "message", T: () => Metadata },
            { no: 5, name: "position", kind: "message", T: () => ItemPosition }
        ]);
    }
}
export const CreateChannelRequest = new CreateChannelRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.CreateChannelResponse
 */
class CreateChannelResponse$Type extends MessageType<CreateChannelResponse> {
    constructor() {
        super("protocol.chat.v1.CreateChannelResponse", [
            { no: 1, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
export const CreateChannelResponse = new CreateChannelResponse$Type();
/**
 * Type for protobuf message protocol.chat.v1.GetGuildChannelsRequest
 */
class GetGuildChannelsRequest$Type extends MessageType<GetGuildChannelsRequest> {
    constructor() {
        super("protocol.chat.v1.GetGuildChannelsRequest", [
            { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
export const GetGuildChannelsRequest = new GetGuildChannelsRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.GetGuildChannelsResponse
 */
class GetGuildChannelsResponse$Type extends MessageType<GetGuildChannelsResponse> {
    constructor() {
        super("protocol.chat.v1.GetGuildChannelsResponse", [
            { no: 1, name: "channels", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChannelWithId }
        ]);
    }
}
export const GetGuildChannelsResponse = new GetGuildChannelsResponse$Type();
/**
 * Type for protobuf message protocol.chat.v1.UpdateChannelInformationRequest
 */
class UpdateChannelInformationRequest$Type extends MessageType<UpdateChannelInformationRequest> {
    constructor() {
        super("protocol.chat.v1.UpdateChannelInformationRequest", [
            { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 3, name: "new_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "new_metadata", kind: "message", T: () => Metadata }
        ]);
    }
}
export const UpdateChannelInformationRequest = new UpdateChannelInformationRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.UpdateChannelInformationResponse
 */
class UpdateChannelInformationResponse$Type extends MessageType<UpdateChannelInformationResponse> {
    constructor() {
        super("protocol.chat.v1.UpdateChannelInformationResponse", []);
    }
}
export const UpdateChannelInformationResponse = new UpdateChannelInformationResponse$Type();
/**
 * Type for protobuf message protocol.chat.v1.UpdateChannelOrderRequest
 */
class UpdateChannelOrderRequest$Type extends MessageType<UpdateChannelOrderRequest> {
    constructor() {
        super("protocol.chat.v1.UpdateChannelOrderRequest", [
            { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 3, name: "new_position", kind: "message", T: () => ItemPosition }
        ]);
    }
}
export const UpdateChannelOrderRequest = new UpdateChannelOrderRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.UpdateChannelOrderResponse
 */
class UpdateChannelOrderResponse$Type extends MessageType<UpdateChannelOrderResponse> {
    constructor() {
        super("protocol.chat.v1.UpdateChannelOrderResponse", []);
    }
}
export const UpdateChannelOrderResponse = new UpdateChannelOrderResponse$Type();
/**
 * Type for protobuf message protocol.chat.v1.UpdateAllChannelOrderRequest
 */
class UpdateAllChannelOrderRequest$Type extends MessageType<UpdateAllChannelOrderRequest> {
    constructor() {
        super("protocol.chat.v1.UpdateAllChannelOrderRequest", [
            { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "channel_ids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
export const UpdateAllChannelOrderRequest = new UpdateAllChannelOrderRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.UpdateAllChannelOrderResponse
 */
class UpdateAllChannelOrderResponse$Type extends MessageType<UpdateAllChannelOrderResponse> {
    constructor() {
        super("protocol.chat.v1.UpdateAllChannelOrderResponse", []);
    }
}
export const UpdateAllChannelOrderResponse = new UpdateAllChannelOrderResponse$Type();
/**
 * Type for protobuf message protocol.chat.v1.DeleteChannelRequest
 */
class DeleteChannelRequest$Type extends MessageType<DeleteChannelRequest> {
    constructor() {
        super("protocol.chat.v1.DeleteChannelRequest", [
            { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
export const DeleteChannelRequest = new DeleteChannelRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.DeleteChannelResponse
 */
class DeleteChannelResponse$Type extends MessageType<DeleteChannelResponse> {
    constructor() {
        super("protocol.chat.v1.DeleteChannelResponse", []);
    }
}
export const DeleteChannelResponse = new DeleteChannelResponse$Type();
/**
 * Type for protobuf message protocol.chat.v1.TypingRequest
 */
class TypingRequest$Type extends MessageType<TypingRequest> {
    constructor() {
        super("protocol.chat.v1.TypingRequest", [
            { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
export const TypingRequest = new TypingRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.TypingResponse
 */
class TypingResponse$Type extends MessageType<TypingResponse> {
    constructor() {
        super("protocol.chat.v1.TypingResponse", []);
    }
}
export const TypingResponse = new TypingResponse$Type();