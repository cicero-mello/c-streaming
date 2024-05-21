import React, { FunctionComponent, useEffect, useState } from "react"
import { HomeProps } from "./type"
import { useNavigation } from "../../hooks"
import {
    BannerProps, BannerList, Line, SearchInput, PosterList, PosterProps,
    Footer
} from "../../components"
import * as media from "../../shared/media"
import * as Styled from "./styles"

export const Home: FunctionComponent<HomeProps> = ({ data }) => {
    const { showScreen } = useNavigation()
    const [bannersMediaList, setBannersMediaList] = useState<BannerProps[]>([])
    const [postersAnimeMediaList, setPostersAnimeMediaList] = useState<PosterProps[]>([])
    const [postersSerieMediaList, setPostersSerieMediaList] = useState<PosterProps[]>([])
    const [postersMovieMediaList, setPostersMovieMediaList] = useState<PosterProps[]>([])
    const [loadingData, setLoadingData] = useState<boolean>(true)

    useEffect(() => {
        const bannerGatsbyImages = media.getBannerGatsbyImages(data)
        if(bannerGatsbyImages.length <= 0) return

        const posterGatsbyImages = media.getPosterGatsbyImages(data)
        if(posterGatsbyImages.length <= 0) return

        const bannerMedia = media.createBannerMedia(bannerGatsbyImages)
        const posterMediaAnime = media.createPosterMedia("anime", posterGatsbyImages)
        const posterMediaMovie = media.createPosterMedia("movie", posterGatsbyImages)
        const posterMediaSerie = media.createPosterMedia("serie", posterGatsbyImages)

        const haveAllData = (
            bannerMedia.length > 0
            && posterMediaAnime.length > 0
            && posterMediaSerie.length > 0
            && posterMediaMovie.length > 0
        )

        if(haveAllData){
            setBannersMediaList(bannerMedia)
            setPostersAnimeMediaList(posterMediaAnime)
            setPostersSerieMediaList(posterMediaSerie)
            setPostersMovieMediaList(posterMediaMovie)

            setLoadingData(false)
            showScreen()
        }
    }, [data])

    return (
        <Styled.Home>
            {!loadingData && <BannerList banners={bannersMediaList} />}
            <Line id="first-line-home"/>
            <SearchInput onSearch={(inputValue) => console.log(inputValue)}/>
            <Line />
            {!loadingData && <PosterList
                titleText="Animes"
                posters={postersAnimeMediaList}
                buttonText="See All Animes"
                buttonAction={() => undefined}
            />}
            <Line className="can-hide"/>
            {!loadingData && <PosterList
                titleText="Movies"
                posters={postersMovieMediaList}
                buttonText="See All Movies"
                buttonAction={() => undefined}
            />}
            <Line className="can-hide"/>
            {!loadingData && <PosterList
                titleText="Series"
                posters={postersSerieMediaList}
                buttonText="See All Series"
                buttonAction={() => undefined}
            />}
            <Line className="can-hide"/>
            <Footer />
        </Styled.Home>
    )
}
