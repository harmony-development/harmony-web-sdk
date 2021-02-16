"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../connection");
const conn = new connection_1.Connection("https://chat.harmonyapp.io");
test("should BeginAuth", async () => {
    await conn.auth.BeginAuth({});
});
//# sourceMappingURL=connection.test.js.map