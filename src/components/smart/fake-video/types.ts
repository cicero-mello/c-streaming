import { IGatsbyImageData } from "gatsby-plugin-image"
import { HTMLAttributes } from "react"

export interface FakeVideoProps extends Omit<
    HTMLAttributes<HTMLDivElement>, "className"
>{
    thumbImage: IGatsbyImageData,
    videoName: string
}
