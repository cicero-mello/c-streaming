import React, { FC, useLayoutEffect, useState } from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { ItemAnimationState, BannerItemProps } from "./types"
import { getMediaPathByMediaType } from "../../../../paths"
import { WatchLatterButton } from "../../../smart"
import { Button, Wrapper } from "../../../dumb"
import { useAriaNotification } from "../../../../hooks"
import * as S from "./styles"

export const Item: FC<BannerItemProps> = ({
    isBannerHidden, ...itemMedia
}) => {
    const [firstRender, setFirstRender] = useState(true)
    const [showingMedia, setShowingMedia] = useState(itemMedia)
    const [
        itemAnimation,
        setItemAnimation
    ] = useState<ItemAnimationState>("closed")
    const {
        readAriaNotification,
        clearAriaNotification
    } = useAriaNotification()

    useLayoutEffect(() => {
        setItemAnimation("closed")
        setTimeout(() => {
            setShowingMedia(itemMedia)
            setItemAnimation("open")
            if(!firstRender) readAriaNotification(itemMedia.name)
            else setFirstRender(false)
        }, firstRender ? 100 : 360)

        return clearAriaNotification
    }, [itemMedia.id])

    return (
        <S.Component $animationState={itemAnimation}>
            <Wrapper
                role="img"
                aria-label={`Banner image of ${showingMedia.name}`}
                tabIndex={isBannerHidden ? -1 : 0}
            >
                <GatsbyImage
                    className="gatsby-image"
                    image={showingMedia.image as IGatsbyImageData}
                    alt={`Banner image of ${showingMedia.name}`}
                    tabIndex={-1}
                />
            </Wrapper>
            <S.InfoAndButtons>
                <S.InfoWrapper>
                    <S.MediaName
                        aria-label={`Banner title: ${showingMedia.name}`}
                        tabIndex={isBannerHidden ? -1 : 0}
                    >
                        {showingMedia.name?.toLocaleUpperCase() ?? ""}
                    </S.MediaName>
                    <S.Synopsis
                        aria-label={`Synopsis: ${showingMedia.synopsis}`}
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
                            params: { mediaID: showingMedia.id }
                        }}
                    />
                </S.ButtonsWrapper>
            </S.InfoAndButtons>
        </S.Component>
    )
}
