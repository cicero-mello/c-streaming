import { IGatsbyImageData, getImage } from "gatsby-plugin-image"
import { BannerProps } from "../components/banner/types"
import { QueryGatsbyImages } from "./types"
import { mock } from "../assets/media-mock"
import { MediaType } from "../shared/types"
import { PosterProps, SuggestionMedias } from "../components"
import { shuffle } from "./utils"

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
            type: posterMedia.type,
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

export const getMediaById = (id: string) => mock.medias.find(
    (media) => media?.id === id
)

export const createSuggestionMedias = (
    bannerMedias: QueryGatsbyImages[],
    mediaExceptionId: string
):SuggestionMedias[] => {

    const suggestionMedias:SuggestionMedias[] = bannerMedias.map(bannerMedia => {
        const mockData = mock.medias.find((media) => (
            media.imageName === bannerMedia.name
        ))

        return {
            id: mockData?.id ?? "",
            mediaName: mockData?.name ?? "",
            type: mockData?.type ?? "movie",
            bannerImage:
                bannerMedia.childImageSharp.gatsbyImageData as IGatsbyImageData
        }
    })

    const indexItemToRemove = suggestionMedias.findIndex(media => (
        media.id === mediaExceptionId
    ))

    suggestionMedias.splice(indexItemToRemove, 1)

    return shuffle(suggestionMedias)
}

export const lazyEpisodeIDGenerator = (
    serieID: string, season: number, episode: number
) => (
    serieID.substring(season.toString().length + episode.toString().length)
    + season + episode
)
