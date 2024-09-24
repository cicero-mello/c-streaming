import styled, { css, keyframes } from "styled-components"

export const OPACITY_TRANSITION_TIME = 180

export const Modal = styled.dialog.attrs({
    className: "base-modal"
})<{ $open: boolean | undefined }>`${({ $open }) => css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100svw;
    height: 100svh;
    z-index: 2;
    top: 0;
    left: 0;

    opacity: 0;
    background-color: rgba(255,255,255, 0.15);
    border: none;
    backdrop-filter: blur(10px);

    max-width: unset;
    max-height: unset;

    transition-property:
        outline,
        outline-offset,
        opacity
    ;
    transition-duration:
        50ms,
        50ms,
        ${OPACITY_TRANSITION_TIME}ms
    ;
    transition-timing-function: linear;

    ${$open && css`
        opacity: 1;
    `}
`}`

const crashZoom = keyframes`
    from { transform: scale(0); }
    to { transform: scale(1); }
`

export const ModalContent = styled.div.attrs({
    className: "modal-content",
    role: "presentation"
})`
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 675px;
    width: 100%;
    margin: 24px;
    background-color: #080808;
    padding: 32px 40px;
    border-radius: 4px;

    transform: scale(0);
    animation: ${crashZoom} 340ms 200ms ease-out forwards;

    @media (max-width: 600px){
        .modal-title {
            font-size: 20px;
            margin-bottom: 12px;
        }
        .modal-text {
            font-size: 18px;
        }
        .buttons-wrapper {
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
        .buttons-wrapper {
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

export const Title = styled.h1.attrs({
    className: "modal-title",
    role: "presentation"
})`
    font-weight: bold;
    font-size: 24px;
    color: #EDEDED;
    margin: 0px 22px 16px 0px;
    width: fit-content;
`

export const TextWrapper = styled.div.attrs({
    role: "presentation"
})`
    width: fit-content;
`

export const Text = styled.p.attrs({
    className: "modal-text"
})`
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
