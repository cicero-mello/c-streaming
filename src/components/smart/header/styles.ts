import styled from "styled-components"

export const Component = styled.header.attrs({
    className: "header"
})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 24px 101px;

    transition: 300ms ease-in-out;

    .user-name {
        opacity: 100%;
        transition: 300ms ease-in-out;
    }

    .border-button {
        white-space: nowrap;
        padding: 6px 13px 11px 13px;
        font-size: 29px;
        border-color: #FFFFFF;
        border-radius: 3px;
        height: 33px;
        width: 185px;
        line-height: 0px;
        overflow: hidden;
        color: white;
        transition-property: outline, width, background-color, border, color;
        transition-duration: 50ms, 300ms, 300ms;
        transition-timing-function: linear, linear, ease;
        justify-content: center;

        &::after {
            text-align: center;
            content: "C-Streaming";
        }

        &:hover {
            background-color: #FFFFFF;
            border: #090909;
            color: #090909;
        }
    }

    @media(max-width: 600px){
        padding: 24px 60px;

        .user-name {
            font-size: 1px;
            opacity: 0;
            margin: 0;
        }

        .border-button{
            width: 45px;
            &::after{ content: "C"; }
        }
    }

    @media(max-width: 440px){
        padding: 24px;
    }
`
