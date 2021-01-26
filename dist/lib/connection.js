"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const output_1 = __importDefault(require("../protocol/auth/v1/output"));
const output_2 = __importDefault(require("../protocol/chat/v1/output"));
const output_3 = __importDefault(require("../protocol/mediaproxy/v1/output"));
class Connection {
    constructor(host) {
        this.host = host;
        this.auth = output_1.default.protocol.auth.v1.AuthService.create(this.sendReq);
        this.chat = output_2.default.protocol.chat.v1.ChatService.create(this.sendReq);
        this.mediaproxy = output_3.default.protocol.mediaproxy.v1.MediaProxyService.create(this.sendReq);
    }
    async sendReq(method, data, cb) {
        try {
            const resp = await fetch(`${this.host}/${method}`, {
                headers: {
                    contentType: "application/octet-stream",
                },
                body: data,
                method: "POST",
            });
            if (cb)
                return cb(null, new Uint8Array(await resp.arrayBuffer()));
        }
        catch (e) {
            if (cb)
                return cb(e);
        }
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map