import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "episode-cards-carousel"
})`
    opacity: 0.7;
    transition: 120ms linear;
    &:hover{
        opacity: 1;
    }
`

export const TopText = styled.h3.attrs({
    className: "top-text"
})`
    position: absolute;
    color: #EDEDED;
    font-size: 23px;
    margin-top: 47px;
    margin-left: 48px;
`

export const CarouselWrapper = styled.div.attrs({
    className: "carousel-episodes-wrapper"
})`
    display: flex;
    position: relative;
    &::before, &::after{
        content: "";
        pointer-events: none;
        z-index: 3;
        position: absolute;
        height: calc(100% - 30px);
        width: 47px;
        background: linear-gradient(
            -90deg,#08080800 0%,#080808 72%
        );
    }
    &::after{
        right: 0;
        background: linear-gradient(
            90deg,#08080800 0%,#080808 72%
        );
    }
`

export const Carousel = styled.div.attrs({
    className: "carousel-episodes"
})`
    display: flex;
    width: 100%;
    height: 273px;
    align-items: flex-end;
    overflow-x: scroll;
    cursor: grab;

    &:active, *:active{
        cursor: grabbing;
    }

    .episode-card {
        min-width: 350px;
        margin: 50px 15px 66px 15px;
        &:first-child{ margin-left: 35px; }
        &:last-child{ margin-right: 35px; }
    }

    &::-webkit-scrollbar { height: 2px; }
    &::-webkit-scrollbar-track { background: #262626; }
    &::-webkit-scrollbar-thumb { background:#8a8a8a; }
    &::-webkit-scrollbar-thumb:hover { background: #8a8a8a; }

    @media(max-width: 600px){
        margin: 0px 10px;
        cursor: unset;
        &:active, *:active{
            cursor: unset;
        }
        .episode-card{
            min-width: 300px;
        }
        &::-webkit-scrollbar { height: 6px; }
        &::-webkit-scrollbar-thumb { background:#555; }
        &::-webkit-scrollbar-thumb:hover { background: #555; }
    }
`