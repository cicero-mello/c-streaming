import { PosterProps } from "../poster/types"

export interface PosterListProps {
    posters: PosterProps[]
    titleText: string
    buttonText: string
    buttonAction: () => void
}
