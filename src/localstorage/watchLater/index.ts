export const get = (id: string):boolean => (
    localStorage.getItem(id) === "true"
)

export const set = (id: string, watchLater: boolean) => {
    localStorage.setItem(id, watchLater ? "true" : "false")
}
