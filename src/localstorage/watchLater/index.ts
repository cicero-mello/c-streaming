export const get = (id: string):boolean => (
    localStorage.getItem("wl" + id) === "true"
)

export const set = (id: string, watchLater: boolean) => {
    localStorage.setItem("wl" + id, watchLater ? "true" : "false")
}
