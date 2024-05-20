import { URLParams } from "../../shared/types"

export interface NavigationContextProps {
    navigate: (path: string) => void | Promise<void>,
    getUrlParams: () => URLParams,
    showScreen: () => void
}
