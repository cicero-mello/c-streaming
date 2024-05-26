import * as watchLater from "./watch-later"
import * as fakeEpisodes from "./fake-episodes"
export * from "./fake-episodes/types"

export const customLocalStorage = {
    ...watchLater,
    ...fakeEpisodes
}
