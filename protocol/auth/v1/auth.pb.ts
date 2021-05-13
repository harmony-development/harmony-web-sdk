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
export type BeginAuthResponse = {
  authId?: string
}

export type Session = {
  userId?: string
  sessionToken?: string
}

export type AuthStepChoice = {
  title?: string
  options?: string[]
}

export type AuthStepFormFormField = {
  name?: string
  type?: string
}

export type AuthStepForm = {
  title?: string
  fields?: AuthStepFormFormField[]
}

export type AuthStepWaiting = {
  title?: string
  description?: string
}


type BaseAuthStep = {
  fallbackUrl?: string
  canGoBack?: boolean
}

export type AuthStep = BaseAuthStep
  & OneOf<{ choice: AuthStepChoice; form: AuthStepForm; session: Session; waiting: AuthStepWaiting }>

export type NextStepRequestChoice = {
  choice?: string
}


type BaseNextStepRequestFormFields = {
}

export type NextStepRequestFormFields = BaseNextStepRequestFormFields
  & OneOf<{ bytes: Uint8Array; string: string; number: string }>

export type NextStepRequestForm = {
  fields?: NextStepRequestFormFields[]
}


type BaseNextStepRequest = {
  authId?: string
}

export type NextStepRequest = BaseNextStepRequest
  & OneOf<{ choice: NextStepRequestChoice; form: NextStepRequestForm }>

export type StepBackRequest = {
  authId?: string
}

export type StreamStepsRequest = {
  authId?: string
}

export type FederateRequest = {
  target?: string
}

export type FederateReply = {
  token?: string
  nonce?: string
}

export type KeyReply = {
  key?: string
}

export type LoginFederatedRequest = {
  authToken?: string
  domain?: string
}

export class AuthService {
  static Federate(req: FederateRequest, initReq?: fm.InitReq): Promise<FederateReply> {
    return fm.fetchReq<FederateRequest, FederateReply>(`/protocol.auth.v1.AuthService/Federate`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static LoginFederated(req: LoginFederatedRequest, initReq?: fm.InitReq): Promise<Session> {
    return fm.fetchReq<LoginFederatedRequest, Session>(`/protocol.auth.v1.AuthService/LoginFederated`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static Key(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<KeyReply> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, KeyReply>(`/protocol.auth.v1.AuthService/Key`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static BeginAuth(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<BeginAuthResponse> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, BeginAuthResponse>(`/protocol.auth.v1.AuthService/BeginAuth`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static NextStep(req: NextStepRequest, initReq?: fm.InitReq): Promise<AuthStep> {
    return fm.fetchReq<NextStepRequest, AuthStep>(`/protocol.auth.v1.AuthService/NextStep`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static StepBack(req: StepBackRequest, initReq?: fm.InitReq): Promise<AuthStep> {
    return fm.fetchReq<StepBackRequest, AuthStep>(`/protocol.auth.v1.AuthService/StepBack`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static StreamSteps(req: StreamStepsRequest, entityNotifier?: fm.NotifyStreamEntityArrival<AuthStep>, initReq?: fm.InitReq): Promise<void> {
    return fm.fetchStreamingRequest<StreamStepsRequest, AuthStep>(`/protocol.auth.v1.AuthService/StreamSteps`, entityNotifier, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static CheckLoggedIn(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, GoogleProtobufEmpty.Empty>(`/protocol.auth.v1.AuthService/CheckLoggedIn`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
}