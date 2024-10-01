import React, { FC, useEffect } from "react"
import { MediaSuggestions, FakeVideo, Line, MediaTitle, Error } from "@components"
import { useMediaStore, customLocalStorage } from "@stores"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { useUrlState } from "@hooks"
import * as S from "./styles"

export const Movie: FC = () => {
    const [urlState] = useUrlState()

    const media = useMediaStore(state => state.getMediaById(
        urlState.mediaId ?? ""
    ))

    useEffect(() => {
        if(!media) return
        customLocalStorage.addMediaToHistory({
            mediaId: media.id
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
                    <S.Sinopsys tabIndex={0}>
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
