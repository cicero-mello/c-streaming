import React, { FunctionComponent, useEffect, useLayoutEffect, useMemo, useState } from "react"
import { PageProps, graphql } from "gatsby"
import { Banner } from "../../components"
import { HomeProps, QueryGatsbyImages } from "./type"
import { getRandomMediaToBanner } from "./core"
import * as Styled from "./styles"
import { BannerMedia } from "../../components/banner/types"

export const Home: FunctionComponent<HomeProps> = ({ data }) => {
    const [bannerMediaList, setBannterMediaList] = useState<BannerMedia[]>([])

    useLayoutEffect(() => {
        const bannerGatsbyImages: QueryGatsbyImages[] = data ? data.banner.edges.map(
            (obj: { node: any }) => ({...obj.node})
        ) : []
        const posterGatsbyImages: QueryGatsbyImages[] = data ? data.poster.edges.map(
            (obj: { node: any }) => ({...obj.node})
        ) : []

        if(bannerGatsbyImages.length > 0) setBannterMediaList(getRandomMediaToBanner(bannerGatsbyImages))
    }, [data])

    return (
        <Styled.Home>
            {bannerMediaList.length> 0 && <Banner media={bannerMediaList[0]}/>}
        </Styled.Home>
    )
}
