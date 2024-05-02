import React, { FunctionComponent } from "react"
import { PosterListProps } from "./types"
import * as Styled from "./styles"
import { SeeAllButton, TriangleNextButton } from "../buttons"
import { Poster } from "../poster"

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
                <TriangleNextButton />
                <Styled.PostersCarousel>
                    {/* <Poster {...posters[0]}/> */}
                    {posters.map(poster => <Poster {...poster} key={poster.id} />)}
                </Styled.PostersCarousel>
                <TriangleNextButton />
            </Styled.DownSection>
        </Styled.Component>
    )
}