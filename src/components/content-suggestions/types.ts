import { IGatsbyImageData } from "gatsby-plugin-image"

export interface SuggestionMedias {
    bannerImage: IGatsbyImageData
    mediaName: string
    id: string
}

export interface ContentSuggestionsProps {
    suggestionMedias: SuggestionMedias[]
}

export interface CurrentSuggestionState {
    item: SuggestionMedias,
    index: number
}
