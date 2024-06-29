import { useCallback, useState } from "react"

export const useForceUpdate = () => {
  const [, setState] = useState(true)
  const forceUpdate = useCallback(() => {
    setState(old => !old)
  }, [])

  return forceUpdate
}
