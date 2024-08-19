import React, { FC, MouseEvent, useRef } from "react"
import { HistoryCardProps } from "./types"
import * as S from "./styles"

const CLOSE_ANIMATION_TIME = 400

export const HistoryCard: FC<HistoryCardProps> = ({
    mediaName, episode, onClickClose, onClickCard,
    ...rest
}) => {
    const cardRef = useRef<HTMLDivElement>(null)

    const closeElement = () => {
        if(!cardRef.current) return
        cardRef.current.style.height = cardRef.current.offsetHeight + "px"
        cardRef.current.style.width = cardRef.current.offsetWidth + "px"
        cardRef.current.style.animation = `
            close-history-card
            ${CLOSE_ANIMATION_TIME}ms
            forwards
            ease-in-out
        `
    }

    const handleCloseClick = (event: MouseEvent) => {
        event.stopPropagation()
        closeElement()
        setTimeout(async () => {
            if(!!onClickClose) await onClickClose()
        }, CLOSE_ANIMATION_TIME)
    }

    return (
        <S.Component ref={cardRef} onClick={onClickCard} {...rest}>
            <S.CloseButton onClick={handleCloseClick}/>
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
        </S.Component>
    )
}
