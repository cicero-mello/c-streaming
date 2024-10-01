import { useMemo } from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { PosterProps } from "@components"
import { useMediaStore } from "@stores"
import { PagePoster } from "./types"

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
