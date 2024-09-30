import React, {
    FC, createContext, useContext,
    useEffect, useLayoutEffect, useState
} from "react"
import { UseAriaNotification } from "./types"
import { AriaNotification } from "../../components"
import { debounce } from "../../shared/utils"

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
