import React, { FunctionComponent } from "react"
import * as Styles from "./styles"
import { BorderButtonProps } from "./types"

export const BorderButton: FunctionComponent<BorderButtonProps> = ({ text, ...rest}) => {
    return (
        <Styles.Button {...rest}>
            {text}
        </Styles.Button>
    )
}
