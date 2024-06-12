import React, {
    FunctionComponent, createContext,
    useContext, useEffect, useRef,
    useState
} from "react"
import { NavigationContextProps } from "./types"
import { objectToQueryString, scrollPageToTop } from "../../shared/utils"
import { MediaType, URLParams, URLParamsAllString } from "../../shared/types"
import { navigate } from "gatsby"
import { Header, PageLoader } from "../../components"
import { PageTransition } from "./styles"
import { PATHS } from "../../paths"

const NavigationContext = createContext<NavigationContextProps>({
    navigate: () => {},
    getUrlParams: () => ({})
})

export const useNavigation = () => useContext(NavigationContext)

export const NavigationProvider: FunctionComponent<any> = ({
    children, path
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
        }, 2000)

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

        setTimeout(() => {
            reloadChildrenElements()
            scrollPageToTop()
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

    const getUrlParams = (): URLParams => {
        const isBrowser = typeof window !== "undefined"
        if(!isBrowser) return {}

        const URLObject: URLParamsAllString = Object.fromEntries(
            new URLSearchParams(window.location.search)
        )

        return {
            id: URLObject.id,
            season: URLObject?.season ? parseInt(URLObject.season) : undefined,
            ep: URLObject?.ep ? parseInt(URLObject.ep) : undefined,
            searchText: URLObject.searchText,
            searchType: URLObject.searchType as MediaType
        }
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
                navigate: customNavigate,
                getUrlParams: getUrlParams
            }}
        >
            <Header path={path as PATHS}/>
            <PageLoader show={showLoader}/>
            <PageTransition ref={transitionRef}>
                <div key={"ck-" + randomChildrenKey}>
                    {children}
                </div>
            </PageTransition>
        </NavigationContext.Provider>
    )
}
