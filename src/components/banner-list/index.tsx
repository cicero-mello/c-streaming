import React, { FunctionComponent, useMemo, useState } from "react"
import { Banner } from "../banner"
import { BannerListProps } from "./types"
import { BannerNavigation } from "../banner-navigation"
import * as S from "./styles"

export const BannerList: FunctionComponent<BannerListProps> = ({
    banners
}) => {
    const [currentBanner, setCurrentBanner] = useState(banners[0])

    const onClickEachNavButton = useMemo(() => (
        banners.map(banner => () => setCurrentBanner(banner))
    ),[])

    return (
        <S.Component>
            <Banner {...currentBanner}/>
            <BannerNavigation onClickEachButton={onClickEachNavButton}/>
        </S.Component>
    )
}
