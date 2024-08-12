import React, { FC } from "react"
import { MediaTitleProps } from "./types"
import { WatchLatterButton } from "../buttons"
import * as S from "./styles"

export const MediaTitle: FC<MediaTitleProps> = ({
    title, episodeName, mediaId, watchLaterText
}) => (
    <S.Component>
        <S.MediaTitle $title={title} />
        {episodeName &&
            <S.MediaEpisodeName $episodeName={episodeName}/>
        }
        <WatchLatterButton mediaId={mediaId} text={watchLaterText}/>
    </S.Component>
)
