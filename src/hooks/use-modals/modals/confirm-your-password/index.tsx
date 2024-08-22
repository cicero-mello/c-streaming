import React, { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { BaseModalHandle } from "../base/types"
import { BaseModal } from "../base"
import { GenericTextInput } from "../../../../components/dumb/generic-text-input"
import { useModals } from "../../.."
import { GenericModalHandle } from ".."

export const ConfirmYourPassword = forwardRef<
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
