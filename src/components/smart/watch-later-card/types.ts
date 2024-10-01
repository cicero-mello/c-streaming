import { HTMLAttributes } from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { MediaType } from "@stores"

export interface WatchLaterCardProps extends Omit<
    HTMLAttributes<HTMLDivElement>, "className"
>{
    mediaId: string
    mediaType: MediaType
    mediaName: string
    image: IGatsbyImageData
    onRemove?: () => void
}
