import React, { FC, useState } from "react"
import { ContentSuggestionsProps, CurrentSuggestionState } from "./types"
import { SuggestionTriangles } from "../../assets/icons"
import { GatsbyImage } from "gatsby-plugin-image"
import * as S from "./styles"

export const ContentSuggestions: FC<ContentSuggestionsProps> = ({
    suggestionMedias
}) => {
    const [currentSuggestion, setCurrentSuggestion] = useState<CurrentSuggestionState>({
        item: suggestionMedias[0],
        index: 0
    })
    const { bannerImage, mediaName, id } = currentSuggestion.item

    const nextSuggestion = () => {
        if(currentSuggestion.index + 1 < suggestionMedias.length) {
            setCurrentSuggestion((old) => ({
                item: suggestionMedias[old.index + 1],
                index: old.index + 1
            }))
            return
        }

        setCurrentSuggestion({
            item: suggestionMedias[0],
            index: 0
        })
    }

    const previusSuggestion = () => {
        if(currentSuggestion.index - 1 >= 0) {
            setCurrentSuggestion((old) => ({
                item: suggestionMedias[old.index - 1],
                index: old.index - 1
            }))
            return
        }

        setCurrentSuggestion({
            item: suggestionMedias[suggestionMedias.length - 1],
            index: suggestionMedias.length - 1
        })
    }

    return(
        <S.Component>
            <S.Text>
                Want something different? <br/>
                Why not try...
            </S.Text>
            <S.SuggestionsWrapper>
                <S.Button onClick={previusSuggestion}>
                    <SuggestionTriangles />
                </S.Button>
                <S.ImageWrapper>
                    <GatsbyImage image={bannerImage} alt={`Image of ${mediaName}`}/>
                </S.ImageWrapper>
                <S.Button onClick={nextSuggestion}>
                    <SuggestionTriangles />
                </S.Button>
            </S.SuggestionsWrapper>
        </S.Component>
    )
}
