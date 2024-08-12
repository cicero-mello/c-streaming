import { IGatsbyImageData } from "gatsby-plugin-image"
import { MediaType } from "../../../shared/types"

export interface SuggestionMedias {
    bannerImage: IGatsbyImageData
    mediaName: string
    id: string
    type: MediaType
}

export interface ContentSuggestionsProps {
    suggestionMedias: SuggestionMedias[]
}

export interface CurrentSuggestionState {
    item: SuggestionMedias,
    index: number
}

export type OnTransitionState = "next" | "next-none" | "previus" | "previus-none"