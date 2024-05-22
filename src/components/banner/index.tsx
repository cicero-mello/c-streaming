import React, { FunctionComponent, useEffect, useState } from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { BannerAnimationState, BannerProps } from "./types"
import { ColorButton, WatchLatterButton } from "../buttons"
import { useNavigation } from "../../hooks"
import { PATHS } from "../../paths"
import * as Styled from "./styles"

export const Banner: FunctionComponent<BannerProps> = (newMedia) => {
    const { navigate } = useNavigation()
    const [showingMedia, setShowingMedia] = useState(newMedia)
    const { id, name, synopsis, image, type } = showingMedia
    const [bannerAnimation, setBannerAnimation] = useState<BannerAnimationState>("closed")
    const [firstRender, setFirstRender] = useState(true)

    const onClickColorButton = () => {
        if(type === "movie") navigate(PATHS.MOVIE + `?id=${id}`)
        else navigate(PATHS.SERIES + `?id=${id}`)
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
        <Styled.Component $animationState={bannerAnimation}>
            <GatsbyImage
                className="gatsby-image"
                image={image as IGatsbyImageData}
                alt={`Image of ${name}`}
            />
            <Styled.InfoAndButtons>
                <Styled.InfoWrapper>
                    <Styled.MediaName> {name.toLocaleUpperCase()} </Styled.MediaName>
                    <Styled.Synopsis> {synopsis} </Styled.Synopsis>
                </Styled.InfoWrapper>
                <Styled.ButtonsWrapper>
                    <WatchLatterButton mediaId={id} />
                    <ColorButton
                        onClick={onClickColorButton}
                        text="Watch Now"
                    />
                </Styled.ButtonsWrapper>
            </Styled.InfoAndButtons>
        </Styled.Component>
    )
}
