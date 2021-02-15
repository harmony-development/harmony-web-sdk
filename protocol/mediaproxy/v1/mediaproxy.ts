import gen from './output';
import svc = gen.protocol.mediaproxy.v1;
class MediaProxyService {

			host: string;
			session?: string;

			constructor(host: string) {
				this.host = host;
			}
			

			unary(endpoint: string, body: Uint8Array) {
				return fetch(
					`${this.host}${endpoint}`,
					{
						method: "POST",
						body,
						headers: {
							"Content-Type": "application/octet-stream",
							Authorization: this.session || "",
						}
					}
				)
			}

			stream(endpoint: string) {
				return new WebSocket(`${this.host}${endpoint}`, ["access_token", this.session || ""])
			}
async FetchLinkMetadata (req: svc.IFetchLinkMetadataRequest) {
const buffer = svc.FetchLinkMetadataRequest.encode(
						svc.FetchLinkMetadataRequest.create(req)
					).finish();
const resp = await this.unary('/protocol.mediaproxy.v1.MediaProxyService/FetchLinkMetadata', buffer)
return svc.SiteMetadata.decode(new Uint8Array(await resp.arrayBuffer()));
}
async InstantView (req: svc.IInstantViewRequest) {
const buffer = svc.InstantViewRequest.encode(
						svc.InstantViewRequest.create(req)
					).finish();
const resp = await this.unary('/protocol.mediaproxy.v1.MediaProxyService/InstantView', buffer)
return svc.InstantViewResponse.decode(new Uint8Array(await resp.arrayBuffer()));
}
async CanInstantView (req: svc.IInstantViewRequest) {
const buffer = svc.InstantViewRequest.encode(
						svc.InstantViewRequest.create(req)
					).finish();
const resp = await this.unary('/protocol.mediaproxy.v1.MediaProxyService/CanInstantView', buffer)
return svc.CanInstantViewResponse.decode(new Uint8Array(await resp.arrayBuffer()));
}
}
