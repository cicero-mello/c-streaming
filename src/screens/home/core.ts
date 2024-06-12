import { PageMediaProps } from "./type"
import * as media from "../../shared/media"

export const createPageMedia = (data: object): PageMediaProps | undefined => {
    const bannerGatsbyImages = media.getBannerGatsbyImages(data)
    if(bannerGatsbyImages.length <= 0) return

    const posterGatsbyImages = media.getPosterGatsbyImages(data)
    if(posterGatsbyImages.length <= 0) return

    return {
        banners: media.createBannerMedia(bannerGatsbyImages),
        postersAnimes: media.createPosterMedia("anime", posterGatsbyImages),
        postersMovies: media.createPosterMedia("movie", posterGatsbyImages),
        postersSeries: media.createPosterMedia("serie", posterGatsbyImages)
    }
}
