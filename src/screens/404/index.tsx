import React, { FunctionComponent } from "react"
import { PageProps } from "gatsby"
import * as S from "./styles"

export const NotFound: FunctionComponent<PageProps> = () => (
    <S.Screen>
        <S.NotFound> 404 </S.NotFound>
    </S.Screen>
)
