// @generated by protobuf-ts 2.2.2 with parameter long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "emote/v1/emote.proto" (package "protocol.emote.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { EmoteService } from "./emote";
import type { EquipEmotePackResponse } from "./types";
import type { EquipEmotePackRequest } from "./types";
import type { DequipEmotePackResponse } from "./types";
import type { DequipEmotePackRequest } from "./types";
import type { DeleteEmoteFromPackResponse } from "./types";
import type { DeleteEmoteFromPackRequest } from "./types";
import type { DeleteEmotePackResponse } from "./types";
import type { DeleteEmotePackRequest } from "./types";
import type { AddEmoteToPackResponse } from "./types";
import type { AddEmoteToPackRequest } from "./types";
import type { GetEmotePackEmotesResponse } from "./types";
import type { GetEmotePackEmotesRequest } from "./types";
import type { GetEmotePacksResponse } from "./types";
import type { GetEmotePacksRequest } from "./types";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { CreateEmotePackResponse } from "./types";
import type { CreateEmotePackRequest } from "./types";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Harmony's Emote service manages the emotes and emote packs.
 *
 * @generated from protobuf service protocol.emote.v1.EmoteService
 */
export interface IEmoteServiceClient {
    /**
     * Endpoint to create an emote pack.
     *
     * @generated from protobuf rpc: CreateEmotePack(protocol.emote.v1.CreateEmotePackRequest) returns (protocol.emote.v1.CreateEmotePackResponse);
     */
    createEmotePack(input: CreateEmotePackRequest, options?: RpcOptions): UnaryCall<CreateEmotePackRequest, CreateEmotePackResponse>;
    /**
     * Endpoint to get the emote packs you have equipped.
     *
     * @generated from protobuf rpc: GetEmotePacks(protocol.emote.v1.GetEmotePacksRequest) returns (protocol.emote.v1.GetEmotePacksResponse);
     */
    getEmotePacks(input: GetEmotePacksRequest, options?: RpcOptions): UnaryCall<GetEmotePacksRequest, GetEmotePacksResponse>;
    /**
     * Endpoint to get the emotes in an emote pack.
     *
     * @generated from protobuf rpc: GetEmotePackEmotes(protocol.emote.v1.GetEmotePackEmotesRequest) returns (protocol.emote.v1.GetEmotePackEmotesResponse);
     */
    getEmotePackEmotes(input: GetEmotePackEmotesRequest, options?: RpcOptions): UnaryCall<GetEmotePackEmotesRequest, GetEmotePackEmotesResponse>;
    /**
     * Endpoint to add an emote to an emote pack that you own.
     *
     * If a file ID is used in this request, the server should convert
     * it to a HMC before storing the emote.
     *
     * @generated from protobuf rpc: AddEmoteToPack(protocol.emote.v1.AddEmoteToPackRequest) returns (protocol.emote.v1.AddEmoteToPackResponse);
     */
    addEmoteToPack(input: AddEmoteToPackRequest, options?: RpcOptions): UnaryCall<AddEmoteToPackRequest, AddEmoteToPackResponse>;
    /**
     * Endpoint to delete an emote pack that you own.
     *
     * @generated from protobuf rpc: DeleteEmotePack(protocol.emote.v1.DeleteEmotePackRequest) returns (protocol.emote.v1.DeleteEmotePackResponse);
     */
    deleteEmotePack(input: DeleteEmotePackRequest, options?: RpcOptions): UnaryCall<DeleteEmotePackRequest, DeleteEmotePackResponse>;
    /**
     * Endpoint to delete an emote from an emote pack.
     *
     * @generated from protobuf rpc: DeleteEmoteFromPack(protocol.emote.v1.DeleteEmoteFromPackRequest) returns (protocol.emote.v1.DeleteEmoteFromPackResponse);
     */
    deleteEmoteFromPack(input: DeleteEmoteFromPackRequest, options?: RpcOptions): UnaryCall<DeleteEmoteFromPackRequest, DeleteEmoteFromPackResponse>;
    /**
     * Endpoint to dequip an emote pack that you have equipped.
     *
     * @generated from protobuf rpc: DequipEmotePack(protocol.emote.v1.DequipEmotePackRequest) returns (protocol.emote.v1.DequipEmotePackResponse);
     */
    dequipEmotePack(input: DequipEmotePackRequest, options?: RpcOptions): UnaryCall<DequipEmotePackRequest, DequipEmotePackResponse>;
    /**
     * Endpoint to equip an emote pack.
     *
     * @generated from protobuf rpc: EquipEmotePack(protocol.emote.v1.EquipEmotePackRequest) returns (protocol.emote.v1.EquipEmotePackResponse);
     */
    equipEmotePack(input: EquipEmotePackRequest, options?: RpcOptions): UnaryCall<EquipEmotePackRequest, EquipEmotePackResponse>;
}
/**
 * Harmony's Emote service manages the emotes and emote packs.
 *
 * @generated from protobuf service protocol.emote.v1.EmoteService
 */
export class EmoteServiceClient implements IEmoteServiceClient, ServiceInfo {
    typeName = EmoteService.typeName;
    methods = EmoteService.methods;
    options = EmoteService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Endpoint to create an emote pack.
     *
     * @generated from protobuf rpc: CreateEmotePack(protocol.emote.v1.CreateEmotePackRequest) returns (protocol.emote.v1.CreateEmotePackResponse);
     */
    createEmotePack(input: CreateEmotePackRequest, options?: RpcOptions): UnaryCall<CreateEmotePackRequest, CreateEmotePackResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateEmotePackRequest, CreateEmotePackResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Endpoint to get the emote packs you have equipped.
     *
     * @generated from protobuf rpc: GetEmotePacks(protocol.emote.v1.GetEmotePacksRequest) returns (protocol.emote.v1.GetEmotePacksResponse);
     */
    getEmotePacks(input: GetEmotePacksRequest, options?: RpcOptions): UnaryCall<GetEmotePacksRequest, GetEmotePacksResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetEmotePacksRequest, GetEmotePacksResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Endpoint to get the emotes in an emote pack.
     *
     * @generated from protobuf rpc: GetEmotePackEmotes(protocol.emote.v1.GetEmotePackEmotesRequest) returns (protocol.emote.v1.GetEmotePackEmotesResponse);
     */
    getEmotePackEmotes(input: GetEmotePackEmotesRequest, options?: RpcOptions): UnaryCall<GetEmotePackEmotesRequest, GetEmotePackEmotesResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetEmotePackEmotesRequest, GetEmotePackEmotesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Endpoint to add an emote to an emote pack that you own.
     *
     * If a file ID is used in this request, the server should convert
     * it to a HMC before storing the emote.
     *
     * @generated from protobuf rpc: AddEmoteToPack(protocol.emote.v1.AddEmoteToPackRequest) returns (protocol.emote.v1.AddEmoteToPackResponse);
     */
    addEmoteToPack(input: AddEmoteToPackRequest, options?: RpcOptions): UnaryCall<AddEmoteToPackRequest, AddEmoteToPackResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<AddEmoteToPackRequest, AddEmoteToPackResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Endpoint to delete an emote pack that you own.
     *
     * @generated from protobuf rpc: DeleteEmotePack(protocol.emote.v1.DeleteEmotePackRequest) returns (protocol.emote.v1.DeleteEmotePackResponse);
     */
    deleteEmotePack(input: DeleteEmotePackRequest, options?: RpcOptions): UnaryCall<DeleteEmotePackRequest, DeleteEmotePackResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteEmotePackRequest, DeleteEmotePackResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Endpoint to delete an emote from an emote pack.
     *
     * @generated from protobuf rpc: DeleteEmoteFromPack(protocol.emote.v1.DeleteEmoteFromPackRequest) returns (protocol.emote.v1.DeleteEmoteFromPackResponse);
     */
    deleteEmoteFromPack(input: DeleteEmoteFromPackRequest, options?: RpcOptions): UnaryCall<DeleteEmoteFromPackRequest, DeleteEmoteFromPackResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteEmoteFromPackRequest, DeleteEmoteFromPackResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Endpoint to dequip an emote pack that you have equipped.
     *
     * @generated from protobuf rpc: DequipEmotePack(protocol.emote.v1.DequipEmotePackRequest) returns (protocol.emote.v1.DequipEmotePackResponse);
     */
    dequipEmotePack(input: DequipEmotePackRequest, options?: RpcOptions): UnaryCall<DequipEmotePackRequest, DequipEmotePackResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<DequipEmotePackRequest, DequipEmotePackResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Endpoint to equip an emote pack.
     *
     * @generated from protobuf rpc: EquipEmotePack(protocol.emote.v1.EquipEmotePackRequest) returns (protocol.emote.v1.EquipEmotePackResponse);
     */
    equipEmotePack(input: EquipEmotePackRequest, options?: RpcOptions): UnaryCall<EquipEmotePackRequest, EquipEmotePackResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<EquipEmotePackRequest, EquipEmotePackResponse>("unary", this._transport, method, opt, input);
    }
}
