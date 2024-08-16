import React, { FunctionComponent } from "react"
import { Fonts } from "./fonts"
import { PageProps } from "gatsby"
import { NavigationProvider, ModalsProvider, URLParamsProvider } from "../hooks"
import * as S from "./styles"
import { QueryParamProvider } from "use-query-params"
import { WindowHistoryAdapter } from 'use-query-params/adapters/window'

const Layout: FunctionComponent<PageProps> = ({
    children
}) => (
    <S.Layout>
        <S.GlobalStyle />
        <Fonts />
        <QueryParamProvider adapter={WindowHistoryAdapter}>
            <URLParamsProvider>
                <NavigationProvider>
                    <ModalsProvider>
                        { children }
                    </ModalsProvider>
                </NavigationProvider>
            </URLParamsProvider>
        </QueryParamProvider>
    </S.Layout>
)

export default Layout
