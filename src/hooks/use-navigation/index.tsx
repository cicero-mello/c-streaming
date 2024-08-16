import React, {
    FunctionComponent, createContext,
    useContext, useEffect, useRef,
    useState
} from "react"
import { NavigationContextProps } from "./types"
import { objectToQueryString, scrollPageToTop } from "../../shared/utils"
import {  URLParams } from "../../shared/types"
import { navigate } from "gatsby"
import {  Header, PageLoader } from "../../components"
import * as S from "./styles"

const NavigationContext = createContext<NavigationContextProps>({
    navigate: () => {}
})

export const useNavigation = () => useContext(NavigationContext)

export const NavigationProvider: FunctionComponent<any> = ({
    children
}) => {
    const transitionRef = useRef<HTMLDivElement>(null)
    const [randomChildrenKey, setRandomChildrenKey] = useState(0)
    const [showLoader, setShowLoader] = useState(false)
    const [timerId, setTimerId] = useState<NodeJS.Timeout>()

    const reloadChildrenElements = () => {
        if(!!randomChildrenKey) setRandomChildrenKey(0)
        else setRandomChildrenKey(1)
    }

    const prepareLoader = () => {
        const newTimerId = setTimeout(() => {
            setShowLoader(true)
        }, 1500)

        setTimerId(newTimerId)
    }

    const cancelLoader = () => {
        if(!timerId) return
        clearTimeout(timerId)
        setShowLoader(false)
        setTimerId(undefined)
    }

    const customNavigate = (path: string, params?: URLParams) => {
        if(!transitionRef.current) return
        transitionRef.current.style.opacity = "0%"
        transitionRef.current.style.pointerEvents = "none"
        setTimeout(async () => {
            await scrollPageToTop()
            if(path.includes(window.location.pathname)){
                reloadChildrenElements()
            }
            prepareLoader()
            if(!params) {
                navigate(path)
                return
            }
            navigate(path + objectToQueryString(params))
        }, 180)
    }

    const showScreen = () => {
        if(!transitionRef.current) return
        transitionRef.current.style.opacity = "100%"
        transitionRef.current.style.pointerEvents = "unset"
    }

    useEffect(() => {
        cancelLoader()
        setTimeout(() => showScreen(), 20)
    }, [children])

    useEffect(() => {
        setTimeout(() => {
            if(!transitionRef.current) return
            transitionRef.current.style.transition = "180ms linear"
        }, 400)
    }, [])

    return (
        <NavigationContext.Provider
            value={{
                navigate: customNavigate
            }}
        >
            <Header />
            <PageLoader show={showLoader}/>
            <S.PageTransition ref={transitionRef}>
                <div key={"ck-" + randomChildrenKey}>
                    {children}
                </div>
            </S.PageTransition>
        </NavigationContext.Provider>
    )
}
