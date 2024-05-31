import React, { FunctionComponent } from "react"
import { PosterProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { useNavigation } from "../../hooks"
import { PATHS } from "../../paths"
import * as Styled from "./styles"

export const Poster: FunctionComponent<PosterProps> = ({
    id, name, image, type
}) => {
    const { navigate } = useNavigation()

    const handleClick = () => {
        if(type === "movie") navigate(PATHS.MOVIE, { id: id })
        else navigate(PATHS.SERIES, { id: id })
    }

    return (
        <Styled.Component onClick={handleClick}>
            <GatsbyImage
                className="gatsby-image"
                image={image}
                alt={"Poster of " + name}
            />
            <Styled.Name> {name} </Styled.Name>
        </Styled.Component>
    )
}
