import React, { FormEvent, FunctionComponent, useState } from "react"
import { BorderButton, GenericTextInput, Line } from "../../components"
import { UserIcoBig } from "../../assets/icons"
import { isEmailValid } from "../../shared/utils"
import { useModals } from "../../hooks"
import { type PageProps } from "gatsby"
import * as S from "./styles"

export const User: FunctionComponent<PageProps> = () => {
    const modals = useModals()
    const [formHasNewValue, setFormHasNewValue] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState("")

    const onSubmitForm = (event: FormEvent) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const currentEmail = formData.get("email") + ""

        if(isEmailValid(currentEmail)) {
            setEmailErrorMessage("")
            modals?.confirmYourPassword?.open()
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
                        defaultValue="gally@daisuke.com"
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
                    onClick={() => modals?.linkSendToEmail?.open()}
                />
                <BorderButton
                    $text="Logout"
                    disabled
                />
                <BorderButton
                    $text="Delete Account"
                    $theme="red"
                    onClick={() => modals?.deleteAccountQuestion?.open()}
                />
            </S.BottomSection>
        </S.Component>
    )
}
