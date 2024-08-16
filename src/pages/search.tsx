import React, { FunctionComponent, useLayoutEffect } from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { useMediaStore } from "../stores"
import * as S from "../screens"

const SearchPage: FunctionComponent<PageProps> = (props) => {
    const updateMedias = useMediaStore((state) => state.updateMedias)

    useLayoutEffect(() => {
        updateMedias(props.data)
    }, [updateMedias])

    return <S.Search />
}

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
