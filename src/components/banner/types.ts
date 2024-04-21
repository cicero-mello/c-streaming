import { IGatsbyImageData } from "gatsby-plugin-image";

export interface BannerMovie {
    id: string
    name: string
    synopsis: string
    image: IGatsbyImageData,
    type: "movie" | "serie" | "anime"
    watchLater: boolean
}

export interface BannerProps {
    movie: BannerMovie
}
