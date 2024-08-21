import React, { FunctionComponent } from "react"
import { PosterProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import * as S from "./styles"

export const Poster: FunctionComponent<PosterProps> = ({
    onClick, linkPath, name, image, ...rest
}) => (
    <S.Component onClick={onClick} {...rest}>
        <Link
            to={linkPath}
            onClick={e => e.preventDefault()}
        >
            <GatsbyImage
                className="gatsby-image"
                image={image}
                alt={"Poster of " + name}
            />
            <S.Name> {name} </S.Name>
        </Link>
    </S.Component>
)
