import React, { FunctionComponent } from "react"
import * as Styles from "./styles"
import { HeaderButtonProps } from "./types"

export const HeaderButton: FunctionComponent<HeaderButtonProps> = ({ ...rest}) => {
    return (
        <Styles.Button {...rest}>
            C-Streaming
        </Styles.Button>
    )
}
