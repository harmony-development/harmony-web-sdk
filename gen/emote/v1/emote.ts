// @generated by protobuf-ts 2.2.2 with parameter long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "emote/v1/emote.proto" (package "protocol.emote.v1", syntax proto3)
// tslint:disable
import { EquipEmotePackResponse } from "./types";
import { EquipEmotePackRequest } from "./types";
import { DequipEmotePackResponse } from "./types";
import { DequipEmotePackRequest } from "./types";
import { DeleteEmoteFromPackResponse } from "./types";
import { DeleteEmoteFromPackRequest } from "./types";
import { DeleteEmotePackResponse } from "./types";
import { DeleteEmotePackRequest } from "./types";
import { AddEmoteToPackResponse } from "./types";
import { AddEmoteToPackRequest } from "./types";
import { GetEmotePackEmotesResponse } from "./types";
import { GetEmotePackEmotesRequest } from "./types";
import { GetEmotePacksResponse } from "./types";
import { GetEmotePacksRequest } from "./types";
import { CreateEmotePackResponse } from "./types";
import { CreateEmotePackRequest } from "./types";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
/**
 * @generated ServiceType for protobuf service protocol.emote.v1.EmoteService
 */
export const EmoteService = new ServiceType("protocol.emote.v1.EmoteService", [
    { name: "CreateEmotePack", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: CreateEmotePackRequest, O: CreateEmotePackResponse },
    { name: "GetEmotePacks", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: GetEmotePacksRequest, O: GetEmotePacksResponse },
    { name: "GetEmotePackEmotes", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: GetEmotePackEmotesRequest, O: GetEmotePackEmotesResponse },
    { name: "AddEmoteToPack", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: AddEmoteToPackRequest, O: AddEmoteToPackResponse },
    { name: "DeleteEmotePack", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: DeleteEmotePackRequest, O: DeleteEmotePackResponse },
    { name: "DeleteEmoteFromPack", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: DeleteEmoteFromPackRequest, O: DeleteEmoteFromPackResponse },
    { name: "DequipEmotePack", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: DequipEmotePackRequest, O: DequipEmotePackResponse },
    { name: "EquipEmotePack", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: EquipEmotePackRequest, O: EquipEmotePackResponse }
]);
