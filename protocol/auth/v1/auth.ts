import gen from "./output";
import svc = gen.protocol.auth.v1;
class AuthService {
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
  async Federate(req: svc.IFederateRequest) {
    const buffer = svc.FederateRequest.encode(
      svc.FederateRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.auth.v1.AuthService/Federate",
      buffer
    );
    return svc.FederateReply.decode(new Uint8Array(await resp.arrayBuffer()));
  }
  async LoginFederated(req: svc.ILoginFederatedRequest) {
    const buffer = svc.LoginFederatedRequest.encode(
      svc.LoginFederatedRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.auth.v1.AuthService/LoginFederated",
      buffer
    );
    return svc.Session.decode(new Uint8Array(await resp.arrayBuffer()));
  }
  async Key(req: gen.google.protobuf.IEmpty) {
    const buffer = gen.google.protobuf.Empty.encode(
      gen.google.protobuf.Empty.create(req)
    ).finish();
    const resp = await this.unary("/protocol.auth.v1.AuthService/Key", buffer);
    return gen.protocol.auth.v1.KeyReply.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async BeginAuth(req: gen.google.protobuf.IEmpty) {
    const buffer = gen.google.protobuf.Empty.encode(
      gen.google.protobuf.Empty.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.auth.v1.AuthService/BeginAuth",
      buffer
    );
    return gen.protocol.auth.v1.BeginAuthResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async NextStep(req: svc.INextStepRequest) {
    const buffer = svc.NextStepRequest.encode(
      svc.NextStepRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.auth.v1.AuthService/NextStep",
      buffer
    );
    return svc.AuthStep.decode(new Uint8Array(await resp.arrayBuffer()));
  }
  async StepBack(req: svc.IStepBackRequest) {
    const buffer = svc.StepBackRequest.encode(
      svc.StepBackRequest.create(req)
    ).finish();
    const resp = await this.unary(
      "/protocol.auth.v1.AuthService/StepBack",
      buffer
    );
    return svc.AuthStep.decode(new Uint8Array(await resp.arrayBuffer()));
  }
  StreamSteps() {
    return this.stream("/protocol.auth.v1.AuthService/StreamSteps");
  }
}
