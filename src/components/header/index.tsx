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
        <Styled.Component $borderButtonDisabled={path === PATHS.HOME}>
            <HeaderButton
                onClick={onClickBorderButton}
                disabled={path === PATHS.HOME || !path}
            />
            <UserMenu
                onClick={onClickUserMenu}
                disabled={path === PATHS.USER}
            />
        </Styled.Component>
    )
}
