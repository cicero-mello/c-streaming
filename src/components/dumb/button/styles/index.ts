import styled from "styled-components"
import { ButtonThemes } from "../types"
import { borderThemes } from "./border.styles"
import { classicThemes } from "./classic.styles"
import { menuItemThemes } from "./menu-item.styles"
import { Link } from "gatsby";

const buttonThemes = new Map([
    ...borderThemes, ...classicThemes, ...menuItemThemes
])

export const StyledButton = styled.button.attrs((props: any) => ({
    className: props.$theme + "-button"
}))<{ $theme: ButtonThemes, $disabled?: boolean }>`
    ${({ $theme, $disabled }) => {
        const theme = buttonThemes.get($theme)
        if(theme) return theme($disabled)
    }}
`

export const StyledLink = styled(Link).attrs((props: any) => ({
    className: props.$theme + "-button"
}))<{ $theme: ButtonThemes, $disabled?: boolean }>`
    ${({ $theme, $disabled }) => {
        const theme = buttonThemes.get($theme)
        if(theme) return theme($disabled)
    }}
`
