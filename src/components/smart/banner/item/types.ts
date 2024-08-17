import { IGatsbyImageData } from "gatsby-plugin-image"
import { MediaType } from "../../../../stores"

export interface BannerItem {
    image: IGatsbyImageData
    name: string
    synopsis: string
    id: string
    type: MediaType
}

export type BannerAnimationState = "closed" | "open"
