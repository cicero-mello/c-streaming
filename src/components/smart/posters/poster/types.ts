import { IGatsbyImageData } from "gatsby-plugin-image"
import { MediaType } from "../../../../shared/types"

export interface PosterProps{
    id: string
    name: string
    image?: IGatsbyImageData
    type: MediaType
}
