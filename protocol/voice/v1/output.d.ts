import * as $protobuf from "protobufjs";
/** Namespace protocol. */
export namespace protocol {
  /** Namespace voice. */
  namespace voice {
    /** Namespace v1. */
    namespace v1 {
      /** Properties of a Signal. */
      interface ISignal {
        /** Signal iceCandidate */
        iceCandidate?: string | null;

        /** Signal renegotiationNeeded */
        renegotiationNeeded?: google.protobuf.IEmpty | null;
      }

      /** Represents a Signal. */
      class Signal implements ISignal {
        /**
         * Constructs a new Signal.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.voice.v1.ISignal);

        /** Signal iceCandidate. */
        public iceCandidate: string;

        /** Signal renegotiationNeeded. */
        public renegotiationNeeded?: google.protobuf.IEmpty | null;

        /** Signal event. */
        public event?: "iceCandidate" | "renegotiationNeeded";

        /**
         * Encodes the specified Signal message. Does not implicitly {@link protocol.voice.v1.Signal.verify|verify} messages.
         * @param message Signal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.voice.v1.ISignal,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Signal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Signal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.voice.v1.Signal;

        /**
         * Creates a Signal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Signal
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.voice.v1.Signal;

        /**
         * Creates a plain object from a Signal message. Also converts values to other types if specified.
         * @param message Signal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.voice.v1.Signal,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Signal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a ConnectRequest. */
      interface IConnectRequest {
        /** ConnectRequest channelId */
        channelId?: number | null;

        /** ConnectRequest offer */
        offer?: string | null;
      }

      /** Represents a ConnectRequest. */
      class ConnectRequest implements IConnectRequest {
        /**
         * Constructs a new ConnectRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.voice.v1.IConnectRequest);

        /** ConnectRequest channelId. */
        public channelId: number;

        /** ConnectRequest offer. */
        public offer: string;

        /**
         * Encodes the specified ConnectRequest message. Does not implicitly {@link protocol.voice.v1.ConnectRequest.verify|verify} messages.
         * @param message ConnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.voice.v1.IConnectRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ConnectRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.voice.v1.ConnectRequest;

        /**
         * Creates a ConnectRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.voice.v1.ConnectRequest;

        /**
         * Creates a plain object from a ConnectRequest message. Also converts values to other types if specified.
         * @param message ConnectRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.voice.v1.ConnectRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ConnectRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a ConnectResponse. */
      interface IConnectResponse {
        /** ConnectResponse answer */
        answer?: string | null;
      }

      /** Represents a ConnectResponse. */
      class ConnectResponse implements IConnectResponse {
        /**
         * Constructs a new ConnectResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.voice.v1.IConnectResponse);

        /** ConnectResponse answer. */
        public answer: string;

        /**
         * Encodes the specified ConnectResponse message. Does not implicitly {@link protocol.voice.v1.ConnectResponse.verify|verify} messages.
         * @param message ConnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.voice.v1.IConnectResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ConnectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.voice.v1.ConnectResponse;

        /**
         * Creates a ConnectResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.voice.v1.ConnectResponse;

        /**
         * Creates a plain object from a ConnectResponse message. Also converts values to other types if specified.
         * @param message ConnectResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.voice.v1.ConnectResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ConnectResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a StreamStateRequest. */
      interface IStreamStateRequest {
        /** StreamStateRequest channelId */
        channelId?: number | null;
      }

      /** Represents a StreamStateRequest. */
      class StreamStateRequest implements IStreamStateRequest {
        /**
         * Constructs a new StreamStateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.voice.v1.IStreamStateRequest);

        /** StreamStateRequest channelId. */
        public channelId: number;

        /**
         * Encodes the specified StreamStateRequest message. Does not implicitly {@link protocol.voice.v1.StreamStateRequest.verify|verify} messages.
         * @param message StreamStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.voice.v1.IStreamStateRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a StreamStateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StreamStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.voice.v1.StreamStateRequest;

        /**
         * Creates a StreamStateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StreamStateRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.voice.v1.StreamStateRequest;

        /**
         * Creates a plain object from a StreamStateRequest message. Also converts values to other types if specified.
         * @param message StreamStateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.voice.v1.StreamStateRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this StreamStateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Represents a VoiceService */
      class VoiceService extends $protobuf.rpc.Service {
        /**
         * Constructs a new VoiceService service.
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
         * Calls Connect.
         * @param request ConnectRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ConnectResponse
         */
        public connect(
          request: protocol.voice.v1.IConnectRequest,
          callback: protocol.voice.v1.VoiceService.ConnectCallback
        ): void;

        /**
         * Calls Connect.
         * @param request ConnectRequest message or plain object
         * @returns Promise
         */
        public connect(
          request: protocol.voice.v1.IConnectRequest
        ): Promise<protocol.voice.v1.ConnectResponse>;

        /**
         * Calls StreamState.
         * @param request StreamStateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Signal
         */
        public streamState(
          request: protocol.voice.v1.IStreamStateRequest,
          callback: protocol.voice.v1.VoiceService.StreamStateCallback
        ): void;

        /**
         * Calls StreamState.
         * @param request StreamStateRequest message or plain object
         * @returns Promise
         */
        public streamState(
          request: protocol.voice.v1.IStreamStateRequest
        ): Promise<protocol.voice.v1.Signal>;
      }

      namespace VoiceService {
        /**
         * Callback as used by {@link protocol.voice.v1.VoiceService#connect}.
         * @param error Error, if any
         * @param [response] ConnectResponse
         */
        type ConnectCallback = (
          error: Error | null,
          response?: protocol.voice.v1.ConnectResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.voice.v1.VoiceService#streamState}.
         * @param error Error, if any
         * @param [response] Signal
         */
        type StreamStateCallback = (
          error: Error | null,
          response?: protocol.voice.v1.Signal
        ) => void;
      }
    }
  }
}

/** Namespace google. */
export namespace google {
  /** Namespace protobuf. */
  namespace protobuf {
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
  }
}
