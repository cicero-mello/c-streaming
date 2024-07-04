import React, { FunctionComponent, useState } from "react"
import { type PageProps } from "gatsby"
import { BorderButton, GenericTextInput, HistoryCard, Line } from "../../components"
import { scrollPageToTop } from "../../shared/utils"
import * as S from "./styles"

export const History: FunctionComponent<PageProps> = () => {
    const [isHistoryClear, setIsHistoryClear] = useState(false)
    const [isPageOnTopWithNoCards, setIsPageOnTopWithNoCards] = useState(false)
    const [isAllCardsClosed, setIsAllCardsClosed] = useState(false)

    const clearHistory = async () => {
        setIsHistoryClear(true)
        setTimeout(() => setIsAllCardsClosed(true), 800)
        await scrollPageToTop()
        setIsPageOnTopWithNoCards(true)
    }

    return (
        <S.Component>
            <Line />
            <S.Title> History </S.Title>
            <S.ContentWrapper>
                <S.HistoryClearMessage
                    $show={isAllCardsClosed && isPageOnTopWithNoCards}
                >
                    Your history is already clear
                </S.HistoryClearMessage>
                <S.CardsWrapper
                    $closeAllCards={isHistoryClear}
                    $removeHeight={isPageOnTopWithNoCards}
                >
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor asd asd asd asd asd "
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’ (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        // season={2}
                        // ep={4}
                        // epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />

    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor asd asd asd asd asd "
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’ (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        // season={2}
                        // ep={4}
                        // epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor asd asd asd asd asd "
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’ (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        // season={2}
                        // ep={4}
                        // epName="Sit amet dolor"
                    />
                    <HistoryCard
                        mediaName="JoJo’S Bizarre Adventure (2012)"
                        season={2}
                        ep={4}
                        epName="Sit amet dolor"
                    />
                </S.CardsWrapper>
                <S.ActionsWrapper>
                    <GenericTextInput
                        label="Search"
                    />
                    <BorderButton
                        $text="Clear All History"
                        $theme="red"
                        disabled={isPageOnTopWithNoCards}
                        onClick={clearHistory}
                    />
                </S.ActionsWrapper>
            </S.ContentWrapper>
        </S.Component>
    )
}
