export const getWatchLater = (mediaID: string):boolean => (
    localStorage.getItem("wl" + mediaID) === "true"
)

export const setWatchLater = (mediaID: string, watchLater: boolean) => {
    localStorage.setItem("wl" + mediaID, watchLater ? "true" : "false")
}
