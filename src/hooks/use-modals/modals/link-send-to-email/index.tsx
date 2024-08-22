import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { BaseModalHandle } from "../base/types"
import { BaseModal } from "../base"
import { GenericModalHandle } from ".."

export const LinkSendToEmail = forwardRef<
    GenericModalHandle
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
            id="modal-lste"
            ref={baseModalRef}
            title="A link was send to your email"
            texts={[
                "Use that link to change your password.",
                "This is just to confirm your identity"
            ]}
            buttons={[
                {
                    children: "OK",
                    theme: "border-green",
                    onClick: () => baseModalRef.current?.close()
                }
            ]}
        />
    )
})
