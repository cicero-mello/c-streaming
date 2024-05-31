export type FakeSeasons = Episode[][]

export interface Episode {
    name: string
    wasWatched: boolean
}

export interface EpisodeInfo extends Episode{
    ep: number,
    season: number
}
