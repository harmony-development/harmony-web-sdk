import EventEmitter from "eventemitter3";
import { Message, Method, rpc, RPCImplCallback } from "protobufjs";
import Auth from "../protocol/auth/v1/output";
export class Connection {
  host: string;
  session?: string;
  events: EventEmitter;

  constructor(host: string) {
    this.host = host;
    const authClient = Auth.protocol.auth.v1.AuthService.create(this.sendReq);
    this.events = new EventEmitter();
  }

  async sendReq(
    method: Method | rpc.ServiceMethod<Message<{}>, Message<{}>>,
    data: Uint8Array,
    cb?: RPCImplCallback
  ) {}
}
