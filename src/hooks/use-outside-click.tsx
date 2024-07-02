import { RefObject, useEffect } from "react"

export const useOutsideClick = (
    ref: RefObject<any>,
    callback: () => void,
    disabled?: boolean
) => {
    const onClickOutside = (event: MouseEvent) => {
        if(!ref?.current) return
        if(!ref.current.contains(event.target) && !disabled) callback()
    }

    useEffect(() => {
        document.addEventListener('mousedown', onClickOutside)

        return () => (
            document.removeEventListener('mousedown', onClickOutside)
        )
    }, [ref, callback])
}
