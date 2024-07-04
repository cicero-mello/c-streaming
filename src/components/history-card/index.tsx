import React, { FC, MouseEvent, useRef, useState } from "react"
import { HistoryCardProps } from "./types"
import * as S from "./styles"

export const HistoryCard: FC<HistoryCardProps> = ({
    mediaName, season, ep, epName, closeAction
}) => {
    const CLOSE_ANIMATION_TIME = 400
    const [render, setRender] = useState(true)
    const cardRef = useRef<HTMLDivElement>(null)

    const closeElementWithStyles = () => {
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

    const handleClose = (event: MouseEvent) => {
        event.stopPropagation()
        if(closeAction) closeAction()
        closeElementWithStyles()
        setTimeout(() => setRender(false), CLOSE_ANIMATION_TIME)
    }

    return render &&(
        <S.Component ref={cardRef}>
            <S.CloseButton onClick={handleClose}/>
            <S.Title> {mediaName} </S.Title>
            {season && ep &&
                <S.SeasonAndEp>
                    {`S ${season} | E ${ep}`}
                </S.SeasonAndEp>
            }
            {epName &&
                <S.EpisodeName>
                    {epName}
                </S.EpisodeName>
            }
        </S.Component>
    )
}
