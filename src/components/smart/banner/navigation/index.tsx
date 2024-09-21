import React, { FunctionComponent, useState } from "react"
import { BannerNavigationProps } from "./types"
import { TriangleBannerNavIco } from "../../../../assets/icons"
import { debounce } from "../../../../shared/utils"
import * as S from "./styles"

export const Navigation: FunctionComponent<BannerNavigationProps> = ({
    onClickEachButton, isBannerHidden
}) => {
    const [isToAwaitAnimation, setIsToAwaitAnimation] = useState(false)
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()

    const handleChange = async (changeBanner: () => void) => {
        if(!isToAwaitAnimation){
            changeBanner()
            setIsToAwaitAnimation(true)
            const id = setTimeout(() => setIsToAwaitAnimation(false), 600)
            setTimeoutId(id)
            return
        }

        clearTimeout(timeoutId)
        debounce(() => {
            changeBanner()
            setIsToAwaitAnimation(false)
        }, 600, "banner")
    }

    return(
        <S.Component
            role="radiogroup"
            aria-hidden={isBannerHidden ? "true" : "false"}
        >
            {onClickEachButton.map((changeBanner, index) => (
                <S.RadioItem key={`banner-radio-${index}`}>
                    <input
                        type="radio"
                        value={index}
                        name="banner-radio"
                        aria-label="Change banner"
                        defaultChecked={index === 0}
                        onChange={() => handleChange(changeBanner)}
                        aria-hidden={isBannerHidden ? "true" : "false"}
                        tabIndex={isBannerHidden ? -1 : 0}
                    />
                    <TriangleBannerNavIco aria-hidden="true" />
                </S.RadioItem>
            ))}
        </S.Component>
    )
}
