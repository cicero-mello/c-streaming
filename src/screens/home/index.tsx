import React, { FunctionComponent } from "react"
import { PageProps } from "gatsby"
import { Banner } from "../../components"
import * as Styled from "./styles"

export const Home: FunctionComponent<PageProps> = ( { location }) => {

  return (
    <Styled.Home>
        {/* <Banner /> */}
    </Styled.Home>
  )
}

