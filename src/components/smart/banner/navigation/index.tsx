import React, { FunctionComponent, useEffect, useState } from "react"
import { BannerNavigationProps } from "./types"
import { TriangleBannerNav } from "../../../../assets/icons"
import * as S from "./styles"

export const Navigation: FunctionComponent<BannerNavigationProps> = ({
    onClickEachButton, isBannerHidden
}) => {
    const [needAwaitNextClick, setNeedAwaitNextClick] = useState(false)

    const handleClick = (
        changeBanner: () => void,
        clickedRadio: Element
    ) => {
        if(needAwaitNextClick) return

        setNeedAwaitNextClick(true)
        setTimeout(() => setNeedAwaitNextClick(false), 600)

        const radios = Array.from(
            document.getElementsByClassName("banner-radio")
        )
        const radiosToUncheck = radios.filter(
            element => element != clickedRadio
        )
        clickedRadio.setAttribute("aria-checked", "true")
        radiosToUncheck.forEach(element => {
            element.setAttribute("aria-checked", "false")
        })

        changeBanner()
    }

    useEffect(() => {
        const firstRadio = document.getElementsByClassName(
            "banner-radio"
        )[0]
        if(firstRadio){
            firstRadio.setAttribute("aria-checked", "true")
        }
    }, [])

    return(
        <S.Component>
            {onClickEachButton.map((changeBanner, index) => (
                <TriangleBannerNav
                    role="radio"
                    id={`banner-radio-${index}`}
                    key={`banner-radio-${index}`}
                    className="banner-radio"
                    aria-checked="false"
                    aria-label="Change banner"
                    aria-live="polite"
                    tabIndex={isBannerHidden ? -1 : 0}
                    onClick={({ currentTarget }) => handleClick(
                        changeBanner,
                        currentTarget
                    )}
                    onKeyDown={(e) => {
                        if(e.code === "Space" || e.code === "Enter"){
                            e.preventDefault()
                            handleClick(changeBanner, e.currentTarget)
                        }
                    }}
                />
            ))}
        </S.Component>
    )
}
