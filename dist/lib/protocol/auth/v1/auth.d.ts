import gen from "./output";
export default class AuthService {
    host: string;
    session?: string;
    constructor(host: string);
    unary(endpoint: string, body: Uint8Array): Promise<Response>;
    stream(endpoint: string): WebSocket;
    Federate(req: gen.protocol.auth.v1.IFederateRequest): Promise<gen.protocol.auth.v1.FederateReply>;
    LoginFederated(req: gen.protocol.auth.v1.ILoginFederatedRequest): Promise<gen.protocol.auth.v1.Session>;
    Key(req: gen.google.protobuf.IEmpty): Promise<gen.protocol.auth.v1.KeyReply>;
    BeginAuth(req: gen.google.protobuf.IEmpty): Promise<gen.protocol.auth.v1.BeginAuthResponse>;
    NextStep(req: gen.protocol.auth.v1.INextStepRequest): Promise<gen.protocol.auth.v1.AuthStep>;
    StepBack(req: gen.protocol.auth.v1.IStepBackRequest): Promise<gen.protocol.auth.v1.AuthStep>;
    StreamSteps(): WebSocket;
}
