import { SelectHTMLAttributes } from "react"

export interface SelectOption {
    value: string
    text: string
}

export interface SelectInputProps extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "children" | "options" | "className"
>{
    options: SelectOption[]
    label?: string
}
