// @generated by protobuf-ts 1.0.13 with parameters long_type_string,optimize_code_size,generate_dependencies
// @generated from protobuf file "sync/v1/sync.proto" (package "protocol.sync.v1", syntax proto3)
// tslint:disable
import { RpcTransport } from "@protobuf-ts/runtime-rpc";
import { MethodInfo } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { Empty } from "../../google/protobuf/empty";
import { UnaryCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import { DuplexStreamingCall } from "@protobuf-ts/runtime-rpc";
import { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf message protocol.sync.v1.Event
 */
export interface Event {
  /**
   * @generated from protobuf oneof: kind
   */
  kind:
    | {
        oneofKind: "userRemovedFromGuild";
        /**
         * @generated from protobuf field: protocol.sync.v1.Event.UserRemovedFromGuild user_removed_from_guild = 1;
         */
        userRemovedFromGuild: Event_UserRemovedFromGuild;
      }
    | {
        oneofKind: "userAddedToGuild";
        /**
         * @generated from protobuf field: protocol.sync.v1.Event.UserAddedToGuild user_added_to_guild = 2;
         */
        userAddedToGuild: Event_UserAddedToGuild;
      }
    | {
        oneofKind: undefined;
      };
}
/**
 * @generated from protobuf message protocol.sync.v1.Event.UserRemovedFromGuild
 */
export interface Event_UserRemovedFromGuild {
  /**
   * @generated from protobuf field: uint64 user_id = 1;
   */
  userId: string;
  /**
   * @generated from protobuf field: uint64 guild_id = 2;
   */
  guildId: string;
}
/**
 * @generated from protobuf message protocol.sync.v1.Event.UserAddedToGuild
 */
export interface Event_UserAddedToGuild {
  /**
   * @generated from protobuf field: uint64 user_id = 1;
   */
  userId: string;
  /**
   * @generated from protobuf field: uint64 guild_id = 2;
   */
  guildId: string;
}
/**
 * @generated from protobuf message protocol.sync.v1.PostEventRequest
 */
export interface PostEventRequest {
  /**
   * @generated from protobuf field: protocol.sync.v1.Event event = 1;
   */
  event?: Event;
}
/**
 * Acknowledgement of an event pulled using Pull.
 *
 * @generated from protobuf message protocol.sync.v1.Ack
 */
export interface Ack {
  /**
   * @generated from protobuf field: uint64 event_id = 1;
   */
  eventId: string;
}
/**
 * A synchronisation message pulled using Pull.
 *
 * @generated from protobuf message protocol.sync.v1.Syn
 */
export interface Syn {
  /**
   * @generated from protobuf field: uint64 event_id = 1;
   */
  eventId: string;
  /**
   * @generated from protobuf field: protocol.sync.v1.Event event = 2;
   */
  event?: Event;
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
 * ## Authorisation
 *
 * Requests are authorised using a JWT token in the Authorization HTTP header.
 *
 * The JWT token is signed using SHA-RSA-256 with the homeserver's private key,
 *
 * It contains the following fields, described using Go JSON semantics:
 * ```
 * Self string
 * Time uint53
 * ```
 *
 * Self is the server name of the server initiating the transaction. For Pull,
 * this tells the server being connected to which homeservers' events it should send.
 * For Push, this tells the server being connected to which homeservers' events it is
 * receiving.
 *
 * Time is the UTC UNIX time in seconds of when the request is started. Servers should reject
 * JWTs with a time too far from the current time, at their discretion. A recommended
 * variance is 1 minute.
 *
 * ## Events
 *
 * In this section, we will use sender and recipient to refer to the servers
 * sending the events and the server receiving the events respectively.
 *
 * When an event that a recipient would be interested in receiving occurs, the
 * sender should check whether or not there is an active Pull by the receiver.
 * If there is one, the server should dispatch the event to its queue as described
 * later in this document.
 * If there is not an active Pull by the receiver, the sender will attempt to Push
 * to the receiver. If the Push RPC fails, the event will be dispatched to the
 * sender's queue for the receiver.
 *
 * ### The Event Queue
 *
 * The event queue is an abstract data structure. It is filled by a sender when
 * a Push fails.
 *
 * It is emptied by Pull requests. When the receiver initiates a Pull, the sender
 * sends up to 100 Syns in sequential order before waiting on Acks. Events sent
 * as a Syn but without an Ack are considered in-flight.
 *
 * An event will be taken out of flight if it is Acked by the receiver.
 *
 * If the Pull is cancelled or errors out before the sender receives an Ack for
 * an event in-flight, it will be returned to the queue to be sent when the receiver
 * performs another Pull.
 *
 * When an event is Acked and removed from flight, an older event from the queue should be
 * sent.
 *
 * In essence, the queue is a LIFO stack. Newer events should be sent and acked before older events.
 *
 *
 * @generated from protobuf service protocol.sync.v1.PostboxService
 */
export interface IPostboxServiceClient {
  /**
   * @generated from protobuf rpc: Pull(stream protocol.sync.v1.Ack) returns (stream protocol.sync.v1.Syn);
   */
  pull(options?: RpcOptions): DuplexStreamingCall<Ack, Syn>;
  /**
   * @generated from protobuf rpc: Push(protocol.sync.v1.Event) returns (google.protobuf.Empty);
   */
  push(input: Event, options?: RpcOptions): UnaryCall<Event, Empty>;
}
/**
 * Type for protobuf message protocol.sync.v1.Event
 */
class Event$Type extends MessageType<Event> {
  constructor() {
    super("protocol.sync.v1.Event", [
      {
        no: 1,
        name: "user_removed_from_guild",
        kind: "message",
        oneof: "kind",
        T: () => Event_UserRemovedFromGuild,
      },
      {
        no: 2,
        name: "user_added_to_guild",
        kind: "message",
        oneof: "kind",
        T: () => Event_UserAddedToGuild,
      },
    ]);
  }
}
export const Event = new Event$Type();
/**
 * Type for protobuf message protocol.sync.v1.Event.UserRemovedFromGuild
 */
class Event_UserRemovedFromGuild$Type extends MessageType<Event_UserRemovedFromGuild> {
  constructor() {
    super("protocol.sync.v1.Event.UserRemovedFromGuild", [
      { no: 1, name: "user_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const Event_UserRemovedFromGuild = new Event_UserRemovedFromGuild$Type();
/**
 * Type for protobuf message protocol.sync.v1.Event.UserAddedToGuild
 */
class Event_UserAddedToGuild$Type extends MessageType<Event_UserAddedToGuild> {
  constructor() {
    super("protocol.sync.v1.Event.UserAddedToGuild", [
      { no: 1, name: "user_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "guild_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const Event_UserAddedToGuild = new Event_UserAddedToGuild$Type();
/**
 * Type for protobuf message protocol.sync.v1.PostEventRequest
 */
class PostEventRequest$Type extends MessageType<PostEventRequest> {
  constructor() {
    super("protocol.sync.v1.PostEventRequest", [
      { no: 1, name: "event", kind: "message", T: () => Event },
    ]);
  }
}
export const PostEventRequest = new PostEventRequest$Type();
/**
 * Type for protobuf message protocol.sync.v1.Ack
 */
class Ack$Type extends MessageType<Ack> {
  constructor() {
    super("protocol.sync.v1.Ack", [
      { no: 1, name: "event_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
    ]);
  }
}
export const Ack = new Ack$Type();
/**
 * Type for protobuf message protocol.sync.v1.Syn
 */
class Syn$Type extends MessageType<Syn> {
  constructor() {
    super("protocol.sync.v1.Syn", [
      { no: 1, name: "event_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
      { no: 2, name: "event", kind: "message", T: () => Event },
    ]);
  }
}
export const Syn = new Syn$Type();
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
 * ## Authorisation
 *
 * Requests are authorised using a JWT token in the Authorization HTTP header.
 *
 * The JWT token is signed using SHA-RSA-256 with the homeserver's private key,
 *
 * It contains the following fields, described using Go JSON semantics:
 * ```
 * Self string
 * Time uint53
 * ```
 *
 * Self is the server name of the server initiating the transaction. For Pull,
 * this tells the server being connected to which homeservers' events it should send.
 * For Push, this tells the server being connected to which homeservers' events it is
 * receiving.
 *
 * Time is the UTC UNIX time in seconds of when the request is started. Servers should reject
 * JWTs with a time too far from the current time, at their discretion. A recommended
 * variance is 1 minute.
 *
 * ## Events
 *
 * In this section, we will use sender and recipient to refer to the servers
 * sending the events and the server receiving the events respectively.
 *
 * When an event that a recipient would be interested in receiving occurs, the
 * sender should check whether or not there is an active Pull by the receiver.
 * If there is one, the server should dispatch the event to its queue as described
 * later in this document.
 * If there is not an active Pull by the receiver, the sender will attempt to Push
 * to the receiver. If the Push RPC fails, the event will be dispatched to the
 * sender's queue for the receiver.
 *
 * ### The Event Queue
 *
 * The event queue is an abstract data structure. It is filled by a sender when
 * a Push fails.
 *
 * It is emptied by Pull requests. When the receiver initiates a Pull, the sender
 * sends up to 100 Syns in sequential order before waiting on Acks. Events sent
 * as a Syn but without an Ack are considered in-flight.
 *
 * An event will be taken out of flight if it is Acked by the receiver.
 *
 * If the Pull is cancelled or errors out before the sender receives an Ack for
 * an event in-flight, it will be returned to the queue to be sent when the receiver
 * performs another Pull.
 *
 * When an event is Acked and removed from flight, an older event from the queue should be
 * sent.
 *
 * In essence, the queue is a LIFO stack. Newer events should be sent and acked before older events.
 *
 *
 * @generated from protobuf service protocol.sync.v1.PostboxService
 */
export class PostboxServiceClient implements IPostboxServiceClient {
  readonly typeName = "protocol.sync.v1.PostboxService";
  readonly methods: MethodInfo[] = [
    {
      service: this,
      name: "Pull",
      localName: "pull",
      I: Ack,
      O: Syn,
      clientStreaming: true,
      serverStreaming: true,
    },
    { service: this, name: "Push", localName: "push", I: Event, O: Empty },
  ];
  constructor(private readonly _transport: RpcTransport) {}
  pull(options?: RpcOptions): DuplexStreamingCall<Ack, Syn> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<Ack, Syn>("duplex", this._transport, method, opt);
  }
  push(input: Event, options?: RpcOptions): UnaryCall<Event, Empty> {
    const method = this.methods[1],
      opt = this._transport.mergeOptions(options),
      i = method.I.create(input);
    return stackIntercept<Event, Empty>(
      "unary",
      this._transport,
      method,
      opt,
      i
    );
  }
}
