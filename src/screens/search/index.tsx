import React, {
    ChangeEvent, FunctionComponent, useLayoutEffect, useState
} from "react"
import {
    GenericTextInput, Line, Poster, PosterProps, SelectInput
} from "../../components"
import { PageProps } from "gatsby"
import { useNavigation } from "../../hooks"
import { debounce, scrollPageToTop } from "../../shared/utils"
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
    const [showPosters, setShowPosters] = useState(true)

    const changeFilteredPostersWithAnimation = (
        newFilteredPosters: PosterProps[]
    ) => {
        setShowPosters(false)
        setTimeout(() => {
            setFilteredPosters(newFilteredPosters)
            setShowPosters(true)
        }, 250)
    }

    const onChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        const newFilteredPosters = core.getFilteredPosters(
            e.target.value, searchType, posters
        )
        debounce(async () => {
            await scrollPageToTop()
            changeFilteredPostersWithAnimation(newFilteredPosters)
        }, 250)
    }

    const onChangeSearchType = async (e: ChangeEvent<HTMLSelectElement>) => {
        setSearchType(e.target.value)
        await scrollPageToTop()
        const newFilteredPosters = core.getFilteredPosters(
            searchText, e.target.value, posters
        )
        changeFilteredPostersWithAnimation(newFilteredPosters)
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
            <Line />
            <S.InputZone>
                <GenericTextInput
                    onFocus={scrollPageToTop}
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
            <S.MediaListWrapper $showPosters={showPosters}>
                {filteredPosters.map((poster) =>
                    <Poster {...poster}/>
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
