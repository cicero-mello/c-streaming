import React, { FC } from "react"
import { ButtonProps } from "./types"
import { StyledButton, StyledLink } from "./styles"
import { createLinkPath } from "../../../paths"
import { useNavigation } from "../../../hooks"

export const Button: FC<ButtonProps> = ({
    theme, url, disabled, onClick, ...rest
}) => {
    const { navigate } = useNavigation()

    if(url) return (
        <StyledLink
            {...rest}
            $theme={theme}
            $disabled={disabled}
            to={createLinkPath(url.path, url.params)}
            onClick={(e) => {
                e.preventDefault()
                if(disabled) return
                if(onClick) onClick(e)
                navigate(url.path, url.params)
            }}
            onContextMenu={!disabled ? rest.onContextMenu :
                (e) => e.preventDefault()
            }
            onKeyDown={!disabled ? rest.onKeyDown :
                (e) => {
                    if(e.key === 'Enter' || e.key === ' '){
                        e.preventDefault()
                    }
                }
            }
        />
    )

    return (
        <StyledButton
            disabled={disabled}
            $disabled={disabled}
            $theme={theme}
            {...rest}
        />
    )
}
