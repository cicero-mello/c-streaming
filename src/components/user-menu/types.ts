import { HTMLAttributes } from "react"

export interface UserMenuProps extends
Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    teste?: string
}
