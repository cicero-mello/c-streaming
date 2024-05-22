import React, { FunctionComponent, useCallback, useEffect, useState } from "react"
import { type PageProps } from "gatsby"
import { useNavigation } from "../../hooks"
import { FakeVideo, Line, WatchLatterButton } from "../../components"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { PageMediaProps } from "./types"
import * as media from "../../shared/media"
import * as S from "./styles"

export const Movie: FunctionComponent<PageProps> = ({
    data
}) => {
    const { getUrlParams, showScreen } = useNavigation()
    const [pageMedia, setPageMedia] = useState<PageMediaProps>()

    const updateFakeVideoProps = useCallback((data: any) => {
        const allBannerMediasFromQuery = media.getBannerGatsbyImages(data)
        if(allBannerMediasFromQuery.length <= 0) return

        const fakeVideoMideaFromMock = media.getMediaById(getUrlParams().id ?? "")
        const mediaToFakeVideo = allBannerMediasFromQuery.find(
            media => media.name === fakeVideoMideaFromMock?.imageName
        )

        if(!mediaToFakeVideo || !fakeVideoMideaFromMock) return
        setPageMedia({
            fakeVideo: {
                thumbImage: mediaToFakeVideo.childImageSharp.gatsbyImageData as IGatsbyImageData,
                imageName: fakeVideoMideaFromMock.imageName,
                onClickWatch: () => {}
            },
            mediaTitle: fakeVideoMideaFromMock.name,
            sinopsys: fakeVideoMideaFromMock.synopsis,
            id: fakeVideoMideaFromMock.id
        })
    }, [])

    useEffect(() => { updateFakeVideoProps(data) }, [data])
    useEffect(() => { showScreen() }, [])

    return (
        <S.Component>
            {pageMedia && <>
                <S.FirstSection>
                    <FakeVideo {...pageMedia.fakeVideo} />
                    <S.RightSide>
                        <S.MediaTitle> {pageMedia.mediaTitle} </S.MediaTitle>
                        <WatchLatterButton mediaId={pageMedia.id} />
                        <S.Sinopsys> {pageMedia.sinopsys} </S.Sinopsys>
                    </S.RightSide>
                </S.FirstSection>
                <Line />
            </>}
        </S.Component>
    )
}
