import { Connection } from "../connection";
import "whatwg-fetch";

const conn = new Connection("https://chat.harmonyapp.io");

test("should BeginAuth", async () => {
  const resp = await conn.auth.BeginAuth({});
  expect(resp.authId).toBeTruthy();
});
