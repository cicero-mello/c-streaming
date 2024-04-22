import { PageProps } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

export interface HomeProps extends Omit<PageProps, "data">{
    data: any
}

export interface QueryGatsbyImages {
    id: string
    name: string
    childImageSharp: {
        gatsbyImageData: IGatsbyImageData | undefined
    }
}
