import styled from "styled-components"

export const HiddenSpan = styled.span`
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;

    &:focus-visible{
        outline: none;
    }
`
