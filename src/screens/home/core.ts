import { getImage } from "gatsby-plugin-image"
import { BannerProps } from "../../components/banner/types"
import { QueryGatsbyImages } from "./type"
import { mock } from "../../assets/media-mock"
import { MediaType } from "../../shared/types"
import { PosterProps } from "../../components"

export const createBannerMedia = (
    bannerGastbyImages: QueryGatsbyImages[]
):BannerProps[] => {

    const bannerMediasWithGatsbyImage = mock.bannerMedias.map(bannerMedia => {
        const gatsbyImage = getImage(
            bannerGastbyImages.find(
                img => img.name === bannerMedia.imageName
            )?.childImageSharp || bannerGastbyImages[0].childImageSharp
        )

        return {
            id: bannerMedia.id,
            name: bannerMedia.name,
            synopsis: bannerMedia.synopsis,
            type: bannerMedia.type,
            image: gatsbyImage
        }
    })

    return bannerMediasWithGatsbyImage
}

export const createPosterMedia = (
    type: MediaType,
    posterGastbyImages: QueryGatsbyImages[]
):PosterProps[] => {

    const posterMediasWithGatsbyImage = mock.posterMedias.get(type)?.map(posterMedia => {
        const gatsbyImage = getImage(
            posterGastbyImages.find(
                img => img.name === posterMedia.imageName
            )?.childImageSharp || posterGastbyImages[0].childImageSharp
        )

        return {
            id: posterMedia.id,
            name: posterMedia.name,
            image: gatsbyImage
        }
    })

    return posterMediasWithGatsbyImage as PosterProps[]
}

export const getBannerGatsbyImages = (data: any):QueryGatsbyImages[] => (
    data ? data.banner.edges.map(
        (obj: {node: any}) => ({...obj.node})
    ) : []
)

export const getPosterGatsbyImages = (data: any):QueryGatsbyImages[] => (
    data ? data.poster.edges.map(
        (obj: {node: any}) => ({...obj.node})
    ) : []
)
