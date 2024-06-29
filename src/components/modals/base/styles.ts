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
`

export const Title = styled.h2`
    font-weight: bold;
    color: #EDEDED;
    margin-bottom: 16px;
`

export const Text = styled.p`
    font-size: 22px;
    color: #EDEDED;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: end;
    gap: 24px;
    margin-top: 48px;
`
