import * as watchLater from "./watch-later"
import * as fakeEpisodes from "./fake-episodes"
import * as history from "./history"
export * from "./fake-episodes/types"

export const customLocalStorage = {
    ...watchLater,
    ...fakeEpisodes,
    ...history
}
