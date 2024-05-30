import React, { FunctionComponent, useCallback, useEffect, useState } from "react"
import { type PageProps } from "gatsby"
import { useNavigation } from "../../hooks"
import { EpisodeCard, FakeVideo, Line, MediaTitle, WatchLatterButton, Wrapper } from "../../components"
import { PageMediaProps } from "./types"
import { IGatsbyImageData } from "gatsby-plugin-image"
import * as media from "../../shared/media"
import * as S from "./styles"

export const Series: FunctionComponent<PageProps> = ({ data }) => {
    const { getUrlParams, showScreen } = useNavigation()
    const [pageMedia, setPageMedia] = useState<PageMediaProps>()

    const updatePageMedia = useCallback((data: any) => {
        const allBannerMediasFromQuery = media.getBannerGatsbyImages(data)
        if(allBannerMediasFromQuery.length <= 0) return

        const fakeVideoMideaFromMock = media.getMediaById(getUrlParams().id ?? "")
        const mediaToFakeVideo = allBannerMediasFromQuery.find(
            media => media.name === fakeVideoMideaFromMock?.imageName
        )

        const suggestionMedias = media.createSuggestionMedias(
            allBannerMediasFromQuery, fakeVideoMideaFromMock?.id ?? ""
        )

        if(!mediaToFakeVideo || !fakeVideoMideaFromMock) return
        setPageMedia({
            fakeVideo: {
                thumbImage: mediaToFakeVideo.childImageSharp.gatsbyImageData as IGatsbyImageData,
                imageName: fakeVideoMideaFromMock.imageName,
                onClickWatch: () => {}
            },
            mediaTitle: {
                title: fakeVideoMideaFromMock.name,
                episodeName: "S.1 | Ep.1: Sit amet ipsum dolor",
                mediaId: fakeVideoMideaFromMock.id
            },
            sinopsys: fakeVideoMideaFromMock.synopsis,
            suggestionMedias: suggestionMedias,
            nextEpisode: {
                thumbImage: mediaToFakeVideo.childImageSharp.gatsbyImageData as IGatsbyImageData,
                season: 1,
                episode: 1,
                text: "Sit amet ipsum dolor",
                altImage: "alt"
            }
        })
    }, [])

    useEffect(() => {
        updatePageMedia(data)
        showScreen()
    }, [data])

    return (
        <S.Component>
            {pageMedia && <>
                <S.FirstSection>
                    <S.TopWrapper>
                        <FakeVideo {...pageMedia.fakeVideo} />
                        <S.RightSide>
                            <MediaTitle  {...pageMedia.mediaTitle} />
                            <S.Sinopspys800MediaWidth>
                                {pageMedia.sinopsys}
                            </S.Sinopspys800MediaWidth>
                            <EpisodeCard
                                topText="Next Episode:"
                                {...pageMedia.nextEpisode}
                            />
                        </S.RightSide>
                    </S.TopWrapper>
                    <S.Sinopsys>
                        {pageMedia.sinopsys}
                    </S.Sinopsys>
                </S.FirstSection>
                <Line />
            </>}
        </S.Component>
    )
}
