import React, { FunctionComponent, useEffect } from "react"
import { type PageProps } from "gatsby"
import { useNavigation } from "../../hooks"
import * as S from "./styles"
import { FakeVideo } from "../../components"

export const Movie: FunctionComponent<PageProps> = ({
    data
}) => {
    const { getUrlParams, showScreen } = useNavigation()

    useEffect(() => { showScreen() }, [])

    return (
        <S.Component>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, fuga culpa aliquam fugit voluptates sint repellat error ut provident corporis quos? Necessitatibus accusamus eius voluptatibus quam suscipit nulla dignissimos qui.
            {/* <FakeVideo thumbImage={}/> */}
        </S.Component>
    )
}
