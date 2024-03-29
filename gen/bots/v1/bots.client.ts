// @generated by protobuf-ts 2.2.2 with parameter long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "bots/v1/bots.proto" (package "protocol.bots.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { BotsService } from "./bots";
import type { AddBotResponse } from "./bots";
import type { AddBotRequest } from "./bots";
import type { PoliciesResponse } from "./bots";
import type { PoliciesRequest } from "./bots";
import type { DeleteBotResponse } from "./bots";
import type { DeleteBotRequest } from "./bots";
import type { RefreshTokenResponse } from "./bots";
import type { RefreshTokenRequest } from "./bots";
import type { EditBotResponse } from "./bots";
import type { EditBotRequest } from "./bots";
import type { CreateBotResponse } from "./bots";
import type { CreateBotRequest } from "./bots";
import type { GetBotResponse } from "./bots";
import type { GetBotRequest } from "./bots";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MyBotsResponse } from "./bots";
import type { MyBotsRequest } from "./bots";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * The Bots service allows the management of bot accounts.
 *
 * @generated from protobuf service protocol.bots.v1.BotsService
 */
export interface IBotsServiceClient {
    /**
     * Gets the list of bots that you own.
     *
     * @generated from protobuf rpc: MyBots(protocol.bots.v1.MyBotsRequest) returns (protocol.bots.v1.MyBotsResponse);
     */
    myBots(input: MyBotsRequest, options?: RpcOptions): UnaryCall<MyBotsRequest, MyBotsResponse>;
    /**
     * Gets information on a given bot.
     *
     * @generated from protobuf rpc: GetBot(protocol.bots.v1.GetBotRequest) returns (protocol.bots.v1.GetBotResponse);
     */
    getBot(input: GetBotRequest, options?: RpcOptions): UnaryCall<GetBotRequest, GetBotResponse>;
    /**
     * Creates a new bot account.
     *
     * @generated from protobuf rpc: CreateBot(protocol.bots.v1.CreateBotRequest) returns (protocol.bots.v1.CreateBotResponse);
     */
    createBot(input: CreateBotRequest, options?: RpcOptions): UnaryCall<CreateBotRequest, CreateBotResponse>;
    /**
     * Modifies a bot account that you own.
     *
     * @generated from protobuf rpc: EditBot(protocol.bots.v1.EditBotRequest) returns (protocol.bots.v1.EditBotResponse);
     */
    editBot(input: EditBotRequest, options?: RpcOptions): UnaryCall<EditBotRequest, EditBotResponse>;
    /**
     * Refreshes the authentication token for a bot that you own
     *
     * This invalidates the current authentication token and returns a new one.
     *
     * @generated from protobuf rpc: RefreshToken(protocol.bots.v1.RefreshTokenRequest) returns (protocol.bots.v1.RefreshTokenResponse);
     */
    refreshToken(input: RefreshTokenRequest, options?: RpcOptions): UnaryCall<RefreshTokenRequest, RefreshTokenResponse>;
    /**
     * Deletes a bot account that you own
     *
     * @generated from protobuf rpc: DeleteBot(protocol.bots.v1.DeleteBotRequest) returns (protocol.bots.v1.DeleteBotResponse);
     */
    deleteBot(input: DeleteBotRequest, options?: RpcOptions): UnaryCall<DeleteBotRequest, DeleteBotResponse>;
    /**
     * Server policies for bot accounts that the client
     * may display in its UI or restrict actions to prevent
     * request errors.
     *
     * @generated from protobuf rpc: Policies(protocol.bots.v1.PoliciesRequest) returns (protocol.bots.v1.PoliciesResponse);
     */
    policies(input: PoliciesRequest, options?: RpcOptions): UnaryCall<PoliciesRequest, PoliciesResponse>;
    /**
     * Requests a bot to add itself to the guild.
     *
     * For cross-server bots, this dispatches a UserInvited
     * request across sync, inviting the bot to the guild.
     *
     * @generated from protobuf rpc: AddBot(protocol.bots.v1.AddBotRequest) returns (protocol.bots.v1.AddBotResponse);
     */
    addBot(input: AddBotRequest, options?: RpcOptions): UnaryCall<AddBotRequest, AddBotResponse>;
}
/**
 * The Bots service allows the management of bot accounts.
 *
 * @generated from protobuf service protocol.bots.v1.BotsService
 */
export class BotsServiceClient implements IBotsServiceClient, ServiceInfo {
    typeName = BotsService.typeName;
    methods = BotsService.methods;
    options = BotsService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Gets the list of bots that you own.
     *
     * @generated from protobuf rpc: MyBots(protocol.bots.v1.MyBotsRequest) returns (protocol.bots.v1.MyBotsResponse);
     */
    myBots(input: MyBotsRequest, options?: RpcOptions): UnaryCall<MyBotsRequest, MyBotsResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MyBotsRequest, MyBotsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Gets information on a given bot.
     *
     * @generated from protobuf rpc: GetBot(protocol.bots.v1.GetBotRequest) returns (protocol.bots.v1.GetBotResponse);
     */
    getBot(input: GetBotRequest, options?: RpcOptions): UnaryCall<GetBotRequest, GetBotResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetBotRequest, GetBotResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Creates a new bot account.
     *
     * @generated from protobuf rpc: CreateBot(protocol.bots.v1.CreateBotRequest) returns (protocol.bots.v1.CreateBotResponse);
     */
    createBot(input: CreateBotRequest, options?: RpcOptions): UnaryCall<CreateBotRequest, CreateBotResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateBotRequest, CreateBotResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Modifies a bot account that you own.
     *
     * @generated from protobuf rpc: EditBot(protocol.bots.v1.EditBotRequest) returns (protocol.bots.v1.EditBotResponse);
     */
    editBot(input: EditBotRequest, options?: RpcOptions): UnaryCall<EditBotRequest, EditBotResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<EditBotRequest, EditBotResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Refreshes the authentication token for a bot that you own
     *
     * This invalidates the current authentication token and returns a new one.
     *
     * @generated from protobuf rpc: RefreshToken(protocol.bots.v1.RefreshTokenRequest) returns (protocol.bots.v1.RefreshTokenResponse);
     */
    refreshToken(input: RefreshTokenRequest, options?: RpcOptions): UnaryCall<RefreshTokenRequest, RefreshTokenResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<RefreshTokenRequest, RefreshTokenResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Deletes a bot account that you own
     *
     * @generated from protobuf rpc: DeleteBot(protocol.bots.v1.DeleteBotRequest) returns (protocol.bots.v1.DeleteBotResponse);
     */
    deleteBot(input: DeleteBotRequest, options?: RpcOptions): UnaryCall<DeleteBotRequest, DeleteBotResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteBotRequest, DeleteBotResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Server policies for bot accounts that the client
     * may display in its UI or restrict actions to prevent
     * request errors.
     *
     * @generated from protobuf rpc: Policies(protocol.bots.v1.PoliciesRequest) returns (protocol.bots.v1.PoliciesResponse);
     */
    policies(input: PoliciesRequest, options?: RpcOptions): UnaryCall<PoliciesRequest, PoliciesResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<PoliciesRequest, PoliciesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Requests a bot to add itself to the guild.
     *
     * For cross-server bots, this dispatches a UserInvited
     * request across sync, inviting the bot to the guild.
     *
     * @generated from protobuf rpc: AddBot(protocol.bots.v1.AddBotRequest) returns (protocol.bots.v1.AddBotResponse);
     */
    addBot(input: AddBotRequest, options?: RpcOptions): UnaryCall<AddBotRequest, AddBotResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<AddBotRequest, AddBotResponse>("unary", this._transport, method, opt, input);
    }
}
