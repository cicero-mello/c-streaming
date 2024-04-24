import React, { FunctionComponent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as Screens from "../screens"

const SerieOrAnimePage: FunctionComponent<PageProps> = (props) => (
    <Screens.SerieOrAnime {...props} />
)

export default SerieOrAnimePage
export const Head: HeadFC = () => <title>C-Streaming: Serie/Anime</title>
