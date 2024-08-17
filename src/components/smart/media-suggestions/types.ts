import { IGatsbyImageData } from "gatsby-plugin-image"
import { MediaType } from "../../../shared/types"
import { HTMLAttributes } from "react"
import { Media } from "../../../stores"

export interface SuggestionMedia {
    bannerImage: IGatsbyImageData
    mediaName: string
    id: string
    type: MediaType
}

export interface MediaSuggestionsProps extends Omit<
    HTMLAttributes<HTMLDivElement>, "className"
>{
    medias?: Media[]
    exceptionMediaID?: string
}

export interface CurrentSuggestionState {
    item: SuggestionMedia,
    index: number
}

export type OnTransitionState = "next" | "next-none" | "previus" | "previus-none"
