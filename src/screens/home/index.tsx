import React, { FunctionComponent, useEffect, useState } from "react"
import { BannerList, Line, SearchInput, PosterList, Footer } from "../../components"
import { PageProps } from "gatsby"
import { PageMediaProps } from "./type"
import { useNavigation } from "../../hooks"
import { PATHS } from "../../paths"
import { createPageMedia } from "./core"
import * as S from "./styles"

export const Home: FunctionComponent<PageProps> = ({ data }) => {
    const { navigate } = useNavigation()
    const [pageMedia, setPageMedia] = useState<PageMediaProps>()

    useEffect(() => {
        const newPageMedia = createPageMedia(data)
        if(newPageMedia) setPageMedia(newPageMedia)
    }, [data])

    return (
        <S.Home>
            {pageMedia && <>
                <BannerList banners={pageMedia.banners} />
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
