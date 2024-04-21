import React, { FunctionComponent } from "react"
import { UserMenuProps } from "./types"
import { UserIco } from "../../assets/icons"
import { navigate } from "gatsby"
import { PATHS } from "../../paths"
import * as Styles from "./styles"

export const UserMenu: FunctionComponent<UserMenuProps> = ({
    ...rest
}) => {
    return (
        <Styles.Component {...rest}>
            <Styles.UserName> user-lorem </Styles.UserName>
            <UserIco />
        </Styles.Component>
    )
}
