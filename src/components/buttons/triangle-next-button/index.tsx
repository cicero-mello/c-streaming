import React, { FunctionComponent, MouseEvent } from "react"
import { TriangleNextButtonProps } from "./types"
import { TriangleNext } from "../../../assets/icons"
import * as Styles from "./styles"

export const TriangleNextButton: FunctionComponent<TriangleNextButtonProps> = (
    props
) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if(props.disabled) return
        if(props.onClick) props.onClick(e)
    }

    return (
        <Styles.Button {...props} onClick={handleClick}>
            <TriangleNext />
        </Styles.Button>
    )
}
