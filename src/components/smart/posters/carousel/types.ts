import { MediaType } from "../../../../stores"
import { PosterProps } from "../../poster/types"

export interface CarouselProps {
    posters: PosterProps[]
    mediaType: MediaType
}
