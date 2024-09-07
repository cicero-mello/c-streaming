import React, { FC, useRef } from "react"
import { ButtonProps } from "./types"
import { StyledButton, StyledLink } from "./styles"
import { createLinkPath } from "../../../paths"
import { useNavigation } from "../../../hooks"

export const Button: FC<ButtonProps> = ({
    theme, url, disabled, onClick, tabIndex, ...rest
}) => {
    const { navigate } = useNavigation()
    const styledLinkRef = useRef<any>(null)

    if(url) return (
        <StyledLink
            {...rest}
            ref={styledLinkRef}
            tabIndex={disabled ? -1 : tabIndex ?? 0}
            $theme={theme}
            $disabled={disabled}
            to={createLinkPath(url.path, url.params)}
            onClick={(e) => {
                e.preventDefault()
                if(disabled) return
                if(onClick) onClick(e)
                navigate(url.path, url.params)
            }}
            onContextMenu={(e) => {
                if(disabled) e.preventDefault()
            }}
            onKeyDown={(event) => {
                if(disabled){
                    event.preventDefault()
                    return
                }
                if(event.code === "Enter" || event.code === "Space"){
                    event.preventDefault()
                    styledLinkRef.current.click()
                }
            }}
        />
    )

    return (
        <StyledButton
            tabIndex={disabled ? -1 : tabIndex ?? 0}
            disabled={disabled}
            $disabled={disabled}
            $theme={theme}
            onClick={onClick}
            {...rest}
        />
    )
}