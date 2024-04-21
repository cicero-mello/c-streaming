import React, { FunctionComponent } from "react"
import { ColorButtonProps } from "./types"
import * as Styles from "./styles"

export const ColorButton: FunctionComponent<ColorButtonProps> = (props) => {
    return (
        <Styles.Button {...props}>
            C-Streaming
        </Styles.Button>
    )
}
