import React, { FC, useState, useRef, useEffect } from "react"
import { FakeVideoProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { PlayTriangle, TrianglePong } from "../../../assets/icons"
import * as core from "./core"
import * as S from "./styles"

export const FakeVideo: FC<FakeVideoProps> = ({
    thumbImage, altThumbImage, ...rest
}) => {
    const containerPongRef = useRef<HTMLDivElement>(null)
    const trianglePongRef = useRef<SVGSVGElement>(null)
    const [showVideo, setShowVideo] = useState(false)

    const handleClickPlayButton = () => {
        if(!!trianglePongRef.current && !!containerPongRef.current){
            core.startPongAnimation(
                trianglePongRef.current,
                containerPongRef.current
            )
        }

        setShowVideo(true)
    }

    useEffect(() => () => core.finishPongAnimation(), [])

    return (
        <S.Component {...rest} $showVideo={showVideo}>
            <S.ScreenSaverContainer ref={containerPongRef}>
                <TrianglePong ref={trianglePongRef}/>
                <S.Message>
                    This page is just a demo.<br/>
                    There is no real video here.
                </S.Message>
            </S.ScreenSaverContainer>
            <S.PlayButton onClick={handleClickPlayButton}>
                <PlayTriangle />
            </S.PlayButton>
            <GatsbyImage
                image={thumbImage}
                alt={`Image of ${altThumbImage}`}
            />
        </S.Component>
    )
}
