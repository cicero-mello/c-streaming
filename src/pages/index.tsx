import React, { FC, useLayoutEffect } from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import { useMediaStore } from "../stores"
import { Error } from "../components"
import * as S from "../screens"

const IndexPage: FC<PageProps> = (props) => {
    const { updateMedias, medias } = useMediaStore()

    useLayoutEffect(() => {
        updateMedias(props.data)
    }, [updateMedias])

    if(!medias[0].bannerImage || !medias[0].posterImage){
        return <Error errorCode="500"/>
    }

    return <S.Home />
}

export default IndexPage

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <title> C-Streaming </title>
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
