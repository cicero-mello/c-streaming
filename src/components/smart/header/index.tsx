import React, { FC } from "react"
import { UserMenu } from "./user-menu"
import { PATHS } from "@paths"
import { Button } from "@components"
import * as S from "./styles"

export const Header: FC = () => (
    <S.Component>
        <Button
            tabIndex={0}
            theme="border-logo"
            url={{path:PATHS.HOME}}
            aria-label="Home page: C-Streaming"
        />
        <UserMenu />
    </S.Component>
)
