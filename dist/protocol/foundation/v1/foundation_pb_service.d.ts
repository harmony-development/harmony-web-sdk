// package: protocol.foundation.v1
// file: foundation/v1/foundation.proto

import * as foundation_v1_foundation_pb from "../../foundation/v1/foundation_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FoundationServiceFederate = {
  readonly methodName: string;
  readonly service: typeof FoundationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof foundation_v1_foundation_pb.FederateRequest;
  readonly responseType: typeof foundation_v1_foundation_pb.FederateReply;
};

type FoundationServiceKey = {
  readonly methodName: string;
  readonly service: typeof FoundationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof foundation_v1_foundation_pb.KeyRequest;
  readonly responseType: typeof foundation_v1_foundation_pb.KeyReply;
};

type FoundationServiceLogin = {
  readonly methodName: string;
  readonly service: typeof FoundationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof foundation_v1_foundation_pb.LoginRequest;
  readonly responseType: typeof foundation_v1_foundation_pb.Session;
};

type FoundationServiceRegister = {
  readonly methodName: string;
  readonly service: typeof FoundationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof foundation_v1_foundation_pb.RegisterRequest;
  readonly responseType: typeof foundation_v1_foundation_pb.Session;
};

type FoundationServiceGetConfig = {
  readonly methodName: string;
  readonly service: typeof FoundationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof foundation_v1_foundation_pb.GetConfigResponse;
};

export class FoundationService {
  static readonly serviceName: string;
  static readonly Federate: FoundationServiceFederate;
  static readonly Key: FoundationServiceKey;
  static readonly Login: FoundationServiceLogin;
  static readonly Register: FoundationServiceRegister;
  static readonly GetConfig: FoundationServiceGetConfig;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class FoundationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  federate(
    requestMessage: foundation_v1_foundation_pb.FederateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: foundation_v1_foundation_pb.FederateReply|null) => void
  ): UnaryResponse;
  federate(
    requestMessage: foundation_v1_foundation_pb.FederateRequest,
    callback: (error: ServiceError|null, responseMessage: foundation_v1_foundation_pb.FederateReply|null) => void
  ): UnaryResponse;
  key(
    requestMessage: foundation_v1_foundation_pb.KeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: foundation_v1_foundation_pb.KeyReply|null) => void
  ): UnaryResponse;
  key(
    requestMessage: foundation_v1_foundation_pb.KeyRequest,
    callback: (error: ServiceError|null, responseMessage: foundation_v1_foundation_pb.KeyReply|null) => void
  ): UnaryResponse;
  login(
    requestMessage: foundation_v1_foundation_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: foundation_v1_foundation_pb.Session|null) => void
  ): UnaryResponse;
  login(
    requestMessage: foundation_v1_foundation_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: foundation_v1_foundation_pb.Session|null) => void
  ): UnaryResponse;
  register(
    requestMessage: foundation_v1_foundation_pb.RegisterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: foundation_v1_foundation_pb.Session|null) => void
  ): UnaryResponse;
  register(
    requestMessage: foundation_v1_foundation_pb.RegisterRequest,
    callback: (error: ServiceError|null, responseMessage: foundation_v1_foundation_pb.Session|null) => void
  ): UnaryResponse;
  getConfig(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: foundation_v1_foundation_pb.GetConfigResponse|null) => void
  ): UnaryResponse;
  getConfig(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: foundation_v1_foundation_pb.GetConfigResponse|null) => void
  ): UnaryResponse;
}

