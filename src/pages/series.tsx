import React, { FunctionComponent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as Screens from "../screens"

const SeriesPage: FunctionComponent<PageProps> = (props) => (
    <Screens.Series {...props} />
)

export default SeriesPage
export const Head: HeadFC = () => <title>C-Streaming: Serie/Anime</title>
