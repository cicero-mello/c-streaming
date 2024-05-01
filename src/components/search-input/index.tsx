import React, { KeyboardEvent, FunctionComponent, useRef, RefObject } from "react"
import { SearchInputProps } from "./types"
import * as Styled from "./styles"

export const SearchInput: FunctionComponent<SearchInputProps> = ({
    onSearch
}) => {
    const ref = useRef<any>(null)

    const onClickButton = () => {
        const inputValue = ref?.current?.value ?? ""
        onSearch(inputValue)
    }

    const handleInputChange = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") onClickButton()
    }

    return (
        <Styled.Component>
            <Styled.Input ref={ref} spellCheck={false} onKeyDown={handleInputChange}/>
            <Styled.Button onClick={onClickButton}>
                Search
            </Styled.Button>
        </Styled.Component>
    )
}
