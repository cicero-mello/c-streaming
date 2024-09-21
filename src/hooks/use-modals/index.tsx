import React, { FC, createContext, useContext, useEffect, useRef } from "react"
import { ModalsContextType } from "./types"
import { useForceUpdate } from "../use-force-update"
import { GenericModalHandle } from "./modals"
import * as M from "./modals"

const ModalsContext = createContext<ModalsContextType>({
    deleteAccountQuestion: null,
    deleteAccountConfirmation: null,
    linkSendToEmail: null,
    confirmYourPassword: null
})

export const useModals = () => useContext(ModalsContext)

export const ModalsProvider: FC<any> = ({
    children
}) => {
    const forceUpdate = useForceUpdate()
    const deleteAccountQuestionRef = useRef<GenericModalHandle>(null)
    const deleteAccountConfirmationRef = useRef<GenericModalHandle>(null)
    const linkSendToEmailRef = useRef<GenericModalHandle>(null)
    const confirmYourPasswordRef = useRef<GenericModalHandle>(null)

    useEffect(forceUpdate, [])

    return (
        <ModalsContext.Provider
            value={{
                deleteAccountQuestion: deleteAccountQuestionRef.current,
                deleteAccountConfirmation: deleteAccountConfirmationRef.current,
                linkSendToEmail: linkSendToEmailRef.current,
                confirmYourPassword: confirmYourPasswordRef.current
            }}
        >
            <M.DeleteAccountQuestion ref={deleteAccountQuestionRef} />
            <M.DeleteAccountConfirmation ref={deleteAccountConfirmationRef} />
            <M.LinkSendToEmail ref={linkSendToEmailRef} />
            <M.ConfirmYourPassword ref={confirmYourPasswordRef} />
            {children}
        </ModalsContext.Provider>
    )
}
