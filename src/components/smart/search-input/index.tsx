import React, { KeyboardEvent, FunctionComponent, useRef, useState } from "react"
import { SearchInputProps } from "./types"
import { useNavigation } from "../../../hooks"
import { PATHS } from "../../../paths"
import * as S from "./styles"

export const SearchInput: FunctionComponent<SearchInputProps> = ({
    onSearch
}) => {
    // const [accessibilityFocus, setAccessibilityFocus] = useState(false)
    const { navigate } = useNavigation()
    const ref = useRef<HTMLInputElement>(null)

    const onClickButton = () => {
        const inputValue = ref?.current?.value ?? ""
        if(onSearch) onSearch(inputValue)
        else navigate(PATHS.SEARCH, { searchText: inputValue })
    }

    const handleInputChange = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") onClickButton()
    }



    return (
        <S.Component tabIndex={-1}>
            <S.Input
                ref={ref}
                spellCheck={false}
                onKeyDown={handleInputChange}
                onFocus={() => console.log("focus")}
            />
            <S.Button onClick={onClickButton}>
                Search
            </S.Button>
        </S.Component>
    )
}
