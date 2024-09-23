import React, { FC, MouseEvent, useRef } from "react"
import { EpisodesCarrouselProps } from "./types"
import { EpisodeCard } from "../episode-card"
import * as S from "./styles"

export const EpisodesCarousel: FC<EpisodesCarrouselProps> = ({
    episodes, topText
}) => {
    const carouselRef = useRef<HTMLDivElement>(null)
    let isGrabbing = false
    let cursorXInitialPosition = 0
    let scrollLeftInitialPosition = 0
    let momentumNextScrollX: number | null = 0
    let animationFrameId: number

    const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
        if(!carouselRef.current) return
        isGrabbing = true
        cursorXInitialPosition = event.pageX - carouselRef.current.offsetLeft
        scrollLeftInitialPosition = carouselRef.current.scrollLeft
        cancelMomentumTracking()
    }

    const handleMouseUp = () => {
        isGrabbing = false
        startMomentumTracking()
    }

    const handleMouseLeave = () => {
        isGrabbing = false
    }

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        if(!carouselRef.current || !isGrabbing) return
        event.preventDefault()

        const cursorXCurrentPosition = event.pageX - carouselRef.current.offsetLeft
        const mouseWalk = (cursorXCurrentPosition - cursorXInitialPosition)
        const oldScrollLeft = carouselRef.current.scrollLeft
        carouselRef.current.scrollLeft = scrollLeftInitialPosition - mouseWalk

        if(Math.abs(carouselRef.current.scrollLeft - oldScrollLeft) < 3) {
            momentumNextScrollX = null
        }
        else momentumNextScrollX = carouselRef.current.scrollLeft - oldScrollLeft
    }

    const momentumLoop = () => {
        if(!carouselRef.current || momentumNextScrollX === null) return

        carouselRef.current.scrollLeft += momentumNextScrollX * 1.05
        momentumNextScrollX *= 0.95
        if (Math.abs(momentumNextScrollX) < 0.5) return
        animationFrameId = requestAnimationFrame(momentumLoop)
    }

    const startMomentumTracking = () => {
        cancelMomentumTracking()
        animationFrameId = requestAnimationFrame(momentumLoop)
    }

    const cancelMomentumTracking = () => {
        if(!animationFrameId) return
        cancelAnimationFrame(animationFrameId)
    }

    const handleWheel = () => cancelMomentumTracking()

    return (
        <S.Component>
            <S.TopText
                tabIndex={0}
                aria-label={topText.toLowerCase()}
            >
                {topText}
            </S.TopText>
            <S.CarouselWrapper>
                <S.Carousel
                    ref={carouselRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    onWheel={handleWheel}
                >
                    {episodes.map((ep, index) => (
                        <EpisodeCard
                            key={ep.episodeName.replace(" ", "-") + index}
                            {...ep}
                        />
                    ))}
                </S.Carousel>
            </S.CarouselWrapper>
        </S.Component>
    )
}
