import React, { FC } from "react"
import { MediaTitleProps } from "./types"
import { WatchLatterButton } from "../buttons"
import * as S from "./styles"

export const MediaTitle: FC<MediaTitleProps> = ({
    title, episodeName, mediaId
}) => (
    <S.Component>
        <S.MediaTitle $title={title} />
        {episodeName &&
            <S.MediaEpisodeName $episodeName={episodeName}/>
        }
        <WatchLatterButton mediaId={mediaId} />
    </S.Component>
)
