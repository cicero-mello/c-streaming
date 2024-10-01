import React, { FunctionComponent } from "react"
import { PageProps } from "gatsby"
import { Error } from "@components"

export const NotFound: FunctionComponent<PageProps> = () => (
    <Error errorCode="404"/>
)
