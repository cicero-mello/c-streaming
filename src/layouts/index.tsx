import React, { FunctionComponent, useEffect } from "react"
import { Fonts } from "./fonts"
import { PageProps } from "gatsby"
import { NavigationProvider, ModalsProvider } from "../hooks"
import * as S from "./styles"

const Layout: FunctionComponent<PageProps> = ({
    children
}) => (
    <S.Layout lang="en">
        <S.GlobalStyle />
        <Fonts />
            <NavigationProvider>
                <ModalsProvider>
                    { children }
                </ModalsProvider>
            </NavigationProvider>
    </S.Layout>
)

export default Layout
