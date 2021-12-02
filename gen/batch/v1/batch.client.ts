// @generated by protobuf-ts 2.0.7 with parameter long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "batch/v1/batch.proto" (package "protocol.batch.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { BatchService } from "./batch";
import type { BatchSameResponse } from "./batch";
import type { BatchSameRequest } from "./batch";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { BatchResponse } from "./batch";
import type { BatchRequest } from "./batch";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Service to batch requests.
 *
 * @generated from protobuf service protocol.batch.v1.BatchService
 */
export interface IBatchServiceClient {
    /**
     * Batch requests.
     * Does not support batching stream requests.
     * Batched requests should be verified and an error should be thrown if they
     * are invalid.
     *
     * @generated from protobuf rpc: Batch(protocol.batch.v1.BatchRequest) returns (protocol.batch.v1.BatchResponse);
     */
    batch(input: BatchRequest, options?: RpcOptions): UnaryCall<BatchRequest, BatchResponse>;
    /**
     * BatchSame allows batching for requests using the same endpoint.
     * This allows for additional network optimizations since the endpoint doesn't
     * have to be sent for every request.
     *
     * @generated from protobuf rpc: BatchSame(protocol.batch.v1.BatchSameRequest) returns (protocol.batch.v1.BatchSameResponse);
     */
    batchSame(input: BatchSameRequest, options?: RpcOptions): UnaryCall<BatchSameRequest, BatchSameResponse>;
}
/**
 * Service to batch requests.
 *
 * @generated from protobuf service protocol.batch.v1.BatchService
 */
export class BatchServiceClient implements IBatchServiceClient, ServiceInfo {
    typeName = BatchService.typeName;
    methods = BatchService.methods;
    options = BatchService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Batch requests.
     * Does not support batching stream requests.
     * Batched requests should be verified and an error should be thrown if they
     * are invalid.
     *
     * @generated from protobuf rpc: Batch(protocol.batch.v1.BatchRequest) returns (protocol.batch.v1.BatchResponse);
     */
    batch(input: BatchRequest, options?: RpcOptions): UnaryCall<BatchRequest, BatchResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<BatchRequest, BatchResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * BatchSame allows batching for requests using the same endpoint.
     * This allows for additional network optimizations since the endpoint doesn't
     * have to be sent for every request.
     *
     * @generated from protobuf rpc: BatchSame(protocol.batch.v1.BatchSameRequest) returns (protocol.batch.v1.BatchSameResponse);
     */
    batchSame(input: BatchSameRequest, options?: RpcOptions): UnaryCall<BatchSameRequest, BatchSameResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<BatchSameRequest, BatchSameResponse>("unary", this._transport, method, opt, input);
    }
}