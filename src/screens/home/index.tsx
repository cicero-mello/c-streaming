import React, { FunctionComponent, useEffect, useState } from "react"
import { HomeProps } from "./type"
import { BannerProps, BannerList, Line, SearchInput } from "../../components"
import * as core from "./core"
import * as Styled from "./styles"

export const Home: FunctionComponent<HomeProps> = ({ data }) => {
    const [bannerMediaList, setBannterMediaList] = useState<BannerProps[]>([])
    const [loadingData, setLoadingData] = useState<boolean>(true)
    const [freePointerEvents, setFreePointerEvents] = useState<boolean>(false)

    useEffect(() => {
        const bannerGatsbyImages = core.getBannerGatsbyImages(data)
        if(bannerGatsbyImages.length <= 0) return

        const posterGatsbyImages = core.getPosterGatsbyImages(data)
        if(posterGatsbyImages.length <= 0) return

        const bannerMedia = core.createBannerMedia(bannerGatsbyImages)

        if(bannerMedia.length > 0){
            setBannterMediaList(bannerMedia)
            setLoadingData(false)
            setTimeout(() => {
                setFreePointerEvents(true)
            }, 300)
        }
    }, [data])

    return (
        <Styled.Home $freePointerEvents={freePointerEvents}>
            <Styled.PageLoader $loading={loadingData}/>
            {!loadingData && <BannerList banners={bannerMediaList} />}
            <Line />
            <SearchInput onSearch={(inputValue) => console.log(inputValue)}/>
            <Line />
        </Styled.Home>
    )
}
