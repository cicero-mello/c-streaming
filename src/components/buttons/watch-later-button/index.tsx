import React, { FunctionComponent, useState, useLayoutEffect } from "react"
import { watchLaterStorage } from "../../../localstorage"
import { WatchLatterButtonProps } from "./types"
import * as Styles from "./styles"

export const WatchLatterButton: FunctionComponent<WatchLatterButtonProps> = ({
    mediaId, onClick, ...rest
}) => {
    const [watchLater, setWatchLater] = useState(false)

    const handleClick = (e: any) => {
        watchLaterStorage.set(mediaId, !watchLater)
        setWatchLater((old) => !old)
        if(onClick) onClick(e)
    }

    useLayoutEffect(() => {
        const localStorageValue = watchLaterStorage.get(mediaId)
        setWatchLater(localStorageValue)
    }, [mediaId])

    return (
        <Styles.Button
            {...rest}
            $alreadySaveToWatch={watchLater}
            onClick={handleClick}
        >
            Watch Later
        </Styles.Button>
    )
}
