import React, { FunctionComponent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as Screens from "../screens"

const IndexPage: FunctionComponent<PageProps> = () => <Screens.Home />

export default IndexPage
export const Head: HeadFC = () => <title> C-Streaming </title>
