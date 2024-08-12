import styled from "styled-components"

export const Line = styled.div.attrs((props) => ({
    className: "line " + props.className
}))`
    width: 100%;
    height: 2px;
    background-color: #262626;
`