import React, { FunctionComponent, createContext, useContext } from "react"
import { QueryParamProvider, StringParam, useQueryParams } from "use-query-params"
import { WindowHistoryAdapter } from 'use-query-params/adapters/window'
import { SetParam, URLParams, URLParamsContextProps } from "./types"
import { useForceUpdate } from "../use-force-update"

const URLParamsContext = createContext<URLParamsContextProps>([
    {}, () => {}
])

export const useURLParams = () => useContext(URLParamsContext)

export const URLParamsProvider: FunctionComponent<any> = ({
    children
}) => {
    const forceUpdate = useForceUpdate()
    const [query, setQuery] = useQueryParams({
        mediaID: StringParam,
        episodeID: StringParam,
        searchText: StringParam,
        searchType: StringParam
    })

    const setParam: SetParam = (key, value) => {
        setQuery({[key]: value})

        forceUpdate() // Resolving a problem (probably) caused
        // by default Gatsby router + use-query-params
    }

    return (
        <QueryParamProvider adapter={WindowHistoryAdapter}>
            <URLParamsContext.Provider
                value={[
                    query as URLParams,
                    setParam
                ]}
            >
                {children}
            </URLParamsContext.Provider>
        </QueryParamProvider>
    )
}
