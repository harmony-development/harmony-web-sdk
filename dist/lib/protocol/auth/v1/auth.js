"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const output_1 = __importDefault(require("./output"));
class AuthService {
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
    async Federate(req) {
        const resp = await this.unary("/protocol.auth.v1.AuthService/Federate", output_1.default.protocol.auth.v1.FederateRequest.encode(req).finish());
        return output_1.default.protocol.auth.v1.FederateReply.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async LoginFederated(req) {
        const resp = await this.unary("/protocol.auth.v1.AuthService/LoginFederated", output_1.default.protocol.auth.v1.LoginFederatedRequest.encode(req).finish());
        return output_1.default.protocol.auth.v1.Session.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async Key(req) {
        const resp = await this.unary("/protocol.auth.v1.AuthService/Key", output_1.default.google.protobuf.Empty.encode(req).finish());
        return output_1.default.protocol.auth.v1.KeyReply.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async BeginAuth(req) {
        const resp = await this.unary("/protocol.auth.v1.AuthService/BeginAuth", output_1.default.google.protobuf.Empty.encode(req).finish());
        return output_1.default.protocol.auth.v1.BeginAuthResponse.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async NextStep(req) {
        const resp = await this.unary("/protocol.auth.v1.AuthService/NextStep", output_1.default.protocol.auth.v1.NextStepRequest.encode(req).finish());
        return output_1.default.protocol.auth.v1.AuthStep.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    async StepBack(req) {
        const resp = await this.unary("/protocol.auth.v1.AuthService/StepBack", output_1.default.protocol.auth.v1.StepBackRequest.encode(req).finish());
        return output_1.default.protocol.auth.v1.AuthStep.decode(new Uint8Array(await resp.arrayBuffer()));
    }
    StreamSteps() {
        return this.stream("/protocol.auth.v1.AuthService/StreamSteps");
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth.js.map