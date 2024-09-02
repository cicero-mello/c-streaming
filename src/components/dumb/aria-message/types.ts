import { HTMLAttributes } from "react";

export interface AriaMessageProps extends Omit<
    HTMLAttributes<HTMLSpanElement>,
    "className" | "aria-label"
>{
    "aria-label": string
}
