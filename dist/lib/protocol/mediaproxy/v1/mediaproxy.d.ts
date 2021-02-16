import gen from "./output";
export default class MediaProxyService {
    host: string;
    session?: string;
    constructor(host: string);
    unary(endpoint: string, body: Uint8Array): Promise<Response>;
    stream(endpoint: string): WebSocket;
    FetchLinkMetadata(req: gen.protocol.mediaproxy.v1.IFetchLinkMetadataRequest): Promise<gen.protocol.mediaproxy.v1.SiteMetadata>;
    InstantView(req: gen.protocol.mediaproxy.v1.IInstantViewRequest): Promise<gen.protocol.mediaproxy.v1.InstantViewResponse>;
    CanInstantView(req: gen.protocol.mediaproxy.v1.IInstantViewRequest): Promise<gen.protocol.mediaproxy.v1.CanInstantViewResponse>;
}
