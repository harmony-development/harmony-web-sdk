// package: protocol.auth.v1
// file: auth/v1/auth.proto

import * as auth_v1_auth_pb from "../../auth/v1/auth_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthServiceFederate = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_v1_auth_pb.FederateRequest;
  readonly responseType: typeof auth_v1_auth_pb.FederateReply;
};

type AuthServiceKey = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_v1_auth_pb.KeyRequest;
  readonly responseType: typeof auth_v1_auth_pb.KeyReply;
};

type AuthServiceLogin = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_v1_auth_pb.LoginRequest;
  readonly responseType: typeof auth_v1_auth_pb.Session;
};

type AuthServiceRegister = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_v1_auth_pb.RegisterRequest;
  readonly responseType: typeof auth_v1_auth_pb.Session;
};

type AuthServiceGetConfig = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof auth_v1_auth_pb.GetConfigResponse;
};

export class AuthService {
  static readonly serviceName: string;
  static readonly Federate: AuthServiceFederate;
  static readonly Key: AuthServiceKey;
  static readonly Login: AuthServiceLogin;
  static readonly Register: AuthServiceRegister;
  static readonly GetConfig: AuthServiceGetConfig;
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

export class AuthServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  federate(
    requestMessage: auth_v1_auth_pb.FederateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.FederateReply|null) => void
  ): UnaryResponse;
  federate(
    requestMessage: auth_v1_auth_pb.FederateRequest,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.FederateReply|null) => void
  ): UnaryResponse;
  key(
    requestMessage: auth_v1_auth_pb.KeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.KeyReply|null) => void
  ): UnaryResponse;
  key(
    requestMessage: auth_v1_auth_pb.KeyRequest,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.KeyReply|null) => void
  ): UnaryResponse;
  login(
    requestMessage: auth_v1_auth_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.Session|null) => void
  ): UnaryResponse;
  login(
    requestMessage: auth_v1_auth_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.Session|null) => void
  ): UnaryResponse;
  register(
    requestMessage: auth_v1_auth_pb.RegisterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.Session|null) => void
  ): UnaryResponse;
  register(
    requestMessage: auth_v1_auth_pb.RegisterRequest,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.Session|null) => void
  ): UnaryResponse;
  getConfig(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.GetConfigResponse|null) => void
  ): UnaryResponse;
  getConfig(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.GetConfigResponse|null) => void
  ): UnaryResponse;
}

