import React, { FunctionComponent, useEffect, useState } from "react"

import { PageProps } from "gatsby"
import { PageMediaProps } from "./type"
import {  useNavigation } from "../../hooks"
import { PATHS } from "../../paths"
import { createPageMedia } from "./core"
import * as S from "./styles"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { useMediaStore } from "../../stores"
import { Banner, Footer, SearchInput, Line, PosterList } from "../../components"

export const Home: FunctionComponent<PageProps> = ({ data }) => {
    const medias = useMediaStore((state) => state.medias)
    console.log(medias)

    const { navigate } = useNavigation()
    const [pageMedia, setPageMedia] = useState<PageMediaProps>()

    useEffect(() => {
        const newPageMedia = createPageMedia(data)
        if(newPageMedia) setPageMedia(newPageMedia)
        // console.log(medias)
    }, [data, medias])

    return (
        <S.Home>
            {pageMedia && <>
                <Banner />
                <Line id="first-line-home"/>
                <SearchInput />
                <Line />
                <PosterList
                    titleText="Animes"
                    posters={pageMedia.postersAnimes}
                    buttonText="See All Animes"
                    buttonAction={() => navigate(PATHS.SEARCH, { searchType: "anime"})}
                />
                <Line className="can-hide"/>
                <PosterList
                    titleText="Movies"
                    posters={pageMedia.postersMovies}
                    buttonText="See All Movies"
                    buttonAction={() => navigate(PATHS.SEARCH, { searchType: "movie"})}
                />
                <Line className="can-hide"/>
                <PosterList
                    titleText="Series"
                    posters={pageMedia.postersSeries}
                    buttonText="See All Series"
                    buttonAction={() => navigate(PATHS.SEARCH, { searchType: "serie"})}
                />
                <Line className="can-hide"/>
                <Footer />
            </>}
        </S.Home>
    )
}
