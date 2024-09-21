import styled, { css } from "styled-components"

export const Component = styled.button.attrs((props: any) => ({
    className: "user-menu",
    $showMenu: props.$showMenu
}))<{ $showMenu?: boolean }>` ${({ $showMenu }) => css`
    display: flex;
    position: relative;
    cursor: pointer;
    .user-ico{
        fill: transparent;
        transition: 200ms ease-in-out;
    }

    ${$showMenu && css`
        .user-ico {
            fill: #FFFF;
            * { stroke: #090909;}
        }
    `}

    &:hover .user-ico {
        fill: #FFFF;
        * {
            stroke: #090909;
        }
    }

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
        user-select: none;
    }
`}`

export const UserName = styled.p.attrs({
    className: "user-name"
})`
    cursor: pointer;
    font-size: 13px;
    padding: 7px 7px 0px 10px;
    user-select: none;
`

export const MenuList = styled.nav.attrs((props: any) => ({
    className: "user-menu-list",
    $show: props.$show
}))<{ $show: boolean }>`${({ $show }) => css`

    display: flex;
    flex-direction: column;
    position: absolute;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: 2px;
    top: 42px;
    width: 129px;
    right: 1px;
    line-height: 29px;
    background-color: #080808;
    z-index: 10;
    padding: 0px 0px;
    opacity: 0;
    max-height: 0;
    cursor: default;

    transition-duration: 200ms, 250ms;
    transition-property: all, opacity;
    transition-timing-function: linear, linear;

    ${$show && css`
        opacity: 1;
        max-height: 140px;
        padding: 11px 0px;

        pointer-events: unset;
        border-color: white;
    `}

    ${!$show && css`
        .menu-item-button {
            transition: 500ms linear;
        }
    `}
`}`
