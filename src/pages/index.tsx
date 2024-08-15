import React, { FC } from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import { useMediaStore } from "../stores"
import * as S from "../screens"

const IndexPage: FC<PageProps> = (props) => {
    const updateMedias = useMediaStore((state) => state.updateMedias)
    updateMedias(props.data)

    return <S.Home />
}

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
