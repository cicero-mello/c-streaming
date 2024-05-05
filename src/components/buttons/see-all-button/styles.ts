import styled from "styled-components"

export const Button = styled.button.attrs({
    className: "see-all-button"
})`
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #8D8D8D;
    border-radius: 2px;
    padding: 5px 37px 6px 13px;
    font-size: 19px;
    color: #cccccc;
    transition: 100ms linear;
    white-space: nowrap;
    overflow: hidden;

    .triangle-see-all {
        position: absolute;
        right: 8px;
    }

    svg path{
        stroke: #cccccc;
    }

    &:hover{
        border-color: #cccccc;

        svg path{
            stroke: #cccccc;
        }
    }
`
