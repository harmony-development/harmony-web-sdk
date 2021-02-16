import gen from "./output";
export default class AuthService {
  host: string;
  session?: string;

  constructor(host: string) {
    this.host = host;
  }

  unary(endpoint: string, body: Uint8Array) {
    return fetch(`${this.host}${endpoint}`, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/octet-stream",
        Authorization: this.session || "",
      },
    });
  }

  stream(endpoint: string) {
    return new WebSocket(`${this.host}${endpoint}`, [
      "access_token",
      this.session || "",
    ]);
  }
  async Federate(req: gen.protocol.auth.v1.IFederateRequest) {
    const resp = await this.unary(
      "/protocol.auth.v1.AuthService/Federate",
      gen.protocol.auth.v1.FederateRequest.encode(req).finish()
    );
    return gen.protocol.auth.v1.FederateReply.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async LoginFederated(req: gen.protocol.auth.v1.ILoginFederatedRequest) {
    const resp = await this.unary(
      "/protocol.auth.v1.AuthService/LoginFederated",
      gen.protocol.auth.v1.LoginFederatedRequest.encode(req).finish()
    );
    return gen.protocol.auth.v1.Session.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async Key(req: gen.google.protobuf.IEmpty) {
    const resp = await this.unary(
      "/protocol.auth.v1.AuthService/Key",
      gen.google.protobuf.Empty.encode(req).finish()
    );
    return gen.protocol.auth.v1.KeyReply.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async BeginAuth(req: gen.google.protobuf.IEmpty) {
    const resp = await this.unary(
      "/protocol.auth.v1.AuthService/BeginAuth",
      gen.google.protobuf.Empty.encode(req).finish()
    );
    return gen.protocol.auth.v1.BeginAuthResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async NextStep(req: gen.protocol.auth.v1.INextStepRequest) {
    const resp = await this.unary(
      "/protocol.auth.v1.AuthService/NextStep",
      gen.protocol.auth.v1.NextStepRequest.encode(req).finish()
    );
    return gen.protocol.auth.v1.AuthStep.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async StepBack(req: gen.protocol.auth.v1.IStepBackRequest) {
    const resp = await this.unary(
      "/protocol.auth.v1.AuthService/StepBack",
      gen.protocol.auth.v1.StepBackRequest.encode(req).finish()
    );
    return gen.protocol.auth.v1.AuthStep.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  StreamSteps() {
    return this.stream("/protocol.auth.v1.AuthService/StreamSteps");
  }
}
