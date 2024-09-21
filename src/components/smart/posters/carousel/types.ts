import { MediaType } from "../../../../stores"
import { PosterProps } from "../../../dumb"

export interface CarouselProps {
    posters: PosterProps[]
    mediaType: MediaType
}
