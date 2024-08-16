import React, { FunctionComponent } from "react"
import { Fonts } from "./fonts"
import { PageProps } from "gatsby"
import { NavigationProvider, ModalsProvider, URLParamsProvider } from "../hooks"
import { QueryParamProvider } from "use-query-params"
import { ReachAdapter } from 'use-query-params/adapters/reach'
import * as S from "./styles"

const Layout: FunctionComponent<PageProps> = ({
    children
}) => (
    <S.Layout>
        <S.GlobalStyle />
        <Fonts />
        <QueryParamProvider adapter={ReachAdapter}>
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
