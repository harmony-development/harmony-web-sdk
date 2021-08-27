// @generated by protobuf-ts 1.0.13 with parameters long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "auth/v1/auth.proto" (package "protocol.auth.v1", syntax proto3)
// tslint:disable
import { RpcTransport } from "@protobuf-ts/runtime-rpc";
import { MethodInfo } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import { Empty } from "../../google/protobuf/empty";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import { UnaryCall } from "@protobuf-ts/runtime-rpc";
import { RpcOptions } from "@protobuf-ts/runtime-rpc";
import { Token } from "../../harmonytypes/v1/types";
/**
 * BeginAuthResponse
 * The return type of BeginAuth, containing the
 * auth_id that will be used for the authentication
 * section
 *
 * @generated from protobuf message protocol.auth.v1.BeginAuthResponse
 */
export interface BeginAuthResponse {
    /**
     * auth_id: the ID of this auth session
     *
     * @generated from protobuf field: string auth_id = 1;
     */
    authId: string;
}
/**
 * Session
 * Session contains the information for a new session;
 * the user_id you logged in as and the session_token
 * which should be passed to authorisation
 *
 * @generated from protobuf message protocol.auth.v1.Session
 */
export interface Session {
    /**
     * user_id: the ID of the user you logged in as
     *
     * @generated from protobuf field: uint64 user_id = 1;
     */
    userId: string;
    /**
     * session_token: the session token to use in authorization
     *
     * @generated from protobuf field: string session_token = 2;
     */
    sessionToken: string;
}
/**
 * AuthStep
 * A step in the authentication process
 * Contains a variety of different types of views
 * It is recommended to have a fallback_url specified
 * For non-trivial authentication procedures (such as captchas)
 *
 * @generated from protobuf message protocol.auth.v1.AuthStep
 */
export interface AuthStep {
    /**
     * fallback_url: unused
     *
     * @generated from protobuf field: string fallback_url = 1;
     */
    fallbackUrl: string;
    /**
     * can_go_back: whether or not the client can request the
     * server to send the previous step
     *
     * @generated from protobuf field: bool can_go_back = 2;
     */
    canGoBack: boolean;
    /**
     * @generated from protobuf oneof: step
     */
    step: {
        oneofKind: "choice";
        /**
         * choice: the user must pick a thing out of a list of options
         *
         * @generated from protobuf field: protocol.auth.v1.AuthStep.Choice choice = 3;
         */
        choice: AuthStep_Choice;
    } | {
        oneofKind: "form";
        /**
         * form: the user must complete a form
         *
         * @generated from protobuf field: protocol.auth.v1.AuthStep.Form form = 4;
         */
        form: AuthStep_Form;
    } | {
        oneofKind: "session";
        /**
         * session: you've completed auth, and have a session
         *
         * @generated from protobuf field: protocol.auth.v1.Session session = 5;
         */
        session: Session;
    } | {
        oneofKind: "waiting";
        /**
         * waiting: you're waiting on something
         *
         * @generated from protobuf field: protocol.auth.v1.AuthStep.Waiting waiting = 6;
         */
        waiting: AuthStep_Waiting;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Choice
 * A step which allows the user to choose from a range of options
 * Allows you to show a heading by specifying title
 *
 * @generated from protobuf message protocol.auth.v1.AuthStep.Choice
 */
export interface AuthStep_Choice {
    /**
     * title: the title of the list of choices
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * options: a list of choices, one of these
     * should be sent in nextstep
     *
     * @generated from protobuf field: repeated string options = 2;
     */
    options: string[];
}
/**
 * Form
 * A step which requires the user to input information
 * Allows you to show a heading by specifying title
 *
 * @generated from protobuf message protocol.auth.v1.AuthStep.Form
 */
export interface AuthStep_Form {
    /**
     * title: the title of this form
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * fields: all the fields in this form
     *
     * @generated from protobuf field: repeated protocol.auth.v1.AuthStep.Form.FormField fields = 2;
     */
    fields: AuthStep_Form_FormField[];
}
/**
 * FormField
 * A field in the form, containing information on how it should
 * be rendered
 * Here is a list of form types that need to be supported:
 * email: a field type that has to contain a valid email
 * password: a field type that has to contain a password
 * new-password: a field type for new passwords
 * text: a field type that has to contain text
 * number: a field type that has to contain a number
 *
 * @generated from protobuf message protocol.auth.v1.AuthStep.Form.FormField
 */
export interface AuthStep_Form_FormField {
    /**
     * name: the identifier for the form field
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * type: the type of the form field, as documented above
     *
     * @generated from protobuf field: string type = 2;
     */
    type: string;
}
/**
 * Waiting
 * A step which requires the user to perform an external action
 * The title and description should explain to the user
 * what they should do to complete this step
 *
 * @generated from protobuf message protocol.auth.v1.AuthStep.Waiting
 */
export interface AuthStep_Waiting {
    /**
     * title: the title of this waiting screen
     *
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * description: the explanation of what's being waited on
     *
     * @generated from protobuf field: string description = 2;
     */
    description: string;
}
/**
 * NextStepRequest
 * contains the client's response to the server's challenge
 * This needs to be called first with no arguments to
 * receive the first step
 *
 * @generated from protobuf message protocol.auth.v1.NextStepRequest
 */
export interface NextStepRequest {
    /**
     * auth_id: the authentication session you want
     * the next step of
     *
     * @generated from protobuf field: string auth_id = 1;
     */
    authId: string;
    /**
     * @generated from protobuf oneof: step
     */
    step: {
        oneofKind: "choice";
        /**
         * choice: the choice the user picked
         *
         * @generated from protobuf field: protocol.auth.v1.NextStepRequest.Choice choice = 2;
         */
        choice: NextStepRequest_Choice;
    } | {
        oneofKind: "form";
        /**
         * form: the form the user filled out
         *
         * @generated from protobuf field: protocol.auth.v1.NextStepRequest.Form form = 3;
         */
        form: NextStepRequest_Form;
    } | {
        oneofKind: undefined;
    };
}
/**
 * A simple choice string indicating which option the user chose
 *
 * @generated from protobuf message protocol.auth.v1.NextStepRequest.Choice
 */
export interface NextStepRequest_Choice {
    /**
     * choice: the choice the user picked
     *
     * @generated from protobuf field: string choice = 1;
     */
    choice: string;
}
/**
 * Form fields can either be bytes, string, or int64.
 *
 * @generated from protobuf message protocol.auth.v1.NextStepRequest.FormFields
 */
export interface NextStepRequest_FormFields {
    /**
     * @generated from protobuf oneof: field
     */
    field: {
        oneofKind: "bytes";
        /**
         * bytes: the form field's data is a byte array
         *
         * @generated from protobuf field: bytes bytes = 1;
         */
        bytes: Uint8Array;
    } | {
        oneofKind: "string";
        /**
         * string: the form field's data is a string
         *
         * @generated from protobuf field: string string = 2;
         */
        string: string;
    } | {
        oneofKind: "number";
        /**
         * number: the form field's data is a number
         *
         * @generated from protobuf field: int64 number = 3;
         */
        number: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * An array of form fields, in the same order they came in from the server
 *
 * @generated from protobuf message protocol.auth.v1.NextStepRequest.Form
 */
export interface NextStepRequest_Form {
    /**
     * fields: the fields the user filled out
     *
     * @generated from protobuf field: repeated protocol.auth.v1.NextStepRequest.FormFields fields = 1;
     */
    fields: NextStepRequest_FormFields[];
}
/**
 * StepBackRequest
 * A request to go back 1 step
 *
 * @generated from protobuf message protocol.auth.v1.StepBackRequest
 */
export interface StepBackRequest {
    /**
     * auth_id: the authentication session the user
     * wants to go back in
     *
     * @generated from protobuf field: string auth_id = 1;
     */
    authId: string;
}
/**
 * StreamStepsRequest
 * Required to be initiated by all authenticating clients
 * Allows the server to send steps
 *
 * @generated from protobuf message protocol.auth.v1.StreamStepsRequest
 */
export interface StreamStepsRequest {
    /**
     * auth_id: the authorization session
     * who's steps you want to stream
     *
     * @generated from protobuf field: string auth_id = 1;
     */
    authId: string;
}
/**
 * The request to federate with a foreign server.
 *
 * @generated from protobuf message protocol.auth.v1.FederateRequest
 */
export interface FederateRequest {
    /**
     * target: the foreign server you want to
     * federate with
     *
     * @generated from protobuf field: string target = 1;
     */
    target: string;
}
/**
 * The reply to a successful federation request,
 * containing the token you need to present to the
 * foreign server.
 *
 * @generated from protobuf message protocol.auth.v1.FederateReply
 */
export interface FederateReply {
    /**
     * A `harmonytypes.v1.Token` whose `data` field is a serialized `TokenData` message.
     * It is signed with the homeserver's private key.
     *
     * @generated from protobuf field: protocol.harmonytypes.v1.Token token = 1;
     */
    token?: Token;
}
/**
 * Contains a key's bytes.
 *
 * @generated from protobuf message protocol.auth.v1.KeyReply
 */
export interface KeyReply {
    /**
     * key: the bytes of the public key.
     *
     * @generated from protobuf field: bytes key = 1;
     */
    key: Uint8Array;
}
/**
 * Log into a foreignserver using a token
 * from your homeserver, obtained through a FederateRequest
 *
 * @generated from protobuf message protocol.auth.v1.LoginFederatedRequest
 */
export interface LoginFederatedRequest {
    /**
     * A `harmonytypes.v1.Token` whose `data` field is a serialized `TokenData` message.
     * It is signed with the homeserver's private key.
     *
     * @generated from protobuf field: protocol.harmonytypes.v1.Token auth_token = 1;
     */
    authToken?: Token;
    /**
     * domain: the homeserver that the auth token is from
     *
     * @generated from protobuf field: string domain = 2;
     */
    domain: string;
}
/**
 * Information sent by a client's homeserver, in a `harmonytypes.v1.Token`.
 * It will be sent to a foreignserver by the client.
 *
 * @generated from protobuf message protocol.auth.v1.TokenData
 */
export interface TokenData {
    /**
     * The client's user ID on the homeserver.
     *
     * @generated from protobuf field: uint64 user_id = 1;
     */
    userId: string;
    /**
     * The foreignserver's server name.
     *
     * @generated from protobuf field: string target = 2;
     */
    target: string;
    /**
     * The username of the client.
     *
     * @generated from protobuf field: string username = 3;
     */
    username: string;
    /**
     * The avatar of the client.
     *
     * @generated from protobuf field: string avatar = 4;
     */
    avatar: string;
}
// # Federation
// 
// Servers should generate and persist an Ed25519 public and private
// key. These will be referred to later on simply as the public
// and private keys of the server.
// 
// Federate is the core of Harmony's federation model.
// The client sends the server name of the foreignserver
// to its homeserver using the Federate method.
// 
// The homeserver generates a `harmonytypes.v1.Token`, where the `data` field
// contains a serialized `TokenData` message.
// The private key used to sign is the homeserver's private key.
// 
// The target should be the foreignserver's server name.
// The user ID should be the client's user ID on the homeserver.
// The username and avatar should be the client's username and avatar,
// so the foreignserver knows what username and avatar to give them.
// 
// The client will use this token in a LoginFederatedRequest request
// and send it to the foreignserver as the auth_token field, with the
// domain field filled out to the server name of the homeserver.
// 
// TODO: finish

/**
 * The service containing authorization/entication methods
 *
 * @generated from protobuf service protocol.auth.v1.AuthService
 */
export interface IAuthServiceClient {
    /**
     * Federate with a foreignserver, obtaining a token
     * you can use to call LoginFederated on it
     *
     * @generated from protobuf rpc: Federate(protocol.auth.v1.FederateRequest) returns (protocol.auth.v1.FederateReply);
     */
    federate(input: FederateRequest, options?: RpcOptions): UnaryCall<FederateRequest, FederateReply>;
    /**
     * Present a token to a foreignserver from a Federate call
     * on your homeserver in order to login
     *
     * @generated from protobuf rpc: LoginFederated(protocol.auth.v1.LoginFederatedRequest) returns (protocol.auth.v1.Session);
     */
    loginFederated(input: LoginFederatedRequest, options?: RpcOptions): UnaryCall<LoginFederatedRequest, Session>;
    /**
     * Returns the public key of this server
     *
     * @generated from protobuf rpc: Key(google.protobuf.Empty) returns (protocol.auth.v1.KeyReply);
     */
    key(input: Empty, options?: RpcOptions): UnaryCall<Empty, KeyReply>;
    /**
     * Begins an authentication session
     *
     * @generated from protobuf rpc: BeginAuth(google.protobuf.Empty) returns (protocol.auth.v1.BeginAuthResponse);
     */
    beginAuth(input: Empty, options?: RpcOptions): UnaryCall<Empty, BeginAuthResponse>;
    /**
     * Goes to the next step of the authentication session,
     * possibly presenting user input
     *
     * @generated from protobuf rpc: NextStep(protocol.auth.v1.NextStepRequest) returns (protocol.auth.v1.AuthStep);
     */
    nextStep(input: NextStepRequest, options?: RpcOptions): UnaryCall<NextStepRequest, AuthStep>;
    /**
     * Goes to the previous step of the authentication session
     * if possible
     *
     * @generated from protobuf rpc: StepBack(protocol.auth.v1.StepBackRequest) returns (protocol.auth.v1.AuthStep);
     */
    stepBack(input: StepBackRequest, options?: RpcOptions): UnaryCall<StepBackRequest, AuthStep>;
    /**
     * Consume the steps of an authentication session
     * as a stream
     *
     * @generated from protobuf rpc: StreamSteps(protocol.auth.v1.StreamStepsRequest) returns (stream protocol.auth.v1.AuthStep);
     */
    streamSteps(input: StreamStepsRequest, options?: RpcOptions): ServerStreamingCall<StreamStepsRequest, AuthStep>;
    /**
     * Check whether or not you're logged in and the session is valid
     *
     * @generated from protobuf rpc: CheckLoggedIn(google.protobuf.Empty) returns (google.protobuf.Empty);
     */
    checkLoggedIn(input: Empty, options?: RpcOptions): UnaryCall<Empty, Empty>;
}
/**
 * Type for protobuf message protocol.auth.v1.BeginAuthResponse
 */
class BeginAuthResponse$Type extends MessageType<BeginAuthResponse> {
    constructor() {
        super("protocol.auth.v1.BeginAuthResponse", [
            { no: 1, name: "auth_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
export const BeginAuthResponse = new BeginAuthResponse$Type();
/**
 * Type for protobuf message protocol.auth.v1.Session
 */
class Session$Type extends MessageType<Session> {
    constructor() {
        super("protocol.auth.v1.Session", [
            { no: 1, name: "user_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "session_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
export const Session = new Session$Type();
/**
 * Type for protobuf message protocol.auth.v1.AuthStep
 */
class AuthStep$Type extends MessageType<AuthStep> {
    constructor() {
        super("protocol.auth.v1.AuthStep", [
            { no: 1, name: "fallback_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "can_go_back", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "choice", kind: "message", oneof: "step", T: () => AuthStep_Choice },
            { no: 4, name: "form", kind: "message", oneof: "step", T: () => AuthStep_Form },
            { no: 5, name: "session", kind: "message", oneof: "step", T: () => Session },
            { no: 6, name: "waiting", kind: "message", oneof: "step", T: () => AuthStep_Waiting }
        ]);
    }
}
export const AuthStep = new AuthStep$Type();
/**
 * Type for protobuf message protocol.auth.v1.AuthStep.Choice
 */
class AuthStep_Choice$Type extends MessageType<AuthStep_Choice> {
    constructor() {
        super("protocol.auth.v1.AuthStep.Choice", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "options", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
export const AuthStep_Choice = new AuthStep_Choice$Type();
/**
 * Type for protobuf message protocol.auth.v1.AuthStep.Form
 */
class AuthStep_Form$Type extends MessageType<AuthStep_Form> {
    constructor() {
        super("protocol.auth.v1.AuthStep.Form", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "fields", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AuthStep_Form_FormField }
        ]);
    }
}
export const AuthStep_Form = new AuthStep_Form$Type();
/**
 * Type for protobuf message protocol.auth.v1.AuthStep.Form.FormField
 */
class AuthStep_Form_FormField$Type extends MessageType<AuthStep_Form_FormField> {
    constructor() {
        super("protocol.auth.v1.AuthStep.Form.FormField", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
export const AuthStep_Form_FormField = new AuthStep_Form_FormField$Type();
/**
 * Type for protobuf message protocol.auth.v1.AuthStep.Waiting
 */
class AuthStep_Waiting$Type extends MessageType<AuthStep_Waiting> {
    constructor() {
        super("protocol.auth.v1.AuthStep.Waiting", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
export const AuthStep_Waiting = new AuthStep_Waiting$Type();
/**
 * Type for protobuf message protocol.auth.v1.NextStepRequest
 */
class NextStepRequest$Type extends MessageType<NextStepRequest> {
    constructor() {
        super("protocol.auth.v1.NextStepRequest", [
            { no: 1, name: "auth_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "choice", kind: "message", oneof: "step", T: () => NextStepRequest_Choice },
            { no: 3, name: "form", kind: "message", oneof: "step", T: () => NextStepRequest_Form }
        ]);
    }
}
export const NextStepRequest = new NextStepRequest$Type();
/**
 * Type for protobuf message protocol.auth.v1.NextStepRequest.Choice
 */
class NextStepRequest_Choice$Type extends MessageType<NextStepRequest_Choice> {
    constructor() {
        super("protocol.auth.v1.NextStepRequest.Choice", [
            { no: 1, name: "choice", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
export const NextStepRequest_Choice = new NextStepRequest_Choice$Type();
/**
 * Type for protobuf message protocol.auth.v1.NextStepRequest.FormFields
 */
class NextStepRequest_FormFields$Type extends MessageType<NextStepRequest_FormFields> {
    constructor() {
        super("protocol.auth.v1.NextStepRequest.FormFields", [
            { no: 1, name: "bytes", kind: "scalar", oneof: "field", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "string", kind: "scalar", oneof: "field", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "number", kind: "scalar", oneof: "field", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
}
export const NextStepRequest_FormFields = new NextStepRequest_FormFields$Type();
/**
 * Type for protobuf message protocol.auth.v1.NextStepRequest.Form
 */
class NextStepRequest_Form$Type extends MessageType<NextStepRequest_Form> {
    constructor() {
        super("protocol.auth.v1.NextStepRequest.Form", [
            { no: 1, name: "fields", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NextStepRequest_FormFields }
        ]);
    }
}
export const NextStepRequest_Form = new NextStepRequest_Form$Type();
/**
 * Type for protobuf message protocol.auth.v1.StepBackRequest
 */
class StepBackRequest$Type extends MessageType<StepBackRequest> {
    constructor() {
        super("protocol.auth.v1.StepBackRequest", [
            { no: 1, name: "auth_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
export const StepBackRequest = new StepBackRequest$Type();
/**
 * Type for protobuf message protocol.auth.v1.StreamStepsRequest
 */
class StreamStepsRequest$Type extends MessageType<StreamStepsRequest> {
    constructor() {
        super("protocol.auth.v1.StreamStepsRequest", [
            { no: 1, name: "auth_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
export const StreamStepsRequest = new StreamStepsRequest$Type();
/**
 * Type for protobuf message protocol.auth.v1.FederateRequest
 */
class FederateRequest$Type extends MessageType<FederateRequest> {
    constructor() {
        super("protocol.auth.v1.FederateRequest", [
            { no: 1, name: "target", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
export const FederateRequest = new FederateRequest$Type();
/**
 * Type for protobuf message protocol.auth.v1.FederateReply
 */
class FederateReply$Type extends MessageType<FederateReply> {
    constructor() {
        super("protocol.auth.v1.FederateReply", [
            { no: 1, name: "token", kind: "message", T: () => Token }
        ]);
    }
}
export const FederateReply = new FederateReply$Type();
/**
 * Type for protobuf message protocol.auth.v1.KeyReply
 */
class KeyReply$Type extends MessageType<KeyReply> {
    constructor() {
        super("protocol.auth.v1.KeyReply", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
}
export const KeyReply = new KeyReply$Type();
/**
 * Type for protobuf message protocol.auth.v1.LoginFederatedRequest
 */
class LoginFederatedRequest$Type extends MessageType<LoginFederatedRequest> {
    constructor() {
        super("protocol.auth.v1.LoginFederatedRequest", [
            { no: 1, name: "auth_token", kind: "message", T: () => Token },
            { no: 2, name: "domain", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
export const LoginFederatedRequest = new LoginFederatedRequest$Type();
/**
 * Type for protobuf message protocol.auth.v1.TokenData
 */
class TokenData$Type extends MessageType<TokenData> {
    constructor() {
        super("protocol.auth.v1.TokenData", [
            { no: 1, name: "user_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "target", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "avatar", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
export const TokenData = new TokenData$Type();
// # Federation
// 
// Servers should generate and persist an Ed25519 public and private
// key. These will be referred to later on simply as the public
// and private keys of the server.
// 
// Federate is the core of Harmony's federation model.
// The client sends the server name of the foreignserver
// to its homeserver using the Federate method.
// 
// The homeserver generates a `harmonytypes.v1.Token`, where the `data` field
// contains a serialized `TokenData` message.
// The private key used to sign is the homeserver's private key.
// 
// The target should be the foreignserver's server name.
// The user ID should be the client's user ID on the homeserver.
// The username and avatar should be the client's username and avatar,
// so the foreignserver knows what username and avatar to give them.
// 
// The client will use this token in a LoginFederatedRequest request
// and send it to the foreignserver as the auth_token field, with the
// domain field filled out to the server name of the homeserver.
// 
// TODO: finish

/**
 * The service containing authorization/entication methods
 *
 * @generated from protobuf service protocol.auth.v1.AuthService
 */
export class AuthServiceClient implements IAuthServiceClient {
    readonly typeName = "protocol.auth.v1.AuthService";
    readonly methods: MethodInfo[] = [
        { service: this, name: "Federate", localName: "federate", I: FederateRequest, O: FederateReply },
        { service: this, name: "LoginFederated", localName: "loginFederated", I: LoginFederatedRequest, O: Session },
        { service: this, name: "Key", localName: "key", I: Empty, O: KeyReply },
        { service: this, name: "BeginAuth", localName: "beginAuth", I: Empty, O: BeginAuthResponse },
        { service: this, name: "NextStep", localName: "nextStep", I: NextStepRequest, O: AuthStep },
        { service: this, name: "StepBack", localName: "stepBack", I: StepBackRequest, O: AuthStep },
        { service: this, name: "StreamSteps", localName: "streamSteps", I: StreamStepsRequest, O: AuthStep, serverStreaming: true },
        { service: this, name: "CheckLoggedIn", localName: "checkLoggedIn", I: Empty, O: Empty, options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } } }
    ];
    constructor(private readonly _transport: RpcTransport) {
    }
    federate(input: FederateRequest, options?: RpcOptions): UnaryCall<FederateRequest, FederateReply> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options), i = method.I.create(input);
        return stackIntercept<FederateRequest, FederateReply>("unary", this._transport, method, opt, i);
    }
    loginFederated(input: LoginFederatedRequest, options?: RpcOptions): UnaryCall<LoginFederatedRequest, Session> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options), i = method.I.create(input);
        return stackIntercept<LoginFederatedRequest, Session>("unary", this._transport, method, opt, i);
    }
    key(input: Empty, options?: RpcOptions): UnaryCall<Empty, KeyReply> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options), i = method.I.create(input);
        return stackIntercept<Empty, KeyReply>("unary", this._transport, method, opt, i);
    }
    beginAuth(input: Empty, options?: RpcOptions): UnaryCall<Empty, BeginAuthResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options), i = method.I.create(input);
        return stackIntercept<Empty, BeginAuthResponse>("unary", this._transport, method, opt, i);
    }
    nextStep(input: NextStepRequest, options?: RpcOptions): UnaryCall<NextStepRequest, AuthStep> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options), i = method.I.create(input);
        return stackIntercept<NextStepRequest, AuthStep>("unary", this._transport, method, opt, i);
    }
    stepBack(input: StepBackRequest, options?: RpcOptions): UnaryCall<StepBackRequest, AuthStep> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options), i = method.I.create(input);
        return stackIntercept<StepBackRequest, AuthStep>("unary", this._transport, method, opt, i);
    }
    streamSteps(input: StreamStepsRequest, options?: RpcOptions): ServerStreamingCall<StreamStepsRequest, AuthStep> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options), i = method.I.create(input);
        return stackIntercept<StreamStepsRequest, AuthStep>("serverStreaming", this._transport, method, opt, i);
    }
    checkLoggedIn(input: Empty, options?: RpcOptions): UnaryCall<Empty, Empty> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options), i = method.I.create(input);
        return stackIntercept<Empty, Empty>("unary", this._transport, method, opt, i);
    }
}
