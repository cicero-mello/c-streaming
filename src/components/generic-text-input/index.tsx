import React, { FC } from "react"
import { GenericTextInputProps } from "./types"
import * as S from "./styles"

export const GenericTextInput: FC<GenericTextInputProps> = ({
    label, ...rest
}) => (
    <S.Component>
        <S.Label onClick={(e) => e.preventDefault()}>
            { label ?? "" }
            <S.Input
                $hasLabel={!!label}
                spellCheck="false"
                {...rest}
            />
        </S.Label>
    </S.Component>
)
