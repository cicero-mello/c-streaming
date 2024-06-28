import React, { FormEvent, FunctionComponent, useState } from "react"
import { BorderButton, GenericTextInput, Line } from "../../components"
import { UserIcoBig } from "../../assets/icons"
import { type PageProps } from "gatsby"
import { isEmailValid } from "../../shared/utils"
import * as S from "./styles"

export const User: FunctionComponent<PageProps> = () => {
    const [formHasNewValue, setFormHasNewValue] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState("")

    const onSubmitForm = (event: FormEvent) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const currentEmail = formData.get("email") + ""

        if(isEmailValid(currentEmail)) {
            setEmailErrorMessage("")
            return
        }

        setEmailErrorMessage("Invalid Format")
    }

    const onChangeForm = (event: any) => {
        if(event.target.defaultValue != event.target.value){
            setFormHasNewValue(true)
        }
        else setFormHasNewValue(false)
    }

    return (
        <S.Component>
            <Line />
            <S.TopSection>
                <UserIcoBig />
                <S.Form onSubmit={onSubmitForm} onChange={onChangeForm}>
                    <GenericTextInput
                        name="username"
                        label="Username"
                        defaultValue="Gally"
                    />
                    <GenericTextInput
                        name="email"
                        label="E-mail"
                        defaultValue="gally@daisukelab.com"
                        errorMessage={emailErrorMessage}
                    />
                    <BorderButton
                        $text="Save Changes"
                        disabled={!formHasNewValue}
                    />
                </S.Form>
            </S.TopSection>
            <S.BottomSection>
                <BorderButton
                    $text="Change Password"
                    onClick={() => {}}
                />
                <BorderButton
                    $text="Logout"
                    onClick={() => {}}
                />
                <BorderButton
                    $text="Delete Account"
                    $theme="red"
                    onClick={() => {}}
                />
            </S.BottomSection>
        </S.Component>
    )
}
