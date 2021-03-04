import { Connection } from "../connection";
import authproto from '../../protocol/auth/v1/output'
import { Stream } from "src/harmonystream";
import "whatwg-fetch";

const conn = new Connection("https://chat.harmonyapp.io:2289");

describe("auth", () => {
  let authID: string | undefined = undefined;
  let stepstream: Stream<typeof authproto.protocol.auth.v1.AuthStep, typeof authproto.protocol.auth.v1.StreamStepsRequest, authproto.protocol.auth.v1.StreamStepsRequest, authproto.protocol.auth.v1.AuthStep> | undefined = undefined;
  test("should be able to BeginAuth", async () => {
    const resp = await conn.auth.BeginAuth({});
    authID = resp.authId;
    expect(resp.authId).toBeTruthy();
  });
  test("should be able to StreamSteps", (done) => {
    expect.assertions(2);
    stepstream = conn.auth.StreamSteps();
    stepstream.eventEmitter.on("open", () => {
      expect(stepstream?.ws.readyState).toStrictEqual(1);
      done();
    })
    stepstream.eventEmitter.on("close", (ev) => {
      console.log("closed");
      done.fail(`${ev.code} ${ev.reason}`);
    });
    expect(stepstream).toBeInstanceOf(Stream);
  });

  test("should be able to receive first step", async () => {
    expect(stepstream?.ws.readyState).toStrictEqual(1);
    expect.assertions(2);
    stepstream!.eventEmitter.on("data", (ev) => expect(ev).toBeDefined());
    const resp = await conn.auth.NextStep({
      authId: authID,
    });
    expect(resp).toBeDefined();
  });
});
