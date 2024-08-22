import { HTMLAttributes } from "react"

export interface UserMenuProps extends
Omit<HTMLAttributes<HTMLButtonElement>, "children" | "ref"> {
    disabled?: boolean
}
