import React, { FunctionComponent, useState } from "react"
import { BannerNavigationProps } from "./types"

import * as S from "./styles"
import { TriangleRadioInput } from "../../../dumb"

export const Navigation: FunctionComponent<BannerNavigationProps> = ({
    onClickEachButton
}) => {
    const [needAwaitNextClick, setNeedAwaitNextClick] = useState(false)

    const handleClick = (func: () => void) => {
        if(needAwaitNextClick) return

        setNeedAwaitNextClick(true)
        setTimeout(() => {
            setNeedAwaitNextClick(false)
        }, 600)
        func()
    }

    return(
        <S.Component>
            {onClickEachButton.map(
                (func, i) => (
                    <TriangleRadioInput
                        onClick={() => handleClick(func)}
                        name="lorem"
                        defaultChecked={i === 0}
                        key={`a${i}`}
                        disabled={needAwaitNextClick}
                    />
                )
            )}
        </S.Component>
    )
}
