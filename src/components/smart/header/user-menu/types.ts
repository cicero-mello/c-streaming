import { HTMLAttributes } from "react"

export interface UserMenuProps extends
Omit<HTMLAttributes<HTMLDivElement>, "children" | "ref"> {
    disabled?: boolean
}
