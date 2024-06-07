import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        background-color: #090909;
        overflow-y:scroll ;

        &::-webkit-scrollbar { width: 10px; }
        &::-webkit-scrollbar-track { background: #262626; }
        &::-webkit-scrollbar-thumb { background: #555; }
        &::-webkit-scrollbar-thumb:hover { background: #888; }

        * {
            box-sizing: border-box ;
            margin: 0px;
            padding: 0px;
            color: white;
            font-family: "Arsenal";
            font-weight: normal;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            -webkit-user-drag: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            -webkit-tap-highlight-color: transparent;
        }

        button {
            outline: none;
            background-color: unset;
            border: none;
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
    position: relative;
    height: 100%;
`

