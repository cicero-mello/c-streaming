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
    mediaID?: string
    episodeID?: string
    searchText?: string
    searchType?: MediaType
}

export interface URLParamsAllString {
    mediaID?: string
    episodeID?: string
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
    episodeID?: string
}
