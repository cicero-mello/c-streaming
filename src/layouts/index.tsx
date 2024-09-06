import React, { FunctionComponent } from "react"
import { Fonts } from "./fonts"
import { PageProps } from "gatsby"
import {
    NavigationProvider, ModalsProvider,
    AriaNotificationProvider
} from "../hooks"
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
