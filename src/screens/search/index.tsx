import React, { FunctionComponent, useEffect, useState } from "react"
import { PageProps } from "gatsby"
import { useNavigation } from "../../hooks"
import * as S from "./styles"
import { GenericTextInput } from "../../components"

export const Search: FunctionComponent<PageProps> = () => {
    const { getUrlParams } = useNavigation()
    const [searchText, setSearchText] = useState(getUrlParams().search ?? "")

    useEffect(() => {
        console.log(searchText)
    }, [])

    return (
        <S.Component>
            <S.InputZone>
                <GenericTextInput
                    label="Name"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </S.InputZone>
        </S.Component>
    )
}
