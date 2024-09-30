import React, { FC, useState, useRef, useEffect } from "react"
import { FakeVideoProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { PlayTriangleIco, TrianglePongIco } from "../../../assets/icons"
import { useDidMountEffect } from "../../../hooks"
import * as core from "./core"
import * as S from "./styles"

export const FakeVideo: FC<FakeVideoProps> = ({
    thumbImage, videoName, ...rest
}) => {
    const messageRef = useRef<HTMLParagraphElement>(null)
    const containerPongRef = useRef<HTMLDivElement>(null)
    const trianglePongIcoRef = useRef<SVGSVGElement>(null)
    const [showVideo, setShowVideo] = useState(false)

    const handleClickPlayButton = () => {
        if(!!trianglePongIcoRef.current && !!containerPongRef.current){
            core.startPongAnimation(
                trianglePongIcoRef.current,
                containerPongRef.current
            )
        }

        setShowVideo(true)
    }

    useEffect(() => core.finishPongAnimation, [])

    useDidMountEffect(() => {
        if(!!showVideo && !!messageRef.current){
            messageRef.current.focus()
        }
    }, [showVideo])

    return (
        <S.Component {...rest} $showVideo={showVideo}>
            <S.Message
                ref={messageRef}
                role="presentation"
                tabIndex={showVideo ? 0 : -1}
                aria-hidden={showVideo ? "false" : "true"}
            >
                This page is just a demo.<br/>
                There is no real video here.
            </S.Message>
            <S.ScreenSaverContainer ref={containerPongRef}>
                <TrianglePongIco ref={trianglePongIcoRef}/>
            </S.ScreenSaverContainer>
            <S.PlayButton
                onClick={handleClickPlayButton}
                aria-label={`Play: ${videoName}`}
                tabIndex={showVideo ? -1 : 0}
                aria-hidden={showVideo ? "true" : "false"}
            >
                <PlayTriangleIco />
            </S.PlayButton>
            <GatsbyImage
                image={thumbImage}
                alt={`Image of ${videoName}`}
                aria-hidden="true"
            />
        </S.Component>
    )
}
