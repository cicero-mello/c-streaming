import { PosterProps } from "../../components"
import { MediaType } from "../../stores"

export interface PagePoster extends PosterProps{
    mediaType: MediaType
}
