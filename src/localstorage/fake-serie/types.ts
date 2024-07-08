export interface FakeSerie {
    serieID: string
    seasons: Season[]
}

export type Season = Episode[]

export interface Episode {
    id: string
    name: string
    ep: number
    season: number
    serieID: string
    wasWatched: boolean
}
