import { ButtonHTMLAttributes } from "react"
import { PATHS } from "../../../paths"
import { UrlState } from "../../../hooks"

export interface SeeAllButtonProps extends Omit<
    ButtonHTMLAttributes<HTMLAnchorElement>, "className"
>{
    url?: {
        path: PATHS,
        params?: UrlState
    }
}
