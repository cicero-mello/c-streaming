import React, { FunctionComponent } from "react"
import { PostersProps } from "./types"
import { SeeAllButton } from "../../dumb/buttons"
import { Carousel } from "./carousel"
import { useNavigation } from "../../../hooks"
import { useMediaStore } from "../../../stores"
import { PosterProps } from "./poster/types"
import { PATHS } from "../../../paths"
import * as S from "./styles"

export const Posters: FunctionComponent<PostersProps> = ({
    mediaType, ...rest
}) => {
    const { navigate } = useNavigation()
    const medias = useMediaStore(state => state.getMediasByType(
        mediaType
    ))

    const mediaTypeText = (
        mediaType.charAt(0).toUpperCase() +
        mediaType.slice(1).toLowerCase() + "s"
    )

    const posters: PosterProps[] = medias.map(media => ({
        id: media.id,
        image: media.posterImage,
        name: media.name,
        type: mediaType
    }))

    const handleClickSeeAll = () => {
        navigate(PATHS.SEARCH, { searchType: "anime"})
    }

    return (
        <S.Component {...rest}>
            <S.TopSection>
                <S.Title> {mediaTypeText} </S.Title>
                <SeeAllButton
                    text={`See All ${mediaTypeText}`}
                    onClick={handleClickSeeAll}
                />
            </S.TopSection>
            <S.DownSection>
                <Carousel posters={posters}/>
            </S.DownSection>
        </S.Component>
    )
}
