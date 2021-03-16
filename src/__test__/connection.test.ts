import { Connection } from "../connection";
import "whatwg-fetch";
import {
  AuthStep,
  NextStepRequest,
  StreamStepsRequest,
} from "protocol/auth/v1/auth";
import { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";

const conn = new Connection("https://chat.harmonyapp.io:2289");

describe("auth", () => {
  let authID: string | null = null;
  let stepstream: ServerStreamingCall<StreamStepsRequest, AuthStep> | undefined;

  test("should be able to BeginAuth", async () => {
    const resp = await conn.auth.beginAuth({});
    authID = resp.response.authId;
    expect(resp.response.authId).toBeTruthy();
  });
  test("should be able to StreamSteps", (done) => {
    stepstream = conn.auth.streamSteps(StreamStepsRequest.fromJson({}));
    stepstream.response.onError((err) => {
      console.log("closed");
      done.fail(err.message);
    });
    expect(stepstream).toBeInstanceOf(ServerStreamingCall);
  });

  test("should be able to receive first step", async () => {
    expect.assertions(2);
    stepstream!.response.onMessage((step) => expect(step).toBeDefined());
    const resp = await conn.auth.nextStep(
      NextStepRequest.fromJson({
        authID: authID,
      })
    );
    expect(resp).toBeDefined();
  });
});
