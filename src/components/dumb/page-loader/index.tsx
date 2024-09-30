import React, { FC } from "react"
import { PageLoaderProps } from "./types"
import * as S from "./styles"

export const PageLoader: FC<PageLoaderProps> = ({
    show
}) => show && (
    <S.Component>
        <S.Loader
            aria-label="Loading..."
            tabIndex={show ? 0 : -1}
            aria-hidden={show ? "false" : "true"}
        />
    </S.Component>
)
