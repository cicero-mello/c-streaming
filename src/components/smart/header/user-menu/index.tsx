import React, { FC, useState, useRef, useEffect } from "react"
import { useOutsideClick, useOutsideEnter, useOutsideFocus } from "@hooks"
import { UseMenuProps } from "./types"
import { Button } from "@components"
import { UserIco } from "@icons"
import { PATHS } from "@paths"
import * as S from "./styles"

export const UserMenu: FC<UseMenuProps> = ({
    ...rest
}) => {
    const componentRef = useRef<HTMLDivElement>(null)
    const [showMenu, setShowMenu] = useState(false)

    useOutsideClick(componentRef, () => setShowMenu(false))
    useOutsideEnter(componentRef, () => setShowMenu(false))
    useOutsideFocus(componentRef, () => setShowMenu(false))

    const handleClick = () => {
        setShowMenu(state => !state)
    }

    useEffect(() => {
        if(!showMenu || !componentRef?.current) return
        const firstMenuItem: HTMLButtonElement | null = (
            componentRef.current.querySelector(".menu-item-button")
        )
        if(firstMenuItem) firstMenuItem.focus()
    }, [showMenu])

    return (
        <S.Component
            ref={componentRef}
            $showMenu={showMenu}
            {...rest}
        >
            <S.MenuButton
                onClick={handleClick}
                aria-expanded={showMenu}
                aria-label={showMenu ?
                    "Close navigation menu" :
                    "Open navigation menu"
                }
            />
            <S.UserName aria-hidden> Gally </S.UserName>
            <UserIco aria-hidden />
            <S.MenuList
                $show={showMenu}
                onClick={(e) => e.stopPropagation()}
            >
                <Button
                    theme="menu-item"
                    children="Search"
                    aria-label="Search page"
                    aria-hidden={showMenu ? "false" : "true"}
                    tabIndex={showMenu ? 0 : -1}
                    url={{path: PATHS.SEARCH, params: {searchText: "", searchType: "all"}}}
                    onClick={() => setShowMenu(false)}
                />
                <Button
                    theme="menu-item"
                    children="History"
                    aria-label="History page"
                    aria-hidden={showMenu ? "false" : "true"}
                    tabIndex={showMenu ? 0 : -1}
                    url={{path: PATHS.HISTORY}}
                    onClick={() => setShowMenu(false)}
                />
                <Button
                    theme="menu-item"
                    children="Watch Later"
                    aria-label="Watch Later List"
                    aria-hidden={showMenu ? "false" : "true"}
                    tabIndex={showMenu ? 0 : -1}
                    url={{path: PATHS.WATCH_LATER}}
                    onClick={() => setShowMenu(false)}
                />
                <Button
                    theme="menu-item"
                    children="User Settings"
                    aria-label="User Settings - Last Menu Option"
                    aria-hidden={showMenu ? "false" : "true"}
                    tabIndex={showMenu ? 0 : -1}
                    url={{path: PATHS.USER_SETTINGS}}
                    onClick={() => setShowMenu(false)}
                />
            </S.MenuList>
        </S.Component>
    )
}
