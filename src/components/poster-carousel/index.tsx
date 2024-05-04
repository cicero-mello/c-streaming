import React, { FunctionComponent, useRef, useState } from "react"
import { PosterCarouselProps } from "./types"
import { Poster } from "../poster"
import { TriangleNextButton } from "../buttons"
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

    return (
        <Styled.Component>
            <TriangleNextButton
                onClick={handleClickGoBack}
                disabled={!canGoBack}
            />
            <Styled.Carousel ref={carouselRef} id="aaa">
                {posters.map(poster => <Poster {...poster} key={poster.id}/>)}
            </Styled.Carousel>
            <TriangleNextButton
                onClick={handleClickGoAhead}
                disabled={!canGoAhead}
            />
        </Styled.Component>
    )
}
