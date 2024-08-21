import React, { FC, MouseEvent, useRef, useState } from "react"
import { HistoryCardProps } from "./types"
import * as S from "./styles"

export const HistoryCard: FC<HistoryCardProps> = ({
    mediaName, episode, onClickClose, onClickCard,
    ...rest
}) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const [isClosing, setIsClosing] = useState(false)

    const handleCloseClick = (event: MouseEvent) => {
        event.stopPropagation()
        S.prepareToClose(cardRef)
        setIsClosing(true)
        setTimeout(async () => {
            if(!!onClickClose) await onClickClose()
        }, S.CLOSE_ANIMATION_TIME)
    }

    return (
        <S.Component
            {...rest}
            ref={cardRef}
            onClick={onClickCard}
            $closing={isClosing}
        >
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
