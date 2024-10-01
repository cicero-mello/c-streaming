import { PATHS } from "@paths"
import { UrlState } from "@hooks"

export interface NavigationContextType {
    navigate: (
        path: PATHS, params?: UrlState
    ) => void | Promise<void>
}
