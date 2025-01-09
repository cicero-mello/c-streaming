import React, { FC } from "react"
import { GitHubIco } from "@icons"
import * as S from "./styles"

export const Footer: FC = () => (
    <S.Component
        tabIndex={0}
        aria-label="footer: more information:"
    >
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
