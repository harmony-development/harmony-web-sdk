/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type CreateEmotePackRequest = {
  packName?: string
}

export type CreateEmotePackResponse = {
  packId?: string
}

export type GetEmotePacksRequest = {
}

export type GetEmotePacksResponseEmotePack = {
  packId?: string
  packOwner?: string
  packName?: string
}

export type GetEmotePacksResponse = {
  packs?: GetEmotePacksResponseEmotePack[]
}

export type GetEmotePackEmotesRequest = {
  packId?: string
}

export type GetEmotePackEmotesResponseEmote = {
  imageId?: string
  name?: string
}

export type GetEmotePackEmotesResponse = {
  emotes?: GetEmotePackEmotesResponseEmote[]
}

export type AddEmoteToPackRequest = {
  packId?: string
  imageId?: string
  name?: string
}

export type DeleteEmoteFromPackRequest = {
  packId?: string
  imageId?: string
}

export type DeleteEmotePackRequest = {
  packId?: string
}

export type DequipEmotePackRequest = {
  packId?: string
}