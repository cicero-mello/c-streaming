import styled from "styled-components"

export const Component = styled.fieldset.attrs({
    className: "banner-navigation"
})`
    display: flex;
    justify-content: center;
    margin: 16px 16px 20px 16px;
    border: none;

    svg {
        width: 28px;
        height: 28px;
        padding: 0px 2px;
        transition: 50ms linear;
        fill: #090909;
        path {
            transition: 50ms linear;
        }
    }

    input[type="radio"]:checked + svg {
        fill: #7E7E7E;
    }

    input[type="radio"]:not(:checked):hover + svg {
        path {
            stroke: white;
        }
    }
`

export const RadioItem = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        height: 18px;
        width: 18px;
    }
`
