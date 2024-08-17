import React, { KeyboardEvent, FunctionComponent, useRef } from "react"
import { SearchInputProps } from "./types"
import { useNavigation } from "../../../hooks"
import { PATHS } from "../../../paths"
import * as S from "./styles"

export const SearchInput: FunctionComponent<SearchInputProps> = ({
    onSearch
}) => {
    const { navigate } = useNavigation()
    const ref = useRef<any>(null)

    const onClickButton = () => {
        const inputValue = ref?.current?.value ?? ""
        if(onSearch) onSearch(inputValue)
        else navigate(PATHS.SEARCH, { searchText: inputValue })
    }

    const handleInputChange = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") onClickButton()
    }

    return (
        <S.Component>
            <S.Input
                ref={ref}
                spellCheck={false}
                onKeyDown={handleInputChange}
            />
            <S.Button onClick={onClickButton}>
                Search
            </S.Button>
        </S.Component>
    )
}
