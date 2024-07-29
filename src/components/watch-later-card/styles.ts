import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "watch-later-card"
})`
    display: flex;
    height: 195px;
    /* max-width: 760px; */

    .gatsby-image-wrapper {
        transition: 100ms linear;
        filter: grayscale(0.4);
        /* min-width: 50%; */
        max-width: 475px;
        position: relative;

        &::before, &::after {
            content: "";
            transition: 100ms linear;
            position: absolute;
            width: 25%;
            height: 100%;
            z-index: 1;
        }

        &::before {
            background: linear-gradient(to right, #090909 2%, #09090900);
        }
        &::after {
            right: 0;
            top: 0;
            background: linear-gradient(to left, #090909 2%, #09090900);
        }
    }

    &:hover {
        /* .gatsby-image-wrapper {
            filter: grayscale(0.1);
            &::before, &::after {
                width: 10%;
            }
        } */
    }
`

export const CardContent = styled.div`
    padding: 4px 0px 24px 32px;
`

export const Buttons = styled.div`
    display: flex;
    margin-top: 14px;
    gap: 18px;
    align-items:end ;
    height: min-content;

    .border-button {
        font-size: 17px;
        padding: 4px 10px;
    }

    .color-button {
        color: #ededed;
        /* background-color: #3b6323; */
        &:hover{
            /* background-color: #4A7D2B; */
        }
    }
`

export const Title = styled.h2`
    font-size: 27px;
    color: #ededed;
`
