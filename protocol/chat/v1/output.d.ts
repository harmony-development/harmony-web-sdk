import * as $protobuf from "protobufjs";
/** Namespace protocol. */
export namespace protocol {
  /** Namespace chat. */
  namespace chat {
    /** Namespace v1. */
    namespace v1 {
      /** Properties of a QueryPermissionsRequest. */
      interface IQueryPermissionsRequest {
        /** QueryPermissionsRequest guildId */
        guildId?: number | null;

        /** QueryPermissionsRequest channelId */
        channelId?: number | null;

        /** QueryPermissionsRequest checkFor */
        checkFor?: string | null;

        /** QueryPermissionsRequest as */
        as?: number | null;
      }

      /** Represents a QueryPermissionsRequest. */
      class QueryPermissionsRequest implements IQueryPermissionsRequest {
        /**
         * Constructs a new QueryPermissionsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IQueryPermissionsRequest);

        /** QueryPermissionsRequest guildId. */
        public guildId: number;

        /** QueryPermissionsRequest channelId. */
        public channelId: number;

        /** QueryPermissionsRequest checkFor. */
        public checkFor: string;

        /** QueryPermissionsRequest as. */
        public as: number;

        /**
         * Encodes the specified QueryPermissionsRequest message. Does not implicitly {@link protocol.chat.v1.QueryPermissionsRequest.verify|verify} messages.
         * @param message QueryPermissionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IQueryPermissionsRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryPermissionsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryPermissionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.QueryPermissionsRequest;

        /**
         * Creates a QueryPermissionsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryPermissionsRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.QueryPermissionsRequest;

        /**
         * Creates a plain object from a QueryPermissionsRequest message. Also converts values to other types if specified.
         * @param message QueryPermissionsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.QueryPermissionsRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this QueryPermissionsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a QueryPermissionsResponse. */
      interface IQueryPermissionsResponse {
        /** QueryPermissionsResponse ok */
        ok?: boolean | null;
      }

      /** Represents a QueryPermissionsResponse. */
      class QueryPermissionsResponse implements IQueryPermissionsResponse {
        /**
         * Constructs a new QueryPermissionsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IQueryPermissionsResponse);

        /** QueryPermissionsResponse ok. */
        public ok: boolean;

        /**
         * Encodes the specified QueryPermissionsResponse message. Does not implicitly {@link protocol.chat.v1.QueryPermissionsResponse.verify|verify} messages.
         * @param message QueryPermissionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IQueryPermissionsResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryPermissionsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryPermissionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.QueryPermissionsResponse;

        /**
         * Creates a QueryPermissionsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryPermissionsResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.QueryPermissionsResponse;

        /**
         * Creates a plain object from a QueryPermissionsResponse message. Also converts values to other types if specified.
         * @param message QueryPermissionsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.QueryPermissionsResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this QueryPermissionsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a Permission. */
      interface IPermission {
        /** Permission matches */
        matches?: string | null;

        /** Permission mode */
        mode?: protocol.chat.v1.Permission.Mode | null;
      }

      /** Represents a Permission. */
      class Permission implements IPermission {
        /**
         * Constructs a new Permission.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IPermission);

        /** Permission matches. */
        public matches: string;

        /** Permission mode. */
        public mode: protocol.chat.v1.Permission.Mode;

        /**
         * Encodes the specified Permission message. Does not implicitly {@link protocol.chat.v1.Permission.verify|verify} messages.
         * @param message Permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IPermission,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Permission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.Permission;

        /**
         * Creates a Permission message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Permission
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.Permission;

        /**
         * Creates a plain object from a Permission message. Also converts values to other types if specified.
         * @param message Permission
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.Permission,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Permission to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      namespace Permission {
        /** Mode enum. */
        enum Mode {
          Allow = 0,
          Deny = 1,
        }
      }

      /** Properties of a PermissionList. */
      interface IPermissionList {
        /** PermissionList permissions */
        permissions?: protocol.chat.v1.IPermission[] | null;
      }

      /** Represents a PermissionList. */
      class PermissionList implements IPermissionList {
        /**
         * Constructs a new PermissionList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IPermissionList);

        /** PermissionList permissions. */
        public permissions: protocol.chat.v1.IPermission[];

        /**
         * Encodes the specified PermissionList message. Does not implicitly {@link protocol.chat.v1.PermissionList.verify|verify} messages.
         * @param message PermissionList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IPermissionList,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a PermissionList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PermissionList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.PermissionList;

        /**
         * Creates a PermissionList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PermissionList
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.PermissionList;

        /**
         * Creates a plain object from a PermissionList message. Also converts values to other types if specified.
         * @param message PermissionList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.PermissionList,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this PermissionList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a SetPermissionsRequest. */
      interface ISetPermissionsRequest {
        /** SetPermissionsRequest guildId */
        guildId?: number | null;

        /** SetPermissionsRequest channelId */
        channelId?: number | null;

        /** SetPermissionsRequest roleId */
        roleId?: number | null;

        /** SetPermissionsRequest perms */
        perms?: protocol.chat.v1.IPermissionList | null;
      }

      /** Represents a SetPermissionsRequest. */
      class SetPermissionsRequest implements ISetPermissionsRequest {
        /**
         * Constructs a new SetPermissionsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ISetPermissionsRequest);

        /** SetPermissionsRequest guildId. */
        public guildId: number;

        /** SetPermissionsRequest channelId. */
        public channelId: number;

        /** SetPermissionsRequest roleId. */
        public roleId: number;

        /** SetPermissionsRequest perms. */
        public perms?: protocol.chat.v1.IPermissionList | null;

        /**
         * Encodes the specified SetPermissionsRequest message. Does not implicitly {@link protocol.chat.v1.SetPermissionsRequest.verify|verify} messages.
         * @param message SetPermissionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ISetPermissionsRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SetPermissionsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetPermissionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.SetPermissionsRequest;

        /**
         * Creates a SetPermissionsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetPermissionsRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.SetPermissionsRequest;

        /**
         * Creates a plain object from a SetPermissionsRequest message. Also converts values to other types if specified.
         * @param message SetPermissionsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.SetPermissionsRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SetPermissionsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetPermissionsRequest. */
      interface IGetPermissionsRequest {
        /** GetPermissionsRequest guildId */
        guildId?: number | null;

        /** GetPermissionsRequest channelId */
        channelId?: number | null;

        /** GetPermissionsRequest roleId */
        roleId?: number | null;
      }

      /** Represents a GetPermissionsRequest. */
      class GetPermissionsRequest implements IGetPermissionsRequest {
        /**
         * Constructs a new GetPermissionsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetPermissionsRequest);

        /** GetPermissionsRequest guildId. */
        public guildId: number;

        /** GetPermissionsRequest channelId. */
        public channelId: number;

        /** GetPermissionsRequest roleId. */
        public roleId: number;

        /**
         * Encodes the specified GetPermissionsRequest message. Does not implicitly {@link protocol.chat.v1.GetPermissionsRequest.verify|verify} messages.
         * @param message GetPermissionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetPermissionsRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetPermissionsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPermissionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetPermissionsRequest;

        /**
         * Creates a GetPermissionsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPermissionsRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetPermissionsRequest;

        /**
         * Creates a plain object from a GetPermissionsRequest message. Also converts values to other types if specified.
         * @param message GetPermissionsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetPermissionsRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetPermissionsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetPermissionsResponse. */
      interface IGetPermissionsResponse {
        /** GetPermissionsResponse perms */
        perms?: protocol.chat.v1.IPermissionList | null;
      }

      /** Represents a GetPermissionsResponse. */
      class GetPermissionsResponse implements IGetPermissionsResponse {
        /**
         * Constructs a new GetPermissionsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetPermissionsResponse);

        /** GetPermissionsResponse perms. */
        public perms?: protocol.chat.v1.IPermissionList | null;

        /**
         * Encodes the specified GetPermissionsResponse message. Does not implicitly {@link protocol.chat.v1.GetPermissionsResponse.verify|verify} messages.
         * @param message GetPermissionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetPermissionsResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetPermissionsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPermissionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetPermissionsResponse;

        /**
         * Creates a GetPermissionsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPermissionsResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetPermissionsResponse;

        /**
         * Creates a plain object from a GetPermissionsResponse message. Also converts values to other types if specified.
         * @param message GetPermissionsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetPermissionsResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetPermissionsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a Role. */
      interface IRole {
        /** Role roleId */
        roleId?: number | null;

        /** Role name */
        name?: string | null;

        /** Role color */
        color?: number | null;

        /** Role hoist */
        hoist?: boolean | null;

        /** Role pingable */
        pingable?: boolean | null;
      }

      /** Represents a Role. */
      class Role implements IRole {
        /**
         * Constructs a new Role.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IRole);

        /** Role roleId. */
        public roleId: number;

        /** Role name. */
        public name: string;

        /** Role color. */
        public color: number;

        /** Role hoist. */
        public hoist: boolean;

        /** Role pingable. */
        public pingable: boolean;

        /**
         * Encodes the specified Role message. Does not implicitly {@link protocol.chat.v1.Role.verify|verify} messages.
         * @param message Role message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IRole,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Role message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.Role;

        /**
         * Creates a Role message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Role
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.Role;

        /**
         * Creates a plain object from a Role message. Also converts values to other types if specified.
         * @param message Role
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.Role,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Role to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MoveRoleRequest. */
      interface IMoveRoleRequest {
        /** MoveRoleRequest guildId */
        guildId?: number | null;

        /** MoveRoleRequest roleId */
        roleId?: number | null;

        /** MoveRoleRequest beforeId */
        beforeId?: number | null;

        /** MoveRoleRequest afterId */
        afterId?: number | null;
      }

      /** Represents a MoveRoleRequest. */
      class MoveRoleRequest implements IMoveRoleRequest {
        /**
         * Constructs a new MoveRoleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IMoveRoleRequest);

        /** MoveRoleRequest guildId. */
        public guildId: number;

        /** MoveRoleRequest roleId. */
        public roleId: number;

        /** MoveRoleRequest beforeId. */
        public beforeId: number;

        /** MoveRoleRequest afterId. */
        public afterId: number;

        /**
         * Encodes the specified MoveRoleRequest message. Does not implicitly {@link protocol.chat.v1.MoveRoleRequest.verify|verify} messages.
         * @param message MoveRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IMoveRoleRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MoveRoleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoveRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.MoveRoleRequest;

        /**
         * Creates a MoveRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MoveRoleRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.MoveRoleRequest;

        /**
         * Creates a plain object from a MoveRoleRequest message. Also converts values to other types if specified.
         * @param message MoveRoleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.MoveRoleRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MoveRoleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MoveRoleResponse. */
      interface IMoveRoleResponse {}

      /** Represents a MoveRoleResponse. */
      class MoveRoleResponse implements IMoveRoleResponse {
        /**
         * Constructs a new MoveRoleResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IMoveRoleResponse);

        /**
         * Encodes the specified MoveRoleResponse message. Does not implicitly {@link protocol.chat.v1.MoveRoleResponse.verify|verify} messages.
         * @param message MoveRoleResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IMoveRoleResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MoveRoleResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoveRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.MoveRoleResponse;

        /**
         * Creates a MoveRoleResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MoveRoleResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.MoveRoleResponse;

        /**
         * Creates a plain object from a MoveRoleResponse message. Also converts values to other types if specified.
         * @param message MoveRoleResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.MoveRoleResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MoveRoleResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetGuildRolesRequest. */
      interface IGetGuildRolesRequest {
        /** GetGuildRolesRequest guildId */
        guildId?: number | null;
      }

      /** Represents a GetGuildRolesRequest. */
      class GetGuildRolesRequest implements IGetGuildRolesRequest {
        /**
         * Constructs a new GetGuildRolesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildRolesRequest);

        /** GetGuildRolesRequest guildId. */
        public guildId: number;

        /**
         * Encodes the specified GetGuildRolesRequest message. Does not implicitly {@link protocol.chat.v1.GetGuildRolesRequest.verify|verify} messages.
         * @param message GetGuildRolesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetGuildRolesRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetGuildRolesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuildRolesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetGuildRolesRequest;

        /**
         * Creates a GetGuildRolesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuildRolesRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetGuildRolesRequest;

        /**
         * Creates a plain object from a GetGuildRolesRequest message. Also converts values to other types if specified.
         * @param message GetGuildRolesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetGuildRolesRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetGuildRolesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetGuildRolesResponse. */
      interface IGetGuildRolesResponse {
        /** GetGuildRolesResponse roles */
        roles?: protocol.chat.v1.IRole[] | null;
      }

      /** Represents a GetGuildRolesResponse. */
      class GetGuildRolesResponse implements IGetGuildRolesResponse {
        /**
         * Constructs a new GetGuildRolesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildRolesResponse);

        /** GetGuildRolesResponse roles. */
        public roles: protocol.chat.v1.IRole[];

        /**
         * Encodes the specified GetGuildRolesResponse message. Does not implicitly {@link protocol.chat.v1.GetGuildRolesResponse.verify|verify} messages.
         * @param message GetGuildRolesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetGuildRolesResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetGuildRolesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuildRolesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetGuildRolesResponse;

        /**
         * Creates a GetGuildRolesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuildRolesResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetGuildRolesResponse;

        /**
         * Creates a plain object from a GetGuildRolesResponse message. Also converts values to other types if specified.
         * @param message GetGuildRolesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetGuildRolesResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetGuildRolesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an AddGuildRoleRequest. */
      interface IAddGuildRoleRequest {
        /** AddGuildRoleRequest guildId */
        guildId?: number | null;

        /** AddGuildRoleRequest role */
        role?: protocol.chat.v1.IRole | null;
      }

      /** Represents an AddGuildRoleRequest. */
      class AddGuildRoleRequest implements IAddGuildRoleRequest {
        /**
         * Constructs a new AddGuildRoleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IAddGuildRoleRequest);

        /** AddGuildRoleRequest guildId. */
        public guildId: number;

        /** AddGuildRoleRequest role. */
        public role?: protocol.chat.v1.IRole | null;

        /**
         * Encodes the specified AddGuildRoleRequest message. Does not implicitly {@link protocol.chat.v1.AddGuildRoleRequest.verify|verify} messages.
         * @param message AddGuildRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IAddGuildRoleRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AddGuildRoleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddGuildRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.AddGuildRoleRequest;

        /**
         * Creates an AddGuildRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddGuildRoleRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.AddGuildRoleRequest;

        /**
         * Creates a plain object from an AddGuildRoleRequest message. Also converts values to other types if specified.
         * @param message AddGuildRoleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.AddGuildRoleRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this AddGuildRoleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an AddGuildRoleResponse. */
      interface IAddGuildRoleResponse {
        /** AddGuildRoleResponse roleId */
        roleId?: number | null;
      }

      /** Represents an AddGuildRoleResponse. */
      class AddGuildRoleResponse implements IAddGuildRoleResponse {
        /**
         * Constructs a new AddGuildRoleResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IAddGuildRoleResponse);

        /** AddGuildRoleResponse roleId. */
        public roleId: number;

        /**
         * Encodes the specified AddGuildRoleResponse message. Does not implicitly {@link protocol.chat.v1.AddGuildRoleResponse.verify|verify} messages.
         * @param message AddGuildRoleResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IAddGuildRoleResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AddGuildRoleResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddGuildRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.AddGuildRoleResponse;

        /**
         * Creates an AddGuildRoleResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddGuildRoleResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.AddGuildRoleResponse;

        /**
         * Creates a plain object from an AddGuildRoleResponse message. Also converts values to other types if specified.
         * @param message AddGuildRoleResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.AddGuildRoleResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this AddGuildRoleResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DeleteGuildRoleRequest. */
      interface IDeleteGuildRoleRequest {
        /** DeleteGuildRoleRequest guildId */
        guildId?: number | null;

        /** DeleteGuildRoleRequest roleId */
        roleId?: number | null;
      }

      /** Represents a DeleteGuildRoleRequest. */
      class DeleteGuildRoleRequest implements IDeleteGuildRoleRequest {
        /**
         * Constructs a new DeleteGuildRoleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDeleteGuildRoleRequest);

        /** DeleteGuildRoleRequest guildId. */
        public guildId: number;

        /** DeleteGuildRoleRequest roleId. */
        public roleId: number;

        /**
         * Encodes the specified DeleteGuildRoleRequest message. Does not implicitly {@link protocol.chat.v1.DeleteGuildRoleRequest.verify|verify} messages.
         * @param message DeleteGuildRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IDeleteGuildRoleRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DeleteGuildRoleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteGuildRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.DeleteGuildRoleRequest;

        /**
         * Creates a DeleteGuildRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteGuildRoleRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.DeleteGuildRoleRequest;

        /**
         * Creates a plain object from a DeleteGuildRoleRequest message. Also converts values to other types if specified.
         * @param message DeleteGuildRoleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.DeleteGuildRoleRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DeleteGuildRoleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a ModifyGuildRoleRequest. */
      interface IModifyGuildRoleRequest {
        /** ModifyGuildRoleRequest guildId */
        guildId?: number | null;

        /** ModifyGuildRoleRequest role */
        role?: protocol.chat.v1.IRole | null;

        /** ModifyGuildRoleRequest modifyName */
        modifyName?: boolean | null;

        /** ModifyGuildRoleRequest modifyColor */
        modifyColor?: boolean | null;

        /** ModifyGuildRoleRequest modifyHoist */
        modifyHoist?: boolean | null;

        /** ModifyGuildRoleRequest modifyPingable */
        modifyPingable?: boolean | null;
      }

      /** Represents a ModifyGuildRoleRequest. */
      class ModifyGuildRoleRequest implements IModifyGuildRoleRequest {
        /**
         * Constructs a new ModifyGuildRoleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IModifyGuildRoleRequest);

        /** ModifyGuildRoleRequest guildId. */
        public guildId: number;

        /** ModifyGuildRoleRequest role. */
        public role?: protocol.chat.v1.IRole | null;

        /** ModifyGuildRoleRequest modifyName. */
        public modifyName: boolean;

        /** ModifyGuildRoleRequest modifyColor. */
        public modifyColor: boolean;

        /** ModifyGuildRoleRequest modifyHoist. */
        public modifyHoist: boolean;

        /** ModifyGuildRoleRequest modifyPingable. */
        public modifyPingable: boolean;

        /**
         * Encodes the specified ModifyGuildRoleRequest message. Does not implicitly {@link protocol.chat.v1.ModifyGuildRoleRequest.verify|verify} messages.
         * @param message ModifyGuildRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IModifyGuildRoleRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModifyGuildRoleRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyGuildRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.ModifyGuildRoleRequest;

        /**
         * Creates a ModifyGuildRoleRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyGuildRoleRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.ModifyGuildRoleRequest;

        /**
         * Creates a plain object from a ModifyGuildRoleRequest message. Also converts values to other types if specified.
         * @param message ModifyGuildRoleRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.ModifyGuildRoleRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModifyGuildRoleRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a ManageUserRolesRequest. */
      interface IManageUserRolesRequest {
        /** ManageUserRolesRequest guildId */
        guildId?: number | null;

        /** ManageUserRolesRequest userId */
        userId?: number | null;

        /** ManageUserRolesRequest giveRoleIds */
        giveRoleIds?: number[] | null;

        /** ManageUserRolesRequest takeRoleIds */
        takeRoleIds?: number[] | null;
      }

      /** Represents a ManageUserRolesRequest. */
      class ManageUserRolesRequest implements IManageUserRolesRequest {
        /**
         * Constructs a new ManageUserRolesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IManageUserRolesRequest);

        /** ManageUserRolesRequest guildId. */
        public guildId: number;

        /** ManageUserRolesRequest userId. */
        public userId: number;

        /** ManageUserRolesRequest giveRoleIds. */
        public giveRoleIds: number[];

        /** ManageUserRolesRequest takeRoleIds. */
        public takeRoleIds: number[];

        /**
         * Encodes the specified ManageUserRolesRequest message. Does not implicitly {@link protocol.chat.v1.ManageUserRolesRequest.verify|verify} messages.
         * @param message ManageUserRolesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IManageUserRolesRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ManageUserRolesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ManageUserRolesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.ManageUserRolesRequest;

        /**
         * Creates a ManageUserRolesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ManageUserRolesRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.ManageUserRolesRequest;

        /**
         * Creates a plain object from a ManageUserRolesRequest message. Also converts values to other types if specified.
         * @param message ManageUserRolesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.ManageUserRolesRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ManageUserRolesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetUserRolesRequest. */
      interface IGetUserRolesRequest {
        /** GetUserRolesRequest guildId */
        guildId?: number | null;

        /** GetUserRolesRequest userId */
        userId?: number | null;
      }

      /** Represents a GetUserRolesRequest. */
      class GetUserRolesRequest implements IGetUserRolesRequest {
        /**
         * Constructs a new GetUserRolesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetUserRolesRequest);

        /** GetUserRolesRequest guildId. */
        public guildId: number;

        /** GetUserRolesRequest userId. */
        public userId: number;

        /**
         * Encodes the specified GetUserRolesRequest message. Does not implicitly {@link protocol.chat.v1.GetUserRolesRequest.verify|verify} messages.
         * @param message GetUserRolesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetUserRolesRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetUserRolesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserRolesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetUserRolesRequest;

        /**
         * Creates a GetUserRolesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserRolesRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetUserRolesRequest;

        /**
         * Creates a plain object from a GetUserRolesRequest message. Also converts values to other types if specified.
         * @param message GetUserRolesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetUserRolesRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetUserRolesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetUserRolesResponse. */
      interface IGetUserRolesResponse {
        /** GetUserRolesResponse roles */
        roles?: number[] | null;
      }

      /** Represents a GetUserRolesResponse. */
      class GetUserRolesResponse implements IGetUserRolesResponse {
        /**
         * Constructs a new GetUserRolesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetUserRolesResponse);

        /** GetUserRolesResponse roles. */
        public roles: number[];

        /**
         * Encodes the specified GetUserRolesResponse message. Does not implicitly {@link protocol.chat.v1.GetUserRolesResponse.verify|verify} messages.
         * @param message GetUserRolesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetUserRolesResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetUserRolesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserRolesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetUserRolesResponse;

        /**
         * Creates a GetUserRolesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserRolesResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetUserRolesResponse;

        /**
         * Creates a plain object from a GetUserRolesResponse message. Also converts values to other types if specified.
         * @param message GetUserRolesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetUserRolesResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetUserRolesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a CreateGuildRequest. */
      interface ICreateGuildRequest {
        /** CreateGuildRequest metadata */
        metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /** CreateGuildRequest guildName */
        guildName?: string | null;

        /** CreateGuildRequest pictureUrl */
        pictureUrl?: string | null;
      }

      /** Represents a CreateGuildRequest. */
      class CreateGuildRequest implements ICreateGuildRequest {
        /**
         * Constructs a new CreateGuildRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ICreateGuildRequest);

        /** CreateGuildRequest metadata. */
        public metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /** CreateGuildRequest guildName. */
        public guildName: string;

        /** CreateGuildRequest pictureUrl. */
        public pictureUrl: string;

        /**
         * Encodes the specified CreateGuildRequest message. Does not implicitly {@link protocol.chat.v1.CreateGuildRequest.verify|verify} messages.
         * @param message CreateGuildRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ICreateGuildRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CreateGuildRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateGuildRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.CreateGuildRequest;

        /**
         * Creates a CreateGuildRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateGuildRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.CreateGuildRequest;

        /**
         * Creates a plain object from a CreateGuildRequest message. Also converts values to other types if specified.
         * @param message CreateGuildRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.CreateGuildRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this CreateGuildRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a CreateGuildResponse. */
      interface ICreateGuildResponse {
        /** CreateGuildResponse guildId */
        guildId?: number | null;
      }

      /** Represents a CreateGuildResponse. */
      class CreateGuildResponse implements ICreateGuildResponse {
        /**
         * Constructs a new CreateGuildResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ICreateGuildResponse);

        /** CreateGuildResponse guildId. */
        public guildId: number;

        /**
         * Encodes the specified CreateGuildResponse message. Does not implicitly {@link protocol.chat.v1.CreateGuildResponse.verify|verify} messages.
         * @param message CreateGuildResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ICreateGuildResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CreateGuildResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.CreateGuildResponse;

        /**
         * Creates a CreateGuildResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateGuildResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.CreateGuildResponse;

        /**
         * Creates a plain object from a CreateGuildResponse message. Also converts values to other types if specified.
         * @param message CreateGuildResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.CreateGuildResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this CreateGuildResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a CreateInviteRequest. */
      interface ICreateInviteRequest {
        /** CreateInviteRequest guildId */
        guildId?: number | null;

        /** CreateInviteRequest name */
        name?: string | null;

        /** CreateInviteRequest possibleUses */
        possibleUses?: number | null;
      }

      /** Represents a CreateInviteRequest. */
      class CreateInviteRequest implements ICreateInviteRequest {
        /**
         * Constructs a new CreateInviteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ICreateInviteRequest);

        /** CreateInviteRequest guildId. */
        public guildId: number;

        /** CreateInviteRequest name. */
        public name: string;

        /** CreateInviteRequest possibleUses. */
        public possibleUses: number;

        /**
         * Encodes the specified CreateInviteRequest message. Does not implicitly {@link protocol.chat.v1.CreateInviteRequest.verify|verify} messages.
         * @param message CreateInviteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ICreateInviteRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CreateInviteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateInviteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.CreateInviteRequest;

        /**
         * Creates a CreateInviteRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateInviteRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.CreateInviteRequest;

        /**
         * Creates a plain object from a CreateInviteRequest message. Also converts values to other types if specified.
         * @param message CreateInviteRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.CreateInviteRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this CreateInviteRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a CreateInviteResponse. */
      interface ICreateInviteResponse {
        /** CreateInviteResponse name */
        name?: string | null;
      }

      /** Represents a CreateInviteResponse. */
      class CreateInviteResponse implements ICreateInviteResponse {
        /**
         * Constructs a new CreateInviteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ICreateInviteResponse);

        /** CreateInviteResponse name. */
        public name: string;

        /**
         * Encodes the specified CreateInviteResponse message. Does not implicitly {@link protocol.chat.v1.CreateInviteResponse.verify|verify} messages.
         * @param message CreateInviteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ICreateInviteResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CreateInviteResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateInviteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.CreateInviteResponse;

        /**
         * Creates a CreateInviteResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateInviteResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.CreateInviteResponse;

        /**
         * Creates a plain object from a CreateInviteResponse message. Also converts values to other types if specified.
         * @param message CreateInviteResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.CreateInviteResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this CreateInviteResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetGuildListRequest. */
      interface IGetGuildListRequest {}

      /** Represents a GetGuildListRequest. */
      class GetGuildListRequest implements IGetGuildListRequest {
        /**
         * Constructs a new GetGuildListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildListRequest);

        /**
         * Encodes the specified GetGuildListRequest message. Does not implicitly {@link protocol.chat.v1.GetGuildListRequest.verify|verify} messages.
         * @param message GetGuildListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetGuildListRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetGuildListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuildListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetGuildListRequest;

        /**
         * Creates a GetGuildListRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuildListRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetGuildListRequest;

        /**
         * Creates a plain object from a GetGuildListRequest message. Also converts values to other types if specified.
         * @param message GetGuildListRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetGuildListRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetGuildListRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetGuildListResponse. */
      interface IGetGuildListResponse {
        /** GetGuildListResponse guilds */
        guilds?: protocol.chat.v1.GetGuildListResponse.IGuildListEntry[] | null;
      }

      /** Represents a GetGuildListResponse. */
      class GetGuildListResponse implements IGetGuildListResponse {
        /**
         * Constructs a new GetGuildListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildListResponse);

        /** GetGuildListResponse guilds. */
        public guilds: protocol.chat.v1.GetGuildListResponse.IGuildListEntry[];

        /**
         * Encodes the specified GetGuildListResponse message. Does not implicitly {@link protocol.chat.v1.GetGuildListResponse.verify|verify} messages.
         * @param message GetGuildListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetGuildListResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetGuildListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuildListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetGuildListResponse;

        /**
         * Creates a GetGuildListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuildListResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetGuildListResponse;

        /**
         * Creates a plain object from a GetGuildListResponse message. Also converts values to other types if specified.
         * @param message GetGuildListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetGuildListResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetGuildListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      namespace GetGuildListResponse {
        /** Properties of a GuildListEntry. */
        interface IGuildListEntry {
          /** GuildListEntry guildId */
          guildId?: number | null;

          /** GuildListEntry host */
          host?: string | null;
        }

        /** Represents a GuildListEntry. */
        class GuildListEntry implements IGuildListEntry {
          /**
           * Constructs a new GuildListEntry.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: protocol.chat.v1.GetGuildListResponse.IGuildListEntry
          );

          /** GuildListEntry guildId. */
          public guildId: number;

          /** GuildListEntry host. */
          public host: string;

          /**
           * Encodes the specified GuildListEntry message. Does not implicitly {@link protocol.chat.v1.GetGuildListResponse.GuildListEntry.verify|verify} messages.
           * @param message GuildListEntry message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.GetGuildListResponse.IGuildListEntry,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a GuildListEntry message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns GuildListEntry
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.GetGuildListResponse.GuildListEntry;

          /**
           * Creates a GuildListEntry message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns GuildListEntry
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.GetGuildListResponse.GuildListEntry;

          /**
           * Creates a plain object from a GuildListEntry message. Also converts values to other types if specified.
           * @param message GuildListEntry
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.GetGuildListResponse.GuildListEntry,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this GuildListEntry to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }

      /** Properties of a GetGuildRequest. */
      interface IGetGuildRequest {
        /** GetGuildRequest guildId */
        guildId?: number | null;
      }

      /** Represents a GetGuildRequest. */
      class GetGuildRequest implements IGetGuildRequest {
        /**
         * Constructs a new GetGuildRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildRequest);

        /** GetGuildRequest guildId. */
        public guildId: number;

        /**
         * Encodes the specified GetGuildRequest message. Does not implicitly {@link protocol.chat.v1.GetGuildRequest.verify|verify} messages.
         * @param message GetGuildRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetGuildRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetGuildRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuildRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetGuildRequest;

        /**
         * Creates a GetGuildRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuildRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetGuildRequest;

        /**
         * Creates a plain object from a GetGuildRequest message. Also converts values to other types if specified.
         * @param message GetGuildRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetGuildRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetGuildRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetGuildResponse. */
      interface IGetGuildResponse {
        /** GetGuildResponse metadata */
        metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /** GetGuildResponse guildName */
        guildName?: string | null;

        /** GetGuildResponse guildOwner */
        guildOwner?: number | null;

        /** GetGuildResponse guildPicture */
        guildPicture?: string | null;
      }

      /** Represents a GetGuildResponse. */
      class GetGuildResponse implements IGetGuildResponse {
        /**
         * Constructs a new GetGuildResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildResponse);

        /** GetGuildResponse metadata. */
        public metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /** GetGuildResponse guildName. */
        public guildName: string;

        /** GetGuildResponse guildOwner. */
        public guildOwner: number;

        /** GetGuildResponse guildPicture. */
        public guildPicture: string;

        /**
         * Encodes the specified GetGuildResponse message. Does not implicitly {@link protocol.chat.v1.GetGuildResponse.verify|verify} messages.
         * @param message GetGuildResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetGuildResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetGuildResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetGuildResponse;

        /**
         * Creates a GetGuildResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuildResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetGuildResponse;

        /**
         * Creates a plain object from a GetGuildResponse message. Also converts values to other types if specified.
         * @param message GetGuildResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetGuildResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetGuildResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetGuildInvitesRequest. */
      interface IGetGuildInvitesRequest {
        /** GetGuildInvitesRequest guildId */
        guildId?: number | null;
      }

      /** Represents a GetGuildInvitesRequest. */
      class GetGuildInvitesRequest implements IGetGuildInvitesRequest {
        /**
         * Constructs a new GetGuildInvitesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildInvitesRequest);

        /** GetGuildInvitesRequest guildId. */
        public guildId: number;

        /**
         * Encodes the specified GetGuildInvitesRequest message. Does not implicitly {@link protocol.chat.v1.GetGuildInvitesRequest.verify|verify} messages.
         * @param message GetGuildInvitesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetGuildInvitesRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetGuildInvitesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuildInvitesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetGuildInvitesRequest;

        /**
         * Creates a GetGuildInvitesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuildInvitesRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetGuildInvitesRequest;

        /**
         * Creates a plain object from a GetGuildInvitesRequest message. Also converts values to other types if specified.
         * @param message GetGuildInvitesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetGuildInvitesRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetGuildInvitesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetGuildInvitesResponse. */
      interface IGetGuildInvitesResponse {
        /** GetGuildInvitesResponse invites */
        invites?: protocol.chat.v1.GetGuildInvitesResponse.IInvite[] | null;
      }

      /** Represents a GetGuildInvitesResponse. */
      class GetGuildInvitesResponse implements IGetGuildInvitesResponse {
        /**
         * Constructs a new GetGuildInvitesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildInvitesResponse);

        /** GetGuildInvitesResponse invites. */
        public invites: protocol.chat.v1.GetGuildInvitesResponse.IInvite[];

        /**
         * Encodes the specified GetGuildInvitesResponse message. Does not implicitly {@link protocol.chat.v1.GetGuildInvitesResponse.verify|verify} messages.
         * @param message GetGuildInvitesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetGuildInvitesResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetGuildInvitesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuildInvitesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetGuildInvitesResponse;

        /**
         * Creates a GetGuildInvitesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuildInvitesResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetGuildInvitesResponse;

        /**
         * Creates a plain object from a GetGuildInvitesResponse message. Also converts values to other types if specified.
         * @param message GetGuildInvitesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetGuildInvitesResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetGuildInvitesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      namespace GetGuildInvitesResponse {
        /** Properties of an Invite. */
        interface IInvite {
          /** Invite inviteId */
          inviteId?: string | null;

          /** Invite possibleUses */
          possibleUses?: number | null;

          /** Invite useCount */
          useCount?: number | null;
        }

        /** Represents an Invite. */
        class Invite implements IInvite {
          /**
           * Constructs a new Invite.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: protocol.chat.v1.GetGuildInvitesResponse.IInvite
          );

          /** Invite inviteId. */
          public inviteId: string;

          /** Invite possibleUses. */
          public possibleUses: number;

          /** Invite useCount. */
          public useCount: number;

          /**
           * Encodes the specified Invite message. Does not implicitly {@link protocol.chat.v1.GetGuildInvitesResponse.Invite.verify|verify} messages.
           * @param message Invite message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.GetGuildInvitesResponse.IInvite,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes an Invite message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns Invite
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.GetGuildInvitesResponse.Invite;

          /**
           * Creates an Invite message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns Invite
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.GetGuildInvitesResponse.Invite;

          /**
           * Creates a plain object from an Invite message. Also converts values to other types if specified.
           * @param message Invite
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.GetGuildInvitesResponse.Invite,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this Invite to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }

      /** Properties of a GetGuildMembersRequest. */
      interface IGetGuildMembersRequest {
        /** GetGuildMembersRequest guildId */
        guildId?: number | null;
      }

      /** Represents a GetGuildMembersRequest. */
      class GetGuildMembersRequest implements IGetGuildMembersRequest {
        /**
         * Constructs a new GetGuildMembersRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildMembersRequest);

        /** GetGuildMembersRequest guildId. */
        public guildId: number;

        /**
         * Encodes the specified GetGuildMembersRequest message. Does not implicitly {@link protocol.chat.v1.GetGuildMembersRequest.verify|verify} messages.
         * @param message GetGuildMembersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetGuildMembersRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetGuildMembersRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuildMembersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetGuildMembersRequest;

        /**
         * Creates a GetGuildMembersRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuildMembersRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetGuildMembersRequest;

        /**
         * Creates a plain object from a GetGuildMembersRequest message. Also converts values to other types if specified.
         * @param message GetGuildMembersRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetGuildMembersRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetGuildMembersRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetGuildMembersResponse. */
      interface IGetGuildMembersResponse {
        /** GetGuildMembersResponse members */
        members?: number[] | null;
      }

      /** Represents a GetGuildMembersResponse. */
      class GetGuildMembersResponse implements IGetGuildMembersResponse {
        /**
         * Constructs a new GetGuildMembersResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildMembersResponse);

        /** GetGuildMembersResponse members. */
        public members: number[];

        /**
         * Encodes the specified GetGuildMembersResponse message. Does not implicitly {@link protocol.chat.v1.GetGuildMembersResponse.verify|verify} messages.
         * @param message GetGuildMembersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetGuildMembersResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetGuildMembersResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuildMembersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetGuildMembersResponse;

        /**
         * Creates a GetGuildMembersResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuildMembersResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetGuildMembersResponse;

        /**
         * Creates a plain object from a GetGuildMembersResponse message. Also converts values to other types if specified.
         * @param message GetGuildMembersResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetGuildMembersResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetGuildMembersResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an UpdateGuildInformationRequest. */
      interface IUpdateGuildInformationRequest {
        /** UpdateGuildInformationRequest guildId */
        guildId?: number | null;

        /** UpdateGuildInformationRequest newGuildName */
        newGuildName?: string | null;

        /** UpdateGuildInformationRequest updateGuildName */
        updateGuildName?: boolean | null;

        /** UpdateGuildInformationRequest newGuildPicture */
        newGuildPicture?: string | null;

        /** UpdateGuildInformationRequest updateGuildPicture */
        updateGuildPicture?: boolean | null;

        /** UpdateGuildInformationRequest metadata */
        metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /** UpdateGuildInformationRequest updateMetadata */
        updateMetadata?: boolean | null;
      }

      /** Represents an UpdateGuildInformationRequest. */
      class UpdateGuildInformationRequest
        implements IUpdateGuildInformationRequest {
        /**
         * Constructs a new UpdateGuildInformationRequest.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: protocol.chat.v1.IUpdateGuildInformationRequest
        );

        /** UpdateGuildInformationRequest guildId. */
        public guildId: number;

        /** UpdateGuildInformationRequest newGuildName. */
        public newGuildName: string;

        /** UpdateGuildInformationRequest updateGuildName. */
        public updateGuildName: boolean;

        /** UpdateGuildInformationRequest newGuildPicture. */
        public newGuildPicture: string;

        /** UpdateGuildInformationRequest updateGuildPicture. */
        public updateGuildPicture: boolean;

        /** UpdateGuildInformationRequest metadata. */
        public metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /** UpdateGuildInformationRequest updateMetadata. */
        public updateMetadata: boolean;

        /**
         * Encodes the specified UpdateGuildInformationRequest message. Does not implicitly {@link protocol.chat.v1.UpdateGuildInformationRequest.verify|verify} messages.
         * @param message UpdateGuildInformationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IUpdateGuildInformationRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an UpdateGuildInformationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateGuildInformationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.UpdateGuildInformationRequest;

        /**
         * Creates an UpdateGuildInformationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateGuildInformationRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.UpdateGuildInformationRequest;

        /**
         * Creates a plain object from an UpdateGuildInformationRequest message. Also converts values to other types if specified.
         * @param message UpdateGuildInformationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.UpdateGuildInformationRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this UpdateGuildInformationRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DeleteGuildRequest. */
      interface IDeleteGuildRequest {
        /** DeleteGuildRequest guildId */
        guildId?: number | null;
      }

      /** Represents a DeleteGuildRequest. */
      class DeleteGuildRequest implements IDeleteGuildRequest {
        /**
         * Constructs a new DeleteGuildRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDeleteGuildRequest);

        /** DeleteGuildRequest guildId. */
        public guildId: number;

        /**
         * Encodes the specified DeleteGuildRequest message. Does not implicitly {@link protocol.chat.v1.DeleteGuildRequest.verify|verify} messages.
         * @param message DeleteGuildRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IDeleteGuildRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DeleteGuildRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteGuildRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.DeleteGuildRequest;

        /**
         * Creates a DeleteGuildRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteGuildRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.DeleteGuildRequest;

        /**
         * Creates a plain object from a DeleteGuildRequest message. Also converts values to other types if specified.
         * @param message DeleteGuildRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.DeleteGuildRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DeleteGuildRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DeleteInviteRequest. */
      interface IDeleteInviteRequest {
        /** DeleteInviteRequest guildId */
        guildId?: number | null;

        /** DeleteInviteRequest inviteId */
        inviteId?: string | null;
      }

      /** Represents a DeleteInviteRequest. */
      class DeleteInviteRequest implements IDeleteInviteRequest {
        /**
         * Constructs a new DeleteInviteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDeleteInviteRequest);

        /** DeleteInviteRequest guildId. */
        public guildId: number;

        /** DeleteInviteRequest inviteId. */
        public inviteId: string;

        /**
         * Encodes the specified DeleteInviteRequest message. Does not implicitly {@link protocol.chat.v1.DeleteInviteRequest.verify|verify} messages.
         * @param message DeleteInviteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IDeleteInviteRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DeleteInviteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteInviteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.DeleteInviteRequest;

        /**
         * Creates a DeleteInviteRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteInviteRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.DeleteInviteRequest;

        /**
         * Creates a plain object from a DeleteInviteRequest message. Also converts values to other types if specified.
         * @param message DeleteInviteRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.DeleteInviteRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DeleteInviteRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a JoinGuildRequest. */
      interface IJoinGuildRequest {
        /** JoinGuildRequest inviteId */
        inviteId?: string | null;
      }

      /** Represents a JoinGuildRequest. */
      class JoinGuildRequest implements IJoinGuildRequest {
        /**
         * Constructs a new JoinGuildRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IJoinGuildRequest);

        /** JoinGuildRequest inviteId. */
        public inviteId: string;

        /**
         * Encodes the specified JoinGuildRequest message. Does not implicitly {@link protocol.chat.v1.JoinGuildRequest.verify|verify} messages.
         * @param message JoinGuildRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IJoinGuildRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a JoinGuildRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinGuildRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.JoinGuildRequest;

        /**
         * Creates a JoinGuildRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinGuildRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.JoinGuildRequest;

        /**
         * Creates a plain object from a JoinGuildRequest message. Also converts values to other types if specified.
         * @param message JoinGuildRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.JoinGuildRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this JoinGuildRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a JoinGuildResponse. */
      interface IJoinGuildResponse {
        /** JoinGuildResponse guildId */
        guildId?: number | null;
      }

      /** Represents a JoinGuildResponse. */
      class JoinGuildResponse implements IJoinGuildResponse {
        /**
         * Constructs a new JoinGuildResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IJoinGuildResponse);

        /** JoinGuildResponse guildId. */
        public guildId: number;

        /**
         * Encodes the specified JoinGuildResponse message. Does not implicitly {@link protocol.chat.v1.JoinGuildResponse.verify|verify} messages.
         * @param message JoinGuildResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IJoinGuildResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a JoinGuildResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.JoinGuildResponse;

        /**
         * Creates a JoinGuildResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinGuildResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.JoinGuildResponse;

        /**
         * Creates a plain object from a JoinGuildResponse message. Also converts values to other types if specified.
         * @param message JoinGuildResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.JoinGuildResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this JoinGuildResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a PreviewGuildRequest. */
      interface IPreviewGuildRequest {
        /** PreviewGuildRequest inviteId */
        inviteId?: string | null;
      }

      /** Represents a PreviewGuildRequest. */
      class PreviewGuildRequest implements IPreviewGuildRequest {
        /**
         * Constructs a new PreviewGuildRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IPreviewGuildRequest);

        /** PreviewGuildRequest inviteId. */
        public inviteId: string;

        /**
         * Encodes the specified PreviewGuildRequest message. Does not implicitly {@link protocol.chat.v1.PreviewGuildRequest.verify|verify} messages.
         * @param message PreviewGuildRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IPreviewGuildRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a PreviewGuildRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreviewGuildRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.PreviewGuildRequest;

        /**
         * Creates a PreviewGuildRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreviewGuildRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.PreviewGuildRequest;

        /**
         * Creates a plain object from a PreviewGuildRequest message. Also converts values to other types if specified.
         * @param message PreviewGuildRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.PreviewGuildRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this PreviewGuildRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a PreviewGuildResponse. */
      interface IPreviewGuildResponse {
        /** PreviewGuildResponse name */
        name?: string | null;

        /** PreviewGuildResponse avatar */
        avatar?: string | null;

        /** PreviewGuildResponse memberCount */
        memberCount?: number | null;
      }

      /** Represents a PreviewGuildResponse. */
      class PreviewGuildResponse implements IPreviewGuildResponse {
        /**
         * Constructs a new PreviewGuildResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IPreviewGuildResponse);

        /** PreviewGuildResponse name. */
        public name: string;

        /** PreviewGuildResponse avatar. */
        public avatar: string;

        /** PreviewGuildResponse memberCount. */
        public memberCount: number;

        /**
         * Encodes the specified PreviewGuildResponse message. Does not implicitly {@link protocol.chat.v1.PreviewGuildResponse.verify|verify} messages.
         * @param message PreviewGuildResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IPreviewGuildResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a PreviewGuildResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreviewGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.PreviewGuildResponse;

        /**
         * Creates a PreviewGuildResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreviewGuildResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.PreviewGuildResponse;

        /**
         * Creates a plain object from a PreviewGuildResponse message. Also converts values to other types if specified.
         * @param message PreviewGuildResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.PreviewGuildResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this PreviewGuildResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a LeaveGuildRequest. */
      interface ILeaveGuildRequest {
        /** LeaveGuildRequest guildId */
        guildId?: number | null;
      }

      /** Represents a LeaveGuildRequest. */
      class LeaveGuildRequest implements ILeaveGuildRequest {
        /**
         * Constructs a new LeaveGuildRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ILeaveGuildRequest);

        /** LeaveGuildRequest guildId. */
        public guildId: number;

        /**
         * Encodes the specified LeaveGuildRequest message. Does not implicitly {@link protocol.chat.v1.LeaveGuildRequest.verify|verify} messages.
         * @param message LeaveGuildRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ILeaveGuildRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a LeaveGuildRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LeaveGuildRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.LeaveGuildRequest;

        /**
         * Creates a LeaveGuildRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LeaveGuildRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.LeaveGuildRequest;

        /**
         * Creates a plain object from a LeaveGuildRequest message. Also converts values to other types if specified.
         * @param message LeaveGuildRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.LeaveGuildRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this LeaveGuildRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an AddGuildToGuildListRequest. */
      interface IAddGuildToGuildListRequest {
        /** AddGuildToGuildListRequest guildId */
        guildId?: number | null;

        /** AddGuildToGuildListRequest homeserver */
        homeserver?: string | null;
      }

      /** Represents an AddGuildToGuildListRequest. */
      class AddGuildToGuildListRequest implements IAddGuildToGuildListRequest {
        /**
         * Constructs a new AddGuildToGuildListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IAddGuildToGuildListRequest);

        /** AddGuildToGuildListRequest guildId. */
        public guildId: number;

        /** AddGuildToGuildListRequest homeserver. */
        public homeserver: string;

        /**
         * Encodes the specified AddGuildToGuildListRequest message. Does not implicitly {@link protocol.chat.v1.AddGuildToGuildListRequest.verify|verify} messages.
         * @param message AddGuildToGuildListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IAddGuildToGuildListRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AddGuildToGuildListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddGuildToGuildListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.AddGuildToGuildListRequest;

        /**
         * Creates an AddGuildToGuildListRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddGuildToGuildListRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.AddGuildToGuildListRequest;

        /**
         * Creates a plain object from an AddGuildToGuildListRequest message. Also converts values to other types if specified.
         * @param message AddGuildToGuildListRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.AddGuildToGuildListRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this AddGuildToGuildListRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an AddGuildToGuildListResponse. */
      interface IAddGuildToGuildListResponse {}

      /** Represents an AddGuildToGuildListResponse. */
      class AddGuildToGuildListResponse
        implements IAddGuildToGuildListResponse {
        /**
         * Constructs a new AddGuildToGuildListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IAddGuildToGuildListResponse);

        /**
         * Encodes the specified AddGuildToGuildListResponse message. Does not implicitly {@link protocol.chat.v1.AddGuildToGuildListResponse.verify|verify} messages.
         * @param message AddGuildToGuildListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IAddGuildToGuildListResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AddGuildToGuildListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddGuildToGuildListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.AddGuildToGuildListResponse;

        /**
         * Creates an AddGuildToGuildListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddGuildToGuildListResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.AddGuildToGuildListResponse;

        /**
         * Creates a plain object from an AddGuildToGuildListResponse message. Also converts values to other types if specified.
         * @param message AddGuildToGuildListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.AddGuildToGuildListResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this AddGuildToGuildListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a RemoveGuildFromGuildListRequest. */
      interface IRemoveGuildFromGuildListRequest {
        /** RemoveGuildFromGuildListRequest guildId */
        guildId?: number | null;

        /** RemoveGuildFromGuildListRequest homeserver */
        homeserver?: string | null;
      }

      /** Represents a RemoveGuildFromGuildListRequest. */
      class RemoveGuildFromGuildListRequest
        implements IRemoveGuildFromGuildListRequest {
        /**
         * Constructs a new RemoveGuildFromGuildListRequest.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: protocol.chat.v1.IRemoveGuildFromGuildListRequest
        );

        /** RemoveGuildFromGuildListRequest guildId. */
        public guildId: number;

        /** RemoveGuildFromGuildListRequest homeserver. */
        public homeserver: string;

        /**
         * Encodes the specified RemoveGuildFromGuildListRequest message. Does not implicitly {@link protocol.chat.v1.RemoveGuildFromGuildListRequest.verify|verify} messages.
         * @param message RemoveGuildFromGuildListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IRemoveGuildFromGuildListRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a RemoveGuildFromGuildListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoveGuildFromGuildListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.RemoveGuildFromGuildListRequest;

        /**
         * Creates a RemoveGuildFromGuildListRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoveGuildFromGuildListRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.RemoveGuildFromGuildListRequest;

        /**
         * Creates a plain object from a RemoveGuildFromGuildListRequest message. Also converts values to other types if specified.
         * @param message RemoveGuildFromGuildListRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.RemoveGuildFromGuildListRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this RemoveGuildFromGuildListRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a RemoveGuildFromGuildListResponse. */
      interface IRemoveGuildFromGuildListResponse {}

      /** Represents a RemoveGuildFromGuildListResponse. */
      class RemoveGuildFromGuildListResponse
        implements IRemoveGuildFromGuildListResponse {
        /**
         * Constructs a new RemoveGuildFromGuildListResponse.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: protocol.chat.v1.IRemoveGuildFromGuildListResponse
        );

        /**
         * Encodes the specified RemoveGuildFromGuildListResponse message. Does not implicitly {@link protocol.chat.v1.RemoveGuildFromGuildListResponse.verify|verify} messages.
         * @param message RemoveGuildFromGuildListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IRemoveGuildFromGuildListResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a RemoveGuildFromGuildListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoveGuildFromGuildListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.RemoveGuildFromGuildListResponse;

        /**
         * Creates a RemoveGuildFromGuildListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoveGuildFromGuildListResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.RemoveGuildFromGuildListResponse;

        /**
         * Creates a plain object from a RemoveGuildFromGuildListResponse message. Also converts values to other types if specified.
         * @param message RemoveGuildFromGuildListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.RemoveGuildFromGuildListResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this RemoveGuildFromGuildListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a BanUserRequest. */
      interface IBanUserRequest {
        /** BanUserRequest guildId */
        guildId?: number | null;

        /** BanUserRequest userId */
        userId?: number | null;
      }

      /** Represents a BanUserRequest. */
      class BanUserRequest implements IBanUserRequest {
        /**
         * Constructs a new BanUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IBanUserRequest);

        /** BanUserRequest guildId. */
        public guildId: number;

        /** BanUserRequest userId. */
        public userId: number;

        /**
         * Encodes the specified BanUserRequest message. Does not implicitly {@link protocol.chat.v1.BanUserRequest.verify|verify} messages.
         * @param message BanUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IBanUserRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a BanUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BanUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.BanUserRequest;

        /**
         * Creates a BanUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BanUserRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.BanUserRequest;

        /**
         * Creates a plain object from a BanUserRequest message. Also converts values to other types if specified.
         * @param message BanUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.BanUserRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this BanUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a KickUserRequest. */
      interface IKickUserRequest {
        /** KickUserRequest guildId */
        guildId?: number | null;

        /** KickUserRequest userId */
        userId?: number | null;
      }

      /** Represents a KickUserRequest. */
      class KickUserRequest implements IKickUserRequest {
        /**
         * Constructs a new KickUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IKickUserRequest);

        /** KickUserRequest guildId. */
        public guildId: number;

        /** KickUserRequest userId. */
        public userId: number;

        /**
         * Encodes the specified KickUserRequest message. Does not implicitly {@link protocol.chat.v1.KickUserRequest.verify|verify} messages.
         * @param message KickUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IKickUserRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a KickUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.KickUserRequest;

        /**
         * Creates a KickUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickUserRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.KickUserRequest;

        /**
         * Creates a plain object from a KickUserRequest message. Also converts values to other types if specified.
         * @param message KickUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.KickUserRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this KickUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an UnbanUserRequest. */
      interface IUnbanUserRequest {
        /** UnbanUserRequest guildId */
        guildId?: number | null;

        /** UnbanUserRequest userId */
        userId?: number | null;
      }

      /** Represents an UnbanUserRequest. */
      class UnbanUserRequest implements IUnbanUserRequest {
        /**
         * Constructs a new UnbanUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IUnbanUserRequest);

        /** UnbanUserRequest guildId. */
        public guildId: number;

        /** UnbanUserRequest userId. */
        public userId: number;

        /**
         * Encodes the specified UnbanUserRequest message. Does not implicitly {@link protocol.chat.v1.UnbanUserRequest.verify|verify} messages.
         * @param message UnbanUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IUnbanUserRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an UnbanUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnbanUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.UnbanUserRequest;

        /**
         * Creates an UnbanUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnbanUserRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.UnbanUserRequest;

        /**
         * Creates a plain object from an UnbanUserRequest message. Also converts values to other types if specified.
         * @param message UnbanUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.UnbanUserRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this UnbanUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a CreateEmotePackRequest. */
      interface ICreateEmotePackRequest {
        /** CreateEmotePackRequest packName */
        packName?: string | null;
      }

      /** Represents a CreateEmotePackRequest. */
      class CreateEmotePackRequest implements ICreateEmotePackRequest {
        /**
         * Constructs a new CreateEmotePackRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ICreateEmotePackRequest);

        /** CreateEmotePackRequest packName. */
        public packName: string;

        /**
         * Encodes the specified CreateEmotePackRequest message. Does not implicitly {@link protocol.chat.v1.CreateEmotePackRequest.verify|verify} messages.
         * @param message CreateEmotePackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ICreateEmotePackRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CreateEmotePackRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateEmotePackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.CreateEmotePackRequest;

        /**
         * Creates a CreateEmotePackRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateEmotePackRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.CreateEmotePackRequest;

        /**
         * Creates a plain object from a CreateEmotePackRequest message. Also converts values to other types if specified.
         * @param message CreateEmotePackRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.CreateEmotePackRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this CreateEmotePackRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a CreateEmotePackResponse. */
      interface ICreateEmotePackResponse {
        /** CreateEmotePackResponse packId */
        packId?: number | null;
      }

      /** Represents a CreateEmotePackResponse. */
      class CreateEmotePackResponse implements ICreateEmotePackResponse {
        /**
         * Constructs a new CreateEmotePackResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ICreateEmotePackResponse);

        /** CreateEmotePackResponse packId. */
        public packId: number;

        /**
         * Encodes the specified CreateEmotePackResponse message. Does not implicitly {@link protocol.chat.v1.CreateEmotePackResponse.verify|verify} messages.
         * @param message CreateEmotePackResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ICreateEmotePackResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CreateEmotePackResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateEmotePackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.CreateEmotePackResponse;

        /**
         * Creates a CreateEmotePackResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateEmotePackResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.CreateEmotePackResponse;

        /**
         * Creates a plain object from a CreateEmotePackResponse message. Also converts values to other types if specified.
         * @param message CreateEmotePackResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.CreateEmotePackResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this CreateEmotePackResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetEmotePacksRequest. */
      interface IGetEmotePacksRequest {}

      /** Represents a GetEmotePacksRequest. */
      class GetEmotePacksRequest implements IGetEmotePacksRequest {
        /**
         * Constructs a new GetEmotePacksRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetEmotePacksRequest);

        /**
         * Encodes the specified GetEmotePacksRequest message. Does not implicitly {@link protocol.chat.v1.GetEmotePacksRequest.verify|verify} messages.
         * @param message GetEmotePacksRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetEmotePacksRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetEmotePacksRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEmotePacksRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetEmotePacksRequest;

        /**
         * Creates a GetEmotePacksRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEmotePacksRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetEmotePacksRequest;

        /**
         * Creates a plain object from a GetEmotePacksRequest message. Also converts values to other types if specified.
         * @param message GetEmotePacksRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetEmotePacksRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetEmotePacksRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetEmotePacksResponse. */
      interface IGetEmotePacksResponse {
        /** GetEmotePacksResponse packs */
        packs?: protocol.chat.v1.GetEmotePacksResponse.IEmotePack[] | null;
      }

      /** Represents a GetEmotePacksResponse. */
      class GetEmotePacksResponse implements IGetEmotePacksResponse {
        /**
         * Constructs a new GetEmotePacksResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetEmotePacksResponse);

        /** GetEmotePacksResponse packs. */
        public packs: protocol.chat.v1.GetEmotePacksResponse.IEmotePack[];

        /**
         * Encodes the specified GetEmotePacksResponse message. Does not implicitly {@link protocol.chat.v1.GetEmotePacksResponse.verify|verify} messages.
         * @param message GetEmotePacksResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetEmotePacksResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetEmotePacksResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEmotePacksResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetEmotePacksResponse;

        /**
         * Creates a GetEmotePacksResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEmotePacksResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetEmotePacksResponse;

        /**
         * Creates a plain object from a GetEmotePacksResponse message. Also converts values to other types if specified.
         * @param message GetEmotePacksResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetEmotePacksResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetEmotePacksResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      namespace GetEmotePacksResponse {
        /** Properties of an EmotePack. */
        interface IEmotePack {
          /** EmotePack packId */
          packId?: number | null;

          /** EmotePack packOwner */
          packOwner?: number | null;

          /** EmotePack packName */
          packName?: string | null;
        }

        /** Represents an EmotePack. */
        class EmotePack implements IEmotePack {
          /**
           * Constructs a new EmotePack.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: protocol.chat.v1.GetEmotePacksResponse.IEmotePack
          );

          /** EmotePack packId. */
          public packId: number;

          /** EmotePack packOwner. */
          public packOwner: number;

          /** EmotePack packName. */
          public packName: string;

          /**
           * Encodes the specified EmotePack message. Does not implicitly {@link protocol.chat.v1.GetEmotePacksResponse.EmotePack.verify|verify} messages.
           * @param message EmotePack message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.GetEmotePacksResponse.IEmotePack,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes an EmotePack message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns EmotePack
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.GetEmotePacksResponse.EmotePack;

          /**
           * Creates an EmotePack message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns EmotePack
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.GetEmotePacksResponse.EmotePack;

          /**
           * Creates a plain object from an EmotePack message. Also converts values to other types if specified.
           * @param message EmotePack
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.GetEmotePacksResponse.EmotePack,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this EmotePack to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }

      /** Properties of a GetEmotePackEmotesRequest. */
      interface IGetEmotePackEmotesRequest {
        /** GetEmotePackEmotesRequest packId */
        packId?: number | null;
      }

      /** Represents a GetEmotePackEmotesRequest. */
      class GetEmotePackEmotesRequest implements IGetEmotePackEmotesRequest {
        /**
         * Constructs a new GetEmotePackEmotesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetEmotePackEmotesRequest);

        /** GetEmotePackEmotesRequest packId. */
        public packId: number;

        /**
         * Encodes the specified GetEmotePackEmotesRequest message. Does not implicitly {@link protocol.chat.v1.GetEmotePackEmotesRequest.verify|verify} messages.
         * @param message GetEmotePackEmotesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetEmotePackEmotesRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetEmotePackEmotesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEmotePackEmotesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetEmotePackEmotesRequest;

        /**
         * Creates a GetEmotePackEmotesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEmotePackEmotesRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetEmotePackEmotesRequest;

        /**
         * Creates a plain object from a GetEmotePackEmotesRequest message. Also converts values to other types if specified.
         * @param message GetEmotePackEmotesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetEmotePackEmotesRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetEmotePackEmotesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetEmotePackEmotesResponse. */
      interface IGetEmotePackEmotesResponse {
        /** GetEmotePackEmotesResponse emotes */
        emotes?: protocol.chat.v1.GetEmotePackEmotesResponse.IEmote[] | null;
      }

      /** Represents a GetEmotePackEmotesResponse. */
      class GetEmotePackEmotesResponse implements IGetEmotePackEmotesResponse {
        /**
         * Constructs a new GetEmotePackEmotesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetEmotePackEmotesResponse);

        /** GetEmotePackEmotesResponse emotes. */
        public emotes: protocol.chat.v1.GetEmotePackEmotesResponse.IEmote[];

        /**
         * Encodes the specified GetEmotePackEmotesResponse message. Does not implicitly {@link protocol.chat.v1.GetEmotePackEmotesResponse.verify|verify} messages.
         * @param message GetEmotePackEmotesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetEmotePackEmotesResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetEmotePackEmotesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEmotePackEmotesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetEmotePackEmotesResponse;

        /**
         * Creates a GetEmotePackEmotesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEmotePackEmotesResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetEmotePackEmotesResponse;

        /**
         * Creates a plain object from a GetEmotePackEmotesResponse message. Also converts values to other types if specified.
         * @param message GetEmotePackEmotesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetEmotePackEmotesResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetEmotePackEmotesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      namespace GetEmotePackEmotesResponse {
        /** Properties of an Emote. */
        interface IEmote {
          /** Emote imageId */
          imageId?: string | null;

          /** Emote name */
          name?: string | null;
        }

        /** Represents an Emote. */
        class Emote implements IEmote {
          /**
           * Constructs a new Emote.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: protocol.chat.v1.GetEmotePackEmotesResponse.IEmote
          );

          /** Emote imageId. */
          public imageId: string;

          /** Emote name. */
          public name: string;

          /**
           * Encodes the specified Emote message. Does not implicitly {@link protocol.chat.v1.GetEmotePackEmotesResponse.Emote.verify|verify} messages.
           * @param message Emote message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.GetEmotePackEmotesResponse.IEmote,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes an Emote message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns Emote
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.GetEmotePackEmotesResponse.Emote;

          /**
           * Creates an Emote message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns Emote
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.GetEmotePackEmotesResponse.Emote;

          /**
           * Creates a plain object from an Emote message. Also converts values to other types if specified.
           * @param message Emote
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.GetEmotePackEmotesResponse.Emote,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this Emote to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }

      /** Properties of an AddEmoteToPackRequest. */
      interface IAddEmoteToPackRequest {
        /** AddEmoteToPackRequest packId */
        packId?: number | null;

        /** AddEmoteToPackRequest imageId */
        imageId?: string | null;

        /** AddEmoteToPackRequest name */
        name?: string | null;
      }

      /** Represents an AddEmoteToPackRequest. */
      class AddEmoteToPackRequest implements IAddEmoteToPackRequest {
        /**
         * Constructs a new AddEmoteToPackRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IAddEmoteToPackRequest);

        /** AddEmoteToPackRequest packId. */
        public packId: number;

        /** AddEmoteToPackRequest imageId. */
        public imageId: string;

        /** AddEmoteToPackRequest name. */
        public name: string;

        /**
         * Encodes the specified AddEmoteToPackRequest message. Does not implicitly {@link protocol.chat.v1.AddEmoteToPackRequest.verify|verify} messages.
         * @param message AddEmoteToPackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IAddEmoteToPackRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AddEmoteToPackRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddEmoteToPackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.AddEmoteToPackRequest;

        /**
         * Creates an AddEmoteToPackRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddEmoteToPackRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.AddEmoteToPackRequest;

        /**
         * Creates a plain object from an AddEmoteToPackRequest message. Also converts values to other types if specified.
         * @param message AddEmoteToPackRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.AddEmoteToPackRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this AddEmoteToPackRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DeleteEmoteFromPackRequest. */
      interface IDeleteEmoteFromPackRequest {
        /** DeleteEmoteFromPackRequest packId */
        packId?: number | null;

        /** DeleteEmoteFromPackRequest imageId */
        imageId?: string | null;
      }

      /** Represents a DeleteEmoteFromPackRequest. */
      class DeleteEmoteFromPackRequest implements IDeleteEmoteFromPackRequest {
        /**
         * Constructs a new DeleteEmoteFromPackRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDeleteEmoteFromPackRequest);

        /** DeleteEmoteFromPackRequest packId. */
        public packId: number;

        /** DeleteEmoteFromPackRequest imageId. */
        public imageId: string;

        /**
         * Encodes the specified DeleteEmoteFromPackRequest message. Does not implicitly {@link protocol.chat.v1.DeleteEmoteFromPackRequest.verify|verify} messages.
         * @param message DeleteEmoteFromPackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IDeleteEmoteFromPackRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DeleteEmoteFromPackRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteEmoteFromPackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.DeleteEmoteFromPackRequest;

        /**
         * Creates a DeleteEmoteFromPackRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteEmoteFromPackRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.DeleteEmoteFromPackRequest;

        /**
         * Creates a plain object from a DeleteEmoteFromPackRequest message. Also converts values to other types if specified.
         * @param message DeleteEmoteFromPackRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.DeleteEmoteFromPackRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DeleteEmoteFromPackRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DeleteEmotePackRequest. */
      interface IDeleteEmotePackRequest {
        /** DeleteEmotePackRequest packId */
        packId?: number | null;
      }

      /** Represents a DeleteEmotePackRequest. */
      class DeleteEmotePackRequest implements IDeleteEmotePackRequest {
        /**
         * Constructs a new DeleteEmotePackRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDeleteEmotePackRequest);

        /** DeleteEmotePackRequest packId. */
        public packId: number;

        /**
         * Encodes the specified DeleteEmotePackRequest message. Does not implicitly {@link protocol.chat.v1.DeleteEmotePackRequest.verify|verify} messages.
         * @param message DeleteEmotePackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IDeleteEmotePackRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DeleteEmotePackRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteEmotePackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.DeleteEmotePackRequest;

        /**
         * Creates a DeleteEmotePackRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteEmotePackRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.DeleteEmotePackRequest;

        /**
         * Creates a plain object from a DeleteEmotePackRequest message. Also converts values to other types if specified.
         * @param message DeleteEmotePackRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.DeleteEmotePackRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DeleteEmotePackRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DequipEmotePackRequest. */
      interface IDequipEmotePackRequest {
        /** DequipEmotePackRequest packId */
        packId?: number | null;
      }

      /** Represents a DequipEmotePackRequest. */
      class DequipEmotePackRequest implements IDequipEmotePackRequest {
        /**
         * Constructs a new DequipEmotePackRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDequipEmotePackRequest);

        /** DequipEmotePackRequest packId. */
        public packId: number;

        /**
         * Encodes the specified DequipEmotePackRequest message. Does not implicitly {@link protocol.chat.v1.DequipEmotePackRequest.verify|verify} messages.
         * @param message DequipEmotePackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IDequipEmotePackRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DequipEmotePackRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DequipEmotePackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.DequipEmotePackRequest;

        /**
         * Creates a DequipEmotePackRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DequipEmotePackRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.DequipEmotePackRequest;

        /**
         * Creates a plain object from a DequipEmotePackRequest message. Also converts values to other types if specified.
         * @param message DequipEmotePackRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.DequipEmotePackRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DequipEmotePackRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a CreateChannelRequest. */
      interface ICreateChannelRequest {
        /** CreateChannelRequest guildId */
        guildId?: number | null;

        /** CreateChannelRequest channelName */
        channelName?: string | null;

        /** CreateChannelRequest isCategory */
        isCategory?: boolean | null;

        /** CreateChannelRequest previousId */
        previousId?: number | null;

        /** CreateChannelRequest nextId */
        nextId?: number | null;

        /** CreateChannelRequest metadata */
        metadata?: protocol.harmonytypes.v1.IMetadata | null;
      }

      /** Represents a CreateChannelRequest. */
      class CreateChannelRequest implements ICreateChannelRequest {
        /**
         * Constructs a new CreateChannelRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ICreateChannelRequest);

        /** CreateChannelRequest guildId. */
        public guildId: number;

        /** CreateChannelRequest channelName. */
        public channelName: string;

        /** CreateChannelRequest isCategory. */
        public isCategory: boolean;

        /** CreateChannelRequest previousId. */
        public previousId: number;

        /** CreateChannelRequest nextId. */
        public nextId: number;

        /** CreateChannelRequest metadata. */
        public metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /**
         * Encodes the specified CreateChannelRequest message. Does not implicitly {@link protocol.chat.v1.CreateChannelRequest.verify|verify} messages.
         * @param message CreateChannelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ICreateChannelRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CreateChannelRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateChannelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.CreateChannelRequest;

        /**
         * Creates a CreateChannelRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateChannelRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.CreateChannelRequest;

        /**
         * Creates a plain object from a CreateChannelRequest message. Also converts values to other types if specified.
         * @param message CreateChannelRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.CreateChannelRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this CreateChannelRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a CreateChannelResponse. */
      interface ICreateChannelResponse {
        /** CreateChannelResponse channelId */
        channelId?: number | null;
      }

      /** Represents a CreateChannelResponse. */
      class CreateChannelResponse implements ICreateChannelResponse {
        /**
         * Constructs a new CreateChannelResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ICreateChannelResponse);

        /** CreateChannelResponse channelId. */
        public channelId: number;

        /**
         * Encodes the specified CreateChannelResponse message. Does not implicitly {@link protocol.chat.v1.CreateChannelResponse.verify|verify} messages.
         * @param message CreateChannelResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ICreateChannelResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CreateChannelResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateChannelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.CreateChannelResponse;

        /**
         * Creates a CreateChannelResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateChannelResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.CreateChannelResponse;

        /**
         * Creates a plain object from a CreateChannelResponse message. Also converts values to other types if specified.
         * @param message CreateChannelResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.CreateChannelResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this CreateChannelResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetGuildChannelsRequest. */
      interface IGetGuildChannelsRequest {
        /** GetGuildChannelsRequest guildId */
        guildId?: number | null;
      }

      /** Represents a GetGuildChannelsRequest. */
      class GetGuildChannelsRequest implements IGetGuildChannelsRequest {
        /**
         * Constructs a new GetGuildChannelsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildChannelsRequest);

        /** GetGuildChannelsRequest guildId. */
        public guildId: number;

        /**
         * Encodes the specified GetGuildChannelsRequest message. Does not implicitly {@link protocol.chat.v1.GetGuildChannelsRequest.verify|verify} messages.
         * @param message GetGuildChannelsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetGuildChannelsRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetGuildChannelsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuildChannelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetGuildChannelsRequest;

        /**
         * Creates a GetGuildChannelsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuildChannelsRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetGuildChannelsRequest;

        /**
         * Creates a plain object from a GetGuildChannelsRequest message. Also converts values to other types if specified.
         * @param message GetGuildChannelsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetGuildChannelsRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetGuildChannelsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetGuildChannelsResponse. */
      interface IGetGuildChannelsResponse {
        /** GetGuildChannelsResponse channels */
        channels?: protocol.chat.v1.GetGuildChannelsResponse.IChannel[] | null;
      }

      /** Represents a GetGuildChannelsResponse. */
      class GetGuildChannelsResponse implements IGetGuildChannelsResponse {
        /**
         * Constructs a new GetGuildChannelsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildChannelsResponse);

        /** GetGuildChannelsResponse channels. */
        public channels: protocol.chat.v1.GetGuildChannelsResponse.IChannel[];

        /**
         * Encodes the specified GetGuildChannelsResponse message. Does not implicitly {@link protocol.chat.v1.GetGuildChannelsResponse.verify|verify} messages.
         * @param message GetGuildChannelsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetGuildChannelsResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetGuildChannelsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGuildChannelsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetGuildChannelsResponse;

        /**
         * Creates a GetGuildChannelsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGuildChannelsResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetGuildChannelsResponse;

        /**
         * Creates a plain object from a GetGuildChannelsResponse message. Also converts values to other types if specified.
         * @param message GetGuildChannelsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetGuildChannelsResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetGuildChannelsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      namespace GetGuildChannelsResponse {
        /** Properties of a Channel. */
        interface IChannel {
          /** Channel metadata */
          metadata?: protocol.harmonytypes.v1.IMetadata | null;

          /** Channel channelId */
          channelId?: number | null;

          /** Channel channelName */
          channelName?: string | null;

          /** Channel isCategory */
          isCategory?: boolean | null;
        }

        /** Represents a Channel. */
        class Channel implements IChannel {
          /**
           * Constructs a new Channel.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: protocol.chat.v1.GetGuildChannelsResponse.IChannel
          );

          /** Channel metadata. */
          public metadata?: protocol.harmonytypes.v1.IMetadata | null;

          /** Channel channelId. */
          public channelId: number;

          /** Channel channelName. */
          public channelName: string;

          /** Channel isCategory. */
          public isCategory: boolean;

          /**
           * Encodes the specified Channel message. Does not implicitly {@link protocol.chat.v1.GetGuildChannelsResponse.Channel.verify|verify} messages.
           * @param message Channel message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.GetGuildChannelsResponse.IChannel,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a Channel message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns Channel
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.GetGuildChannelsResponse.Channel;

          /**
           * Creates a Channel message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns Channel
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.GetGuildChannelsResponse.Channel;

          /**
           * Creates a plain object from a Channel message. Also converts values to other types if specified.
           * @param message Channel
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.GetGuildChannelsResponse.Channel,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this Channel to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }

      /** Properties of an UpdateChannelInformationRequest. */
      interface IUpdateChannelInformationRequest {
        /** UpdateChannelInformationRequest guildId */
        guildId?: number | null;

        /** UpdateChannelInformationRequest channelId */
        channelId?: number | null;

        /** UpdateChannelInformationRequest name */
        name?: string | null;

        /** UpdateChannelInformationRequest updateName */
        updateName?: boolean | null;

        /** UpdateChannelInformationRequest metadata */
        metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /** UpdateChannelInformationRequest updateMetadata */
        updateMetadata?: boolean | null;
      }

      /** Represents an UpdateChannelInformationRequest. */
      class UpdateChannelInformationRequest
        implements IUpdateChannelInformationRequest {
        /**
         * Constructs a new UpdateChannelInformationRequest.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: protocol.chat.v1.IUpdateChannelInformationRequest
        );

        /** UpdateChannelInformationRequest guildId. */
        public guildId: number;

        /** UpdateChannelInformationRequest channelId. */
        public channelId: number;

        /** UpdateChannelInformationRequest name. */
        public name: string;

        /** UpdateChannelInformationRequest updateName. */
        public updateName: boolean;

        /** UpdateChannelInformationRequest metadata. */
        public metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /** UpdateChannelInformationRequest updateMetadata. */
        public updateMetadata: boolean;

        /**
         * Encodes the specified UpdateChannelInformationRequest message. Does not implicitly {@link protocol.chat.v1.UpdateChannelInformationRequest.verify|verify} messages.
         * @param message UpdateChannelInformationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IUpdateChannelInformationRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an UpdateChannelInformationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateChannelInformationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.UpdateChannelInformationRequest;

        /**
         * Creates an UpdateChannelInformationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateChannelInformationRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.UpdateChannelInformationRequest;

        /**
         * Creates a plain object from an UpdateChannelInformationRequest message. Also converts values to other types if specified.
         * @param message UpdateChannelInformationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.UpdateChannelInformationRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this UpdateChannelInformationRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an UpdateChannelOrderRequest. */
      interface IUpdateChannelOrderRequest {
        /** UpdateChannelOrderRequest guildId */
        guildId?: number | null;

        /** UpdateChannelOrderRequest channelId */
        channelId?: number | null;

        /** UpdateChannelOrderRequest previousId */
        previousId?: number | null;

        /** UpdateChannelOrderRequest nextId */
        nextId?: number | null;
      }

      /** Represents an UpdateChannelOrderRequest. */
      class UpdateChannelOrderRequest implements IUpdateChannelOrderRequest {
        /**
         * Constructs a new UpdateChannelOrderRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IUpdateChannelOrderRequest);

        /** UpdateChannelOrderRequest guildId. */
        public guildId: number;

        /** UpdateChannelOrderRequest channelId. */
        public channelId: number;

        /** UpdateChannelOrderRequest previousId. */
        public previousId: number;

        /** UpdateChannelOrderRequest nextId. */
        public nextId: number;

        /**
         * Encodes the specified UpdateChannelOrderRequest message. Does not implicitly {@link protocol.chat.v1.UpdateChannelOrderRequest.verify|verify} messages.
         * @param message UpdateChannelOrderRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IUpdateChannelOrderRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an UpdateChannelOrderRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateChannelOrderRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.UpdateChannelOrderRequest;

        /**
         * Creates an UpdateChannelOrderRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateChannelOrderRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.UpdateChannelOrderRequest;

        /**
         * Creates a plain object from an UpdateChannelOrderRequest message. Also converts values to other types if specified.
         * @param message UpdateChannelOrderRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.UpdateChannelOrderRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this UpdateChannelOrderRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DeleteChannelRequest. */
      interface IDeleteChannelRequest {
        /** DeleteChannelRequest guildId */
        guildId?: number | null;

        /** DeleteChannelRequest channelId */
        channelId?: number | null;
      }

      /** Represents a DeleteChannelRequest. */
      class DeleteChannelRequest implements IDeleteChannelRequest {
        /**
         * Constructs a new DeleteChannelRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDeleteChannelRequest);

        /** DeleteChannelRequest guildId. */
        public guildId: number;

        /** DeleteChannelRequest channelId. */
        public channelId: number;

        /**
         * Encodes the specified DeleteChannelRequest message. Does not implicitly {@link protocol.chat.v1.DeleteChannelRequest.verify|verify} messages.
         * @param message DeleteChannelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IDeleteChannelRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DeleteChannelRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteChannelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.DeleteChannelRequest;

        /**
         * Creates a DeleteChannelRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteChannelRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.DeleteChannelRequest;

        /**
         * Creates a plain object from a DeleteChannelRequest message. Also converts values to other types if specified.
         * @param message DeleteChannelRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.DeleteChannelRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DeleteChannelRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a TypingRequest. */
      interface ITypingRequest {
        /** TypingRequest guildId */
        guildId?: number | null;

        /** TypingRequest channelId */
        channelId?: number | null;
      }

      /** Represents a TypingRequest. */
      class TypingRequest implements ITypingRequest {
        /**
         * Constructs a new TypingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ITypingRequest);

        /** TypingRequest guildId. */
        public guildId: number;

        /** TypingRequest channelId. */
        public channelId: number;

        /**
         * Encodes the specified TypingRequest message. Does not implicitly {@link protocol.chat.v1.TypingRequest.verify|verify} messages.
         * @param message TypingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ITypingRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a TypingRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TypingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.TypingRequest;

        /**
         * Creates a TypingRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TypingRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.TypingRequest;

        /**
         * Creates a plain object from a TypingRequest message. Also converts values to other types if specified.
         * @param message TypingRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.TypingRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this TypingRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetChannelMessagesRequest. */
      interface IGetChannelMessagesRequest {
        /** GetChannelMessagesRequest guildId */
        guildId?: number | null;

        /** GetChannelMessagesRequest channelId */
        channelId?: number | null;

        /** GetChannelMessagesRequest beforeMessage */
        beforeMessage?: number | null;
      }

      /** Represents a GetChannelMessagesRequest. */
      class GetChannelMessagesRequest implements IGetChannelMessagesRequest {
        /**
         * Constructs a new GetChannelMessagesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetChannelMessagesRequest);

        /** GetChannelMessagesRequest guildId. */
        public guildId: number;

        /** GetChannelMessagesRequest channelId. */
        public channelId: number;

        /** GetChannelMessagesRequest beforeMessage. */
        public beforeMessage: number;

        /**
         * Encodes the specified GetChannelMessagesRequest message. Does not implicitly {@link protocol.chat.v1.GetChannelMessagesRequest.verify|verify} messages.
         * @param message GetChannelMessagesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetChannelMessagesRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetChannelMessagesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetChannelMessagesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetChannelMessagesRequest;

        /**
         * Creates a GetChannelMessagesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetChannelMessagesRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetChannelMessagesRequest;

        /**
         * Creates a plain object from a GetChannelMessagesRequest message. Also converts values to other types if specified.
         * @param message GetChannelMessagesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetChannelMessagesRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetChannelMessagesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetChannelMessagesResponse. */
      interface IGetChannelMessagesResponse {
        /** GetChannelMessagesResponse reachedTop */
        reachedTop?: boolean | null;

        /** GetChannelMessagesResponse messages */
        messages?: protocol.harmonytypes.v1.IMessage[] | null;
      }

      /** Represents a GetChannelMessagesResponse. */
      class GetChannelMessagesResponse implements IGetChannelMessagesResponse {
        /**
         * Constructs a new GetChannelMessagesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetChannelMessagesResponse);

        /** GetChannelMessagesResponse reachedTop. */
        public reachedTop: boolean;

        /** GetChannelMessagesResponse messages. */
        public messages: protocol.harmonytypes.v1.IMessage[];

        /**
         * Encodes the specified GetChannelMessagesResponse message. Does not implicitly {@link protocol.chat.v1.GetChannelMessagesResponse.verify|verify} messages.
         * @param message GetChannelMessagesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetChannelMessagesResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetChannelMessagesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetChannelMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetChannelMessagesResponse;

        /**
         * Creates a GetChannelMessagesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetChannelMessagesResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetChannelMessagesResponse;

        /**
         * Creates a plain object from a GetChannelMessagesResponse message. Also converts values to other types if specified.
         * @param message GetChannelMessagesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetChannelMessagesResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetChannelMessagesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetMessageRequest. */
      interface IGetMessageRequest {
        /** GetMessageRequest guildId */
        guildId?: number | null;

        /** GetMessageRequest channelId */
        channelId?: number | null;

        /** GetMessageRequest messageId */
        messageId?: number | null;
      }

      /** Represents a GetMessageRequest. */
      class GetMessageRequest implements IGetMessageRequest {
        /**
         * Constructs a new GetMessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetMessageRequest);

        /** GetMessageRequest guildId. */
        public guildId: number;

        /** GetMessageRequest channelId. */
        public channelId: number;

        /** GetMessageRequest messageId. */
        public messageId: number;

        /**
         * Encodes the specified GetMessageRequest message. Does not implicitly {@link protocol.chat.v1.GetMessageRequest.verify|verify} messages.
         * @param message GetMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetMessageRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetMessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetMessageRequest;

        /**
         * Creates a GetMessageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMessageRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetMessageRequest;

        /**
         * Creates a plain object from a GetMessageRequest message. Also converts values to other types if specified.
         * @param message GetMessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetMessageRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetMessageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetMessageResponse. */
      interface IGetMessageResponse {
        /** GetMessageResponse message */
        message?: protocol.harmonytypes.v1.IMessage | null;
      }

      /** Represents a GetMessageResponse. */
      class GetMessageResponse implements IGetMessageResponse {
        /**
         * Constructs a new GetMessageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetMessageResponse);

        /** GetMessageResponse message. */
        public message?: protocol.harmonytypes.v1.IMessage | null;

        /**
         * Encodes the specified GetMessageResponse message. Does not implicitly {@link protocol.chat.v1.GetMessageResponse.verify|verify} messages.
         * @param message GetMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetMessageResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetMessageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetMessageResponse;

        /**
         * Creates a GetMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMessageResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetMessageResponse;

        /**
         * Creates a plain object from a GetMessageResponse message. Also converts values to other types if specified.
         * @param message GetMessageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetMessageResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetMessageResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an UpdateMessageRequest. */
      interface IUpdateMessageRequest {
        /** UpdateMessageRequest guildId */
        guildId?: number | null;

        /** UpdateMessageRequest channelId */
        channelId?: number | null;

        /** UpdateMessageRequest messageId */
        messageId?: number | null;

        /** UpdateMessageRequest content */
        content?: string | null;

        /** UpdateMessageRequest updateContent */
        updateContent?: boolean | null;

        /** UpdateMessageRequest embeds */
        embeds?: protocol.harmonytypes.v1.IEmbed[] | null;

        /** UpdateMessageRequest updateEmbeds */
        updateEmbeds?: boolean | null;

        /** UpdateMessageRequest actions */
        actions?: protocol.harmonytypes.v1.IAction[] | null;

        /** UpdateMessageRequest updateActions */
        updateActions?: boolean | null;

        /** UpdateMessageRequest attachments */
        attachments?: string[] | null;

        /** UpdateMessageRequest updateAttachments */
        updateAttachments?: boolean | null;

        /** UpdateMessageRequest overrides */
        overrides?: protocol.harmonytypes.v1.IOverride | null;

        /** UpdateMessageRequest updateOverrides */
        updateOverrides?: boolean | null;

        /** UpdateMessageRequest metadata */
        metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /** UpdateMessageRequest updateMetadata */
        updateMetadata?: boolean | null;
      }

      /** Represents an UpdateMessageRequest. */
      class UpdateMessageRequest implements IUpdateMessageRequest {
        /**
         * Constructs a new UpdateMessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IUpdateMessageRequest);

        /** UpdateMessageRequest guildId. */
        public guildId: number;

        /** UpdateMessageRequest channelId. */
        public channelId: number;

        /** UpdateMessageRequest messageId. */
        public messageId: number;

        /** UpdateMessageRequest content. */
        public content: string;

        /** UpdateMessageRequest updateContent. */
        public updateContent: boolean;

        /** UpdateMessageRequest embeds. */
        public embeds: protocol.harmonytypes.v1.IEmbed[];

        /** UpdateMessageRequest updateEmbeds. */
        public updateEmbeds: boolean;

        /** UpdateMessageRequest actions. */
        public actions: protocol.harmonytypes.v1.IAction[];

        /** UpdateMessageRequest updateActions. */
        public updateActions: boolean;

        /** UpdateMessageRequest attachments. */
        public attachments: string[];

        /** UpdateMessageRequest updateAttachments. */
        public updateAttachments: boolean;

        /** UpdateMessageRequest overrides. */
        public overrides?: protocol.harmonytypes.v1.IOverride | null;

        /** UpdateMessageRequest updateOverrides. */
        public updateOverrides: boolean;

        /** UpdateMessageRequest metadata. */
        public metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /** UpdateMessageRequest updateMetadata. */
        public updateMetadata: boolean;

        /**
         * Encodes the specified UpdateMessageRequest message. Does not implicitly {@link protocol.chat.v1.UpdateMessageRequest.verify|verify} messages.
         * @param message UpdateMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IUpdateMessageRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an UpdateMessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.UpdateMessageRequest;

        /**
         * Creates an UpdateMessageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateMessageRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.UpdateMessageRequest;

        /**
         * Creates a plain object from an UpdateMessageRequest message. Also converts values to other types if specified.
         * @param message UpdateMessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.UpdateMessageRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this UpdateMessageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DeleteMessageRequest. */
      interface IDeleteMessageRequest {
        /** DeleteMessageRequest guildId */
        guildId?: number | null;

        /** DeleteMessageRequest channelId */
        channelId?: number | null;

        /** DeleteMessageRequest messageId */
        messageId?: number | null;
      }

      /** Represents a DeleteMessageRequest. */
      class DeleteMessageRequest implements IDeleteMessageRequest {
        /**
         * Constructs a new DeleteMessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDeleteMessageRequest);

        /** DeleteMessageRequest guildId. */
        public guildId: number;

        /** DeleteMessageRequest channelId. */
        public channelId: number;

        /** DeleteMessageRequest messageId. */
        public messageId: number;

        /**
         * Encodes the specified DeleteMessageRequest message. Does not implicitly {@link protocol.chat.v1.DeleteMessageRequest.verify|verify} messages.
         * @param message DeleteMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IDeleteMessageRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DeleteMessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.DeleteMessageRequest;

        /**
         * Creates a DeleteMessageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteMessageRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.DeleteMessageRequest;

        /**
         * Creates a plain object from a DeleteMessageRequest message. Also converts values to other types if specified.
         * @param message DeleteMessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.DeleteMessageRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DeleteMessageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a TriggerActionRequest. */
      interface ITriggerActionRequest {
        /** TriggerActionRequest guildId */
        guildId?: number | null;

        /** TriggerActionRequest channelId */
        channelId?: number | null;

        /** TriggerActionRequest messageId */
        messageId?: number | null;

        /** TriggerActionRequest actionId */
        actionId?: string | null;

        /** TriggerActionRequest actionData */
        actionData?: string | null;
      }

      /** Represents a TriggerActionRequest. */
      class TriggerActionRequest implements ITriggerActionRequest {
        /**
         * Constructs a new TriggerActionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ITriggerActionRequest);

        /** TriggerActionRequest guildId. */
        public guildId: number;

        /** TriggerActionRequest channelId. */
        public channelId: number;

        /** TriggerActionRequest messageId. */
        public messageId: number;

        /** TriggerActionRequest actionId. */
        public actionId: string;

        /** TriggerActionRequest actionData. */
        public actionData: string;

        /**
         * Encodes the specified TriggerActionRequest message. Does not implicitly {@link protocol.chat.v1.TriggerActionRequest.verify|verify} messages.
         * @param message TriggerActionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ITriggerActionRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a TriggerActionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TriggerActionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.TriggerActionRequest;

        /**
         * Creates a TriggerActionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TriggerActionRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.TriggerActionRequest;

        /**
         * Creates a plain object from a TriggerActionRequest message. Also converts values to other types if specified.
         * @param message TriggerActionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.TriggerActionRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this TriggerActionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a SendMessageRequest. */
      interface ISendMessageRequest {
        /** SendMessageRequest guildId */
        guildId?: number | null;

        /** SendMessageRequest channelId */
        channelId?: number | null;

        /** SendMessageRequest content */
        content?: string | null;

        /** SendMessageRequest actions */
        actions?: protocol.harmonytypes.v1.IAction[] | null;

        /** SendMessageRequest embeds */
        embeds?: protocol.harmonytypes.v1.IEmbed[] | null;

        /** SendMessageRequest attachments */
        attachments?: string[] | null;

        /** SendMessageRequest inReplyTo */
        inReplyTo?: number | null;

        /** SendMessageRequest overrides */
        overrides?: protocol.harmonytypes.v1.IOverride | null;

        /** SendMessageRequest echoId */
        echoId?: number | null;

        /** SendMessageRequest metadata */
        metadata?: protocol.harmonytypes.v1.IMetadata | null;
      }

      /** Represents a SendMessageRequest. */
      class SendMessageRequest implements ISendMessageRequest {
        /**
         * Constructs a new SendMessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ISendMessageRequest);

        /** SendMessageRequest guildId. */
        public guildId: number;

        /** SendMessageRequest channelId. */
        public channelId: number;

        /** SendMessageRequest content. */
        public content: string;

        /** SendMessageRequest actions. */
        public actions: protocol.harmonytypes.v1.IAction[];

        /** SendMessageRequest embeds. */
        public embeds: protocol.harmonytypes.v1.IEmbed[];

        /** SendMessageRequest attachments. */
        public attachments: string[];

        /** SendMessageRequest inReplyTo. */
        public inReplyTo: number;

        /** SendMessageRequest overrides. */
        public overrides?: protocol.harmonytypes.v1.IOverride | null;

        /** SendMessageRequest echoId. */
        public echoId: number;

        /** SendMessageRequest metadata. */
        public metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /**
         * Encodes the specified SendMessageRequest message. Does not implicitly {@link protocol.chat.v1.SendMessageRequest.verify|verify} messages.
         * @param message SendMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ISendMessageRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SendMessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.SendMessageRequest;

        /**
         * Creates a SendMessageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendMessageRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.SendMessageRequest;

        /**
         * Creates a plain object from a SendMessageRequest message. Also converts values to other types if specified.
         * @param message SendMessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.SendMessageRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SendMessageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a SendMessageResponse. */
      interface ISendMessageResponse {
        /** SendMessageResponse messageId */
        messageId?: number | null;
      }

      /** Represents a SendMessageResponse. */
      class SendMessageResponse implements ISendMessageResponse {
        /**
         * Constructs a new SendMessageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ISendMessageResponse);

        /** SendMessageResponse messageId. */
        public messageId: number;

        /**
         * Encodes the specified SendMessageResponse message. Does not implicitly {@link protocol.chat.v1.SendMessageResponse.verify|verify} messages.
         * @param message SendMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ISendMessageResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.SendMessageResponse;

        /**
         * Creates a SendMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendMessageResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.SendMessageResponse;

        /**
         * Creates a plain object from a SendMessageResponse message. Also converts values to other types if specified.
         * @param message SendMessageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.SendMessageResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SendMessageResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a StreamEventsRequest. */
      interface IStreamEventsRequest {
        /** StreamEventsRequest subscribeToGuild */
        subscribeToGuild?: protocol.chat.v1.StreamEventsRequest.ISubscribeToGuild | null;

        /** StreamEventsRequest subscribeToActions */
        subscribeToActions?: protocol.chat.v1.StreamEventsRequest.ISubscribeToActions | null;

        /** StreamEventsRequest subscribeToHomeserverEvents */
        subscribeToHomeserverEvents?: protocol.chat.v1.StreamEventsRequest.ISubscribeToHomeserverEvents | null;
      }

      /** Represents a StreamEventsRequest. */
      class StreamEventsRequest implements IStreamEventsRequest {
        /**
         * Constructs a new StreamEventsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IStreamEventsRequest);

        /** StreamEventsRequest subscribeToGuild. */
        public subscribeToGuild?: protocol.chat.v1.StreamEventsRequest.ISubscribeToGuild | null;

        /** StreamEventsRequest subscribeToActions. */
        public subscribeToActions?: protocol.chat.v1.StreamEventsRequest.ISubscribeToActions | null;

        /** StreamEventsRequest subscribeToHomeserverEvents. */
        public subscribeToHomeserverEvents?: protocol.chat.v1.StreamEventsRequest.ISubscribeToHomeserverEvents | null;

        /** StreamEventsRequest request. */
        public request?:
          | "subscribeToGuild"
          | "subscribeToActions"
          | "subscribeToHomeserverEvents";

        /**
         * Encodes the specified StreamEventsRequest message. Does not implicitly {@link protocol.chat.v1.StreamEventsRequest.verify|verify} messages.
         * @param message StreamEventsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IStreamEventsRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a StreamEventsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StreamEventsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.StreamEventsRequest;

        /**
         * Creates a StreamEventsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StreamEventsRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.StreamEventsRequest;

        /**
         * Creates a plain object from a StreamEventsRequest message. Also converts values to other types if specified.
         * @param message StreamEventsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.StreamEventsRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this StreamEventsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      namespace StreamEventsRequest {
        /** Properties of a SubscribeToGuild. */
        interface ISubscribeToGuild {
          /** SubscribeToGuild guildId */
          guildId?: number | null;
        }

        /** Represents a SubscribeToGuild. */
        class SubscribeToGuild implements ISubscribeToGuild {
          /**
           * Constructs a new SubscribeToGuild.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: protocol.chat.v1.StreamEventsRequest.ISubscribeToGuild
          );

          /** SubscribeToGuild guildId. */
          public guildId: number;

          /**
           * Encodes the specified SubscribeToGuild message. Does not implicitly {@link protocol.chat.v1.StreamEventsRequest.SubscribeToGuild.verify|verify} messages.
           * @param message SubscribeToGuild message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.StreamEventsRequest.ISubscribeToGuild,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a SubscribeToGuild message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns SubscribeToGuild
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.StreamEventsRequest.SubscribeToGuild;

          /**
           * Creates a SubscribeToGuild message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns SubscribeToGuild
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.StreamEventsRequest.SubscribeToGuild;

          /**
           * Creates a plain object from a SubscribeToGuild message. Also converts values to other types if specified.
           * @param message SubscribeToGuild
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.StreamEventsRequest.SubscribeToGuild,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this SubscribeToGuild to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a SubscribeToActions. */
        interface ISubscribeToActions {}

        /** Represents a SubscribeToActions. */
        class SubscribeToActions implements ISubscribeToActions {
          /**
           * Constructs a new SubscribeToActions.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: protocol.chat.v1.StreamEventsRequest.ISubscribeToActions
          );

          /**
           * Encodes the specified SubscribeToActions message. Does not implicitly {@link protocol.chat.v1.StreamEventsRequest.SubscribeToActions.verify|verify} messages.
           * @param message SubscribeToActions message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.StreamEventsRequest.ISubscribeToActions,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a SubscribeToActions message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns SubscribeToActions
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.StreamEventsRequest.SubscribeToActions;

          /**
           * Creates a SubscribeToActions message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns SubscribeToActions
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.StreamEventsRequest.SubscribeToActions;

          /**
           * Creates a plain object from a SubscribeToActions message. Also converts values to other types if specified.
           * @param message SubscribeToActions
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.StreamEventsRequest.SubscribeToActions,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this SubscribeToActions to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a SubscribeToHomeserverEvents. */
        interface ISubscribeToHomeserverEvents {}

        /** Represents a SubscribeToHomeserverEvents. */
        class SubscribeToHomeserverEvents
          implements ISubscribeToHomeserverEvents {
          /**
           * Constructs a new SubscribeToHomeserverEvents.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: protocol.chat.v1.StreamEventsRequest.ISubscribeToHomeserverEvents
          );

          /**
           * Encodes the specified SubscribeToHomeserverEvents message. Does not implicitly {@link protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents.verify|verify} messages.
           * @param message SubscribeToHomeserverEvents message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.StreamEventsRequest.ISubscribeToHomeserverEvents,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a SubscribeToHomeserverEvents message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns SubscribeToHomeserverEvents
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents;

          /**
           * Creates a SubscribeToHomeserverEvents message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns SubscribeToHomeserverEvents
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents;

          /**
           * Creates a plain object from a SubscribeToHomeserverEvents message. Also converts values to other types if specified.
           * @param message SubscribeToHomeserverEvents
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this SubscribeToHomeserverEvents to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }

      /** Properties of an Event. */
      interface IEvent {
        /** Event guildAddedToList */
        guildAddedToList?: protocol.chat.v1.Event.IGuildAddedToList | null;

        /** Event guildRemovedFromList */
        guildRemovedFromList?: protocol.chat.v1.Event.IGuildRemovedFromList | null;

        /** Event actionPerformed */
        actionPerformed?: protocol.chat.v1.Event.IActionPerformed | null;

        /** Event sentMessage */
        sentMessage?: protocol.chat.v1.Event.IMessageSent | null;

        /** Event editedMessage */
        editedMessage?: protocol.chat.v1.Event.IMessageUpdated | null;

        /** Event deletedMessage */
        deletedMessage?: protocol.chat.v1.Event.IMessageDeleted | null;

        /** Event createdChannel */
        createdChannel?: protocol.chat.v1.Event.IChannelCreated | null;

        /** Event editedChannel */
        editedChannel?: protocol.chat.v1.Event.IChannelUpdated | null;

        /** Event deletedChannel */
        deletedChannel?: protocol.chat.v1.Event.IChannelDeleted | null;

        /** Event editedGuild */
        editedGuild?: protocol.chat.v1.Event.IGuildUpdated | null;

        /** Event deletedGuild */
        deletedGuild?: protocol.chat.v1.Event.IGuildDeleted | null;

        /** Event joinedMember */
        joinedMember?: protocol.chat.v1.Event.IMemberJoined | null;

        /** Event leftMember */
        leftMember?: protocol.chat.v1.Event.IMemberLeft | null;

        /** Event roleMoved */
        roleMoved?: protocol.chat.v1.Event.IRoleMoved | null;

        /** Event profileUpdated */
        profileUpdated?: protocol.chat.v1.Event.IProfileUpdated | null;

        /** Event typing */
        typing?: protocol.chat.v1.Event.ITyping | null;
      }

      /** Represents an Event. */
      class Event implements IEvent {
        /**
         * Constructs a new Event.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IEvent);

        /** Event guildAddedToList. */
        public guildAddedToList?: protocol.chat.v1.Event.IGuildAddedToList | null;

        /** Event guildRemovedFromList. */
        public guildRemovedFromList?: protocol.chat.v1.Event.IGuildRemovedFromList | null;

        /** Event actionPerformed. */
        public actionPerformed?: protocol.chat.v1.Event.IActionPerformed | null;

        /** Event sentMessage. */
        public sentMessage?: protocol.chat.v1.Event.IMessageSent | null;

        /** Event editedMessage. */
        public editedMessage?: protocol.chat.v1.Event.IMessageUpdated | null;

        /** Event deletedMessage. */
        public deletedMessage?: protocol.chat.v1.Event.IMessageDeleted | null;

        /** Event createdChannel. */
        public createdChannel?: protocol.chat.v1.Event.IChannelCreated | null;

        /** Event editedChannel. */
        public editedChannel?: protocol.chat.v1.Event.IChannelUpdated | null;

        /** Event deletedChannel. */
        public deletedChannel?: protocol.chat.v1.Event.IChannelDeleted | null;

        /** Event editedGuild. */
        public editedGuild?: protocol.chat.v1.Event.IGuildUpdated | null;

        /** Event deletedGuild. */
        public deletedGuild?: protocol.chat.v1.Event.IGuildDeleted | null;

        /** Event joinedMember. */
        public joinedMember?: protocol.chat.v1.Event.IMemberJoined | null;

        /** Event leftMember. */
        public leftMember?: protocol.chat.v1.Event.IMemberLeft | null;

        /** Event roleMoved. */
        public roleMoved?: protocol.chat.v1.Event.IRoleMoved | null;

        /** Event profileUpdated. */
        public profileUpdated?: protocol.chat.v1.Event.IProfileUpdated | null;

        /** Event typing. */
        public typing?: protocol.chat.v1.Event.ITyping | null;

        /** Event event. */
        public event?:
          | "guildAddedToList"
          | "guildRemovedFromList"
          | "actionPerformed"
          | "sentMessage"
          | "editedMessage"
          | "deletedMessage"
          | "createdChannel"
          | "editedChannel"
          | "deletedChannel"
          | "editedGuild"
          | "deletedGuild"
          | "joinedMember"
          | "leftMember"
          | "roleMoved"
          | "profileUpdated"
          | "typing";

        /**
         * Encodes the specified Event message. Does not implicitly {@link protocol.chat.v1.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IEvent,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.Event;

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Event
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.Event;

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @param message Event
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.Event,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Event to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      namespace Event {
        /** LeaveReason enum. */
        enum LeaveReason {
          willingly = 0,
          banned = 1,
          kicked = 2,
        }

        /** Properties of a MessageSent. */
        interface IMessageSent {
          /** MessageSent echoId */
          echoId?: number | null;

          /** MessageSent message */
          message?: protocol.harmonytypes.v1.IMessage | null;
        }

        /** Represents a MessageSent. */
        class MessageSent implements IMessageSent {
          /**
           * Constructs a new MessageSent.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IMessageSent);

          /** MessageSent echoId. */
          public echoId: number;

          /** MessageSent message. */
          public message?: protocol.harmonytypes.v1.IMessage | null;

          /**
           * Encodes the specified MessageSent message. Does not implicitly {@link protocol.chat.v1.Event.MessageSent.verify|verify} messages.
           * @param message MessageSent message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IMessageSent,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a MessageSent message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns MessageSent
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.MessageSent;

          /**
           * Creates a MessageSent message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns MessageSent
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.MessageSent;

          /**
           * Creates a plain object from a MessageSent message. Also converts values to other types if specified.
           * @param message MessageSent
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.MessageSent,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this MessageSent to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageUpdated. */
        interface IMessageUpdated {
          /** MessageUpdated guildId */
          guildId?: number | null;

          /** MessageUpdated channelId */
          channelId?: number | null;

          /** MessageUpdated messageId */
          messageId?: number | null;

          /** MessageUpdated editedAt */
          editedAt?: google.protobuf.ITimestamp | null;

          /** MessageUpdated content */
          content?: string | null;

          /** MessageUpdated updateContent */
          updateContent?: boolean | null;

          /** MessageUpdated embeds */
          embeds?: protocol.harmonytypes.v1.IEmbed[] | null;

          /** MessageUpdated updateEmbeds */
          updateEmbeds?: boolean | null;

          /** MessageUpdated actions */
          actions?: protocol.harmonytypes.v1.IAction[] | null;

          /** MessageUpdated updateActions */
          updateActions?: boolean | null;

          /** MessageUpdated attachments */
          attachments?: protocol.harmonytypes.v1.IAttachment[] | null;

          /** MessageUpdated updateAttachments */
          updateAttachments?: boolean | null;

          /** MessageUpdated overrides */
          overrides?: protocol.harmonytypes.v1.IOverride | null;

          /** MessageUpdated updateOverrides */
          updateOverrides?: boolean | null;

          /** MessageUpdated metadata */
          metadata?: protocol.harmonytypes.v1.IMetadata | null;

          /** MessageUpdated updateMetadata */
          updateMetadata?: boolean | null;
        }

        /** Represents a MessageUpdated. */
        class MessageUpdated implements IMessageUpdated {
          /**
           * Constructs a new MessageUpdated.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IMessageUpdated);

          /** MessageUpdated guildId. */
          public guildId: number;

          /** MessageUpdated channelId. */
          public channelId: number;

          /** MessageUpdated messageId. */
          public messageId: number;

          /** MessageUpdated editedAt. */
          public editedAt?: google.protobuf.ITimestamp | null;

          /** MessageUpdated content. */
          public content: string;

          /** MessageUpdated updateContent. */
          public updateContent: boolean;

          /** MessageUpdated embeds. */
          public embeds: protocol.harmonytypes.v1.IEmbed[];

          /** MessageUpdated updateEmbeds. */
          public updateEmbeds: boolean;

          /** MessageUpdated actions. */
          public actions: protocol.harmonytypes.v1.IAction[];

          /** MessageUpdated updateActions. */
          public updateActions: boolean;

          /** MessageUpdated attachments. */
          public attachments: protocol.harmonytypes.v1.IAttachment[];

          /** MessageUpdated updateAttachments. */
          public updateAttachments: boolean;

          /** MessageUpdated overrides. */
          public overrides?: protocol.harmonytypes.v1.IOverride | null;

          /** MessageUpdated updateOverrides. */
          public updateOverrides: boolean;

          /** MessageUpdated metadata. */
          public metadata?: protocol.harmonytypes.v1.IMetadata | null;

          /** MessageUpdated updateMetadata. */
          public updateMetadata: boolean;

          /**
           * Encodes the specified MessageUpdated message. Does not implicitly {@link protocol.chat.v1.Event.MessageUpdated.verify|verify} messages.
           * @param message MessageUpdated message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IMessageUpdated,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a MessageUpdated message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns MessageUpdated
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.MessageUpdated;

          /**
           * Creates a MessageUpdated message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns MessageUpdated
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.MessageUpdated;

          /**
           * Creates a plain object from a MessageUpdated message. Also converts values to other types if specified.
           * @param message MessageUpdated
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.MessageUpdated,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this MessageUpdated to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a MessageDeleted. */
        interface IMessageDeleted {
          /** MessageDeleted guildId */
          guildId?: number | null;

          /** MessageDeleted channelId */
          channelId?: number | null;

          /** MessageDeleted messageId */
          messageId?: number | null;
        }

        /** Represents a MessageDeleted. */
        class MessageDeleted implements IMessageDeleted {
          /**
           * Constructs a new MessageDeleted.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IMessageDeleted);

          /** MessageDeleted guildId. */
          public guildId: number;

          /** MessageDeleted channelId. */
          public channelId: number;

          /** MessageDeleted messageId. */
          public messageId: number;

          /**
           * Encodes the specified MessageDeleted message. Does not implicitly {@link protocol.chat.v1.Event.MessageDeleted.verify|verify} messages.
           * @param message MessageDeleted message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IMessageDeleted,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a MessageDeleted message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns MessageDeleted
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.MessageDeleted;

          /**
           * Creates a MessageDeleted message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns MessageDeleted
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.MessageDeleted;

          /**
           * Creates a plain object from a MessageDeleted message. Also converts values to other types if specified.
           * @param message MessageDeleted
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.MessageDeleted,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this MessageDeleted to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a ChannelCreated. */
        interface IChannelCreated {
          /** ChannelCreated guildId */
          guildId?: number | null;

          /** ChannelCreated channelId */
          channelId?: number | null;

          /** ChannelCreated name */
          name?: string | null;

          /** ChannelCreated previousId */
          previousId?: number | null;

          /** ChannelCreated nextId */
          nextId?: number | null;

          /** ChannelCreated isCategory */
          isCategory?: boolean | null;

          /** ChannelCreated metadata */
          metadata?: protocol.harmonytypes.v1.IMetadata | null;
        }

        /** Represents a ChannelCreated. */
        class ChannelCreated implements IChannelCreated {
          /**
           * Constructs a new ChannelCreated.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IChannelCreated);

          /** ChannelCreated guildId. */
          public guildId: number;

          /** ChannelCreated channelId. */
          public channelId: number;

          /** ChannelCreated name. */
          public name: string;

          /** ChannelCreated previousId. */
          public previousId: number;

          /** ChannelCreated nextId. */
          public nextId: number;

          /** ChannelCreated isCategory. */
          public isCategory: boolean;

          /** ChannelCreated metadata. */
          public metadata?: protocol.harmonytypes.v1.IMetadata | null;

          /**
           * Encodes the specified ChannelCreated message. Does not implicitly {@link protocol.chat.v1.Event.ChannelCreated.verify|verify} messages.
           * @param message ChannelCreated message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IChannelCreated,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a ChannelCreated message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns ChannelCreated
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.ChannelCreated;

          /**
           * Creates a ChannelCreated message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns ChannelCreated
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.ChannelCreated;

          /**
           * Creates a plain object from a ChannelCreated message. Also converts values to other types if specified.
           * @param message ChannelCreated
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.ChannelCreated,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this ChannelCreated to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a ChannelUpdated. */
        interface IChannelUpdated {
          /** ChannelUpdated guildId */
          guildId?: number | null;

          /** ChannelUpdated channelId */
          channelId?: number | null;

          /** ChannelUpdated name */
          name?: string | null;

          /** ChannelUpdated updateName */
          updateName?: boolean | null;

          /** ChannelUpdated previousId */
          previousId?: number | null;

          /** ChannelUpdated nextId */
          nextId?: number | null;

          /** ChannelUpdated updateOrder */
          updateOrder?: boolean | null;

          /** ChannelUpdated metadata */
          metadata?: protocol.harmonytypes.v1.IMetadata | null;

          /** ChannelUpdated updateMetadata */
          updateMetadata?: boolean | null;
        }

        /** Represents a ChannelUpdated. */
        class ChannelUpdated implements IChannelUpdated {
          /**
           * Constructs a new ChannelUpdated.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IChannelUpdated);

          /** ChannelUpdated guildId. */
          public guildId: number;

          /** ChannelUpdated channelId. */
          public channelId: number;

          /** ChannelUpdated name. */
          public name: string;

          /** ChannelUpdated updateName. */
          public updateName: boolean;

          /** ChannelUpdated previousId. */
          public previousId: number;

          /** ChannelUpdated nextId. */
          public nextId: number;

          /** ChannelUpdated updateOrder. */
          public updateOrder: boolean;

          /** ChannelUpdated metadata. */
          public metadata?: protocol.harmonytypes.v1.IMetadata | null;

          /** ChannelUpdated updateMetadata. */
          public updateMetadata: boolean;

          /**
           * Encodes the specified ChannelUpdated message. Does not implicitly {@link protocol.chat.v1.Event.ChannelUpdated.verify|verify} messages.
           * @param message ChannelUpdated message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IChannelUpdated,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a ChannelUpdated message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns ChannelUpdated
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.ChannelUpdated;

          /**
           * Creates a ChannelUpdated message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns ChannelUpdated
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.ChannelUpdated;

          /**
           * Creates a plain object from a ChannelUpdated message. Also converts values to other types if specified.
           * @param message ChannelUpdated
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.ChannelUpdated,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this ChannelUpdated to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a ChannelDeleted. */
        interface IChannelDeleted {
          /** ChannelDeleted guildId */
          guildId?: number | null;

          /** ChannelDeleted channelId */
          channelId?: number | null;
        }

        /** Represents a ChannelDeleted. */
        class ChannelDeleted implements IChannelDeleted {
          /**
           * Constructs a new ChannelDeleted.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IChannelDeleted);

          /** ChannelDeleted guildId. */
          public guildId: number;

          /** ChannelDeleted channelId. */
          public channelId: number;

          /**
           * Encodes the specified ChannelDeleted message. Does not implicitly {@link protocol.chat.v1.Event.ChannelDeleted.verify|verify} messages.
           * @param message ChannelDeleted message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IChannelDeleted,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a ChannelDeleted message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns ChannelDeleted
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.ChannelDeleted;

          /**
           * Creates a ChannelDeleted message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns ChannelDeleted
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.ChannelDeleted;

          /**
           * Creates a plain object from a ChannelDeleted message. Also converts values to other types if specified.
           * @param message ChannelDeleted
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.ChannelDeleted,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this ChannelDeleted to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a GuildUpdated. */
        interface IGuildUpdated {
          /** GuildUpdated guildId */
          guildId?: number | null;

          /** GuildUpdated name */
          name?: string | null;

          /** GuildUpdated updateName */
          updateName?: boolean | null;

          /** GuildUpdated picture */
          picture?: string | null;

          /** GuildUpdated updatePicture */
          updatePicture?: boolean | null;

          /** GuildUpdated metadata */
          metadata?: protocol.harmonytypes.v1.IMetadata | null;

          /** GuildUpdated updateMetadata */
          updateMetadata?: boolean | null;
        }

        /** Represents a GuildUpdated. */
        class GuildUpdated implements IGuildUpdated {
          /**
           * Constructs a new GuildUpdated.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IGuildUpdated);

          /** GuildUpdated guildId. */
          public guildId: number;

          /** GuildUpdated name. */
          public name: string;

          /** GuildUpdated updateName. */
          public updateName: boolean;

          /** GuildUpdated picture. */
          public picture: string;

          /** GuildUpdated updatePicture. */
          public updatePicture: boolean;

          /** GuildUpdated metadata. */
          public metadata?: protocol.harmonytypes.v1.IMetadata | null;

          /** GuildUpdated updateMetadata. */
          public updateMetadata: boolean;

          /**
           * Encodes the specified GuildUpdated message. Does not implicitly {@link protocol.chat.v1.Event.GuildUpdated.verify|verify} messages.
           * @param message GuildUpdated message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IGuildUpdated,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a GuildUpdated message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns GuildUpdated
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.GuildUpdated;

          /**
           * Creates a GuildUpdated message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns GuildUpdated
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.GuildUpdated;

          /**
           * Creates a plain object from a GuildUpdated message. Also converts values to other types if specified.
           * @param message GuildUpdated
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.GuildUpdated,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this GuildUpdated to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a GuildDeleted. */
        interface IGuildDeleted {
          /** GuildDeleted guildId */
          guildId?: number | null;
        }

        /** Represents a GuildDeleted. */
        class GuildDeleted implements IGuildDeleted {
          /**
           * Constructs a new GuildDeleted.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IGuildDeleted);

          /** GuildDeleted guildId. */
          public guildId: number;

          /**
           * Encodes the specified GuildDeleted message. Does not implicitly {@link protocol.chat.v1.Event.GuildDeleted.verify|verify} messages.
           * @param message GuildDeleted message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IGuildDeleted,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a GuildDeleted message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns GuildDeleted
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.GuildDeleted;

          /**
           * Creates a GuildDeleted message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns GuildDeleted
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.GuildDeleted;

          /**
           * Creates a plain object from a GuildDeleted message. Also converts values to other types if specified.
           * @param message GuildDeleted
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.GuildDeleted,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this GuildDeleted to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a MemberJoined. */
        interface IMemberJoined {
          /** MemberJoined memberId */
          memberId?: number | null;

          /** MemberJoined guildId */
          guildId?: number | null;
        }

        /** Represents a MemberJoined. */
        class MemberJoined implements IMemberJoined {
          /**
           * Constructs a new MemberJoined.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IMemberJoined);

          /** MemberJoined memberId. */
          public memberId: number;

          /** MemberJoined guildId. */
          public guildId: number;

          /**
           * Encodes the specified MemberJoined message. Does not implicitly {@link protocol.chat.v1.Event.MemberJoined.verify|verify} messages.
           * @param message MemberJoined message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IMemberJoined,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a MemberJoined message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns MemberJoined
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.MemberJoined;

          /**
           * Creates a MemberJoined message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns MemberJoined
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.MemberJoined;

          /**
           * Creates a plain object from a MemberJoined message. Also converts values to other types if specified.
           * @param message MemberJoined
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.MemberJoined,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this MemberJoined to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a MemberLeft. */
        interface IMemberLeft {
          /** MemberLeft memberId */
          memberId?: number | null;

          /** MemberLeft guildId */
          guildId?: number | null;

          /** MemberLeft leaveReason */
          leaveReason?: protocol.chat.v1.Event.LeaveReason | null;
        }

        /** Represents a MemberLeft. */
        class MemberLeft implements IMemberLeft {
          /**
           * Constructs a new MemberLeft.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IMemberLeft);

          /** MemberLeft memberId. */
          public memberId: number;

          /** MemberLeft guildId. */
          public guildId: number;

          /** MemberLeft leaveReason. */
          public leaveReason: protocol.chat.v1.Event.LeaveReason;

          /**
           * Encodes the specified MemberLeft message. Does not implicitly {@link protocol.chat.v1.Event.MemberLeft.verify|verify} messages.
           * @param message MemberLeft message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IMemberLeft,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a MemberLeft message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns MemberLeft
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.MemberLeft;

          /**
           * Creates a MemberLeft message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns MemberLeft
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.MemberLeft;

          /**
           * Creates a plain object from a MemberLeft message. Also converts values to other types if specified.
           * @param message MemberLeft
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.MemberLeft,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this MemberLeft to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a GuildAddedToList. */
        interface IGuildAddedToList {
          /** GuildAddedToList guildId */
          guildId?: number | null;

          /** GuildAddedToList homeserver */
          homeserver?: string | null;
        }

        /** Represents a GuildAddedToList. */
        class GuildAddedToList implements IGuildAddedToList {
          /**
           * Constructs a new GuildAddedToList.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IGuildAddedToList);

          /** GuildAddedToList guildId. */
          public guildId: number;

          /** GuildAddedToList homeserver. */
          public homeserver: string;

          /**
           * Encodes the specified GuildAddedToList message. Does not implicitly {@link protocol.chat.v1.Event.GuildAddedToList.verify|verify} messages.
           * @param message GuildAddedToList message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IGuildAddedToList,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a GuildAddedToList message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns GuildAddedToList
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.GuildAddedToList;

          /**
           * Creates a GuildAddedToList message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns GuildAddedToList
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.GuildAddedToList;

          /**
           * Creates a plain object from a GuildAddedToList message. Also converts values to other types if specified.
           * @param message GuildAddedToList
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.GuildAddedToList,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this GuildAddedToList to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a GuildRemovedFromList. */
        interface IGuildRemovedFromList {
          /** GuildRemovedFromList guildId */
          guildId?: number | null;

          /** GuildRemovedFromList homeserver */
          homeserver?: string | null;
        }

        /** Represents a GuildRemovedFromList. */
        class GuildRemovedFromList implements IGuildRemovedFromList {
          /**
           * Constructs a new GuildRemovedFromList.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: protocol.chat.v1.Event.IGuildRemovedFromList
          );

          /** GuildRemovedFromList guildId. */
          public guildId: number;

          /** GuildRemovedFromList homeserver. */
          public homeserver: string;

          /**
           * Encodes the specified GuildRemovedFromList message. Does not implicitly {@link protocol.chat.v1.Event.GuildRemovedFromList.verify|verify} messages.
           * @param message GuildRemovedFromList message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IGuildRemovedFromList,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a GuildRemovedFromList message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns GuildRemovedFromList
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.GuildRemovedFromList;

          /**
           * Creates a GuildRemovedFromList message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns GuildRemovedFromList
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.GuildRemovedFromList;

          /**
           * Creates a plain object from a GuildRemovedFromList message. Also converts values to other types if specified.
           * @param message GuildRemovedFromList
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.GuildRemovedFromList,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this GuildRemovedFromList to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of an ActionPerformed. */
        interface IActionPerformed {
          /** ActionPerformed guildId */
          guildId?: number | null;

          /** ActionPerformed channelId */
          channelId?: number | null;

          /** ActionPerformed messageId */
          messageId?: number | null;

          /** ActionPerformed actionId */
          actionId?: string | null;

          /** ActionPerformed actionData */
          actionData?: string | null;
        }

        /** Represents an ActionPerformed. */
        class ActionPerformed implements IActionPerformed {
          /**
           * Constructs a new ActionPerformed.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IActionPerformed);

          /** ActionPerformed guildId. */
          public guildId: number;

          /** ActionPerformed channelId. */
          public channelId: number;

          /** ActionPerformed messageId. */
          public messageId: number;

          /** ActionPerformed actionId. */
          public actionId: string;

          /** ActionPerformed actionData. */
          public actionData: string;

          /**
           * Encodes the specified ActionPerformed message. Does not implicitly {@link protocol.chat.v1.Event.ActionPerformed.verify|verify} messages.
           * @param message ActionPerformed message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IActionPerformed,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes an ActionPerformed message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns ActionPerformed
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.ActionPerformed;

          /**
           * Creates an ActionPerformed message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns ActionPerformed
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.ActionPerformed;

          /**
           * Creates a plain object from an ActionPerformed message. Also converts values to other types if specified.
           * @param message ActionPerformed
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.ActionPerformed,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this ActionPerformed to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a RoleMoved. */
        interface IRoleMoved {
          /** RoleMoved guildId */
          guildId?: number | null;

          /** RoleMoved roleId */
          roleId?: number | null;
        }

        /** Represents a RoleMoved. */
        class RoleMoved implements IRoleMoved {
          /**
           * Constructs a new RoleMoved.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IRoleMoved);

          /** RoleMoved guildId. */
          public guildId: number;

          /** RoleMoved roleId. */
          public roleId: number;

          /**
           * Encodes the specified RoleMoved message. Does not implicitly {@link protocol.chat.v1.Event.RoleMoved.verify|verify} messages.
           * @param message RoleMoved message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IRoleMoved,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a RoleMoved message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns RoleMoved
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.RoleMoved;

          /**
           * Creates a RoleMoved message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns RoleMoved
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.RoleMoved;

          /**
           * Creates a plain object from a RoleMoved message. Also converts values to other types if specified.
           * @param message RoleMoved
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.RoleMoved,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this RoleMoved to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProfileUpdated. */
        interface IProfileUpdated {
          /** ProfileUpdated userId */
          userId?: number | null;

          /** ProfileUpdated newUsername */
          newUsername?: string | null;

          /** ProfileUpdated updateUsername */
          updateUsername?: boolean | null;

          /** ProfileUpdated newAvatar */
          newAvatar?: string | null;

          /** ProfileUpdated updateAvatar */
          updateAvatar?: boolean | null;

          /** ProfileUpdated newStatus */
          newStatus?: protocol.harmonytypes.v1.UserStatus | null;

          /** ProfileUpdated updateStatus */
          updateStatus?: boolean | null;

          /** ProfileUpdated isBot */
          isBot?: boolean | null;

          /** ProfileUpdated updateIsBot */
          updateIsBot?: boolean | null;
        }

        /** Represents a ProfileUpdated. */
        class ProfileUpdated implements IProfileUpdated {
          /**
           * Constructs a new ProfileUpdated.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IProfileUpdated);

          /** ProfileUpdated userId. */
          public userId: number;

          /** ProfileUpdated newUsername. */
          public newUsername: string;

          /** ProfileUpdated updateUsername. */
          public updateUsername: boolean;

          /** ProfileUpdated newAvatar. */
          public newAvatar: string;

          /** ProfileUpdated updateAvatar. */
          public updateAvatar: boolean;

          /** ProfileUpdated newStatus. */
          public newStatus: protocol.harmonytypes.v1.UserStatus;

          /** ProfileUpdated updateStatus. */
          public updateStatus: boolean;

          /** ProfileUpdated isBot. */
          public isBot: boolean;

          /** ProfileUpdated updateIsBot. */
          public updateIsBot: boolean;

          /**
           * Encodes the specified ProfileUpdated message. Does not implicitly {@link protocol.chat.v1.Event.ProfileUpdated.verify|verify} messages.
           * @param message ProfileUpdated message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.IProfileUpdated,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a ProfileUpdated message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns ProfileUpdated
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.ProfileUpdated;

          /**
           * Creates a ProfileUpdated message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns ProfileUpdated
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.ProfileUpdated;

          /**
           * Creates a plain object from a ProfileUpdated message. Also converts values to other types if specified.
           * @param message ProfileUpdated
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.ProfileUpdated,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this ProfileUpdated to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a Typing. */
        interface ITyping {
          /** Typing userId */
          userId?: number | null;

          /** Typing guildId */
          guildId?: number | null;

          /** Typing channelId */
          channelId?: number | null;
        }

        /** Represents a Typing. */
        class Typing implements ITyping {
          /**
           * Constructs a new Typing.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.ITyping);

          /** Typing userId. */
          public userId: number;

          /** Typing guildId. */
          public guildId: number;

          /** Typing channelId. */
          public channelId: number;

          /**
           * Encodes the specified Typing message. Does not implicitly {@link protocol.chat.v1.Event.Typing.verify|verify} messages.
           * @param message Typing message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.Event.ITyping,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a Typing message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns Typing
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.Event.Typing;

          /**
           * Creates a Typing message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns Typing
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.Event.Typing;

          /**
           * Creates a plain object from a Typing message. Also converts values to other types if specified.
           * @param message Typing
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.Event.Typing,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this Typing to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }

      /** Properties of a SyncRequest. */
      interface ISyncRequest {
        /** SyncRequest token */
        token?: string | null;

        /** SyncRequest host */
        host?: string | null;
      }

      /** Represents a SyncRequest. */
      class SyncRequest implements ISyncRequest {
        /**
         * Constructs a new SyncRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ISyncRequest);

        /** SyncRequest token. */
        public token: string;

        /** SyncRequest host. */
        public host: string;

        /**
         * Encodes the specified SyncRequest message. Does not implicitly {@link protocol.chat.v1.SyncRequest.verify|verify} messages.
         * @param message SyncRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ISyncRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SyncRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.SyncRequest;

        /**
         * Creates a SyncRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.SyncRequest;

        /**
         * Creates a plain object from a SyncRequest message. Also converts values to other types if specified.
         * @param message SyncRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.SyncRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SyncRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a SyncEvent. */
      interface ISyncEvent {
        /** SyncEvent dmInvite */
        dmInvite?: protocol.chat.v1.SyncEvent.IDMInvite | null;
      }

      /** Represents a SyncEvent. */
      class SyncEvent implements ISyncEvent {
        /**
         * Constructs a new SyncEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ISyncEvent);

        /** SyncEvent dmInvite. */
        public dmInvite?: protocol.chat.v1.SyncEvent.IDMInvite | null;

        /** SyncEvent event. */
        public event?: "dmInvite";

        /**
         * Encodes the specified SyncEvent message. Does not implicitly {@link protocol.chat.v1.SyncEvent.verify|verify} messages.
         * @param message SyncEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.ISyncEvent,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SyncEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.SyncEvent;

        /**
         * Creates a SyncEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncEvent
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.SyncEvent;

        /**
         * Creates a plain object from a SyncEvent message. Also converts values to other types if specified.
         * @param message SyncEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.SyncEvent,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SyncEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      namespace SyncEvent {
        /** Properties of a DMInvite. */
        interface IDMInvite {
          /** DMInvite userName */
          userName?: string | null;

          /** DMInvite userAvatar */
          userAvatar?: string | null;

          /** DMInvite dmName */
          dmName?: string | null;

          /** DMInvite dmAvatar */
          dmAvatar?: string | null;

          /** DMInvite inviteId */
          inviteId?: string | null;
        }

        /** Represents a DMInvite. */
        class DMInvite implements IDMInvite {
          /**
           * Constructs a new DMInvite.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.SyncEvent.IDMInvite);

          /** DMInvite userName. */
          public userName: string;

          /** DMInvite userAvatar. */
          public userAvatar: string;

          /** DMInvite dmName. */
          public dmName: string;

          /** DMInvite dmAvatar. */
          public dmAvatar: string;

          /** DMInvite inviteId. */
          public inviteId: string;

          /**
           * Encodes the specified DMInvite message. Does not implicitly {@link protocol.chat.v1.SyncEvent.DMInvite.verify|verify} messages.
           * @param message DMInvite message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.chat.v1.SyncEvent.IDMInvite,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a DMInvite message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns DMInvite
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.chat.v1.SyncEvent.DMInvite;

          /**
           * Creates a DMInvite message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns DMInvite
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.chat.v1.SyncEvent.DMInvite;

          /**
           * Creates a plain object from a DMInvite message. Also converts values to other types if specified.
           * @param message DMInvite
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.chat.v1.SyncEvent.DMInvite,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this DMInvite to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }

      /** Represents a ChatService */
      class ChatService extends $protobuf.rpc.Service {
        /**
         * Constructs a new ChatService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean
        );

        /**
         * Calls CreateGuild.
         * @param request CreateGuildRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateGuildResponse
         */
        public createGuild(
          request: protocol.chat.v1.ICreateGuildRequest,
          callback: protocol.chat.v1.ChatService.CreateGuildCallback
        ): void;

        /**
         * Calls CreateGuild.
         * @param request CreateGuildRequest message or plain object
         * @returns Promise
         */
        public createGuild(
          request: protocol.chat.v1.ICreateGuildRequest
        ): Promise<protocol.chat.v1.CreateGuildResponse>;

        /**
         * Calls CreateInvite.
         * @param request CreateInviteRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateInviteResponse
         */
        public createInvite(
          request: protocol.chat.v1.ICreateInviteRequest,
          callback: protocol.chat.v1.ChatService.CreateInviteCallback
        ): void;

        /**
         * Calls CreateInvite.
         * @param request CreateInviteRequest message or plain object
         * @returns Promise
         */
        public createInvite(
          request: protocol.chat.v1.ICreateInviteRequest
        ): Promise<protocol.chat.v1.CreateInviteResponse>;

        /**
         * Calls CreateChannel.
         * @param request CreateChannelRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateChannelResponse
         */
        public createChannel(
          request: protocol.chat.v1.ICreateChannelRequest,
          callback: protocol.chat.v1.ChatService.CreateChannelCallback
        ): void;

        /**
         * Calls CreateChannel.
         * @param request CreateChannelRequest message or plain object
         * @returns Promise
         */
        public createChannel(
          request: protocol.chat.v1.ICreateChannelRequest
        ): Promise<protocol.chat.v1.CreateChannelResponse>;

        /**
         * Calls CreateEmotePack.
         * @param request CreateEmotePackRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateEmotePackResponse
         */
        public createEmotePack(
          request: protocol.chat.v1.ICreateEmotePackRequest,
          callback: protocol.chat.v1.ChatService.CreateEmotePackCallback
        ): void;

        /**
         * Calls CreateEmotePack.
         * @param request CreateEmotePackRequest message or plain object
         * @returns Promise
         */
        public createEmotePack(
          request: protocol.chat.v1.ICreateEmotePackRequest
        ): Promise<protocol.chat.v1.CreateEmotePackResponse>;

        /**
         * Calls GetGuildList.
         * @param request GetGuildListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetGuildListResponse
         */
        public getGuildList(
          request: protocol.chat.v1.IGetGuildListRequest,
          callback: protocol.chat.v1.ChatService.GetGuildListCallback
        ): void;

        /**
         * Calls GetGuildList.
         * @param request GetGuildListRequest message or plain object
         * @returns Promise
         */
        public getGuildList(
          request: protocol.chat.v1.IGetGuildListRequest
        ): Promise<protocol.chat.v1.GetGuildListResponse>;

        /**
         * Calls AddGuildToGuildList.
         * @param request AddGuildToGuildListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AddGuildToGuildListResponse
         */
        public addGuildToGuildList(
          request: protocol.chat.v1.IAddGuildToGuildListRequest,
          callback: protocol.chat.v1.ChatService.AddGuildToGuildListCallback
        ): void;

        /**
         * Calls AddGuildToGuildList.
         * @param request AddGuildToGuildListRequest message or plain object
         * @returns Promise
         */
        public addGuildToGuildList(
          request: protocol.chat.v1.IAddGuildToGuildListRequest
        ): Promise<protocol.chat.v1.AddGuildToGuildListResponse>;

        /**
         * Calls RemoveGuildFromGuildList.
         * @param request RemoveGuildFromGuildListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and RemoveGuildFromGuildListResponse
         */
        public removeGuildFromGuildList(
          request: protocol.chat.v1.IRemoveGuildFromGuildListRequest,
          callback: protocol.chat.v1.ChatService.RemoveGuildFromGuildListCallback
        ): void;

        /**
         * Calls RemoveGuildFromGuildList.
         * @param request RemoveGuildFromGuildListRequest message or plain object
         * @returns Promise
         */
        public removeGuildFromGuildList(
          request: protocol.chat.v1.IRemoveGuildFromGuildListRequest
        ): Promise<protocol.chat.v1.RemoveGuildFromGuildListResponse>;

        /**
         * Calls GetGuild.
         * @param request GetGuildRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetGuildResponse
         */
        public getGuild(
          request: protocol.chat.v1.IGetGuildRequest,
          callback: protocol.chat.v1.ChatService.GetGuildCallback
        ): void;

        /**
         * Calls GetGuild.
         * @param request GetGuildRequest message or plain object
         * @returns Promise
         */
        public getGuild(
          request: protocol.chat.v1.IGetGuildRequest
        ): Promise<protocol.chat.v1.GetGuildResponse>;

        /**
         * Calls GetGuildInvites.
         * @param request GetGuildInvitesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetGuildInvitesResponse
         */
        public getGuildInvites(
          request: protocol.chat.v1.IGetGuildInvitesRequest,
          callback: protocol.chat.v1.ChatService.GetGuildInvitesCallback
        ): void;

        /**
         * Calls GetGuildInvites.
         * @param request GetGuildInvitesRequest message or plain object
         * @returns Promise
         */
        public getGuildInvites(
          request: protocol.chat.v1.IGetGuildInvitesRequest
        ): Promise<protocol.chat.v1.GetGuildInvitesResponse>;

        /**
         * Calls GetGuildMembers.
         * @param request GetGuildMembersRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetGuildMembersResponse
         */
        public getGuildMembers(
          request: protocol.chat.v1.IGetGuildMembersRequest,
          callback: protocol.chat.v1.ChatService.GetGuildMembersCallback
        ): void;

        /**
         * Calls GetGuildMembers.
         * @param request GetGuildMembersRequest message or plain object
         * @returns Promise
         */
        public getGuildMembers(
          request: protocol.chat.v1.IGetGuildMembersRequest
        ): Promise<protocol.chat.v1.GetGuildMembersResponse>;

        /**
         * Calls GetGuildChannels.
         * @param request GetGuildChannelsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetGuildChannelsResponse
         */
        public getGuildChannels(
          request: protocol.chat.v1.IGetGuildChannelsRequest,
          callback: protocol.chat.v1.ChatService.GetGuildChannelsCallback
        ): void;

        /**
         * Calls GetGuildChannels.
         * @param request GetGuildChannelsRequest message or plain object
         * @returns Promise
         */
        public getGuildChannels(
          request: protocol.chat.v1.IGetGuildChannelsRequest
        ): Promise<protocol.chat.v1.GetGuildChannelsResponse>;

        /**
         * Calls GetChannelMessages.
         * @param request GetChannelMessagesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetChannelMessagesResponse
         */
        public getChannelMessages(
          request: protocol.chat.v1.IGetChannelMessagesRequest,
          callback: protocol.chat.v1.ChatService.GetChannelMessagesCallback
        ): void;

        /**
         * Calls GetChannelMessages.
         * @param request GetChannelMessagesRequest message or plain object
         * @returns Promise
         */
        public getChannelMessages(
          request: protocol.chat.v1.IGetChannelMessagesRequest
        ): Promise<protocol.chat.v1.GetChannelMessagesResponse>;

        /**
         * Calls GetMessage.
         * @param request GetMessageRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetMessageResponse
         */
        public getMessage(
          request: protocol.chat.v1.IGetMessageRequest,
          callback: protocol.chat.v1.ChatService.GetMessageCallback
        ): void;

        /**
         * Calls GetMessage.
         * @param request GetMessageRequest message or plain object
         * @returns Promise
         */
        public getMessage(
          request: protocol.chat.v1.IGetMessageRequest
        ): Promise<protocol.chat.v1.GetMessageResponse>;

        /**
         * Calls GetEmotePacks.
         * @param request GetEmotePacksRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetEmotePacksResponse
         */
        public getEmotePacks(
          request: protocol.chat.v1.IGetEmotePacksRequest,
          callback: protocol.chat.v1.ChatService.GetEmotePacksCallback
        ): void;

        /**
         * Calls GetEmotePacks.
         * @param request GetEmotePacksRequest message or plain object
         * @returns Promise
         */
        public getEmotePacks(
          request: protocol.chat.v1.IGetEmotePacksRequest
        ): Promise<protocol.chat.v1.GetEmotePacksResponse>;

        /**
         * Calls GetEmotePackEmotes.
         * @param request GetEmotePackEmotesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetEmotePackEmotesResponse
         */
        public getEmotePackEmotes(
          request: protocol.chat.v1.IGetEmotePackEmotesRequest,
          callback: protocol.chat.v1.ChatService.GetEmotePackEmotesCallback
        ): void;

        /**
         * Calls GetEmotePackEmotes.
         * @param request GetEmotePackEmotesRequest message or plain object
         * @returns Promise
         */
        public getEmotePackEmotes(
          request: protocol.chat.v1.IGetEmotePackEmotesRequest
        ): Promise<protocol.chat.v1.GetEmotePackEmotesResponse>;

        /**
         * Calls UpdateGuildInformation.
         * @param request UpdateGuildInformationRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public updateGuildInformation(
          request: protocol.chat.v1.IUpdateGuildInformationRequest,
          callback: protocol.chat.v1.ChatService.UpdateGuildInformationCallback
        ): void;

        /**
         * Calls UpdateGuildInformation.
         * @param request UpdateGuildInformationRequest message or plain object
         * @returns Promise
         */
        public updateGuildInformation(
          request: protocol.chat.v1.IUpdateGuildInformationRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls UpdateChannelInformation.
         * @param request UpdateChannelInformationRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public updateChannelInformation(
          request: protocol.chat.v1.IUpdateChannelInformationRequest,
          callback: protocol.chat.v1.ChatService.UpdateChannelInformationCallback
        ): void;

        /**
         * Calls UpdateChannelInformation.
         * @param request UpdateChannelInformationRequest message or plain object
         * @returns Promise
         */
        public updateChannelInformation(
          request: protocol.chat.v1.IUpdateChannelInformationRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls UpdateChannelOrder.
         * @param request UpdateChannelOrderRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public updateChannelOrder(
          request: protocol.chat.v1.IUpdateChannelOrderRequest,
          callback: protocol.chat.v1.ChatService.UpdateChannelOrderCallback
        ): void;

        /**
         * Calls UpdateChannelOrder.
         * @param request UpdateChannelOrderRequest message or plain object
         * @returns Promise
         */
        public updateChannelOrder(
          request: protocol.chat.v1.IUpdateChannelOrderRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls UpdateMessage.
         * @param request UpdateMessageRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public updateMessage(
          request: protocol.chat.v1.IUpdateMessageRequest,
          callback: protocol.chat.v1.ChatService.UpdateMessageCallback
        ): void;

        /**
         * Calls UpdateMessage.
         * @param request UpdateMessageRequest message or plain object
         * @returns Promise
         */
        public updateMessage(
          request: protocol.chat.v1.IUpdateMessageRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls AddEmoteToPack.
         * @param request AddEmoteToPackRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public addEmoteToPack(
          request: protocol.chat.v1.IAddEmoteToPackRequest,
          callback: protocol.chat.v1.ChatService.AddEmoteToPackCallback
        ): void;

        /**
         * Calls AddEmoteToPack.
         * @param request AddEmoteToPackRequest message or plain object
         * @returns Promise
         */
        public addEmoteToPack(
          request: protocol.chat.v1.IAddEmoteToPackRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls DeleteGuild.
         * @param request DeleteGuildRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public deleteGuild(
          request: protocol.chat.v1.IDeleteGuildRequest,
          callback: protocol.chat.v1.ChatService.DeleteGuildCallback
        ): void;

        /**
         * Calls DeleteGuild.
         * @param request DeleteGuildRequest message or plain object
         * @returns Promise
         */
        public deleteGuild(
          request: protocol.chat.v1.IDeleteGuildRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls DeleteInvite.
         * @param request DeleteInviteRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public deleteInvite(
          request: protocol.chat.v1.IDeleteInviteRequest,
          callback: protocol.chat.v1.ChatService.DeleteInviteCallback
        ): void;

        /**
         * Calls DeleteInvite.
         * @param request DeleteInviteRequest message or plain object
         * @returns Promise
         */
        public deleteInvite(
          request: protocol.chat.v1.IDeleteInviteRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls DeleteChannel.
         * @param request DeleteChannelRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public deleteChannel(
          request: protocol.chat.v1.IDeleteChannelRequest,
          callback: protocol.chat.v1.ChatService.DeleteChannelCallback
        ): void;

        /**
         * Calls DeleteChannel.
         * @param request DeleteChannelRequest message or plain object
         * @returns Promise
         */
        public deleteChannel(
          request: protocol.chat.v1.IDeleteChannelRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls DeleteMessage.
         * @param request DeleteMessageRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public deleteMessage(
          request: protocol.chat.v1.IDeleteMessageRequest,
          callback: protocol.chat.v1.ChatService.DeleteMessageCallback
        ): void;

        /**
         * Calls DeleteMessage.
         * @param request DeleteMessageRequest message or plain object
         * @returns Promise
         */
        public deleteMessage(
          request: protocol.chat.v1.IDeleteMessageRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls DeleteEmoteFromPack.
         * @param request DeleteEmoteFromPackRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public deleteEmoteFromPack(
          request: protocol.chat.v1.IDeleteEmoteFromPackRequest,
          callback: protocol.chat.v1.ChatService.DeleteEmoteFromPackCallback
        ): void;

        /**
         * Calls DeleteEmoteFromPack.
         * @param request DeleteEmoteFromPackRequest message or plain object
         * @returns Promise
         */
        public deleteEmoteFromPack(
          request: protocol.chat.v1.IDeleteEmoteFromPackRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls DeleteEmotePack.
         * @param request DeleteEmotePackRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public deleteEmotePack(
          request: protocol.chat.v1.IDeleteEmotePackRequest,
          callback: protocol.chat.v1.ChatService.DeleteEmotePackCallback
        ): void;

        /**
         * Calls DeleteEmotePack.
         * @param request DeleteEmotePackRequest message or plain object
         * @returns Promise
         */
        public deleteEmotePack(
          request: protocol.chat.v1.IDeleteEmotePackRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls DequipEmotePack.
         * @param request DequipEmotePackRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public dequipEmotePack(
          request: protocol.chat.v1.IDequipEmotePackRequest,
          callback: protocol.chat.v1.ChatService.DequipEmotePackCallback
        ): void;

        /**
         * Calls DequipEmotePack.
         * @param request DequipEmotePackRequest message or plain object
         * @returns Promise
         */
        public dequipEmotePack(
          request: protocol.chat.v1.IDequipEmotePackRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls JoinGuild.
         * @param request JoinGuildRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and JoinGuildResponse
         */
        public joinGuild(
          request: protocol.chat.v1.IJoinGuildRequest,
          callback: protocol.chat.v1.ChatService.JoinGuildCallback
        ): void;

        /**
         * Calls JoinGuild.
         * @param request JoinGuildRequest message or plain object
         * @returns Promise
         */
        public joinGuild(
          request: protocol.chat.v1.IJoinGuildRequest
        ): Promise<protocol.chat.v1.JoinGuildResponse>;

        /**
         * Calls LeaveGuild.
         * @param request LeaveGuildRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public leaveGuild(
          request: protocol.chat.v1.ILeaveGuildRequest,
          callback: protocol.chat.v1.ChatService.LeaveGuildCallback
        ): void;

        /**
         * Calls LeaveGuild.
         * @param request LeaveGuildRequest message or plain object
         * @returns Promise
         */
        public leaveGuild(
          request: protocol.chat.v1.ILeaveGuildRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls TriggerAction.
         * @param request TriggerActionRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public triggerAction(
          request: protocol.chat.v1.ITriggerActionRequest,
          callback: protocol.chat.v1.ChatService.TriggerActionCallback
        ): void;

        /**
         * Calls TriggerAction.
         * @param request TriggerActionRequest message or plain object
         * @returns Promise
         */
        public triggerAction(
          request: protocol.chat.v1.ITriggerActionRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls SendMessage.
         * @param request SendMessageRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SendMessageResponse
         */
        public sendMessage(
          request: protocol.chat.v1.ISendMessageRequest,
          callback: protocol.chat.v1.ChatService.SendMessageCallback
        ): void;

        /**
         * Calls SendMessage.
         * @param request SendMessageRequest message or plain object
         * @returns Promise
         */
        public sendMessage(
          request: protocol.chat.v1.ISendMessageRequest
        ): Promise<protocol.chat.v1.SendMessageResponse>;

        /**
         * Calls QueryHasPermission.
         * @param request QueryPermissionsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and QueryPermissionsResponse
         */
        public queryHasPermission(
          request: protocol.chat.v1.IQueryPermissionsRequest,
          callback: protocol.chat.v1.ChatService.QueryHasPermissionCallback
        ): void;

        /**
         * Calls QueryHasPermission.
         * @param request QueryPermissionsRequest message or plain object
         * @returns Promise
         */
        public queryHasPermission(
          request: protocol.chat.v1.IQueryPermissionsRequest
        ): Promise<protocol.chat.v1.QueryPermissionsResponse>;

        /**
         * Calls SetPermissions.
         * @param request SetPermissionsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public setPermissions(
          request: protocol.chat.v1.ISetPermissionsRequest,
          callback: protocol.chat.v1.ChatService.SetPermissionsCallback
        ): void;

        /**
         * Calls SetPermissions.
         * @param request SetPermissionsRequest message or plain object
         * @returns Promise
         */
        public setPermissions(
          request: protocol.chat.v1.ISetPermissionsRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls GetPermissions.
         * @param request GetPermissionsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetPermissionsResponse
         */
        public getPermissions(
          request: protocol.chat.v1.IGetPermissionsRequest,
          callback: protocol.chat.v1.ChatService.GetPermissionsCallback
        ): void;

        /**
         * Calls GetPermissions.
         * @param request GetPermissionsRequest message or plain object
         * @returns Promise
         */
        public getPermissions(
          request: protocol.chat.v1.IGetPermissionsRequest
        ): Promise<protocol.chat.v1.GetPermissionsResponse>;

        /**
         * Calls MoveRole.
         * @param request MoveRoleRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MoveRoleResponse
         */
        public moveRole(
          request: protocol.chat.v1.IMoveRoleRequest,
          callback: protocol.chat.v1.ChatService.MoveRoleCallback
        ): void;

        /**
         * Calls MoveRole.
         * @param request MoveRoleRequest message or plain object
         * @returns Promise
         */
        public moveRole(
          request: protocol.chat.v1.IMoveRoleRequest
        ): Promise<protocol.chat.v1.MoveRoleResponse>;

        /**
         * Calls GetGuildRoles.
         * @param request GetGuildRolesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetGuildRolesResponse
         */
        public getGuildRoles(
          request: protocol.chat.v1.IGetGuildRolesRequest,
          callback: protocol.chat.v1.ChatService.GetGuildRolesCallback
        ): void;

        /**
         * Calls GetGuildRoles.
         * @param request GetGuildRolesRequest message or plain object
         * @returns Promise
         */
        public getGuildRoles(
          request: protocol.chat.v1.IGetGuildRolesRequest
        ): Promise<protocol.chat.v1.GetGuildRolesResponse>;

        /**
         * Calls AddGuildRole.
         * @param request AddGuildRoleRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AddGuildRoleResponse
         */
        public addGuildRole(
          request: protocol.chat.v1.IAddGuildRoleRequest,
          callback: protocol.chat.v1.ChatService.AddGuildRoleCallback
        ): void;

        /**
         * Calls AddGuildRole.
         * @param request AddGuildRoleRequest message or plain object
         * @returns Promise
         */
        public addGuildRole(
          request: protocol.chat.v1.IAddGuildRoleRequest
        ): Promise<protocol.chat.v1.AddGuildRoleResponse>;

        /**
         * Calls ModifyGuildRole.
         * @param request ModifyGuildRoleRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public modifyGuildRole(
          request: protocol.chat.v1.IModifyGuildRoleRequest,
          callback: protocol.chat.v1.ChatService.ModifyGuildRoleCallback
        ): void;

        /**
         * Calls ModifyGuildRole.
         * @param request ModifyGuildRoleRequest message or plain object
         * @returns Promise
         */
        public modifyGuildRole(
          request: protocol.chat.v1.IModifyGuildRoleRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls DeleteGuildRole.
         * @param request DeleteGuildRoleRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public deleteGuildRole(
          request: protocol.chat.v1.IDeleteGuildRoleRequest,
          callback: protocol.chat.v1.ChatService.DeleteGuildRoleCallback
        ): void;

        /**
         * Calls DeleteGuildRole.
         * @param request DeleteGuildRoleRequest message or plain object
         * @returns Promise
         */
        public deleteGuildRole(
          request: protocol.chat.v1.IDeleteGuildRoleRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls ManageUserRoles.
         * @param request ManageUserRolesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public manageUserRoles(
          request: protocol.chat.v1.IManageUserRolesRequest,
          callback: protocol.chat.v1.ChatService.ManageUserRolesCallback
        ): void;

        /**
         * Calls ManageUserRoles.
         * @param request ManageUserRolesRequest message or plain object
         * @returns Promise
         */
        public manageUserRoles(
          request: protocol.chat.v1.IManageUserRolesRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls GetUserRoles.
         * @param request GetUserRolesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetUserRolesResponse
         */
        public getUserRoles(
          request: protocol.chat.v1.IGetUserRolesRequest,
          callback: protocol.chat.v1.ChatService.GetUserRolesCallback
        ): void;

        /**
         * Calls GetUserRoles.
         * @param request GetUserRolesRequest message or plain object
         * @returns Promise
         */
        public getUserRoles(
          request: protocol.chat.v1.IGetUserRolesRequest
        ): Promise<protocol.chat.v1.GetUserRolesResponse>;

        /**
         * Calls StreamEvents.
         * @param request StreamEventsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Event
         */
        public streamEvents(
          request: protocol.chat.v1.IStreamEventsRequest,
          callback: protocol.chat.v1.ChatService.StreamEventsCallback
        ): void;

        /**
         * Calls StreamEvents.
         * @param request StreamEventsRequest message or plain object
         * @returns Promise
         */
        public streamEvents(
          request: protocol.chat.v1.IStreamEventsRequest
        ): Promise<protocol.chat.v1.Event>;

        /**
         * Calls Sync.
         * @param request SyncRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SyncEvent
         */
        public sync(
          request: protocol.chat.v1.ISyncRequest,
          callback: protocol.chat.v1.ChatService.SyncCallback
        ): void;

        /**
         * Calls Sync.
         * @param request SyncRequest message or plain object
         * @returns Promise
         */
        public sync(
          request: protocol.chat.v1.ISyncRequest
        ): Promise<protocol.chat.v1.SyncEvent>;

        /**
         * Calls GetUser.
         * @param request GetUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetUserResponse
         */
        public getUser(
          request: protocol.chat.v1.IGetUserRequest,
          callback: protocol.chat.v1.ChatService.GetUserCallback
        ): void;

        /**
         * Calls GetUser.
         * @param request GetUserRequest message or plain object
         * @returns Promise
         */
        public getUser(
          request: protocol.chat.v1.IGetUserRequest
        ): Promise<protocol.chat.v1.GetUserResponse>;

        /**
         * Calls GetUserBulk.
         * @param request GetUserBulkRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetUserBulkResponse
         */
        public getUserBulk(
          request: protocol.chat.v1.IGetUserBulkRequest,
          callback: protocol.chat.v1.ChatService.GetUserBulkCallback
        ): void;

        /**
         * Calls GetUserBulk.
         * @param request GetUserBulkRequest message or plain object
         * @returns Promise
         */
        public getUserBulk(
          request: protocol.chat.v1.IGetUserBulkRequest
        ): Promise<protocol.chat.v1.GetUserBulkResponse>;

        /**
         * Calls GetUserMetadata.
         * @param request GetUserMetadataRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetUserMetadataResponse
         */
        public getUserMetadata(
          request: protocol.chat.v1.IGetUserMetadataRequest,
          callback: protocol.chat.v1.ChatService.GetUserMetadataCallback
        ): void;

        /**
         * Calls GetUserMetadata.
         * @param request GetUserMetadataRequest message or plain object
         * @returns Promise
         */
        public getUserMetadata(
          request: protocol.chat.v1.IGetUserMetadataRequest
        ): Promise<protocol.chat.v1.GetUserMetadataResponse>;

        /**
         * Calls ProfileUpdate.
         * @param request ProfileUpdateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public profileUpdate(
          request: protocol.chat.v1.IProfileUpdateRequest,
          callback: protocol.chat.v1.ChatService.ProfileUpdateCallback
        ): void;

        /**
         * Calls ProfileUpdate.
         * @param request ProfileUpdateRequest message or plain object
         * @returns Promise
         */
        public profileUpdate(
          request: protocol.chat.v1.IProfileUpdateRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls Typing.
         * @param request TypingRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public typing(
          request: protocol.chat.v1.ITypingRequest,
          callback: protocol.chat.v1.ChatService.TypingCallback
        ): void;

        /**
         * Calls Typing.
         * @param request TypingRequest message or plain object
         * @returns Promise
         */
        public typing(
          request: protocol.chat.v1.ITypingRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls PreviewGuild.
         * @param request PreviewGuildRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PreviewGuildResponse
         */
        public previewGuild(
          request: protocol.chat.v1.IPreviewGuildRequest,
          callback: protocol.chat.v1.ChatService.PreviewGuildCallback
        ): void;

        /**
         * Calls PreviewGuild.
         * @param request PreviewGuildRequest message or plain object
         * @returns Promise
         */
        public previewGuild(
          request: protocol.chat.v1.IPreviewGuildRequest
        ): Promise<protocol.chat.v1.PreviewGuildResponse>;

        /**
         * Calls BanUser.
         * @param request BanUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public banUser(
          request: protocol.chat.v1.IBanUserRequest,
          callback: protocol.chat.v1.ChatService.BanUserCallback
        ): void;

        /**
         * Calls BanUser.
         * @param request BanUserRequest message or plain object
         * @returns Promise
         */
        public banUser(
          request: protocol.chat.v1.IBanUserRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls KickUser.
         * @param request KickUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public kickUser(
          request: protocol.chat.v1.IKickUserRequest,
          callback: protocol.chat.v1.ChatService.KickUserCallback
        ): void;

        /**
         * Calls KickUser.
         * @param request KickUserRequest message or plain object
         * @returns Promise
         */
        public kickUser(
          request: protocol.chat.v1.IKickUserRequest
        ): Promise<google.protobuf.Empty>;

        /**
         * Calls UnbanUser.
         * @param request UnbanUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public unbanUser(
          request: protocol.chat.v1.IUnbanUserRequest,
          callback: protocol.chat.v1.ChatService.UnbanUserCallback
        ): void;

        /**
         * Calls UnbanUser.
         * @param request UnbanUserRequest message or plain object
         * @returns Promise
         */
        public unbanUser(
          request: protocol.chat.v1.IUnbanUserRequest
        ): Promise<google.protobuf.Empty>;
      }

      namespace ChatService {
        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#createGuild}.
         * @param error Error, if any
         * @param [response] CreateGuildResponse
         */
        type CreateGuildCallback = (
          error: Error | null,
          response?: protocol.chat.v1.CreateGuildResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#createInvite}.
         * @param error Error, if any
         * @param [response] CreateInviteResponse
         */
        type CreateInviteCallback = (
          error: Error | null,
          response?: protocol.chat.v1.CreateInviteResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#createChannel}.
         * @param error Error, if any
         * @param [response] CreateChannelResponse
         */
        type CreateChannelCallback = (
          error: Error | null,
          response?: protocol.chat.v1.CreateChannelResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#createEmotePack}.
         * @param error Error, if any
         * @param [response] CreateEmotePackResponse
         */
        type CreateEmotePackCallback = (
          error: Error | null,
          response?: protocol.chat.v1.CreateEmotePackResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getGuildList}.
         * @param error Error, if any
         * @param [response] GetGuildListResponse
         */
        type GetGuildListCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetGuildListResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#addGuildToGuildList}.
         * @param error Error, if any
         * @param [response] AddGuildToGuildListResponse
         */
        type AddGuildToGuildListCallback = (
          error: Error | null,
          response?: protocol.chat.v1.AddGuildToGuildListResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#removeGuildFromGuildList}.
         * @param error Error, if any
         * @param [response] RemoveGuildFromGuildListResponse
         */
        type RemoveGuildFromGuildListCallback = (
          error: Error | null,
          response?: protocol.chat.v1.RemoveGuildFromGuildListResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getGuild}.
         * @param error Error, if any
         * @param [response] GetGuildResponse
         */
        type GetGuildCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetGuildResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getGuildInvites}.
         * @param error Error, if any
         * @param [response] GetGuildInvitesResponse
         */
        type GetGuildInvitesCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetGuildInvitesResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getGuildMembers}.
         * @param error Error, if any
         * @param [response] GetGuildMembersResponse
         */
        type GetGuildMembersCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetGuildMembersResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getGuildChannels}.
         * @param error Error, if any
         * @param [response] GetGuildChannelsResponse
         */
        type GetGuildChannelsCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetGuildChannelsResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getChannelMessages}.
         * @param error Error, if any
         * @param [response] GetChannelMessagesResponse
         */
        type GetChannelMessagesCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetChannelMessagesResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getMessage}.
         * @param error Error, if any
         * @param [response] GetMessageResponse
         */
        type GetMessageCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetMessageResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getEmotePacks}.
         * @param error Error, if any
         * @param [response] GetEmotePacksResponse
         */
        type GetEmotePacksCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetEmotePacksResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getEmotePackEmotes}.
         * @param error Error, if any
         * @param [response] GetEmotePackEmotesResponse
         */
        type GetEmotePackEmotesCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetEmotePackEmotesResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#updateGuildInformation}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type UpdateGuildInformationCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#updateChannelInformation}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type UpdateChannelInformationCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#updateChannelOrder}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type UpdateChannelOrderCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#updateMessage}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type UpdateMessageCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#addEmoteToPack}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type AddEmoteToPackCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#deleteGuild}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type DeleteGuildCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#deleteInvite}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type DeleteInviteCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#deleteChannel}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type DeleteChannelCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#deleteMessage}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type DeleteMessageCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#deleteEmoteFromPack}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type DeleteEmoteFromPackCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#deleteEmotePack}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type DeleteEmotePackCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#dequipEmotePack}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type DequipEmotePackCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#joinGuild}.
         * @param error Error, if any
         * @param [response] JoinGuildResponse
         */
        type JoinGuildCallback = (
          error: Error | null,
          response?: protocol.chat.v1.JoinGuildResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#leaveGuild}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type LeaveGuildCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#triggerAction}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type TriggerActionCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#sendMessage}.
         * @param error Error, if any
         * @param [response] SendMessageResponse
         */
        type SendMessageCallback = (
          error: Error | null,
          response?: protocol.chat.v1.SendMessageResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#queryHasPermission}.
         * @param error Error, if any
         * @param [response] QueryPermissionsResponse
         */
        type QueryHasPermissionCallback = (
          error: Error | null,
          response?: protocol.chat.v1.QueryPermissionsResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#setPermissions}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type SetPermissionsCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getPermissions}.
         * @param error Error, if any
         * @param [response] GetPermissionsResponse
         */
        type GetPermissionsCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetPermissionsResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#moveRole}.
         * @param error Error, if any
         * @param [response] MoveRoleResponse
         */
        type MoveRoleCallback = (
          error: Error | null,
          response?: protocol.chat.v1.MoveRoleResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getGuildRoles}.
         * @param error Error, if any
         * @param [response] GetGuildRolesResponse
         */
        type GetGuildRolesCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetGuildRolesResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#addGuildRole}.
         * @param error Error, if any
         * @param [response] AddGuildRoleResponse
         */
        type AddGuildRoleCallback = (
          error: Error | null,
          response?: protocol.chat.v1.AddGuildRoleResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#modifyGuildRole}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type ModifyGuildRoleCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#deleteGuildRole}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type DeleteGuildRoleCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#manageUserRoles}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type ManageUserRolesCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getUserRoles}.
         * @param error Error, if any
         * @param [response] GetUserRolesResponse
         */
        type GetUserRolesCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetUserRolesResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#streamEvents}.
         * @param error Error, if any
         * @param [response] Event
         */
        type StreamEventsCallback = (
          error: Error | null,
          response?: protocol.chat.v1.Event
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#sync}.
         * @param error Error, if any
         * @param [response] SyncEvent
         */
        type SyncCallback = (
          error: Error | null,
          response?: protocol.chat.v1.SyncEvent
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getUser}.
         * @param error Error, if any
         * @param [response] GetUserResponse
         */
        type GetUserCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetUserResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getUserBulk}.
         * @param error Error, if any
         * @param [response] GetUserBulkResponse
         */
        type GetUserBulkCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetUserBulkResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#getUserMetadata}.
         * @param error Error, if any
         * @param [response] GetUserMetadataResponse
         */
        type GetUserMetadataCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetUserMetadataResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#profileUpdate}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type ProfileUpdateCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#typing}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type TypingCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#previewGuild}.
         * @param error Error, if any
         * @param [response] PreviewGuildResponse
         */
        type PreviewGuildCallback = (
          error: Error | null,
          response?: protocol.chat.v1.PreviewGuildResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#banUser}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type BanUserCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#kickUser}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type KickUserCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;

        /**
         * Callback as used by {@link protocol.chat.v1.ChatService#unbanUser}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type UnbanUserCallback = (
          error: Error | null,
          response?: google.protobuf.Empty
        ) => void;
      }

      /** Properties of a GetUserRequest. */
      interface IGetUserRequest {
        /** GetUserRequest userId */
        userId?: number | null;
      }

      /** Represents a GetUserRequest. */
      class GetUserRequest implements IGetUserRequest {
        /**
         * Constructs a new GetUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetUserRequest);

        /** GetUserRequest userId. */
        public userId: number;

        /**
         * Encodes the specified GetUserRequest message. Does not implicitly {@link protocol.chat.v1.GetUserRequest.verify|verify} messages.
         * @param message GetUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetUserRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetUserRequest;

        /**
         * Creates a GetUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetUserRequest;

        /**
         * Creates a plain object from a GetUserRequest message. Also converts values to other types if specified.
         * @param message GetUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetUserRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetUserResponse. */
      interface IGetUserResponse {
        /** GetUserResponse userName */
        userName?: string | null;

        /** GetUserResponse userAvatar */
        userAvatar?: string | null;

        /** GetUserResponse userStatus */
        userStatus?: protocol.harmonytypes.v1.UserStatus | null;

        /** GetUserResponse isBot */
        isBot?: boolean | null;
      }

      /** Represents a GetUserResponse. */
      class GetUserResponse implements IGetUserResponse {
        /**
         * Constructs a new GetUserResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetUserResponse);

        /** GetUserResponse userName. */
        public userName: string;

        /** GetUserResponse userAvatar. */
        public userAvatar: string;

        /** GetUserResponse userStatus. */
        public userStatus: protocol.harmonytypes.v1.UserStatus;

        /** GetUserResponse isBot. */
        public isBot: boolean;

        /**
         * Encodes the specified GetUserResponse message. Does not implicitly {@link protocol.chat.v1.GetUserResponse.verify|verify} messages.
         * @param message GetUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetUserResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetUserResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetUserResponse;

        /**
         * Creates a GetUserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetUserResponse;

        /**
         * Creates a plain object from a GetUserResponse message. Also converts values to other types if specified.
         * @param message GetUserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetUserResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetUserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetUserBulkRequest. */
      interface IGetUserBulkRequest {
        /** GetUserBulkRequest userIds */
        userIds?: number[] | null;
      }

      /** Represents a GetUserBulkRequest. */
      class GetUserBulkRequest implements IGetUserBulkRequest {
        /**
         * Constructs a new GetUserBulkRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetUserBulkRequest);

        /** GetUserBulkRequest userIds. */
        public userIds: number[];

        /**
         * Encodes the specified GetUserBulkRequest message. Does not implicitly {@link protocol.chat.v1.GetUserBulkRequest.verify|verify} messages.
         * @param message GetUserBulkRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetUserBulkRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetUserBulkRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserBulkRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetUserBulkRequest;

        /**
         * Creates a GetUserBulkRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserBulkRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetUserBulkRequest;

        /**
         * Creates a plain object from a GetUserBulkRequest message. Also converts values to other types if specified.
         * @param message GetUserBulkRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetUserBulkRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetUserBulkRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetUserBulkResponse. */
      interface IGetUserBulkResponse {
        /** GetUserBulkResponse users */
        users?: protocol.chat.v1.IGetUserResponse[] | null;
      }

      /** Represents a GetUserBulkResponse. */
      class GetUserBulkResponse implements IGetUserBulkResponse {
        /**
         * Constructs a new GetUserBulkResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetUserBulkResponse);

        /** GetUserBulkResponse users. */
        public users: protocol.chat.v1.IGetUserResponse[];

        /**
         * Encodes the specified GetUserBulkResponse message. Does not implicitly {@link protocol.chat.v1.GetUserBulkResponse.verify|verify} messages.
         * @param message GetUserBulkResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetUserBulkResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetUserBulkResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserBulkResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetUserBulkResponse;

        /**
         * Creates a GetUserBulkResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserBulkResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetUserBulkResponse;

        /**
         * Creates a plain object from a GetUserBulkResponse message. Also converts values to other types if specified.
         * @param message GetUserBulkResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetUserBulkResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetUserBulkResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetUserMetadataRequest. */
      interface IGetUserMetadataRequest {
        /** GetUserMetadataRequest appId */
        appId?: string | null;
      }

      /** Represents a GetUserMetadataRequest. */
      class GetUserMetadataRequest implements IGetUserMetadataRequest {
        /**
         * Constructs a new GetUserMetadataRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetUserMetadataRequest);

        /** GetUserMetadataRequest appId. */
        public appId: string;

        /**
         * Encodes the specified GetUserMetadataRequest message. Does not implicitly {@link protocol.chat.v1.GetUserMetadataRequest.verify|verify} messages.
         * @param message GetUserMetadataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetUserMetadataRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetUserMetadataRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserMetadataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetUserMetadataRequest;

        /**
         * Creates a GetUserMetadataRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserMetadataRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetUserMetadataRequest;

        /**
         * Creates a plain object from a GetUserMetadataRequest message. Also converts values to other types if specified.
         * @param message GetUserMetadataRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetUserMetadataRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetUserMetadataRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a GetUserMetadataResponse. */
      interface IGetUserMetadataResponse {
        /** GetUserMetadataResponse metadata */
        metadata?: string | null;
      }

      /** Represents a GetUserMetadataResponse. */
      class GetUserMetadataResponse implements IGetUserMetadataResponse {
        /**
         * Constructs a new GetUserMetadataResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetUserMetadataResponse);

        /** GetUserMetadataResponse metadata. */
        public metadata: string;

        /**
         * Encodes the specified GetUserMetadataResponse message. Does not implicitly {@link protocol.chat.v1.GetUserMetadataResponse.verify|verify} messages.
         * @param message GetUserMetadataResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IGetUserMetadataResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GetUserMetadataResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserMetadataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.GetUserMetadataResponse;

        /**
         * Creates a GetUserMetadataResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserMetadataResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.GetUserMetadataResponse;

        /**
         * Creates a plain object from a GetUserMetadataResponse message. Also converts values to other types if specified.
         * @param message GetUserMetadataResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.GetUserMetadataResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this GetUserMetadataResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a ProfileUpdateRequest. */
      interface IProfileUpdateRequest {
        /** ProfileUpdateRequest newUsername */
        newUsername?: string | null;

        /** ProfileUpdateRequest updateUsername */
        updateUsername?: boolean | null;

        /** ProfileUpdateRequest newAvatar */
        newAvatar?: string | null;

        /** ProfileUpdateRequest updateAvatar */
        updateAvatar?: boolean | null;

        /** ProfileUpdateRequest newStatus */
        newStatus?: protocol.harmonytypes.v1.UserStatus | null;

        /** ProfileUpdateRequest updateStatus */
        updateStatus?: boolean | null;

        /** ProfileUpdateRequest isBot */
        isBot?: boolean | null;

        /** ProfileUpdateRequest updateIsBot */
        updateIsBot?: boolean | null;
      }

      /** Represents a ProfileUpdateRequest. */
      class ProfileUpdateRequest implements IProfileUpdateRequest {
        /**
         * Constructs a new ProfileUpdateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IProfileUpdateRequest);

        /** ProfileUpdateRequest newUsername. */
        public newUsername: string;

        /** ProfileUpdateRequest updateUsername. */
        public updateUsername: boolean;

        /** ProfileUpdateRequest newAvatar. */
        public newAvatar: string;

        /** ProfileUpdateRequest updateAvatar. */
        public updateAvatar: boolean;

        /** ProfileUpdateRequest newStatus. */
        public newStatus: protocol.harmonytypes.v1.UserStatus;

        /** ProfileUpdateRequest updateStatus. */
        public updateStatus: boolean;

        /** ProfileUpdateRequest isBot. */
        public isBot: boolean;

        /** ProfileUpdateRequest updateIsBot. */
        public updateIsBot: boolean;

        /**
         * Encodes the specified ProfileUpdateRequest message. Does not implicitly {@link protocol.chat.v1.ProfileUpdateRequest.verify|verify} messages.
         * @param message ProfileUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.chat.v1.IProfileUpdateRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ProfileUpdateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProfileUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.chat.v1.ProfileUpdateRequest;

        /**
         * Creates a ProfileUpdateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProfileUpdateRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.chat.v1.ProfileUpdateRequest;

        /**
         * Creates a plain object from a ProfileUpdateRequest message. Also converts values to other types if specified.
         * @param message ProfileUpdateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.chat.v1.ProfileUpdateRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ProfileUpdateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }

  /** Namespace harmonytypes. */
  namespace harmonytypes {
    /** Namespace v1. */
    namespace v1 {
      /** Properties of a HarmonyMethodMetadata. */
      interface IHarmonyMethodMetadata {
        /** HarmonyMethodMetadata requiresAuthentication */
        requiresAuthentication?: boolean | null;

        /** HarmonyMethodMetadata requiresLocal */
        requiresLocal?: boolean | null;

        /** HarmonyMethodMetadata requiresPermissionNode */
        requiresPermissionNode?: string | null;
      }

      /** Represents a HarmonyMethodMetadata. */
      class HarmonyMethodMetadata implements IHarmonyMethodMetadata {
        /**
         * Constructs a new HarmonyMethodMetadata.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: protocol.harmonytypes.v1.IHarmonyMethodMetadata
        );

        /** HarmonyMethodMetadata requiresAuthentication. */
        public requiresAuthentication: boolean;

        /** HarmonyMethodMetadata requiresLocal. */
        public requiresLocal: boolean;

        /** HarmonyMethodMetadata requiresPermissionNode. */
        public requiresPermissionNode: string;

        /**
         * Encodes the specified HarmonyMethodMetadata message. Does not implicitly {@link protocol.harmonytypes.v1.HarmonyMethodMetadata.verify|verify} messages.
         * @param message HarmonyMethodMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.harmonytypes.v1.IHarmonyMethodMetadata,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a HarmonyMethodMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HarmonyMethodMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.harmonytypes.v1.HarmonyMethodMetadata;

        /**
         * Creates a HarmonyMethodMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HarmonyMethodMetadata
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.harmonytypes.v1.HarmonyMethodMetadata;

        /**
         * Creates a plain object from a HarmonyMethodMetadata message. Also converts values to other types if specified.
         * @param message HarmonyMethodMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.harmonytypes.v1.HarmonyMethodMetadata,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this HarmonyMethodMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** UserStatus enum. */
      enum UserStatus {
        USER_STATUS_ONLINE_UNSPECIFIED = 0,
        USER_STATUS_STREAMING = 1,
        USER_STATUS_DO_NOT_DISTURB = 2,
        USER_STATUS_IDLE = 3,
        USER_STATUS_OFFLINE = 4,
      }

      /** Properties of an Override. */
      interface IOverride {
        /** Override name */
        name?: string | null;

        /** Override avatar */
        avatar?: string | null;

        /** Override userDefined */
        userDefined?: string | null;

        /** Override webhook */
        webhook?: google.protobuf.IEmpty | null;

        /** Override systemPlurality */
        systemPlurality?: google.protobuf.IEmpty | null;

        /** Override systemMessage */
        systemMessage?: google.protobuf.IEmpty | null;

        /** Override bridge */
        bridge?: google.protobuf.IEmpty | null;
      }

      /** Represents an Override. */
      class Override implements IOverride {
        /**
         * Constructs a new Override.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.harmonytypes.v1.IOverride);

        /** Override name. */
        public name: string;

        /** Override avatar. */
        public avatar: string;

        /** Override userDefined. */
        public userDefined: string;

        /** Override webhook. */
        public webhook?: google.protobuf.IEmpty | null;

        /** Override systemPlurality. */
        public systemPlurality?: google.protobuf.IEmpty | null;

        /** Override systemMessage. */
        public systemMessage?: google.protobuf.IEmpty | null;

        /** Override bridge. */
        public bridge?: google.protobuf.IEmpty | null;

        /** Override reason. */
        public reason?:
          | "userDefined"
          | "webhook"
          | "systemPlurality"
          | "systemMessage"
          | "bridge";

        /**
         * Encodes the specified Override message. Does not implicitly {@link protocol.harmonytypes.v1.Override.verify|verify} messages.
         * @param message Override message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.harmonytypes.v1.IOverride,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Override message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Override
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.harmonytypes.v1.Override;

        /**
         * Creates an Override message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Override
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.harmonytypes.v1.Override;

        /**
         * Creates a plain object from an Override message. Also converts values to other types if specified.
         * @param message Override
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.harmonytypes.v1.Override,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Override to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** ActionType enum. */
      enum ActionType {
        Normal = 0,
        Primary = 1,
        Destructive = 2,
      }

      /** ActionPresentation enum. */
      enum ActionPresentation {
        Button = 0,
        Dropdown = 1,
        Menu = 2,
        SmallEntry = 3,
        LargeEntry = 4,
      }

      /** FieldPresentation enum. */
      enum FieldPresentation {
        Data = 0,
        CaptionedImage = 1,
        Row = 2,
      }

      /** Properties of an Action. */
      interface IAction {
        /** Action text */
        text?: string | null;

        /** Action url */
        url?: string | null;

        /** Action id */
        id?: string | null;

        /** Action type */
        type?: protocol.harmonytypes.v1.ActionType | null;

        /** Action presentation */
        presentation?: protocol.harmonytypes.v1.ActionPresentation | null;

        /** Action children */
        children?: protocol.harmonytypes.v1.IAction[] | null;
      }

      /** Represents an Action. */
      class Action implements IAction {
        /**
         * Constructs a new Action.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.harmonytypes.v1.IAction);

        /** Action text. */
        public text: string;

        /** Action url. */
        public url: string;

        /** Action id. */
        public id: string;

        /** Action type. */
        public type: protocol.harmonytypes.v1.ActionType;

        /** Action presentation. */
        public presentation: protocol.harmonytypes.v1.ActionPresentation;

        /** Action children. */
        public children: protocol.harmonytypes.v1.IAction[];

        /**
         * Encodes the specified Action message. Does not implicitly {@link protocol.harmonytypes.v1.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.harmonytypes.v1.IAction,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.harmonytypes.v1.Action;

        /**
         * Creates an Action message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Action
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.harmonytypes.v1.Action;

        /**
         * Creates a plain object from an Action message. Also converts values to other types if specified.
         * @param message Action
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.harmonytypes.v1.Action,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Action to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an EmbedHeading. */
      interface IEmbedHeading {
        /** EmbedHeading text */
        text?: string | null;

        /** EmbedHeading subtext */
        subtext?: string | null;

        /** EmbedHeading url */
        url?: string | null;

        /** EmbedHeading icon */
        icon?: string | null;
      }

      /** Represents an EmbedHeading. */
      class EmbedHeading implements IEmbedHeading {
        /**
         * Constructs a new EmbedHeading.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.harmonytypes.v1.IEmbedHeading);

        /** EmbedHeading text. */
        public text: string;

        /** EmbedHeading subtext. */
        public subtext: string;

        /** EmbedHeading url. */
        public url: string;

        /** EmbedHeading icon. */
        public icon: string;

        /**
         * Encodes the specified EmbedHeading message. Does not implicitly {@link protocol.harmonytypes.v1.EmbedHeading.verify|verify} messages.
         * @param message EmbedHeading message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.harmonytypes.v1.IEmbedHeading,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an EmbedHeading message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmbedHeading
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.harmonytypes.v1.EmbedHeading;

        /**
         * Creates an EmbedHeading message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmbedHeading
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.harmonytypes.v1.EmbedHeading;

        /**
         * Creates a plain object from an EmbedHeading message. Also converts values to other types if specified.
         * @param message EmbedHeading
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.harmonytypes.v1.EmbedHeading,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this EmbedHeading to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an EmbedField. */
      interface IEmbedField {
        /** EmbedField title */
        title?: string | null;

        /** EmbedField subtitle */
        subtitle?: string | null;

        /** EmbedField body */
        body?: string | null;

        /** EmbedField imageUrl */
        imageUrl?: string | null;

        /** EmbedField presentation */
        presentation?: protocol.harmonytypes.v1.FieldPresentation | null;

        /** EmbedField actions */
        actions?: protocol.harmonytypes.v1.IAction[] | null;
      }

      /** Represents an EmbedField. */
      class EmbedField implements IEmbedField {
        /**
         * Constructs a new EmbedField.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.harmonytypes.v1.IEmbedField);

        /** EmbedField title. */
        public title: string;

        /** EmbedField subtitle. */
        public subtitle: string;

        /** EmbedField body. */
        public body: string;

        /** EmbedField imageUrl. */
        public imageUrl: string;

        /** EmbedField presentation. */
        public presentation: protocol.harmonytypes.v1.FieldPresentation;

        /** EmbedField actions. */
        public actions: protocol.harmonytypes.v1.IAction[];

        /**
         * Encodes the specified EmbedField message. Does not implicitly {@link protocol.harmonytypes.v1.EmbedField.verify|verify} messages.
         * @param message EmbedField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.harmonytypes.v1.IEmbedField,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an EmbedField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EmbedField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.harmonytypes.v1.EmbedField;

        /**
         * Creates an EmbedField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EmbedField
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.harmonytypes.v1.EmbedField;

        /**
         * Creates a plain object from an EmbedField message. Also converts values to other types if specified.
         * @param message EmbedField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.harmonytypes.v1.EmbedField,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this EmbedField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an Embed. */
      interface IEmbed {
        /** Embed title */
        title?: string | null;

        /** Embed body */
        body?: string | null;

        /** Embed color */
        color?: number | null;

        /** Embed header */
        header?: protocol.harmonytypes.v1.IEmbedHeading | null;

        /** Embed footer */
        footer?: protocol.harmonytypes.v1.IEmbedHeading | null;

        /** Embed fields */
        fields?: protocol.harmonytypes.v1.IEmbedField[] | null;

        /** Embed actions */
        actions?: protocol.harmonytypes.v1.IAction[] | null;
      }

      /** Represents an Embed. */
      class Embed implements IEmbed {
        /**
         * Constructs a new Embed.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.harmonytypes.v1.IEmbed);

        /** Embed title. */
        public title: string;

        /** Embed body. */
        public body: string;

        /** Embed color. */
        public color: number;

        /** Embed header. */
        public header?: protocol.harmonytypes.v1.IEmbedHeading | null;

        /** Embed footer. */
        public footer?: protocol.harmonytypes.v1.IEmbedHeading | null;

        /** Embed fields. */
        public fields: protocol.harmonytypes.v1.IEmbedField[];

        /** Embed actions. */
        public actions: protocol.harmonytypes.v1.IAction[];

        /**
         * Encodes the specified Embed message. Does not implicitly {@link protocol.harmonytypes.v1.Embed.verify|verify} messages.
         * @param message Embed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.harmonytypes.v1.IEmbed,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Embed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Embed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.harmonytypes.v1.Embed;

        /**
         * Creates an Embed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Embed
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.harmonytypes.v1.Embed;

        /**
         * Creates a plain object from an Embed message. Also converts values to other types if specified.
         * @param message Embed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.harmonytypes.v1.Embed,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Embed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an Attachment. */
      interface IAttachment {
        /** Attachment id */
        id?: string | null;

        /** Attachment name */
        name?: string | null;

        /** Attachment type */
        type?: string | null;

        /** Attachment size */
        size?: number | null;
      }

      /** Represents an Attachment. */
      class Attachment implements IAttachment {
        /**
         * Constructs a new Attachment.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.harmonytypes.v1.IAttachment);

        /** Attachment id. */
        public id: string;

        /** Attachment name. */
        public name: string;

        /** Attachment type. */
        public type: string;

        /** Attachment size. */
        public size: number;

        /**
         * Encodes the specified Attachment message. Does not implicitly {@link protocol.harmonytypes.v1.Attachment.verify|verify} messages.
         * @param message Attachment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.harmonytypes.v1.IAttachment,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Attachment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Attachment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.harmonytypes.v1.Attachment;

        /**
         * Creates an Attachment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Attachment
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.harmonytypes.v1.Attachment;

        /**
         * Creates a plain object from an Attachment message. Also converts values to other types if specified.
         * @param message Attachment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.harmonytypes.v1.Attachment,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Attachment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a Metadata. */
      interface IMetadata {
        /** Metadata kind */
        kind?: string | null;

        /** Metadata extension */
        extension?: { [k: string]: google.protobuf.IAny } | null;
      }

      /** Represents a Metadata. */
      class Metadata implements IMetadata {
        /**
         * Constructs a new Metadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.harmonytypes.v1.IMetadata);

        /** Metadata kind. */
        public kind: string;

        /** Metadata extension. */
        public extension: { [k: string]: google.protobuf.IAny };

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link protocol.harmonytypes.v1.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.harmonytypes.v1.IMetadata,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.harmonytypes.v1.Metadata;

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Metadata
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.harmonytypes.v1.Metadata;

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @param message Metadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.harmonytypes.v1.Metadata,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Metadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a Message. */
      interface IMessage {
        /** Message metadata */
        metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /** Message guildId */
        guildId?: number | null;

        /** Message channelId */
        channelId?: number | null;

        /** Message messageId */
        messageId?: number | null;

        /** Message authorId */
        authorId?: number | null;

        /** Message createdAt */
        createdAt?: google.protobuf.ITimestamp | null;

        /** Message editedAt */
        editedAt?: google.protobuf.ITimestamp | null;

        /** Message content */
        content?: string | null;

        /** Message embeds */
        embeds?: protocol.harmonytypes.v1.IEmbed[] | null;

        /** Message actions */
        actions?: protocol.harmonytypes.v1.IAction[] | null;

        /** Message attachments */
        attachments?: protocol.harmonytypes.v1.IAttachment[] | null;

        /** Message inReplyTo */
        inReplyTo?: number | null;

        /** Message overrides */
        overrides?: protocol.harmonytypes.v1.IOverride | null;
      }

      /** Represents a Message. */
      class Message implements IMessage {
        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.harmonytypes.v1.IMessage);

        /** Message metadata. */
        public metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /** Message guildId. */
        public guildId: number;

        /** Message channelId. */
        public channelId: number;

        /** Message messageId. */
        public messageId: number;

        /** Message authorId. */
        public authorId: number;

        /** Message createdAt. */
        public createdAt?: google.protobuf.ITimestamp | null;

        /** Message editedAt. */
        public editedAt?: google.protobuf.ITimestamp | null;

        /** Message content. */
        public content: string;

        /** Message embeds. */
        public embeds: protocol.harmonytypes.v1.IEmbed[];

        /** Message actions. */
        public actions: protocol.harmonytypes.v1.IAction[];

        /** Message attachments. */
        public attachments: protocol.harmonytypes.v1.IAttachment[];

        /** Message inReplyTo. */
        public inReplyTo: number;

        /** Message overrides. */
        public overrides?: protocol.harmonytypes.v1.IOverride | null;

        /**
         * Encodes the specified Message message. Does not implicitly {@link protocol.harmonytypes.v1.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.harmonytypes.v1.IMessage,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.harmonytypes.v1.Message;

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.harmonytypes.v1.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.harmonytypes.v1.Message,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an Error. */
      interface IError {
        /** Error identifier */
        identifier?: string | null;

        /** Error humanMessage */
        humanMessage?: string | null;

        /** Error moreDetails */
        moreDetails?: Uint8Array | null;
      }

      /** Represents an Error. */
      class Error implements IError {
        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.harmonytypes.v1.IError);

        /** Error identifier. */
        public identifier: string;

        /** Error humanMessage. */
        public humanMessage: string;

        /** Error moreDetails. */
        public moreDetails: Uint8Array;

        /**
         * Encodes the specified Error message. Does not implicitly {@link protocol.harmonytypes.v1.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.harmonytypes.v1.IError,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.harmonytypes.v1.Error;

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.harmonytypes.v1.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.harmonytypes.v1.Error,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }
}

/** Namespace google. */
export namespace google {
  /** Namespace protobuf. */
  namespace protobuf {
    /** Properties of a Timestamp. */
    interface ITimestamp {
      /** Timestamp seconds */
      seconds?: number | null;

      /** Timestamp nanos */
      nanos?: number | null;
    }

    /** Represents a Timestamp. */
    class Timestamp implements ITimestamp {
      /**
       * Constructs a new Timestamp.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.ITimestamp);

      /** Timestamp seconds. */
      public seconds: number;

      /** Timestamp nanos. */
      public nanos: number;

      /**
       * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @param message Timestamp message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.ITimestamp,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Timestamp message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.Timestamp;

      /**
       * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Timestamp
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.Timestamp;

      /**
       * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
       * @param message Timestamp
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.Timestamp,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Timestamp to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an Empty. */
    interface IEmpty {}

    /** Represents an Empty. */
    class Empty implements IEmpty {
      /**
       * Constructs a new Empty.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IEmpty);

      /**
       * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
       * @param message Empty message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IEmpty,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Empty message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Empty
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.Empty;

      /**
       * Creates an Empty message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Empty
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.Empty;

      /**
       * Creates a plain object from an Empty message. Also converts values to other types if specified.
       * @param message Empty
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.Empty,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Empty to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an Any. */
    interface IAny {
      /** Any type_url */
      type_url?: string | null;

      /** Any value */
      value?: Uint8Array | null;
    }

    /** Represents an Any. */
    class Any implements IAny {
      /**
       * Constructs a new Any.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IAny);

      /** Any type_url. */
      public type_url: string;

      /** Any value. */
      public value: Uint8Array;

      /**
       * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
       * @param message Any message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IAny,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Any message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Any
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.Any;

      /**
       * Creates an Any message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Any
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.Any;

      /**
       * Creates a plain object from an Any message. Also converts values to other types if specified.
       * @param message Any
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.Any,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Any to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileDescriptorSet. */
    interface IFileDescriptorSet {
      /** FileDescriptorSet file */
      file?: google.protobuf.IFileDescriptorProto[] | null;
    }

    /** Represents a FileDescriptorSet. */
    class FileDescriptorSet implements IFileDescriptorSet {
      /**
       * Constructs a new FileDescriptorSet.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFileDescriptorSet);

      /** FileDescriptorSet file. */
      public file: google.protobuf.IFileDescriptorProto[];

      /**
       * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
       * @param message FileDescriptorSet message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IFileDescriptorSet,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FileDescriptorSet message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FileDescriptorSet
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FileDescriptorSet;

      /**
       * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FileDescriptorSet
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FileDescriptorSet;

      /**
       * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
       * @param message FileDescriptorSet
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FileDescriptorSet,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FileDescriptorSet to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileDescriptorProto. */
    interface IFileDescriptorProto {
      /** FileDescriptorProto name */
      name?: string | null;

      /** FileDescriptorProto package */
      package?: string | null;

      /** FileDescriptorProto dependency */
      dependency?: string[] | null;

      /** FileDescriptorProto publicDependency */
      publicDependency?: number[] | null;

      /** FileDescriptorProto weakDependency */
      weakDependency?: number[] | null;

      /** FileDescriptorProto messageType */
      messageType?: google.protobuf.IDescriptorProto[] | null;

      /** FileDescriptorProto enumType */
      enumType?: google.protobuf.IEnumDescriptorProto[] | null;

      /** FileDescriptorProto service */
      service?: google.protobuf.IServiceDescriptorProto[] | null;

      /** FileDescriptorProto extension */
      extension?: google.protobuf.IFieldDescriptorProto[] | null;

      /** FileDescriptorProto options */
      options?: google.protobuf.IFileOptions | null;

      /** FileDescriptorProto sourceCodeInfo */
      sourceCodeInfo?: google.protobuf.ISourceCodeInfo | null;

      /** FileDescriptorProto syntax */
      syntax?: string | null;
    }

    /** Represents a FileDescriptorProto. */
    class FileDescriptorProto implements IFileDescriptorProto {
      /**
       * Constructs a new FileDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFileDescriptorProto);

      /** FileDescriptorProto name. */
      public name: string;

      /** FileDescriptorProto package. */
      public package: string;

      /** FileDescriptorProto dependency. */
      public dependency: string[];

      /** FileDescriptorProto publicDependency. */
      public publicDependency: number[];

      /** FileDescriptorProto weakDependency. */
      public weakDependency: number[];

      /** FileDescriptorProto messageType. */
      public messageType: google.protobuf.IDescriptorProto[];

      /** FileDescriptorProto enumType. */
      public enumType: google.protobuf.IEnumDescriptorProto[];

      /** FileDescriptorProto service. */
      public service: google.protobuf.IServiceDescriptorProto[];

      /** FileDescriptorProto extension. */
      public extension: google.protobuf.IFieldDescriptorProto[];

      /** FileDescriptorProto options. */
      public options?: google.protobuf.IFileOptions | null;

      /** FileDescriptorProto sourceCodeInfo. */
      public sourceCodeInfo?: google.protobuf.ISourceCodeInfo | null;

      /** FileDescriptorProto syntax. */
      public syntax: string;

      /**
       * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
       * @param message FileDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IFileDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FileDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FileDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FileDescriptorProto;

      /**
       * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FileDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FileDescriptorProto;

      /**
       * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
       * @param message FileDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FileDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FileDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a DescriptorProto. */
    interface IDescriptorProto {
      /** DescriptorProto name */
      name?: string | null;

      /** DescriptorProto field */
      field?: google.protobuf.IFieldDescriptorProto[] | null;

      /** DescriptorProto extension */
      extension?: google.protobuf.IFieldDescriptorProto[] | null;

      /** DescriptorProto nestedType */
      nestedType?: google.protobuf.IDescriptorProto[] | null;

      /** DescriptorProto enumType */
      enumType?: google.protobuf.IEnumDescriptorProto[] | null;

      /** DescriptorProto extensionRange */
      extensionRange?: google.protobuf.DescriptorProto.IExtensionRange[] | null;

      /** DescriptorProto oneofDecl */
      oneofDecl?: google.protobuf.IOneofDescriptorProto[] | null;

      /** DescriptorProto options */
      options?: google.protobuf.IMessageOptions | null;

      /** DescriptorProto reservedRange */
      reservedRange?: google.protobuf.DescriptorProto.IReservedRange[] | null;

      /** DescriptorProto reservedName */
      reservedName?: string[] | null;
    }

    /** Represents a DescriptorProto. */
    class DescriptorProto implements IDescriptorProto {
      /**
       * Constructs a new DescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IDescriptorProto);

      /** DescriptorProto name. */
      public name: string;

      /** DescriptorProto field. */
      public field: google.protobuf.IFieldDescriptorProto[];

      /** DescriptorProto extension. */
      public extension: google.protobuf.IFieldDescriptorProto[];

      /** DescriptorProto nestedType. */
      public nestedType: google.protobuf.IDescriptorProto[];

      /** DescriptorProto enumType. */
      public enumType: google.protobuf.IEnumDescriptorProto[];

      /** DescriptorProto extensionRange. */
      public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

      /** DescriptorProto oneofDecl. */
      public oneofDecl: google.protobuf.IOneofDescriptorProto[];

      /** DescriptorProto options. */
      public options?: google.protobuf.IMessageOptions | null;

      /** DescriptorProto reservedRange. */
      public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

      /** DescriptorProto reservedName. */
      public reservedName: string[];

      /**
       * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
       * @param message DescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a DescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns DescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.DescriptorProto;

      /**
       * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns DescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.DescriptorProto;

      /**
       * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
       * @param message DescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.DescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this DescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace DescriptorProto {
      /** Properties of an ExtensionRange. */
      interface IExtensionRange {
        /** ExtensionRange start */
        start?: number | null;

        /** ExtensionRange end */
        end?: number | null;
      }

      /** Represents an ExtensionRange. */
      class ExtensionRange implements IExtensionRange {
        /**
         * Constructs a new ExtensionRange.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: google.protobuf.DescriptorProto.IExtensionRange
        );

        /** ExtensionRange start. */
        public start: number;

        /** ExtensionRange end. */
        public end: number;

        /**
         * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
         * @param message ExtensionRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.DescriptorProto.IExtensionRange,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an ExtensionRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExtensionRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.DescriptorProto.ExtensionRange;

        /**
         * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExtensionRange
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.DescriptorProto.ExtensionRange;

        /**
         * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
         * @param message ExtensionRange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.DescriptorProto.ExtensionRange,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ExtensionRange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a ReservedRange. */
      interface IReservedRange {
        /** ReservedRange start */
        start?: number | null;

        /** ReservedRange end */
        end?: number | null;
      }

      /** Represents a ReservedRange. */
      class ReservedRange implements IReservedRange {
        /**
         * Constructs a new ReservedRange.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: google.protobuf.DescriptorProto.IReservedRange
        );

        /** ReservedRange start. */
        public start: number;

        /** ReservedRange end. */
        public end: number;

        /**
         * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
         * @param message ReservedRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.DescriptorProto.IReservedRange,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ReservedRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReservedRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.DescriptorProto.ReservedRange;

        /**
         * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReservedRange
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.DescriptorProto.ReservedRange;

        /**
         * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
         * @param message ReservedRange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.DescriptorProto.ReservedRange,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ReservedRange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }

    /** Properties of a FieldDescriptorProto. */
    interface IFieldDescriptorProto {
      /** FieldDescriptorProto name */
      name?: string | null;

      /** FieldDescriptorProto number */
      number?: number | null;

      /** FieldDescriptorProto label */
      label?: google.protobuf.FieldDescriptorProto.Label | null;

      /** FieldDescriptorProto type */
      type?: google.protobuf.FieldDescriptorProto.Type | null;

      /** FieldDescriptorProto typeName */
      typeName?: string | null;

      /** FieldDescriptorProto extendee */
      extendee?: string | null;

      /** FieldDescriptorProto defaultValue */
      defaultValue?: string | null;

      /** FieldDescriptorProto oneofIndex */
      oneofIndex?: number | null;

      /** FieldDescriptorProto jsonName */
      jsonName?: string | null;

      /** FieldDescriptorProto options */
      options?: google.protobuf.IFieldOptions | null;
    }

    /** Represents a FieldDescriptorProto. */
    class FieldDescriptorProto implements IFieldDescriptorProto {
      /**
       * Constructs a new FieldDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFieldDescriptorProto);

      /** FieldDescriptorProto name. */
      public name: string;

      /** FieldDescriptorProto number. */
      public number: number;

      /** FieldDescriptorProto label. */
      public label: google.protobuf.FieldDescriptorProto.Label;

      /** FieldDescriptorProto type. */
      public type: google.protobuf.FieldDescriptorProto.Type;

      /** FieldDescriptorProto typeName. */
      public typeName: string;

      /** FieldDescriptorProto extendee. */
      public extendee: string;

      /** FieldDescriptorProto defaultValue. */
      public defaultValue: string;

      /** FieldDescriptorProto oneofIndex. */
      public oneofIndex: number;

      /** FieldDescriptorProto jsonName. */
      public jsonName: string;

      /** FieldDescriptorProto options. */
      public options?: google.protobuf.IFieldOptions | null;

      /**
       * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
       * @param message FieldDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IFieldDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FieldDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FieldDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FieldDescriptorProto;

      /**
       * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FieldDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FieldDescriptorProto;

      /**
       * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
       * @param message FieldDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FieldDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FieldDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace FieldDescriptorProto {
      /** Type enum. */
      enum Type {
        TYPE_DOUBLE = 1,
        TYPE_FLOAT = 2,
        TYPE_INT64 = 3,
        TYPE_UINT64 = 4,
        TYPE_INT32 = 5,
        TYPE_FIXED64 = 6,
        TYPE_FIXED32 = 7,
        TYPE_BOOL = 8,
        TYPE_STRING = 9,
        TYPE_GROUP = 10,
        TYPE_MESSAGE = 11,
        TYPE_BYTES = 12,
        TYPE_UINT32 = 13,
        TYPE_ENUM = 14,
        TYPE_SFIXED32 = 15,
        TYPE_SFIXED64 = 16,
        TYPE_SINT32 = 17,
        TYPE_SINT64 = 18,
      }

      /** Label enum. */
      enum Label {
        LABEL_OPTIONAL = 1,
        LABEL_REQUIRED = 2,
        LABEL_REPEATED = 3,
      }
    }

    /** Properties of an OneofDescriptorProto. */
    interface IOneofDescriptorProto {
      /** OneofDescriptorProto name */
      name?: string | null;

      /** OneofDescriptorProto options */
      options?: google.protobuf.IOneofOptions | null;
    }

    /** Represents an OneofDescriptorProto. */
    class OneofDescriptorProto implements IOneofDescriptorProto {
      /**
       * Constructs a new OneofDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IOneofDescriptorProto);

      /** OneofDescriptorProto name. */
      public name: string;

      /** OneofDescriptorProto options. */
      public options?: google.protobuf.IOneofOptions | null;

      /**
       * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
       * @param message OneofDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IOneofDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an OneofDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns OneofDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.OneofDescriptorProto;

      /**
       * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns OneofDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.OneofDescriptorProto;

      /**
       * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
       * @param message OneofDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.OneofDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this OneofDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnumDescriptorProto. */
    interface IEnumDescriptorProto {
      /** EnumDescriptorProto name */
      name?: string | null;

      /** EnumDescriptorProto value */
      value?: google.protobuf.IEnumValueDescriptorProto[] | null;

      /** EnumDescriptorProto options */
      options?: google.protobuf.IEnumOptions | null;
    }

    /** Represents an EnumDescriptorProto. */
    class EnumDescriptorProto implements IEnumDescriptorProto {
      /**
       * Constructs a new EnumDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IEnumDescriptorProto);

      /** EnumDescriptorProto name. */
      public name: string;

      /** EnumDescriptorProto value. */
      public value: google.protobuf.IEnumValueDescriptorProto[];

      /** EnumDescriptorProto options. */
      public options?: google.protobuf.IEnumOptions | null;

      /**
       * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
       * @param message EnumDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IEnumDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an EnumDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EnumDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.EnumDescriptorProto;

      /**
       * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EnumDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.EnumDescriptorProto;

      /**
       * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
       * @param message EnumDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.EnumDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this EnumDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnumValueDescriptorProto. */
    interface IEnumValueDescriptorProto {
      /** EnumValueDescriptorProto name */
      name?: string | null;

      /** EnumValueDescriptorProto number */
      number?: number | null;

      /** EnumValueDescriptorProto options */
      options?: google.protobuf.IEnumValueOptions | null;
    }

    /** Represents an EnumValueDescriptorProto. */
    class EnumValueDescriptorProto implements IEnumValueDescriptorProto {
      /**
       * Constructs a new EnumValueDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

      /** EnumValueDescriptorProto name. */
      public name: string;

      /** EnumValueDescriptorProto number. */
      public number: number;

      /** EnumValueDescriptorProto options. */
      public options?: google.protobuf.IEnumValueOptions | null;

      /**
       * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
       * @param message EnumValueDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IEnumValueDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EnumValueDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.EnumValueDescriptorProto;

      /**
       * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EnumValueDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.EnumValueDescriptorProto;

      /**
       * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
       * @param message EnumValueDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.EnumValueDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this EnumValueDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceDescriptorProto. */
    interface IServiceDescriptorProto {
      /** ServiceDescriptorProto name */
      name?: string | null;

      /** ServiceDescriptorProto method */
      method?: google.protobuf.IMethodDescriptorProto[] | null;

      /** ServiceDescriptorProto options */
      options?: google.protobuf.IServiceOptions | null;
    }

    /** Represents a ServiceDescriptorProto. */
    class ServiceDescriptorProto implements IServiceDescriptorProto {
      /**
       * Constructs a new ServiceDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IServiceDescriptorProto);

      /** ServiceDescriptorProto name. */
      public name: string;

      /** ServiceDescriptorProto method. */
      public method: google.protobuf.IMethodDescriptorProto[];

      /** ServiceDescriptorProto options. */
      public options?: google.protobuf.IServiceOptions | null;

      /**
       * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
       * @param message ServiceDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IServiceDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ServiceDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.ServiceDescriptorProto;

      /**
       * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ServiceDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.ServiceDescriptorProto;

      /**
       * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
       * @param message ServiceDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.ServiceDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ServiceDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MethodDescriptorProto. */
    interface IMethodDescriptorProto {
      /** MethodDescriptorProto name */
      name?: string | null;

      /** MethodDescriptorProto inputType */
      inputType?: string | null;

      /** MethodDescriptorProto outputType */
      outputType?: string | null;

      /** MethodDescriptorProto options */
      options?: google.protobuf.IMethodOptions | null;

      /** MethodDescriptorProto clientStreaming */
      clientStreaming?: boolean | null;

      /** MethodDescriptorProto serverStreaming */
      serverStreaming?: boolean | null;
    }

    /** Represents a MethodDescriptorProto. */
    class MethodDescriptorProto implements IMethodDescriptorProto {
      /**
       * Constructs a new MethodDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IMethodDescriptorProto);

      /** MethodDescriptorProto name. */
      public name: string;

      /** MethodDescriptorProto inputType. */
      public inputType: string;

      /** MethodDescriptorProto outputType. */
      public outputType: string;

      /** MethodDescriptorProto options. */
      public options?: google.protobuf.IMethodOptions | null;

      /** MethodDescriptorProto clientStreaming. */
      public clientStreaming: boolean;

      /** MethodDescriptorProto serverStreaming. */
      public serverStreaming: boolean;

      /**
       * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
       * @param message MethodDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IMethodDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MethodDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns MethodDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.MethodDescriptorProto;

      /**
       * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns MethodDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.MethodDescriptorProto;

      /**
       * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
       * @param message MethodDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.MethodDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MethodDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileOptions. */
    interface IFileOptions {
      /** FileOptions javaPackage */
      javaPackage?: string | null;

      /** FileOptions javaOuterClassname */
      javaOuterClassname?: string | null;

      /** FileOptions javaMultipleFiles */
      javaMultipleFiles?: boolean | null;

      /** FileOptions javaGenerateEqualsAndHash */
      javaGenerateEqualsAndHash?: boolean | null;

      /** FileOptions javaStringCheckUtf8 */
      javaStringCheckUtf8?: boolean | null;

      /** FileOptions optimizeFor */
      optimizeFor?: google.protobuf.FileOptions.OptimizeMode | null;

      /** FileOptions goPackage */
      goPackage?: string | null;

      /** FileOptions ccGenericServices */
      ccGenericServices?: boolean | null;

      /** FileOptions javaGenericServices */
      javaGenericServices?: boolean | null;

      /** FileOptions pyGenericServices */
      pyGenericServices?: boolean | null;

      /** FileOptions deprecated */
      deprecated?: boolean | null;

      /** FileOptions ccEnableArenas */
      ccEnableArenas?: boolean | null;

      /** FileOptions objcClassPrefix */
      objcClassPrefix?: string | null;

      /** FileOptions csharpNamespace */
      csharpNamespace?: string | null;

      /** FileOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents a FileOptions. */
    class FileOptions implements IFileOptions {
      /**
       * Constructs a new FileOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFileOptions);

      /** FileOptions javaPackage. */
      public javaPackage: string;

      /** FileOptions javaOuterClassname. */
      public javaOuterClassname: string;

      /** FileOptions javaMultipleFiles. */
      public javaMultipleFiles: boolean;

      /** FileOptions javaGenerateEqualsAndHash. */
      public javaGenerateEqualsAndHash: boolean;

      /** FileOptions javaStringCheckUtf8. */
      public javaStringCheckUtf8: boolean;

      /** FileOptions optimizeFor. */
      public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

      /** FileOptions goPackage. */
      public goPackage: string;

      /** FileOptions ccGenericServices. */
      public ccGenericServices: boolean;

      /** FileOptions javaGenericServices. */
      public javaGenericServices: boolean;

      /** FileOptions pyGenericServices. */
      public pyGenericServices: boolean;

      /** FileOptions deprecated. */
      public deprecated: boolean;

      /** FileOptions ccEnableArenas. */
      public ccEnableArenas: boolean;

      /** FileOptions objcClassPrefix. */
      public objcClassPrefix: string;

      /** FileOptions csharpNamespace. */
      public csharpNamespace: string;

      /** FileOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
       * @param message FileOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IFileOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FileOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FileOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FileOptions;

      /**
       * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FileOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FileOptions;

      /**
       * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
       * @param message FileOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FileOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FileOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace FileOptions {
      /** OptimizeMode enum. */
      enum OptimizeMode {
        SPEED = 1,
        CODE_SIZE = 2,
        LITE_RUNTIME = 3,
      }
    }

    /** Properties of a MessageOptions. */
    interface IMessageOptions {
      /** MessageOptions messageSetWireFormat */
      messageSetWireFormat?: boolean | null;

      /** MessageOptions noStandardDescriptorAccessor */
      noStandardDescriptorAccessor?: boolean | null;

      /** MessageOptions deprecated */
      deprecated?: boolean | null;

      /** MessageOptions mapEntry */
      mapEntry?: boolean | null;

      /** MessageOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents a MessageOptions. */
    class MessageOptions implements IMessageOptions {
      /**
       * Constructs a new MessageOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IMessageOptions);

      /** MessageOptions messageSetWireFormat. */
      public messageSetWireFormat: boolean;

      /** MessageOptions noStandardDescriptorAccessor. */
      public noStandardDescriptorAccessor: boolean;

      /** MessageOptions deprecated. */
      public deprecated: boolean;

      /** MessageOptions mapEntry. */
      public mapEntry: boolean;

      /** MessageOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
       * @param message MessageOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IMessageOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MessageOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns MessageOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.MessageOptions;

      /**
       * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns MessageOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.MessageOptions;

      /**
       * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
       * @param message MessageOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.MessageOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MessageOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a FieldOptions. */
    interface IFieldOptions {
      /** FieldOptions ctype */
      ctype?: google.protobuf.FieldOptions.CType | null;

      /** FieldOptions packed */
      packed?: boolean | null;

      /** FieldOptions jstype */
      jstype?: google.protobuf.FieldOptions.JSType | null;

      /** FieldOptions lazy */
      lazy?: boolean | null;

      /** FieldOptions deprecated */
      deprecated?: boolean | null;

      /** FieldOptions weak */
      weak?: boolean | null;

      /** FieldOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents a FieldOptions. */
    class FieldOptions implements IFieldOptions {
      /**
       * Constructs a new FieldOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFieldOptions);

      /** FieldOptions ctype. */
      public ctype: google.protobuf.FieldOptions.CType;

      /** FieldOptions packed. */
      public packed: boolean;

      /** FieldOptions jstype. */
      public jstype: google.protobuf.FieldOptions.JSType;

      /** FieldOptions lazy. */
      public lazy: boolean;

      /** FieldOptions deprecated. */
      public deprecated: boolean;

      /** FieldOptions weak. */
      public weak: boolean;

      /** FieldOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
       * @param message FieldOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IFieldOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FieldOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FieldOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FieldOptions;

      /**
       * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FieldOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FieldOptions;

      /**
       * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
       * @param message FieldOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FieldOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FieldOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace FieldOptions {
      /** CType enum. */
      enum CType {
        STRING = 0,
        CORD = 1,
        STRING_PIECE = 2,
      }

      /** JSType enum. */
      enum JSType {
        JS_NORMAL = 0,
        JS_STRING = 1,
        JS_NUMBER = 2,
      }
    }

    /** Properties of an OneofOptions. */
    interface IOneofOptions {
      /** OneofOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents an OneofOptions. */
    class OneofOptions implements IOneofOptions {
      /**
       * Constructs a new OneofOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IOneofOptions);

      /** OneofOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
       * @param message OneofOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IOneofOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an OneofOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns OneofOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.OneofOptions;

      /**
       * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns OneofOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.OneofOptions;

      /**
       * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
       * @param message OneofOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.OneofOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this OneofOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnumOptions. */
    interface IEnumOptions {
      /** EnumOptions allowAlias */
      allowAlias?: boolean | null;

      /** EnumOptions deprecated */
      deprecated?: boolean | null;

      /** EnumOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents an EnumOptions. */
    class EnumOptions implements IEnumOptions {
      /**
       * Constructs a new EnumOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IEnumOptions);

      /** EnumOptions allowAlias. */
      public allowAlias: boolean;

      /** EnumOptions deprecated. */
      public deprecated: boolean;

      /** EnumOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
       * @param message EnumOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IEnumOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an EnumOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EnumOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.EnumOptions;

      /**
       * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EnumOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.EnumOptions;

      /**
       * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
       * @param message EnumOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.EnumOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this EnumOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnumValueOptions. */
    interface IEnumValueOptions {
      /** EnumValueOptions deprecated */
      deprecated?: boolean | null;

      /** EnumValueOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents an EnumValueOptions. */
    class EnumValueOptions implements IEnumValueOptions {
      /**
       * Constructs a new EnumValueOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IEnumValueOptions);

      /** EnumValueOptions deprecated. */
      public deprecated: boolean;

      /** EnumValueOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
       * @param message EnumValueOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IEnumValueOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an EnumValueOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EnumValueOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.EnumValueOptions;

      /**
       * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EnumValueOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.EnumValueOptions;

      /**
       * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
       * @param message EnumValueOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.EnumValueOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this EnumValueOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceOptions. */
    interface IServiceOptions {
      /** ServiceOptions deprecated */
      deprecated?: boolean | null;

      /** ServiceOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;
    }

    /** Represents a ServiceOptions. */
    class ServiceOptions implements IServiceOptions {
      /**
       * Constructs a new ServiceOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IServiceOptions);

      /** ServiceOptions deprecated. */
      public deprecated: boolean;

      /** ServiceOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
       * @param message ServiceOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IServiceOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a ServiceOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ServiceOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.ServiceOptions;

      /**
       * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ServiceOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.ServiceOptions;

      /**
       * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
       * @param message ServiceOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.ServiceOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ServiceOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MethodOptions. */
    interface IMethodOptions {
      /** MethodOptions deprecated */
      deprecated?: boolean | null;

      /** MethodOptions uninterpretedOption */
      uninterpretedOption?: google.protobuf.IUninterpretedOption[] | null;

      /** MethodOptions .protocol.harmonytypes.v1.metadata */
      ".protocol.harmonytypes.v1.metadata"?: protocol.harmonytypes.v1.IHarmonyMethodMetadata | null;
    }

    /** Represents a MethodOptions. */
    class MethodOptions implements IMethodOptions {
      /**
       * Constructs a new MethodOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IMethodOptions);

      /** MethodOptions deprecated. */
      public deprecated: boolean;

      /** MethodOptions uninterpretedOption. */
      public uninterpretedOption: google.protobuf.IUninterpretedOption[];

      /**
       * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
       * @param message MethodOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IMethodOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MethodOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns MethodOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.MethodOptions;

      /**
       * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns MethodOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.MethodOptions;

      /**
       * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
       * @param message MethodOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.MethodOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MethodOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an UninterpretedOption. */
    interface IUninterpretedOption {
      /** UninterpretedOption name */
      name?: google.protobuf.UninterpretedOption.INamePart[] | null;

      /** UninterpretedOption identifierValue */
      identifierValue?: string | null;

      /** UninterpretedOption positiveIntValue */
      positiveIntValue?: number | null;

      /** UninterpretedOption negativeIntValue */
      negativeIntValue?: number | null;

      /** UninterpretedOption doubleValue */
      doubleValue?: number | null;

      /** UninterpretedOption stringValue */
      stringValue?: Uint8Array | null;

      /** UninterpretedOption aggregateValue */
      aggregateValue?: string | null;
    }

    /** Represents an UninterpretedOption. */
    class UninterpretedOption implements IUninterpretedOption {
      /**
       * Constructs a new UninterpretedOption.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IUninterpretedOption);

      /** UninterpretedOption name. */
      public name: google.protobuf.UninterpretedOption.INamePart[];

      /** UninterpretedOption identifierValue. */
      public identifierValue: string;

      /** UninterpretedOption positiveIntValue. */
      public positiveIntValue: number;

      /** UninterpretedOption negativeIntValue. */
      public negativeIntValue: number;

      /** UninterpretedOption doubleValue. */
      public doubleValue: number;

      /** UninterpretedOption stringValue. */
      public stringValue: Uint8Array;

      /** UninterpretedOption aggregateValue. */
      public aggregateValue: string;

      /**
       * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
       * @param message UninterpretedOption message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IUninterpretedOption,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an UninterpretedOption message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns UninterpretedOption
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.UninterpretedOption;

      /**
       * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns UninterpretedOption
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.UninterpretedOption;

      /**
       * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
       * @param message UninterpretedOption
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.UninterpretedOption,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this UninterpretedOption to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace UninterpretedOption {
      /** Properties of a NamePart. */
      interface INamePart {
        /** NamePart namePart */
        namePart: string;

        /** NamePart isExtension */
        isExtension: boolean;
      }

      /** Represents a NamePart. */
      class NamePart implements INamePart {
        /**
         * Constructs a new NamePart.
         * @param [properties] Properties to set
         */
        constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

        /** NamePart namePart. */
        public namePart: string;

        /** NamePart isExtension. */
        public isExtension: boolean;

        /**
         * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
         * @param message NamePart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.UninterpretedOption.INamePart,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a NamePart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NamePart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.UninterpretedOption.NamePart;

        /**
         * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NamePart
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.UninterpretedOption.NamePart;

        /**
         * Creates a plain object from a NamePart message. Also converts values to other types if specified.
         * @param message NamePart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.UninterpretedOption.NamePart,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this NamePart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }

    /** Properties of a SourceCodeInfo. */
    interface ISourceCodeInfo {
      /** SourceCodeInfo location */
      location?: google.protobuf.SourceCodeInfo.ILocation[] | null;
    }

    /** Represents a SourceCodeInfo. */
    class SourceCodeInfo implements ISourceCodeInfo {
      /**
       * Constructs a new SourceCodeInfo.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.ISourceCodeInfo);

      /** SourceCodeInfo location. */
      public location: google.protobuf.SourceCodeInfo.ILocation[];

      /**
       * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
       * @param message SourceCodeInfo message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.ISourceCodeInfo,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a SourceCodeInfo message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns SourceCodeInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.SourceCodeInfo;

      /**
       * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns SourceCodeInfo
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.SourceCodeInfo;

      /**
       * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
       * @param message SourceCodeInfo
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.SourceCodeInfo,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this SourceCodeInfo to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace SourceCodeInfo {
      /** Properties of a Location. */
      interface ILocation {
        /** Location path */
        path?: number[] | null;

        /** Location span */
        span?: number[] | null;

        /** Location leadingComments */
        leadingComments?: string | null;

        /** Location trailingComments */
        trailingComments?: string | null;

        /** Location leadingDetachedComments */
        leadingDetachedComments?: string[] | null;
      }

      /** Represents a Location. */
      class Location implements ILocation {
        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

        /** Location path. */
        public path: number[];

        /** Location span. */
        public span: number[];

        /** Location leadingComments. */
        public leadingComments: string;

        /** Location trailingComments. */
        public trailingComments: string;

        /** Location leadingDetachedComments. */
        public leadingDetachedComments: string[];

        /**
         * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.SourceCodeInfo.ILocation,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.SourceCodeInfo.Location;

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Location
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.SourceCodeInfo.Location;

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.SourceCodeInfo.Location,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Location to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }

    /** Properties of a GeneratedCodeInfo. */
    interface IGeneratedCodeInfo {
      /** GeneratedCodeInfo annotation */
      annotation?: google.protobuf.GeneratedCodeInfo.IAnnotation[] | null;
    }

    /** Represents a GeneratedCodeInfo. */
    class GeneratedCodeInfo implements IGeneratedCodeInfo {
      /**
       * Constructs a new GeneratedCodeInfo.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IGeneratedCodeInfo);

      /** GeneratedCodeInfo annotation. */
      public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

      /**
       * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
       * @param message GeneratedCodeInfo message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.IGeneratedCodeInfo,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns GeneratedCodeInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.GeneratedCodeInfo;

      /**
       * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns GeneratedCodeInfo
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.GeneratedCodeInfo;

      /**
       * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
       * @param message GeneratedCodeInfo
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.GeneratedCodeInfo,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this GeneratedCodeInfo to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace GeneratedCodeInfo {
      /** Properties of an Annotation. */
      interface IAnnotation {
        /** Annotation path */
        path?: number[] | null;

        /** Annotation sourceFile */
        sourceFile?: string | null;

        /** Annotation begin */
        begin?: number | null;

        /** Annotation end */
        end?: number | null;
      }

      /** Represents an Annotation. */
      class Annotation implements IAnnotation {
        /**
         * Constructs a new Annotation.
         * @param [properties] Properties to set
         */
        constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

        /** Annotation path. */
        public path: number[];

        /** Annotation sourceFile. */
        public sourceFile: string;

        /** Annotation begin. */
        public begin: number;

        /** Annotation end. */
        public end: number;

        /**
         * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
         * @param message Annotation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.GeneratedCodeInfo.IAnnotation,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Annotation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Annotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.GeneratedCodeInfo.Annotation;

        /**
         * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Annotation
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.GeneratedCodeInfo.Annotation;

        /**
         * Creates a plain object from an Annotation message. Also converts values to other types if specified.
         * @param message Annotation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.GeneratedCodeInfo.Annotation,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Annotation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }
}
