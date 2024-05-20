import React, { FunctionComponent, useEffect, useLayoutEffect, useState } from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { BannerAnimationState, BannerProps } from "./types"
import { ColorButton, WatchLatterButton } from "../buttons"
import { watchLaterStorage } from "../../localstorage"
import { useNavigation } from "../../hooks"
import * as Styled from "./styles"
import { PATHS } from "../../paths"

export const Banner: FunctionComponent<BannerProps> = (newMedia) => {
    const { navigate } = useNavigation()
    const [showingMedia, setShowingMedia] = useState(newMedia)
    const { id, name, synopsis, image, type } = showingMedia
    const [watchLater, setWatchLater] = useState<boolean>(false)
    const [bannerAnimation, setBannerAnimation] = useState<BannerAnimationState>("closed")
    const [firstRender, setFirstRender] = useState(true)

    const onClickWatchLater = () => {
        watchLaterStorage.set(id, !watchLater)
        setWatchLater((old) => !old)
    }

    const onClickColorButton = () => {
        if(type === "movie") navigate(PATHS.MOVIE + `?id=${id}`)
        else navigate(PATHS.SERIES + `?id=${id}`)
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
                    <WatchLatterButton
                        onClick={onClickWatchLater}
                        alreadySaveToWatch={watchLater}
                    />
                    <ColorButton
                        onClick={onClickColorButton}
                        text="Watch Now"
                    />
                </Styled.ButtonsWrapper>
            </Styled.InfoAndButtons>
        </Styled.Component>
    )
}
