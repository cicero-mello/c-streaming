import React, { FC } from "react"
import type { HeadFC } from "gatsby"
import * as Screens from "@screens"

const HistoryPage: FC = () => (
    <Screens.History />
)

export default HistoryPage

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <title> History Page </title>
    </>
)
