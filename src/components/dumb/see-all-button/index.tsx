import React, { FC } from "react"
import { TriangleSeeAllIco } from "../../../assets/icons"
import { Button } from "../button"
import { ButtonProps } from "../button/types"
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
