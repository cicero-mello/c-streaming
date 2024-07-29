import styled, { css } from "styled-components"

export const Screen = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    margin-bottom: 64px;
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100%; */
    padding: 46px 79px;
`

export const Title = styled.h1.attrs({
    className: "page-title"
})`
    margin: 46px 24px 0px 46px;
    font-size: 37px;
`
