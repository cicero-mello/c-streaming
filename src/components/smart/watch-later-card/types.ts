import { IGatsbyImageData } from "gatsby-plugin-image"
import { HTMLAttributes } from "react"
import { MediaType } from "../../../stores"

export interface WatchLaterCardProps extends Omit<
    HTMLAttributes<HTMLDivElement>, "className"
>{
    mediaID: string
    mediaType: MediaType
    mediaName: string
    image: IGatsbyImageData
    onRemove?: () => void
}