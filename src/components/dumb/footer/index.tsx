import React, { FunctionComponent } from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as S from "./styles"

const gatbyLogoSrc = "../../../assets/images/gatsby-logo.png"
const instaLogoSrc = "../../../assets/images/insta-logo.png"

export const Footer: FunctionComponent = () => (
    <S.Component>
        <S.InfoLink
            href="https://www.instagram.com/umcicero/"
            target="_blank"
            rel="preload"
        >
            <StaticImage
                className="logo-img"
                src={instaLogoSrc}
                alt="Instagram Logo"
            />
            <S.Text > @umcicero </S.Text>
        </S.InfoLink>
        <S.InfoLink
            href="https://www.gatsbyjs.com"
            target="_blank"
            rel="preload"
        >
            <StaticImage
                className="logo-img"
                src={gatbyLogoSrc}
                alt="Gatsby Logo"
            />
            <S.Text> made with Gatsby </S.Text>
        </S.InfoLink>
    </S.Component>
)
