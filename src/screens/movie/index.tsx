import React, { FunctionComponent, useCallback, useEffect, useState } from "react"
import { type PageProps } from "gatsby"
import { useNavigation } from "../../hooks"
import { FakeVideo, FakeVideoProps } from "../../components"
import { IGatsbyImageData } from "gatsby-plugin-image"
import * as media from "../../shared/media"
import * as S from "./styles"

export const Movie: FunctionComponent<PageProps> = ({
    data
}) => {
    const { getUrlParams, showScreen } = useNavigation()
    const [fakeVideoProps, setFakeVideoProps] = useState<FakeVideoProps>()
    // const [suggestionsMedias, setSuggestionsMedias] = useState()

    const updateFakeVideoProps = useCallback((data: any) => {
        const allBannerMediasFromQuery = media.getBannerGatsbyImages(data)
        if(allBannerMediasFromQuery.length <= 0) return

        const fakeVideoMideaFromMock = media.getMediaById(getUrlParams().id ?? "")
        const mediaToFakeVideo = allBannerMediasFromQuery.find(
            media => media.name === fakeVideoMideaFromMock?.imageName
        )

        if(!mediaToFakeVideo || !fakeVideoMideaFromMock) return
        setFakeVideoProps({
            thumbImage: mediaToFakeVideo.childImageSharp.gatsbyImageData as IGatsbyImageData,
            imageName: fakeVideoMideaFromMock.imageName,
            onClickWatch: () => {}
        })
    }, [])

    useEffect(() => { updateFakeVideoProps(data) }, [data])
    useEffect(() => { showScreen() }, [])

    return (
        <S.Component>
            {fakeVideoProps && <FakeVideo {...fakeVideoProps}/>}
        </S.Component>
    )
}
