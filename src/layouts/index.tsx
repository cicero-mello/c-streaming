import React, { FunctionComponent } from "react"
import { Fonts } from "./fonts"
import { PageProps } from "gatsby"
import { NavigationProvider, ModalsProvider } from "../hooks"
import * as Styled from "./styles"

const Layout: FunctionComponent<PageProps> = ({ children, path }) => {

    return (
        <Styled.Layout>
            <Styled.GlobalStyle />
            <Fonts />
            <NavigationProvider path={path}>
                <ModalsProvider>
                    { children }
                </ModalsProvider>
            </NavigationProvider>
        </Styled.Layout>
    )
}

export default Layout
