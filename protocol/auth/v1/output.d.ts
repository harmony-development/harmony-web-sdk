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
