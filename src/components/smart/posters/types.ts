import { HTMLAttributes } from "react"
import { MediaType } from "../../../stores"

export interface PostersProps extends Omit<
    HTMLAttributes<HTMLDivElement>, "className"
> {
    mediaType: MediaType
}
