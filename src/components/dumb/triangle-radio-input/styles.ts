import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "triangle-radio-input-wrapper"
})`
    padding: 0px 2px;
    cursor: pointer;

    input { display: none; }

    svg {
        fill: #090909;
        transition: 200ms linear;
    }

    &:has(input:checked){
        svg{ fill: #7E7E7E; }
    }

    &:hover:not(:has(input:checked)){
        path{ stroke: white; }
    }
`
