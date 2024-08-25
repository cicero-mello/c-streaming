import React, { FC, useState, useLayoutEffect } from "react"
import { customLocalStorage, useMediaStore } from "../../../stores"
import { WatchLatterButtonProps } from "./types"
import * as S from "./styles"

export const WatchLatterButton: FC<WatchLatterButtonProps> = ({
    mediaId, mediaName: mediaNameProp, onClick, text, ...rest
}) => {
    const [watchLater, setWatchLater] = useState(false)
    const mediaName = (
        mediaNameProp ??
        useMediaStore(state => state.getMediaById(mediaId))?.name
    )

    const handleClick = (e: any) => {
        customLocalStorage.addWatchLater(mediaId, !watchLater)
        setWatchLater((old) => !old)
        if(onClick) onClick(e)
    }

    useLayoutEffect(() => {
        const localStorageValue = (
            customLocalStorage.getWatchLater(mediaId)
        )
        setWatchLater(localStorageValue)
    }, [mediaId])

    return (
        <S.Button
            {...rest}
            $alreadySaveToWatch={watchLater}
            onClick={handleClick}
            aria-label={
                (watchLater ? "Remove " : "Add ") +
                mediaName +
                (watchLater ? " from " : " to ") +
                "Watch Later list"
            }
        >
            {text ?? "Watch Later"}
        </S.Button>
    )
}
