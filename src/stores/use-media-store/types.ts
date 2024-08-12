import { IGatsbyImageData } from "gatsby-plugin-image"

export type MediaType = "movie" | "serie" | "anime"

export interface Media {
    id: string
    name: string
    synopsis: string
    type: "movie" | "serie" | "anime"
    posterImage?: IGatsbyImageData
    bannerImage?: IGatsbyImageData
}

export interface MediaStore {
    medias: Media[],
    updateMedias: (pageData: object) => void
}

export interface QueryGatsbyImages {
    id: string
    name: string
    childImageSharp: {
        gatsbyImageData: IGatsbyImageData
    }
}

export interface ImageInfo {
    id: string
    childImageSharp: IGatsbyImageData
}
