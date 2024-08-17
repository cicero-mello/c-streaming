import styled, { css } from "styled-components"

export const Component = styled.main`
    display: flex;
    flex-direction: column;
    margin: 13px 0px 40px 0px;
    transition: 100ms linear;

    @media (max-width: 600px){
        margin: 14px 0px 30px 0px;

        form{
            flex-wrap: wrap-reverse;
            padding: 0px 60px;
            margin-top: 32px;

            .select-input{
                max-width: unset;
            }

            .generic-text-input{
                max-width: unset;
                margin-right: 0px;
                margin-top: 24px;
            }
        }

        .posters-wrapper{
            margin-top: 21px;
            gap: 0px 0px;
            padding: 0px 15px;
            justify-content: space-evenly;

            .poster {
                margin-left: 10px;
                margin-right: 10px;
            }
        }
    }

    @media (max-width: 440px){
        .input-zone{
            padding: 0px 24px;
        }
    }

    @media (max-width: 270px){
        .posters-wrapper{
            padding: 0px 0px;

            .poster {
                margin-left: 0px;
                margin-right: 0px;
            }
        }
    }
`

export const Form = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;
    transition: 140ms linear;
    padding: 0px 40px;
    margin-top: 43px;

    .generic-text-input{
        margin-right: 34px;
    }
`

export const MediaListWrapper = styled.section.attrs((props:any) => ({
    className: "posters-wrapper",
    $showPosters: props?.$showPosters
}))<{ $showPosters?: boolean }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 38px 3px;
    transition: 250ms ease-out;
    padding: 0px 12px;

    opacity: 1;
    margin-top: 33px;

    ${({ $showPosters }) => !$showPosters && css`
        opacity: 0;
    `}
`

export const NoMediaMessage = styled.h3`
    font-size: 24px;
    margin-top: 55px;
    color: #d5d5d5;
`
