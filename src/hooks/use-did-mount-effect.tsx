import { useEffect, useRef, EffectCallback, DependencyList } from "react"

export const useDidMountEffect = (
    func: EffectCallback,
    deps?: DependencyList | undefined
) => {
    const didMount = useRef(false)

    useEffect(() => {
        if (didMount.current) func()
        else didMount.current = true
    }, deps)
}
