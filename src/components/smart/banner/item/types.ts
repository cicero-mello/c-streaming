import { IGatsbyImageData } from "gatsby-plugin-image"
import { MediaType } from "@stores"

export interface BannerMedia {
    image: IGatsbyImageData
    name: string
    synopsis: string
    id: string
    type: MediaType
}

export interface BannerItemProps extends BannerMedia {
    isBannerHidden: boolean
}

export type ItemAnimationState = "closed" | "open"
