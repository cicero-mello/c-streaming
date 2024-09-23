import { IGatsbyImageData } from "gatsby-plugin-image"
import { HTMLAttributes } from "react"
import { PATHS } from "../../../paths"
import { UrlState } from "../../../hooks"

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
