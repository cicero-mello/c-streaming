import React, { FunctionComponent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as Screens from "../screens"

const NotFoundPage: FunctionComponent<PageProps> = () => <Screens.Home />

export default NotFoundPage
export const Head: HeadFC = () => <title>Not found</title>
