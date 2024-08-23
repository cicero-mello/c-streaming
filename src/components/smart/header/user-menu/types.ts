import { ButtonHTMLAttributes } from "react";

export type UseMenuProps = Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className" | "ref"
>
