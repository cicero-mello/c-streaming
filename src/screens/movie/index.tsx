import React, { FC, useEffect } from "react"
import { useUrlState } from "../../hooks"
import { useMediaStore, customLocalStorage } from "../../stores"
import { IGatsbyImageData } from "gatsby-plugin-image"
import {
    MediaSuggestions, FakeVideo,
    Line, MediaTitle, Error
} from "../../components"
import * as S from "./styles"

export const Movie: FC = () => {
    const [urlState] = useUrlState()

    const media = useMediaStore(state => state.getMediaById(
        urlState.mediaID ?? ""
    ))

    useEffect(() => {
        if(!media) return
        customLocalStorage.addMediaToHistory({
            mediaID: media.id
        })
    }, [])

    const invalidParameters = !media

    return invalidParameters ? <Error errorCode="400" /> : (
        <S.Component>
            <S.FirstSection>
                <FakeVideo
                    thumbImage={media.bannerImage as IGatsbyImageData}
                    videoName={media.name}
                />
                <S.RightSide>
                    <MediaTitle
                        title={media.name}
                        mediaId={media.id}
                    />
                    <S.Sinopsys
                        tabIndex={0}
                        aria-label={`Synopsis: ${media.synopsis}`}
                    >
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
