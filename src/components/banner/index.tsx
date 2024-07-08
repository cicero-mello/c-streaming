import React, { FunctionComponent, useEffect, useState } from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { BannerAnimationState, BannerProps } from "./types"
import { ColorButton, WatchLatterButton } from "../buttons"
import { useNavigation } from "../../hooks"
import { PATHS } from "../../paths"
import * as S from "./styles"

export const Banner: FunctionComponent<BannerProps> = (newMedia) => {
    const { navigate } = useNavigation()
    const [showingMedia, setShowingMedia] = useState(newMedia)
    const { id, name, synopsis, image, type } = showingMedia
    const [bannerAnimation, setBannerAnimation] = useState<BannerAnimationState>("closed")
    const [firstRender, setFirstRender] = useState(true)

    const onClickColorButton = () => {
        if(type === "movie") navigate(PATHS.MOVIE, { mediaID: id })
        else navigate(PATHS.SERIES, { mediaID: id })
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
                image={image as IGatsbyImageData}
                alt={`Image of ${name}`}
            />
            <S.InfoAndButtons>
                <S.InfoWrapper>
                    <S.MediaName> {name.toLocaleUpperCase()} </S.MediaName>
                    <S.Synopsis> {synopsis} </S.Synopsis>
                </S.InfoWrapper>
                <S.ButtonsWrapper>
                    <WatchLatterButton mediaId={id} />
                    <ColorButton
                        onClick={onClickColorButton}
                        text="Watch Now"
                    />
                </S.ButtonsWrapper>
            </S.InfoAndButtons>
        </S.Component>
    )
}
