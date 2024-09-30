import React, { FormEvent, FunctionComponent, useState } from "react"
import { Button, GenericTextInput, Line } from "../../components"
import { UserIcoBig } from "../../assets/icons"
import { delay, isEmailValid } from "../../shared/utils"
import { useAriaNotification, useModals } from "../../hooks"
import { type PageProps } from "gatsby"
import * as S from "./styles"

export const UserSettings: FunctionComponent<PageProps> = () => {
    const modals = useModals()
    const { readAriaNotification } = useAriaNotification()
    const [formHasNewValue, setFormHasNewValue] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    const [usernameErrorMessage, setUsernameErrorMessage] = useState("")

    const onSubmitForm = async (event: FormEvent) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const currentEmail = formData.get("email") + ""
        const currentUsername = formData.get("username") + ""

        setUsernameErrorMessage("")
        setEmailErrorMessage("")

        if(!currentUsername){
            await delay(100)
            setUsernameErrorMessage("Invalid Username")
            readAriaNotification("Invalid Username")
            return
        }

        if(!isEmailValid(currentEmail)) {
            await delay(100)
            setEmailErrorMessage("Invalid Format")
            readAriaNotification("Invalid format on email")
            return
        }

        modals.confirmYourPassword?.open()
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
                        errorMessage={usernameErrorMessage}
                    />
                    <GenericTextInput
                        name="email"
                        label="E-mail"
                        defaultValue="gally@email.com"
                        errorMessage={emailErrorMessage}
                    />
                    <Button
                        children="Save Changes"
                        theme="border"
                        disabled={!formHasNewValue}
                    />
                </S.Form>
            </S.TopSection>
            <S.BottomSection>
                <Button
                    children="Change Password"
                    theme="border"
                    onClick={() => modals?.linkSendToEmail?.open()}
                />
                <Button
                    children="Logout"
                    theme="border"
                    disabled
                />
                <Button
                    children="Delete Account"
                    theme="border-red"
                    onClick={() => modals?.deleteAccountQuestion?.open()}
                />
            </S.BottomSection>
        </S.Component>
    )
}
