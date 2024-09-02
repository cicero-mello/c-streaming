import React, { KeyboardEvent, FC, useRef, useState } from "react"
import { useFocusOrigin, useNavigation } from "../../../hooks"
import { PATHS } from "../../../paths"
import { Button } from "../../dumb"
import * as S from "./styles"

export const SearchInput: FC = () => {
    const [searchText, setSearchText] = useState("")
    const ref = useRef<HTMLInputElement>(null)
    const focusOrigin = useFocusOrigin(ref)
    const { navigate } = useNavigation()

    const handleInputChange = (
        event: KeyboardEvent<HTMLInputElement>
    ) => {
        if(event.key === "Enter"){
            navigate(PATHS.SEARCH, {
                searchText: searchText,
                searchType: "all"
            })
        }
    }

    return (
        <S.Component tabIndex={-1}>
            <S.Input
                ref={ref}
                spellCheck={false}
                onKeyDown={handleInputChange}
                $focusOrigin={focusOrigin}
                aria-label="Search any content by name"
                onChange={(event) => {
                    setSearchText(event.target.value)
                }}
            />
            <Button
                children="Search"
                aria-label="Search"
                theme="none"
                url={{
                    path: PATHS.SEARCH,
                    params: {
                        searchText: searchText,
                        searchType: "all"
                    }
                }}
             />
        </S.Component>
    )
}
