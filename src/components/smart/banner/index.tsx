import React, { FC, useLayoutEffect, useMemo, useState } from "react"
import { Item } from "./item"
import { Navigation } from "./navigation"
import { BannerProps } from "./types"
import { useMediaStore } from "../../../stores"
import { createBannerItems } from "./core"
import * as S from "./styles"
import { BannerItem } from "./item/types"

export const Banner: FC<BannerProps> = (props) => {
    const medias = useMediaStore((state) => state.medias)
    const bannerItems = createBannerItems(medias)
    const [currentBannerItem, setCurrentBannerItem] = useState<BannerItem>()

    const onClickEachNavButton = useMemo(() => (
        bannerItems.map(banner => () => setCurrentBannerItem(banner))
    ), [bannerItems])

    useLayoutEffect(() => {
        setCurrentBannerItem(bannerItems[0])
    }, [medias])

    return currentBannerItem && (
        <S.Component {...props}>
            <Item {...currentBannerItem}/>
            <Navigation onClickEachButton={onClickEachNavButton}/>
        </S.Component>
    )
}
