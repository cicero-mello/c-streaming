import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { DeleteAccountQuestionHandle } from "./types"
import { BaseModalHandle } from "../base/types"
import { BaseModal } from "../base"
import { DeleteAccountConfirmation } from "../delete-account-confirmation"

export const DeleteAccountQuestion = forwardRef<
    DeleteAccountQuestionHandle
>((_, ref) => {
    const baseModalRef = useRef<BaseModalHandle>(null)
    const deleteAccountConfirmationModalRef = useRef<
        DeleteAccountQuestionHandle
    >(null)

    const open = () => {
        if(!baseModalRef.current) return
        baseModalRef.current.open()
    }

    useImperativeHandle(ref, () => ({
        open: open
    }))

    return (
        <>
            <BaseModal
                ref={baseModalRef}
                title="Are you sure about that?"
                text="After delete your account, you will never get it back."
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
                            deleteAccountConfirmationModalRef.current?.open()
                        }
                    }
                ]}
            />
            <DeleteAccountConfirmation
                ref={deleteAccountConfirmationModalRef}
            />
        </>
    )
})
