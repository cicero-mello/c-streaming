import React, {
    FunctionComponent, createContext, useContext, useEffect, useRef
} from "react"
import { NavigationContextProps } from "./types"
import { navigate } from "gatsby"
import { URLParams } from "../../shared/types"
import { PageTransition } from "../../components"

const NavigationContext = createContext<NavigationContextProps>({
    navigate: () => {},
    getUrlParams: () => ({}),
    showScreen: () => undefined
})

export const useNavigation = () => useContext(NavigationContext)

export const NavigationProvider: FunctionComponent<any> = ({
    children
}) => {
    const transitionRef = useRef<HTMLDivElement>(null)

    const customNavigate = (path: string) => {
        setTimeout(() => { navigate(path) }, 50)

        if(!transitionRef.current) return
        transitionRef.current.style.opacity = "100%"
        transitionRef.current.style.pointerEvents = "unset"
    }

    const showScreen = () => {
        if(!transitionRef.current) return
        transitionRef.current.style.opacity = "0%"
        transitionRef.current.style.pointerEvents = "none"
    }

    useEffect(() => {
        setTimeout(() => {
            if(!transitionRef.current) return
            transitionRef.current.style.transition = "100ms linear"
        }, 400)
    }, [])

    const getUrlParams = (): URLParams => {
        return Object.fromEntries(new URLSearchParams(window.location.search))
    }

    return (
        <NavigationContext.Provider
            value={{
                navigate: customNavigate,
                getUrlParams: getUrlParams,
                showScreen: showScreen
            }}
        >
            <PageTransition ref={transitionRef} />
            {children}
        </NavigationContext.Provider>
    )
}
