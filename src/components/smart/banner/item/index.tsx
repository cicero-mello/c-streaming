import React, { FunctionComponent, useEffect, useState } from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { BannerAnimationState, BannerItem } from "./types"
import { ColorButton, WatchLatterButton } from "../../../dumb/buttons"
import { useNavigation } from "../../../../hooks"
import { PATHS } from "../../../../paths"
import * as S from "./styles"

export const Item: FunctionComponent<BannerItem> = (newMedia) => {
    const { navigate } = useNavigation()
    const [showingMedia, setShowingMedia] = useState(newMedia)
    const [bannerAnimation, setBannerAnimation] = useState<BannerAnimationState>("closed")
    const [firstRender, setFirstRender] = useState(true)

    const onClickColorButton = () => {
        if(showingMedia.type === "movie") navigate(PATHS.MOVIE, { mediaID: showingMedia.id })
        else navigate(PATHS.SERIES, { mediaID: showingMedia.id })
    }

    useEffect(() => {
        setBannerAnimation("closed")
        setTimeout(() => {
            setShowingMedia(newMedia)
            setBannerAnimation("open")
            if(firstRender) setFirstRender(false)
        }, firstRender ? 100 : 400)
    }, [newMedia])

    return (
        <S.Component $animationState={bannerAnimation}>
            <GatsbyImage
                className="gatsby-image"
                image={showingMedia.image as IGatsbyImageData}
                alt={`Image of ${showingMedia.name}`}
            />
            <S.InfoAndButtons>
                <S.InfoWrapper>
                    <S.MediaName> {showingMedia.name.toLocaleUpperCase()} </S.MediaName>
                    <S.Synopsis> {showingMedia.synopsis} </S.Synopsis>
                </S.InfoWrapper>
                <S.ButtonsWrapper>
                    <WatchLatterButton mediaId={showingMedia.id} />
                    <ColorButton
                        onClick={onClickColorButton}
                        text="Watch Now"
                    />
                </S.ButtonsWrapper>
            </S.InfoAndButtons>
        </S.Component>
    )
}
