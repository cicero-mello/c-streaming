import { HTMLAttributes } from "react"
import { PATHS } from "../../../paths"
import { UrlState } from "../../../hooks"

export type ButtonThemes = (
    "border" | "border-red" | "border-danger" | "border-green" |
    "classic" |
    "clean"
)

export interface ButtonProps extends Omit<
    HTMLAttributes<HTMLElement>,
    "className"
>{
    theme: ButtonThemes
    url?: {
        path: PATHS,
        params?: UrlState
    }
    disabled?: boolean
}
