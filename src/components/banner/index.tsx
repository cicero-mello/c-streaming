import React, { FunctionComponent, useState } from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { BannerProps } from "./types"
import * as Styles from "./styles"
import { ColorButton, WatchLatterButton } from "../buttons"

export const Banner: FunctionComponent<BannerProps> = ({ media }) => {
    const [watchLater, setWatchLater] = useState(false)
    const textPlayButton = media.type === "movie" ? "Play" : "See Episodes"

    const onClickWatchLater = () => setWatchLater((value) => !value)

    return (
        <Styles.Component>
            <GatsbyImage
                className="gatsby-image"
                image={media.image as IGatsbyImageData}
                alt={`Image of ${media.name}`}
            />
            <Styles.InfoAndButtons>
                <Styles.InfoWrapper>
                    <Styles.MediaName> {media.name.toLocaleUpperCase()} </Styles.MediaName>
                    <Styles.Synopsis> {media.synopsis} </Styles.Synopsis>
                </Styles.InfoWrapper>
                <Styles.ButtonsWrapper>
                    <WatchLatterButton
                        onClick={onClickWatchLater}
                        alreadySaveToWatch={watchLater}
                    />
                    <ColorButton text={textPlayButton} />
                </Styles.ButtonsWrapper>
            </Styles.InfoAndButtons>
        </Styles.Component>
    )
}
