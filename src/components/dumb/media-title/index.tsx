import React, { FC } from "react"
import { MediaTitleProps } from "./types"
import { WatchLatterButton } from "../../smart"
import { getEpisodeAriaLabel, getEpisodeNameShowed } from "./core"
import * as S from "./styles"

export const MediaTitle: FC<MediaTitleProps> = ({
    title, episode, mediaId, watchLaterText
}) => (
    <S.Component>
        <S.MediaTitle
            children={title}
            tabIndex={0}
        />
        {episode &&
            <S.MediaEpisodeName
                aria-label={getEpisodeAriaLabel(episode)}
                tabIndex={0}
            >
                <span aria-hidden="true">
                    {getEpisodeNameShowed(episode)}
                </span>
            </S.MediaEpisodeName>
        }
        <WatchLatterButton
            mediaId={mediaId}
            text={watchLaterText}
        />
    </S.Component>
)
