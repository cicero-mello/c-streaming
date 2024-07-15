import React, { FC } from "react"
import { PageProps } from "gatsby"
import { Line, WatchLaterCard } from "../../components"
import { usePageData } from "./core"
import * as S from "./styles"

export const WatchLater: FC<PageProps> = ({ data }) => {
    const { watchLaterCards } = usePageData(data)

    return (
        <S.Screen>
            <Line />
            <S.Title> Watch Later </S.Title>
            <S.CardsContainer>
                {watchLaterCards.map(({props, key }) =>
                    <WatchLaterCard {...props} key={key}/>
                )}
            </S.CardsContainer>
        </S.Screen>
    )
}
