import styled, { css } from "styled-components"

const adaptativeCSS = css`
    transition: 300ms ease-in-out;

    .user-name {
        opacity: 100%;
        transition: 300ms ease-in-out;
    }

    @media(max-width: 600px){
        padding: 24px 60px;

        .user-name {
            font-size: 1px;
            opacity: 0;
            margin: 0;
        }

        button{
            width: 45px;
            &::after{ content: "C"; }
        }
    }

    @media(max-width: 440px){
        padding: 24px;
    }
`

export const Component = styled.header.attrs({
    className: "header"
})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 24px 101px;

    ${adaptativeCSS}
`
