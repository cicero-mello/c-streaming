import styled, { css } from "styled-components"

export const Component = styled.div.attrs((props: any) => ({
    className: "base-modal-backdrop",
    $show: !!props.$show
}))<{ $show?: boolean }>`${({ $show }) => css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    top: 0;
    left: 0;
    background-color: rgba(255,255,255, 0.15);
    backdrop-filter: blur(10px);

    opacity: 0;
    transition-duration: 180ms;
    transition-timing-function: linear;
    transition-property: opacity, background-color, backdrop-filter;

    ${$show && css` opacity: 1;`}
`}`

export const Modal = styled.div.attrs({
    className: "base-modal"
})`
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: #080808;
    padding: 32px 40px;
    border-radius: 4px;
    max-width: 675px;
    width: 100%;
    margin: 24px;

    animation: crashzoom 340ms forwards ease-out;
    animation-delay: 200ms;
    transform: scale(0);

    @keyframes crashzoom {
        to { transform: scale(1);}
    }

    @media (max-width: 600px){
        > h2 {
            font-size: 20px;
            margin-bottom: 12px;
        }
        > p { font-size: 18px; }
        > .buttons-wrapper {
            margin-top: 38px;
            * {
                font-size: 16px;
            }
            > * {
                min-width: 78px;
            }
        }
    }

    @media (max-width: 400px){
        padding: 24px 24px;
        .buttons-wrapper{
            flex-wrap: wrap;
        }
    }
`

export const CloseModal = styled.button`
    cursor: pointer;
    position: absolute;
    width: 18px;
    height: 18px;
    right: 16px;
    top: 13px;
    display: flex;

    &::before {
        position: absolute;
        content: "";
        margin-top: 9px;
        width: 18px;
        height: 2px;
        border-radius: 4px;
        background-color: #8D8D8D;
        transform: rotate(-45deg);
        transition: 100ms linear;
    }

    &::after {
        position: absolute;
        content: "";
        margin-top: 9px;
        width: 18px;
        height: 2px;
        border-radius: 4px;
        background-color: #8D8D8D;
        transform: rotate(45deg);
        transition: 100ms linear;
    }

    &:hover {
        &::after, &::before {
            background-color: #EDEDED;
        }
    }
`

export const Title = styled.h2`
    font-weight: bold;
    color: #EDEDED;
    margin: 0px 22px 16px 0px;
`

export const Text = styled.p`
    font-size: 22px;
    color: #EDEDED;
`

export const ChildrenWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
`

export const ButtonsWrapper = styled.div.attrs({
    className: "buttons-wrapper"
})`
    display: flex;
    justify-content: end;
    gap: 10px 24px;
    margin-top: 48px;

    > * {
        min-width: 92px;
    }
`
