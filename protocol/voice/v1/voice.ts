import gen from "./output";
import { Stream } from "src/harmonystream";
export default class VoiceService {
  host: string;
  session?: string;

  constructor(host: string) {
    this.host = host;
  }

  async unary(endpoint: string, body: Uint8Array) {
    const resp = await fetch(`${this.host}${endpoint}`, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/octet-stream",
        Authorization: this.session || "",
      },
    });
    if (resp.status >= 400 && resp.status < 600) throw resp;
    return resp;
  }

  stream(endpoint: string) {
    return new WebSocket(`${this.host}${endpoint}`, [
      "access_token",
      this.session || "",
    ]);
  }
  async Connect(req: gen.protocol.voice.v1.IConnectRequest) {
    const resp = await this.unary(
      "/protocol.voice.v1.VoiceService/Connect",
      gen.protocol.voice.v1.ConnectRequest.encode(req).finish()
    );
    return gen.protocol.voice.v1.ConnectResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  StreamState() {
    return new Stream<
      typeof gen.protocol.voice.v1.Signal,
      typeof gen.protocol.voice.v1.StreamStateRequest,
      gen.protocol.voice.v1.StreamStateRequest,
      gen.protocol.voice.v1.Signal
    >(
      this.host,
      "/protocol.voice.v1.VoiceService/StreamState",
      gen.protocol.voice.v1.Signal,
      gen.protocol.voice.v1.StreamStateRequest
    );
  }
}
