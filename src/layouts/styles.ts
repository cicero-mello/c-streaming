import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "Arsenal";
        src: url("../assets/fonts/Arsenal-Regular.ttf");
    }

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
            font-family: Arsenal;
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

