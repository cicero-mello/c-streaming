import { PageCards, UsePageData } from "./types"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { useLayoutEffect, useState } from "react"
import { customLocalStorage, WatchLater } from "../../../localstorage"
import { useNavigation } from "../../../hooks"
import { PATHS } from "../../../paths"
import { getRandomID } from "../../../shared/utils"
import * as media from "../../../shared/media"

export const usePageData = (
    data: object
): UsePageData => {
    const { navigate } = useNavigation()
    const [watchLaterCards, setWatchLaterCards] = useState<PageCards[]>([])

    const watchLaterListToWatchLaterCards = (
        watchLater: WatchLater[]
    ): PageCards[] => {
        const images = media.getBannerGatsbyImages(data)

        const cards: PageCards[] = watchLater.map(item => {
            const key = getRandomID()
            const itemMedia = media.getMediaById(item.id)
            const image = images.find(
                image => image.name === itemMedia?.imageName
            )?.childImageSharp.gatsbyImageData

            const goToMediaPage = () => {
                if(itemMedia?.type === "movie") {
                    navigate(PATHS.MOVIE, {mediaID: item.id})
                }
                else navigate(PATHS.SERIES, {mediaID: item.id})
            }

            const removeCard = () => {
                customLocalStorage.removeWatchLater(item.id)
                setWatchLaterCards(
                    cards => cards.filter(card => card.key != key)
                )
            }

            return {
                key: key,
                props: {
                    image: image as IGatsbyImageData,
                    title: itemMedia?.name ?? "",
                    onGoWatch: goToMediaPage,
                    onRemove: removeCard
                }
            }
        })

        return cards
    }

    useLayoutEffect(() => {
        const watchLaterList = customLocalStorage.getAllWatchLater()
        const newWatchLaterCards = watchLaterListToWatchLaterCards(watchLaterList)
        setWatchLaterCards(newWatchLaterCards)
    }, [])

    return {
        watchLaterCards: watchLaterCards
    }
}
