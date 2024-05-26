const LOREM = `
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit,
    sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit
    in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt
    mollit anim id est laborum.
`.replace(/\n/g, " ").replace(/\s+/g, " ").trim()

const getRandomWordPosition = (strSplited: string[]): number => {
    let wordPosition = Math.floor(Math.random() * (strSplited.length - 1))
    if(strSplited[wordPosition] === " ") return wordPosition + 1
    return wordPosition
}

const addUpercaseFirstLetter = (str: string): string => (
    str.charAt(0).toLocaleUpperCase() + str.slice(1)
)

const finalDotRule = (str: string): string => {
    if(str[str.length -1] === ".") return str
    if(str[str.length -1] === ",") return str.slice(0, -1) + "."
    if(str.includes(".")) return str + "!"
    return str + "."
}

export const randomLoremWords = (numberOfWords?: number): string => {
    const loremWordsList = LOREM.split(" ")
    const totalWords = numberOfWords ?? 4 + Math.floor(Math.random() * 2)
    const randomWordPosition = getRandomWordPosition(loremWordsList)
    const thereWillBeSuficientWordsToComplete = loremWordsList[randomWordPosition + totalWords - 1]
    const wordsResponseList: string[] = []

    const pushOnlyLastWordsOnWordsReponseList = () => {
        for(let i = 0; i < totalWords ; i++) wordsResponseList.push(
            loremWordsList[loremWordsList.length - totalWords + i]
        )
    }

    const pushRandomWordsSequencyOnWordsReponseList = () => {
        for(let i = 0; i < totalWords ; i++) wordsResponseList.push(
            loremWordsList[randomWordPosition + i]
        )
    }

    if(!thereWillBeSuficientWordsToComplete) pushOnlyLastWordsOnWordsReponseList()
    else pushRandomWordsSequencyOnWordsReponseList()

    return finalDotRule(addUpercaseFirstLetter(wordsResponseList.join(" ")))
}
