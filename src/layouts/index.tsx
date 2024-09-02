import React, { FunctionComponent } from "react"
import { Fonts } from "./fonts"
import { PageProps } from "gatsby"
import { NavigationProvider, ModalsProvider, AriaMessageProvider } from "../hooks"
import * as S from "./styles"

const Layout: FunctionComponent<PageProps> = ({
    children
}) => (
    <S.Layout lang="en">
        <S.GlobalStyle />
        <Fonts />
            <NavigationProvider>
                <AriaMessageProvider>
                    <ModalsProvider>
                        { children }
                    </ModalsProvider>
                </AriaMessageProvider>
            </NavigationProvider>
    </S.Layout>
)

export default Layout
