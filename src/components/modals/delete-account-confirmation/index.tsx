import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { DeleteAccountConfirmationHandle } from "./types"
import { BaseModalHandle } from "../base/types"
import { BaseModal } from "../base"

export const DeleteAccountConfirmation = forwardRef<
    DeleteAccountConfirmationHandle
>((_, ref) => {
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
                ref={baseModalRef}
                title="This is your last chance."
                text="If you really want to delete your account, confirm your password."
                buttons={[
                    {
                        $text: "Cancel",
                        onClick: () => baseModalRef.current?.close()
                    },
                    {
                        $text: "DELETE ACCOUNT",
                        $theme: "danger"
                    }
                ]}
            >
            </BaseModal>
    )
})
