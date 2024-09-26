import React, { FC, useLayoutEffect } from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { Error } from "../components"
import { useMediaStore } from "../stores"
import * as S from "../screens"

const MoviePage: FC<PageProps> = (props) => {
    const { updateMedias, medias } = useMediaStore()

    useLayoutEffect(() => {
        updateMedias(props.data)
    }, [updateMedias])

    if(!medias[0].bannerImage) return <Error errorCode="500"/>

    return <S.Movie />
}

export default MoviePage

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <title> Movie </title>
    </>
)

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
