import React, { FC } from "react"
import { GenericTextInputProps } from "./types"
import * as S from "./styles"

export const GenericTextInput: FC<GenericTextInputProps> = ({
    label, errorMessage, ...rest
}) => (
    <S.Component>
        <S.Label onClick={(e) => e.preventDefault()}>
            { label ?? "" }
            <S.Input
                $hasLabel={!!label}
                spellCheck="false"
                autoComplete="off"
                {...rest}
            />
        </S.Label>
        <S.ErrorMessage $text={errorMessage} />
    </S.Component>
)
