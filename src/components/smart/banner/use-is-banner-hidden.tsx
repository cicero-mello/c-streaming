import { useLayoutEffect, useState } from "react"
import { WINDOW_WIDTH_TO_CLOSE_BANNER } from "./styles"

export const useIsBannerHidden = () => {
    const [isBannerHidden, setIsBannerHidden] = useState(
        window.innerWidth <= WINDOW_WIDTH_TO_CLOSE_BANNER
    )

    useLayoutEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= WINDOW_WIDTH_TO_CLOSE_BANNER){
                setIsBannerHidden(true)
            } else setIsBannerHidden(false)
        }

        window.addEventListener('resize', handleResize)
        return () => (
            window.removeEventListener('resize', handleResize)
        )
    }, [])

    return isBannerHidden
}
