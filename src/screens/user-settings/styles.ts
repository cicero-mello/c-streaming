import styled from "styled-components"

export const Component = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 13px;
    margin-bottom: 64px;
`

export const TopSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 65px 24px 90px 24px;

    > svg {
        align-self: start;
        margin: 28px 40px 0px 0px;
    }

    @media (max-width: 600px){
        flex-direction: column;
        padding: 46px 24px 90px 24px;
        > svg {
            align-self: center;
            margin: 0px 0px 28px 0px;
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 342px;
    transition: 100ms linear;

    > *:not(:last-child) {
        margin-bottom: 18px;
    }

    > :last-child {
        margin-top: 6px;
        align-self: end;
    }

    @media (max-width: 505px){
        max-width: 100%;
        .generic-text-input{
            max-width: 100%;
        }
    }

    @media (max-width: 316px){
        .border-button {
            width: 100%;
        }
    }
`

export const BottomSection = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0px 24px;
    gap: 20px 33px;

    @media (max-width: 505px){
        .border-button {
            width: 100%;
        }
    }
`
