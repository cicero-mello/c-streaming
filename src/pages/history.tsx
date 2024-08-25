import React, { FC } from "react"
import type { HeadFC } from "gatsby"
import * as Screens from "../screens"

const HistoryPage: FC = () => (
    <Screens.History />
)

export default HistoryPage
export const Head: HeadFC = () => <title> History Page </title>
