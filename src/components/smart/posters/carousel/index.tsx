import React, { FC, useCallback, useRef, useState } from "react"
import { CarouselProps } from "./types"
import { Poster } from "../../../dumb"
import { debounce, getRandomID } from "../../../../shared/utils"
import { useDidMountEffect } from "../../../../hooks"
import { TriangleNextIco } from "../../../../assets/icons"
import * as S from "./styles"

export const Carousel: FC<CarouselProps> = ({
    posters, mediaType
}) => {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [canGoAhead, setCanGoAhead] = useState(true)
    const [canGoBack, setCanGoBack] = useState(false)

    const willLeftOlnyOnePosterInTheRight = (nextStep:number) => {
        if(!carouselRef.current) return

        const scrollLeftAfter2Clicks = carouselRef.current.scrollLeft + (nextStep*4)
        return scrollLeftAfter2Clicks > carouselRef.current.scrollWidth
    }

    const willLeftOlnyOnePosterInTheLeft = (nextStep:number) => {
        if(!carouselRef.current) return

        const scrollLeftAfter1Click = carouselRef.current.scrollLeft - (nextStep*2)
        return scrollLeftAfter1Click < 0
    }

    const handleClickGoAhead = () => {
        if(!carouselRef.current) return
        setCanGoBack(true)

        let nextStep = carouselRef.current.offsetWidth/2
        if(willLeftOlnyOnePosterInTheRight(nextStep)) {
            nextStep *= 2
            setCanGoAhead(false)
        }

        carouselRef.current.scroll({
          left: carouselRef.current.scrollLeft + nextStep,
          behavior: "smooth"
        })
    }

    const handleClickGoBack = () => {
        if(!carouselRef.current) return
        setCanGoAhead(true)

        let nextStep = carouselRef.current.offsetWidth/2
        if(willLeftOlnyOnePosterInTheLeft(nextStep)){
            nextStep *= 2
            setCanGoBack(false)
        }

        carouselRef.current.scroll({
          left: carouselRef.current.scrollLeft - nextStep,
          behavior: "smooth"
        })
    }

    const onScrollMobile = useCallback(() => debounce(() => {
        if(!carouselRef.current) return

        const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current
        const scrollOnEnd = scrollLeft + clientWidth >= scrollWidth - 2
        const scrollOnStart = scrollLeft === 0

        if(scrollOnEnd){
            setCanGoAhead(false)
            setCanGoBack(true)
        }
        else if(scrollOnStart){
            setCanGoBack(false)
            setCanGoAhead(true)
        }
        else {
            setCanGoBack(true)
            setCanGoAhead(true)
        }
    }, 50, posters[0].id), [carouselRef])

    useDidMountEffect(() => {
        const resizeId = getRandomID()
        const onResize = () => {
            debounce(onScrollMobile, 50, resizeId)
        }

        window.addEventListener("resize", onResize)
        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [onScrollMobile])

    return (
        <S.Component>
            <S.TriangleNextButton
                onClick={handleClickGoBack}
                disabled={!canGoBack}
                tabIndex={-1}
            >
                <TriangleNextIco />
            </S.TriangleNextButton>
            <S.Carousel
                tabIndex={0}
                role="presentation"
                ref={carouselRef}
                onScroll={onScrollMobile}
                aria-label={`${mediaType} suggestions`}
            >
                {posters.map(poster =>
                    <Poster {...poster} key={poster.mediaId}/>
                )}
            </S.Carousel>
            <S.TriangleNextButton
                onClick={handleClickGoAhead}
                disabled={!canGoAhead}
                tabIndex={-1}
            >
                <TriangleNextIco />
            </S.TriangleNextButton>
        </S.Component>
    )
}
