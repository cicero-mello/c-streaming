import styled from "styled-components"

export const Component = styled.div`
    .border-button {
        position: relative;
        padding: 5px 37px 6px 13px;
        color: #cccccc;
        white-space: nowrap;

        .triangle-see-all {
            transition: 100ms linear;
            position: absolute;
            right: 8px;
        }

        svg path{
            stroke: #cccccc;
        }

        &:hover, &:focus-visible {
            border-color: #cccccc;
        }
    }
`
