interface TimeOut { [key: string]: NodeJS.Timeout | number }
const timeOut: TimeOut = {}

/**
     * Call a function after it stops repeating at a specified time. 
     *
     * @param fn Function to be called.
     * @param time One replay wait time.
     * @param id Id of your function. Necessary if you want to use more than one debounce at the same time.
*/
export const debounce = (fn: () => void, time: number, id?: string) => {
    const timeoutId = id ?? "default-timeout-id"
    clearTimeout(timeOut[timeoutId] as number)
    timeOut[timeoutId] = setTimeout(fn, time)
}
