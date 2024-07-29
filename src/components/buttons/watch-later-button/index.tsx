import React, { FC, useState, useLayoutEffect } from "react"
import { customLocalStorage } from "../../../localstorage"
import { WatchLatterButtonProps } from "./types"
import * as S from "./styles"

export const WatchLatterButton: FC<WatchLatterButtonProps> = ({
    mediaId, onClick, text, ...rest
}) => {
    const [watchLater, setWatchLater] = useState(false)

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
        >
            {text ?? "Watch Later"}
        </S.Button>
    )
}
