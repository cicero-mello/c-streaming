import React, {
    FunctionComponent, createContext,
    useContext, useEffect, useRef,
    useState
} from "react"
import { NavigationContextProps } from "./types"
import { objectToQueryString } from "../../shared/utils"
import { URLParams, URLParamsAllString } from "../../shared/types"
import { navigate } from "gatsby"
import { Header } from "../../components"
import { PageTransition } from "./styles"
import { PATHS } from "../../paths"

const NavigationContext = createContext<NavigationContextProps>({
    navigate: () => {},
    getUrlParams: () => ({}),
    showScreen: () => undefined
})

export const useNavigation = () => useContext(NavigationContext)

export const NavigationProvider: FunctionComponent<any> = ({
    children, path
}) => {
    const transitionRef = useRef<HTMLDivElement>(null)
    const [randomChildrenKey, setRandomChildrenKey] = useState(0)

    const reloadChildrenElements = () => {
        if(!!randomChildrenKey) setRandomChildrenKey(0)
        else setRandomChildrenKey(1)
    }

    const customNavigate = (path: string, params?: URLParams) => {
        if(!transitionRef.current) return
        transitionRef.current.style.opacity = "0%"
        transitionRef.current.style.pointerEvents = "none"

        setTimeout(() => {
            if(!params) {
                navigate(path)
                return
            }
            const newScreenIsSameThanOld = window.location.pathname.includes(path)
            if(newScreenIsSameThanOld) setTimeout(() => reloadChildrenElements(), 50)
            navigate(path + objectToQueryString(params))
        }, 180)
    }

    const showScreen = () => {
        if(!transitionRef.current) return
        transitionRef.current.style.opacity = "100%"
        transitionRef.current.style.pointerEvents = "unset"
    }

    useEffect(() => {
        setTimeout(() => {
            if(!transitionRef.current) return
            transitionRef.current.style.transition = "180ms linear"
        }, 400)
    }, [])

    const getUrlParams = (): URLParams => {
        let season: number | undefined
        let ep: number | undefined
        const URLObject: URLParamsAllString = Object.fromEntries(
            new URLSearchParams(window.location.search)
        )

        if(URLObject?.season) season = parseInt(URLObject?.season)
        if(URLObject?.ep) ep = parseInt(URLObject.ep)

        return {
            id: URLObject.id,
            season: season,
            ep: ep
        }
    }

    return (
        <NavigationContext.Provider
            value={{
                navigate: customNavigate,
                getUrlParams: getUrlParams,
                showScreen: showScreen
            }}
        >
            <Header path={path as PATHS}/>
            <PageTransition ref={transitionRef}>
                <div key={"ck-" + randomChildrenKey}>
                    {children}
                </div>
            </PageTransition>
        </NavigationContext.Provider>
    )
}
