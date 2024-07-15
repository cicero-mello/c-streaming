import { UsePageData } from "./types"
import * as media from "../../../shared/media"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { useLayoutEffect } from "react"

export const usePageData = (
    data: object
): UsePageData => {
    const images = media.getBannerGatsbyImages(data)
    const cowboy = images.find(image => image.name === "cowboybebop")?.childImageSharp.gatsbyImageData

    useLayoutEffect(() => {
    }, [])

    return {
        watchLaterCards: [{
            props: {
                image: cowboy as IGatsbyImageData,
                title: "Cowboy Bebop"
            },
            key: "dsfasdf"
        }]
    }
}