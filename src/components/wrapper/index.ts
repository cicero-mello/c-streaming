import styled from "styled-components"

export const Wrapper = styled.div.attrs((props: any) => ({
    className: "wrapper",
    $direction: props?.$direction ?? "row"
}))<{ $direction?: "row" | "column" }>`
    display: flex;
    flex-direction: ${({ $direction }) => $direction};
`
