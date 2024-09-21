import React, { FC } from "react"
import { ErrorProps } from "./types"
import * as S from "./styles"

export const Error: FC<ErrorProps> = ({
    errorCode, ...rest
}) => (
    <S.Component {...rest}>
        <S.ErrorCodeMessage
            $errorCode={errorCode}
            aria-label={`ERROR: ErrorCode: ${errorCode}`}
            role="presentation"
            tabIndex={0}
        >
            {errorCode}
        </S.ErrorCodeMessage>
    </S.Component>
)
