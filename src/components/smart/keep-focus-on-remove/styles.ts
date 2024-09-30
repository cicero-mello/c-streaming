import styled from "styled-components"

export const HiddenTag = styled.p.attrs({
    className: "hidden-tag-keep-focus-on-remove"
})`
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;

    &:focus-visible{
        outline: none;
    }
`
