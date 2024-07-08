export interface Serie {
    serieID: string
    seasons: Season[]
}

export type Season = Episode[]

export interface Episode {
    id: string
    name: string
    ep: number
    season: number
    wasWatched: boolean
}


export type SeasonLocalStorage = EpisodeLocalStorage[]
export type EpisodeLocalStorage = Omit<Episode, "season" | "ep">
