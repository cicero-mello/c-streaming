import React, { FunctionComponent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as Screens from "../screens"

const MoviePage: FunctionComponent<PageProps> = (props) => (
    <Screens.Movie {...props} />
)

export default MoviePage
export const Head: HeadFC = () => <title>C-Streaming: Movie</title>
