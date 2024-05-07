import React, { FunctionComponent, useEffect, useLayoutEffect, useState } from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { BannerAnimationState, BannerProps } from "./types"
import { ColorButton, WatchLatterButton } from "../buttons"
import { watchLaterStorage } from "../../localstorage"
import { navigate } from "gatsby"
import { PATHS } from "../../paths"
import * as Styled from "./styles"

export const Banner: FunctionComponent<BannerProps> = (newMedia) => {
    const [showingMedia, setShowingMedia] = useState(newMedia)
    const { id, name, synopsis, image, type } = showingMedia
    const [watchLater, setWatchLater] = useState<boolean>(false)
    const [bannerAnimation, setBannerAnimation] = useState<BannerAnimationState>("closed")

    const onClickWatchLater = () => {
        watchLaterStorage.set(id, !watchLater)
        setWatchLater((old) => !old)
    }

    const onClickColorButton = () => {
        // if(type === "movie") navigate(PATHS.MOVIE + `?id=${id}`)
        // else navigate(PATHS.SERIE_OR_ANIME + `?id=${id}`)
    }

    useLayoutEffect(() => {
        const localStorageValue = watchLaterStorage.get(id)
        setWatchLater(localStorageValue)
    }, [id])

    useEffect(() => {
        setBannerAnimation("closed")
        setTimeout(() => {
            setShowingMedia(newMedia)
            setBannerAnimation("open")
        }, 400)
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
                    <WatchLatterButton
                        onClick={onClickWatchLater}
                        alreadySaveToWatch={watchLater}
                    />
                    <ColorButton
                        onClick={onClickColorButton}
                        text="Play"
                    />
                </Styled.ButtonsWrapper>
            </Styled.InfoAndButtons>
        </Styled.Component>
    )
}
