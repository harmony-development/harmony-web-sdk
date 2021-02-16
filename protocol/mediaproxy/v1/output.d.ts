import * as $protobuf from "protobufjs";
/** Namespace protocol. */
export namespace protocol {
  /** Namespace mediaproxy. */
  namespace mediaproxy {
    /** Namespace v1. */
    namespace v1 {
      /** Properties of a SiteMetadata. */
      interface ISiteMetadata {
        /** SiteMetadata siteTitle */
        siteTitle?: string | null;

        /** SiteMetadata pageTitle */
        pageTitle?: string | null;

        /** SiteMetadata kind */
        kind?: string | null;

        /** SiteMetadata description */
        description?: string | null;

        /** SiteMetadata url */
        url?: string | null;

        /** SiteMetadata image */
        image?: string | null;
      }

      /** Represents a SiteMetadata. */
      class SiteMetadata implements ISiteMetadata {
        /**
         * Constructs a new SiteMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.mediaproxy.v1.ISiteMetadata);

        /** SiteMetadata siteTitle. */
        public siteTitle: string;

        /** SiteMetadata pageTitle. */
        public pageTitle: string;

        /** SiteMetadata kind. */
        public kind: string;

        /** SiteMetadata description. */
        public description: string;

        /** SiteMetadata url. */
        public url: string;

        /** SiteMetadata image. */
        public image: string;

        /**
         * Encodes the specified SiteMetadata message. Does not implicitly {@link protocol.mediaproxy.v1.SiteMetadata.verify|verify} messages.
         * @param message SiteMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.mediaproxy.v1.ISiteMetadata,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SiteMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SiteMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.mediaproxy.v1.SiteMetadata;

        /**
         * Creates a SiteMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SiteMetadata
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.mediaproxy.v1.SiteMetadata;

        /**
         * Creates a plain object from a SiteMetadata message. Also converts values to other types if specified.
         * @param message SiteMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.mediaproxy.v1.SiteMetadata,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SiteMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a FetchLinkMetadataRequest. */
      interface IFetchLinkMetadataRequest {
        /** FetchLinkMetadataRequest url */
        url?: string | null;
      }

      /** Represents a FetchLinkMetadataRequest. */
      class FetchLinkMetadataRequest implements IFetchLinkMetadataRequest {
        /**
         * Constructs a new FetchLinkMetadataRequest.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: protocol.mediaproxy.v1.IFetchLinkMetadataRequest
        );

        /** FetchLinkMetadataRequest url. */
        public url: string;

        /**
         * Encodes the specified FetchLinkMetadataRequest message. Does not implicitly {@link protocol.mediaproxy.v1.FetchLinkMetadataRequest.verify|verify} messages.
         * @param message FetchLinkMetadataRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.mediaproxy.v1.IFetchLinkMetadataRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a FetchLinkMetadataRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FetchLinkMetadataRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.mediaproxy.v1.FetchLinkMetadataRequest;

        /**
         * Creates a FetchLinkMetadataRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FetchLinkMetadataRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.mediaproxy.v1.FetchLinkMetadataRequest;

        /**
         * Creates a plain object from a FetchLinkMetadataRequest message. Also converts values to other types if specified.
         * @param message FetchLinkMetadataRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.mediaproxy.v1.FetchLinkMetadataRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this FetchLinkMetadataRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an InstantViewRequest. */
      interface IInstantViewRequest {
        /** InstantViewRequest url */
        url?: string | null;
      }

      /** Represents an InstantViewRequest. */
      class InstantViewRequest implements IInstantViewRequest {
        /**
         * Constructs a new InstantViewRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.mediaproxy.v1.IInstantViewRequest);

        /** InstantViewRequest url. */
        public url: string;

        /**
         * Encodes the specified InstantViewRequest message. Does not implicitly {@link protocol.mediaproxy.v1.InstantViewRequest.verify|verify} messages.
         * @param message InstantViewRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.mediaproxy.v1.IInstantViewRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an InstantViewRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InstantViewRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.mediaproxy.v1.InstantViewRequest;

        /**
         * Creates an InstantViewRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InstantViewRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.mediaproxy.v1.InstantViewRequest;

        /**
         * Creates a plain object from an InstantViewRequest message. Also converts values to other types if specified.
         * @param message InstantViewRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.mediaproxy.v1.InstantViewRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this InstantViewRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an InstantViewResponse. */
      interface IInstantViewResponse {
        /** InstantViewResponse metadata */
        metadata?: protocol.mediaproxy.v1.ISiteMetadata | null;

        /** InstantViewResponse content */
        content?: string | null;

        /** InstantViewResponse isValid */
        isValid?: boolean | null;
      }

      /** Represents an InstantViewResponse. */
      class InstantViewResponse implements IInstantViewResponse {
        /**
         * Constructs a new InstantViewResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.mediaproxy.v1.IInstantViewResponse);

        /** InstantViewResponse metadata. */
        public metadata?: protocol.mediaproxy.v1.ISiteMetadata | null;

        /** InstantViewResponse content. */
        public content: string;

        /** InstantViewResponse isValid. */
        public isValid: boolean;

        /**
         * Encodes the specified InstantViewResponse message. Does not implicitly {@link protocol.mediaproxy.v1.InstantViewResponse.verify|verify} messages.
         * @param message InstantViewResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.mediaproxy.v1.IInstantViewResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an InstantViewResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InstantViewResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.mediaproxy.v1.InstantViewResponse;

        /**
         * Creates an InstantViewResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InstantViewResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.mediaproxy.v1.InstantViewResponse;

        /**
         * Creates a plain object from an InstantViewResponse message. Also converts values to other types if specified.
         * @param message InstantViewResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.mediaproxy.v1.InstantViewResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this InstantViewResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a CanInstantViewResponse. */
      interface ICanInstantViewResponse {
        /** CanInstantViewResponse canInstantView */
        canInstantView?: boolean | null;
      }

      /** Represents a CanInstantViewResponse. */
      class CanInstantViewResponse implements ICanInstantViewResponse {
        /**
         * Constructs a new CanInstantViewResponse.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: protocol.mediaproxy.v1.ICanInstantViewResponse
        );

        /** CanInstantViewResponse canInstantView. */
        public canInstantView: boolean;

        /**
         * Encodes the specified CanInstantViewResponse message. Does not implicitly {@link protocol.mediaproxy.v1.CanInstantViewResponse.verify|verify} messages.
         * @param message CanInstantViewResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.mediaproxy.v1.ICanInstantViewResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CanInstantViewResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CanInstantViewResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.mediaproxy.v1.CanInstantViewResponse;

        /**
         * Creates a CanInstantViewResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CanInstantViewResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.mediaproxy.v1.CanInstantViewResponse;

        /**
         * Creates a plain object from a CanInstantViewResponse message. Also converts values to other types if specified.
         * @param message CanInstantViewResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.mediaproxy.v1.CanInstantViewResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this CanInstantViewResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Represents a MediaProxyService */
      class MediaProxyService extends $protobuf.rpc.Service {
        /**
         * Constructs a new MediaProxyService service.
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
         * Calls FetchLinkMetadata.
         * @param request FetchLinkMetadataRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SiteMetadata
         */
        public fetchLinkMetadata(
          request: protocol.mediaproxy.v1.IFetchLinkMetadataRequest,
          callback: protocol.mediaproxy.v1.MediaProxyService.FetchLinkMetadataCallback
        ): void;

        /**
         * Calls FetchLinkMetadata.
         * @param request FetchLinkMetadataRequest message or plain object
         * @returns Promise
         */
        public fetchLinkMetadata(
          request: protocol.mediaproxy.v1.IFetchLinkMetadataRequest
        ): Promise<protocol.mediaproxy.v1.SiteMetadata>;

        /**
         * Calls InstantView.
         * @param request InstantViewRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and InstantViewResponse
         */
        public instantView(
          request: protocol.mediaproxy.v1.IInstantViewRequest,
          callback: protocol.mediaproxy.v1.MediaProxyService.InstantViewCallback
        ): void;

        /**
         * Calls InstantView.
         * @param request InstantViewRequest message or plain object
         * @returns Promise
         */
        public instantView(
          request: protocol.mediaproxy.v1.IInstantViewRequest
        ): Promise<protocol.mediaproxy.v1.InstantViewResponse>;

        /**
         * Calls CanInstantView.
         * @param request InstantViewRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CanInstantViewResponse
         */
        public canInstantView(
          request: protocol.mediaproxy.v1.IInstantViewRequest,
          callback: protocol.mediaproxy.v1.MediaProxyService.CanInstantViewCallback
        ): void;

        /**
         * Calls CanInstantView.
         * @param request InstantViewRequest message or plain object
         * @returns Promise
         */
        public canInstantView(
          request: protocol.mediaproxy.v1.IInstantViewRequest
        ): Promise<protocol.mediaproxy.v1.CanInstantViewResponse>;
      }

      namespace MediaProxyService {
        /**
         * Callback as used by {@link protocol.mediaproxy.v1.MediaProxyService#fetchLinkMetadata}.
         * @param error Error, if any
         * @param [response] SiteMetadata
         */
        type FetchLinkMetadataCallback = (
          error: Error | null,
          response?: protocol.mediaproxy.v1.SiteMetadata
        ) => void;

        /**
         * Callback as used by {@link protocol.mediaproxy.v1.MediaProxyService#instantView}.
         * @param error Error, if any
         * @param [response] InstantViewResponse
         */
        type InstantViewCallback = (
          error: Error | null,
          response?: protocol.mediaproxy.v1.InstantViewResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.mediaproxy.v1.MediaProxyService#canInstantView}.
         * @param error Error, if any
         * @param [response] CanInstantViewResponse
         */
        type CanInstantViewCallback = (
          error: Error | null,
          response?: protocol.mediaproxy.v1.CanInstantViewResponse
        ) => void;
      }
    }
  }
}
