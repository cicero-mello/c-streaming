import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "content-suggestions"
})`
    display: flex;
    align-items: center;

    max-width: 880px;
    width: 100%;
    justify-content: space-between;
`

export const Text = styled.h1.attrs({
    className: "suggestion-text"
})`
    font-weight: normal;
    font-size: 28px;
    /* color: #8D8D8D; */
`

export const SuggestionsWrapper = styled.div`
    display: flex;
    align-items: center;
    /* padding: 24px; */
    /* margin-left: 100px; */

    button:first-child{
        transform: rotate(180deg);
    }
`

export const Button = styled.button`
    cursor: pointer;
`

export const ImageWrapper = styled.div`
    display: flex;
    max-width: 330px;
    max-height: 185px;
    overflow: hidden;
    margin: 0px 12px;

    img{
        filter: grayscale(0.5);
    }
`