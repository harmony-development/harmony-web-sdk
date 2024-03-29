// @generated by protobuf-ts 2.2.2 with parameter long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "sync/v1/sync.proto" (package "protocol.sync.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { PostboxService } from "./sync";
import type { NotifyNewIdResponse } from "./sync";
import type { NotifyNewIdRequest } from "./sync";
import type { PushResponse } from "./sync";
import type { PushRequest } from "./sync";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { PullResponse } from "./sync";
import type { PullRequest } from "./sync";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * # Postbox
 *
 * The postbox service forms the core of Harmony's server <-> server communications.
 *
 * It concerns the transfer of Events between servers, as well as ensuring reliable
 * delivery of them.
 *
 * The semantics of events are documented in the event types. The postbox service
 * is solely reliable for reliable pushing and pulling.
 *
 * ## Server Identification
 *
 * Servers are identified using their domain, and the port which they serve. This is
 * called the "server ID", and must be formatted as `domain:port`. The port is NOT
 * optional. Converting this ID to a URL for communicating can simply be done via
 * prefixing the ID with a protocol, eg. `https://`.
 *
 * ## Authorisation
 *
 * Requests are authorised using a serialized `harmonytypes.v1.Token` in the Authorization HTTP header.
 * The `data` field of the token will be a serialized `AuthData` message.
 * The private key used to sign is the homeserver's private key.
 *
 * ## Events
 *
 * In this section, we will use sender and recipient to refer to the servers
 * sending the events and the server receiving the events respectively.
 *
 * At PostboxService startup, a sender should first Pull all receivers it had
 * federated from before. If a receiver makes a Push to the sender while a Pull
 * is going on, the Push should be processed after the Pull is completed.
 *
 * The sender will attempt to Push to the receiver. If the Push RPC fails more
 * than X times (a recommended retry count is 5), the event will be dispatched
 * to the sender's queue for the receiver. Unless the receiver pulls these events,
 * all new events should be dispatched to the queue. No new Push RPC should be made
 * before the queue is emptied. This ensures that events are always received in the
 * right order.
 *
 * It is recommended that receivers try pulling periodically, for example, every
 * 1 minute after the last Push RPC by the sender. This ensures that events are recieved.
 *
 * @generated from protobuf service protocol.sync.v1.PostboxService
 */
export interface IPostboxServiceClient {
    /**
     * Endpoint to pull events.
     *
     * @generated from protobuf rpc: Pull(protocol.sync.v1.PullRequest) returns (protocol.sync.v1.PullResponse);
     */
    pull(input: PullRequest, options?: RpcOptions): UnaryCall<PullRequest, PullResponse>;
    /**
     * Endpoint to push events.
     *
     * @generated from protobuf rpc: Push(protocol.sync.v1.PushRequest) returns (protocol.sync.v1.PushResponse);
     */
    push(input: PushRequest, options?: RpcOptions): UnaryCall<PushRequest, PushResponse>;
    /**
     * Endpoint to notify a server of a server ID change. It is called by the server
     * that had it's server ID changed for all servers it has federated with.
     *
     * @generated from protobuf rpc: NotifyNewId(protocol.sync.v1.NotifyNewIdRequest) returns (protocol.sync.v1.NotifyNewIdResponse);
     */
    notifyNewId(input: NotifyNewIdRequest, options?: RpcOptions): UnaryCall<NotifyNewIdRequest, NotifyNewIdResponse>;
}
/**
 * # Postbox
 *
 * The postbox service forms the core of Harmony's server <-> server communications.
 *
 * It concerns the transfer of Events between servers, as well as ensuring reliable
 * delivery of them.
 *
 * The semantics of events are documented in the event types. The postbox service
 * is solely reliable for reliable pushing and pulling.
 *
 * ## Server Identification
 *
 * Servers are identified using their domain, and the port which they serve. This is
 * called the "server ID", and must be formatted as `domain:port`. The port is NOT
 * optional. Converting this ID to a URL for communicating can simply be done via
 * prefixing the ID with a protocol, eg. `https://`.
 *
 * ## Authorisation
 *
 * Requests are authorised using a serialized `harmonytypes.v1.Token` in the Authorization HTTP header.
 * The `data` field of the token will be a serialized `AuthData` message.
 * The private key used to sign is the homeserver's private key.
 *
 * ## Events
 *
 * In this section, we will use sender and recipient to refer to the servers
 * sending the events and the server receiving the events respectively.
 *
 * At PostboxService startup, a sender should first Pull all receivers it had
 * federated from before. If a receiver makes a Push to the sender while a Pull
 * is going on, the Push should be processed after the Pull is completed.
 *
 * The sender will attempt to Push to the receiver. If the Push RPC fails more
 * than X times (a recommended retry count is 5), the event will be dispatched
 * to the sender's queue for the receiver. Unless the receiver pulls these events,
 * all new events should be dispatched to the queue. No new Push RPC should be made
 * before the queue is emptied. This ensures that events are always received in the
 * right order.
 *
 * It is recommended that receivers try pulling periodically, for example, every
 * 1 minute after the last Push RPC by the sender. This ensures that events are recieved.
 *
 * @generated from protobuf service protocol.sync.v1.PostboxService
 */
export class PostboxServiceClient implements IPostboxServiceClient, ServiceInfo {
    typeName = PostboxService.typeName;
    methods = PostboxService.methods;
    options = PostboxService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Endpoint to pull events.
     *
     * @generated from protobuf rpc: Pull(protocol.sync.v1.PullRequest) returns (protocol.sync.v1.PullResponse);
     */
    pull(input: PullRequest, options?: RpcOptions): UnaryCall<PullRequest, PullResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<PullRequest, PullResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Endpoint to push events.
     *
     * @generated from protobuf rpc: Push(protocol.sync.v1.PushRequest) returns (protocol.sync.v1.PushResponse);
     */
    push(input: PushRequest, options?: RpcOptions): UnaryCall<PushRequest, PushResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<PushRequest, PushResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Endpoint to notify a server of a server ID change. It is called by the server
     * that had it's server ID changed for all servers it has federated with.
     *
     * @generated from protobuf rpc: NotifyNewId(protocol.sync.v1.NotifyNewIdRequest) returns (protocol.sync.v1.NotifyNewIdResponse);
     */
    notifyNewId(input: NotifyNewIdRequest, options?: RpcOptions): UnaryCall<NotifyNewIdRequest, NotifyNewIdResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<NotifyNewIdRequest, NotifyNewIdResponse>("unary", this._transport, method, opt, input);
    }
}
