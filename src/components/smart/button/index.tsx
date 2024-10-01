import React, { FC, useRef } from "react"
import { StyledButton, StyledLink } from "./styles"
import { createLinkPath } from "@paths"
import { useNavigation } from "@hooks"
import { ButtonProps } from "./types"

export const Button: FC<ButtonProps> = ({
    theme, url, disabled, onClick, tabIndex,
    ...rest
}) => {
    const { navigate } = useNavigation()
    const styledLinkRef = useRef<any>(null)
    const styledButtonRef = useRef<HTMLButtonElement>(null)

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
            ref={styledButtonRef}
            tabIndex={disabled ? -1 : tabIndex ?? 0}
            $disabled={disabled}
            $theme={theme}
            onClick={disabled ? () => {} : onClick}
            {...rest}
        />
    )
}
