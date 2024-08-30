import { MediaType } from "../../../../stores"
import { PosterProps } from "../../../dumb/poster/types"

export interface CarouselProps {
    posters: PosterProps[]
    mediaType: MediaType
}
