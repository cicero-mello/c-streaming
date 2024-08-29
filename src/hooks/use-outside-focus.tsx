import { RefObject, useCallback, useEffect } from "react"

export const useOutsideFocus = (
    targetRefElement: RefObject<any>,
    onOutsideFocus: () => void,
    disabled?: boolean
) => {

    const handleFocusIn = useCallback((e: Event) => {
        if(
            targetRefElement.current &&
            !targetRefElement.current.contains(e.target) &&
            !disabled
        ){
            onOutsideFocus()
        }
    }, [targetRefElement, disabled, onOutsideFocus])

    useEffect(() => {
        document.addEventListener("focusin", handleFocusIn)

        return () => {
            document.removeEventListener("focusin", handleFocusIn)
        }
    }, [handleFocusIn])
}
