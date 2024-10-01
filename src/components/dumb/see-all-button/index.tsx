import React, { FC } from "react"
import { Button, ButtonProps } from "@components"
import { TriangleSeeAllIco } from "@icons"
import * as S from "./styles"

export const SeeAllButton: FC<ButtonProps> = ({
    children, ...rest
}) => (
    <S.Component>
        <Button {...rest}>
            {children}
            <TriangleSeeAllIco />
        </Button>
    </S.Component>
)
