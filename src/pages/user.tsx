import React, { FunctionComponent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as Screens from "../screens"

const UserPage: FunctionComponent<PageProps> = (props) => (
    <Screens.User {...props} />
)

export default UserPage
export const Head: HeadFC = () => <title>C-Streaming: Profile</title>
