import React, { FunctionComponent } from "react"
import { ColorButtonProps } from "./types"
import * as Styles from "./styles"

export const ColorButton: FunctionComponent<ColorButtonProps> = ({
    text, ...rest
}) => {
    return (
        <Styles.Button {...rest}>
            {text}
        </Styles.Button>
    )
}
