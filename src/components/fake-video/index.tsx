import React, { forwardRef, useState, useRef, useImperativeHandle } from "react"
import { FakeVideoProps, FakeVideoRef } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { PlayTriangle } from "../../assets/icons"
import videoMock from "../../assets/videos/gold-triangles.mp4"
import * as S from "./styles"

export const FakeVideo = forwardRef<FakeVideoRef, FakeVideoProps>(({
    thumbImage, onClickWatch, imageName
}, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [renderSource, setRenderSource] = useState(true)
    const [showVideo, setShowVideo] = useState(false)

    const handleClick = () => {
        if(onClickWatch) onClickWatch()

        videoRef?.current?.load()
        videoRef?.current?.play()
        setShowVideo(true)
    }

    useImperativeHandle(ref, () => ({
        reload: () => {
            setShowVideo(false)

            videoRef?.current?.pause()
            setRenderSource(false)
            setTimeout(() => setRenderSource(true), 50)
        }
    }))

    return(
        <S.Component $showVideo={showVideo}>
            <S.VideoContainerProportion>
                <S.Video controls ref={videoRef} preload="none">
                    {renderSource &&
                        <source src={videoMock} type="video/mp4" />
                    }
                </S.Video>
            </S.VideoContainerProportion>
            <S.PlayButton onClick={handleClick}>
                <PlayTriangle />
            </S.PlayButton>
            <GatsbyImage image={thumbImage} alt={imageName} />
        </S.Component>
    )
})
