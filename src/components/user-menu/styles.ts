import styled, { css } from "styled-components"

export const Component = styled.div.attrs((props: any) => ({
    className: "user-menu",
    $showMenu: props.$showMenu
}))<{ $showMenu?: boolean, $disabled?: boolean} >`
    display: flex;
    position: relative;

    .user-ico{
        fill: #090909;
        transition: 200ms ease-in-out;
    }

    ${({ $disabled, $showMenu }) => !$disabled && css`
        .user-ico, .user-name {
            cursor: pointer;
        }

        ${$showMenu && css`
            .user-ico {
                fill: #FFFF;
                * { stroke: #090909;}
            }
        `}

        &:hover .user-ico {
            fill: #FFFF;
            * { stroke: #090909;}
        }
    `}
`

export const UserName = styled.p.attrs({
    className: "user-name"
})`
    font-size: 13px;
    padding: 7px 7px 0px 10px;
    user-select: none;
`

export const MenuList = styled.ul.attrs((props: any) => ({
    className: "user-menu-list",
    $show: props.$show
}))<{ $show: boolean }>`
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

    transition-duration: 200ms, 250ms;
    transition-property: all, opacity;
    transition-timing-function: linear, linear;

    padding: 0px 0px;
    opacity: 0;
    max-height: 0;
    pointer-events: none;

    ${({ $show }) => $show ? css`
        opacity: 1;
        max-height: 129px;
        padding: 11px 0px;
        pointer-events: unset;
        border-color: white;
        .user-menu-item {
            transition: 100ms linear;
        }
    ` : css`
        .user-menu-item {
            transition: 500ms linear;
        }
    `}
`

export const MenuItem = styled.li.attrs({
    className: "user-menu-item"
})`
    pointer-events: unset;
    padding: 0px 11px;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: #080808;
    }
`
