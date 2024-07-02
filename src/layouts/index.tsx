import React, { FunctionComponent } from "react"
import { Fonts } from "./fonts"
import { PageProps } from "gatsby"
import { NavigationProvider, ModalsProvider } from "../hooks"
import * as S from "./styles"

const Layout: FunctionComponent<PageProps> = ({
    children, path
}) => (
    <S.Layout>
        <S.GlobalStyle />
        <Fonts />
        <NavigationProvider path={path}>
            <ModalsProvider>
                { children }
            </ModalsProvider>
        </NavigationProvider>
    </S.Layout>
)

export default Layout
