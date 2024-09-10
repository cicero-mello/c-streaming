import React, { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { BaseModalHandle } from "../base/types"
import { BaseModal } from "../base"
import { GenericTextInput } from "../../../../components/smart/generic-text-input"
import { useModals } from "../../.."
import { GenericModalHandle } from ".."

export const DeleteAccountConfirmation = forwardRef<
    GenericModalHandle
>((_, ref) => {
    const modals = useModals()
    const baseModalRef = useRef<BaseModalHandle>(null)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

    const open = () => {
        if(!baseModalRef.current) return
        baseModalRef.current.open(() => setPasswordErrorMessage(""))
    }

    useImperativeHandle(ref, () => ({
        open: open
    }))

    return (
        <BaseModal
            id="modal-dac"
            ref={baseModalRef}
            title="This is your last chance."
            texts={[
                "If you really want to delete your account, confirm your password."
            ]}
            buttons={[
                {
                    theme: "border",
                    children: "Cancel",
                    onClick: () => baseModalRef.current?.close()
                },
                {
                    children: "DELETE ACCOUNT",
                    theme: "border-danger",
                    onClick: () => setPasswordErrorMessage("Wrong password")
                }
            ]}
        >
            <GenericTextInput
                label="Password"
                type="password"
                errorMessage={passwordErrorMessage}
                forgetPasswordAction={() => {
                    setTimeout(() => baseModalRef.current?.close(), 180)
                    modals?.linkSendToEmail?.open()
                }}
            />
        </BaseModal>
    )
})
