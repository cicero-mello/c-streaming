import React, { FunctionComponent, useLayoutEffect, useState } from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { BannerProps } from "./types"
import * as Styles from "./styles"
import { ColorButton, WatchLatterButton } from "../buttons"
import { watchLaterStorage } from "../../localstorage"
import { navigate } from "gatsby"
import { PATHS } from "../../paths"

export const Banner: FunctionComponent<BannerProps> = ({
    type, image, name, synopsis, id
}) => {
    const [watchLater, setWatchLater] = useState<boolean>(false)
    const textPlayButton = type === "movie" ? "Play" : "See Episodes"

    const onClickWatchLater = () => {
        watchLaterStorage.set(id, !watchLater)
        setWatchLater((old) => !old)
    }

    const onClickColorButton = () => {
        if(type === "movie") navigate(PATHS.MOVIE + `?id=${id}`)
        else navigate(PATHS.SERIE_OR_ANIME + `?id=${id}`)
    }

    useLayoutEffect(() => {
        const localStorageValue = watchLaterStorage.get(id)
        setWatchLater(localStorageValue)
    }, [id])

    return (
        <Styles.Component>
            <GatsbyImage
                className="gatsby-image"
                image={image as IGatsbyImageData}
                alt={`Image of ${name}`}
            />
            <Styles.InfoAndButtons>
                <Styles.InfoWrapper>
                    <Styles.MediaName> {name.toLocaleUpperCase()} </Styles.MediaName>
                    <Styles.Synopsis> {synopsis} </Styles.Synopsis>
                </Styles.InfoWrapper>
                <Styles.ButtonsWrapper>
                    <WatchLatterButton
                        onClick={onClickWatchLater}
                        alreadySaveToWatch={watchLater}
                    />
                    <ColorButton
                        onClick={onClickColorButton}
                        text={textPlayButton}
                    />
                </Styles.ButtonsWrapper>
            </Styles.InfoAndButtons>
        </Styles.Component>
    )
}
