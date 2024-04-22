import React, { FunctionComponent } from "react"
import * as Styles from "./styles"
import { WatchLatterButtonProps } from "./types"

export const WatchLatterButton: FunctionComponent<WatchLatterButtonProps> = ({
    alreadySaveToWatch, ...rest
}) => {
    return (
        <Styles.Button {...rest} $alreadySaveToWatch={alreadySaveToWatch}>
            Watch Later
        </Styles.Button>
    )
}
