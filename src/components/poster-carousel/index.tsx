import React, { FunctionComponent, useCallback, useRef, useState } from "react"
import { PosterCarouselProps } from "./types"
import { Poster } from "../poster"
import { TriangleNextButton } from "../buttons"
import { debounce } from "../../shared/debounce"
import { useDidMountEffect } from "../../hooks"
import * as Styled from "./styles"

export const PosterCarousel: FunctionComponent<PosterCarouselProps> = ({
    posters
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
        window.addEventListener("resize", () => {
            debounce(onScrollMobile, 50, "id")
        })
    }, [onScrollMobile])

    return (
        <Styled.Component>
            <TriangleNextButton
                onClick={handleClickGoBack}
                disabled={!canGoBack}
            />
            <Styled.Carousel ref={carouselRef} onScroll={onScrollMobile}>
                {posters.map(poster => <Poster {...poster} key={poster.id}/>)}
            </Styled.Carousel>
            <TriangleNextButton
                onClick={handleClickGoAhead}
                disabled={!canGoAhead}
            />
        </Styled.Component>
    )
}
