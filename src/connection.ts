import { Message, Method, rpc, RPCImplCallback } from "protobufjs";
import Auth from "../protocol/auth/v1/auth";
import Chat from "../protocol/chat/v1/chat";
import MediaProxy from "../protocol/mediaproxy/v1/mediaproxy";

export class Connection {
  host: string;
  auth: Auth;
  chat: Chat;
  mediaProxy: MediaProxy;
  private session?: string;

  constructor(host: string) {
    this.host = host;
    this.auth = new Auth(host);
    this.chat = new Chat(host);
    this.mediaProxy = new MediaProxy(host);
  }

  setSession(session: string) {
    this.session = session;
    this.auth.session = session;
    this.chat.session = session;
    this.mediaProxy.session = session;
  }

  getSession() {
    return this.session;
  }
}
