import React, { FunctionComponent } from "react"
import { ButtonBorder } from "../button-border"
import * as Styled from "./styles"
import { UserMenu } from "../user-menu"

export const Navbar: FunctionComponent = () => {
    return (
        <Styled.Component>
            <ButtonBorder text="C-Streaming" />
            <UserMenu />
        </Styled.Component>
    )
}
