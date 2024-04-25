import styled from "styled-components"

export const Component = styled.div`
    display: flex;
    height: 350.4px;
    margin: 10px 34px;

    .gatsby-image{
        width: 337.6px;
    }
`

export const InfoAndButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(90deg, #303030, black);
    width: 100%;
    max-width: 1034px;
    padding: 44px 49.6px 29px 49.6px;
`

export const InfoWrapper = styled.div`
`

export const MediaName = styled.h5`
    max-width: 85%;
    font-weight: normal;
    white-space: nowrap;
    font-size: 37px;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Synopsis = styled.p`
    font-size: 23px;
    color: #9B9B9B;
    margin-top: 11px;
    max-height: 180px;

    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    :first-child{
        margin: 0px 18px 4px 18px;
    }
`