import { useMemo } from "react"
import { useMediaStore } from "../../stores"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { createLinkPath, getMediaPathByMediaType } from "../../paths"
import { useNavigation } from "../../hooks"
import { PagePoster } from "./types"

export const usePosters = (): PagePoster[] => {
    const { medias } = useMediaStore()
    const { navigate } = useNavigation()

    const posters = useMemo(() => medias.map(media => {
        const mediaPath = getMediaPathByMediaType(media.type)
        const linkPath = createLinkPath(
            mediaPath,
            { mediaID: media.id }
        )

        return ({
            id: media.id,
            mediaType: media.type,
            image: media.posterImage as IGatsbyImageData,
            name: media.name,
            linkPath: linkPath,
            onClick: () => {
                navigate(mediaPath, { mediaID: media.id })
            }
        })
    }), [medias])

    return posters
}
