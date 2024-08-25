import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "banner-navigation"
})`
    display: flex;
    justify-content: center;
    margin: 16px 16px 20px 16px;

    svg {
        width: 28px;
        height: 28px;
        padding: 0px 2px;
        cursor: pointer;
        transition: 50ms linear;
        fill: #090909;

        &[aria-checked="true"]{
            fill: #7E7E7E;
        }

        &[aria-checked="false"]:hover{
            path{ stroke: white; }
        }
    }
`
