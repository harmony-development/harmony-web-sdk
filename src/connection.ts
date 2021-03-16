import { AuthServiceClient } from "../protocol/auth/v1/auth";
import { ChatServiceClient } from "../protocol/chat/v1/chat";
import { MediaProxyServiceClient } from "../protocol/mediaproxy/v1/mediaproxy";
import { HrpcTransport } from "./hrpcTransport";

export class Connection {
  host: string;
  auth: AuthServiceClient;
  chat: ChatServiceClient;
  mediaProxy: MediaProxyServiceClient;
  private session?: string;
  private transport: HrpcTransport;

  constructor(host: string) {
    this.host = host;
    this.transport = new HrpcTransport({
      baseUrl: host,
    });
    this.auth = new AuthServiceClient(this.transport);
    this.chat = new ChatServiceClient(this.transport);
    this.mediaProxy = new MediaProxyServiceClient(this.transport);
  }

  setSession(session: string) {
    this.session = session;
    this.transport.setSession(session);
  }

  getSession() {
    return this.session;
  }
}
