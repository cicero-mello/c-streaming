import React, { FunctionComponent } from "react"
import { ColorButtonProps } from "./types"
import * as S from "./styles"

export const ColorButton: FunctionComponent<ColorButtonProps> = ({
    text, ...rest
}) => (
    <S.Button {...rest}>
        {text}
    </S.Button>
)
