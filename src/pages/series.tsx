import React, { FC, useLayoutEffect } from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { useMediaStore } from "../stores"
import { Error } from "../components"
import * as S from "../screens"

const SeriesPage: FC<PageProps> = (props) => {
    const { updateMedias, medias } = useMediaStore()

    useLayoutEffect(() => {
        updateMedias(props.data)
    }, [updateMedias])

    if(!medias[0].bannerImage) return <Error errorCode="500"/>

    return <S.Series />
}

export default SeriesPage
export const Head: HeadFC = () => <title> Serie/Anime </title>

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
