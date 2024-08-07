import { IGatsbyImageData } from "gatsby-plugin-image"

export interface WatchLaterCardsProps {
    image: IGatsbyImageData
    title: string
    onGoWatch: () => void
    onRemove: () => void
}
