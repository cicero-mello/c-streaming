import React, { FC, useState } from "react"
import { ContentSuggestionsProps,
    CurrentSuggestionState, OnTransitionState
} from "./types"
import { SuggestionTriangles } from "../../../assets/icons"
import { GatsbyImage } from "gatsby-plugin-image"
import { useNavigation } from "../../../hooks"
import { PATHS } from "../../../paths"
import * as S from "./styles"

export const ContentSuggestions: FC<ContentSuggestionsProps> = ({
    suggestionMedias
}) => {
    const { navigate } = useNavigation()
    const [freePointerEvents, setFreePointerEvents] = useState(true)
    const [onTransition, setOnTransition] = useState<OnTransitionState>("next-none")
    const [currentSuggestion, setCurrentSuggestion] = useState<CurrentSuggestionState>({
        item: suggestionMedias[0],
        index: 0
    })
    const { bannerImage, mediaName, id } = currentSuggestion.item

    const selectNextSuggestion = () => {
        if(currentSuggestion.index + 1 < suggestionMedias.length) {
            setCurrentSuggestion((old) => ({
                item: suggestionMedias[old.index + 1],
                index: old.index + 1
            }))
        }
        else setCurrentSuggestion({
            item: suggestionMedias[0],
            index: 0
        })
    }

    const selectPreviusSuggestion = () => {
        if(currentSuggestion.index - 1 >= 0) {
            setCurrentSuggestion((old) => ({
                item: suggestionMedias[old.index - 1],
                index: old.index - 1
            }))
        }
        else setCurrentSuggestion({
            item: suggestionMedias[suggestionMedias.length - 1],
            index: suggestionMedias.length - 1
        })
    }

    const handleClickNextSuggestion = () => {
        if(!freePointerEvents) return

        setOnTransition("next")
        setFreePointerEvents(false)

        setTimeout(() => {
            selectNextSuggestion()
            setOnTransition("next-none")
            setTimeout(() => setFreePointerEvents(true), 330)
        }, 360)

    }

    const handleClickPreviusSuggestion = () => {
        if(!freePointerEvents) return

        setOnTransition("previus")
        setFreePointerEvents(false)

        setTimeout(() => {
            selectPreviusSuggestion()
            setOnTransition("previus-none")
            setTimeout(() => setFreePointerEvents(true), 330)
        }, 360)
    }

    const goToNewMedia = () => {
        if(!freePointerEvents) return

        if(currentSuggestion.item.type === "movie"){
            navigate(PATHS.MOVIE, { mediaID: id })
        }
        else navigate(PATHS.SERIES, { mediaID: id })

        setTimeout(() => { handleClickNextSuggestion() }, 100)
    }

    return(
        <S.Component>
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
                        image={bannerImage}
                        alt={`Image of ${mediaName}`}
                    />
                    <S.SuggestionMediaName>
                        {mediaName}
                    </S.SuggestionMediaName>
                </S.ImageWrapper>
                <S.Button onClick={handleClickNextSuggestion}>
                    <SuggestionTriangles />
                </S.Button>
            </S.SuggestionsWrapper>
        </S.Component>
    )
}
