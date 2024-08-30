import { useEffect, useRef, EffectCallback, DependencyList } from "react"

export const useDidMountEffect = (
    func: EffectCallback,
    deps?: DependencyList | undefined
) => {
    const didMount = useRef(false)

    useEffect(() => {
        let unmount
        if (didMount.current) unmount = func()
        else didMount.current = true

        return unmount
    }, deps)
}
