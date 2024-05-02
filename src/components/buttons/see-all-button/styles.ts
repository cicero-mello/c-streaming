import styled from "styled-components"

export const Button = styled.button.attrs({
    className: "see-all-button"
})`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid #8D8D8D;
    border-radius: 2px;
    padding: 5px 10px 6px 13px;
    font-size: 19px;
    color: #dcdcdc;
    color: #cccccc;
    transition: 100ms linear;

    .triangle-see-all {
        margin-left: 6px;
    }

    svg path{
        stroke: #cccccc;
    }

    &:hover{
        border-color: #cccccc;
        color: #cccccc;

        svg path{
            stroke: #cccccc;
        }
    }
`
