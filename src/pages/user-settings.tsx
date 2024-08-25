import React, { FunctionComponent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as Screens from "../screens"

const UserSettingsPage: FunctionComponent<PageProps> = (props) => (
    <Screens.UserSettings {...props} />
)

export default UserSettingsPage
export const Head: HeadFC = () => <title> User Settings </title>
