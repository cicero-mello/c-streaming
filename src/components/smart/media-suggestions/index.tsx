import React, { FC, useMemo, useState } from "react"
import { MediaSuggestionsProps,
    SuggestionMedia, OnTransitionState,
} from "./types"
import { SuggestionTriangles } from "../../../assets/icons"
import { GatsbyImage } from "gatsby-plugin-image"
import { useNavigation, useURLParams } from "../../../hooks"
import { PATHS } from "../../../paths"
import { useMediaStore } from "../../../stores"
import { createSuggestionMedias } from "./core"
import * as S from "./styles"

export const MediaSuggestions: FC<MediaSuggestionsProps> = ({
    exceptionMediaID: propExceptionMediaID,
    medias: propMedias,
    ...rest
}) => {
    const { navigate } = useNavigation()
    const [urlParams] = useURLParams()
    const medias = propMedias ?? useMediaStore(state => state.medias)

    const exceptionMediaID = propExceptionMediaID ?? urlParams.mediaID ?? ""
    const suggestionMedias = useMemo(() => (
        createSuggestionMedias(medias, exceptionMediaID)
    ), [medias, exceptionMediaID])

    const [freePointerEvents, setFreePointerEvents] = useState(true)
    const [onTransition, setOnTransition] = useState<OnTransitionState>("next-none")
    const [currentSuggestionMedia, setCurrentSuggestionMedia] = useState<SuggestionMedia>(
        suggestionMedias[0]
    )

    const getNextSuggestion = () => {
        const indexSuggestionsMedia = suggestionMedias.findIndex(
            media => currentSuggestionMedia.id === media.id
        )
        const nextSuggestionMedia = suggestionMedias[indexSuggestionsMedia + 1]
        if(!nextSuggestionMedia) return suggestionMedias[0]
        return nextSuggestionMedia
    }

    const getPreviusSuggestion = () => {
        const indexSuggestionsMedia = suggestionMedias.findIndex(
            media => currentSuggestionMedia.id === media.id
        )
        const nextSuggestionMedia = suggestionMedias[indexSuggestionsMedia - 1]
        if(!nextSuggestionMedia) return suggestionMedias[suggestionMedias.length -1]
        return nextSuggestionMedia
    }

    const handleClickNextSuggestion = () => {
        if(!freePointerEvents) return

        setOnTransition("next")
        setFreePointerEvents(false)

        setTimeout(() => {
            setCurrentSuggestionMedia(getNextSuggestion())
            setOnTransition("next-none")
            setTimeout(() => setFreePointerEvents(true), 330)
        }, 360)

    }

    const handleClickPreviusSuggestion = () => {
        if(!freePointerEvents) return

        setOnTransition("previus")
        setFreePointerEvents(false)

        setTimeout(() => {
            setCurrentSuggestionMedia(getPreviusSuggestion())
            setOnTransition("previus-none")
            setTimeout(() => setFreePointerEvents(true), 330)
        }, 360)
    }

    const goToNewMedia = () => {
        if(!freePointerEvents) return
        if(currentSuggestionMedia.type === "movie"){
            navigate(PATHS.MOVIE, { mediaID: currentSuggestionMedia.id })
        }
        else navigate(PATHS.SERIES, { mediaID: currentSuggestionMedia.id })

        setTimeout(() => { handleClickNextSuggestion() }, 100)
    }

    return(
        <S.Component {...rest}>
            <S.Text>
                Want something different? <br/>
                Why not try...
            </S.Text>
            <S.SuggestionsWrapper>
                <S.Button onClick={handleClickPreviusSuggestion}>
                    <SuggestionTriangles />
                </S.Button>
                <S.ImageWrapper
                    onClick={goToNewMedia}
                    $onTransition={onTransition}
                    $freePointerEvents={freePointerEvents}
                >
                    <GatsbyImage
                        image={currentSuggestionMedia.bannerImage}
                        alt={`Image of ${currentSuggestionMedia.mediaName}`}
                    />
                    <S.SuggestionMediaName>
                        {currentSuggestionMedia.mediaName}
                    </S.SuggestionMediaName>
                </S.ImageWrapper>
                <S.Button onClick={handleClickNextSuggestion}>
                    <SuggestionTriangles />
                </S.Button>
            </S.SuggestionsWrapper>
        </S.Component>
    )
}
