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

export const getAriaMessage = (
    { searchText, searchType }: UrlState,
    posters: PagePoster[]
): string =>  (
    (posters.length === 0 ? "No" : posters.length)
    + " results"
    + (searchText && (" for: " + searchText))
    + `: in ${searchType} section`
)
