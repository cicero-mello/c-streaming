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

    .border-logo-button {
        height: 33px;
        width: 185px;

        &::after {
            text-align: center;
            content: "C-Streaming";
        }
    }

    @media(max-width: 600px){
        padding: 24px 60px;

        .user-name {
            font-size: 1px;
            opacity: 0;
            margin: 0;
            padding: 0px;
        }

        .border-logo-button {
            width: 45px;
            &::after {
                content: "C";
            }
        }
    }

    @media(max-width: 440px){
        padding: 24px;
    }
`
