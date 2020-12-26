// package: protocol.mediaproxy.v1
// file: mediaproxy/v1/mediaproxy.proto

import * as mediaproxy_v1_mediaproxy_pb from "../../mediaproxy/v1/mediaproxy_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MediaProxyServiceFetchLinkMetadata = {
  readonly methodName: string;
  readonly service: typeof MediaProxyService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mediaproxy_v1_mediaproxy_pb.FetchLinkMetadataRequest;
  readonly responseType: typeof mediaproxy_v1_mediaproxy_pb.SiteMetadata;
};

type MediaProxyServiceInstantView = {
  readonly methodName: string;
  readonly service: typeof MediaProxyService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mediaproxy_v1_mediaproxy_pb.InstantViewRequest;
  readonly responseType: typeof mediaproxy_v1_mediaproxy_pb.InstantViewResponse;
};

type MediaProxyServiceCanInstantView = {
  readonly methodName: string;
  readonly service: typeof MediaProxyService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof mediaproxy_v1_mediaproxy_pb.InstantViewRequest;
  readonly responseType: typeof mediaproxy_v1_mediaproxy_pb.CanInstantViewResponse;
};

export class MediaProxyService {
  static readonly serviceName: string;
  static readonly FetchLinkMetadata: MediaProxyServiceFetchLinkMetadata;
  static readonly InstantView: MediaProxyServiceInstantView;
  static readonly CanInstantView: MediaProxyServiceCanInstantView;
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

export class MediaProxyServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  fetchLinkMetadata(
    requestMessage: mediaproxy_v1_mediaproxy_pb.FetchLinkMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mediaproxy_v1_mediaproxy_pb.SiteMetadata|null) => void
  ): UnaryResponse;
  fetchLinkMetadata(
    requestMessage: mediaproxy_v1_mediaproxy_pb.FetchLinkMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: mediaproxy_v1_mediaproxy_pb.SiteMetadata|null) => void
  ): UnaryResponse;
  instantView(
    requestMessage: mediaproxy_v1_mediaproxy_pb.InstantViewRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mediaproxy_v1_mediaproxy_pb.InstantViewResponse|null) => void
  ): UnaryResponse;
  instantView(
    requestMessage: mediaproxy_v1_mediaproxy_pb.InstantViewRequest,
    callback: (error: ServiceError|null, responseMessage: mediaproxy_v1_mediaproxy_pb.InstantViewResponse|null) => void
  ): UnaryResponse;
  canInstantView(
    requestMessage: mediaproxy_v1_mediaproxy_pb.InstantViewRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: mediaproxy_v1_mediaproxy_pb.CanInstantViewResponse|null) => void
  ): UnaryResponse;
  canInstantView(
    requestMessage: mediaproxy_v1_mediaproxy_pb.InstantViewRequest,
    callback: (error: ServiceError|null, responseMessage: mediaproxy_v1_mediaproxy_pb.CanInstantViewResponse|null) => void
  ): UnaryResponse;
}

