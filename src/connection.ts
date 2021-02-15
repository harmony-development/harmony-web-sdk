import { Message, Method, rpc, RPCImplCallback } from "protobufjs";
import Auth from "../protocol/auth/v1/output";
import Chat from "../protocol/chat/v1/output";
import MediaProxy from "../protocol/mediaproxy/v1/output";

import authv1 = Auth.protocol.auth.v1;
import chatv1 = Chat.protocol.chat.v1;

export class Connection {
  host: string;
  session?: string;
  auth: Auth.protocol.auth.v1.AuthService;
  chat: chatv1.ChatService;
  mediaproxy: MediaProxy.protocol.mediaproxy.v1.MediaProxyService;

  constructor(host: string) {
    this.host = host;
    this.auth = Auth.protocol.auth.v1.AuthService.create(this.sendReq);
    this.chat = Chat.protocol.chat.v1.ChatService.create(this.sendReq);
    this.mediaproxy = MediaProxy.protocol.mediaproxy.v1.MediaProxyService.create(
      this.sendReq
    );
  }

  async getMessages(data: Chat.protocol.chat.v1.IGetMessageRequest) {
    const buffer = Chat.protocol.chat.v1.GetMessageRequest.encode(
      Chat.protocol.chat.v1.GetMessageRequest.create(data)
    ).finish();

    await fetch(``);
  }

  async sendReq(
    method: Method | rpc.ServiceMethod<Message<{}>, Message<{}>>,
    data: Uint8Array,
    cb?: RPCImplCallback
  ) {
    try {
      const resp = await fetch(`${this.host}/${method}`, {
        headers: {
          contentType: "application/octet-stream",
        },
        body: data,
        method: "POST",
      });
      if (cb) return cb(null, new Uint8Array(await resp.arrayBuffer()));
    } catch (e) {
      if (cb) return cb(e);
    }
  }

  streamReq(method: string): Promise<WebSocket> {
    const ws = new WebSocket(`wss://${this.host}/${method}`);
    return new Promise((resolve, reject) => {
      ws.onopen = () => resolve(ws);
      ws.onclose = (err) => reject(err);
    });
  }
}
