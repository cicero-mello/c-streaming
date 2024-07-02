import React, { FunctionComponent, useRef } from "react"
import { TriangleBannerNav } from "../../assets/icons"
import { TriangleRadioInputProps } from "./types"
import * as S from "./styles"

export const TriangleRadioInput: FunctionComponent<TriangleRadioInputProps> = ({
    onClick, name, defaultChecked, disabled
}) => {
    const ref = useRef<any>(null)

    const handleClick = () => {
        if(disabled) return
        ref.current.checked = true
        onClick()
    }

    return (
        <S.Component onClick={handleClick}>
            <input
                ref={ref}
                type="radio"
                name={name}
                defaultChecked={defaultChecked}
                disabled={true}
            />
            <TriangleBannerNav />
        </S.Component>
    )
}
