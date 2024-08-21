import { IGatsbyImageData } from "gatsby-plugin-image"
import { MediaType } from "../../../stores"

export interface PosterProps{
    id: string
    name: string
    image: IGatsbyImageData
    type: MediaType
}
