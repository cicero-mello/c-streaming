import * as watchLater from "./watch-later"
import * as serie from "./serie"
import * as history from "./history"
export * from "./serie/types"
export * from "./history/types"
export * from "./watch-later/types"

export const customLocalStorage = {
    ...watchLater,
    ...serie,
    ...history
}
