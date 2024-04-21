import React, { FunctionComponent } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { BannerProps } from "./types"
import * as Styled from "./styles"

export const Banner: FunctionComponent<BannerProps> = ({ movie }) => {
    const { name, image, synopsis, type, watchLater } = movie

    return (
        <Styled.Component>
            <GatsbyImage image={image} alt={`Image of ${name}`} />
        </Styled.Component>
    )
}
