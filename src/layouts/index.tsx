import React, { FunctionComponent } from "react"
import { LayoutProps } from "./types"
import { Header } from "../components"
import * as Styles from "./styles"
import { Fonts } from "./fonts"
import { PageProps } from "gatsby"
import { PATHS } from "../paths"

const Layout: FunctionComponent<PageProps> = ({ children, path }) => {

    return (
        <Styles.Layout>
            <Styles.GlobalStyle />
            <Fonts />
            <Header path={path as PATHS}/>
            { children }
        </Styles.Layout>
    )
}

export default Layout