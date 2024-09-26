import React, { FC, createContext, useContext, useLayoutEffect, useState } from "react"
import { UseAriaNotification } from "./types"
import { AriaNotification } from "../../components"

const AriaNotificationContext = createContext<UseAriaNotification>({
    readAriaNotification: () => {},
    clearAriaNotification: () => {}
})

export const useAriaNotification = () => {
    const context = useContext(AriaNotificationContext)

    useLayoutEffect(() => context.clearAriaNotification, [])

    return context
}

export const AriaNotificationProvider: FC<any> = ({
    children
}) => {
    const [message, setMessage] = useState("")

    const readAriaNotification = (message: string) => {
        setMessage(message)
    }

    const clearAriaNotification = () => {
        setMessage("")
    }

    return (
        <AriaNotificationContext.Provider
            value={{
                readAriaNotification: readAriaNotification,
                clearAriaNotification: clearAriaNotification
            }}
        >
            <AriaNotification message={message}/>
            {children}
        </AriaNotificationContext.Provider>
    )
}
