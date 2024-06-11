import { PosterProps, SelectOption } from "../../components"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { mock } from "../../assets/media-mock"
import * as media from "../../shared/media"

export const SELECT_OPTIONS: SelectOption[] = [
    { value: "all", text: "All"},
    { value: "anime", text: "Anime"},
    { value: "movie", text: "Movie"},
    { value: "serie", text: "Serie"}
]

export const createPosters = (data: object): PosterProps[] => {
    const allPosterMediasFromQuery = media.getPosterGatsbyImages(data)
    if(allPosterMediasFromQuery.length <= 0) return []

    return mock.medias.map((media) => ({
        id: media.id,
        name: media.name,
        type: media.type,
        image: allPosterMediasFromQuery.find(
            (posterQuery) => posterQuery.name === media.imageName
        )?.childImageSharp.gatsbyImageData as IGatsbyImageData
    }))
}

export const getFilteredPosters = (
    text: string, type: string, posters:PosterProps[]
) => {
    let newFilteredPostersByType
    if(type === "all") newFilteredPostersByType = posters
    else newFilteredPostersByType = posters.filter(poster => (
        poster.type === type
    ))

    return newFilteredPostersByType.filter(poster => (
        poster.name.toLowerCase().includes(text.toLowerCase())
    ))
}
