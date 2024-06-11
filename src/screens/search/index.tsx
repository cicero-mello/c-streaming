import React, {
    ChangeEvent, FunctionComponent, useLayoutEffect, useState
} from "react"
import {
    GenericTextInput, Poster, PosterProps, SelectInput
} from "../../components"
import { PageProps } from "gatsby"
import { useNavigation } from "../../hooks"
import * as core from "./core"
import * as S from "./styles"

export const Search: FunctionComponent<PageProps> = ({
    data
}) => {
    const { getUrlParams } = useNavigation()
    const [searchText, setSearchText] = useState(getUrlParams().searchText ?? "")
    const [searchType, setSearchType] = useState(getUrlParams().searchType ?? "all")
    const [posters, setPosters] = useState<PosterProps[]>([])
    const [filteredPosters, setFilteredPosters] = useState<PosterProps[]>([])

    const onChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        const newFilteredPosters = core.getFilteredPosters(
            e.target.value, searchType, posters
        )
        setFilteredPosters(newFilteredPosters)
    }

    const onChangeSearchType = (e: ChangeEvent<HTMLSelectElement>) => {
        setSearchType(e.target.value)
        const newFilteredPosters = core.getFilteredPosters(
            searchText, e.target.value, posters
        )
        setFilteredPosters(newFilteredPosters)
    }

    useLayoutEffect(() => {
        const newPosters = core.createPosters(data)
        setPosters(newPosters)
        const newFilteredPosters = core.getFilteredPosters(
            searchText, searchType, newPosters
        )
        setFilteredPosters(newFilteredPosters)
    }, [data])

    return (
        <S.Component>
            <S.InputZone>
                <GenericTextInput
                    label="Name"
                    value={searchText}
                    onChange={onChangeSearchText}
                />
                <SelectInput
                    label="Type"
                    options={core.SELECT_OPTIONS}
                    value={searchType}
                    onChange={onChangeSearchType}
                />
            </S.InputZone>
            <S.MediaListWrapper>
                {filteredPosters.map((poster) =>
                    <Poster {...poster}/>
                )}
            </S.MediaListWrapper>
        </S.Component>
    )
}
