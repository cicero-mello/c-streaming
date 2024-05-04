import React, { FunctionComponent } from "react"
import { PosterListProps } from "./types"
import * as Styled from "./styles"
import { SeeAllButton } from "../buttons"
import { PosterCarousel } from "../poster-carousel"

export const PosterList: FunctionComponent<PosterListProps> = ({
   posters, titleText, buttonText, buttonAction
}) => {

    return (
        <Styled.Component>
            <Styled.TopSection>
                <Styled.Title> {titleText} </Styled.Title>
                <SeeAllButton text={buttonText} onClick={buttonAction}/>
            </Styled.TopSection>
            <Styled.DownSection>
                <PosterCarousel posters={posters}/>
            </Styled.DownSection>
        </Styled.Component>
    )
}
