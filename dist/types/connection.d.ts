import { grpc } from "@improbable-eng/grpc-web";
import { StreamEventsRequest, Event } from "../protocol/core/v1/core_pb";
import { UnaryOutput } from "@improbable-eng/grpc-web/dist/typings/unary";
import { ProtobufMessage } from "@improbable-eng/grpc-web/dist/typings/message";
import { UnaryMethodDefinition } from "@improbable-eng/grpc-web/dist/typings/service";
import EventEmitter from "eventemitter3";
declare type ServerStreamResponses = {
    [Event.EventCase.SENT_MESSAGE]: [string, Event.MessageSent.AsObject];
    [Event.EventCase.LEFT_MEMBER]: [string, Event.MemberLeft.AsObject];
    [Event.EventCase.JOINED_MEMBER]: [string, Event.MemberJoined.AsObject];
    [Event.EventCase.EDITED_MESSAGE]: [string, Event.MessageUpdated.AsObject];
    [Event.EventCase.EDITED_GUILD]: [string, Event.GuildUpdated.AsObject];
    [Event.EventCase.EDITED_CHANNEL]: [string, Event.ChannelUpdated.AsObject];
    [Event.EventCase.DELETED_MESSAGE]: [string, Event.MessageDeleted.AsObject];
    [Event.EventCase.DELETED_GUILD]: [string, Event.GuildDeleted.AsObject];
    [Event.EventCase.DELETED_CHANNEL]: [string, Event.ChannelDeleted.AsObject];
    [Event.EventCase.CREATED_CHANNEL]: [string, Event.ChannelCreated.AsObject];
    disconnect: [grpc.Code, string, grpc.Metadata];
};
export declare class Connection {
    host: string;
    session?: string;
    events: EventEmitter<ServerStreamResponses>;
    client?: grpc.Client<StreamEventsRequest, Event>;
    constructor(host: string);
    unaryReq<T1 extends ProtobufMessage, T2 extends ProtobufMessage>(descriptor: UnaryMethodDefinition<T1, T2>, request: T1, auth?: boolean): Promise<UnaryOutput<T2>>;
    /**
     * This function is an ugly bastard
     * @param msg an event message
     */
    onGuildEvent(msg: Event): void;
    beginStream(): void;
    subscribe(guildID: string): void;
    getKey(): Promise<UnaryOutput<import("../protocol/foundation/v1/foundation_pb").KeyReply>>;
    loginLocal(email: string, password: string): Promise<UnaryOutput<import("../protocol/foundation/v1/foundation_pb").Session>>;
    loginFederated(token: string, domain: string): Promise<UnaryOutput<import("../protocol/foundation/v1/foundation_pb").Session>>;
    register(email: string, username: string, password: string): Promise<UnaryOutput<import("../protocol/foundation/v1/foundation_pb").Session>>;
    federate(target: string): Promise<UnaryOutput<import("../protocol/foundation/v1/foundation_pb").FederateReply>>;
    uploadFile(f: File): Promise<{
        id: string;
    }>;
}
export {};
