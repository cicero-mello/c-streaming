import React, { FC, createContext, useContext, useState } from "react"
import { AriaNotificationContextType } from "./types"
import { AriaNotification } from "./component"

const AriaNotificationContext = createContext<AriaNotificationContextType>({
    readAriaNotification: () => {},
    clearAriaNotification: () => {}
})

export const useAriaNotification = () => useContext(AriaNotificationContext)

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
            <AriaNotification aria-label={message} />
            {children}
        </AriaNotificationContext.Provider>
    )
}
