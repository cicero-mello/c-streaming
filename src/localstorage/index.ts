import * as watchLater from "./watch-later"
import * as fakeSerie from "./fake-serie"
import * as history from "./history"
export * from "./fake-serie/types"

export const customLocalStorage = {
    ...watchLater,
    ...fakeSerie,
    ...history
}
