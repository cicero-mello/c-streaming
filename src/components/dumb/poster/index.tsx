import React, { FC } from "react"
import { PosterProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { getMediaPathByMediaType } from "../../../paths"
import { Button } from "../../smart/button"
import * as S from "./styles"

export const Poster: FC<PosterProps> = ({
    mediaType, mediaId, name, image, ...rest
}) => (
    <S.Component {...rest}>
        <Button
            theme="none"
            aria-label={name}
            url={{
                path: getMediaPathByMediaType(mediaType),
                params: { mediaId: mediaId }
            }}
        >
            <GatsbyImage
                className="gatsby-image"
                image={image}
                alt={"Poster of " + name}
            />
            <S.Name> {name} </S.Name>
        </Button>
    </S.Component>
)
