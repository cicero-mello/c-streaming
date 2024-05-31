import { EpisodeCardProps, FakeVideoProps, MediaTitleProps, SuggestionMedias } from "../../components"
import { FakeSeasons } from "../../localstorage"

export interface PageMediaProps {
    fakeVideo: FakeVideoProps
    mediaTitle: MediaTitleProps
    sinopsys: string
    suggestionMedias: SuggestionMedias[]
    nextEpisode?: EpisodeCardProps
    seasons: FakeSeasons
}
