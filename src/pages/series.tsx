import React, { FC, useLayoutEffect } from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { useMediaStore } from "../stores"
import * as S from "../screens"

const SeriesPage: FC<PageProps> = (props) => {
    const updateMedias = useMediaStore((state) => state.updateMedias)

    useLayoutEffect(() => {
        updateMedias(props.data)
    }, [updateMedias])

    return <S.Series />
}

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
