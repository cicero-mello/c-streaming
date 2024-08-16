import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "watch-later-list"
})`
    display: flex;
    flex-direction: column;
    transition: 100ms linear;

    .watch-later-card {
        margin-bottom: 30px;
    }
`

export const NoCardsMessage = styled.h2`
    animation: showNoCardsMessage 550ms linear forwards;

    &::before {
        content: "Empty List";
    }

    @keyframes showNoCardsMessage {
        from {
            width: 0px;
            opacity: 0;
            filter: blur(46px);
        }
        to {
            width: 100%;
            opacity: 1;
            filter: blur(0px);
        }
    }
`
