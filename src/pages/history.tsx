import React, { FunctionComponent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as Screens from "../screens"

const HistoryPage: FunctionComponent<PageProps> = (props) => (
    <Screens.History {...props} />
)

export default HistoryPage
export const Head: HeadFC = () => <title>C-Streaming: History</title>
