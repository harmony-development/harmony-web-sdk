export function FoundationService(): void;
export namespace FoundationService {
    export const serviceName: string;
}
export var FoundationServiceClient: typeof FoundationServiceClient;
declare function FoundationServiceClient(serviceHost: any, options: any): void;
declare class FoundationServiceClient {
    constructor(serviceHost: any, options: any);
    serviceHost: any;
    options: any;
    federate(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    key(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    login(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
    register(requestMessage: any, metadata: any, callback: any, ...args: any[]): {
        cancel: () => void;
    };
}
export {};
