import React, { FunctionComponent } from "react"
import { LayoutProps } from "./types"
import { Navbar } from "../components"
import * as Styles from "./styles"

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {

    return (
        <Styles.Layout>
            <Styles.GlobalStyle />
            <Navbar />
            { children }
        </Styles.Layout>
    )
}

export default Layout