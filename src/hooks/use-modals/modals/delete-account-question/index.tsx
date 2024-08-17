import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { BaseModalHandle } from "../base/types"
import { BaseModal } from "../base"
import { useModals } from "../../.."
import { GenericModalHandle } from ".."

export const DeleteAccountQuestion = forwardRef<
    GenericModalHandle
>((_, ref) => {
    const modals = useModals()
    const baseModalRef = useRef<BaseModalHandle>(null)

    const open = () => {
        if(!baseModalRef.current) return
        baseModalRef.current.open()
    }

    useImperativeHandle(ref, () => ({
        open: open
    }))

    return (
        <BaseModal
            id="modal-aq"
            ref={baseModalRef}
            title="Are you sure about that?"
            texts={[
                "After delete your account, you will never get it back."
            ]}
            buttons={[
                {
                    $text: "Cancel",
                    onClick: () => baseModalRef.current?.close()
                },
                {
                    $text: "DELETE ACCOUNT",
                    $theme: "danger",
                    onClick: () => {
                        setTimeout(() => baseModalRef.current?.close(), 180)
                        modals?.deleteAccountConfirmation?.open()
                    }
                }
            ]}
        />
    )
})
