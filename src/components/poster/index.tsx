import React, { FunctionComponent } from "react"
import { PosterProps } from "./types"
import * as Styled from "./styles"
import { GatsbyImage } from "gatsby-plugin-image"

export const Poster: FunctionComponent<PosterProps> = ({
    id, name, image
}) => {

    return (
        <Styled.Component>
            <GatsbyImage
                className="gatsby-image"
                image={image}
                alt={name}
            />
            <Styled.Name> {name} </Styled.Name>
        </Styled.Component>
    )
}