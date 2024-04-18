import React, { FunctionComponent } from "react"
import { ButtonBorderProps } from "./types"
import * as Styled from "./styles"

export const ButtonBorder: FunctionComponent<ButtonBorderProps> = ({
    text, withArrows, ...rest
}) => {
    return (
        <Styled.Component {...rest}>
            {text}
        </Styled.Component>
    )
}

