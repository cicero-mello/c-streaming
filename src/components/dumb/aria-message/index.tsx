import React, { FC } from "react"
import { AriaMessageProps } from "./types"
import * as S from "./styles"

export const AriaMessage: FC<AriaMessageProps> = ({
    "aria-label": ariaLabel,
    "aria-live": ariaLive,
    ...rest
}) => (
    <S.Component
        aria-label={ariaLabel}
        aria-live={ariaLive ?? "polite"}
        {...rest}
    />
)
