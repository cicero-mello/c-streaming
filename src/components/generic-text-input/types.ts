import { InputHTMLAttributes } from "react";

export interface GenericTextInputProps extends Omit<
    InputHTMLAttributes<HTMLInputElement>, "className" | "children"
> {
    label?: string
    errorMessage?: string
}
