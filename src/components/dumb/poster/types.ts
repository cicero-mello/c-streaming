import { IGatsbyImageData } from "gatsby-plugin-image"
import { HTMLAttributes } from "react"
import { MediaType } from "../../../stores"

export interface PosterProps extends Omit<
    HTMLAttributes<HTMLDivElement>, "className"
>{
    name: string
    image: IGatsbyImageData
    mediaId: string
    mediaType: MediaType
}
