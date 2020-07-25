export function CoreService(): void;
export namespace CoreService {
    export const serviceName: string;
}
export var CoreServiceClient: typeof CoreServiceClient;
declare function CoreServiceClient(serviceHost: any, options: any): void;
declare class CoreServiceClient {
    constructor(serviceHost: any, options: any);
    serviceHost: any;
    options: any;
    createGuild(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    createInvite(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    createChannel(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    getGuild(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    getGuildInvites(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    getGuildMembers(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    getGuildChannels(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    getChannelMessages(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    updateGuildName(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    updateChannelName(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    updateChannelOrder(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    updateMessage(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    deleteGuild(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    deleteInvite(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    deleteChannel(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    deleteMessage(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    joinGuild(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    leaveGuild(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    triggerAction(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    sendMessage(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    localGuilds(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    streamGuildEvents(requestMessage: any, metadata: any): {
        on: (type: any, handler: any) => any;
        cancel: () => void;
    };
    streamActionEvents(requestMessage: any, metadata: any): {
        on: (type: any, handler: any) => any;
        cancel: () => void;
    };
}
export {};
