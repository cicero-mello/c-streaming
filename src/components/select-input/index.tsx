import React, { FC } from "react"
import { SelectInputProps } from "./types"
import * as S from "./styles"

export const SelectInput: FC<SelectInputProps> = ({
    label, options, ...rest
}) =>  (
    <S.Component>
        <S.Label onClick={(e) => e.preventDefault()}>
            {label ?? ""}
            <S.Select $hasLabel={!!label} {...rest}>
                {options?.map((option) => (
                    <S.Option
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
