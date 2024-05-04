import React, { FunctionComponent } from "react"
import { Header } from "../components"
import { Fonts } from "./fonts"
import { PageProps } from "gatsby"
import { PATHS } from "../paths"
import * as Styled from "./styles"

const Layout: FunctionComponent<PageProps> = ({ children, path }) => {

    return (
        <Styled.Layout>
            <Styled.GlobalStyle />
            <Fonts />
            <Header path={path as PATHS}/>
            { children }
        </Styled.Layout>
    )
}

export default Layout
