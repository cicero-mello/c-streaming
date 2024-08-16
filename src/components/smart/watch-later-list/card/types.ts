import { IGatsbyImageData } from "gatsby-plugin-image"
import { HTMLAttributes } from "react"

export interface WatchLaterCardProps extends Omit<
    HTMLAttributes<HTMLDivElement>, "className"
>{
    image: IGatsbyImageData
    title: string
    onGoWatch: () => void
    onRemove: () => void
}
