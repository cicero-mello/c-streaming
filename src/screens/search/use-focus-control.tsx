import { useLayoutEffect, useState } from "react"
import { WINDOW_MAX_WIDTH_TO_VERTICAL_LAYOUT } from "./styles"

export const useFocusControl = (): {isToFocusSelectFirst: boolean} => {
    const [
        isToFocusSelectFirst,
        setIsToFocusSelectFirst
    ] = useState(window.innerWidth < WINDOW_MAX_WIDTH_TO_VERTICAL_LAYOUT)

    useLayoutEffect(() => {
        const onWindowResize = () => {
            if(window.innerWidth < WINDOW_MAX_WIDTH_TO_VERTICAL_LAYOUT){
                setIsToFocusSelectFirst(true)
            } else setIsToFocusSelectFirst(false)
        }

        window.addEventListener("resize", onWindowResize)
        return () => {
            window.removeEventListener("resize", onWindowResize)
        }
    }, [])

    return {
        isToFocusSelectFirst: isToFocusSelectFirst
    }
}
