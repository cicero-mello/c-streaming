import React, { FunctionComponent } from "react"
import * as Styled from "./styles"
import { BannerListProps } from "./types"

export const BannerList: FunctionComponent<BannerListProps> = ({
    banners
}) => {

    console.log(banners)

    return (
        <Styled.Component>
            banner list
        </Styled.Component>
    )
}
