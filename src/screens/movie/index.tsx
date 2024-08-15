import React, { FC, useEffect } from "react"
import { useNavigation } from "../../hooks"
import { useMediaStore, customLocalStorage } from "../../stores"
import { PATHS } from "../../paths"
import {
    MediaSuggestions, FakeVideo,
    Line, MediaTitle
} from "../../components"
import * as S from "./styles"

export const Movie: FC = () => {
    console.log("render movie")
    const { getUrlParams, navigate } = useNavigation()
    const media = useMediaStore(state => state.getMediaById(
        getUrlParams()?.mediaID ?? ""
    ))

    // if(!media?.bannerImage) {
    //     navigate(PATHS.ERROR)
    //     return
    // }

    useEffect(() => {
        if(!media) return
        customLocalStorage.addMediaToHistory({
            mediaID: media.id
        })
    }, [])

    return media && media.bannerImage && (
        <S.Component>
            <S.FirstSection>
                <FakeVideo
                    thumbImage={media.bannerImage }
                    altThumbImage={"Image of" + media.name}
                />
                <S.RightSide>
                    <MediaTitle
                        title={media.name}
                        mediaId={media.id}
                    />
                    <S.Sinopsys>
                        {media.synopsis}
                    </S.Sinopsys>
                </S.RightSide>
            </S.FirstSection>
            <Line />
            <S.SecondSection>
                <MediaSuggestions exceptionMediaID={media.id} />
            </S.SecondSection>
        </S.Component>
    )
}
