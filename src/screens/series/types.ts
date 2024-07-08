import {
    EpisodeCardProps, EpisodeCardsProps,
    FakeVideoProps, MediaTitleProps, SuggestionMedias
} from "../../components"

export interface PageMediaProps {
    fakeVideo: FakeVideoProps
    mediaTitle: MediaTitleProps
    sinopsys: string
    suggestionMedias: SuggestionMedias[]
    nextEpisode?: EpisodeCardProps
    listEpisodeCards: EpisodeCardsProps[]
    episodeID: string
}
