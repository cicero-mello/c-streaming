import React, { FunctionComponent } from "react"
import { UserMenu } from "../user-menu"
import { HeaderButton } from "../buttons"
import { navigate } from "gatsby"
import { PATHS } from "../../paths"
import { HeaderProps } from "./types"
import * as Styled from "./styles"

export const Header: FunctionComponent<HeaderProps> = ({ path }) => {

    const onClickBorderButton = () => {
        navigate(PATHS.HOME)
    }

    const onClickUserMenu = () => {
        navigate(PATHS.USER)
    }

    return (
        <Styled.Component $borderButtonDisabled={path === PATHS.HOME}>
            <HeaderButton
                onClick={onClickBorderButton}
                disabled={path === PATHS.HOME}
            />
            <UserMenu
                onClick={onClickUserMenu}
                disabled={path === PATHS.USER}
            />
        </Styled.Component>
    )
}
