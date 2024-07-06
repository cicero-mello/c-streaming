import { IGatsbyImageData } from "gatsby-plugin-image"

export type MediaType = "movie" | "anime" | "serie"

export interface Media {
    id: string
    name: string
    synopsis: string
    imageName: string
    type: MediaType
}

export interface MediaWithGatsbyImage extends Omit<Media, "imageName">{
    image?: IGatsbyImageData
}

export interface URLParams {
    id?: string
    season?: number
    ep?: number
    searchText?: string
    searchType?: MediaType
}

export interface URLParamsAllString {
    id?: string
    season?: string
    ep?: string
    searchText?: string
    searchType?: string
}

export interface QueryGatsbyImages {
    id: string
    name: string
    childImageSharp: {
        gatsbyImageData: IGatsbyImageData | undefined
    }
}

export interface UserHistory {
    mediaID: string
    mediaName: string
    mediaType: MediaType
    season?: number
    ep?: number
    episodeName?: string
}

export interface UserHistoryAllString {
    mediaID: string
    mediaName: string
    mediaType: string
    season?: string
    ep?: string
    episodeName?: string
}
