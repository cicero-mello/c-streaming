import styled from "styled-components"

export const HiddenTag = styled.p.attrs({
    className: "hidden-tag-keep-focus-on-remove",
    role: "presentation"
})`
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    z-index: -1;

    &:focus-visible{
        outline: none;
    }
`
