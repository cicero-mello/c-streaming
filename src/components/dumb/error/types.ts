import { HTMLAttributes } from "react"

export type ErrorCode = "400" | "404" | "500"

export interface ErrorProps extends Omit<
    HTMLAttributes<HTMLElement>, "className"
>{
    errorCode: ErrorCode
}
