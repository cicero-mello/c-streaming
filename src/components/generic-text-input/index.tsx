import React, { FC, useState } from "react"
import { GenericTextInputProps } from "./types"
import * as S from "./styles"

export const GenericTextInput: FC<GenericTextInputProps> = ({
    label, errorMessage, forgetPasswordAction, type, ...rest
}) => {
    const [inputType, setInputType] = useState(
        forgetPasswordAction ? "password" : type
    )

    const handleEyeChange = () => {
        if(inputType === "password") setInputType("text")
        else setInputType("password")
    }

    return (
        <S.Component>
            <S.Label onClick={(e) => e.preventDefault()}>
                { label ?? "" }
                <S.Input
                    $hasLabel={!!label}
                    $hasEye={!!forgetPasswordAction}
                    spellCheck="false"
                    autoComplete="off"
                    type={inputType}
                    {...rest}
                />
                {!!forgetPasswordAction &&
                    <S.PasswordEye
                        onClick={handleEyeChange}
                        $eyeClosed={inputType !== "password"}
                    />
                }
            </S.Label>
            <S.MessagesWrapper>
                <S.ErrorMessage $text={errorMessage} />
                {!!forgetPasswordAction &&
                    <S.ForgetPasswordMessage
                        onClick={forgetPasswordAction}
                    />
                }
            </S.MessagesWrapper>
        </S.Component>
    )
}
