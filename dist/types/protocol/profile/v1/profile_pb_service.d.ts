export function ProfileService(): void;
export namespace ProfileService {
    export const serviceName: string;
}
export var ProfileServiceClient: typeof ProfileServiceClient;
declare function ProfileServiceClient(serviceHost: any, options: any): void;
declare class ProfileServiceClient {
    constructor(serviceHost: any, options: any);
    serviceHost: any;
    options: any;
    getUser(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    getUserMetadata(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    usernameUpdate(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    statusUpdate(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
}
export {};
