import React, { FunctionComponent } from "react"
import * as Styled from "./styles"
import { Link } from "gatsby"

export const Home: FunctionComponent = () => {

  return (
    <Styled.Home>
        <Link to="/search">clica porra</Link>
    </Styled.Home>
  )
}

