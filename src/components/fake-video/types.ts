import { IGatsbyImageData } from "gatsby-plugin-image"

export interface FakeVideoProps {
    thumbImage: IGatsbyImageData
    imageName: string
    onClickWatch?: () => void
}
