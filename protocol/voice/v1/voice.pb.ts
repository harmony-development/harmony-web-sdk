/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
import * as GoogleProtobufEmpty from "../../google/protobuf/empty.pb"

type Absent<T, K extends keyof T> = { [k in Exclude<keyof T, K>]?: undefined };
type OneOf<T> =
  | { [k in keyof T]?: undefined }
  | (
    keyof T extends infer K ?
      (K extends string & keyof T ? { [k in K]: T[K] } & Absent<T, K>
        : never)
    : never);

type BaseSignal = {
}

export type Signal = BaseSignal
  & OneOf<{ iceCandidate: string; renegotiationNeeded: GoogleProtobufEmpty.Empty }>

export type ConnectRequest = {
  channelId?: string
  offer?: string
}

export type ConnectResponse = {
  answer?: string
}

export type StreamStateRequest = {
  channelId?: string
}

export class VoiceService {
  static Connect(req: ConnectRequest, initReq?: fm.InitReq): Promise<ConnectResponse> {
    return fm.fetchReq<ConnectRequest, ConnectResponse>(`/protocol.voice.v1.VoiceService/Connect`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static StreamState(req: StreamStateRequest, entityNotifier?: fm.NotifyStreamEntityArrival<Signal>, initReq?: fm.InitReq): Promise<void> {
    return fm.fetchStreamingRequest<StreamStateRequest, Signal>(`/protocol.voice.v1.VoiceService/StreamState`, entityNotifier, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
}