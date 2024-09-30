import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "media-title"
})`
    display: flex;
    flex-direction: column;
`

export const MediaTitle = styled.h1.attrs({
    className: "title",
    role: "presentation"
})`
    font-size: 37px;
    margin-left: 9px;
    width: fit-content;
`

export const MediaEpisodeName = styled.p.attrs({
    className: "media-episode-name",
    role: "presentation"
})`
    margin-left: 9px;
    color: #8D8D8D;
    font-size: 23px;
    max-width: 573px;
    width: fit-content;

    > * {
        color: #8D8D8D;
    }
`
