import React, { FunctionComponent } from "react"
import * as Styled from "./styles"
import { StaticImage } from "gatsby-plugin-image"
const gatbyLogoSrc = "../../assets/images/gatsby-logo.png"
const instaLogoSrc = "../../assets/images/insta-logo.png"

export const Footer: FunctionComponent = () => (
    <Styled.Component>
        <Styled.InfoLink
            href="https://www.instagram.com/umcicero/"
            target="_blank"
        >
            <StaticImage
                className="logo-img"
                src={instaLogoSrc}
                alt="A"
            />
            <Styled.Text > @umcicero </Styled.Text>
        </Styled.InfoLink>
        <Styled.InfoLink
            href="https://www.gatsbyjs.com"
            target="_blank"
        >
            <StaticImage
                className="logo-img"
                src={gatbyLogoSrc}
                alt="A"
            />
            <Styled.Text> made with Gatsby </Styled.Text>
        </Styled.InfoLink>
    </Styled.Component>
)

