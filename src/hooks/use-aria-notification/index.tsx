import React, { FC, createContext, useContext, useEffect, useLayoutEffect, useState } from "react"
import { AriaNotification } from "@components"
import { UseAriaNotification } from "./types"
import { debounce } from "@utils"

const AriaNotificationContext = createContext<UseAriaNotification>({
    readAriaNotification: () => {},
    clearAriaNotification: () => {}
})

/**
 * Returns a object with
 * a function to trigger the read of screen readers.
 *
 * When you call this function:
 *
 * 1 - A hidden tag will be created and rendered, with aria-live:polite
 *
 * 2 - The message passed in the function will be inserted in aria-label
 *
 * 3 - The screen reader will read the message
 *
 * 4 - After some user action, or some time, the hidden tag will be removed from HTML
 *
 * @function
 */
export const useAriaNotification = () => {
    const context = useContext(AriaNotificationContext)

    useLayoutEffect(() => context.clearAriaNotification, [])

    return context
}

export const AriaNotificationProvider: FC<any> = ({
    children
}) => {
    const [render, setRender] = useState("")
    const [message, setMessage] = useState("")

    const clearAriaNotification = () => {
        setMessage("")
        setRender("")
    }

    const readAriaNotification = (
        message: string,
        timeToRead?: number
    ) => {
        setRender(message)

        document.addEventListener(
            "focusout",
            clearAriaNotification,
            { once: true }
        )

        debounce(
            clearAriaNotification,
            timeToRead ?? 2000,
            "aria-notification"
        )
    }

    useEffect(() => {
        if(!render) return
        setTimeout(() => setMessage(render), 300)
    }, [render])

    return (
        <AriaNotificationContext.Provider
            value={{
                readAriaNotification: readAriaNotification,
                clearAriaNotification: clearAriaNotification
            }}
        >
            {render && <AriaNotification message={message}/>}
            {children}
        </AriaNotificationContext.Provider>
    )
}
