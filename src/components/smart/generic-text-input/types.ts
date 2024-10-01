import { InputHTMLAttributes } from "react"

export interface GenericTextInputProps extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "className" | "children" | "ref"
> {
    label?: string
    errorMessage?: string
    forgetPasswordAction?: () => void
}
