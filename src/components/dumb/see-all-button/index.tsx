import React, { FC } from "react"
import { TriangleSeeAllIco } from "../../../assets/icons"
import { Button } from "../../smart/button"
import { ButtonProps } from "../../smart/button/types"
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
