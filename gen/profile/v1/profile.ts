// @generated by protobuf-ts 2.2.2 with parameter long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "profile/v1/profile.proto" (package "protocol.profile.v1", syntax proto3)
// tslint:disable
import { SetAppDataResponse } from "./types";
import { SetAppDataRequest } from "./types";
import { GetAppDataResponse } from "./types";
import { GetAppDataRequest } from "./types";
import { UpdateStatusResponse } from "./types";
import { UpdateStatusRequest } from "./types";
import { UpdateProfileResponse } from "./types";
import { UpdateProfileRequest } from "./types";
import { GetProfileResponse } from "./types";
import { GetProfileRequest } from "./types";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
/**
 * @generated ServiceType for protobuf service protocol.profile.v1.ProfileService
 */
export const ProfileService = new ServiceType("protocol.profile.v1.ProfileService", [
    { name: "GetProfile", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: GetProfileRequest, O: GetProfileResponse },
    { name: "UpdateProfile", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: UpdateProfileRequest, O: UpdateProfileResponse },
    { name: "UpdateStatus", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: UpdateStatusRequest, O: UpdateStatusResponse },
    { name: "GetAppData", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: GetAppDataRequest, O: GetAppDataResponse },
    { name: "SetAppData", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: SetAppDataRequest, O: SetAppDataResponse }
]);
