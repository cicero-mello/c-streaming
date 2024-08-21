import { UrlState } from "../../hooks"
import { stringIncludes } from "../../shared/utils"
import { PagePoster } from "./types"

export const getFilteredPosters = (
    urlState: UrlState,
    posters: PagePoster[]
) => {
    const searchText = urlState.searchText ?? ""
    const searchType = urlState.searchType ?? "all"

    let newFilteredPostersByType
    if(searchType === "all") newFilteredPostersByType = posters
    else newFilteredPostersByType = posters.filter(poster => (
        poster.mediaType === searchType
    ))

    return newFilteredPostersByType.filter(poster => (
        stringIncludes(poster.name, searchText)
    ))
}
