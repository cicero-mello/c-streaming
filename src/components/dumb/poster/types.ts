import { IGatsbyImageData } from "gatsby-plugin-image"
import { HTMLAttributes } from "react"

export interface PosterProps extends Omit<
    HTMLAttributes<HTMLDivElement>, "className"
>{
    name: string
    image: IGatsbyImageData
    linkPath: string
    onClick: () => void | Promise <void>
}
