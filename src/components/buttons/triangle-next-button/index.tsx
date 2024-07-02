import React, { FunctionComponent, MouseEvent } from "react"
import { TriangleNextButtonProps } from "./types"
import { TriangleNext } from "../../../assets/icons"
import * as S from "./styles"

export const TriangleNextButton: FunctionComponent<TriangleNextButtonProps> = (
    props
) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if(props.disabled) return
        if(props.onClick) props.onClick(e)
    }

    return (
        <S.Button {...props} onClick={handleClick}>
            <TriangleNext />
        </S.Button>
    )
}
