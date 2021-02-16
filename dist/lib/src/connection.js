"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const auth_1 = __importDefault(require("../protocol/auth/v1/auth"));
const chat_1 = __importDefault(require("../protocol/chat/v1/chat"));
const mediaproxy_1 = __importDefault(require("../protocol/mediaproxy/v1/mediaproxy"));
class Connection {
    constructor(host) {
        this.host = host;
        this.auth = new auth_1.default(host);
        this.chat = new chat_1.default(host);
        this.mediaProxy = new mediaproxy_1.default(host);
    }
    setSession(session) {
        this.session = session;
        this.auth.session = session;
        this.chat.session = session;
        this.mediaProxy.session = session;
    }
    getSession() {
        return this.session;
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map