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

    while(oldArray.length){

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
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(object[key]))
        .join("&")
)

/**
     * Return a function to enable scroll.
*/
export const disableScroll = (): () => void => {
    const scrollEvent = (event: Event) => {
        event.preventDefault()
        event.stopPropagation()
    }

    window.addEventListener("scroll", scrollEvent, { passive: false })
    window.addEventListener("wheel", scrollEvent, { passive: false })
    window.addEventListener("touchmove", scrollEvent, { passive: false })

    return () => {
        window.removeEventListener("scroll", scrollEvent)
        window.removeEventListener("wheel", scrollEvent)
        window.removeEventListener("touchmove", scrollEvent)
    }
}

export const scrollPageToTop = () => new Promise((resolve) => {
    if(window.scrollY <= 0) resolve(true)

    const enableScroll = disableScroll()
    let scrollLoopAnimationId: number

    const automaticScrollLoop = (resolve: (value: unknown) => void) => {
        let scrollStep = window.scrollY / 8
        if(scrollStep <= 2) scrollStep = 2
        window.scrollBy(0, -scrollStep)

        if(window.scrollY <= 0){
            cancelAnimationFrame(scrollLoopAnimationId)
            enableScroll()
            resolve(true)
        }
        else scrollLoopAnimationId = requestAnimationFrame(
            () => automaticScrollLoop(resolve)
        )
    }

    automaticScrollLoop(resolve)
})

export const isEmailValid = (email: string | null | undefined):boolean => {
    if(!email) return false
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}

export const delay = (time: number) => new Promise((resolve) => {
    setTimeout(() => resolve(true), time)
})

export const getRandomID = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""

    for(let i = 0; i < 4; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result + Date.now()
}

export const stringIncludes = (str1: string, str2: string) => {
    return str1.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(
        str2.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    )
}
