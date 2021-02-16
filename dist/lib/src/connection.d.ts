import Auth from "../protocol/auth/v1/auth";
import Chat from "../protocol/chat/v1/chat";
import MediaProxy from "../protocol/mediaproxy/v1/mediaproxy";
export declare class Connection {
    host: string;
    auth: Auth;
    chat: Chat;
    mediaProxy: MediaProxy;
    private session?;
    constructor(host: string);
    setSession(session: string): void;
    getSession(): string | undefined;
}
