import { ButtonHTMLAttributes } from "react"

export interface SeeAllButtonProps extends
Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">{
    text: string
}
