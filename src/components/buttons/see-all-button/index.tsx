import React, { FunctionComponent } from "react"
import { SeeAllButtonProps } from "./types"
import * as Styles from "./styles"
import { TriangleSeeAll } from "../../../assets/icons"

export const SeeAllButton: FunctionComponent<SeeAllButtonProps> = ({
    text, ...rest
}) => {

    return (
        <Styles.Button {...rest}>
            {text}
            <TriangleSeeAll />
        </Styles.Button>
    )
}
