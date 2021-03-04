import { Writer, Reader } from "protobufjs";
import { createNanoEvents, Emitter } from "nanoevents";

export class Stream<
  Decode extends {
    decode: (reader: Reader | Uint8Array) => ToBeDecoded;
  },
  Encode extends { encode: (message: ToBeEncoded) => Writer },
  ToBeEncoded,
  ToBeDecoded
> {
  host: string;
  decodeProto: Decode;
  encodeProto: Encode;
  ws: WebSocket;
  eventEmitter: Emitter<{
    data: (decoded: ToBeDecoded) => void;
    open: (ev: Event) => void;
    close: (ev: CloseEvent) => void;
  }>;

  constructor(
    host: string,
    path: string,
    decodeProto: Decode,
    encodeProto: Encode,
    session?: string
  ) {
    this.eventEmitter = createNanoEvents();
    this.host = host;
    this.decodeProto = decodeProto;
    this.encodeProto = encodeProto;
    this.ws = new WebSocket(
      `${host.replace("https://", "wss://")}${path}`,
      session ? ["access_token", session] : undefined
    );
    this.ws.binaryType = "arraybuffer";
    this.ws.onmessage = (msg) => {
      const decoded = decodeProto.decode(new Uint8Array(msg.data));
      this.eventEmitter.emit("data", decoded);
    };
    this.ws.onopen = (ev) => this.eventEmitter.emit("open", ev)
    this.ws.onclose = (ev) => this.eventEmitter.emit("close", ev)
  }

  send(data: ToBeEncoded) {
    this.ws.send(this.encodeProto.encode(data).finish());
  }
}