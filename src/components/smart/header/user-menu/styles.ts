import styled, { css } from "styled-components"

export const Component = styled.button.attrs((props: any) => ({
    className: "user-menu",
    $showMenu: props.$showMenu
}))<{ $showMenu?: boolean, $disabled?: boolean} >`
    display: flex;
    position: relative;
    cursor: pointer;
    .user-ico{
        fill: transparent;
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
    cursor: pointer;
    font-size: 13px;
    padding: 7px 7px 0px 10px;
    user-select: none;
`

export const MenuList = styled.div.attrs((props: any) => ({
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
    cursor: default;

    .clean-button {
        cursor: pointer;
        pointer-events: unset;
        padding: 0px 11px;
        width: 100%;
        font-size: 16px;
        justify-content: unset;
        text-align: start;

        &:hover {
            outline: none;
            background-color: white;
            color: #080808;
        }

        &:focus-visible {
            padding: 0;
            margin: 0px 11px;
            width: fit-content;
            outline-offset: 4px;
        }
    }

    ${({ $show }) => $show ? css`
        opacity: 1;
        max-height: 129px;
        padding: 11px 0px;

        pointer-events: unset;
        border-color: white;
        .clean-button {
            transition: 100ms linear;
        }
    ` : css`
        .clean-button {
            transition: 500ms linear;
        }
    `}


`
