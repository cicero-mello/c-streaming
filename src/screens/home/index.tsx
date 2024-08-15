import React, { FC } from "react"
import { Banner, Footer, SearchInput,
    Line, Posters
} from "../../components"
import * as S from "./styles"

export const Home: FC = () =>  (
    <S.Home>
        <Banner />
        <Line id="first-line-home"/>

        <SearchInput />
        <Line />

        <Posters mediaType="anime"/>
        <Line className="can-hide"/>

        <Posters mediaType="movie"/>
        <Line className="can-hide"/>

        <Posters mediaType="serie"/>
        <Line className="can-hide"/>

        <Footer />
    </S.Home>
)
