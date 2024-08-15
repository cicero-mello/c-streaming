import React, { FC } from "react"
import { UserMenu } from "../user-menu"
import { HeaderButton } from "../../dumb/buttons"
import { PATHS } from "../../../paths"
import { useNavigation } from "../../../hooks"
import * as S from "./styles"

export const Header: FC = () => {
    const { navigate } = useNavigation()

    return (
        <S.Component>
            <HeaderButton onClick={() => navigate(PATHS.HOME)} />
            <UserMenu />
        </S.Component>
    )
}
