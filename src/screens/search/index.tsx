import React, { ChangeEvent, FC, useMemo, useState } from "react"
import { UrlState, useUrlState } from "../../hooks"
import { debounce, delay, scrollPageToTop } from "../../shared/utils"
import { getFilteredPosters } from "./core"
import { usePosters } from "./use-posters"
import { useFocusControl } from "./use-focus-control"
import {
    GenericTextInput, Line,
    Poster, SelectInput
} from "../../components"
import * as S from "./styles"

export const Search: FC = () => {
    const [showPosters, setShowPosters] = useState(true)
    const [urlState, setUrlStateKey] = useUrlState()

    const { isToFocusSelectFirst } = useFocusControl()
    const posters = usePosters()

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
                    tabIndex={2}
                    onFocus={scrollPageToTop}
                    label="Name"
                    name="searchText"
                    defaultValue={urlState.searchText ?? ""}
                    onChange={(event) => debounce(
                        () => handleFilterChange(event), 250
                    )}
                />
                <SelectInput
                    tabIndex={isToFocusSelectFirst ? 1 : 2}
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
            <S.PostersWrapper $showPosters={showPosters}>
                {filteredPosters.map((props) =>
                    <Poster {...props} key={props.mediaId}/>
                )}
                {filteredPosters.length === 0 &&
                    <S.NoMediaMessage>
                        {"No results for your search :("}
                    </S.NoMediaMessage>
                }
            </S.PostersWrapper>
        </S.Component>
    )
}
