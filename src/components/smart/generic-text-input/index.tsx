import React, { FC, useRef, useState } from "react"
import { GenericTextInputProps } from "./types"
import { useFocusOrigin } from "@hooks"
import * as S from "./styles"

export const GenericTextInput: FC<GenericTextInputProps> = ({
    label, errorMessage, forgetPasswordAction, type, ...rest
}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const focusOrigin = useFocusOrigin(inputRef)
    const [inputType, setInputType] = useState(
        forgetPasswordAction ? "password" : type
    )

    const handleEyeChange = () => {
        if(inputType === "password") setInputType("text")
        else setInputType("password")
    }

    return (
        <S.Component $disabled={rest.disabled}>
            <S.Label onClick={(e) => e.preventDefault()}>
                { label ?? "" }
                <S.Input
                    ref={inputRef}
                    $focusOrigin={focusOrigin}
                    $hasLabel={!!label}
                    $hasEye={!!forgetPasswordAction}
                    aria-label={label}
                    spellCheck="false"
                    autoComplete="off"
                    type={inputType}
                    {...rest}
                />
                {!!forgetPasswordAction &&
                    <S.PasswordEye
                        onClick={handleEyeChange}
                        type="button"
                        $eyeClosed={inputType !== "password"}
                        aria-label={
                            inputType === "password" ?
                            "Show password" :
                            "Hide password"
                        }
                    />
                }
            </S.Label>
            <S.MessagesWrapper>
                <S.ErrorMessage $text={errorMessage} />
                {!!forgetPasswordAction &&
                    <S.ForgetPasswordMessage
                        tabIndex={0}
                        aria-label="Forgot your password?"
                        onClick={forgetPasswordAction}
                        type="button"
                    />
                }
            </S.MessagesWrapper>
        </S.Component>
    )
}
