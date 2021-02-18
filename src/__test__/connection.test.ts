import { Connection } from "../connection";
import "whatwg-fetch";

const conn = new Connection("https://chat.harmonyapp.io:2289");

describe("auth", () => {
  let authID: string | undefined = undefined;
  let stepstream: WebSocket | undefined = undefined;
  test("should be able to BeginAuth", async () => {
    const resp = await conn.auth.BeginAuth({});
    authID = resp.authId;
    expect(resp.authId).toBeTruthy();
  });
  test("should be able to StreamSteps", (done) => {
    expect.assertions(2);
    stepstream = conn.auth.StreamSteps();
    stepstream.onopen = () => {
      expect(stepstream?.readyState).toStrictEqual(1);
      done();
    };
    expect(stepstream).toBeInstanceOf(WebSocket);
    stepstream.onclose = (ev) => {
      console.log("closed");
      done.fail(`${ev.code} ${ev.reason}`);
    };
  });

  test("should be able to receive first step", async () => {
    expect(stepstream?.readyState).toStrictEqual(1);
    expect.assertions(2);
    stepstream!.onmessage = (ev) => expect(ev).toBeDefined();
    const resp = await conn.auth.NextStep({
      authId: authID,
    });
    expect(resp).toBeDefined();
  });
});
