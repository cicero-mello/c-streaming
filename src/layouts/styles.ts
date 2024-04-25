import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        background-color: #090909;

        * {
            box-sizing: border-box ;
            margin: 0px;
            padding: 0px;
            color: white;
            font-family: "Arsenal", math;
        }

        #gatsby-focus-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            > :first-child {
                width: 100%;
                max-width: 1440px;
            }
        }
    }
`


export const Layout = styled.div.attrs({ className: "layout" })`

`

