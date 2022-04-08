// @generated by protobuf-ts 2.2.2 with parameter long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "harmonytypes/v1/types.proto" (package "protocol.harmonytypes.v1", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Metadata for methods. These are set in individual RPC endpoints and are
 * typically used by servers.
 *
 * @generated from protobuf message protocol.harmonytypes.v1.HarmonyMethodMetadata
 */
export interface HarmonyMethodMetadata {
    /**
     * whether the method requires authentication.
     *
     * @generated from protobuf field: bool requires_authentication = 1;
     */
    requiresAuthentication: boolean;
    /**
     * whether the method allows federation or not.
     *
     * @generated from protobuf field: bool requires_local = 2;
     */
    requiresLocal: boolean;
    /**
     * the permission nodes required to invoke the method.
     *
     * @generated from protobuf field: string requires_permission_node = 3;
     */
    requiresPermissionNode: string;
    /**
     * whether the method requires owner
     *
     * @generated from protobuf field: bool requires_owner = 4;
     */
    requiresOwner: boolean;
}
/**
 * Anything holds anything
 *
 * @generated from protobuf message protocol.harmonytypes.v1.Anything
 */
export interface Anything {
    /**
     * Kind is the kind of the message
     *
     * @generated from protobuf field: string kind = 1;
     */
    kind: string;
    /**
     * Body is the serialised bytes
     *
     * @generated from protobuf field: bytes body = 2;
     */
    body: Uint8Array;
}
/**
 * Metadata type used by many messages.
 *
 * @generated from protobuf message protocol.harmonytypes.v1.Metadata
 */
export interface Metadata {
    /**
     * Kind of this metadata.
     *
     * @generated from protobuf field: string kind = 1;
     */
    kind: string;
    /**
     * A map containing information.
     *
     * @generated from protobuf field: map<string, protocol.harmonytypes.v1.Anything> extension = 2;
     */
    extension: {
        [key: string]: Anything;
    };
}
/**
 * Token that will be used for authentication.
 *
 * @generated from protobuf message protocol.harmonytypes.v1.Token
 */
export interface Token {
    /**
     * Ed25519 signature of the following serialized protobuf data, signed
     * with a private key. Which private key used to sign will be described
     * in the documentation.
     *
     * Has to be 64 bytes long, otherwise it will be rejected.
     *
     * @generated from protobuf field: bytes sig = 1;
     */
    sig: Uint8Array;
    /**
     * Serialized protobuf data.
     * The protobuf type of this serialized data is dependent on the API endpoint
     * used.
     *
     * @generated from protobuf field: bytes data = 2;
     */
    data: Uint8Array;
}
/**
 * An empty message
 *
 * @generated from protobuf message protocol.harmonytypes.v1.Empty
 */
export interface Empty {
}
/**
 * An object representing an item position between two other items.
 *
 * @generated from protobuf message protocol.harmonytypes.v1.ItemPosition
 */
export interface ItemPosition {
    /**
     * The ID of the item the position is relative to
     *
     * @generated from protobuf field: uint64 item_id = 1;
     */
    itemId: string;
    /**
     * Whether the position is before or after the given ID
     *
     * @generated from protobuf field: protocol.harmonytypes.v1.ItemPosition.Position position = 2;
     */
    position: ItemPosition_Position;
}
/**
 * The position
 *
 * @generated from protobuf enum protocol.harmonytypes.v1.ItemPosition.Position
 */
export enum ItemPosition_Position {
    /**
     * The position is before the item
     *
     * @generated from protobuf enum value: POSITION_BEFORE_UNSPECIFIED = 0;
     */
    BEFORE_UNSPECIFIED = 0,
    /**
     * The position is after the item
     *
     * @generated from protobuf enum value: POSITION_AFTER = 1;
     */
    AFTER = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class HarmonyMethodMetadata$Type extends MessageType<HarmonyMethodMetadata> {
    constructor() {
        super("protocol.harmonytypes.v1.HarmonyMethodMetadata", [
            { no: 1, name: "requires_authentication", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "requires_local", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "requires_permission_node", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "requires_owner", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.harmonytypes.v1.HarmonyMethodMetadata
 */
export const HarmonyMethodMetadata = new HarmonyMethodMetadata$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Anything$Type extends MessageType<Anything> {
    constructor() {
        super("protocol.harmonytypes.v1.Anything", [
            { no: 1, name: "kind", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "body", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.harmonytypes.v1.Anything
 */
export const Anything = new Anything$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Metadata$Type extends MessageType<Metadata> {
    constructor() {
        super("protocol.harmonytypes.v1.Metadata", [
            { no: 1, name: "kind", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "extension", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => Anything } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.harmonytypes.v1.Metadata
 */
export const Metadata = new Metadata$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Token$Type extends MessageType<Token> {
    constructor() {
        super("protocol.harmonytypes.v1.Token", [
            { no: 1, name: "sig", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.harmonytypes.v1.Token
 */
export const Token = new Token$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Empty$Type extends MessageType<Empty> {
    constructor() {
        super("protocol.harmonytypes.v1.Empty", []);
    }
}
/**
 * @generated MessageType for protobuf message protocol.harmonytypes.v1.Empty
 */
export const Empty = new Empty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ItemPosition$Type extends MessageType<ItemPosition> {
    constructor() {
        super("protocol.harmonytypes.v1.ItemPosition", [
            { no: 1, name: "item_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "position", kind: "enum", T: () => ["protocol.harmonytypes.v1.ItemPosition.Position", ItemPosition_Position, "POSITION_"] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.harmonytypes.v1.ItemPosition
 */
export const ItemPosition = new ItemPosition$Type();
