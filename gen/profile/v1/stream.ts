// @generated by protobuf-ts 2.2.2 with parameter long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "profile/v1/stream.proto" (package "protocol.profile.v1", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { AccountKind } from "./types";
import { UserStatus } from "./types";
/**
 * Event sent when a user's profile is updated.
 *
 * Servers should sent this event only to users that can "see" (eg. they are
 * in the same guild) the user this event was triggered by.
 *
 * @generated from protobuf message protocol.profile.v1.ProfileUpdated
 */
export interface ProfileUpdated {
    /**
     * User ID of the user that had it's profile updated.
     *
     * @generated from protobuf field: uint64 user_id = 1;
     */
    userId: string;
    /**
     * New username for this user.
     *
     * @generated from protobuf field: optional string new_username = 2;
     */
    newUsername?: string;
    /**
     * New avatar for this user.
     *
     * @generated from protobuf field: optional string new_avatar = 3;
     */
    newAvatar?: string;
    /**
     * New status for this user.
     *
     * @generated from protobuf field: optional protocol.profile.v1.UserStatus new_status = 4;
     */
    newStatus?: UserStatus;
    /**
     * New is bot or not for this user.
     * Deprecated, prefer new_account_kind if set.
     *
     * @deprecated
     * @generated from protobuf field: optional bool new_is_bot = 5 [deprecated = true];
     */
    newIsBot?: boolean;
    /**
     * The new account kind for this account
     *
     * @generated from protobuf field: optional protocol.profile.v1.AccountKind new_account_kind = 6;
     */
    newAccountKind?: AccountKind;
}
/**
 * Describes an emote service event.
 *
 * @generated from protobuf message protocol.profile.v1.StreamEvent
 */
export interface StreamEvent {
    /**
     * @generated from protobuf oneof: event
     */
    event: {
        oneofKind: "profileUpdated";
        /**
         * Send the profile updated event.
         *
         * @generated from protobuf field: protocol.profile.v1.ProfileUpdated profile_updated = 14;
         */
        profileUpdated: ProfileUpdated;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class ProfileUpdated$Type extends MessageType<ProfileUpdated> {
    constructor() {
        super("protocol.profile.v1.ProfileUpdated", [
            { no: 1, name: "user_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "new_username", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "new_avatar", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "new_status", kind: "enum", opt: true, T: () => ["protocol.profile.v1.UserStatus", UserStatus, "USER_STATUS_"] },
            { no: 5, name: "new_is_bot", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "new_account_kind", kind: "enum", opt: true, T: () => ["protocol.profile.v1.AccountKind", AccountKind, "ACCOUNT_KIND_"] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.profile.v1.ProfileUpdated
 */
export const ProfileUpdated = new ProfileUpdated$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamEvent$Type extends MessageType<StreamEvent> {
    constructor() {
        super("protocol.profile.v1.StreamEvent", [
            { no: 14, name: "profile_updated", kind: "message", oneof: "event", T: () => ProfileUpdated }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.profile.v1.StreamEvent
 */
export const StreamEvent = new StreamEvent$Type();
