import React, { FC, useMemo, useState } from "react"
import { Item } from "./item"
import { Navigation } from "./navigation"
import { BannerProps } from "./types"
import { useMediaStore } from "../../../stores"
import { createBannerItems } from "./core"
import * as S from "./styles"

export const Banner: FC<BannerProps> = (props) => {
    const medias = useMediaStore((state) => state.medias)
    const bannerItems = createBannerItems(medias)
    const [currentBannerItem, setCurrentBannerItem] = useState(bannerItems[0])

    const onClickEachNavButton = useMemo(() => (
        bannerItems.map(banner => () => setCurrentBannerItem(banner))
    ),[])

    return (
        <S.Component {...props}>
            <Item {...currentBannerItem}/>
            <Navigation onClickEachButton={onClickEachNavButton}/>
        </S.Component>
    )
}
