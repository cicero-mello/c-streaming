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

export const shuffle = (array: any[]): any[] => {
    const oldArray = [...array]
    const newArray = []
    let randomIndexItemOfOldArray

    while (oldArray.length) {

        randomIndexItemOfOldArray = Math.floor(
            Math.random() * oldArray.length
        )

        newArray.push(oldArray[randomIndexItemOfOldArray])
        oldArray.splice(randomIndexItemOfOldArray, 1)
    }

    return newArray
}

export const objectToQueryString = (object: any): string => (
    "?" + Object.keys(object)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(object[key]))
        .join('&')
)


export const scrollPageToTop = () => new Promise((resolve) => {
    let scrollLoopAnimationId: number

    const scrollLoop = (resolve: (value: unknown) => void) => {
        const scrollStep = window.scrollY / 8
        window.scrollBy(0, -scrollStep)

        if(window.scrollY <= 0){
            cancelAnimationFrame(scrollLoopAnimationId)
            resolve(true)
        }
        else scrollLoopAnimationId = requestAnimationFrame(() => scrollLoop(resolve))
    }

    scrollLoop(resolve)
})

export const isEmailValid = (email: string | null | undefined):boolean => {
    if(!email) return false
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}
