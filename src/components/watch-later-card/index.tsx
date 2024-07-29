import React, { FC } from "react"
import { WatchLaterCardsProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import * as S from "./styles"
import { BorderButton, ColorButton } from "../buttons"

export const WatchLaterCard: FC<WatchLaterCardsProps> = ({
    title, image, onGoWatch, onRemove
}) => {

    const handleClickWatchNow = () => onGoWatch()

    const handleClickRemove = () => {
        onRemove()
    }

    return (
        <S.Component>
            <GatsbyImage image={image} alt={title}/>
            <S.CardContent>
                <S.Title> {title} </S.Title>
                <S.Buttons>
                    <ColorButton
                        text="Watch Now"
                        onClick={handleClickWatchNow}
                    />
                    <BorderButton
                        $text="Remove"
                        onClick={handleClickRemove}
                    />
                </S.Buttons>
            </S.CardContent>
        </S.Component>
    )
}
