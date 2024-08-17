import { URLParams } from "../../shared/types"

export interface NavigationContextProps {
    navigate: (path: string, params?: URLParams) => void | Promise<void>,
}
