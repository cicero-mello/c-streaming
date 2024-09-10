import { HTMLAttributes } from "react"
import { PATHS } from "../../../paths"
import { UrlState } from "../../../hooks"

export type ButtonThemes = (
    "border" | "border-red" | "border-danger" |
    "border-green" | "border-logo" | "classic" |
    "menu-item" | "none"
)

export interface ButtonProps extends Omit<
    HTMLAttributes<HTMLElement>,
    "className" | "onContextMenu" | "onKeyDown" | "ref"
>{
    theme: ButtonThemes
    keepFocusPositionWhenDisabled?: boolean
    disabled?: boolean
    url?: {
        path: PATHS,
        params?: UrlState
    }
}
