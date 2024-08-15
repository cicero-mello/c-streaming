import { HTMLAttributes } from "react"

export type BannerProps = Omit<
    HTMLAttributes<HTMLDivElement>, "className"
>
