import React, { FunctionComponent, useMemo, useState } from "react"
import { Banner } from "../banner"
import { BannerListProps } from "./types"
import * as Styled from "./styles"
import { BannerNavigation } from "../banner-navigation"

export const BannerList: FunctionComponent<BannerListProps> = ({
    banners
}) => {
    const [currentBanner, setCurrentBanner] = useState(banners[0])

    const onClickEachNavButton = useMemo(() => (
        banners.map(banner => () => setCurrentBanner(banner))
    ),[])

    return (
        <Styled.Component>
            <Banner {...currentBanner}/>
            <BannerNavigation onClickEachButton={onClickEachNavButton}/>
        </Styled.Component>
    )
}
