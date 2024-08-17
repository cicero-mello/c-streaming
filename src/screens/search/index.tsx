import React, { ChangeEvent, FC, useMemo, useState } from "react"
import { UrlState, useUrlState } from "../../hooks"
import { debounce, delay, scrollPageToTop } from "../../shared/utils"
import { useMediaStore } from "../../stores"
import { getFilteredPosters, mediasToPosters } from "./core"
import {
    GenericTextInput, Line,
    Poster, SelectInput
} from "../../components"
import * as S from "./styles"

export const Search: FC = () => {
    const [showPosters, setShowPosters] = useState(true)
    const [urlState, setUrlStateKey] = useUrlState()
    const { medias } = useMediaStore()

    const posters = useMemo(() => (
        mediasToPosters(medias)
    ), [medias])

    const filteredPosters = useMemo(() => (
        getFilteredPosters(urlState, posters)
    ), [urlState, posters])

    const handleFilterChange = async (
        event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        await scrollPageToTop()
        setShowPosters(false)
        await delay(250)
        await setUrlStateKey(
            event.target.name as keyof UrlState,
            event.target.value
        )
        setShowPosters(true)
    }

    return (
        <S.Component>
            <Line />
            <S.Form>
                <GenericTextInput
                    onFocus={scrollPageToTop}
                    label="Name"
                    name="searchText"
                    defaultValue={urlState.searchText ?? ""}
                    onChange={(event) => debounce(
                        () => handleFilterChange(event), 250
                    )}
                />
                <SelectInput
                    label="Type"
                    name="searchType"
                    defaultValue={urlState.searchType ?? "all"}
                    onChange={handleFilterChange}
                    options={[
                        { value: "all", text: "All"},
                        { value: "anime", text: "Anime"},
                        { value: "movie", text: "Movie"},
                        { value: "serie", text: "Serie"}
                    ]}
                />
            </S.Form>
            <S.MediaListWrapper $showPosters={showPosters}>
                {filteredPosters.map((poster) =>
                    <Poster {...poster} key={poster.id} />
                )}
                {filteredPosters.length === 0 &&
                    <S.NoMediaMessage>
                        {"No results for your search :("}
                    </S.NoMediaMessage>
                }
            </S.MediaListWrapper>
        </S.Component>
    )
}
