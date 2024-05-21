import React, { FunctionComponent } from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import * as Screens from "../screens"

const MoviePage: FunctionComponent<PageProps> = (props) => (
    <Screens.Movie {...props} />
)

export default MoviePage
export const Head: HeadFC = () => <title>C-Streaming: Movie</title>

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
                            # height: 675
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
