import { HTMLAttributes } from "react"

export type UseMenuProps = Omit<
    HTMLAttributes<HTMLDivElement>,
    "className" | "ref"
>
