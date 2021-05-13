/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"

type Absent<T, K extends keyof T> = { [k in Exclude<keyof T, K>]?: undefined };
type OneOf<T> =
  | { [k in keyof T]?: undefined }
  | (
    keyof T extends infer K ?
      (K extends string & keyof T ? { [k in K]: T[K] } & Absent<T, K>
        : never)
    : never);
export type SiteMetadata = {
  siteTitle?: string
  pageTitle?: string
  kind?: string
  description?: string
  url?: string
  image?: string
}

export type MediaMetadata = {
  mimetype?: string
  filename?: string
}

export type FetchLinkMetadataRequest = {
  url?: string
}


type BaseFetchLinkMetadataResponse = {
}

export type FetchLinkMetadataResponse = BaseFetchLinkMetadataResponse
  & OneOf<{ isSite: SiteMetadata; isMedia: MediaMetadata }>

export type InstantViewRequest = {
  url?: string
}

export type InstantViewResponse = {
  metadata?: SiteMetadata
  content?: string
  isValid?: boolean
}

export type CanInstantViewResponse = {
  canInstantView?: boolean
}

export class MediaProxyService {
  static FetchLinkMetadata(req: FetchLinkMetadataRequest, initReq?: fm.InitReq): Promise<FetchLinkMetadataResponse> {
    return fm.fetchReq<FetchLinkMetadataRequest, FetchLinkMetadataResponse>(`/protocol.mediaproxy.v1.MediaProxyService/FetchLinkMetadata`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static InstantView(req: InstantViewRequest, initReq?: fm.InitReq): Promise<InstantViewResponse> {
    return fm.fetchReq<InstantViewRequest, InstantViewResponse>(`/protocol.mediaproxy.v1.MediaProxyService/InstantView`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static CanInstantView(req: InstantViewRequest, initReq?: fm.InitReq): Promise<CanInstantViewResponse> {
    return fm.fetchReq<InstantViewRequest, CanInstantViewResponse>(`/protocol.mediaproxy.v1.MediaProxyService/CanInstantView`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
}