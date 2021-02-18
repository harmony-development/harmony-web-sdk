import * as $protobuf from "protobufjs";
/** Namespace protocol. */
export namespace protocol {
  /** Namespace auth. */
  namespace auth {
    /** Namespace v1. */
    namespace v1 {
      /** Properties of a BeginAuthResponse. */
      interface IBeginAuthResponse {
        /** BeginAuthResponse authId */
        authId?: string | null;
      }

      /** Represents a BeginAuthResponse. */
      class BeginAuthResponse implements IBeginAuthResponse {
        /**
         * Constructs a new BeginAuthResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.auth.v1.IBeginAuthResponse);

        /** BeginAuthResponse authId. */
        public authId: string;

        /**
         * Encodes the specified BeginAuthResponse message. Does not implicitly {@link protocol.auth.v1.BeginAuthResponse.verify|verify} messages.
         * @param message BeginAuthResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.auth.v1.IBeginAuthResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a BeginAuthResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeginAuthResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.auth.v1.BeginAuthResponse;

        /**
         * Creates a BeginAuthResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BeginAuthResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.auth.v1.BeginAuthResponse;

        /**
         * Creates a plain object from a BeginAuthResponse message. Also converts values to other types if specified.
         * @param message BeginAuthResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.auth.v1.BeginAuthResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this BeginAuthResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a Session. */
      interface ISession {
        /** Session userId */
        userId?: number | null;

        /** Session sessionToken */
        sessionToken?: string | null;
      }

      /** Represents a Session. */
      class Session implements ISession {
        /**
         * Constructs a new Session.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.auth.v1.ISession);

        /** Session userId. */
        public userId: number;

        /** Session sessionToken. */
        public sessionToken: string;

        /**
         * Encodes the specified Session message. Does not implicitly {@link protocol.auth.v1.Session.verify|verify} messages.
         * @param message Session message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.auth.v1.ISession,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Session message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Session
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.auth.v1.Session;

        /**
         * Creates a Session message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Session
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.auth.v1.Session;

        /**
         * Creates a plain object from a Session message. Also converts values to other types if specified.
         * @param message Session
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.auth.v1.Session,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Session to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an AuthStep. */
      interface IAuthStep {
        /** AuthStep fallbackUrl */
        fallbackUrl?: string | null;

        /** AuthStep canGoBack */
        canGoBack?: boolean | null;

        /** AuthStep choice */
        choice?: protocol.auth.v1.AuthStep.IChoice | null;

        /** AuthStep form */
        form?: protocol.auth.v1.AuthStep.IForm | null;

        /** AuthStep session */
        session?: protocol.auth.v1.ISession | null;

        /** AuthStep waiting */
        waiting?: protocol.auth.v1.AuthStep.IWaiting | null;
      }

      /** Represents an AuthStep. */
      class AuthStep implements IAuthStep {
        /**
         * Constructs a new AuthStep.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.auth.v1.IAuthStep);

        /** AuthStep fallbackUrl. */
        public fallbackUrl: string;

        /** AuthStep canGoBack. */
        public canGoBack: boolean;

        /** AuthStep choice. */
        public choice?: protocol.auth.v1.AuthStep.IChoice | null;

        /** AuthStep form. */
        public form?: protocol.auth.v1.AuthStep.IForm | null;

        /** AuthStep session. */
        public session?: protocol.auth.v1.ISession | null;

        /** AuthStep waiting. */
        public waiting?: protocol.auth.v1.AuthStep.IWaiting | null;

        /** AuthStep step. */
        public step?: "choice" | "form" | "session" | "waiting";

        /**
         * Encodes the specified AuthStep message. Does not implicitly {@link protocol.auth.v1.AuthStep.verify|verify} messages.
         * @param message AuthStep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.auth.v1.IAuthStep,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AuthStep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthStep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.auth.v1.AuthStep;

        /**
         * Creates an AuthStep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthStep
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.auth.v1.AuthStep;

        /**
         * Creates a plain object from an AuthStep message. Also converts values to other types if specified.
         * @param message AuthStep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.auth.v1.AuthStep,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this AuthStep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      namespace AuthStep {
        /** Properties of a Choice. */
        interface IChoice {
          /** Choice title */
          title?: string | null;

          /** Choice options */
          options?: string[] | null;
        }

        /** Represents a Choice. */
        class Choice implements IChoice {
          /**
           * Constructs a new Choice.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.auth.v1.AuthStep.IChoice);

          /** Choice title. */
          public title: string;

          /** Choice options. */
          public options: string[];

          /**
           * Encodes the specified Choice message. Does not implicitly {@link protocol.auth.v1.AuthStep.Choice.verify|verify} messages.
           * @param message Choice message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.auth.v1.AuthStep.IChoice,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a Choice message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns Choice
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.auth.v1.AuthStep.Choice;

          /**
           * Creates a Choice message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns Choice
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.auth.v1.AuthStep.Choice;

          /**
           * Creates a plain object from a Choice message. Also converts values to other types if specified.
           * @param message Choice
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.auth.v1.AuthStep.Choice,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this Choice to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a Form. */
        interface IForm {
          /** Form title */
          title?: string | null;

          /** Form fields */
          fields?: protocol.auth.v1.AuthStep.Form.IFormField[] | null;
        }

        /** Represents a Form. */
        class Form implements IForm {
          /**
           * Constructs a new Form.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.auth.v1.AuthStep.IForm);

          /** Form title. */
          public title: string;

          /** Form fields. */
          public fields: protocol.auth.v1.AuthStep.Form.IFormField[];

          /**
           * Encodes the specified Form message. Does not implicitly {@link protocol.auth.v1.AuthStep.Form.verify|verify} messages.
           * @param message Form message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.auth.v1.AuthStep.IForm,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a Form message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns Form
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.auth.v1.AuthStep.Form;

          /**
           * Creates a Form message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns Form
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.auth.v1.AuthStep.Form;

          /**
           * Creates a plain object from a Form message. Also converts values to other types if specified.
           * @param message Form
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.auth.v1.AuthStep.Form,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this Form to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        namespace Form {
          /** Properties of a FormField. */
          interface IFormField {
            /** FormField name */
            name?: string | null;

            /** FormField type */
            type?: string | null;
          }

          /** Represents a FormField. */
          class FormField implements IFormField {
            /**
             * Constructs a new FormField.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.auth.v1.AuthStep.Form.IFormField);

            /** FormField name. */
            public name: string;

            /** FormField type. */
            public type: string;

            /**
             * Encodes the specified FormField message. Does not implicitly {@link protocol.auth.v1.AuthStep.Form.FormField.verify|verify} messages.
             * @param message FormField message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(
              message: protocol.auth.v1.AuthStep.Form.IFormField,
              writer?: $protobuf.Writer
            ): $protobuf.Writer;

            /**
             * Decodes a FormField message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FormField
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(
              reader: $protobuf.Reader | Uint8Array,
              length?: number
            ): protocol.auth.v1.AuthStep.Form.FormField;

            /**
             * Creates a FormField message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FormField
             */
            public static fromObject(object: {
              [k: string]: any;
            }): protocol.auth.v1.AuthStep.Form.FormField;

            /**
             * Creates a plain object from a FormField message. Also converts values to other types if specified.
             * @param message FormField
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(
              message: protocol.auth.v1.AuthStep.Form.FormField,
              options?: $protobuf.IConversionOptions
            ): { [k: string]: any };

            /**
             * Converts this FormField to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
          }
        }

        /** Properties of a Waiting. */
        interface IWaiting {
          /** Waiting title */
          title?: string | null;

          /** Waiting description */
          description?: string | null;
        }

        /** Represents a Waiting. */
        class Waiting implements IWaiting {
          /**
           * Constructs a new Waiting.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.auth.v1.AuthStep.IWaiting);

          /** Waiting title. */
          public title: string;

          /** Waiting description. */
          public description: string;

          /**
           * Encodes the specified Waiting message. Does not implicitly {@link protocol.auth.v1.AuthStep.Waiting.verify|verify} messages.
           * @param message Waiting message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.auth.v1.AuthStep.IWaiting,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a Waiting message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns Waiting
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.auth.v1.AuthStep.Waiting;

          /**
           * Creates a Waiting message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns Waiting
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.auth.v1.AuthStep.Waiting;

          /**
           * Creates a plain object from a Waiting message. Also converts values to other types if specified.
           * @param message Waiting
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.auth.v1.AuthStep.Waiting,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this Waiting to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }

      /** Properties of a NextStepRequest. */
      interface INextStepRequest {
        /** NextStepRequest authId */
        authId?: string | null;

        /** NextStepRequest choice */
        choice?: protocol.auth.v1.NextStepRequest.IChoice | null;

        /** NextStepRequest form */
        form?: protocol.auth.v1.NextStepRequest.IForm | null;
      }

      /** Represents a NextStepRequest. */
      class NextStepRequest implements INextStepRequest {
        /**
         * Constructs a new NextStepRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.auth.v1.INextStepRequest);

        /** NextStepRequest authId. */
        public authId: string;

        /** NextStepRequest choice. */
        public choice?: protocol.auth.v1.NextStepRequest.IChoice | null;

        /** NextStepRequest form. */
        public form?: protocol.auth.v1.NextStepRequest.IForm | null;

        /** NextStepRequest step. */
        public step?: "choice" | "form";

        /**
         * Encodes the specified NextStepRequest message. Does not implicitly {@link protocol.auth.v1.NextStepRequest.verify|verify} messages.
         * @param message NextStepRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.auth.v1.INextStepRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a NextStepRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NextStepRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.auth.v1.NextStepRequest;

        /**
         * Creates a NextStepRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NextStepRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.auth.v1.NextStepRequest;

        /**
         * Creates a plain object from a NextStepRequest message. Also converts values to other types if specified.
         * @param message NextStepRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.auth.v1.NextStepRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this NextStepRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      namespace NextStepRequest {
        /** Properties of a Choice. */
        interface IChoice {
          /** Choice choice */
          choice?: string | null;
        }

        /** Represents a Choice. */
        class Choice implements IChoice {
          /**
           * Constructs a new Choice.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.auth.v1.NextStepRequest.IChoice);

          /** Choice choice. */
          public choice: string;

          /**
           * Encodes the specified Choice message. Does not implicitly {@link protocol.auth.v1.NextStepRequest.Choice.verify|verify} messages.
           * @param message Choice message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.auth.v1.NextStepRequest.IChoice,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a Choice message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns Choice
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.auth.v1.NextStepRequest.Choice;

          /**
           * Creates a Choice message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns Choice
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.auth.v1.NextStepRequest.Choice;

          /**
           * Creates a plain object from a Choice message. Also converts values to other types if specified.
           * @param message Choice
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.auth.v1.NextStepRequest.Choice,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this Choice to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a FormFields. */
        interface IFormFields {
          /** FormFields bytes */
          bytes?: Uint8Array | null;

          /** FormFields string */
          string?: string | null;

          /** FormFields number */
          number?: number | null;
        }

        /** Represents a FormFields. */
        class FormFields implements IFormFields {
          /**
           * Constructs a new FormFields.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: protocol.auth.v1.NextStepRequest.IFormFields
          );

          /** FormFields bytes. */
          public bytes: Uint8Array;

          /** FormFields string. */
          public string: string;

          /** FormFields number. */
          public number: number;

          /** FormFields field. */
          public field?: "bytes" | "string" | "number";

          /**
           * Encodes the specified FormFields message. Does not implicitly {@link protocol.auth.v1.NextStepRequest.FormFields.verify|verify} messages.
           * @param message FormFields message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.auth.v1.NextStepRequest.IFormFields,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a FormFields message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns FormFields
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.auth.v1.NextStepRequest.FormFields;

          /**
           * Creates a FormFields message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns FormFields
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.auth.v1.NextStepRequest.FormFields;

          /**
           * Creates a plain object from a FormFields message. Also converts values to other types if specified.
           * @param message FormFields
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.auth.v1.NextStepRequest.FormFields,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this FormFields to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a Form. */
        interface IForm {
          /** Form fields */
          fields?: protocol.auth.v1.NextStepRequest.IFormFields[] | null;
        }

        /** Represents a Form. */
        class Form implements IForm {
          /**
           * Constructs a new Form.
           * @param [properties] Properties to set
           */
          constructor(properties?: protocol.auth.v1.NextStepRequest.IForm);

          /** Form fields. */
          public fields: protocol.auth.v1.NextStepRequest.IFormFields[];

          /**
           * Encodes the specified Form message. Does not implicitly {@link protocol.auth.v1.NextStepRequest.Form.verify|verify} messages.
           * @param message Form message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: protocol.auth.v1.NextStepRequest.IForm,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a Form message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns Form
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): protocol.auth.v1.NextStepRequest.Form;

          /**
           * Creates a Form message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns Form
           */
          public static fromObject(object: {
            [k: string]: any;
          }): protocol.auth.v1.NextStepRequest.Form;

          /**
           * Creates a plain object from a Form message. Also converts values to other types if specified.
           * @param message Form
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: protocol.auth.v1.NextStepRequest.Form,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this Form to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }

      /** Properties of a StepBackRequest. */
      interface IStepBackRequest {
        /** StepBackRequest authId */
        authId?: string | null;
      }

      /** Represents a StepBackRequest. */
      class StepBackRequest implements IStepBackRequest {
        /**
         * Constructs a new StepBackRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.auth.v1.IStepBackRequest);

        /** StepBackRequest authId. */
        public authId: string;

        /**
         * Encodes the specified StepBackRequest message. Does not implicitly {@link protocol.auth.v1.StepBackRequest.verify|verify} messages.
         * @param message StepBackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.auth.v1.IStepBackRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a StepBackRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StepBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.auth.v1.StepBackRequest;

        /**
         * Creates a StepBackRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StepBackRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.auth.v1.StepBackRequest;

        /**
         * Creates a plain object from a StepBackRequest message. Also converts values to other types if specified.
         * @param message StepBackRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.auth.v1.StepBackRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this StepBackRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a StreamStepsRequest. */
      interface IStreamStepsRequest {
        /** StreamStepsRequest authId */
        authId?: string | null;
      }

      /** Represents a StreamStepsRequest. */
      class StreamStepsRequest implements IStreamStepsRequest {
        /**
         * Constructs a new StreamStepsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.auth.v1.IStreamStepsRequest);

        /** StreamStepsRequest authId. */
        public authId: string;

        /**
         * Encodes the specified StreamStepsRequest message. Does not implicitly {@link protocol.auth.v1.StreamStepsRequest.verify|verify} messages.
         * @param message StreamStepsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.auth.v1.IStreamStepsRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a StreamStepsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StreamStepsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.auth.v1.StreamStepsRequest;

        /**
         * Creates a StreamStepsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StreamStepsRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.auth.v1.StreamStepsRequest;

        /**
         * Creates a plain object from a StreamStepsRequest message. Also converts values to other types if specified.
         * @param message StreamStepsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.auth.v1.StreamStepsRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this StreamStepsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a FederateRequest. */
      interface IFederateRequest {
        /** FederateRequest target */
        target?: string | null;
      }

      /** Represents a FederateRequest. */
      class FederateRequest implements IFederateRequest {
        /**
         * Constructs a new FederateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.auth.v1.IFederateRequest);

        /** FederateRequest target. */
        public target: string;

        /**
         * Encodes the specified FederateRequest message. Does not implicitly {@link protocol.auth.v1.FederateRequest.verify|verify} messages.
         * @param message FederateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.auth.v1.IFederateRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a FederateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FederateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.auth.v1.FederateRequest;

        /**
         * Creates a FederateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FederateRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.auth.v1.FederateRequest;

        /**
         * Creates a plain object from a FederateRequest message. Also converts values to other types if specified.
         * @param message FederateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.auth.v1.FederateRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this FederateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a FederateReply. */
      interface IFederateReply {
        /** FederateReply token */
        token?: string | null;

        /** FederateReply nonce */
        nonce?: string | null;
      }

      /** Represents a FederateReply. */
      class FederateReply implements IFederateReply {
        /**
         * Constructs a new FederateReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.auth.v1.IFederateReply);

        /** FederateReply token. */
        public token: string;

        /** FederateReply nonce. */
        public nonce: string;

        /**
         * Encodes the specified FederateReply message. Does not implicitly {@link protocol.auth.v1.FederateReply.verify|verify} messages.
         * @param message FederateReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.auth.v1.IFederateReply,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a FederateReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FederateReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.auth.v1.FederateReply;

        /**
         * Creates a FederateReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FederateReply
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.auth.v1.FederateReply;

        /**
         * Creates a plain object from a FederateReply message. Also converts values to other types if specified.
         * @param message FederateReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.auth.v1.FederateReply,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this FederateReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a KeyReply. */
      interface IKeyReply {
        /** KeyReply key */
        key?: string | null;
      }

      /** Represents a KeyReply. */
      class KeyReply implements IKeyReply {
        /**
         * Constructs a new KeyReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.auth.v1.IKeyReply);

        /** KeyReply key. */
        public key: string;

        /**
         * Encodes the specified KeyReply message. Does not implicitly {@link protocol.auth.v1.KeyReply.verify|verify} messages.
         * @param message KeyReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.auth.v1.IKeyReply,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a KeyReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.auth.v1.KeyReply;

        /**
         * Creates a KeyReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyReply
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.auth.v1.KeyReply;

        /**
         * Creates a plain object from a KeyReply message. Also converts values to other types if specified.
         * @param message KeyReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.auth.v1.KeyReply,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this KeyReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a LoginFederatedRequest. */
      interface ILoginFederatedRequest {
        /** LoginFederatedRequest authToken */
        authToken?: string | null;

        /** LoginFederatedRequest domain */
        domain?: string | null;
      }

      /** Represents a LoginFederatedRequest. */
      class LoginFederatedRequest implements ILoginFederatedRequest {
        /**
         * Constructs a new LoginFederatedRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.auth.v1.ILoginFederatedRequest);

        /** LoginFederatedRequest authToken. */
        public authToken: string;

        /** LoginFederatedRequest domain. */
        public domain: string;

        /**
         * Encodes the specified LoginFederatedRequest message. Does not implicitly {@link protocol.auth.v1.LoginFederatedRequest.verify|verify} messages.
         * @param message LoginFederatedRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: protocol.auth.v1.ILoginFederatedRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a LoginFederatedRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginFederatedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): protocol.auth.v1.LoginFederatedRequest;

        /**
         * Creates a LoginFederatedRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginFederatedRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): protocol.auth.v1.LoginFederatedRequest;

        /**
         * Creates a plain object from a LoginFederatedRequest message. Also converts values to other types if specified.
         * @param message LoginFederatedRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: protocol.auth.v1.LoginFederatedRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this LoginFederatedRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Represents an AuthService */
      class AuthService extends $protobuf.rpc.Service {
        /**
         * Constructs a new AuthService service.
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
         * Calls Federate.
         * @param request FederateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FederateReply
         */
        public federate(
          request: protocol.auth.v1.IFederateRequest,
          callback: protocol.auth.v1.AuthService.FederateCallback
        ): void;

        /**
         * Calls Federate.
         * @param request FederateRequest message or plain object
         * @returns Promise
         */
        public federate(
          request: protocol.auth.v1.IFederateRequest
        ): Promise<protocol.auth.v1.FederateReply>;

        /**
         * Calls LoginFederated.
         * @param request LoginFederatedRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Session
         */
        public loginFederated(
          request: protocol.auth.v1.ILoginFederatedRequest,
          callback: protocol.auth.v1.AuthService.LoginFederatedCallback
        ): void;

        /**
         * Calls LoginFederated.
         * @param request LoginFederatedRequest message or plain object
         * @returns Promise
         */
        public loginFederated(
          request: protocol.auth.v1.ILoginFederatedRequest
        ): Promise<protocol.auth.v1.Session>;

        /**
         * Calls Key.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and KeyReply
         */
        public key(
          request: google.protobuf.IEmpty,
          callback: protocol.auth.v1.AuthService.KeyCallback
        ): void;

        /**
         * Calls Key.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public key(
          request: google.protobuf.IEmpty
        ): Promise<protocol.auth.v1.KeyReply>;

        /**
         * Calls BeginAuth.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and BeginAuthResponse
         */
        public beginAuth(
          request: google.protobuf.IEmpty,
          callback: protocol.auth.v1.AuthService.BeginAuthCallback
        ): void;

        /**
         * Calls BeginAuth.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public beginAuth(
          request: google.protobuf.IEmpty
        ): Promise<protocol.auth.v1.BeginAuthResponse>;

        /**
         * Calls NextStep.
         * @param request NextStepRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AuthStep
         */
        public nextStep(
          request: protocol.auth.v1.INextStepRequest,
          callback: protocol.auth.v1.AuthService.NextStepCallback
        ): void;

        /**
         * Calls NextStep.
         * @param request NextStepRequest message or plain object
         * @returns Promise
         */
        public nextStep(
          request: protocol.auth.v1.INextStepRequest
        ): Promise<protocol.auth.v1.AuthStep>;

        /**
         * Calls StepBack.
         * @param request StepBackRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AuthStep
         */
        public stepBack(
          request: protocol.auth.v1.IStepBackRequest,
          callback: protocol.auth.v1.AuthService.StepBackCallback
        ): void;

        /**
         * Calls StepBack.
         * @param request StepBackRequest message or plain object
         * @returns Promise
         */
        public stepBack(
          request: protocol.auth.v1.IStepBackRequest
        ): Promise<protocol.auth.v1.AuthStep>;

        /**
         * Calls StreamSteps.
         * @param request StreamStepsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AuthStep
         */
        public streamSteps(
          request: protocol.auth.v1.IStreamStepsRequest,
          callback: protocol.auth.v1.AuthService.StreamStepsCallback
        ): void;

        /**
         * Calls StreamSteps.
         * @param request StreamStepsRequest message or plain object
         * @returns Promise
         */
        public streamSteps(
          request: protocol.auth.v1.IStreamStepsRequest
        ): Promise<protocol.auth.v1.AuthStep>;
      }

      namespace AuthService {
        /**
         * Callback as used by {@link protocol.auth.v1.AuthService#federate}.
         * @param error Error, if any
         * @param [response] FederateReply
         */
        type FederateCallback = (
          error: Error | null,
          response?: protocol.auth.v1.FederateReply
        ) => void;

        /**
         * Callback as used by {@link protocol.auth.v1.AuthService#loginFederated}.
         * @param error Error, if any
         * @param [response] Session
         */
        type LoginFederatedCallback = (
          error: Error | null,
          response?: protocol.auth.v1.Session
        ) => void;

        /**
         * Callback as used by {@link protocol.auth.v1.AuthService#key}.
         * @param error Error, if any
         * @param [response] KeyReply
         */
        type KeyCallback = (
          error: Error | null,
          response?: protocol.auth.v1.KeyReply
        ) => void;

        /**
         * Callback as used by {@link protocol.auth.v1.AuthService#beginAuth}.
         * @param error Error, if any
         * @param [response] BeginAuthResponse
         */
        type BeginAuthCallback = (
          error: Error | null,
          response?: protocol.auth.v1.BeginAuthResponse
        ) => void;

        /**
         * Callback as used by {@link protocol.auth.v1.AuthService#nextStep}.
         * @param error Error, if any
         * @param [response] AuthStep
         */
        type NextStepCallback = (
          error: Error | null,
          response?: protocol.auth.v1.AuthStep
        ) => void;

        /**
         * Callback as used by {@link protocol.auth.v1.AuthService#stepBack}.
         * @param error Error, if any
         * @param [response] AuthStep
         */
        type StepBackCallback = (
          error: Error | null,
          response?: protocol.auth.v1.AuthStep
        ) => void;

        /**
         * Callback as used by {@link protocol.auth.v1.AuthService#streamSteps}.
         * @param error Error, if any
         * @param [response] AuthStep
         */
        type StreamStepsCallback = (
          error: Error | null,
          response?: protocol.auth.v1.AuthStep
        ) => void;
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
  }
}
