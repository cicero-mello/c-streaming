import React, { FC } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { GitHubIco } from "../../../assets/icons"
import * as S from "./styles"

const instaLogoSrc = "../../../assets/images/insta-logo.png"

export const Footer: FC = () => (
    <S.Component
        tabIndex={0}
        role="presentation"
        aria-label="footer: more information:"
    >
        <S.InfoLink
            href="https://www.instagram.com/umcicero/"
            target="_blank"
            rel="preload"
            aria-label="Instagram: @umcicero"
        >
            <StaticImage
                className="instagram-logo"
                src={instaLogoSrc}
                alt="Instagram Logo"
            />
            <S.Text > @umcicero </S.Text>
        </S.InfoLink>
        <S.InfoLink
            href="https://github.com/cicero-mello/c-streaming"
            target="_blank"
            rel="preload"
            aria-label="GitHub: source code"
        >
            <GitHubIco />
            <S.Text> source code </S.Text>
        </S.InfoLink>
    </S.Component>
)
