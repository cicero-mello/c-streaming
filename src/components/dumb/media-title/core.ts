import { Episode } from "../../../stores"

export const getEpisodeAriaLabel = (episode: Episode) => (
    `Season ${episode.season}: ` +
    `Episode ${episode?.ep}, ` +
    episode.name
)

export const getEpisodeNameShowed = (episode: Episode) => (
    "S." + episode.season +
    " | Ep." + episode.ep +
    ": " + episode.name
)
