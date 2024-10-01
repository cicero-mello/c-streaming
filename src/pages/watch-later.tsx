import React, { FunctionComponent, useLayoutEffect } from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { useMediaStore } from "@stores"
import { Error } from "@components"
import * as S from "@screens"

const WatchLaterPage: FunctionComponent<PageProps> = (props) => {
    const { updateMedias, medias } = useMediaStore()

    useLayoutEffect(() => {
        updateMedias(props.data)
    }, [updateMedias])

    if(!medias[0].bannerImage) return <Error errorCode="500"/>

    return <S.WatchLater />
}

export default WatchLaterPage

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <title> Watch Later </title>
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
                            # width: 300
                        )
                    }
                }
            }
        }
    }
`
