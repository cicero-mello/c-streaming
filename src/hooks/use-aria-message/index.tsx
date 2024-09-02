import React, { FC, createContext, useContext, useState } from "react"
import { AriaMessageProps } from "./types"
import { AriaMessage } from "../../components"

const AriaMessageContext = createContext<AriaMessageProps>({
    ariaReadMessage: () => {},
    removeAriaReader: () => {}
})

export const useAriaMessage = () => useContext(AriaMessageContext)

export const AriaMessageProvider: FC<any> = ({
    children
}) => {
    const [message, setMessage] = useState("")

    const ariaReadMessage = (message: string) => {
        setMessage(message)
    }

    const removeAriaReader = () => {
        setMessage("")
    }

    return (
        <AriaMessageContext.Provider
            value={{
                ariaReadMessage: ariaReadMessage,
                removeAriaReader: removeAriaReader
            }}
        >
            {message && <AriaMessage aria-label={message} />}
            {children}
        </AriaMessageContext.Provider>
    )
}
