import { RefObject, useCallback, useEffect } from "react"

export const useOutsideEnter = (
    ref: RefObject<any>,
    callback: () => void,
    disabled?: boolean
) => {
    const onEnterOutside = useCallback((event: KeyboardEvent) => {
        if(!ref?.current) return
        if(
            !ref.current.contains(event.target)
            && !disabled
            && (event.key === "Enter" || event.key === " ")
        ) callback()
    }, [ref, callback])

    useEffect(() => {
        document.addEventListener('keydown', onEnterOutside)

        return () => (
            document.removeEventListener('keydown', onEnterOutside)
        )
    }, [ref, callback])
}
