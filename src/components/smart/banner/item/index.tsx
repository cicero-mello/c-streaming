import React, { FunctionComponent, useEffect, useState } from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { BannerAnimationState, BannerItem } from "./types"
import { WatchLatterButton } from "../../../dumb/buttons"
import { useNavigation } from "../../../../hooks"
import { getMediaPathByMediaType } from "../../../../paths"
import * as S from "./styles"
import { Button } from "../../../dumb"

export const Item: FunctionComponent<BannerItem> = (newMedia) => {
    const [showingMedia, setShowingMedia] = useState(newMedia)
    const [bannerAnimation, setBannerAnimation] = useState<BannerAnimationState>("closed")
    const [firstRender, setFirstRender] = useState(true)

    useEffect(() => {
        setBannerAnimation("closed")
        setTimeout(() => {
            setShowingMedia(newMedia)
            setBannerAnimation("open")
            if(firstRender) setFirstRender(false)
        }, firstRender ? 100 : 400)
    }, [newMedia])

    return (
        <S.Component $animationState={bannerAnimation}>
            <GatsbyImage
                className="gatsby-image"
                image={showingMedia.image as IGatsbyImageData}
                alt={`Image of ${showingMedia.name}`}
            />
            <S.InfoAndButtons>
                <S.InfoWrapper>
                    <S.MediaName> {showingMedia.name?.toLocaleUpperCase() ?? ""} </S.MediaName>
                    <S.Synopsis> {showingMedia.synopsis} </S.Synopsis>
                </S.InfoWrapper>
                <S.ButtonsWrapper>
                    <WatchLatterButton mediaId={showingMedia.id} />
                    <Button
                        theme="classic"
                        children="Watch Now"
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
