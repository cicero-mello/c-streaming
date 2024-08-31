import React, { FC, useRef } from "react"
import { SelectInputProps } from "./types"
import { useFocusOrigin } from "../../../hooks"
import * as S from "./styles"

export const SelectInput: FC<SelectInputProps> = ({
    label, options, ...rest
}) => {
    const selectRef = useRef<HTMLSelectElement>(null)
    const focusOrigin = useFocusOrigin(selectRef)

    return (
        <S.Component>
            <S.Label onClick={(e) => e.preventDefault()}>
                {label ?? ""}
                <S.Select
                    ref={selectRef}
                    $focusOrigin={focusOrigin}
                    $hasLabel={!!label}
                    {...rest}
                >
                    {options?.map((option) => (
                        <S.Option
                            aria-label={option.text}
                            value={option.value}
                            key={"key-"+option.value}
                        >
                            {option.text}
                        </S.Option>
                    ))}
                </S.Select>
            </S.Label>
        </S.Component>
    )
}