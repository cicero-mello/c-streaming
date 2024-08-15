import styled from "styled-components"

export const InvalidParameters = styled.main.attrs({
    className: "invalid-parameters"
})`
    width: 200px;
    height: 300px;
    background-color: red;
    &::before{
        content: "Invalid Parameters :(";
        color: white;
    }
`
