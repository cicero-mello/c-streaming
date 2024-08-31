import { useMemo } from "react"
import { useMediaStore } from "../../stores"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { PagePoster } from "./types"
import { PosterProps } from "../../components"

export const usePosters = (): PagePoster[] => {
    const { medias } = useMediaStore()

    const posters: PosterProps[] = useMemo(() => medias.map(media => ({
        mediaId: media.id,
        mediaType: media.type,
        image: media.posterImage as IGatsbyImageData,
        name: media.name,
    })), [medias])

    return posters
}
