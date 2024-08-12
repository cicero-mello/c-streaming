import React, { FC } from "react"
import { PageLoaderProps } from "./types"
import * as S from "./styles"

export const PageLoader: FC<PageLoaderProps> = ({
    show
}) => (
    <S.Component $show={show}>
        <S.Loader />
    </S.Component>
)
