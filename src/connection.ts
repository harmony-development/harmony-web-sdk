import { AuthServiceClient } from "../gen/auth/v1/auth";
import { ChatServiceClient } from "../gen/chat/v1/chat";
import { HrpcTransport } from "./hrpcTransport";
import { MediaProxyServiceClient } from "../gen/mediaproxy/v1/mediaproxy";

export interface UploadedFile {
  name: string;
  contentType: string;
  id: string;
  size: number;
}

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

  async uploadFile(f: File) {
    const url = new URL(`${this.host}/_harmony/media/upload`);
    url.searchParams.set("filename", f.name);
    url.searchParams.set("contentType", f.type || "text/plain");
    const data = new FormData();
    data.set("file", f);
    const headers = new Headers();
    headers.set("Authorization", this.session || "");
    const resp = await fetch(url.toString(), {
      body: data,
      method: "POST",
      headers,
    });
    const asJSON = await resp.json();
    return {
      name: f.name,
      contentType: f.type,
      id: asJSON.id,
      size: f.size,
    } as UploadedFile;
  }
}
