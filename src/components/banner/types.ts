import { MediaWithGatsbyImage } from "../../shared/types"

export interface BannerMedia extends MediaWithGatsbyImage{
    watchLater: boolean
}

export interface BannerProps {
    media: BannerMedia
}
