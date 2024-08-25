import React, { FC, useMemo, useState } from "react"
import { Item } from "./item"
import { Navigation } from "./navigation"
import { BannerProps } from "./types"
import { useIsBannerHidden } from "./use-is-banner-hidden"
import { useBannerMedias } from "./use-banner-medias"
import * as S from "./styles"

export const Banner: FC<BannerProps> = (props) => {
    const bannerMedias = useBannerMedias()
    const isBannerHidden = useIsBannerHidden()
    const [currentBannerMedia, setCurrentBannerMedia] = useState(
        bannerMedias[0]
    )

    const onClickEachNavButton = useMemo(() => (
        bannerMedias.map(bannerMedia =>
            () => setCurrentBannerMedia(bannerMedia)
        )
    ), [bannerMedias])

    return (
        <S.Component {...props}>
            <Item
                {...currentBannerMedia}
                isBannerHidden={isBannerHidden}
            />
            <Navigation
                onClickEachButton={onClickEachNavButton}
                isBannerHidden={isBannerHidden}
            />
        </S.Component>
    )
}
