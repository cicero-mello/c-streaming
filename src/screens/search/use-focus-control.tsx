import { useLayoutEffect, useState } from "react"
import { WINDOW_MAX_WIDTH_TO_VERTICAL_LAYOUT } from "./styles"
import { FocusControl } from "./types"

export const useFocusControl = (): FocusControl => {
    const [
        isToFocusSelectBeforeInput,
        setIsToFocusSelectBeforeInput
    ] = useState(window.innerWidth < WINDOW_MAX_WIDTH_TO_VERTICAL_LAYOUT)

    useLayoutEffect(() => {
        const onWindowResize = () => {
            if(window.innerWidth < WINDOW_MAX_WIDTH_TO_VERTICAL_LAYOUT){
                setIsToFocusSelectBeforeInput(true)
            } else setIsToFocusSelectBeforeInput(false)
        }

        window.addEventListener("resize", onWindowResize)
        return () => {
            window.removeEventListener("resize", onWindowResize)
        }
    }, [])

    return {
        isToFocusSelectBeforeInput: isToFocusSelectBeforeInput
    }
}
