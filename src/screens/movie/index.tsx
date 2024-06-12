import React, { FunctionComponent, useEffect, useState } from "react"
import { type PageProps } from "gatsby"
import { useNavigation } from "../../hooks"
import { ContentSuggestions, FakeVideo, Line, MediaTitle } from "../../components"
import { PageMediaProps } from "./types"
import { createPageMedia } from "./core"
import * as S from "./styles"

export const Movie: FunctionComponent<PageProps> = ({
    data
}) => {
    const { getUrlParams } = useNavigation()
    const [pageMedia, setPageMedia] = useState<PageMediaProps>()

    useEffect(() => {
        const newPageMedia = createPageMedia(data, getUrlParams())
        if(newPageMedia) setPageMedia(newPageMedia)
    }, [data])

    return (
        <S.Component>
            {pageMedia && <>
                <S.FirstSection>
                    <FakeVideo {...pageMedia.fakeVideo} />
                    <S.RightSide>
                        <MediaTitle {...pageMedia.mediaTitle} />
                        <S.Sinopsys> {pageMedia.sinopsys} </S.Sinopsys>
                    </S.RightSide>
                </S.FirstSection>
                <Line />
                <S.SecondSection>
                    <ContentSuggestions
                        suggestionMedias={pageMedia.suggestionMedias}
                    />
                </S.SecondSection>
            </>}
        </S.Component>
    )
}
