import React, { FunctionComponent } from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import * as Screens from "../screens"

const SeriesPage: FunctionComponent<PageProps> = (props) => (
    <Screens.Series {...props} />
)

export default SeriesPage
export const Head: HeadFC = () => <title>C-Streaming: Serie/Anime</title>

export const pageQuery = graphql`
    query GatsbyImagesDataQuery {
        banner: allFile(filter: {
            extension: {regex: "/(jpg)|(jpeg)|(png)/"},
            sourceInstanceName: {eq: "banner-images"}
        }) {
            edges {
                node {
                    id
                    name
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [WEBP]
                            layout: CONSTRAINED
                        )
                    }
                }
            }
        }
    }
`
