import React, { FC, MouseEvent, useRef } from "react"
import { EpisodeCardsProps } from "./types"
import { EpisodeCard } from "../episode-card"
import * as S from "./styles"

export const EpisodeCardsCarousel: FC<EpisodeCardsProps> = ({
    episodeCards, topText
}) => {
    const MOBILE_WIDTH = 600
    const carouselRef = useRef<HTMLDivElement>(null)
    let isGrabbing = false
    let cursorXInitialPosition = 0
    let scrollLeftInitialPosition = 0
    let momentumNextScrollX = 0
    let animationFrameId: number

    const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
        if(!carouselRef.current || window.innerWidth <= MOBILE_WIDTH) return
        isGrabbing = true
        cursorXInitialPosition = event.pageX - carouselRef.current.offsetLeft
        scrollLeftInitialPosition = carouselRef.current.scrollLeft
        cancelMomentumTracking()
    }

    const handleMouseUp = () => {
        if(window.innerWidth <= MOBILE_WIDTH) return
        isGrabbing = false
        startMomentumTracking()
    }

    const handleMouseLeave = () => {
        isGrabbing = false
    }

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        if(
            !carouselRef.current ||
            !isGrabbing ||
            window.innerWidth <= MOBILE_WIDTH
        ) return

        event.preventDefault()
        const cursorXCurrentPosition = event.pageX - carouselRef.current.offsetLeft
        const mouseWalk = (cursorXCurrentPosition - cursorXInitialPosition) * 1.5
        const oldScrollLeft = carouselRef.current.scrollLeft
        carouselRef.current.scrollLeft = scrollLeftInitialPosition - mouseWalk
        momentumNextScrollX = carouselRef.current.scrollLeft - oldScrollLeft
    }

    const momentumLoop = () => {
        if(!carouselRef.current || window.innerWidth <= MOBILE_WIDTH) return
        carouselRef.current.scrollLeft += momentumNextScrollX
        momentumNextScrollX *= 0.95
        if (Math.abs(momentumNextScrollX) < 0.5) return
        animationFrameId = requestAnimationFrame(momentumLoop)
    }

    const startMomentumTracking = () => {
        cancelMomentumTracking()
        animationFrameId = requestAnimationFrame(momentumLoop)
    }

    const cancelMomentumTracking = () => {
        if(!animationFrameId || window.innerWidth <= MOBILE_WIDTH) return
        cancelAnimationFrame(animationFrameId)
    }

    const handleWheel = () => cancelMomentumTracking()

    return (
        <S.Component>
            <S.TopText> {topText} </S.TopText>
            <S.CarouselWrapper>
                <S.Carousel
                    ref={carouselRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    onWheel={handleWheel}
                >
                    {episodeCards.map((ep, index) => (
                        <EpisodeCard
                            key={ep.text.replace(" ", "-") + index}
                            {...ep}
                        />
                    ))}
                </S.Carousel>
            </S.CarouselWrapper>
        </S.Component>
    )
}
