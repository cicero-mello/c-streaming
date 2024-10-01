import React, { FC, useState, useLayoutEffect } from "react"
import { customLocalStorage, useMediaStore } from "@stores"
import { WatchLatterButtonProps } from "./types"
import { useAriaNotification } from "@hooks"
import * as S from "./styles"

export const WatchLatterButton: FC<WatchLatterButtonProps> = ({
    mediaId, mediaName: mediaNameProp, onClick, text, ...rest
}) => {
    const { readAriaNotification } = useAriaNotification()
    const [watchLater, setWatchLater] = useState(false)
    const [ariaLabel, setAriaLabel] = useState("")

    const mediaName = (
        mediaNameProp ??
        useMediaStore(state => state.getMediaById(mediaId))?.name
    )

    const handleClick = async (e: any) => {
        if(onClick) onClick(e)

        if(watchLater){
            readAriaNotification("Removed")
            setTimeout(() => {
                setAriaLabel(`Add ${mediaName} to Watch Later List`)
            }, 200)
        }
        else{
            readAriaNotification("Added")
            setTimeout(() => {
                setAriaLabel(`Remove ${mediaName} from Watch Later List`)
            }, 200)
        }

        customLocalStorage.addWatchLater(mediaId, !watchLater)
        setWatchLater((old) => !old)
    }

    useLayoutEffect(() => {
        const localStorageValue = (
            customLocalStorage.getWatchLater(mediaId)
        )
        setWatchLater(localStorageValue)

        if(!!localStorageValue) {
            setAriaLabel(`Remove ${mediaName} from Watch Later List`)
            return
        }
        setAriaLabel(`Add ${mediaName} to Watch Later List`)
    }, [mediaId])

    return (
        <S.Button
            {...rest}
            $alreadySaveToWatch={watchLater}
            onClick={handleClick}
            aria-label={ariaLabel}
        >
            <span aria-hidden="true">
                {text ?? "Watch Later"}
            </span>
        </S.Button>
    )
}
