// @generated by protobuf-ts 2.1.0 with parameter long_type_string,optimize_code_size,generate_dependencies,optimize_code_size
// @generated from protobuf file "mediaproxy/v1/mediaproxy.proto" (package "protocol.mediaproxy.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { ImageInfo } from "../../harmonytypes/v1/types";
/**
 * Object representing the metadata of a website.
 *
 * @generated from protobuf message protocol.mediaproxy.v1.SiteMetadata
 */
export interface SiteMetadata {
    /**
     * Title of the website.
     *
     * @generated from protobuf field: string site_title = 1;
     */
    siteTitle: string;
    /**
     * Page title of the website page.
     *
     * @generated from protobuf field: string page_title = 2;
     */
    pageTitle: string;
    /**
     * Kind of the website.
     *
     * @generated from protobuf field: string kind = 3;
     */
    kind: string;
    /**
     * Description of the website page.
     *
     * @generated from protobuf field: string description = 4;
     */
    description: string;
    /**
     * URL of the website.
     *
     * @generated from protobuf field: string url = 5;
     */
    url: string;
    /**
     * A thumbnail image for the website.
     *
     * @generated from protobuf field: repeated protocol.mediaproxy.v1.SiteMetadata.ThumbnailImage thumbnail = 6;
     */
    thumbnail: SiteMetadata_ThumbnailImage[];
}
/**
 * Information for a thumbnail image.
 *
 * @generated from protobuf message protocol.mediaproxy.v1.SiteMetadata.ThumbnailImage
 */
export interface SiteMetadata_ThumbnailImage {
    /**
     * URL of the thumbnail.
     *
     * @generated from protobuf field: string url = 1;
     */
    url: string;
    /**
     * Image information.
     *
     * @generated from protobuf field: protocol.harmonytypes.v1.ImageInfo info = 2;
     */
    info?: ImageInfo;
}
/**
 * Object represeting the metadata of a media.
 *
 * @generated from protobuf message protocol.mediaproxy.v1.MediaMetadata
 */
export interface MediaMetadata {
    /**
     * Mimetype of the media.
     *
     * @generated from protobuf field: string mimetype = 1;
     */
    mimetype: string;
    /**
     * Filename of the media.
     *
     * @generated from protobuf field: string filename = 2;
     */
    filename: string;
    /**
     * Sıze of the media.
     *
     * This should (usually) be the size taken from the `Content-Length` header
     * (for HTTP requests).
     * If this is not included, then it means the size could not be determined.
     *
     * @generated from protobuf field: optional uint32 size = 3;
     */
    size?: number;
    /**
     * @generated from protobuf oneof: info
     */
    info: {
        oneofKind: "image";
        /**
         * Information for an image media.
         *
         * @generated from protobuf field: protocol.harmonytypes.v1.ImageInfo image = 4;
         */
        image: ImageInfo;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Used in the `FetchLinkMetadata` endpoint.
 *
 * @generated from protobuf message protocol.mediaproxy.v1.FetchLinkMetadataRequest
 */
export interface FetchLinkMetadataRequest {
    /**
     * URL to fetch metadata from.
     *
     * @generated from protobuf field: repeated string url = 1;
     */
    url: string[];
}
/**
 * Used in the `FetchLinkMetadata` endpoint.
 *
 * @generated from protobuf message protocol.mediaproxy.v1.FetchLinkMetadataResponse
 */
export interface FetchLinkMetadataResponse {
    /**
     * Fetched metadata for the requested URL(s).
     *
     * @generated from protobuf field: map<string, protocol.mediaproxy.v1.FetchLinkMetadataResponse.Metadata> metadata = 1;
     */
    metadata: {
        [key: string]: FetchLinkMetadataResponse_Metadata;
    };
    /**
     * URL(s) that errored out while trying to fetch metadata for them.
     *
     * @generated from protobuf field: map<string, protocol.mediaproxy.v1.FetchLinkMetadataResponse.Error> errors = 2;
     */
    errors: {
        [key: string]: FetchLinkMetadataResponse_Error;
    };
}
/**
 * Fetched metadata for a link.
 *
 * @generated from protobuf message protocol.mediaproxy.v1.FetchLinkMetadataResponse.Metadata
 */
export interface FetchLinkMetadataResponse_Metadata {
    /**
     * @generated from protobuf oneof: data
     */
    data: {
        oneofKind: "isSite";
        /**
         * Site metadata for the URL.
         *
         * @generated from protobuf field: protocol.mediaproxy.v1.SiteMetadata is_site = 1;
         */
        isSite: SiteMetadata;
    } | {
        oneofKind: "isMedia";
        /**
         * Media metadata for the URL.
         *
         * @generated from protobuf field: protocol.mediaproxy.v1.MediaMetadata is_media = 2;
         */
        isMedia: MediaMetadata;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Error data for a link.
 *
 * @generated from protobuf message protocol.mediaproxy.v1.FetchLinkMetadataResponse.Error
 */
export interface FetchLinkMetadataResponse_Error {
    /**
     * Error status (usually HTTP, eg. `500 Internal Server Error`).
     *
     * @generated from protobuf field: string status = 1;
     */
    status: string;
    /**
     * Error message, if the requested URL's server has provided one.
     *
     * @generated from protobuf field: string message = 2;
     */
    message: string;
}
/**
 * Used in the `InstantView` endpoint.
 *
 * @generated from protobuf message protocol.mediaproxy.v1.InstantViewRequest
 */
export interface InstantViewRequest {
    /**
     * URL to get instant view for.
     *
     * @generated from protobuf field: string url = 1;
     */
    url: string;
}
/**
 * Used in the `InstantView` endpoint.
 *
 * @generated from protobuf message protocol.mediaproxy.v1.InstantViewResponse
 */
export interface InstantViewResponse {
    /**
     * Site metadata for the URL.
     *
     * @generated from protobuf field: protocol.mediaproxy.v1.SiteMetadata metadata = 1;
     */
    metadata?: SiteMetadata;
    /**
     * Instant view content.
     *
     * @generated from protobuf field: string content = 2;
     */
    content: string;
    /**
     * Whether the instant view is valid.
     *
     * @generated from protobuf field: bool is_valid = 3;
     */
    isValid: boolean;
}
/**
 * Used in the `CanInstantView` endpoint.
 *
 * @generated from protobuf message protocol.mediaproxy.v1.CanInstantViewRequest
 */
export interface CanInstantViewRequest {
    /**
     * URL(s) to query if server can instant view the website.
     *
     * @generated from protobuf field: repeated string url = 1;
     */
    url: string[];
}
/**
 * Used in the `CanInstantView` endpoint.
 *
 * @generated from protobuf message protocol.mediaproxy.v1.CanInstantViewResponse
 */
export interface CanInstantViewResponse {
    /**
     * Whether the server generate an instant view for the URL(s) queried.
     *
     * @generated from protobuf field: map<string, bool> can_instant_view = 1;
     */
    canInstantView: {
        [key: string]: boolean;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class SiteMetadata$Type extends MessageType<SiteMetadata> {
    constructor() {
        super("protocol.mediaproxy.v1.SiteMetadata", [
            { no: 1, name: "site_title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "page_title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "kind", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "thumbnail", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SiteMetadata_ThumbnailImage }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.mediaproxy.v1.SiteMetadata
 */
export const SiteMetadata = new SiteMetadata$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SiteMetadata_ThumbnailImage$Type extends MessageType<SiteMetadata_ThumbnailImage> {
    constructor() {
        super("protocol.mediaproxy.v1.SiteMetadata.ThumbnailImage", [
            { no: 1, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "info", kind: "message", T: () => ImageInfo }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.mediaproxy.v1.SiteMetadata.ThumbnailImage
 */
export const SiteMetadata_ThumbnailImage = new SiteMetadata_ThumbnailImage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MediaMetadata$Type extends MessageType<MediaMetadata> {
    constructor() {
        super("protocol.mediaproxy.v1.MediaMetadata", [
            { no: 1, name: "mimetype", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "filename", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "size", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "image", kind: "message", oneof: "info", T: () => ImageInfo }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.mediaproxy.v1.MediaMetadata
 */
export const MediaMetadata = new MediaMetadata$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FetchLinkMetadataRequest$Type extends MessageType<FetchLinkMetadataRequest> {
    constructor() {
        super("protocol.mediaproxy.v1.FetchLinkMetadataRequest", [
            { no: 1, name: "url", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.mediaproxy.v1.FetchLinkMetadataRequest
 */
export const FetchLinkMetadataRequest = new FetchLinkMetadataRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FetchLinkMetadataResponse$Type extends MessageType<FetchLinkMetadataResponse> {
    constructor() {
        super("protocol.mediaproxy.v1.FetchLinkMetadataResponse", [
            { no: 1, name: "metadata", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => FetchLinkMetadataResponse_Metadata } },
            { no: 2, name: "errors", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => FetchLinkMetadataResponse_Error } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.mediaproxy.v1.FetchLinkMetadataResponse
 */
export const FetchLinkMetadataResponse = new FetchLinkMetadataResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FetchLinkMetadataResponse_Metadata$Type extends MessageType<FetchLinkMetadataResponse_Metadata> {
    constructor() {
        super("protocol.mediaproxy.v1.FetchLinkMetadataResponse.Metadata", [
            { no: 1, name: "is_site", kind: "message", oneof: "data", T: () => SiteMetadata },
            { no: 2, name: "is_media", kind: "message", oneof: "data", T: () => MediaMetadata }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.mediaproxy.v1.FetchLinkMetadataResponse.Metadata
 */
export const FetchLinkMetadataResponse_Metadata = new FetchLinkMetadataResponse_Metadata$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FetchLinkMetadataResponse_Error$Type extends MessageType<FetchLinkMetadataResponse_Error> {
    constructor() {
        super("protocol.mediaproxy.v1.FetchLinkMetadataResponse.Error", [
            { no: 1, name: "status", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.mediaproxy.v1.FetchLinkMetadataResponse.Error
 */
export const FetchLinkMetadataResponse_Error = new FetchLinkMetadataResponse_Error$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstantViewRequest$Type extends MessageType<InstantViewRequest> {
    constructor() {
        super("protocol.mediaproxy.v1.InstantViewRequest", [
            { no: 1, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.mediaproxy.v1.InstantViewRequest
 */
export const InstantViewRequest = new InstantViewRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InstantViewResponse$Type extends MessageType<InstantViewResponse> {
    constructor() {
        super("protocol.mediaproxy.v1.InstantViewResponse", [
            { no: 1, name: "metadata", kind: "message", T: () => SiteMetadata },
            { no: 2, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "is_valid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.mediaproxy.v1.InstantViewResponse
 */
export const InstantViewResponse = new InstantViewResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CanInstantViewRequest$Type extends MessageType<CanInstantViewRequest> {
    constructor() {
        super("protocol.mediaproxy.v1.CanInstantViewRequest", [
            { no: 1, name: "url", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.mediaproxy.v1.CanInstantViewRequest
 */
export const CanInstantViewRequest = new CanInstantViewRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CanInstantViewResponse$Type extends MessageType<CanInstantViewResponse> {
    constructor() {
        super("protocol.mediaproxy.v1.CanInstantViewResponse", [
            { no: 1, name: "can_instant_view", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 8 /*ScalarType.BOOL*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message protocol.mediaproxy.v1.CanInstantViewResponse
 */
export const CanInstantViewResponse = new CanInstantViewResponse$Type();
/**
 * @generated ServiceType for protobuf service protocol.mediaproxy.v1.MediaProxyService
 */
export const MediaProxyService = new ServiceType("protocol.mediaproxy.v1.MediaProxyService", [
    { name: "FetchLinkMetadata", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: FetchLinkMetadataRequest, O: FetchLinkMetadataResponse },
    { name: "InstantView", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: InstantViewRequest, O: InstantViewResponse },
    { name: "CanInstantView", options: { "protocol.harmonytypes.v1.metadata": { requiresAuthentication: true } }, I: CanInstantViewRequest, O: CanInstantViewResponse }
]);
