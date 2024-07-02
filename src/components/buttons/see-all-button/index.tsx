import React, { FunctionComponent } from "react"
import { SeeAllButtonProps } from "./types"
import { TriangleSeeAll } from "../../../assets/icons"
import * as S from "./styles"

export const SeeAllButton: FunctionComponent<SeeAllButtonProps> = ({
    text, ...rest
}) => (
    <S.Button {...rest}>
        {text}
        <TriangleSeeAll />
    </S.Button>
)
