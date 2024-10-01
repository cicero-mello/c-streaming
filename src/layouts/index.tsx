import React, { FunctionComponent } from "react"
import { NavigationProvider, ModalsProvider, AriaNotificationProvider } from "@hooks"
import { PageProps } from "gatsby"
import { Fonts } from "./fonts"
import * as S from "./styles"

const Layout: FunctionComponent<PageProps> = ({
    children
}) => (
    <S.Layout lang="en">
        <S.GlobalStyle />
        <Fonts />
        <AriaNotificationProvider>
            <NavigationProvider>
                <ModalsProvider>
                    { children }
                </ModalsProvider>
            </NavigationProvider>
        </AriaNotificationProvider>
    </S.Layout>
)

export default Layout
