import { Episode } from "../../../stores"

export const getEpisodeAriaLabel = (episode: Episode) => (
    `Episode ${episode?.ep}, ` +
    `Season ${episode.season}: ` +
    episode.name
)

export const getEpisodeNameShowed = (episode: Episode) => (
    "S." + episode.season +
    " | Ep." + episode.ep +
    ": " + episode.name
)
