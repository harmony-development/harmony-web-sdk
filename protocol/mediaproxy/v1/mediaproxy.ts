import gen from "./output";
export default class MediaProxyService {
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
    return new WebSocket(
      `${this.host.replace("https://", "wss://")}${endpoint}`,
      this.session ? ["access_token", this.session] : undefined
    );
  }
  async FetchLinkMetadata(
    req: gen.protocol.mediaproxy.v1.IFetchLinkMetadataRequest
  ) {
    const resp = await this.unary(
      "/protocol.mediaproxy.v1.MediaProxyService/FetchLinkMetadata",
      gen.protocol.mediaproxy.v1.FetchLinkMetadataRequest.encode(req).finish()
    );
    return gen.protocol.mediaproxy.v1.SiteMetadata.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async InstantView(req: gen.protocol.mediaproxy.v1.IInstantViewRequest) {
    const resp = await this.unary(
      "/protocol.mediaproxy.v1.MediaProxyService/InstantView",
      gen.protocol.mediaproxy.v1.InstantViewRequest.encode(req).finish()
    );
    return gen.protocol.mediaproxy.v1.InstantViewResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
  async CanInstantView(req: gen.protocol.mediaproxy.v1.IInstantViewRequest) {
    const resp = await this.unary(
      "/protocol.mediaproxy.v1.MediaProxyService/CanInstantView",
      gen.protocol.mediaproxy.v1.InstantViewRequest.encode(req).finish()
    );
    return gen.protocol.mediaproxy.v1.CanInstantViewResponse.decode(
      new Uint8Array(await resp.arrayBuffer())
    );
  }
}
