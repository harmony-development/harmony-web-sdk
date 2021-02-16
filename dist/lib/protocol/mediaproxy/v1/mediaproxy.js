"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const output_1 = __importDefault(require("./output"));
class MediaProxyService {
    constructor(host) {
        this.host = host;
    }
    unary(endpoint, body) {
        return fetch(`${this.host}${endpoint}`, {
            method: "POST",
            body,
            headers: {
                "Content-Type": "application/octet-stream",
                Authorization: this.session || "",
            },
        });
    }
    stream(endpoint) {
        return new WebSocket(`${this.host}${endpoint}`, [
            "access_token",
            this.session || "",
        ]);
    }
    async FetchLinkMetadata(req) {
        const resp = await this.unary("/protocol.mediaproxy.v1.MediaProxyService/FetchLinkMetadata", output_1.default.protocol.mediaproxy.v1.FetchLinkMetadataRequest.encode(req).finish());
        return output_1.default.protocol.mediaproxy.v1.SiteMetadata.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async InstantView(req) {
        const resp = await this.unary("/protocol.mediaproxy.v1.MediaProxyService/InstantView", output_1.default.protocol.mediaproxy.v1.InstantViewRequest.encode(req).finish());
        return output_1.default.protocol.mediaproxy.v1.InstantViewResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async CanInstantView(req) {
        const resp = await this.unary("/protocol.mediaproxy.v1.MediaProxyService/CanInstantView", output_1.default.protocol.mediaproxy.v1.InstantViewRequest.encode(req).finish());
        return output_1.default.protocol.mediaproxy.v1.CanInstantViewResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
}
exports.default = MediaProxyService;
//# sourceMappingURL=mediaproxy.js.map