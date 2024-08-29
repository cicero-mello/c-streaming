import { RefObject, useCallback, useEffect, useState } from "react"
import { FocusOrigin } from "./types"

export const useFocusOrigin = (
    targetRefElement: RefObject<any>
): FocusOrigin => {
    const [focusOrigin, setFocusOrigin] = useState<FocusOrigin>()
    let lastUserAction: FocusOrigin

    const onMouseDownElement = useCallback((event: MouseEvent) => {
        if(!targetRefElement?.current) return
        if(!!targetRefElement.current.contains(event.target)) {
            lastUserAction = "click"
        }
    }, [targetRefElement])

    const onKeyDownDocument = useCallback((event: KeyboardEvent) => {
        if(event.code === "Tab") lastUserAction = "tab"
    }, [targetRefElement])

    const onFocusElement = useCallback(() => {
        setFocusOrigin(lastUserAction)
    }, [setFocusOrigin, lastUserAction])

    useEffect(() => {
        document.addEventListener("keydown", onKeyDownDocument)
        document.addEventListener("mousedown", onMouseDownElement)
        if(targetRefElement.current){
            targetRefElement.current.addEventListener(
                "focus", onFocusElement
            )
        }

        return () => {
            document.removeEventListener("keydown", onKeyDownDocument)
            document.removeEventListener("mousedown", onMouseDownElement)
            if(targetRefElement.current){
                targetRefElement.current.removeEventListener(
                    "focus", onFocusElement
                )
            }
        }
    }, [onKeyDownDocument, onMouseDownElement, onFocusElement])

    return focusOrigin
}
