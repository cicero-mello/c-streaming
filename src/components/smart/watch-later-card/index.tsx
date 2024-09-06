import React, { FC, useLayoutEffect, useRef, useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { WatchLaterCardProps } from "./types"
import { Button } from "../../dumb"
import { getMediaPathByMediaType } from "../../../paths"
import { customLocalStorage } from "../../../stores"
import { delay } from "../../../shared/utils"
import { useAriaNotification } from "../../../hooks/"
import * as S from "./styles"

export const WatchLaterCard: FC<WatchLaterCardProps> = ({
    mediaID, mediaName, mediaType, image, onRemove, ...rest
}) => {
    const componentRef = useRef<HTMLDivElement>(null)
    const [closeAnimationStarted, setCloseAnimationStarted] = useState(false)
    const { readAriaNotification, clearAriaNotification } = useAriaNotification()

    const handleClickRemove = async () => {
        S.prepareToClose(componentRef)
        setCloseAnimationStarted(true)
        await delay(S.CLOSE_CARD_TIME)
        readAriaNotification(`${mediaName} removed`)
        customLocalStorage.removeWatchLater(mediaID)
        if(onRemove) onRemove()
    }

    useLayoutEffect(() => clearAriaNotification, [])

    return (
        <S.Container
            {...rest}
            $closed={closeAnimationStarted}
        >
            <S.Component
                ref={componentRef}
                $closed={closeAnimationStarted}
            >
                <GatsbyImage image={image} alt={mediaName}/>
                <S.CardContent>
                    <S.Title> {mediaName} </S.Title>
                    <S.Buttons>
                        <Button
                            tabIndex={closeAnimationStarted ? -1 : undefined}
                            theme="classic"
                            children="Watch Now"
                            aria-label={`Watch "${mediaName}"`}
                            url={{
                                path: getMediaPathByMediaType(mediaType),
                                params: { mediaID: mediaID}
                            }}
                        />
                        <Button
                            tabIndex={closeAnimationStarted ? -1 : undefined}
                            theme="border"
                            children="Remove"
                            onClick={handleClickRemove}
                            aria-label={`Remove "${mediaName}" from watch later list`}
                        />
                    </S.Buttons>
                </S.CardContent>
            </S.Component>
        </S.Container>
    )
}
