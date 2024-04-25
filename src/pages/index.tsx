import React, { FunctionComponent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import * as Screens from "../screens"

const IndexPage: FunctionComponent<PageProps> = (props) => (
    <Screens.Home {...props}/>
)

export default IndexPage
export const Head: HeadFC = () => <title> C-Streaming </title>

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
