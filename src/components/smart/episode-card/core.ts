export const getTitleText = (
    episode: number, season?: number
): string => (
    season ?
    `SEASON ${season} | EPISODE ${episode}:` :
    `EPISODE ${episode}:`
)

export const getAriaLabel = (
    episode: number,
    season?: number,
    isNextEpisode?: boolean,
    wasWatched?: boolean
) => {
    const labelEnd = wasWatched ? " (already watched)." : ""

    if(isNextEpisode){
        return "Next Episode" + labelEnd
    }
    if(!!season) {
        return `Season ${season}, episode ${episode}:` + labelEnd
    }
    return `Episode ${episode}:` + labelEnd
}
