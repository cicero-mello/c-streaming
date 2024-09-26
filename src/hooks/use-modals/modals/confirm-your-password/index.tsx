import React, { FormEvent, forwardRef, useImperativeHandle, useRef, useState } from "react"
import { BaseModalHandle } from "../base/types"
import { BaseModal } from "../base"
import { AriaNotification, GenericTextInput } from "../../../../components"
import { useModals } from "../../.."
import { GenericModalHandle } from ".."
import { delay } from "../../../../shared/utils"
import * as S from "./styles"

export const ConfirmYourPassword = forwardRef<
    GenericModalHandle
>((_, ref) => {
    const modals = useModals()
    const baseModalRef = useRef<BaseModalHandle>(null)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

    useImperativeHandle(ref, () => ({
        open: open
    }))

    const open = () => {
        if(!baseModalRef.current) return
        setPasswordErrorMessage("")
        baseModalRef.current.open()
    }

    const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
        if(event) event.preventDefault()
        setPasswordErrorMessage("")
        await delay(100)
        setPasswordErrorMessage("Wrong password")
    }

    return (
        <BaseModal
            id="modal-cyp"
            ref={baseModalRef}
            texts={[
                "Please, confirm your password to save the changes"
            ]}
            buttons={[
                {
                    children: "Cancel",
                    theme: "border",
                    onClick: () => baseModalRef.current?.close()
                },
                {
                    children: "Save Changes",
                    theme: "border-green",
                    onClick: () => handleSubmit()
                }
            ]}
        >
            <S.Form onSubmit={handleSubmit}>
                <GenericTextInput
                    label="Password"
                    type="password"
                    errorMessage={passwordErrorMessage}
                    forgetPasswordAction={() => {
                        setTimeout(() => baseModalRef.current?.close(), 180)
                        modals?.linkSendToEmail?.open()
                    }}
                />
            </S.Form>
            <AriaNotification message={passwordErrorMessage} />
        </BaseModal>
    )
})
