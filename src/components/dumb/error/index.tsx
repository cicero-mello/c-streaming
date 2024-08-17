import React, { FC } from "react"
import { ErrorProps } from "./types"
import * as S from "./styles"

export const Error: FC<ErrorProps> = ({
    errorCode, ...rest
}) => (
    <S.Component {...rest}>
        <S.ErrorCodeMessage $errorCode={errorCode}>
            {errorCode}
        </S.ErrorCodeMessage>
    </S.Component>
)
