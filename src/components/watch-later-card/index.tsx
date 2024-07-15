import React, { FC } from "react"
import { WatchLaterCardsProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import * as S from "./styles"

export const WatchLaterCard: FC<WatchLaterCardsProps> = ({
    title, image, clickAction, closeAction
}) => {

    return (
        <S.Component>
            <GatsbyImage image={image} alt={title}/>
            <S.Title> {title} </S.Title>
        </S.Component>
    )
}
