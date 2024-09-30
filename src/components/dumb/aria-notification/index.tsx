import React, { FC } from "react"
import { AriaNotificationProps } from "./types"
import * as S from "./styles"

export const AriaNotification: FC<AriaNotificationProps> = ({
    message, ...rest
}) => (
    <S.Component
        aria-label={message ?? undefined}
        aria-live="polite"
        aria-atomic="true"
        {...rest}
    />
)
