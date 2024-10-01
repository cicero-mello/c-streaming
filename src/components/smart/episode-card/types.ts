import { HTMLAttributes } from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { UrlState } from "@hooks"
import { PATHS } from "@paths"

export interface EpisodeCardProps extends Omit<
    HTMLAttributes<HTMLDivElement>, "className"
>{
    thumbImage: IGatsbyImageData
    season?: number
    episode: number
    episodeName: string
    wasWatched?: boolean
    isNextEpisode?: boolean
    url?: {
        path: PATHS,
        params?: UrlState
    }
}
