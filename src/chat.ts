import Chat from "../protocol/chat/v1/output";

const chatv1 = Chat.protocol.chat.v1;

const requests = {
  "protocol.chat.v1.ChatService/GetGuildChannels": {},
};

class Connection {
  host: string;
  session?: string;

  constructor(host: string) {
    this.host = host;
  }

  setSession(session: string) {
    this.session = session;
  }

  async unaryReq(endpoint: string, data: Uint8Array, auth: boolean) {
    return new Uint8Array(
      await (
        await fetch(`https://${this.host}/${endpoint}`, {
          headers: {
            contentType: "application/octet-stream",
          },
          body: data,
          method: "POST",
        })
      ).arrayBuffer()
    );
  }

  async getChannels(
    val: Chat.protocol.chat.v1.IGetGuildChannelsRequest
  ): Promise<Chat.protocol.chat.v1.IGetGuildChannelsResponse> {
    const encoded = chatv1.GetGuildChannelsRequest.encode(val).finish();
    return Chat.protocol.chat.v1.GetGuildChannelsResponse.decode(
      new Uint8Array(
        await this.unaryReq(
          "protocol.chat.v1.ChatService/GetGuildChannels",
          encoded,
          true
        )
      )
    );
  }
}
