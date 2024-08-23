import React, { FC } from "react"
import { UserMenu } from "./user-menu"
import { Button } from "../../dumb"
import { PATHS } from "../../../paths"
import * as S from "./styles"

export const Header: FC = () => (
    <S.Component>
        <Button
            theme="border-logo"
            url={{path:PATHS.HOME}}
        />
        <UserMenu />
    </S.Component>
)
