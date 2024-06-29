import React, { FC, createContext, useContext, useEffect, useRef, useState } from "react"
import { ModalsContextProps } from "./types"
import {
    DeleteAccountQuestion,
    DeleteAccountQuestionHandle
} from "../../components/modals"
import { useForceUpdate } from "../use-force-update"

const ModalsContext = createContext<ModalsContextProps | undefined>(undefined)

export const useModals = () => useContext(ModalsContext)

export const ModalsProvider: FC<any> = ({
    children
}) => {
    const forceUpdate = useForceUpdate()
    const deleteAccountQuestionRef = useRef<DeleteAccountQuestionHandle>(null)

    useEffect(forceUpdate, [])

    return (
        <ModalsContext.Provider
            value={{
                deleteAccountQuestion: deleteAccountQuestionRef.current
            }}
        >
            <DeleteAccountQuestion ref={deleteAccountQuestionRef} />
            {children}
        </ModalsContext.Provider>
    )
}
