import React, { FC } from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { useMediaStore } from "../stores"
import * as S from "../screens"

const MoviePage: FC<PageProps> = (props) => {
    const updateMedias = useMediaStore((state) => state.updateMedias)
    updateMedias(props.data)

    return <S.Movie />
}

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
