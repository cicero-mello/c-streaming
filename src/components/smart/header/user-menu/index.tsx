import React, { FunctionComponent, useState, useRef, useEffect, useCallback } from "react"
import { UserMenuProps } from "./types"
import { UserIco } from "../../../../assets/icons"
import { PATHS } from "../../../../paths"
import { useOutsideClick } from "../../../../hooks"
import { Button } from "../../../dumb"
import * as S from "./styles"

export const UserMenu: FunctionComponent<UserMenuProps> = (props) => {
    const componentRef = useRef(null)
    const [showMenu, setShowMenu] = useState(false)

    const handleClick = (e: any) => {
        e.preventDefault()
        if(!!props.disabled) return
        setShowMenu(old => !old)
    }

    useOutsideClick(componentRef, () => setShowMenu(false))

    useEffect(() => {
        const onAcessiblityNav = (e: KeyboardEvent) => {
            if(e.key === "Enter" || e.key === " "){
                setShowMenu(false)
            }
        }
        document.addEventListener("keydown", onAcessiblityNav)
        return () => document.removeEventListener(
            "keydown",
            onAcessiblityNav
        )
    }, [showMenu])

    return (
        <S.Component
            {...props}
            ref={componentRef}
            $showMenu={showMenu}
            $disabled={props.disabled}
            onClick={handleClick}
        >
            <S.UserName > Gally </S.UserName>
            <UserIco />
            <S.MenuList $show={showMenu} onClick={(e) => e.stopPropagation()}>
                <Button
                    theme="clean"
                    children="Profile"
                    tabIndex={showMenu ? 0 : -1}
                    url={{path: PATHS.USER}}
                    onClick={() => setShowMenu(false)}
                />
                <Button
                    theme="clean"
                    children="Watch Later"
                    tabIndex={showMenu ? 0 : -1}
                    url={{path: PATHS.WATCH_LATER}}
                    onClick={() => setShowMenu(false)}
                />
                <Button
                    theme="clean"
                    children="History"
                    tabIndex={showMenu ? 0 : -1}
                    url={{path: PATHS.HISTORY}}
                    onClick={() => setShowMenu(false)}
                />
            </S.MenuList>
        </S.Component>
    )
}
