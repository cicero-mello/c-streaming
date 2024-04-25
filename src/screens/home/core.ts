import { getImage } from "gatsby-plugin-image"
import { BannerProps } from "../../components/banner/types"
import { QueryGatsbyImages } from "./type"
import { mock } from "../../assets/media-mock"

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
