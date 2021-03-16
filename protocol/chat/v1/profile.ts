// @generated by protobuf-ts 1.0.12 with parameters long_type_string,optimize_code_size,generate_dependencies
// @generated from protobuf file "chat/v1/profile.proto" (package "protocol.chat.v1", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { UserStatus } from "../../harmonytypes/v1/types";
/**
 * @generated from protobuf message protocol.chat.v1.GetUserRequest
 */
export interface GetUserRequest {
  /**
   * @generated from protobuf field: uint64 user_id = 1;
   */
  userId: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.GetUserResponse
 */
export interface GetUserResponse {
  /**
   * @generated from protobuf field: string user_name = 1;
   */
  userName: string;
  /**
   * @generated from protobuf field: string user_avatar = 2;
   */
  userAvatar: string;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.UserStatus user_status = 3;
   */
  userStatus: UserStatus;
  /**
   * @generated from protobuf field: bool is_bot = 4;
   */
  isBot: boolean;
}
/**
 * @generated from protobuf message protocol.chat.v1.GetUserBulkRequest
 */
export interface GetUserBulkRequest {
  /**
   * @generated from protobuf field: repeated uint64 user_ids = 1;
   */
  userIds: string[];
}
/**
 * @generated from protobuf message protocol.chat.v1.GetUserBulkResponse
 */
export interface GetUserBulkResponse {
  /**
   * @generated from protobuf field: repeated protocol.chat.v1.GetUserResponse users = 1;
   */
  users: GetUserResponse[];
}
/**
 * @generated from protobuf message protocol.chat.v1.GetUserMetadataRequest
 */
export interface GetUserMetadataRequest {
  /**
   * @generated from protobuf field: string app_id = 1;
   */
  appId: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.GetUserMetadataResponse
 */
export interface GetUserMetadataResponse {
  /**
   * @generated from protobuf field: string metadata = 1;
   */
  metadata: string;
}
/**
 * @generated from protobuf message protocol.chat.v1.ProfileUpdateRequest
 */
export interface ProfileUpdateRequest {
  /**
   * @generated from protobuf field: string new_username = 1;
   */
  newUsername: string;
  /**
   * @generated from protobuf field: bool update_username = 2;
   */
  updateUsername: boolean;
  /**
   * @generated from protobuf field: string new_avatar = 3;
   */
  newAvatar: string;
  /**
   * @generated from protobuf field: bool update_avatar = 4;
   */
  updateAvatar: boolean;
  /**
   * @generated from protobuf field: protocol.harmonytypes.v1.UserStatus new_status = 5;
   */
  newStatus: UserStatus;
  /**
   * @generated from protobuf field: bool update_status = 6;
   */
  updateStatus: boolean;
  /**
   * @generated from protobuf field: bool is_bot = 7;
   */
  isBot: boolean;
  /**
   * @generated from protobuf field: bool update_is_bot = 8;
   */
  updateIsBot: boolean;
}
/**
 * Type for protobuf message protocol.chat.v1.GetUserRequest
 */
class GetUserRequest$Type extends MessageType<GetUserRequest> {
  constructor() {
    super("protocol.chat.v1.GetUserRequest", [
      { no: 1, name: "user_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const GetUserRequest = new GetUserRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.GetUserResponse
 */
class GetUserResponse$Type extends MessageType<GetUserResponse> {
  constructor() {
    super("protocol.chat.v1.GetUserResponse", [
      { no: 1, name: "user_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 2,
        name: "user_avatar",
        kind: "scalar",
        T: 9 /*ScalarType.STRING*/,
      },
      {
        no: 3,
        name: "user_status",
        kind: "enum",
        T: () => [
          "protocol.harmonytypes.v1.UserStatus",
          UserStatus,
          "USER_STATUS_",
        ],
      },
      { no: 4, name: "is_bot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
    ]);
  }
}
export const GetUserResponse = new GetUserResponse$Type();
/**
 * Type for protobuf message protocol.chat.v1.GetUserBulkRequest
 */
class GetUserBulkRequest$Type extends MessageType<GetUserBulkRequest> {
  constructor() {
    super("protocol.chat.v1.GetUserBulkRequest", [
      {
        no: 1,
        name: "user_ids",
        kind: "scalar",
        repeat: 1 /*RepeatType.PACKED*/,
        T: 4 /*ScalarType.UINT64*/,
      },
    ]);
  }
}
export const GetUserBulkRequest = new GetUserBulkRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.GetUserBulkResponse
 */
class GetUserBulkResponse$Type extends MessageType<GetUserBulkResponse> {
  constructor() {
    super("protocol.chat.v1.GetUserBulkResponse", [
      {
        no: 1,
        name: "users",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => GetUserResponse,
      },
    ]);
  }
}
export const GetUserBulkResponse = new GetUserBulkResponse$Type();
/**
 * Type for protobuf message protocol.chat.v1.GetUserMetadataRequest
 */
class GetUserMetadataRequest$Type extends MessageType<GetUserMetadataRequest> {
  constructor() {
    super("protocol.chat.v1.GetUserMetadataRequest", [
      { no: 1, name: "app_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
}
export const GetUserMetadataRequest = new GetUserMetadataRequest$Type();
/**
 * Type for protobuf message protocol.chat.v1.GetUserMetadataResponse
 */
class GetUserMetadataResponse$Type extends MessageType<GetUserMetadataResponse> {
  constructor() {
    super("protocol.chat.v1.GetUserMetadataResponse", [
      { no: 1, name: "metadata", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
}
export const GetUserMetadataResponse = new GetUserMetadataResponse$Type();
/**
 * Type for protobuf message protocol.chat.v1.ProfileUpdateRequest
 */
class ProfileUpdateRequest$Type extends MessageType<ProfileUpdateRequest> {
  constructor() {
    super("protocol.chat.v1.ProfileUpdateRequest", [
      {
        no: 1,
        name: "new_username",
        kind: "scalar",
        T: 9 /*ScalarType.STRING*/,
      },
      {
        no: 2,
        name: "update_username",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      { no: 3, name: "new_avatar", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 4,
        name: "update_avatar",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      {
        no: 5,
        name: "new_status",
        kind: "enum",
        T: () => [
          "protocol.harmonytypes.v1.UserStatus",
          UserStatus,
          "USER_STATUS_",
        ],
      },
      {
        no: 6,
        name: "update_status",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
      { no: 7, name: "is_bot", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
      {
        no: 8,
        name: "update_is_bot",
        kind: "scalar",
        T: 8 /*ScalarType.BOOL*/,
      },
    ]);
  }
}
export const ProfileUpdateRequest = new ProfileUpdateRequest$Type();
