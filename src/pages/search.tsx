import React, { FunctionComponent } from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import * as Screens from "../screens"

const SearchPage: FunctionComponent<PageProps> = (props) => (
    <Screens.Search {...props} />
)

export default SearchPage
export const Head: HeadFC = () => <title>C-Streaming: Searching...</title>

export const pageQuery = graphql`
    query GatsbyImagesDataQuery {
        poster: allFile(filter: {
            extension: {regex: "/(jpg)|(jpeg)|(png)/"},
            sourceInstanceName: {eq: "poster-images"}
        }) {
            edges {
                node {
                    id
                    name
                    childImageSharp {
                        gatsbyImageData(
                            width: 600
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
