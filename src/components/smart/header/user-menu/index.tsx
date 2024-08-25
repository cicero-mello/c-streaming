import React, { FC, useState, useRef } from "react"
import { UserIco } from "../../../../assets/icons"
import { PATHS } from "../../../../paths"
import { Button } from "../../../dumb"
import { UseMenuProps } from "./types"
import {
    useOutsideClick,
    useOutsideEnter
} from "../../../../hooks"
import * as S from "./styles"

export const UserMenu: FC<UseMenuProps> = ({
    onClick, ...rest
}) => {
    const componentRef = useRef(null)
    const [showMenu, setShowMenu] = useState(false)

    useOutsideClick(componentRef, () => setShowMenu(false))
    useOutsideEnter(componentRef, () => setShowMenu(false))

    return (
        <S.Component
            {...rest}
            ref={componentRef}
            $showMenu={showMenu}
            aria-label={showMenu ?
                "Close navigation menu" :
                "Open navigation menu"
            }
            onClick={(event) => {
                setShowMenu(old => !old)
                if(onClick) onClick(event)
            }}
        >
            <S.UserName > Gally </S.UserName>
            <UserIco />
            <S.MenuList
                $show={showMenu}
                onClick={(e) => e.stopPropagation()}
            >
                <Button
                    theme="menu-item"
                    children="History"
                    aria-label="History page"
                    tabIndex={showMenu ? 0 : -1}
                    url={{path: PATHS.HISTORY}}
                    onClick={() => setShowMenu(false)}
                />
                <Button
                    theme="menu-item"
                    children="Watch Later"
                    aria-label="Watch Later List"
                    tabIndex={showMenu ? 0 : -1}
                    url={{path: PATHS.WATCH_LATER}}
                    onClick={() => setShowMenu(false)}
                />
                <Button
                    theme="menu-item"
                    children="User Settings"
                    aria-label="User Settings"
                    tabIndex={showMenu ? 0 : -1}
                    url={{path: PATHS.USER_SETTINGS}}
                    onClick={() => setShowMenu(false)}
                />
            </S.MenuList>
        </S.Component>
    )
}
