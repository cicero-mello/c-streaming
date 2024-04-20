import React, { FunctionComponent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as Screens from "../screens"

const SearchPage: FunctionComponent<PageProps> = () => <Screens.Search />

export default SearchPage
export const Head: HeadFC = () => <title>Search Page</title>
