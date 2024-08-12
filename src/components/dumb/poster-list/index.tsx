import React, { FunctionComponent } from "react"
import { PosterListProps } from "./types"
import { SeeAllButton } from "../buttons"
import { PosterCarousel } from "../poster-carousel"
import * as S from "./styles"

export const PosterList: FunctionComponent<PosterListProps> = ({
   posters, titleText, buttonText, buttonAction
}) => (
    <S.Component>
        <S.TopSection>
            <S.Title> {titleText} </S.Title>
            <SeeAllButton text={buttonText} onClick={buttonAction}/>
        </S.TopSection>
        <S.DownSection>
            <PosterCarousel posters={posters}/>
        </S.DownSection>
    </S.Component>
)
