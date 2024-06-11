import React, { FunctionComponent } from "react"
import { UserMenu } from "../user-menu"
import { HeaderButton } from "../buttons"
import { PATHS } from "../../paths"
import { HeaderProps } from "./types"
import * as Styled from "./styles"
import { useNavigation } from "../../hooks"

export const Header: FunctionComponent<HeaderProps> = ({ path }) => {
    const { navigate } = useNavigation()

    const onClickBorderButton = async () => {
        await navigate(PATHS.HOME)
    }

    const onClickUserMenu = () => {
        //navigate(PATHS.USER)
    }

    return (
        <Styled.Component>
            <HeaderButton onClick={onClickBorderButton} />
            <UserMenu onClick={onClickUserMenu} />
        </Styled.Component>
    )
}
