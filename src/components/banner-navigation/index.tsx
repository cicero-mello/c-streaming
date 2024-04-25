import React, { FunctionComponent } from "react"
import { BannerNavigationProps } from "./types"
import * as Styled from "./styles"


export const BannerNavigation: FunctionComponent<BannerNavigationProps> = ({
    onClickEachButton
}) => {

    return(
        <Styled.Component>
            {onClickEachButton.map(
                (func) => (<button onClick={func}> a </button>)
            )}
        </Styled.Component>
    )
}
