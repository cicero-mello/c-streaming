import { ButtonHTMLAttributes } from "react"

export type HeaderButtonProps = Omit<
    ButtonHTMLAttributes<HTMLButtonElement>, "children"
>
