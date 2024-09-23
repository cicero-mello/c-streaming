export interface Serie {
    serieId: string
    seasons: Season[]
}

export type Season = Episode[]

export interface Episode {
    id: string
    name: string
    ep: number
    season: number
}


export type SeasonLocalStorage = EpisodeLocalStorage[]
export type EpisodeLocalStorage = Omit<Episode, "season" | "ep">
export interface SerieLocalStorage {
    serieId: string
    seasons: SeasonLocalStorage[]
}

export interface GetNextEpisodeParams {
    episode: Episode
    isNextEpisodeInAnotherSeason?: boolean
}
