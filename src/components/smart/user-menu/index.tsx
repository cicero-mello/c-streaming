import React, { FunctionComponent, useState, useRef } from "react"
import { UserMenuProps } from "./types"
import { UserIco } from "../../assets/icons"
import { PATHS } from "../../paths"
import { useNavigation, useOutsideClick } from "../../hooks"
import * as S from "./styles"

export const UserMenu: FunctionComponent<UserMenuProps> = (props) => {
    const componentRef = useRef(null)
    const [showMenu, setShowMenu] = useState(false)
    const { navigate } = useNavigation()
    useOutsideClick(componentRef, () => setShowMenu(false))

    const handleClick = () => {
        if(!!props.disabled) return
        setShowMenu(old => !old)
    }

    const goTo = (path: PATHS) => {
        navigate(path)
        setShowMenu(false)
    }

    return (
        <S.Component
            {...props}
            ref={componentRef}
            $showMenu={showMenu}
            $disabled={props.disabled}
        >
            <S.UserName onClick={handleClick}> Gally </S.UserName>
            <UserIco onClick={handleClick} />
            <S.MenuList $show={showMenu}>
                <S.MenuItem onClick={() => goTo(PATHS.USER)}>
                    Profile
                </S.MenuItem>
                <S.MenuItem onClick={() => goTo(PATHS.WATCH_LATER)}>
                    Watch Later
                </S.MenuItem>
                <S.MenuItem onClick={() => goTo(PATHS.HISTORY)}>
                    History
                </S.MenuItem>
            </S.MenuList>
        </S.Component>
    )
}
