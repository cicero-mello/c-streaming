import { IGatsbyImageData } from "gatsby-plugin-image"
import { HTMLAttributes } from "react"

export interface EpisodeCardProps extends Omit<
    HTMLAttributes<HTMLDivElement>, "className"
>{
    thumbImage: IGatsbyImageData
    altImage: string
    season?: number
    episode: number
    episodeName: string
    wasWatched?: boolean
    topText?: string
}
