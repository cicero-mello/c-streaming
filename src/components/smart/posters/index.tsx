import React, { FunctionComponent } from "react"
import { PostersProps } from "./types"
import { SeeAllButton, PosterProps } from "../../dumb"
import { Carousel } from "./carousel"
import { useMediaStore } from "../../../stores"
import { PATHS } from "../../../paths"
import { IGatsbyImageData } from "gatsby-plugin-image"
import * as S from "./styles"

export const Posters: FunctionComponent<PostersProps> = ({
    mediaType, ...rest
}) => {
    const medias = useMediaStore(state => state.getMediasByType(
        mediaType
    ))

    const mediaTypeText = (
        mediaType.charAt(0).toUpperCase() +
        mediaType.slice(1).toLowerCase() + "s"
    )

    const posters: PosterProps[] = medias.map(media => ({
        mediaId: media.id,
        mediaType: media.type,
        image: media.posterImage as IGatsbyImageData,
        name: media.name
    }))

    return (
        <S.Component {...rest}>
            <S.TopSection>
                <S.Title> {mediaTypeText} </S.Title>
                <SeeAllButton
                    theme="border"
                    aria-label={`See All ${mediaTypeText}`}
                    children={`See All ${mediaTypeText}`}
                    url={{
                        path: PATHS.SEARCH,
                        params: { searchType: mediaType }
                    }}
                />
            </S.TopSection>
            <S.DownSection>
                <Carousel
                    posters={posters}
                    mediaType={mediaType}
                />
            </S.DownSection>
        </S.Component>
    )
}
