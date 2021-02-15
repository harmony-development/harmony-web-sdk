import { Message, Method, rpc, RPCImplCallback } from "protobufjs";
import Auth from "../protocol/auth/v1/output";
import Chat from "../protocol/chat/v1/output";
import MediaProxy from "../protocol/mediaproxy/v1/output";
export declare class Connection {
  host: string;
  session?: string;
  auth: Auth.protocol.auth.v1.AuthService;
  chat: Chat.protocol.chat.v1.ChatService;
  mediaproxy: MediaProxy.protocol.mediaproxy.v1.MediaProxyService;
  constructor(host: string);
  sendReq(
    method: Method | rpc.ServiceMethod<Message<{}>, Message<{}>>,
    data: Uint8Array,
    cb?: RPCImplCallback
  ): Promise<void>;
}
