import React, { FC, useMemo, useState } from "react"
import { MediaSuggestionsProps,
    SuggestionMedia, OnTransitionState,
} from "./types"
import { SuggestionTrianglesIco } from "../../../assets/icons"
import { GatsbyImage } from "gatsby-plugin-image"
import { useNavigation } from "../../../hooks"
import { getMediaPathByMediaType } from "../../../paths"
import { useMediaStore } from "../../../stores"
import { createSuggestionMedias } from "./core"
import * as S from "./styles"
import { Link } from "gatsby"

export const MediaSuggestions: FC<MediaSuggestionsProps> = ({
    exceptionMediaID: propExceptionMediaID,
    medias: propMedias,
    ...rest
}) => {
    const { navigate } = useNavigation()
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
            setCurrentSuggestionMedia(getNextSuggestion())
            setOnTransition("next-to-none")
            setTimeout(() => setFreePointerEvents(true), 330)
        }, 360)
    }

    const handleClickPreviusSuggestion = () => {
        if(!freePointerEvents) return

        setOnTransition("previus")
        setFreePointerEvents(false)

        setTimeout(() => {
            setCurrentSuggestionMedia(getPreviusSuggestion())
            setOnTransition("previus-to-none")
            setTimeout(() => setFreePointerEvents(true), 330)
        }, 360)
    }

    const goToNewMedia = () => {
        if(!freePointerEvents || !currentSuggestionMedia) return
        navigate(
            getMediaPathByMediaType(currentSuggestionMedia.type),
            { mediaID: currentSuggestionMedia.id }
        )
        setTimeout(() => { handleClickNextSuggestion() }, 100)
    }

    return (
        <S.Component {...rest}>
            <S.Text>
                Want something different? <br/>
                Why not try...
            </S.Text>
            <S.SuggestionsWrapper>
                <S.Button onClick={handleClickPreviusSuggestion}>
                    <SuggestionTrianglesIco />
                </S.Button>
                <Link to={""} onClick={(e) => e.preventDefault()}>
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
                </Link>
                <S.Button onClick={handleClickNextSuggestion}>
                    <SuggestionTrianglesIco />
                </S.Button>
            </S.SuggestionsWrapper>
        </S.Component>
    )
}
