const LOREM = `
    Lorem ipsum dolor sit amet.
    Rem exercitationem aspernatur est delectus sint At
    laudantium dolores At maxime nesciunt sit nihil
    rerum et rerum distinctio id autem suscipit. Eos temporibus
    suscipit quo molestias fugiat aut omnis possimus et distinctio
    quis nam eligendi laudantium aut nihil saepe sed nesciunt cumque.
    Vel amet soluta ut ducimus deleniti nam fuga quia non autem
    nostrum et suscipit blanditiis et voluptas facere cum
    excepturi neque. In repellendus harum nam cupiditate culpa
    quo sint nostrum hic dolores odit rem voluptatibus ducimus
    ab veniam voluptatum aut soluta facilis. Et commodi corporis
    sed dolore molestias qui sint dolorum. In perferendis sunt sit
    dolor consequatur id voluptas inventore. Non internos fugit eos
    culpa nihil eos enim natus et minus nisi et rerum impedit. 33
    quisquam molestiae quo adipisci illo non sunt sunt.
    Hic accusamus fuga et inventore corporis eos quaerat omnis in
    molestias Quis rem neque tenetur! Qui voluptas consequatur ad
    minima consectetur eos architecto error ad natus quibusdam aut
    consequuntur quis sit sint quod cum mollitia illo. Eum blanditiis
    nihil ad molestiae voluptatem in recusandae veniam id esse iste
    qui eveniet pariatur eos laboriosam ipsam ab repellat excepturi!
    In repellat blanditiis sit architecto autem hic modi minus et
    quisquam incidunt qui velit omnis. Id Quis quam in odit odit
    et delectus blanditiis quo odit vitae ea explicabo fuga qui
    praesentium dolorum. Aut itaque incidunt eos officiis reiciendis
    ut atque enim ea unde provident aut eligendi ipsum nam molestiae
    natus et voluptatem nihil. Et temporibus maiores a dolore sunt
    et rerum quia et ipsum molestiae eos nulla reiciendis. Aut exercitationem
    quia eum provident quisquam eos placeat galisum non maiores totam
    ut beatae molestiae sit animi sint. Et maxime veniam ex natus
    galisum aut perspiciatis corporis est natus sapiente. Non quaerat
    doloremque ea molestiae ducimus qui consequatur aperiam. Eum
    facilis tenetur qui consectetur cupiditate aut dignissimos quia
    est quia excepturi. Et saepe ipsa ab galisum odio aut quisquam
    deleniti cum architecto placeat. Ut omnis vero ut consectetur
    velit ex repellat facere cum facilis vitae aut alias quaerat.
    Sit natus aperiam et omnis facilis in itaque quos et quia sapiente
    quo quia quidem ex labore suscipit non omnis eligendi.
`.replace(/\n/g, " ").replace(/\s+/g, " ").trim()

const getRandomWordPosition = (strSplited: string[]): number => {
    let wordPosition = Math.floor(Math.random() * (strSplited.length - 1))
    if(strSplited[wordPosition] === " ") return wordPosition + 1
    return wordPosition
}

const addUpercaseFirstLetter = (str: string): string => (
    str.charAt(0).toLocaleUpperCase() + str.slice(1)
)

const applyFinalDotRule = (str: string): string => {
    if(str[str.length -1] === ".") return str
    if(str[str.length -1] === ",") return str.slice(0, -1) + "."
    if(str.includes(".")) return str + "!"
    return str + "."
}

export const randomLoremWords = (numberOfWords?: number): string => {
    const loremWordsList = LOREM.split(" ")
    const totalWords = numberOfWords ?? 3 + Math.floor(Math.random() * 4)
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

    return applyFinalDotRule(addUpercaseFirstLetter(wordsResponseList.join(" ")))
}
