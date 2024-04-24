import React, { FunctionComponent, useEffect, useLayoutEffect, useMemo, useState } from "react"
import { Banner } from "../../components"
import { HomeProps, QueryGatsbyImages } from "./type"
import { getRandomMediaToBanner } from "./core"
import * as Styled from "./styles"
import { BannerProps } from "../../components/banner/types"

export const Home: FunctionComponent<HomeProps> = ({ data }) => {
    const [bannerMediaList, setBannterMediaList] = useState<BannerProps[]>([])
    const [loadingData, setLoadingData] = useState<boolean>(true)
    const [freePointerEvents, setFreePointerEvents] = useState<boolean>(false)

    useEffect(() => {
        const bannerGatsbyImages: QueryGatsbyImages[] = data ? data.banner.edges.map(
            (obj: { node: any }) => ({...obj.node})
        ) : []
        const posterGatsbyImages: QueryGatsbyImages[] = data ? data.poster.edges.map(
            (obj: { node: any }) => ({...obj.node})
        ) : []

        if(bannerGatsbyImages.length > 0) {
            const randomBannerMedia = getRandomMediaToBanner(bannerGatsbyImages)
            setBannterMediaList(randomBannerMedia)
        }
    }, [data])


    useEffect(() => {
        if(bannerMediaList.length > 0) {
            setLoadingData(false)
            setTimeout(() => {
                setFreePointerEvents(true)
            }, 300)
        }
    }, [bannerMediaList])

    return (
        <Styled.Home $freePointerEvents={freePointerEvents}>
            <Styled.PageLoader $loading={loadingData}/>
            {!loadingData && <Banner {...bannerMediaList[0]}/>}
        </Styled.Home>
    )
}
