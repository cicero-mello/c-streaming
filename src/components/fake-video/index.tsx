import React, { FunctionComponent, useState, useRef } from "react"
import { FakeVideoProps } from "./types"
import videoMock from "../../assets/videos/gold-triangles.mp4"
import { GatsbyImage } from "gatsby-plugin-image"
import { PlayTriangle } from "../../assets/icons"
import * as S from "./styles"

export const FakeVideo: FunctionComponent<FakeVideoProps> = ({
    thumbImage, onClickWatch, imageName
}) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [showVideo, setShowVideo] = useState(false)

    const handleClick = () => {
        if(onClickWatch) onClickWatch()

        setShowVideo(true)
        videoRef?.current?.play()
    }

    return(
        <S.Component $showVideo={showVideo}>
            <S.Video controls ref={videoRef}>
                <source src={videoMock} type="video/mp4"/>
            </S.Video>
            <S.PlayButton onClick={handleClick}>
                <PlayTriangle />
            </S.PlayButton>
            <GatsbyImage image={thumbImage} alt={imageName} />
        </S.Component>
    )
}
