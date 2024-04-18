import React, { FunctionComponent } from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as Styled from "../styles"
import { Banner, Header } from "../components"
import { Link } from "gatsby"

const IndexPage: FunctionComponent<PageProps> = () => {

  return (
    <Styled.Main>
        <Header />
        <Banner />
        <Link to="/search">clica porra</Link>
    </Styled.Main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
    <>
        <Styled.GlobalBody />
        <title> C-Streaming </title>
    </>
)
