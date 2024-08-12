import React, { FC, useState } from "react"
import { WatchLaterCardsProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { BorderButton, ColorButton } from "../buttons"
import { delay } from "../../../shared/utils"
import * as S from "./styles"

export const WatchLaterCard: FC<WatchLaterCardsProps> = ({
    title, image, onGoWatch, onRemove
}) => {
    const [closeAnimationStarted, setCloseAnimationStarted] = useState(false)

    const handleClickWatchNow = () => onGoWatch()

    const handleClickRemove = async () => {
        setCloseAnimationStarted(true)
        await delay(600)
        onRemove()
    }

    return (
        <S.Container $closed={closeAnimationStarted}>
            <S.Component $closed={closeAnimationStarted}>
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
        </S.Container>
    )
}
