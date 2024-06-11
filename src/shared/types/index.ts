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
    search?: string
}

export interface URLParamsAllString {
    id?: string
    season?: string
    ep?: string
    search?: string
}

export interface QueryGatsbyImages {
    id: string
    name: string
    childImageSharp: {
        gatsbyImageData: IGatsbyImageData | undefined
    }
}
