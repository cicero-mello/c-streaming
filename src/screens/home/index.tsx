import React, { FunctionComponent, useLayoutEffect, useMemo } from "react"
import { PageProps, graphql } from "gatsby"
import { Banner } from "../../components"
import { HomeProps, QueryGatsbyImages } from "./type"
import { getRandomMediaToBanner } from "./core"
import * as Styled from "./styles"

export const Home: FunctionComponent<HomeProps> = ({ data }) => {
    const bannerGatsbyImages: QueryGatsbyImages[] = data.banner.edges.map(
        (obj: { node: any }) => ({...obj.node})
    )
    const posterGatsbyImages: QueryGatsbyImages[] =  data.poster.edges.map(
        (obj: { node: any }) => ({...obj.node})
    )
    const bannerMediaList = getRandomMediaToBanner(bannerGatsbyImages)

    // useLayoutEffect(() => {
    //     getRandomMediaToBanner(bannerGatsbyImages)
    // }, [])

    return (
        <Styled.Home>
            <Banner media={bannerMediaList[0]}/>
        </Styled.Home>
    )
}
