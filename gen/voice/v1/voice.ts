// @generated by protobuf-ts 2.2.2 with parameter long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "voice/v1/voice.proto" (package "protocol.voice.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Data containing all the necessary information to
 * create a consumer for a user in a voice channel.
 *
 * This corresponds to https://mediasoup.org/documentation/v3/mediasoup-client/api/#ConsumerOptions on client:
 * - `consumer_id` -> `id`
 * - `producer_id` -> `producerId`
 * - `rtp_parameters` -> `rtpParameters`
 * - and `kind` should be set to "audio".
 *
 * @generated from protobuf message protocol.voice.v1.UserConsumerOptions
 */
export interface UserConsumerOptions {
    /**
     * User ID of the user.
     *
     * @generated from protobuf field: uint64 user_id = 1;
     */
    userId: string;
    /**
     * Producer ID of the producer being consumed.
     *
     * @generated from protobuf field: string producer_id = 2;
     */
    producerId: string;
    /**
     * Consumer ID for the user's producer consumer.
     *
     * @generated from protobuf field: string consumer_id = 3;
     */
    consumerId: string;
    /**
     * RTP paramaters for the user's audio track. Corresponds to `RtpParameters` in mediasoup's TypeScript API.
     *
     * @generated from protobuf field: string rtp_parameters = 4;
     */
    rtpParameters: string;
}
/**
 * Object containing all the necessary information about transport options required
 * from the server to establish transport connection on the client.
 *
 * This corresponds to https://mediasoup.org/documentation/v3/mediasoup-client/api/#TransportOptions on client:
 * - `id` -> `id`
 * - `ice_parameters` -> `iceParameters`
 * - `dtls_parameters` -> `dtlsParameters`
 * - `ice_candidates` -> `iceCandidates`
 *
 * @generated from protobuf message protocol.voice.v1.TransportOptions
 */
export interface TransportOptions {
    /**
     * The transport ID.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * DTLS paramaters in JSON. Corresponds to `DtlsParameters` in mediasoup's TypeScript API.
     *
     * @generated from protobuf field: string dtls_parameters = 2;
     */
    dtlsParameters: string;
    /**
     * ICE candidates in JSON. Corresponds to `IceCandidate` in mediasoup's TypeScript API.
     *
     * @generated from protobuf field: repeated string ice_candidates = 3;
     */
    iceCandidates: string[];
    /**
     * ICE paramaters in JSON. Corresponds to `IceParameters` in mediasoup's TypeScript API.
     *
     * @generated from protobuf field: string ice_parameters = 4;
     */
    iceParameters: string;
}
/**
 * Used in `StreamMessage` endpoint.
 *
 * @generated from protobuf message protocol.voice.v1.StreamMessageRequest
 */
export interface StreamMessageRequest {
    /**
     * @generated from protobuf oneof: message
     */
    message: {
        oneofKind: "initialize";
        /**
         * Sent to initialize the WS and receive necessary information.
         *
         * @generated from protobuf field: protocol.voice.v1.StreamMessageRequest.Initialize initialize = 1;
         */
        initialize: StreamMessageRequest_Initialize;
    } | {
        oneofKind: "prepareForJoinChannel";
        /**
         * Sent to prepare for joining channel.
         *
         * @generated from protobuf field: protocol.voice.v1.StreamMessageRequest.PrepareForJoinChannel prepare_for_join_channel = 2;
         */
        prepareForJoinChannel: StreamMessageRequest_PrepareForJoinChannel;
    } | {
        oneofKind: "joinChannel";
        /**
         * Sent to join a channel.
         *
         * @generated from protobuf field: protocol.voice.v1.StreamMessageRequest.JoinChannel join_channel = 3;
         */
        joinChannel: StreamMessageRequest_JoinChannel;
    } | {
        oneofKind: "resumeConsumer";
        /**
         * Sent to resume a consumer.
         *
         * @generated from protobuf field: protocol.voice.v1.StreamMessageRequest.ResumeConsumer resume_consumer = 4;
         */
        resumeConsumer: StreamMessageRequest_ResumeConsumer;
    } | {
        oneofKind: undefined;
    };
}
/**
 * IDs that will be used to know which channel this WS will operate in.
 *
 * @generated from protobuf message protocol.voice.v1.StreamMessageRequest.Initialize
 */
export interface StreamMessageRequest_Initialize {
    /**
     * Guild ID of the guild where the channel is.
     *
     * @generated from protobuf field: uint64 guild_id = 1;
     */
    guildId: string;
    /**
     * Channel ID of the voice channel to initialize for.
     *
     * @generated from protobuf field: uint64 channel_id = 2;
     */
    channelId: string;
}
/**
 * Data needed to prepare for joining a channel.
 *
 * @generated from protobuf message protocol.voice.v1.StreamMessageRequest.PrepareForJoinChannel
 */
export interface StreamMessageRequest_PrepareForJoinChannel {
    /**
     * RTP capabilities in JSON.
     *
     * @generated from protobuf field: string rtp_capabilities = 1;
     */
    rtpCapabilities: string;
}
/**
 * Data needed to join a channel.
 *
 * This takes one RTP paramaters for one track, which will be
 * assumed to be Audio.
 *
 * It also takes DTLS paramaters for connecting both producer and consumer.
 *
 * @generated from protobuf message protocol.voice.v1.StreamMessageRequest.JoinChannel
 */
export interface StreamMessageRequest_JoinChannel {
    /**
     * RTP paramaters in JSON. Corresponds to `RtpParameters` in mediasoup's TypeScript API.
     *
     * @generated from protobuf field: string rtp_paramaters = 1;
     */
    rtpParamaters: string;
    /**
     * DTLS paramaters for producer transport, in JSON. Corresponds to `DtlsParameters` in mediasoup's TypeScript API.
     *
     * @generated from protobuf field: string producer_dtls_paramaters = 2;
     */
    producerDtlsParamaters: string;
    /**
     * DTLS paramaters for consumer transport, in JSON. Corresponds to `DtlsParameters` in mediasoup's TypeScript API.
     *
     * @generated from protobuf field: string consumer_dtls_paramaters = 3;
     */
    consumerDtlsParamaters: string;
}
/**
 * Message to resume a consumer.
 *
 * @generated from protobuf message protocol.voice.v1.StreamMessageRequest.ResumeConsumer
 */
export interface StreamMessageRequest_ResumeConsumer {
    /**
     * ID of the consumer to resume.
     *
     * @generated from protobuf field: string consumer_id = 1;
     */
    consumerId: string;
}
/**
 * Used in `StreamMessage` endpoint.
 *
 * @generated from protobuf message protocol.voice.v1.StreamMessageResponse
 */
export interface StreamMessageResponse {
    /**
     * @generated from protobuf oneof: message
     */
    message: {
        oneofKind: "initialized";
        /**
         * Sent when connection is started.
         *
         * @generated from protobuf field: protocol.voice.v1.StreamMessageResponse.Initialized initialized = 1;
         */
        initialized: StreamMessageResponse_Initialized;
    } | {
        oneofKind: "preparedForJoinChannel";
        /**
         * Sent when preparing to join a channel is successful.
         *
         * @generated from protobuf field: protocol.voice.v1.StreamMessageResponse.PreparedForJoinChannel prepared_for_join_channel = 2;
         */
        preparedForJoinChannel: StreamMessageResponse_PreparedForJoinChannel;
    } | {
        oneofKind: "joinedChannel";
        /**
         * Sent when joining a channel is successful.
         *
         * @generated from protobuf field: protocol.voice.v1.StreamMessageResponse.JoinedChannel joined_channel = 3;
         */
        joinedChannel: StreamMessageResponse_JoinedChannel;
    } | {
        oneofKind: "userJoined";
        /**
         * Sent when another user joins the channel.
         *
         * @generated from protobuf field: protocol.voice.v1.StreamMessageResponse.UserJoined user_joined = 4;
         */
        userJoined: StreamMessageResponse_UserJoined;
    } | {
        oneofKind: "userLeft";
        /**
         * Sent when another user leaves the channel.
         *
         * @generated from protobuf field: protocol.voice.v1.StreamMessageResponse.UserLeft user_left = 5;
         */
        userLeft: StreamMessageResponse_UserLeft;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Initialization data for client.
 *
 * @generated from protobuf message protocol.voice.v1.StreamMessageResponse.Initialized
 */
export interface StreamMessageResponse_Initialized {
    /**
     * Server RTP capabilities in JSON. Corresponds to `RtpCapabilities` in mediasoup's TypeScript API.
     *
     * @generated from protobuf field: string rtp_capabilities = 1;
     */
    rtpCapabilities: string;
}
/**
 * RTP capabilities validated.
 *
 * @generated from protobuf message protocol.voice.v1.StreamMessageResponse.PreparedForJoinChannel
 */
export interface StreamMessageResponse_PreparedForJoinChannel {
    /**
     * Consumer transport options.
     *
     * @generated from protobuf field: protocol.voice.v1.TransportOptions consumer_transport_options = 1;
     */
    consumerTransportOptions?: TransportOptions;
    /**
     * Producer transport options.
     *
     * @generated from protobuf field: protocol.voice.v1.TransportOptions producer_transport_options = 2;
     */
    producerTransportOptions?: TransportOptions;
}
/**
 * Producer for voice created; consumer and producer transports are connected.
 *
 * @generated from protobuf message protocol.voice.v1.StreamMessageResponse.JoinedChannel
 */
export interface StreamMessageResponse_JoinedChannel {
    /**
     * Consumer options for users that were already in the room.
     *
     * @generated from protobuf field: repeated protocol.voice.v1.UserConsumerOptions other_users = 1;
     */
    otherUsers: UserConsumerOptions[];
}
/**
 * Data for the user that joined the room and it's producer.
 *
 * @generated from protobuf message protocol.voice.v1.StreamMessageResponse.UserJoined
 */
export interface StreamMessageResponse_UserJoined {
    /**
     * Consumer options for this user.
     *
     * @generated from protobuf field: protocol.voice.v1.UserConsumerOptions data = 1;
     */
    data?: UserConsumerOptions;
}
/**
 * Data for the user that left the room and the producer.
 *
 * @generated from protobuf message protocol.voice.v1.StreamMessageResponse.UserLeft
 */
export interface StreamMessageResponse_UserLeft {
    /**
     * ID of the user that left.
     *
     * @generated from protobuf field: uint64 user_id = 1;
     */
    userId: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class UserConsumerOptions$Type extends MessageType<UserConsumerOptions> {
    constructor() {
        super("protocol.voice.v1.UserConsumerOptions", [
            { no: 1, name: "user_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "producer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "consumer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "rtp_parameters", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.voice.v1.UserConsumerOptions
 */
export const UserConsumerOptions = new UserConsumerOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TransportOptions$Type extends MessageType<TransportOptions> {
    constructor() {
        super("protocol.voice.v1.TransportOptions", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "dtls_parameters", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "ice_candidates", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "ice_parameters", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.voice.v1.TransportOptions
 */
export const TransportOptions = new TransportOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamMessageRequest$Type extends MessageType<StreamMessageRequest> {
    constructor() {
        super("protocol.voice.v1.StreamMessageRequest", [
            { no: 1, name: "initialize", kind: "message", oneof: "message", T: () => StreamMessageRequest_Initialize },
            { no: 2, name: "prepare_for_join_channel", kind: "message", oneof: "message", T: () => StreamMessageRequest_PrepareForJoinChannel },
            { no: 3, name: "join_channel", kind: "message", oneof: "message", T: () => StreamMessageRequest_JoinChannel },
            { no: 4, name: "resume_consumer", kind: "message", oneof: "message", T: () => StreamMessageRequest_ResumeConsumer }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.voice.v1.StreamMessageRequest
 */
export const StreamMessageRequest = new StreamMessageRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamMessageRequest_Initialize$Type extends MessageType<StreamMessageRequest_Initialize> {
    constructor() {
        super("protocol.voice.v1.StreamMessageRequest.Initialize", [
            { no: 1, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "channel_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.voice.v1.StreamMessageRequest.Initialize
 */
export const StreamMessageRequest_Initialize = new StreamMessageRequest_Initialize$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamMessageRequest_PrepareForJoinChannel$Type extends MessageType<StreamMessageRequest_PrepareForJoinChannel> {
    constructor() {
        super("protocol.voice.v1.StreamMessageRequest.PrepareForJoinChannel", [
            { no: 1, name: "rtp_capabilities", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.voice.v1.StreamMessageRequest.PrepareForJoinChannel
 */
export const StreamMessageRequest_PrepareForJoinChannel = new StreamMessageRequest_PrepareForJoinChannel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamMessageRequest_JoinChannel$Type extends MessageType<StreamMessageRequest_JoinChannel> {
    constructor() {
        super("protocol.voice.v1.StreamMessageRequest.JoinChannel", [
            { no: 1, name: "rtp_paramaters", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "producer_dtls_paramaters", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "consumer_dtls_paramaters", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.voice.v1.StreamMessageRequest.JoinChannel
 */
export const StreamMessageRequest_JoinChannel = new StreamMessageRequest_JoinChannel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamMessageRequest_ResumeConsumer$Type extends MessageType<StreamMessageRequest_ResumeConsumer> {
    constructor() {
        super("protocol.voice.v1.StreamMessageRequest.ResumeConsumer", [
            { no: 1, name: "consumer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.voice.v1.StreamMessageRequest.ResumeConsumer
 */
export const StreamMessageRequest_ResumeConsumer = new StreamMessageRequest_ResumeConsumer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamMessageResponse$Type extends MessageType<StreamMessageResponse> {
    constructor() {
        super("protocol.voice.v1.StreamMessageResponse", [
            { no: 1, name: "initialized", kind: "message", oneof: "message", T: () => StreamMessageResponse_Initialized },
            { no: 2, name: "prepared_for_join_channel", kind: "message", oneof: "message", T: () => StreamMessageResponse_PreparedForJoinChannel },
            { no: 3, name: "joined_channel", kind: "message", oneof: "message", T: () => StreamMessageResponse_JoinedChannel },
            { no: 4, name: "user_joined", kind: "message", oneof: "message", T: () => StreamMessageResponse_UserJoined },
            { no: 5, name: "user_left", kind: "message", oneof: "message", T: () => StreamMessageResponse_UserLeft }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.voice.v1.StreamMessageResponse
 */
export const StreamMessageResponse = new StreamMessageResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamMessageResponse_Initialized$Type extends MessageType<StreamMessageResponse_Initialized> {
    constructor() {
        super("protocol.voice.v1.StreamMessageResponse.Initialized", [
            { no: 1, name: "rtp_capabilities", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.voice.v1.StreamMessageResponse.Initialized
 */
export const StreamMessageResponse_Initialized = new StreamMessageResponse_Initialized$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamMessageResponse_PreparedForJoinChannel$Type extends MessageType<StreamMessageResponse_PreparedForJoinChannel> {
    constructor() {
        super("protocol.voice.v1.StreamMessageResponse.PreparedForJoinChannel", [
            { no: 1, name: "consumer_transport_options", kind: "message", T: () => TransportOptions },
            { no: 2, name: "producer_transport_options", kind: "message", T: () => TransportOptions }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.voice.v1.StreamMessageResponse.PreparedForJoinChannel
 */
export const StreamMessageResponse_PreparedForJoinChannel = new StreamMessageResponse_PreparedForJoinChannel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamMessageResponse_JoinedChannel$Type extends MessageType<StreamMessageResponse_JoinedChannel> {
    constructor() {
        super("protocol.voice.v1.StreamMessageResponse.JoinedChannel", [
            { no: 1, name: "other_users", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UserConsumerOptions }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.voice.v1.StreamMessageResponse.JoinedChannel
 */
export const StreamMessageResponse_JoinedChannel = new StreamMessageResponse_JoinedChannel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamMessageResponse_UserJoined$Type extends MessageType<StreamMessageResponse_UserJoined> {
    constructor() {
        super("protocol.voice.v1.StreamMessageResponse.UserJoined", [
            { no: 1, name: "data", kind: "message", T: () => UserConsumerOptions }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.voice.v1.StreamMessageResponse.UserJoined
 */
export const StreamMessageResponse_UserJoined = new StreamMessageResponse_UserJoined$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamMessageResponse_UserLeft$Type extends MessageType<StreamMessageResponse_UserLeft> {
    constructor() {
        super("protocol.voice.v1.StreamMessageResponse.UserLeft", [
            { no: 1, name: "user_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.voice.v1.StreamMessageResponse.UserLeft
 */
export const StreamMessageResponse_UserLeft = new StreamMessageResponse_UserLeft$Type();
/**
 * @generated ServiceType for protobuf service protocol.voice.v1.VoiceService
 */
export const VoiceService = new ServiceType("protocol.voice.v1.VoiceService", [
    { name: "StreamMessage", serverStreaming: true, clientStreaming: true, options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: StreamMessageRequest, O: StreamMessageResponse }
]);
