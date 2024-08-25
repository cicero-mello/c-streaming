import { UrlState } from "../hooks";
import { objectToQueryString } from "../shared/utils";
import { MediaType } from "../stores";

export enum PATHS {
    HOME = "/",
    SEARCH = "/search",
    USER_SETTINGS = "/user-settings",
    MOVIE = "/movie",
    SERIES = "/series",
    WATCH_LATER = "/watch-later",
    HISTORY = "/history",
    ERROR = "/404"
}

export const getMediaPathByMediaType = (mediaType: MediaType): PATHS => (
    mediaType === "movie" ? PATHS.MOVIE : PATHS.SERIES
)

export const createLinkPath = (path: PATHS, params?: UrlState): string => (
    !params ? path : path + objectToQueryString(params)
)
