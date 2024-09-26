import React, { FC, useLayoutEffect, useState } from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { ItemAnimationState, BannerItemProps } from "./types"
import { getMediaPathByMediaType } from "../../../../paths"
import { Button, WatchLatterButton } from "../../../smart"
import { useAriaNotification } from "../../../../hooks"
import * as S from "./styles"

export const Item: FC<BannerItemProps> = ({
    isBannerHidden, ...itemMedia
}) => {
    const { readAriaNotification } = useAriaNotification()
    const [firstRender, setFirstRender] = useState(true)
    const [showingMedia, setShowingMedia] = useState(itemMedia)
    const [
        itemAnimation,
        setItemAnimation
    ] = useState<ItemAnimationState>("closed")

    useLayoutEffect(() => {
        setItemAnimation("closed")
        setTimeout(() => {
            setShowingMedia(itemMedia)
            setItemAnimation("open")
            if(!firstRender) readAriaNotification(itemMedia.name)
            else setFirstRender(false)
        }, firstRender ? 100 : 360)
    }, [itemMedia.id])

    return (
        <S.Component
            $animationState={itemAnimation}
            aria-hidden={isBannerHidden ? "true" : "false"}
        >
            <GatsbyImage
                className="gatsby-image"
                image={showingMedia.image as IGatsbyImageData}
                alt={`Banner image of ${showingMedia.name}`}
                tabIndex={-1}
                aria-hidden="true"
            />
            <S.InfoAndButtons
                role="presentation"
                tabIndex={0}
                aria-label="Suggestion media banner"
            >
                <S.InfoWrapper>
                    <S.MediaName
                        role="presentation"
                        tabIndex={isBannerHidden ? -1 : 0}
                    >
                        {showingMedia.name?.toLocaleUpperCase() ?? ""}
                    </S.MediaName>
                    <S.Synopsis
                        role="presentation"
                        tabIndex={isBannerHidden ? -1 : 0}
                    >
                        {showingMedia.synopsis}
                    </S.Synopsis>
                </S.InfoWrapper>
                <S.ButtonsWrapper>
                    <WatchLatterButton
                        mediaId={showingMedia.id}
                        mediaName={showingMedia.name}
                        tabIndex={isBannerHidden ? -1 : 0}
                    />
                    <Button
                        theme="classic"
                        children="Watch Now"
                        aria-label={`Go to ${showingMedia.name} page`}
                        tabIndex={isBannerHidden ? -1 : 0}
                        url={{
                            path: getMediaPathByMediaType(showingMedia.type),
                            params: { mediaId: showingMedia.id }
                        }}
                    />
                </S.ButtonsWrapper>
            </S.InfoAndButtons>
        </S.Component>
    )
}
