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
        guildId?: number | Long | null;

        /** QueryPermissionsRequest channelId */
        channelId?: number | Long | null;

        /** QueryPermissionsRequest checkFor */
        checkFor?: string | null;

        /** QueryPermissionsRequest as */
        as?: number | Long | null;
      }

      /** Represents a QueryPermissionsRequest. */
      class QueryPermissionsRequest implements IQueryPermissionsRequest {
        /**
         * Constructs a new QueryPermissionsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IQueryPermissionsRequest);

        /** QueryPermissionsRequest guildId. */
        public guildId: number | Long;

        /** QueryPermissionsRequest channelId. */
        public channelId: number | Long;

        /** QueryPermissionsRequest checkFor. */
        public checkFor: string;

        /** QueryPermissionsRequest as. */
        public as: number | Long;

        /**
         * Creates a new QueryPermissionsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryPermissionsRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IQueryPermissionsRequest
        ): protocol.chat.v1.QueryPermissionsRequest;

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
         * Encodes the specified QueryPermissionsRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.QueryPermissionsRequest.verify|verify} messages.
         * @param message QueryPermissionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a QueryPermissionsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryPermissionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.QueryPermissionsRequest;

        /**
         * Verifies a QueryPermissionsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new QueryPermissionsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryPermissionsResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IQueryPermissionsResponse
        ): protocol.chat.v1.QueryPermissionsResponse;

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
         * Encodes the specified QueryPermissionsResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.QueryPermissionsResponse.verify|verify} messages.
         * @param message QueryPermissionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a QueryPermissionsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryPermissionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.QueryPermissionsResponse;

        /**
         * Verifies a QueryPermissionsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new Permission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Permission instance
         */
        public static create(
          properties?: protocol.chat.v1.IPermission
        ): protocol.chat.v1.Permission;

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
         * Encodes the specified Permission message, length delimited. Does not implicitly {@link protocol.chat.v1.Permission.verify|verify} messages.
         * @param message Permission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a Permission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Permission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.Permission;

        /**
         * Verifies a Permission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new PermissionList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PermissionList instance
         */
        public static create(
          properties?: protocol.chat.v1.IPermissionList
        ): protocol.chat.v1.PermissionList;

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
         * Encodes the specified PermissionList message, length delimited. Does not implicitly {@link protocol.chat.v1.PermissionList.verify|verify} messages.
         * @param message PermissionList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a PermissionList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PermissionList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.PermissionList;

        /**
         * Verifies a PermissionList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** SetPermissionsRequest channelId */
        channelId?: number | Long | null;

        /** SetPermissionsRequest roleId */
        roleId?: number | Long | null;

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
        public guildId: number | Long;

        /** SetPermissionsRequest channelId. */
        public channelId: number | Long;

        /** SetPermissionsRequest roleId. */
        public roleId: number | Long;

        /** SetPermissionsRequest perms. */
        public perms?: protocol.chat.v1.IPermissionList | null;

        /**
         * Creates a new SetPermissionsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetPermissionsRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.ISetPermissionsRequest
        ): protocol.chat.v1.SetPermissionsRequest;

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
         * Encodes the specified SetPermissionsRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.SetPermissionsRequest.verify|verify} messages.
         * @param message SetPermissionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a SetPermissionsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetPermissionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.SetPermissionsRequest;

        /**
         * Verifies a SetPermissionsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** GetPermissionsRequest channelId */
        channelId?: number | Long | null;

        /** GetPermissionsRequest roleId */
        roleId?: number | Long | null;
      }

      /** Represents a GetPermissionsRequest. */
      class GetPermissionsRequest implements IGetPermissionsRequest {
        /**
         * Constructs a new GetPermissionsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetPermissionsRequest);

        /** GetPermissionsRequest guildId. */
        public guildId: number | Long;

        /** GetPermissionsRequest channelId. */
        public channelId: number | Long;

        /** GetPermissionsRequest roleId. */
        public roleId: number | Long;

        /**
         * Creates a new GetPermissionsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPermissionsRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetPermissionsRequest
        ): protocol.chat.v1.GetPermissionsRequest;

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
         * Encodes the specified GetPermissionsRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetPermissionsRequest.verify|verify} messages.
         * @param message GetPermissionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetPermissionsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPermissionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetPermissionsRequest;

        /**
         * Verifies a GetPermissionsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetPermissionsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPermissionsResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetPermissionsResponse
        ): protocol.chat.v1.GetPermissionsResponse;

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
         * Encodes the specified GetPermissionsResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetPermissionsResponse.verify|verify} messages.
         * @param message GetPermissionsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetPermissionsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPermissionsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetPermissionsResponse;

        /**
         * Verifies a GetPermissionsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        roleId?: number | Long | null;

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
        public roleId: number | Long;

        /** Role name. */
        public name: string;

        /** Role color. */
        public color: number;

        /** Role hoist. */
        public hoist: boolean;

        /** Role pingable. */
        public pingable: boolean;

        /**
         * Creates a new Role instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Role instance
         */
        public static create(
          properties?: protocol.chat.v1.IRole
        ): protocol.chat.v1.Role;

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
         * Encodes the specified Role message, length delimited. Does not implicitly {@link protocol.chat.v1.Role.verify|verify} messages.
         * @param message Role message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a Role message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.Role;

        /**
         * Verifies a Role message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** MoveRoleRequest roleId */
        roleId?: number | Long | null;

        /** MoveRoleRequest beforeId */
        beforeId?: number | Long | null;

        /** MoveRoleRequest afterId */
        afterId?: number | Long | null;
      }

      /** Represents a MoveRoleRequest. */
      class MoveRoleRequest implements IMoveRoleRequest {
        /**
         * Constructs a new MoveRoleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IMoveRoleRequest);

        /** MoveRoleRequest guildId. */
        public guildId: number | Long;

        /** MoveRoleRequest roleId. */
        public roleId: number | Long;

        /** MoveRoleRequest beforeId. */
        public beforeId: number | Long;

        /** MoveRoleRequest afterId. */
        public afterId: number | Long;

        /**
         * Creates a new MoveRoleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoveRoleRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IMoveRoleRequest
        ): protocol.chat.v1.MoveRoleRequest;

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
         * Encodes the specified MoveRoleRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.MoveRoleRequest.verify|verify} messages.
         * @param message MoveRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a MoveRoleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoveRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.MoveRoleRequest;

        /**
         * Verifies a MoveRoleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new MoveRoleResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoveRoleResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IMoveRoleResponse
        ): protocol.chat.v1.MoveRoleResponse;

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
         * Encodes the specified MoveRoleResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.MoveRoleResponse.verify|verify} messages.
         * @param message MoveRoleResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a MoveRoleResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoveRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.MoveRoleResponse;

        /**
         * Verifies a MoveRoleResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;
      }

      /** Represents a GetGuildRolesRequest. */
      class GetGuildRolesRequest implements IGetGuildRolesRequest {
        /**
         * Constructs a new GetGuildRolesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildRolesRequest);

        /** GetGuildRolesRequest guildId. */
        public guildId: number | Long;

        /**
         * Creates a new GetGuildRolesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuildRolesRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetGuildRolesRequest
        ): protocol.chat.v1.GetGuildRolesRequest;

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
         * Encodes the specified GetGuildRolesRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildRolesRequest.verify|verify} messages.
         * @param message GetGuildRolesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetGuildRolesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuildRolesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetGuildRolesRequest;

        /**
         * Verifies a GetGuildRolesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetGuildRolesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuildRolesResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetGuildRolesResponse
        ): protocol.chat.v1.GetGuildRolesResponse;

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
         * Encodes the specified GetGuildRolesResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildRolesResponse.verify|verify} messages.
         * @param message GetGuildRolesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetGuildRolesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuildRolesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetGuildRolesResponse;

        /**
         * Verifies a GetGuildRolesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

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
        public guildId: number | Long;

        /** AddGuildRoleRequest role. */
        public role?: protocol.chat.v1.IRole | null;

        /**
         * Creates a new AddGuildRoleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddGuildRoleRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IAddGuildRoleRequest
        ): protocol.chat.v1.AddGuildRoleRequest;

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
         * Encodes the specified AddGuildRoleRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.AddGuildRoleRequest.verify|verify} messages.
         * @param message AddGuildRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an AddGuildRoleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddGuildRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.AddGuildRoleRequest;

        /**
         * Verifies an AddGuildRoleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        roleId?: number | Long | null;
      }

      /** Represents an AddGuildRoleResponse. */
      class AddGuildRoleResponse implements IAddGuildRoleResponse {
        /**
         * Constructs a new AddGuildRoleResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IAddGuildRoleResponse);

        /** AddGuildRoleResponse roleId. */
        public roleId: number | Long;

        /**
         * Creates a new AddGuildRoleResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddGuildRoleResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IAddGuildRoleResponse
        ): protocol.chat.v1.AddGuildRoleResponse;

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
         * Encodes the specified AddGuildRoleResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.AddGuildRoleResponse.verify|verify} messages.
         * @param message AddGuildRoleResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an AddGuildRoleResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddGuildRoleResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.AddGuildRoleResponse;

        /**
         * Verifies an AddGuildRoleResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** DeleteGuildRoleRequest roleId */
        roleId?: number | Long | null;
      }

      /** Represents a DeleteGuildRoleRequest. */
      class DeleteGuildRoleRequest implements IDeleteGuildRoleRequest {
        /**
         * Constructs a new DeleteGuildRoleRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDeleteGuildRoleRequest);

        /** DeleteGuildRoleRequest guildId. */
        public guildId: number | Long;

        /** DeleteGuildRoleRequest roleId. */
        public roleId: number | Long;

        /**
         * Creates a new DeleteGuildRoleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteGuildRoleRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IDeleteGuildRoleRequest
        ): protocol.chat.v1.DeleteGuildRoleRequest;

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
         * Encodes the specified DeleteGuildRoleRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.DeleteGuildRoleRequest.verify|verify} messages.
         * @param message DeleteGuildRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a DeleteGuildRoleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteGuildRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.DeleteGuildRoleRequest;

        /**
         * Verifies a DeleteGuildRoleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

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
        public guildId: number | Long;

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
         * Creates a new ModifyGuildRoleRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifyGuildRoleRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IModifyGuildRoleRequest
        ): protocol.chat.v1.ModifyGuildRoleRequest;

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
         * Encodes the specified ModifyGuildRoleRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.ModifyGuildRoleRequest.verify|verify} messages.
         * @param message ModifyGuildRoleRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a ModifyGuildRoleRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyGuildRoleRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.ModifyGuildRoleRequest;

        /**
         * Verifies a ModifyGuildRoleRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** ManageUserRolesRequest userId */
        userId?: number | Long | null;

        /** ManageUserRolesRequest giveRoleIds */
        giveRoleIds?: (number | Long)[] | null;

        /** ManageUserRolesRequest takeRoleIds */
        takeRoleIds?: (number | Long)[] | null;
      }

      /** Represents a ManageUserRolesRequest. */
      class ManageUserRolesRequest implements IManageUserRolesRequest {
        /**
         * Constructs a new ManageUserRolesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IManageUserRolesRequest);

        /** ManageUserRolesRequest guildId. */
        public guildId: number | Long;

        /** ManageUserRolesRequest userId. */
        public userId: number | Long;

        /** ManageUserRolesRequest giveRoleIds. */
        public giveRoleIds: (number | Long)[];

        /** ManageUserRolesRequest takeRoleIds. */
        public takeRoleIds: (number | Long)[];

        /**
         * Creates a new ManageUserRolesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ManageUserRolesRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IManageUserRolesRequest
        ): protocol.chat.v1.ManageUserRolesRequest;

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
         * Encodes the specified ManageUserRolesRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.ManageUserRolesRequest.verify|verify} messages.
         * @param message ManageUserRolesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a ManageUserRolesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ManageUserRolesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.ManageUserRolesRequest;

        /**
         * Verifies a ManageUserRolesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** GetUserRolesRequest userId */
        userId?: number | Long | null;
      }

      /** Represents a GetUserRolesRequest. */
      class GetUserRolesRequest implements IGetUserRolesRequest {
        /**
         * Constructs a new GetUserRolesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetUserRolesRequest);

        /** GetUserRolesRequest guildId. */
        public guildId: number | Long;

        /** GetUserRolesRequest userId. */
        public userId: number | Long;

        /**
         * Creates a new GetUserRolesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserRolesRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetUserRolesRequest
        ): protocol.chat.v1.GetUserRolesRequest;

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
         * Encodes the specified GetUserRolesRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetUserRolesRequest.verify|verify} messages.
         * @param message GetUserRolesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetUserRolesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserRolesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetUserRolesRequest;

        /**
         * Verifies a GetUserRolesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        roles?: (number | Long)[] | null;
      }

      /** Represents a GetUserRolesResponse. */
      class GetUserRolesResponse implements IGetUserRolesResponse {
        /**
         * Constructs a new GetUserRolesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetUserRolesResponse);

        /** GetUserRolesResponse roles. */
        public roles: (number | Long)[];

        /**
         * Creates a new GetUserRolesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserRolesResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetUserRolesResponse
        ): protocol.chat.v1.GetUserRolesResponse;

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
         * Encodes the specified GetUserRolesResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetUserRolesResponse.verify|verify} messages.
         * @param message GetUserRolesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetUserRolesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserRolesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetUserRolesResponse;

        /**
         * Verifies a GetUserRolesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new CreateGuildRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateGuildRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.ICreateGuildRequest
        ): protocol.chat.v1.CreateGuildRequest;

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
         * Encodes the specified CreateGuildRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.CreateGuildRequest.verify|verify} messages.
         * @param message CreateGuildRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a CreateGuildRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateGuildRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.CreateGuildRequest;

        /**
         * Verifies a CreateGuildRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;
      }

      /** Represents a CreateGuildResponse. */
      class CreateGuildResponse implements ICreateGuildResponse {
        /**
         * Constructs a new CreateGuildResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ICreateGuildResponse);

        /** CreateGuildResponse guildId. */
        public guildId: number | Long;

        /**
         * Creates a new CreateGuildResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateGuildResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.ICreateGuildResponse
        ): protocol.chat.v1.CreateGuildResponse;

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
         * Encodes the specified CreateGuildResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.CreateGuildResponse.verify|verify} messages.
         * @param message CreateGuildResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a CreateGuildResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.CreateGuildResponse;

        /**
         * Verifies a CreateGuildResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

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
        public guildId: number | Long;

        /** CreateInviteRequest name. */
        public name: string;

        /** CreateInviteRequest possibleUses. */
        public possibleUses: number;

        /**
         * Creates a new CreateInviteRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateInviteRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.ICreateInviteRequest
        ): protocol.chat.v1.CreateInviteRequest;

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
         * Encodes the specified CreateInviteRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.CreateInviteRequest.verify|verify} messages.
         * @param message CreateInviteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a CreateInviteRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateInviteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.CreateInviteRequest;

        /**
         * Verifies a CreateInviteRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new CreateInviteResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateInviteResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.ICreateInviteResponse
        ): protocol.chat.v1.CreateInviteResponse;

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
         * Encodes the specified CreateInviteResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.CreateInviteResponse.verify|verify} messages.
         * @param message CreateInviteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a CreateInviteResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateInviteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.CreateInviteResponse;

        /**
         * Verifies a CreateInviteResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetGuildListRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuildListRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetGuildListRequest
        ): protocol.chat.v1.GetGuildListRequest;

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
         * Encodes the specified GetGuildListRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildListRequest.verify|verify} messages.
         * @param message GetGuildListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetGuildListRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuildListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetGuildListRequest;

        /**
         * Verifies a GetGuildListRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetGuildListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuildListResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetGuildListResponse
        ): protocol.chat.v1.GetGuildListResponse;

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
         * Encodes the specified GetGuildListResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildListResponse.verify|verify} messages.
         * @param message GetGuildListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetGuildListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuildListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetGuildListResponse;

        /**
         * Verifies a GetGuildListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
          guildId?: number | Long | null;

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
          public guildId: number | Long;

          /** GuildListEntry host. */
          public host: string;

          /**
           * Creates a new GuildListEntry instance using the specified properties.
           * @param [properties] Properties to set
           * @returns GuildListEntry instance
           */
          public static create(
            properties?: protocol.chat.v1.GetGuildListResponse.IGuildListEntry
          ): protocol.chat.v1.GetGuildListResponse.GuildListEntry;

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
           * Encodes the specified GuildListEntry message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildListResponse.GuildListEntry.verify|verify} messages.
           * @param message GuildListEntry message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a GuildListEntry message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns GuildListEntry
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.GetGuildListResponse.GuildListEntry;

          /**
           * Verifies a GuildListEntry message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;
      }

      /** Represents a GetGuildRequest. */
      class GetGuildRequest implements IGetGuildRequest {
        /**
         * Constructs a new GetGuildRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildRequest);

        /** GetGuildRequest guildId. */
        public guildId: number | Long;

        /**
         * Creates a new GetGuildRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuildRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetGuildRequest
        ): protocol.chat.v1.GetGuildRequest;

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
         * Encodes the specified GetGuildRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildRequest.verify|verify} messages.
         * @param message GetGuildRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetGuildRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuildRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetGuildRequest;

        /**
         * Verifies a GetGuildRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildOwner?: number | Long | null;

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
        public guildOwner: number | Long;

        /** GetGuildResponse guildPicture. */
        public guildPicture: string;

        /**
         * Creates a new GetGuildResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuildResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetGuildResponse
        ): protocol.chat.v1.GetGuildResponse;

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
         * Encodes the specified GetGuildResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildResponse.verify|verify} messages.
         * @param message GetGuildResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetGuildResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetGuildResponse;

        /**
         * Verifies a GetGuildResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;
      }

      /** Represents a GetGuildInvitesRequest. */
      class GetGuildInvitesRequest implements IGetGuildInvitesRequest {
        /**
         * Constructs a new GetGuildInvitesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildInvitesRequest);

        /** GetGuildInvitesRequest guildId. */
        public guildId: number | Long;

        /**
         * Creates a new GetGuildInvitesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuildInvitesRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetGuildInvitesRequest
        ): protocol.chat.v1.GetGuildInvitesRequest;

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
         * Encodes the specified GetGuildInvitesRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildInvitesRequest.verify|verify} messages.
         * @param message GetGuildInvitesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetGuildInvitesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuildInvitesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetGuildInvitesRequest;

        /**
         * Verifies a GetGuildInvitesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetGuildInvitesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuildInvitesResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetGuildInvitesResponse
        ): protocol.chat.v1.GetGuildInvitesResponse;

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
         * Encodes the specified GetGuildInvitesResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildInvitesResponse.verify|verify} messages.
         * @param message GetGuildInvitesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetGuildInvitesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuildInvitesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetGuildInvitesResponse;

        /**
         * Verifies a GetGuildInvitesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
           * Creates a new Invite instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Invite instance
           */
          public static create(
            properties?: protocol.chat.v1.GetGuildInvitesResponse.IInvite
          ): protocol.chat.v1.GetGuildInvitesResponse.Invite;

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
           * Encodes the specified Invite message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildInvitesResponse.Invite.verify|verify} messages.
           * @param message Invite message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes an Invite message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns Invite
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.GetGuildInvitesResponse.Invite;

          /**
           * Verifies an Invite message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;
      }

      /** Represents a GetGuildMembersRequest. */
      class GetGuildMembersRequest implements IGetGuildMembersRequest {
        /**
         * Constructs a new GetGuildMembersRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildMembersRequest);

        /** GetGuildMembersRequest guildId. */
        public guildId: number | Long;

        /**
         * Creates a new GetGuildMembersRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuildMembersRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetGuildMembersRequest
        ): protocol.chat.v1.GetGuildMembersRequest;

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
         * Encodes the specified GetGuildMembersRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildMembersRequest.verify|verify} messages.
         * @param message GetGuildMembersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetGuildMembersRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuildMembersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetGuildMembersRequest;

        /**
         * Verifies a GetGuildMembersRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        members?: (number | Long)[] | null;
      }

      /** Represents a GetGuildMembersResponse. */
      class GetGuildMembersResponse implements IGetGuildMembersResponse {
        /**
         * Constructs a new GetGuildMembersResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildMembersResponse);

        /** GetGuildMembersResponse members. */
        public members: (number | Long)[];

        /**
         * Creates a new GetGuildMembersResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuildMembersResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetGuildMembersResponse
        ): protocol.chat.v1.GetGuildMembersResponse;

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
         * Encodes the specified GetGuildMembersResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildMembersResponse.verify|verify} messages.
         * @param message GetGuildMembersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetGuildMembersResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuildMembersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetGuildMembersResponse;

        /**
         * Verifies a GetGuildMembersResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

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
        public guildId: number | Long;

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
         * Creates a new UpdateGuildInformationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateGuildInformationRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IUpdateGuildInformationRequest
        ): protocol.chat.v1.UpdateGuildInformationRequest;

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
         * Encodes the specified UpdateGuildInformationRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.UpdateGuildInformationRequest.verify|verify} messages.
         * @param message UpdateGuildInformationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an UpdateGuildInformationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateGuildInformationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.UpdateGuildInformationRequest;

        /**
         * Verifies an UpdateGuildInformationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;
      }

      /** Represents a DeleteGuildRequest. */
      class DeleteGuildRequest implements IDeleteGuildRequest {
        /**
         * Constructs a new DeleteGuildRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDeleteGuildRequest);

        /** DeleteGuildRequest guildId. */
        public guildId: number | Long;

        /**
         * Creates a new DeleteGuildRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteGuildRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IDeleteGuildRequest
        ): protocol.chat.v1.DeleteGuildRequest;

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
         * Encodes the specified DeleteGuildRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.DeleteGuildRequest.verify|verify} messages.
         * @param message DeleteGuildRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a DeleteGuildRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteGuildRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.DeleteGuildRequest;

        /**
         * Verifies a DeleteGuildRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

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
        public guildId: number | Long;

        /** DeleteInviteRequest inviteId. */
        public inviteId: string;

        /**
         * Creates a new DeleteInviteRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteInviteRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IDeleteInviteRequest
        ): protocol.chat.v1.DeleteInviteRequest;

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
         * Encodes the specified DeleteInviteRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.DeleteInviteRequest.verify|verify} messages.
         * @param message DeleteInviteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a DeleteInviteRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteInviteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.DeleteInviteRequest;

        /**
         * Verifies a DeleteInviteRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new JoinGuildRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinGuildRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IJoinGuildRequest
        ): protocol.chat.v1.JoinGuildRequest;

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
         * Encodes the specified JoinGuildRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.JoinGuildRequest.verify|verify} messages.
         * @param message JoinGuildRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a JoinGuildRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinGuildRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.JoinGuildRequest;

        /**
         * Verifies a JoinGuildRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;
      }

      /** Represents a JoinGuildResponse. */
      class JoinGuildResponse implements IJoinGuildResponse {
        /**
         * Constructs a new JoinGuildResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IJoinGuildResponse);

        /** JoinGuildResponse guildId. */
        public guildId: number | Long;

        /**
         * Creates a new JoinGuildResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinGuildResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IJoinGuildResponse
        ): protocol.chat.v1.JoinGuildResponse;

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
         * Encodes the specified JoinGuildResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.JoinGuildResponse.verify|verify} messages.
         * @param message JoinGuildResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a JoinGuildResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.JoinGuildResponse;

        /**
         * Verifies a JoinGuildResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new PreviewGuildRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreviewGuildRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IPreviewGuildRequest
        ): protocol.chat.v1.PreviewGuildRequest;

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
         * Encodes the specified PreviewGuildRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.PreviewGuildRequest.verify|verify} messages.
         * @param message PreviewGuildRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a PreviewGuildRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreviewGuildRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.PreviewGuildRequest;

        /**
         * Verifies a PreviewGuildRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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

        /** PreviewGuildResponse memeberCount */
        memeberCount?: number | Long | null;
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

        /** PreviewGuildResponse memeberCount. */
        public memeberCount: number | Long;

        /**
         * Creates a new PreviewGuildResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreviewGuildResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IPreviewGuildResponse
        ): protocol.chat.v1.PreviewGuildResponse;

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
         * Encodes the specified PreviewGuildResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.PreviewGuildResponse.verify|verify} messages.
         * @param message PreviewGuildResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a PreviewGuildResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreviewGuildResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.PreviewGuildResponse;

        /**
         * Verifies a PreviewGuildResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;
      }

      /** Represents a LeaveGuildRequest. */
      class LeaveGuildRequest implements ILeaveGuildRequest {
        /**
         * Constructs a new LeaveGuildRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ILeaveGuildRequest);

        /** LeaveGuildRequest guildId. */
        public guildId: number | Long;

        /**
         * Creates a new LeaveGuildRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveGuildRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.ILeaveGuildRequest
        ): protocol.chat.v1.LeaveGuildRequest;

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
         * Encodes the specified LeaveGuildRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.LeaveGuildRequest.verify|verify} messages.
         * @param message LeaveGuildRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a LeaveGuildRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LeaveGuildRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.LeaveGuildRequest;

        /**
         * Verifies a LeaveGuildRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

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
        public guildId: number | Long;

        /** AddGuildToGuildListRequest homeserver. */
        public homeserver: string;

        /**
         * Creates a new AddGuildToGuildListRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddGuildToGuildListRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IAddGuildToGuildListRequest
        ): protocol.chat.v1.AddGuildToGuildListRequest;

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
         * Encodes the specified AddGuildToGuildListRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.AddGuildToGuildListRequest.verify|verify} messages.
         * @param message AddGuildToGuildListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an AddGuildToGuildListRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddGuildToGuildListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.AddGuildToGuildListRequest;

        /**
         * Verifies an AddGuildToGuildListRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new AddGuildToGuildListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddGuildToGuildListResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IAddGuildToGuildListResponse
        ): protocol.chat.v1.AddGuildToGuildListResponse;

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
         * Encodes the specified AddGuildToGuildListResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.AddGuildToGuildListResponse.verify|verify} messages.
         * @param message AddGuildToGuildListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an AddGuildToGuildListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddGuildToGuildListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.AddGuildToGuildListResponse;

        /**
         * Verifies an AddGuildToGuildListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

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
        public guildId: number | Long;

        /** RemoveGuildFromGuildListRequest homeserver. */
        public homeserver: string;

        /**
         * Creates a new RemoveGuildFromGuildListRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoveGuildFromGuildListRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IRemoveGuildFromGuildListRequest
        ): protocol.chat.v1.RemoveGuildFromGuildListRequest;

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
         * Encodes the specified RemoveGuildFromGuildListRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.RemoveGuildFromGuildListRequest.verify|verify} messages.
         * @param message RemoveGuildFromGuildListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a RemoveGuildFromGuildListRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoveGuildFromGuildListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.RemoveGuildFromGuildListRequest;

        /**
         * Verifies a RemoveGuildFromGuildListRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new RemoveGuildFromGuildListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoveGuildFromGuildListResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IRemoveGuildFromGuildListResponse
        ): protocol.chat.v1.RemoveGuildFromGuildListResponse;

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
         * Encodes the specified RemoveGuildFromGuildListResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.RemoveGuildFromGuildListResponse.verify|verify} messages.
         * @param message RemoveGuildFromGuildListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a RemoveGuildFromGuildListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoveGuildFromGuildListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.RemoveGuildFromGuildListResponse;

        /**
         * Verifies a RemoveGuildFromGuildListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new CreateEmotePackRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateEmotePackRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.ICreateEmotePackRequest
        ): protocol.chat.v1.CreateEmotePackRequest;

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
         * Encodes the specified CreateEmotePackRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.CreateEmotePackRequest.verify|verify} messages.
         * @param message CreateEmotePackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a CreateEmotePackRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateEmotePackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.CreateEmotePackRequest;

        /**
         * Verifies a CreateEmotePackRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        packId?: number | Long | null;
      }

      /** Represents a CreateEmotePackResponse. */
      class CreateEmotePackResponse implements ICreateEmotePackResponse {
        /**
         * Constructs a new CreateEmotePackResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ICreateEmotePackResponse);

        /** CreateEmotePackResponse packId. */
        public packId: number | Long;

        /**
         * Creates a new CreateEmotePackResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateEmotePackResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.ICreateEmotePackResponse
        ): protocol.chat.v1.CreateEmotePackResponse;

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
         * Encodes the specified CreateEmotePackResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.CreateEmotePackResponse.verify|verify} messages.
         * @param message CreateEmotePackResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a CreateEmotePackResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateEmotePackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.CreateEmotePackResponse;

        /**
         * Verifies a CreateEmotePackResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetEmotePacksRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEmotePacksRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetEmotePacksRequest
        ): protocol.chat.v1.GetEmotePacksRequest;

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
         * Encodes the specified GetEmotePacksRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetEmotePacksRequest.verify|verify} messages.
         * @param message GetEmotePacksRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetEmotePacksRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEmotePacksRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetEmotePacksRequest;

        /**
         * Verifies a GetEmotePacksRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetEmotePacksResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEmotePacksResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetEmotePacksResponse
        ): protocol.chat.v1.GetEmotePacksResponse;

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
         * Encodes the specified GetEmotePacksResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetEmotePacksResponse.verify|verify} messages.
         * @param message GetEmotePacksResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetEmotePacksResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEmotePacksResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetEmotePacksResponse;

        /**
         * Verifies a GetEmotePacksResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
          packId?: number | Long | null;

          /** EmotePack packOwner */
          packOwner?: number | Long | null;

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
          public packId: number | Long;

          /** EmotePack packOwner. */
          public packOwner: number | Long;

          /** EmotePack packName. */
          public packName: string;

          /**
           * Creates a new EmotePack instance using the specified properties.
           * @param [properties] Properties to set
           * @returns EmotePack instance
           */
          public static create(
            properties?: protocol.chat.v1.GetEmotePacksResponse.IEmotePack
          ): protocol.chat.v1.GetEmotePacksResponse.EmotePack;

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
           * Encodes the specified EmotePack message, length delimited. Does not implicitly {@link protocol.chat.v1.GetEmotePacksResponse.EmotePack.verify|verify} messages.
           * @param message EmotePack message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes an EmotePack message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns EmotePack
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.GetEmotePacksResponse.EmotePack;

          /**
           * Verifies an EmotePack message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
        packId?: number | Long | null;
      }

      /** Represents a GetEmotePackEmotesRequest. */
      class GetEmotePackEmotesRequest implements IGetEmotePackEmotesRequest {
        /**
         * Constructs a new GetEmotePackEmotesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetEmotePackEmotesRequest);

        /** GetEmotePackEmotesRequest packId. */
        public packId: number | Long;

        /**
         * Creates a new GetEmotePackEmotesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEmotePackEmotesRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetEmotePackEmotesRequest
        ): protocol.chat.v1.GetEmotePackEmotesRequest;

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
         * Encodes the specified GetEmotePackEmotesRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetEmotePackEmotesRequest.verify|verify} messages.
         * @param message GetEmotePackEmotesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetEmotePackEmotesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEmotePackEmotesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetEmotePackEmotesRequest;

        /**
         * Verifies a GetEmotePackEmotesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetEmotePackEmotesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEmotePackEmotesResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetEmotePackEmotesResponse
        ): protocol.chat.v1.GetEmotePackEmotesResponse;

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
         * Encodes the specified GetEmotePackEmotesResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetEmotePackEmotesResponse.verify|verify} messages.
         * @param message GetEmotePackEmotesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetEmotePackEmotesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEmotePackEmotesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetEmotePackEmotesResponse;

        /**
         * Verifies a GetEmotePackEmotesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
           * Creates a new Emote instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Emote instance
           */
          public static create(
            properties?: protocol.chat.v1.GetEmotePackEmotesResponse.IEmote
          ): protocol.chat.v1.GetEmotePackEmotesResponse.Emote;

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
           * Encodes the specified Emote message, length delimited. Does not implicitly {@link protocol.chat.v1.GetEmotePackEmotesResponse.Emote.verify|verify} messages.
           * @param message Emote message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes an Emote message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns Emote
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.GetEmotePackEmotesResponse.Emote;

          /**
           * Verifies an Emote message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
        packId?: number | Long | null;

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
        public packId: number | Long;

        /** AddEmoteToPackRequest imageId. */
        public imageId: string;

        /** AddEmoteToPackRequest name. */
        public name: string;

        /**
         * Creates a new AddEmoteToPackRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddEmoteToPackRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IAddEmoteToPackRequest
        ): protocol.chat.v1.AddEmoteToPackRequest;

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
         * Encodes the specified AddEmoteToPackRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.AddEmoteToPackRequest.verify|verify} messages.
         * @param message AddEmoteToPackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an AddEmoteToPackRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddEmoteToPackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.AddEmoteToPackRequest;

        /**
         * Verifies an AddEmoteToPackRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        packId?: number | Long | null;

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
        public packId: number | Long;

        /** DeleteEmoteFromPackRequest imageId. */
        public imageId: string;

        /**
         * Creates a new DeleteEmoteFromPackRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteEmoteFromPackRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IDeleteEmoteFromPackRequest
        ): protocol.chat.v1.DeleteEmoteFromPackRequest;

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
         * Encodes the specified DeleteEmoteFromPackRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.DeleteEmoteFromPackRequest.verify|verify} messages.
         * @param message DeleteEmoteFromPackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a DeleteEmoteFromPackRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteEmoteFromPackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.DeleteEmoteFromPackRequest;

        /**
         * Verifies a DeleteEmoteFromPackRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        packId?: number | Long | null;
      }

      /** Represents a DeleteEmotePackRequest. */
      class DeleteEmotePackRequest implements IDeleteEmotePackRequest {
        /**
         * Constructs a new DeleteEmotePackRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDeleteEmotePackRequest);

        /** DeleteEmotePackRequest packId. */
        public packId: number | Long;

        /**
         * Creates a new DeleteEmotePackRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteEmotePackRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IDeleteEmotePackRequest
        ): protocol.chat.v1.DeleteEmotePackRequest;

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
         * Encodes the specified DeleteEmotePackRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.DeleteEmotePackRequest.verify|verify} messages.
         * @param message DeleteEmotePackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a DeleteEmotePackRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteEmotePackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.DeleteEmotePackRequest;

        /**
         * Verifies a DeleteEmotePackRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        packId?: number | Long | null;
      }

      /** Represents a DequipEmotePackRequest. */
      class DequipEmotePackRequest implements IDequipEmotePackRequest {
        /**
         * Constructs a new DequipEmotePackRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDequipEmotePackRequest);

        /** DequipEmotePackRequest packId. */
        public packId: number | Long;

        /**
         * Creates a new DequipEmotePackRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DequipEmotePackRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IDequipEmotePackRequest
        ): protocol.chat.v1.DequipEmotePackRequest;

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
         * Encodes the specified DequipEmotePackRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.DequipEmotePackRequest.verify|verify} messages.
         * @param message DequipEmotePackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a DequipEmotePackRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DequipEmotePackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.DequipEmotePackRequest;

        /**
         * Verifies a DequipEmotePackRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** CreateChannelRequest channelName */
        channelName?: string | null;

        /** CreateChannelRequest isCategory */
        isCategory?: boolean | null;

        /** CreateChannelRequest previousId */
        previousId?: number | Long | null;

        /** CreateChannelRequest nextId */
        nextId?: number | Long | null;

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
        public guildId: number | Long;

        /** CreateChannelRequest channelName. */
        public channelName: string;

        /** CreateChannelRequest isCategory. */
        public isCategory: boolean;

        /** CreateChannelRequest previousId. */
        public previousId: number | Long;

        /** CreateChannelRequest nextId. */
        public nextId: number | Long;

        /** CreateChannelRequest metadata. */
        public metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /**
         * Creates a new CreateChannelRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateChannelRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.ICreateChannelRequest
        ): protocol.chat.v1.CreateChannelRequest;

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
         * Encodes the specified CreateChannelRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.CreateChannelRequest.verify|verify} messages.
         * @param message CreateChannelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a CreateChannelRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateChannelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.CreateChannelRequest;

        /**
         * Verifies a CreateChannelRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        channelId?: number | Long | null;
      }

      /** Represents a CreateChannelResponse. */
      class CreateChannelResponse implements ICreateChannelResponse {
        /**
         * Constructs a new CreateChannelResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ICreateChannelResponse);

        /** CreateChannelResponse channelId. */
        public channelId: number | Long;

        /**
         * Creates a new CreateChannelResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateChannelResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.ICreateChannelResponse
        ): protocol.chat.v1.CreateChannelResponse;

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
         * Encodes the specified CreateChannelResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.CreateChannelResponse.verify|verify} messages.
         * @param message CreateChannelResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a CreateChannelResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateChannelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.CreateChannelResponse;

        /**
         * Verifies a CreateChannelResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;
      }

      /** Represents a GetGuildChannelsRequest. */
      class GetGuildChannelsRequest implements IGetGuildChannelsRequest {
        /**
         * Constructs a new GetGuildChannelsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetGuildChannelsRequest);

        /** GetGuildChannelsRequest guildId. */
        public guildId: number | Long;

        /**
         * Creates a new GetGuildChannelsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuildChannelsRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetGuildChannelsRequest
        ): protocol.chat.v1.GetGuildChannelsRequest;

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
         * Encodes the specified GetGuildChannelsRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildChannelsRequest.verify|verify} messages.
         * @param message GetGuildChannelsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetGuildChannelsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuildChannelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetGuildChannelsRequest;

        /**
         * Verifies a GetGuildChannelsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetGuildChannelsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGuildChannelsResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetGuildChannelsResponse
        ): protocol.chat.v1.GetGuildChannelsResponse;

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
         * Encodes the specified GetGuildChannelsResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildChannelsResponse.verify|verify} messages.
         * @param message GetGuildChannelsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetGuildChannelsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGuildChannelsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetGuildChannelsResponse;

        /**
         * Verifies a GetGuildChannelsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
          channelId?: number | Long | null;

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
          public channelId: number | Long;

          /** Channel channelName. */
          public channelName: string;

          /** Channel isCategory. */
          public isCategory: boolean;

          /**
           * Creates a new Channel instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Channel instance
           */
          public static create(
            properties?: protocol.chat.v1.GetGuildChannelsResponse.IChannel
          ): protocol.chat.v1.GetGuildChannelsResponse.Channel;

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
           * Encodes the specified Channel message, length delimited. Does not implicitly {@link protocol.chat.v1.GetGuildChannelsResponse.Channel.verify|verify} messages.
           * @param message Channel message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a Channel message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns Channel
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.GetGuildChannelsResponse.Channel;

          /**
           * Verifies a Channel message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** UpdateChannelInformationRequest channelId */
        channelId?: number | Long | null;

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
        public guildId: number | Long;

        /** UpdateChannelInformationRequest channelId. */
        public channelId: number | Long;

        /** UpdateChannelInformationRequest name. */
        public name: string;

        /** UpdateChannelInformationRequest updateName. */
        public updateName: boolean;

        /** UpdateChannelInformationRequest metadata. */
        public metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /** UpdateChannelInformationRequest updateMetadata. */
        public updateMetadata: boolean;

        /**
         * Creates a new UpdateChannelInformationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateChannelInformationRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IUpdateChannelInformationRequest
        ): protocol.chat.v1.UpdateChannelInformationRequest;

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
         * Encodes the specified UpdateChannelInformationRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.UpdateChannelInformationRequest.verify|verify} messages.
         * @param message UpdateChannelInformationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an UpdateChannelInformationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateChannelInformationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.UpdateChannelInformationRequest;

        /**
         * Verifies an UpdateChannelInformationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** UpdateChannelOrderRequest channelId */
        channelId?: number | Long | null;

        /** UpdateChannelOrderRequest previousId */
        previousId?: number | Long | null;

        /** UpdateChannelOrderRequest nextId */
        nextId?: number | Long | null;
      }

      /** Represents an UpdateChannelOrderRequest. */
      class UpdateChannelOrderRequest implements IUpdateChannelOrderRequest {
        /**
         * Constructs a new UpdateChannelOrderRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IUpdateChannelOrderRequest);

        /** UpdateChannelOrderRequest guildId. */
        public guildId: number | Long;

        /** UpdateChannelOrderRequest channelId. */
        public channelId: number | Long;

        /** UpdateChannelOrderRequest previousId. */
        public previousId: number | Long;

        /** UpdateChannelOrderRequest nextId. */
        public nextId: number | Long;

        /**
         * Creates a new UpdateChannelOrderRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateChannelOrderRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IUpdateChannelOrderRequest
        ): protocol.chat.v1.UpdateChannelOrderRequest;

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
         * Encodes the specified UpdateChannelOrderRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.UpdateChannelOrderRequest.verify|verify} messages.
         * @param message UpdateChannelOrderRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an UpdateChannelOrderRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateChannelOrderRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.UpdateChannelOrderRequest;

        /**
         * Verifies an UpdateChannelOrderRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** DeleteChannelRequest channelId */
        channelId?: number | Long | null;
      }

      /** Represents a DeleteChannelRequest. */
      class DeleteChannelRequest implements IDeleteChannelRequest {
        /**
         * Constructs a new DeleteChannelRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDeleteChannelRequest);

        /** DeleteChannelRequest guildId. */
        public guildId: number | Long;

        /** DeleteChannelRequest channelId. */
        public channelId: number | Long;

        /**
         * Creates a new DeleteChannelRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteChannelRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IDeleteChannelRequest
        ): protocol.chat.v1.DeleteChannelRequest;

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
         * Encodes the specified DeleteChannelRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.DeleteChannelRequest.verify|verify} messages.
         * @param message DeleteChannelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a DeleteChannelRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteChannelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.DeleteChannelRequest;

        /**
         * Verifies a DeleteChannelRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** TypingRequest channelId */
        channelId?: number | Long | null;
      }

      /** Represents a TypingRequest. */
      class TypingRequest implements ITypingRequest {
        /**
         * Constructs a new TypingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ITypingRequest);

        /** TypingRequest guildId. */
        public guildId: number | Long;

        /** TypingRequest channelId. */
        public channelId: number | Long;

        /**
         * Creates a new TypingRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TypingRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.ITypingRequest
        ): protocol.chat.v1.TypingRequest;

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
         * Encodes the specified TypingRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.TypingRequest.verify|verify} messages.
         * @param message TypingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a TypingRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TypingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.TypingRequest;

        /**
         * Verifies a TypingRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** GetChannelMessagesRequest channelId */
        channelId?: number | Long | null;

        /** GetChannelMessagesRequest beforeMessage */
        beforeMessage?: number | Long | null;
      }

      /** Represents a GetChannelMessagesRequest. */
      class GetChannelMessagesRequest implements IGetChannelMessagesRequest {
        /**
         * Constructs a new GetChannelMessagesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetChannelMessagesRequest);

        /** GetChannelMessagesRequest guildId. */
        public guildId: number | Long;

        /** GetChannelMessagesRequest channelId. */
        public channelId: number | Long;

        /** GetChannelMessagesRequest beforeMessage. */
        public beforeMessage: number | Long;

        /**
         * Creates a new GetChannelMessagesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetChannelMessagesRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetChannelMessagesRequest
        ): protocol.chat.v1.GetChannelMessagesRequest;

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
         * Encodes the specified GetChannelMessagesRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetChannelMessagesRequest.verify|verify} messages.
         * @param message GetChannelMessagesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetChannelMessagesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetChannelMessagesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetChannelMessagesRequest;

        /**
         * Verifies a GetChannelMessagesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetChannelMessagesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetChannelMessagesResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetChannelMessagesResponse
        ): protocol.chat.v1.GetChannelMessagesResponse;

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
         * Encodes the specified GetChannelMessagesResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetChannelMessagesResponse.verify|verify} messages.
         * @param message GetChannelMessagesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetChannelMessagesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetChannelMessagesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetChannelMessagesResponse;

        /**
         * Verifies a GetChannelMessagesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** GetMessageRequest channelId */
        channelId?: number | Long | null;

        /** GetMessageRequest messageId */
        messageId?: number | Long | null;
      }

      /** Represents a GetMessageRequest. */
      class GetMessageRequest implements IGetMessageRequest {
        /**
         * Constructs a new GetMessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetMessageRequest);

        /** GetMessageRequest guildId. */
        public guildId: number | Long;

        /** GetMessageRequest channelId. */
        public channelId: number | Long;

        /** GetMessageRequest messageId. */
        public messageId: number | Long;

        /**
         * Creates a new GetMessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMessageRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetMessageRequest
        ): protocol.chat.v1.GetMessageRequest;

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
         * Encodes the specified GetMessageRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetMessageRequest.verify|verify} messages.
         * @param message GetMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetMessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetMessageRequest;

        /**
         * Verifies a GetMessageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetMessageResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMessageResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetMessageResponse
        ): protocol.chat.v1.GetMessageResponse;

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
         * Encodes the specified GetMessageResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetMessageResponse.verify|verify} messages.
         * @param message GetMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetMessageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetMessageResponse;

        /**
         * Verifies a GetMessageResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** UpdateMessageRequest channelId */
        channelId?: number | Long | null;

        /** UpdateMessageRequest messageId */
        messageId?: number | Long | null;

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
        public guildId: number | Long;

        /** UpdateMessageRequest channelId. */
        public channelId: number | Long;

        /** UpdateMessageRequest messageId. */
        public messageId: number | Long;

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
         * Creates a new UpdateMessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateMessageRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IUpdateMessageRequest
        ): protocol.chat.v1.UpdateMessageRequest;

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
         * Encodes the specified UpdateMessageRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.UpdateMessageRequest.verify|verify} messages.
         * @param message UpdateMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an UpdateMessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.UpdateMessageRequest;

        /**
         * Verifies an UpdateMessageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** DeleteMessageRequest channelId */
        channelId?: number | Long | null;

        /** DeleteMessageRequest messageId */
        messageId?: number | Long | null;
      }

      /** Represents a DeleteMessageRequest. */
      class DeleteMessageRequest implements IDeleteMessageRequest {
        /**
         * Constructs a new DeleteMessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IDeleteMessageRequest);

        /** DeleteMessageRequest guildId. */
        public guildId: number | Long;

        /** DeleteMessageRequest channelId. */
        public channelId: number | Long;

        /** DeleteMessageRequest messageId. */
        public messageId: number | Long;

        /**
         * Creates a new DeleteMessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteMessageRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IDeleteMessageRequest
        ): protocol.chat.v1.DeleteMessageRequest;

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
         * Encodes the specified DeleteMessageRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.DeleteMessageRequest.verify|verify} messages.
         * @param message DeleteMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a DeleteMessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.DeleteMessageRequest;

        /**
         * Verifies a DeleteMessageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** TriggerActionRequest channelId */
        channelId?: number | Long | null;

        /** TriggerActionRequest messageId */
        messageId?: number | Long | null;

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
        public guildId: number | Long;

        /** TriggerActionRequest channelId. */
        public channelId: number | Long;

        /** TriggerActionRequest messageId. */
        public messageId: number | Long;

        /** TriggerActionRequest actionId. */
        public actionId: string;

        /** TriggerActionRequest actionData. */
        public actionData: string;

        /**
         * Creates a new TriggerActionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TriggerActionRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.ITriggerActionRequest
        ): protocol.chat.v1.TriggerActionRequest;

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
         * Encodes the specified TriggerActionRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.TriggerActionRequest.verify|verify} messages.
         * @param message TriggerActionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a TriggerActionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TriggerActionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.TriggerActionRequest;

        /**
         * Verifies a TriggerActionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** SendMessageRequest channelId */
        channelId?: number | Long | null;

        /** SendMessageRequest content */
        content?: string | null;

        /** SendMessageRequest actions */
        actions?: protocol.harmonytypes.v1.IAction[] | null;

        /** SendMessageRequest embeds */
        embeds?: protocol.harmonytypes.v1.IEmbed[] | null;

        /** SendMessageRequest attachments */
        attachments?: string[] | null;

        /** SendMessageRequest inReplyTo */
        inReplyTo?: number | Long | null;

        /** SendMessageRequest overrides */
        overrides?: protocol.harmonytypes.v1.IOverride | null;

        /** SendMessageRequest echoId */
        echoId?: number | Long | null;

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
        public guildId: number | Long;

        /** SendMessageRequest channelId. */
        public channelId: number | Long;

        /** SendMessageRequest content. */
        public content: string;

        /** SendMessageRequest actions. */
        public actions: protocol.harmonytypes.v1.IAction[];

        /** SendMessageRequest embeds. */
        public embeds: protocol.harmonytypes.v1.IEmbed[];

        /** SendMessageRequest attachments. */
        public attachments: string[];

        /** SendMessageRequest inReplyTo. */
        public inReplyTo: number | Long;

        /** SendMessageRequest overrides. */
        public overrides?: protocol.harmonytypes.v1.IOverride | null;

        /** SendMessageRequest echoId. */
        public echoId: number | Long;

        /** SendMessageRequest metadata. */
        public metadata?: protocol.harmonytypes.v1.IMetadata | null;

        /**
         * Creates a new SendMessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendMessageRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.ISendMessageRequest
        ): protocol.chat.v1.SendMessageRequest;

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
         * Encodes the specified SendMessageRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.SendMessageRequest.verify|verify} messages.
         * @param message SendMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a SendMessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.SendMessageRequest;

        /**
         * Verifies a SendMessageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        messageId?: number | Long | null;
      }

      /** Represents a SendMessageResponse. */
      class SendMessageResponse implements ISendMessageResponse {
        /**
         * Constructs a new SendMessageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.ISendMessageResponse);

        /** SendMessageResponse messageId. */
        public messageId: number | Long;

        /**
         * Creates a new SendMessageResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendMessageResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.ISendMessageResponse
        ): protocol.chat.v1.SendMessageResponse;

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
         * Encodes the specified SendMessageResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.SendMessageResponse.verify|verify} messages.
         * @param message SendMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a SendMessageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.SendMessageResponse;

        /**
         * Verifies a SendMessageResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new StreamEventsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StreamEventsRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IStreamEventsRequest
        ): protocol.chat.v1.StreamEventsRequest;

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
         * Encodes the specified StreamEventsRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.StreamEventsRequest.verify|verify} messages.
         * @param message StreamEventsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a StreamEventsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StreamEventsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.StreamEventsRequest;

        /**
         * Verifies a StreamEventsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
          guildId?: number | Long | null;
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
          public guildId: number | Long;

          /**
           * Creates a new SubscribeToGuild instance using the specified properties.
           * @param [properties] Properties to set
           * @returns SubscribeToGuild instance
           */
          public static create(
            properties?: protocol.chat.v1.StreamEventsRequest.ISubscribeToGuild
          ): protocol.chat.v1.StreamEventsRequest.SubscribeToGuild;

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
           * Encodes the specified SubscribeToGuild message, length delimited. Does not implicitly {@link protocol.chat.v1.StreamEventsRequest.SubscribeToGuild.verify|verify} messages.
           * @param message SubscribeToGuild message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a SubscribeToGuild message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns SubscribeToGuild
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.StreamEventsRequest.SubscribeToGuild;

          /**
           * Verifies a SubscribeToGuild message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
           * Creates a new SubscribeToActions instance using the specified properties.
           * @param [properties] Properties to set
           * @returns SubscribeToActions instance
           */
          public static create(
            properties?: protocol.chat.v1.StreamEventsRequest.ISubscribeToActions
          ): protocol.chat.v1.StreamEventsRequest.SubscribeToActions;

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
           * Encodes the specified SubscribeToActions message, length delimited. Does not implicitly {@link protocol.chat.v1.StreamEventsRequest.SubscribeToActions.verify|verify} messages.
           * @param message SubscribeToActions message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a SubscribeToActions message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns SubscribeToActions
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.StreamEventsRequest.SubscribeToActions;

          /**
           * Verifies a SubscribeToActions message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
           * Creates a new SubscribeToHomeserverEvents instance using the specified properties.
           * @param [properties] Properties to set
           * @returns SubscribeToHomeserverEvents instance
           */
          public static create(
            properties?: protocol.chat.v1.StreamEventsRequest.ISubscribeToHomeserverEvents
          ): protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents;

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
           * Encodes the specified SubscribeToHomeserverEvents message, length delimited. Does not implicitly {@link protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents.verify|verify} messages.
           * @param message SubscribeToHomeserverEvents message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a SubscribeToHomeserverEvents message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns SubscribeToHomeserverEvents
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.StreamEventsRequest.SubscribeToHomeserverEvents;

          /**
           * Verifies a SubscribeToHomeserverEvents message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new Event instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Event instance
         */
        public static create(
          properties?: protocol.chat.v1.IEvent
        ): protocol.chat.v1.Event;

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
         * Encodes the specified Event message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.Event;

        /**
         * Verifies an Event message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        /** Properties of a MessageSent. */
        interface IMessageSent {
          /** MessageSent echoId */
          echoId?: number | Long | null;

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
          public echoId: number | Long;

          /** MessageSent message. */
          public message?: protocol.harmonytypes.v1.IMessage | null;

          /**
           * Creates a new MessageSent instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MessageSent instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IMessageSent
          ): protocol.chat.v1.Event.MessageSent;

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
           * Encodes the specified MessageSent message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.MessageSent.verify|verify} messages.
           * @param message MessageSent message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a MessageSent message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns MessageSent
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.MessageSent;

          /**
           * Verifies a MessageSent message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          guildId?: number | Long | null;

          /** MessageUpdated channelId */
          channelId?: number | Long | null;

          /** MessageUpdated messageId */
          messageId?: number | Long | null;

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
          public guildId: number | Long;

          /** MessageUpdated channelId. */
          public channelId: number | Long;

          /** MessageUpdated messageId. */
          public messageId: number | Long;

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
           * Creates a new MessageUpdated instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MessageUpdated instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IMessageUpdated
          ): protocol.chat.v1.Event.MessageUpdated;

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
           * Encodes the specified MessageUpdated message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.MessageUpdated.verify|verify} messages.
           * @param message MessageUpdated message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a MessageUpdated message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns MessageUpdated
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.MessageUpdated;

          /**
           * Verifies a MessageUpdated message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          guildId?: number | Long | null;

          /** MessageDeleted channelId */
          channelId?: number | Long | null;

          /** MessageDeleted messageId */
          messageId?: number | Long | null;
        }

        /** Represents a MessageDeleted. */
        class MessageDeleted implements IMessageDeleted {
          /**
           * Constructs a new MessageDeleted.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IMessageDeleted);

          /** MessageDeleted guildId. */
          public guildId: number | Long;

          /** MessageDeleted channelId. */
          public channelId: number | Long;

          /** MessageDeleted messageId. */
          public messageId: number | Long;

          /**
           * Creates a new MessageDeleted instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MessageDeleted instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IMessageDeleted
          ): protocol.chat.v1.Event.MessageDeleted;

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
           * Encodes the specified MessageDeleted message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.MessageDeleted.verify|verify} messages.
           * @param message MessageDeleted message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a MessageDeleted message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns MessageDeleted
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.MessageDeleted;

          /**
           * Verifies a MessageDeleted message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          guildId?: number | Long | null;

          /** ChannelCreated channelId */
          channelId?: number | Long | null;

          /** ChannelCreated name */
          name?: string | null;

          /** ChannelCreated previousId */
          previousId?: number | Long | null;

          /** ChannelCreated nextId */
          nextId?: number | Long | null;

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
          public guildId: number | Long;

          /** ChannelCreated channelId. */
          public channelId: number | Long;

          /** ChannelCreated name. */
          public name: string;

          /** ChannelCreated previousId. */
          public previousId: number | Long;

          /** ChannelCreated nextId. */
          public nextId: number | Long;

          /** ChannelCreated isCategory. */
          public isCategory: boolean;

          /** ChannelCreated metadata. */
          public metadata?: protocol.harmonytypes.v1.IMetadata | null;

          /**
           * Creates a new ChannelCreated instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ChannelCreated instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IChannelCreated
          ): protocol.chat.v1.Event.ChannelCreated;

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
           * Encodes the specified ChannelCreated message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.ChannelCreated.verify|verify} messages.
           * @param message ChannelCreated message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a ChannelCreated message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns ChannelCreated
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.ChannelCreated;

          /**
           * Verifies a ChannelCreated message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          guildId?: number | Long | null;

          /** ChannelUpdated channelId */
          channelId?: number | Long | null;

          /** ChannelUpdated name */
          name?: string | null;

          /** ChannelUpdated updateName */
          updateName?: boolean | null;

          /** ChannelUpdated previousId */
          previousId?: number | Long | null;

          /** ChannelUpdated nextId */
          nextId?: number | Long | null;

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
          public guildId: number | Long;

          /** ChannelUpdated channelId. */
          public channelId: number | Long;

          /** ChannelUpdated name. */
          public name: string;

          /** ChannelUpdated updateName. */
          public updateName: boolean;

          /** ChannelUpdated previousId. */
          public previousId: number | Long;

          /** ChannelUpdated nextId. */
          public nextId: number | Long;

          /** ChannelUpdated updateOrder. */
          public updateOrder: boolean;

          /** ChannelUpdated metadata. */
          public metadata?: protocol.harmonytypes.v1.IMetadata | null;

          /** ChannelUpdated updateMetadata. */
          public updateMetadata: boolean;

          /**
           * Creates a new ChannelUpdated instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ChannelUpdated instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IChannelUpdated
          ): protocol.chat.v1.Event.ChannelUpdated;

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
           * Encodes the specified ChannelUpdated message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.ChannelUpdated.verify|verify} messages.
           * @param message ChannelUpdated message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a ChannelUpdated message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns ChannelUpdated
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.ChannelUpdated;

          /**
           * Verifies a ChannelUpdated message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          guildId?: number | Long | null;

          /** ChannelDeleted channelId */
          channelId?: number | Long | null;
        }

        /** Represents a ChannelDeleted. */
        class ChannelDeleted implements IChannelDeleted {
          /**
           * Constructs a new ChannelDeleted.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IChannelDeleted);

          /** ChannelDeleted guildId. */
          public guildId: number | Long;

          /** ChannelDeleted channelId. */
          public channelId: number | Long;

          /**
           * Creates a new ChannelDeleted instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ChannelDeleted instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IChannelDeleted
          ): protocol.chat.v1.Event.ChannelDeleted;

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
           * Encodes the specified ChannelDeleted message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.ChannelDeleted.verify|verify} messages.
           * @param message ChannelDeleted message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a ChannelDeleted message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns ChannelDeleted
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.ChannelDeleted;

          /**
           * Verifies a ChannelDeleted message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          guildId?: number | Long | null;

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
          public guildId: number | Long;

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
           * Creates a new GuildUpdated instance using the specified properties.
           * @param [properties] Properties to set
           * @returns GuildUpdated instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IGuildUpdated
          ): protocol.chat.v1.Event.GuildUpdated;

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
           * Encodes the specified GuildUpdated message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.GuildUpdated.verify|verify} messages.
           * @param message GuildUpdated message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a GuildUpdated message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns GuildUpdated
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.GuildUpdated;

          /**
           * Verifies a GuildUpdated message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          guildId?: number | Long | null;
        }

        /** Represents a GuildDeleted. */
        class GuildDeleted implements IGuildDeleted {
          /**
           * Constructs a new GuildDeleted.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IGuildDeleted);

          /** GuildDeleted guildId. */
          public guildId: number | Long;

          /**
           * Creates a new GuildDeleted instance using the specified properties.
           * @param [properties] Properties to set
           * @returns GuildDeleted instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IGuildDeleted
          ): protocol.chat.v1.Event.GuildDeleted;

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
           * Encodes the specified GuildDeleted message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.GuildDeleted.verify|verify} messages.
           * @param message GuildDeleted message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a GuildDeleted message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns GuildDeleted
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.GuildDeleted;

          /**
           * Verifies a GuildDeleted message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          memberId?: number | Long | null;

          /** MemberJoined guildId */
          guildId?: number | Long | null;
        }

        /** Represents a MemberJoined. */
        class MemberJoined implements IMemberJoined {
          /**
           * Constructs a new MemberJoined.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IMemberJoined);

          /** MemberJoined memberId. */
          public memberId: number | Long;

          /** MemberJoined guildId. */
          public guildId: number | Long;

          /**
           * Creates a new MemberJoined instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MemberJoined instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IMemberJoined
          ): protocol.chat.v1.Event.MemberJoined;

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
           * Encodes the specified MemberJoined message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.MemberJoined.verify|verify} messages.
           * @param message MemberJoined message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a MemberJoined message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns MemberJoined
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.MemberJoined;

          /**
           * Verifies a MemberJoined message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          memberId?: number | Long | null;

          /** MemberLeft guildId */
          guildId?: number | Long | null;
        }

        /** Represents a MemberLeft. */
        class MemberLeft implements IMemberLeft {
          /**
           * Constructs a new MemberLeft.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IMemberLeft);

          /** MemberLeft memberId. */
          public memberId: number | Long;

          /** MemberLeft guildId. */
          public guildId: number | Long;

          /**
           * Creates a new MemberLeft instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MemberLeft instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IMemberLeft
          ): protocol.chat.v1.Event.MemberLeft;

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
           * Encodes the specified MemberLeft message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.MemberLeft.verify|verify} messages.
           * @param message MemberLeft message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a MemberLeft message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns MemberLeft
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.MemberLeft;

          /**
           * Verifies a MemberLeft message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          guildId?: number | Long | null;

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
          public guildId: number | Long;

          /** GuildAddedToList homeserver. */
          public homeserver: string;

          /**
           * Creates a new GuildAddedToList instance using the specified properties.
           * @param [properties] Properties to set
           * @returns GuildAddedToList instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IGuildAddedToList
          ): protocol.chat.v1.Event.GuildAddedToList;

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
           * Encodes the specified GuildAddedToList message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.GuildAddedToList.verify|verify} messages.
           * @param message GuildAddedToList message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a GuildAddedToList message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns GuildAddedToList
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.GuildAddedToList;

          /**
           * Verifies a GuildAddedToList message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          guildId?: number | Long | null;

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
          public guildId: number | Long;

          /** GuildRemovedFromList homeserver. */
          public homeserver: string;

          /**
           * Creates a new GuildRemovedFromList instance using the specified properties.
           * @param [properties] Properties to set
           * @returns GuildRemovedFromList instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IGuildRemovedFromList
          ): protocol.chat.v1.Event.GuildRemovedFromList;

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
           * Encodes the specified GuildRemovedFromList message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.GuildRemovedFromList.verify|verify} messages.
           * @param message GuildRemovedFromList message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a GuildRemovedFromList message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns GuildRemovedFromList
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.GuildRemovedFromList;

          /**
           * Verifies a GuildRemovedFromList message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          guildId?: number | Long | null;

          /** ActionPerformed channelId */
          channelId?: number | Long | null;

          /** ActionPerformed messageId */
          messageId?: number | Long | null;

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
          public guildId: number | Long;

          /** ActionPerformed channelId. */
          public channelId: number | Long;

          /** ActionPerformed messageId. */
          public messageId: number | Long;

          /** ActionPerformed actionId. */
          public actionId: string;

          /** ActionPerformed actionData. */
          public actionData: string;

          /**
           * Creates a new ActionPerformed instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ActionPerformed instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IActionPerformed
          ): protocol.chat.v1.Event.ActionPerformed;

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
           * Encodes the specified ActionPerformed message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.ActionPerformed.verify|verify} messages.
           * @param message ActionPerformed message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes an ActionPerformed message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns ActionPerformed
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.ActionPerformed;

          /**
           * Verifies an ActionPerformed message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          guildId?: number | Long | null;

          /** RoleMoved roleId */
          roleId?: number | Long | null;
        }

        /** Represents a RoleMoved. */
        class RoleMoved implements IRoleMoved {
          /**
           * Constructs a new RoleMoved.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.IRoleMoved);

          /** RoleMoved guildId. */
          public guildId: number | Long;

          /** RoleMoved roleId. */
          public roleId: number | Long;

          /**
           * Creates a new RoleMoved instance using the specified properties.
           * @param [properties] Properties to set
           * @returns RoleMoved instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IRoleMoved
          ): protocol.chat.v1.Event.RoleMoved;

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
           * Encodes the specified RoleMoved message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.RoleMoved.verify|verify} messages.
           * @param message RoleMoved message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a RoleMoved message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns RoleMoved
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.RoleMoved;

          /**
           * Verifies a RoleMoved message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          userId?: number | Long | null;

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
          public userId: number | Long;

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
           * Creates a new ProfileUpdated instance using the specified properties.
           * @param [properties] Properties to set
           * @returns ProfileUpdated instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.IProfileUpdated
          ): protocol.chat.v1.Event.ProfileUpdated;

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
           * Encodes the specified ProfileUpdated message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.ProfileUpdated.verify|verify} messages.
           * @param message ProfileUpdated message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a ProfileUpdated message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns ProfileUpdated
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.ProfileUpdated;

          /**
           * Verifies a ProfileUpdated message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
          userId?: number | Long | null;

          /** Typing guildId */
          guildId?: number | Long | null;

          /** Typing channelId */
          channelId?: number | Long | null;
        }

        /** Represents a Typing. */
        class Typing implements ITyping {
          /**
           * Constructs a new Typing.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.chat.v1.Event.ITyping);

          /** Typing userId. */
          public userId: number | Long;

          /** Typing guildId. */
          public guildId: number | Long;

          /** Typing channelId. */
          public channelId: number | Long;

          /**
           * Creates a new Typing instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Typing instance
           */
          public static create(
            properties?: protocol.chat.v1.Event.ITyping
          ): protocol.chat.v1.Event.Typing;

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
           * Encodes the specified Typing message, length delimited. Does not implicitly {@link protocol.chat.v1.Event.Typing.verify|verify} messages.
           * @param message Typing message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
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
           * Decodes a Typing message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns Typing
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): protocol.chat.v1.Event.Typing;

          /**
           * Verifies a Typing message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

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
         * Creates new ChatService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean
        ): ChatService;

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
         * Callback as used by {@link protocol.chat.v1.ChatService#getUser}.
         * @param error Error, if any
         * @param [response] GetUserResponse
         */
        type GetUserCallback = (
          error: Error | null,
          response?: protocol.chat.v1.GetUserResponse
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
      }

      /** Properties of a GetUserRequest. */
      interface IGetUserRequest {
        /** GetUserRequest userId */
        userId?: number | Long | null;
      }

      /** Represents a GetUserRequest. */
      class GetUserRequest implements IGetUserRequest {
        /**
         * Constructs a new GetUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.chat.v1.IGetUserRequest);

        /** GetUserRequest userId. */
        public userId: number | Long;

        /**
         * Creates a new GetUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetUserRequest
        ): protocol.chat.v1.GetUserRequest;

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
         * Encodes the specified GetUserRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetUserRequest.verify|verify} messages.
         * @param message GetUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetUserRequest;

        /**
         * Verifies a GetUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetUserResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetUserResponse
        ): protocol.chat.v1.GetUserResponse;

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
         * Encodes the specified GetUserResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetUserResponse.verify|verify} messages.
         * @param message GetUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetUserResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetUserResponse;

        /**
         * Verifies a GetUserResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetUserMetadataRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserMetadataRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetUserMetadataRequest
        ): protocol.chat.v1.GetUserMetadataRequest;

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
         * Encodes the specified GetUserMetadataRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.GetUserMetadataRequest.verify|verify} messages.
         * @param message GetUserMetadataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetUserMetadataRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserMetadataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetUserMetadataRequest;

        /**
         * Verifies a GetUserMetadataRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new GetUserMetadataResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserMetadataResponse instance
         */
        public static create(
          properties?: protocol.chat.v1.IGetUserMetadataResponse
        ): protocol.chat.v1.GetUserMetadataResponse;

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
         * Encodes the specified GetUserMetadataResponse message, length delimited. Does not implicitly {@link protocol.chat.v1.GetUserMetadataResponse.verify|verify} messages.
         * @param message GetUserMetadataResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a GetUserMetadataResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserMetadataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.GetUserMetadataResponse;

        /**
         * Verifies a GetUserMetadataResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new ProfileUpdateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProfileUpdateRequest instance
         */
        public static create(
          properties?: protocol.chat.v1.IProfileUpdateRequest
        ): protocol.chat.v1.ProfileUpdateRequest;

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
         * Encodes the specified ProfileUpdateRequest message, length delimited. Does not implicitly {@link protocol.chat.v1.ProfileUpdateRequest.verify|verify} messages.
         * @param message ProfileUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a ProfileUpdateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProfileUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.chat.v1.ProfileUpdateRequest;

        /**
         * Verifies a ProfileUpdateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new Override instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Override instance
         */
        public static create(
          properties?: protocol.harmonytypes.v1.IOverride
        ): protocol.harmonytypes.v1.Override;

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
         * Encodes the specified Override message, length delimited. Does not implicitly {@link protocol.harmonytypes.v1.Override.verify|verify} messages.
         * @param message Override message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an Override message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Override
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.harmonytypes.v1.Override;

        /**
         * Verifies an Override message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new Action instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Action instance
         */
        public static create(
          properties?: protocol.harmonytypes.v1.IAction
        ): protocol.harmonytypes.v1.Action;

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
         * Encodes the specified Action message, length delimited. Does not implicitly {@link protocol.harmonytypes.v1.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.harmonytypes.v1.Action;

        /**
         * Verifies an Action message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new EmbedHeading instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmbedHeading instance
         */
        public static create(
          properties?: protocol.harmonytypes.v1.IEmbedHeading
        ): protocol.harmonytypes.v1.EmbedHeading;

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
         * Encodes the specified EmbedHeading message, length delimited. Does not implicitly {@link protocol.harmonytypes.v1.EmbedHeading.verify|verify} messages.
         * @param message EmbedHeading message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an EmbedHeading message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmbedHeading
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.harmonytypes.v1.EmbedHeading;

        /**
         * Verifies an EmbedHeading message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new EmbedField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EmbedField instance
         */
        public static create(
          properties?: protocol.harmonytypes.v1.IEmbedField
        ): protocol.harmonytypes.v1.EmbedField;

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
         * Encodes the specified EmbedField message, length delimited. Does not implicitly {@link protocol.harmonytypes.v1.EmbedField.verify|verify} messages.
         * @param message EmbedField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an EmbedField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EmbedField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.harmonytypes.v1.EmbedField;

        /**
         * Verifies an EmbedField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        color?: number | Long | null;

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
        public color: number | Long;

        /** Embed header. */
        public header?: protocol.harmonytypes.v1.IEmbedHeading | null;

        /** Embed footer. */
        public footer?: protocol.harmonytypes.v1.IEmbedHeading | null;

        /** Embed fields. */
        public fields: protocol.harmonytypes.v1.IEmbedField[];

        /** Embed actions. */
        public actions: protocol.harmonytypes.v1.IAction[];

        /**
         * Creates a new Embed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Embed instance
         */
        public static create(
          properties?: protocol.harmonytypes.v1.IEmbed
        ): protocol.harmonytypes.v1.Embed;

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
         * Encodes the specified Embed message, length delimited. Does not implicitly {@link protocol.harmonytypes.v1.Embed.verify|verify} messages.
         * @param message Embed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an Embed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Embed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.harmonytypes.v1.Embed;

        /**
         * Verifies an Embed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new Attachment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Attachment instance
         */
        public static create(
          properties?: protocol.harmonytypes.v1.IAttachment
        ): protocol.harmonytypes.v1.Attachment;

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
         * Encodes the specified Attachment message, length delimited. Does not implicitly {@link protocol.harmonytypes.v1.Attachment.verify|verify} messages.
         * @param message Attachment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes an Attachment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Attachment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.harmonytypes.v1.Attachment;

        /**
         * Verifies an Attachment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
         * Creates a new Metadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metadata instance
         */
        public static create(
          properties?: protocol.harmonytypes.v1.IMetadata
        ): protocol.harmonytypes.v1.Metadata;

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
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link protocol.harmonytypes.v1.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.harmonytypes.v1.Metadata;

        /**
         * Verifies a Metadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
        guildId?: number | Long | null;

        /** Message channelId */
        channelId?: number | Long | null;

        /** Message messageId */
        messageId?: number | Long | null;

        /** Message authorId */
        authorId?: number | Long | null;

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
        inReplyTo?: number | Long | null;

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
        public guildId: number | Long;

        /** Message channelId. */
        public channelId: number | Long;

        /** Message messageId. */
        public messageId: number | Long;

        /** Message authorId. */
        public authorId: number | Long;

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
        public inReplyTo: number | Long;

        /** Message overrides. */
        public overrides?: protocol.harmonytypes.v1.IOverride | null;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(
          properties?: protocol.harmonytypes.v1.IMessage
        ): protocol.harmonytypes.v1.Message;

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
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protocol.harmonytypes.v1.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
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
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): protocol.harmonytypes.v1.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

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
      seconds?: number | Long | null;

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
      public seconds: number | Long;

      /** Timestamp nanos. */
      public nanos: number;

      /**
       * Creates a new Timestamp instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Timestamp instance
       */
      public static create(
        properties?: google.protobuf.ITimestamp
      ): google.protobuf.Timestamp;

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
       * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @param message Timestamp message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
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
       * Decodes a Timestamp message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.Timestamp;

      /**
       * Verifies a Timestamp message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

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
       * Creates a new Empty instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Empty instance
       */
      public static create(
        properties?: google.protobuf.IEmpty
      ): google.protobuf.Empty;

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
       * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
       * @param message Empty message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
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
       * Decodes an Empty message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Empty
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.Empty;

      /**
       * Verifies an Empty message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

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
       * Creates a new Any instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Any instance
       */
      public static create(
        properties?: google.protobuf.IAny
      ): google.protobuf.Any;

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
       * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
       * @param message Any message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
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
       * Decodes an Any message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Any
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.Any;

      /**
       * Verifies an Any message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

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
  }
}
