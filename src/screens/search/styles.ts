import styled, { css } from "styled-components"

export const WINDOW_MAX_WIDTH_TO_VERTICAL_LAYOUT = 600

export const Component = styled.main`
    display: flex;
    flex-direction: column;
    margin: 13px 0px 40px 0px;
    transition: 100ms linear;

    @media (max-width: ${WINDOW_MAX_WIDTH_TO_VERTICAL_LAYOUT + "px"}){
        margin: 14px 0px 30px 0px;

        form {
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

        .posters-wrapper {
            margin-top: 48px;
            gap: 14px;
            padding: 0px 24px;
            justify-content: space-evenly;
        }
    }

    @media (max-width: 440px){

        form {
            padding: 0 24px;
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

export const PostersWrapper = styled.section.attrs(({
    className: "posters-wrapper"
}))
<{ $showPosters?: boolean }>`
${({ $showPosters }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    transition: 250ms ease-out;
    padding: 0px 12px;
    margin-top: 58px;
    opacity: 1;

    ${!$showPosters && css`
        opacity: 0;
    `}
`}`

export const NoMediaMessage = styled.p`
    font-size: 24px;
    margin-top: 55px;
    color: #d5d5d5;
`
