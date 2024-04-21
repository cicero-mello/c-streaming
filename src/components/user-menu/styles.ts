import styled, { css } from "styled-components"
import { UserMenuProps } from "./types"

export const Component = styled.div.attrs({
    className: "user-menu"
})<UserMenuProps>`
    display: flex;

    .user-ico{
        fill: #090909;
        transition: 200ms ease-in-out;
    }

    ${({ disabled }) => !disabled && css`
        &:hover{
            cursor: pointer;
            .user-ico {
                fill: #FFFF;
                * { stroke: #090909;}
            }
        }
    `}
`

export const UserName = styled.p.attrs({
    className: "user-name"
})`
    font-size: 13px;
    margin: 7px 7px 0px 10px;
    user-select: none;
`
