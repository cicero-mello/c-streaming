import React, { FC } from "react"
import { UserMenu } from "./user-menu"
import { Button } from "../../dumb"
import { PATHS } from "../../../paths"
import * as S from "./styles"

export const Header: FC = () => (
    <S.Component>
        <Button
            tabIndex={1}
            theme="border-logo"
            url={{path:PATHS.HOME}}
            aria-label="Home page: C-Streaming"
        />
        <UserMenu tabIndex={1}/>
    </S.Component>
)
