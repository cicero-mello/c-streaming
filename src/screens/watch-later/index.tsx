import React, { FC } from "react"
import { Line, WatchLaterList } from "../../components"
import * as S from "./styles"

export const WatchLater: FC = () => (
    <S.Screen>
        <Line />
        <S.Title> Watch Later </S.Title>
        <WatchLaterList />
    </S.Screen>
)
