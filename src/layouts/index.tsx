import React, { FunctionComponent } from "react"
import { Fonts } from "./fonts"
import { PageProps } from "gatsby"
import { NavigationProvider } from "../hooks"
import * as Styled from "./styles"

const Layout: FunctionComponent<PageProps> = ({ children, path }) => {

    return (
        <Styled.Layout>
            <Styled.GlobalStyle />
            <Fonts />
            <NavigationProvider path={path}>
                { children }
            </NavigationProvider>
        </Styled.Layout>
    )
}

export default Layout
