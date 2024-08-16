import React, { FC, useState } from "react"
import { WatchLaterCardProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { BorderButton, ColorButton } from "../../../dumb/buttons"
import { delay } from "../../../../shared/utils"
import * as S from "./styles"

export const WatchLaterCard: FC<WatchLaterCardProps> = ({
    title, image, onGoWatch, onRemove, ...rest
}) => {
    const [closeAnimationStarted, setCloseAnimationStarted] = useState(false)

    const handleClickWatchNow = () => onGoWatch()

    const handleClickRemove = async () => {
        setCloseAnimationStarted(true)
        await delay(600)
        onRemove()
    }

    return (
        <S.Container {...rest} $closed={closeAnimationStarted}>
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
