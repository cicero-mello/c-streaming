import styled from "styled-components"

export const Home = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;

    #first-line-home{
        transition: 400ms ease-in-out;
    }

    @media(max-width: 850px){
        #first-line-home{
            margin-top: 13px;
        }
    }

    @media(max-width: 660px){
        .line.can-hide{
            display: none;
        }
    }
`
