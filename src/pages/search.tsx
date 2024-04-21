import React, { FunctionComponent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as Screens from "../screens"

const SearchPage: FunctionComponent<PageProps> = (props) => (
    <Screens.Search {...props} />
)

export default SearchPage
export const Head: HeadFC = () => <title>C-Streaming: Searching...</title>
