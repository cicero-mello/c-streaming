import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "poster-list"
})`
    display: flex;
    flex-direction: column;
    padding: 30px 45px;
`

export const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 14px;
`

export const Title = styled.h2`
    font-weight: normal;
    color: #F1F1F1;
`

export const DownSection = styled.div`
    display: flex;
    justify-content: space-between;

    .triangle-next-button:last-child{
        transform: rotate(180deg);
    }
`

export const PostersCarousel = styled.div`
    display: flex;
    width: calc(100% - 80px);
    overflow-x: hidden;
`
