import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { BaseModalHandle } from "../base/types"
import { GenericModalHandle } from ".."
import { BaseModal } from "../base"
import { useModals } from "@hooks"

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
                    children: "Cancel",
                    theme: "border",
                    onClick: () => baseModalRef.current?.close()
                },
                {
                    children: "DELETE ACCOUNT",
                    theme: "border-danger",
                    onClick: () => {
                        setTimeout(() => baseModalRef.current?.close(), 180)
                        modals?.deleteAccountConfirmation?.open()
                    }
                }
            ]}
        />
    )
})
