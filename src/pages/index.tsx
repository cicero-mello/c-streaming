import React, { FunctionComponent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as Screens from "../screens"

const IndexPage: FunctionComponent<PageProps> = (props) => (
    <Screens.Home {...props}/>
)

export default IndexPage
export const Head: HeadFC = () => <title> C-Streaming </title>
