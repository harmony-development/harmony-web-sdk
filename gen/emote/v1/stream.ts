// @generated by protobuf-ts 2.0.7 with parameter long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "emote/v1/stream.proto" (package "protocol.emote.v1", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { Emote } from "./types";
import { EmotePack } from "./types";
/**
 * Event sent when an emote pack's information is changed.
 *
 * Should only be sent to users who have the pack equipped.
 *
 * @generated from protobuf message protocol.emote.v1.EmotePackUpdated
 */
export interface EmotePackUpdated {
    /**
     * ID of the pack that was updated.
     *
     * @generated from protobuf field: uint64 pack_id = 1;
     */
    packId: string;
    /**
     * New pack name of the pack.
     *
     * @generated from protobuf field: optional string new_pack_name = 2;
     */
    newPackName?: string;
}
/**
 * Event sent when an emote pack is deleted.
 *
 * Should only be sent to users who have the pack equipped.
 * Should also be sent if a user dequips an emote pack, only to the user that dequipped it.
 *
 * @generated from protobuf message protocol.emote.v1.EmotePackDeleted
 */
export interface EmotePackDeleted {
    /**
     * ID of the pack that was deleted.
     *
     * @generated from protobuf field: uint64 pack_id = 1;
     */
    packId: string;
}
/**
 * Event sent when an emote pack is added.
 *
 * Should only be sent to the user who equipped the pack.
 *
 * @generated from protobuf message protocol.emote.v1.EmotePackAdded
 */
export interface EmotePackAdded {
    /**
     * Emote pack that was equipped by the user.
     *
     * @generated from protobuf field: protocol.emote.v1.EmotePack pack = 1;
     */
    pack?: EmotePack;
}
/**
 * Event sent when an emote pack's emotes were changed.
 *
 * Should only be sent to users who have the pack equipped.
 *
 * @generated from protobuf message protocol.emote.v1.EmotePackEmotesUpdated
 */
export interface EmotePackEmotesUpdated {
    /**
     * ID of the pack to update the emotes of.
     *
     * @generated from protobuf field: uint64 pack_id = 1;
     */
    packId: string;
    /**
     * The added emotes.
     *
     * @generated from protobuf field: repeated protocol.emote.v1.Emote added_emotes = 2;
     */
    addedEmotes: Emote[];
    /**
     * The names of the deleted emotes.
     *
     * @generated from protobuf field: repeated string deleted_emotes = 3;
     */
    deletedEmotes: string[];
}
/**
 * Describes an emote service event.
 *
 * @generated from protobuf message protocol.emote.v1.StreamEvent
 */
export interface StreamEvent {
    /**
     * @generated from protobuf oneof: event
     */
    event: {
        oneofKind: "emotePackAdded";
        /**
         * Send the emote pack added event.
         *
         * @generated from protobuf field: protocol.emote.v1.EmotePackAdded emote_pack_added = 1;
         */
        emotePackAdded: EmotePackAdded;
    } | {
        oneofKind: "emotePackUpdated";
        /**
         * Send the emote pack updated event.
         *
         * @generated from protobuf field: protocol.emote.v1.EmotePackUpdated emote_pack_updated = 2;
         */
        emotePackUpdated: EmotePackUpdated;
    } | {
        oneofKind: "emotePackDeleted";
        /**
         * Send the emote pack deleted event.
         *
         * @generated from protobuf field: protocol.emote.v1.EmotePackDeleted emote_pack_deleted = 3;
         */
        emotePackDeleted: EmotePackDeleted;
    } | {
        oneofKind: "emotePackEmotesUpdated";
        /**
         * Send the emote pack emotes updated event.
         *
         * @generated from protobuf field: protocol.emote.v1.EmotePackEmotesUpdated emote_pack_emotes_updated = 4;
         */
        emotePackEmotesUpdated: EmotePackEmotesUpdated;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class EmotePackUpdated$Type extends MessageType<EmotePackUpdated> {
    constructor() {
        super("protocol.emote.v1.EmotePackUpdated", [
            { no: 1, name: "pack_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "new_pack_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.emote.v1.EmotePackUpdated
 */
export const EmotePackUpdated = new EmotePackUpdated$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EmotePackDeleted$Type extends MessageType<EmotePackDeleted> {
    constructor() {
        super("protocol.emote.v1.EmotePackDeleted", [
            { no: 1, name: "pack_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.emote.v1.EmotePackDeleted
 */
export const EmotePackDeleted = new EmotePackDeleted$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EmotePackAdded$Type extends MessageType<EmotePackAdded> {
    constructor() {
        super("protocol.emote.v1.EmotePackAdded", [
            { no: 1, name: "pack", kind: "message", T: () => EmotePack }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.emote.v1.EmotePackAdded
 */
export const EmotePackAdded = new EmotePackAdded$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EmotePackEmotesUpdated$Type extends MessageType<EmotePackEmotesUpdated> {
    constructor() {
        super("protocol.emote.v1.EmotePackEmotesUpdated", [
            { no: 1, name: "pack_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "added_emotes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Emote },
            { no: 3, name: "deleted_emotes", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.emote.v1.EmotePackEmotesUpdated
 */
export const EmotePackEmotesUpdated = new EmotePackEmotesUpdated$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamEvent$Type extends MessageType<StreamEvent> {
    constructor() {
        super("protocol.emote.v1.StreamEvent", [
            { no: 1, name: "emote_pack_added", kind: "message", oneof: "event", T: () => EmotePackAdded },
            { no: 2, name: "emote_pack_updated", kind: "message", oneof: "event", T: () => EmotePackUpdated },
            { no: 3, name: "emote_pack_deleted", kind: "message", oneof: "event", T: () => EmotePackDeleted },
            { no: 4, name: "emote_pack_emotes_updated", kind: "message", oneof: "event", T: () => EmotePackEmotesUpdated }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.emote.v1.StreamEvent
 */
export const StreamEvent = new StreamEvent$Type();
