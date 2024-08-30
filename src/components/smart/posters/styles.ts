import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "posters"
})`
    display: flex;
    flex-direction: column;
    padding: 30px 45px 20px 45px;
    transition: 200ms linear;

    .border-button {
        max-width: 200px;
        &::before{
            position: absolute;
            transition: 100ms;
            content: "See All";
            color: #08080800;
        }
    }

    @media(max-width: 660px){
        padding: 30px 0px 0px 0px;
        transition: 200ms linear;

        .poster-list-top-section {
            padding: 0px 54px;
        }
        .triangle-next-button {
            display: none;
        }
    }

    @media(max-width: 600px){
        .border-button{
            color: #08080800;
            max-width: 100px;
            &::before{
                color: #cccccc;
            }
        }
    }

    @media(max-width: 440px){
        .poster-list-top-section{
            padding: 0px 24px;
        }
    }
`

export const TopSection = styled.div.attrs({
    className: "poster-list-top-section"
})`
    display: flex;
    justify-content: space-between;
    padding: 0px 14px;
    margin-bottom: 15px;
    transition: 100ms linear;
`

export const Title = styled.h2.attrs({
    className:"title-poster-list"
})`
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
