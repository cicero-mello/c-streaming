// import { useLayoutEffect, useState } from "react"
// import { useNavigation } from "../../../hooks"
// import { customLocalStorage, HistoryItem } from "../../../stores"
// import { getEpisodeByIDs } from "../../../stores/serie"
// import { PATHS } from "../../../paths"
// // import { getMediaById } from "../../../shared/media"
// import { PageHistoryCard, PageAnimations, UsePageData } from "./types"
// import { getRandomID } from "../../../shared/utils"

// export const usePageData = (
//     animations: PageAnimations
// ): UsePageData => {
//     const [historyCards, setHistoryCards] = useState<PageHistoryCard[]>([])
//     const { navigate } = useNavigation()

//     const historyItemToHistoryCard = (
//         historyItem: HistoryItem
//     ):PageHistoryCard => {
//         const media = getMediaById(historyItem.mediaID)
//         const episode = (!!historyItem?.episodeID ?
//             getEpisodeByIDs(
//                 historyItem.mediaID, historyItem.episodeID
//             ) : undefined
//         )

//         const clickActionHistoryCard = () => {
//             const { mediaID, episodeID } = historyItem
//             if(media?.type === "movie"){
//                 navigate(PATHS.MOVIE, { mediaID, episodeID })
//                 return
//             }
//             navigate(PATHS.SERIES, { mediaID, episodeID })
//         }

//         const closeActionHistoryCard = async () => {
//             const currentHistory = customLocalStorage.getHistory()
//             const isTheLastCardsToClose = currentHistory.length === 1
//             if(isTheLastCardsToClose) {
//                 await animations.onEveryHistoryCardWasRemoved()
//             }

//             customLocalStorage.removeMediaFromHistory(historyItem)
//             setHistoryCards(old => old.filter(card => !(
//                 card.props.mediaName === media?.name &&
//                 card.props.episode === episode
//             )))
//         }

//         return {
//             props: {
//                 mediaName: media?.name ?? "",
//                 episode: episode,
//                 closeAction: () => closeActionHistoryCard(),
//                 clickAction: () => clickActionHistoryCard(),
//             },
//             key: getRandomID()
//         }
//     }

//     const clearAllHistory = async () => {
//         await animations.clearAllHistory()
//         customLocalStorage.clearAllHistory()
//         setHistoryCards([])
//     }

//     useLayoutEffect(() => {
//         const history = customLocalStorage.getHistory()
//         const historyCards = history.map(
//             historyItem => historyItemToHistoryCard(historyItem)
//         )
//         setHistoryCards(historyCards)
//     }, [])

//     return {
//         historyCards: historyCards,
//         clearAllHistory: clearAllHistory
//     }
// }
