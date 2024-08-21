import { PATHS } from "../../paths"
import { UrlState } from "../use-url-state/types"

export interface NavigationContextProps {
    navigate: (
        path: PATHS, params?: UrlState
    ) => void | Promise<void>
}
