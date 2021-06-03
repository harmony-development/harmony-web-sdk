// @generated by protobuf-ts 1.0.13 with parameters long_type_string,optimize_code_size,generate_dependencies
// @generated from protobuf file "sync/v1/sync.proto" (package "protocol.sync.v1", syntax proto3)
// tslint:disable
import { RpcTransport } from "@protobuf-ts/runtime-rpc";
import { MethodInfo } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { Empty } from "../../google/protobuf/empty";
import { UnaryCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import { RpcOptions } from "@protobuf-ts/runtime-rpc";
import { Any } from "../../google/protobuf/any";
/**
 * @generated from protobuf message protocol.sync.v1.SyncRequest
 */
export interface SyncRequest {
  /**
   * @generated from protobuf field: string token = 1;
   */
  token: string;
  /**
   * @generated from protobuf field: string host = 2;
   */
  host: string;
}
/**
 * @generated from protobuf message protocol.sync.v1.PostBoxEvent
 */
export interface PostBoxEvent {
  /**
   * @generated from protobuf field: google.protobuf.Any event = 1;
   */
  event?: Any;
}
/**
 * @generated from protobuf message protocol.sync.v1.PostEventRequest
 */
export interface PostEventRequest {
  /**
   * @generated from protobuf field: protocol.sync.v1.SyncRequest sync_request = 1;
   */
  syncRequest?: SyncRequest;
  /**
   * @generated from protobuf field: protocol.sync.v1.PostBoxEvent event = 2;
   */
  event?: PostBoxEvent;
}
/**
 * @generated from protobuf service protocol.sync.v1.PostboxService
 */
export interface IPostboxServiceClient {
  /**
   * @generated from protobuf rpc: Sync(protocol.sync.v1.SyncRequest) returns (stream protocol.sync.v1.PostBoxEvent);
   */
  sync(
    input: SyncRequest,
    options?: RpcOptions
  ): ServerStreamingCall<SyncRequest, PostBoxEvent>;
  /**
   * @generated from protobuf rpc: PostEvent(protocol.sync.v1.PostEventRequest) returns (google.protobuf.Empty);
   */
  postEvent(
    input: PostEventRequest,
    options?: RpcOptions
  ): UnaryCall<PostEventRequest, Empty>;
}
/**
 * Type for protobuf message protocol.sync.v1.SyncRequest
 */
class SyncRequest$Type extends MessageType<SyncRequest> {
  constructor() {
    super("protocol.sync.v1.SyncRequest", [
      { no: 1, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "host", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
}
export const SyncRequest = new SyncRequest$Type();
/**
 * Type for protobuf message protocol.sync.v1.PostBoxEvent
 */
class PostBoxEvent$Type extends MessageType<PostBoxEvent> {
  constructor() {
    super("protocol.sync.v1.PostBoxEvent", [
      { no: 1, name: "event", kind: "message", T: () => Any },
    ]);
  }
}
export const PostBoxEvent = new PostBoxEvent$Type();
/**
 * Type for protobuf message protocol.sync.v1.PostEventRequest
 */
class PostEventRequest$Type extends MessageType<PostEventRequest> {
  constructor() {
    super("protocol.sync.v1.PostEventRequest", [
      { no: 1, name: "sync_request", kind: "message", T: () => SyncRequest },
      { no: 2, name: "event", kind: "message", T: () => PostBoxEvent },
    ]);
  }
}
export const PostEventRequest = new PostEventRequest$Type();
/**
 * @generated from protobuf service protocol.sync.v1.PostboxService
 */
export class PostboxServiceClient implements IPostboxServiceClient {
  readonly typeName = "protocol.sync.v1.PostboxService";
  readonly methods: MethodInfo[] = [
    {
      service: this,
      name: "Sync",
      localName: "sync",
      I: SyncRequest,
      O: PostBoxEvent,
      serverStreaming: true,
    },
    {
      service: this,
      name: "PostEvent",
      localName: "postEvent",
      I: PostEventRequest,
      O: Empty,
    },
  ];
  constructor(private readonly _transport: RpcTransport) {}
  sync(
    input: SyncRequest,
    options?: RpcOptions
  ): ServerStreamingCall<SyncRequest, PostBoxEvent> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options),
      i = method.I.create(input);
    return stackIntercept<SyncRequest, PostBoxEvent>(
      "serverStreaming",
      this._transport,
      method,
      opt,
      i
    );
  }
  postEvent(
    input: PostEventRequest,
    options?: RpcOptions
  ): UnaryCall<PostEventRequest, Empty> {
    const method = this.methods[1],
      opt = this._transport.mergeOptions(options),
      i = method.I.create(input);
    return stackIntercept<PostEventRequest, Empty>(
      "unary",
      this._transport,
      method,
      opt,
      i
    );
  }
}
