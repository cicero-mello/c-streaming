import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "carousel-wrapper"
})`
    display: flex;
    position: relative;
    width: 100%;
    align-items: center;

    @media (max-width: 660px){
        position: relative;
        &::before, &::after{
            content: "";
            pointer-events: none;
            top: 0;
            z-index: 3;
            position: absolute;
            height: calc(100% - 36px);
            width: 47px;
            background: linear-gradient(
                -90deg,#08080800 0%,#080808 72%
            );
        }
        &::before {
            margin-left: 9px;
        }
        &::after{
            right: 9px;
            background: linear-gradient(
                90deg,#08080800 0%,#080808 72%
            );
        }

        .carousel-scroll{
            margin: 0px 10px;
            overflow-x: scroll;
            padding: 0px 20px 40px 20px;
            scrollbar-width: unset;
            &::-webkit-scrollbar {
                display: unset;
            }

            &::-webkit-scrollbar { height: 6px; }
            &::-webkit-scrollbar-track { background: #262626; }
            &::-webkit-scrollbar-thumb { background: #555; }
            &::-webkit-scrollbar-thumb:hover { background: #888; }
        }
    }
`

export const Carousel = styled.div.attrs({
    className: "carousel-scroll"
})`
    display: flex;
    margin: 0px 21px;
    overflow-x: scroll;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    .poster {
        margin: 10px 20px 0px 20px;
    }
`

export const TriangleNextButton = styled.button.attrs({
    className: "triangle-next-button"
})`
    cursor: pointer;
    height: fit-content;
    opacity: 100%;
    margin-bottom: 20px;
    transition: 660ms linear;

    svg {
        fill: #080808;
        transition: 40ms ease-in-out;
        path {
            transition: 40ms ease-in-out;
        }
    }

    &:hover{
        svg {
            fill: #D9D9D9;
            path {
                stroke: #D9D9D9;
            }
        }
    }

    &:disabled {
        cursor: unset;
        opacity: 0%;
        pointer-events: none;
    }
`
