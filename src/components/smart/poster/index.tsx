import React, { FunctionComponent } from "react"
import { PosterProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { useNavigation } from "../../../hooks"
import { PATHS } from "../../../paths"
import * as S from "./styles"

export const Poster: FunctionComponent<PosterProps> = ({
    id, name, image, type
}) => {
    const { navigate } = useNavigation()

    const handleClick = () => {
        if(type === "movie") navigate(PATHS.MOVIE, { mediaID: id })
        else navigate(PATHS.SERIES, { mediaID: id })
    }

    return image &&(
        <S.Component onClick={handleClick}>
            <GatsbyImage
                className="gatsby-image"
                image={image}
                alt={"Poster of " + name}
            />
            <S.Name> {name} </S.Name>
        </S.Component>
    )
}
