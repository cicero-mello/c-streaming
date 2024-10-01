import React, { FC, useMemo, useState } from "react"
import { MediaSuggestionsProps, SuggestionMedia, OnTransitionState } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { getMediaPathByMediaType } from "@paths"
import { SuggestionTrianglesIco } from "@icons"
import { createSuggestionMedias } from "./core"
import { useMediaStore } from "@stores"
import { Button } from "@components"
import * as S from "./styles"

export const MediaSuggestions: FC<MediaSuggestionsProps> = ({
    exceptionMediaID: propExceptionMediaID,
    medias: propMedias,
    ...rest
}) => {
    const exceptionMediaID = propExceptionMediaID ?? ""
    const medias = propMedias ?? useMediaStore(state => state.medias)

    const suggestionMedias = useMemo(() => (
        createSuggestionMedias(medias, exceptionMediaID)
    ), [medias, exceptionMediaID])

    const [freePointerEvents, setFreePointerEvents] = useState(true)
    const [onTransition, setOnTransition] = useState<OnTransitionState>("next-to-none")
    const [currentSuggestionMedia, setCurrentSuggestionMedia] = useState(
        suggestionMedias[0]
    )

    const getNextSuggestion = (): SuggestionMedia => {
        const indexSuggestionsMedia = suggestionMedias.findIndex(
            media => currentSuggestionMedia.id === media.id
        )
        const nextSuggestionMedia = suggestionMedias[indexSuggestionsMedia + 1]
        if(!nextSuggestionMedia) return suggestionMedias[0]
        return nextSuggestionMedia
    }

    const getPreviusSuggestion = (): SuggestionMedia => {
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
            const nextSuggestion = getNextSuggestion()
            setCurrentSuggestionMedia(nextSuggestion)
            setOnTransition("next-to-none")
            setTimeout(() => setFreePointerEvents(true), 330)
        }, 360)
    }

    const handleClickPreviusSuggestion = () => {
        if(!freePointerEvents) return

        setOnTransition("previus")
        setFreePointerEvents(false)

        setTimeout(() => {
            const previusSuggestion = getPreviusSuggestion()
            setCurrentSuggestionMedia(previusSuggestion)
            setOnTransition("previus-to-none")
            setTimeout(() => setFreePointerEvents(true), 330)
        }, 360)
    }

    return (
        <S.Component {...rest}>
            <S.Text tabIndex={0}>
                Want something different? <br/>
                Why not try...
            </S.Text>
            <S.SuggestionsWrapper $freePointerEvents={freePointerEvents}>
                <S.ArrowButton
                    aria-label="Previus suggestion"
                    onClick={handleClickPreviusSuggestion}
                >
                    <SuggestionTrianglesIco />
                </S.ArrowButton>
                <Button
                    theme="none"
                    aria-label={currentSuggestionMedia.mediaName}
                    url={{
                        path: getMediaPathByMediaType(currentSuggestionMedia.type),
                        params: { mediaId: currentSuggestionMedia.id }
                    }}
                >
                    <S.ImageWrapper $onTransition={onTransition}>
                        <GatsbyImage
                            image={currentSuggestionMedia.bannerImage}
                            alt={`Image of ${currentSuggestionMedia.mediaName}`}
                        />
                        <S.SuggestionMediaName aria-live="assertive">
                            {currentSuggestionMedia.mediaName}
                        </S.SuggestionMediaName>
                    </S.ImageWrapper>
                </Button>
                <S.ArrowButton
                    aria-label="Next suggestion"
                    onClick={handleClickNextSuggestion}
                >
                    <SuggestionTrianglesIco />
                </S.ArrowButton>
            </S.SuggestionsWrapper>
        </S.Component>
    )
}
