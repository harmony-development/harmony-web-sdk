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

type AuthServiceLoginFederated = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_v1_auth_pb.LoginFederatedRequest;
  readonly responseType: typeof auth_v1_auth_pb.Session;
};

type AuthServiceKey = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof auth_v1_auth_pb.KeyReply;
};

type AuthServiceBeginAuth = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof auth_v1_auth_pb.BeginAuthResponse;
};

type AuthServiceNextStep = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_v1_auth_pb.NextStepRequest;
  readonly responseType: typeof auth_v1_auth_pb.AuthStep;
};

type AuthServiceStepBack = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_v1_auth_pb.StepBackRequest;
  readonly responseType: typeof auth_v1_auth_pb.AuthStep;
};

type AuthServiceStreamSteps = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof auth_v1_auth_pb.StreamStepsRequest;
  readonly responseType: typeof auth_v1_auth_pb.AuthStep;
};

export class AuthService {
  static readonly serviceName: string;
  static readonly Federate: AuthServiceFederate;
  static readonly LoginFederated: AuthServiceLoginFederated;
  static readonly Key: AuthServiceKey;
  static readonly BeginAuth: AuthServiceBeginAuth;
  static readonly NextStep: AuthServiceNextStep;
  static readonly StepBack: AuthServiceStepBack;
  static readonly StreamSteps: AuthServiceStreamSteps;
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
  loginFederated(
    requestMessage: auth_v1_auth_pb.LoginFederatedRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.Session|null) => void
  ): UnaryResponse;
  loginFederated(
    requestMessage: auth_v1_auth_pb.LoginFederatedRequest,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.Session|null) => void
  ): UnaryResponse;
  key(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.KeyReply|null) => void
  ): UnaryResponse;
  key(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.KeyReply|null) => void
  ): UnaryResponse;
  beginAuth(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.BeginAuthResponse|null) => void
  ): UnaryResponse;
  beginAuth(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.BeginAuthResponse|null) => void
  ): UnaryResponse;
  nextStep(
    requestMessage: auth_v1_auth_pb.NextStepRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.AuthStep|null) => void
  ): UnaryResponse;
  nextStep(
    requestMessage: auth_v1_auth_pb.NextStepRequest,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.AuthStep|null) => void
  ): UnaryResponse;
  stepBack(
    requestMessage: auth_v1_auth_pb.StepBackRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.AuthStep|null) => void
  ): UnaryResponse;
  stepBack(
    requestMessage: auth_v1_auth_pb.StepBackRequest,
    callback: (error: ServiceError|null, responseMessage: auth_v1_auth_pb.AuthStep|null) => void
  ): UnaryResponse;
  streamSteps(requestMessage: auth_v1_auth_pb.StreamStepsRequest, metadata?: grpc.Metadata): ResponseStream<auth_v1_auth_pb.AuthStep>;
}

