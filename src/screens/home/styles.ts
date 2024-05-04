import styled, { css } from "styled-components"

const adaptativeCSS = css`
    .banner-list {
        max-height: 420px;
        transition: 400ms ease-in-out;
        overflow: hidden;
        opacity: 100%;
    }
    #first-line-home{
        transition: 400ms ease-in-out;
    }

    @media(max-width: 850px){
        .banner-list {
            max-height: 0px;
            opacity: 0%;
        }
        #first-line-home{
            margin-top: 13px;
        }
        .search-input{
            max-width: 640px;

            input, button {
                margin: 0px 60px;
            }
        }
    }

    @media(max-width: 440px){
        .search-input button {
            color: #FFFFFF00;
            width: 36px;
        }
        .search-input:has(input:focus){
            button{ color: #FFFFFF00; }
        }
    }
`

export const Home = styled.main.attrs((props: any) => ({
    className: "home-page",
    $freePointerEvents: props.$freePointerEvents || false
}))<{$freePointerEvents: boolean}>`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${({ $freePointerEvents }) => !$freePointerEvents && css`
        *{ pointer-events: none; }
    `}

    .banner-navigation{
        margin: 16px 16px 20px 16px;
    }

    ${adaptativeCSS}
`
