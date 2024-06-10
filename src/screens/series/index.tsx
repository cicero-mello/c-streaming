import React, { FunctionComponent, useEffect, useState } from "react"
import { type PageProps } from "gatsby"
import { useNavigation } from "../../hooks"
import { EpisodeCard, FakeVideo, Line,
    MediaTitle, EpisodeCardsCarousel,
    ContentSuggestions
} from "../../components"
import { PageMediaProps } from "./types"
import { createPageMedia } from "./core"
import * as S from "./styles"

export const Series: FunctionComponent<PageProps> = ({ data }) => {
    const { getUrlParams, showScreen, navigate } = useNavigation()
    const [pageMedia, setPageMedia] = useState<PageMediaProps>()

    useEffect(() => {
        const { id, season, ep } = getUrlParams()
        const newPageMedia = createPageMedia(data, navigate, id, season, ep)
        if(newPageMedia) setPageMedia(newPageMedia)
        showScreen()
    }, [data])

    return (
        <S.Component>
            {pageMedia && <>
                <S.FirstSection>
                    <S.TopWrapper>
                        <FakeVideo {...pageMedia.fakeVideo} />
                        <S.RightSide>
                            <MediaTitle
                                watchLaterText="Watch Series Later"
                                {...pageMedia.mediaTitle}
                            />
                            <S.Sinopspys800MediaWidth>
                                {pageMedia.sinopsys}
                            </S.Sinopspys800MediaWidth>
                            {pageMedia.nextEpisode ?
                                <EpisodeCard
                                    topText="Next Episode:"
                                    {...pageMedia.nextEpisode}
                                />
                                :
                                <S.LastEpisodeMessage />
                            }
                        </S.RightSide>
                    </S.TopWrapper>
                    <S.Sinopsys>
                        {pageMedia.sinopsys}
                    </S.Sinopsys>
                </S.FirstSection>
                <Line />
                {pageMedia.listEpisodeCards.map((episodeCards, index) =>
                    <EpisodeCardsCarousel
                        key={`episode-card-carousel-key-${index}`}
                        {...episodeCards}
                    />
                )}
                <S.SecondSection>
                    <ContentSuggestions suggestionMedias={pageMedia.suggestionMedias}/>
                </S.SecondSection>
            </>}
        </S.Component>
    )
}
