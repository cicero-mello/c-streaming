import { MediaWithGatsbyImage } from "../../shared/types"

export interface BannerListMedia extends MediaWithGatsbyImage{
    watchLater: boolean
}

export interface BannerListProps {
    mediaList: BannerListMedia[]
}
