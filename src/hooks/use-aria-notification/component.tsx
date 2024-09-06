import React, { FC } from "react"
import { AriaNotificationProps } from "./types"
import * as S from "./styles"

export const AriaNotification: FC<AriaNotificationProps> = ({
    "aria-label": ariaLabel,
    "aria-live": ariaLive,
    "aria-atomic": ariaAtomic,
    ...rest
}) => (
    <S.Component
        aria-label={ariaLabel ? ariaLabel : undefined}
        aria-live={ariaLive ?? "polite"}
        aria-atomic={
            ariaAtomic === undefined ?
            true : ariaAtomic
        }
        {...rest}
    />
)
