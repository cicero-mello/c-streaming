import React, { FC, MouseEvent, KeyboardEvent } from "react"
import { PosterProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { createLinkPath, getMediaPathByMediaType } from "../../../paths"
import { useNavigation } from "../../../hooks"
import * as S from "./styles"

export const Poster: FC<PosterProps> = ({
    mediaType, mediaId, name, image, ...rest
}) => {
    const { navigate } = useNavigation()
    const mediaPath = getMediaPathByMediaType(mediaType)

    const handleClick = (event: MouseEvent) => {
        event.preventDefault()
        navigate(mediaPath,{ mediaID: mediaId })
    }

    const handleKeyDown = (
        event: KeyboardEvent
    ) => {
        if(event.code === "Space" || event.code === "Enter"){
            event.preventDefault()
            navigate(mediaPath,{ mediaID: mediaId })
        }
    }

    return (
        <S.Component {...rest}>
            <Link
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                aria-label={name}
                to={createLinkPath(
                    mediaPath,
                    { mediaID: mediaId }
                )}
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
}