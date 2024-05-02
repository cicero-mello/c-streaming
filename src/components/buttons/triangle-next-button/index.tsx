import React, { FunctionComponent } from "react"
import { TriangleNextButtonProps } from "./types"
import { TriangleNext } from "../../../assets/icons"
import * as Styles from "./styles"

export const TriangleNextButton: FunctionComponent<TriangleNextButtonProps> = () => {

    return (
        <Styles.Button>
            <TriangleNext />
        </Styles.Button>
    )
}
