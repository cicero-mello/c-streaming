import React, { FunctionComponent, useEffect, useState } from "react"
import { type PageProps } from "gatsby"
import { useNavigation } from "../../hooks"
import {
    EpisodeCard, FakeVideo, Line,
    MediaTitle, EpisodeCardsCarousel,
    ContentSuggestions
} from "../../components"
import { PageMediaProps } from "./types"
import { createPageMedia } from "./core"
import { customLocalStorage } from "../../localstorage"
import * as S from "./styles"

export const Series: FunctionComponent<PageProps> = ({ data }) => {
    const { getUrlParams, navigate } = useNavigation()

    const [pageMedia, setPageMedia] = useState<PageMediaProps>()

    useEffect(() => {
        const { mediaID, episodeID } = getUrlParams()
        if(!mediaID) return

        const newPageMedia = createPageMedia(data, navigate, mediaID, episodeID)
        if(newPageMedia) {
            setPageMedia(newPageMedia)
            customLocalStorage.addMediaToHistory({
                mediaID: mediaID,
                episodeID: newPageMedia.episodeID
            })
        }
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
                    <ContentSuggestions
                        suggestionMedias={pageMedia.suggestionMedias}
                    />
                </S.SecondSection>
            </>}
        </S.Component>
    )
}
