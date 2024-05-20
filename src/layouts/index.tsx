import React, { FunctionComponent } from "react"
import { Header } from "../components"
import { Fonts } from "./fonts"
import { PageProps } from "gatsby"
import { PATHS } from "../paths"
import { NavigationProvider } from "../hooks"
import * as Styled from "./styles"

const Layout: FunctionComponent<PageProps> = ({ children, path }) => {

    return (
        <Styled.Layout>
            <Styled.GlobalStyle />
            <Fonts />
            <NavigationProvider>
                <Header path={path as PATHS}/>
                { children }
            </NavigationProvider>
        </Styled.Layout>
    )
}

export default Layout
