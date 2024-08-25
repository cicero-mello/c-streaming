import React, { FunctionComponent, useLayoutEffect } from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { useMediaStore } from "../stores"
import { Error } from "../components"
import * as S from "../screens"

const SearchPage: FunctionComponent<PageProps> = (props) => {
    const { updateMedias, medias } = useMediaStore()

    useLayoutEffect(() => {
        updateMedias(props.data)
    }, [updateMedias])

    if(!medias[0].posterImage) return <Error errorCode="500"/>

    return <S.Search />
}

export default SearchPage
export const Head: HeadFC = () => <title> Search Page </title>

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
