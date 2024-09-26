import React, { FC, MouseEvent, useRef, useState } from "react"
import { HistoryCardProps } from "./types"
import { Button } from "../button"
import { getMediaPathByMediaType } from "../../../paths"
import { delay } from "../../../shared/utils"
import { customLocalStorage } from "../../../stores"
import * as S from "./styles"
import { useAriaNotification } from "../../../hooks"

export const HistoryCard: FC<HistoryCardProps> = ({
    mediaId, mediaType, mediaName,
    historyViewDate, episode, onRemove,
    ...rest
}) => {
    const { readAriaNotification } = useAriaNotification()
    const [closeAnimationStarted, setCloseAnimationStarted] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    const ariaName = mediaName + (
        episode ? `Season ${episode.season} Episode ${episode.ep}` : ""
    )

    const handleCloseClick = async (event: MouseEvent) => {
        event.stopPropagation()
        event.preventDefault()
        S.prepareToClose(cardRef)
        setCloseAnimationStarted(true)
        readAriaNotification(`${ariaName} removed`)
        await delay(S.CLOSE_ANIMATION_TIME)
        customLocalStorage.removeMediaFromHistory({
            mediaId: mediaId,
            viewDate: historyViewDate,
            episodeID: episode?.id
        })
        if(!!onRemove) await onRemove()
    }

    return (
        <S.Component
            {...rest}
            ref={cardRef}
            $closing={closeAnimationStarted}
        >
            <Button
                theme="none"
                url={{
                    path: getMediaPathByMediaType(mediaType),
                    params: { mediaId: mediaId, episodeID: episode?.id }
                }}
                aria-label={`Watch "${ariaName}"`}
            >
                <S.CloseButton
                    onClick={handleCloseClick}
                    aria-label={`Remove "${ariaName}" from history`}
                    onContextMenu={(e) => {
                        e.stopPropagation()
                    }}
                    onKeyDown={(e) => {
                        e.stopPropagation()
                    }}
                />
                <S.Title> {mediaName} </S.Title>
                {episode &&
                    <>
                        <S.SeasonAndEp>
                            {`S ${episode.season} | E ${episode.ep}`}
                        </S.SeasonAndEp>
                        <S.EpisodeName>
                            {episode.name}
                        </S.EpisodeName>
                    </>
                }
            </Button>
        </S.Component>
    )
}
