import React, { FunctionComponent } from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import * as Screens from "../screens"

const WatchLaterPage: FunctionComponent<PageProps> = (props) => (
    <Screens.WatchLater {...props} />
)

export default WatchLaterPage
export const Head: HeadFC = () => <title>C-Streaming: Watch Later</title>

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
                            # width: 300
                        )
                    }
                }
            }
        }
    }
`
