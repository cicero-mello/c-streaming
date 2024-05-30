import { IGatsbyImageData } from "gatsby-plugin-image"

export interface EpisodeCardProps {
    onClick?: () => void
    thumbImage: IGatsbyImageData
    altImage: string
    season?: number
    episode: number
    text: string
    wasWatched?: boolean
    topText?: string
}
