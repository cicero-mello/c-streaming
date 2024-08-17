import { PosterProps } from "../../components"
import { UrlState } from "../../hooks"
import { stringIncludes } from "../../shared/utils"
import { Media } from "../../stores"

export const mediasToPosters = (
    medias: Media[]
): PosterProps[] => medias.map(media => ({
    id: media.id,
    image: media.posterImage,
    name: media.name,
    type: media.type
}))

export const getFilteredPosters = (
    urlState: UrlState,
    posters: PosterProps[]
) => {
    const searchText = urlState.searchText ?? ""
    const searchType = urlState.searchType ?? "all"

    let newFilteredPostersByType
    if(searchType === "all") newFilteredPostersByType = posters
    else newFilteredPostersByType = posters.filter(poster => (
        poster.type === searchType
    ))

    return newFilteredPostersByType.filter(poster => (
        stringIncludes(poster.name, searchText)
    ))
}
