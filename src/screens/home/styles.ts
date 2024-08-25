import styled from "styled-components"

export const Home = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;

    #first-line-home{
        transition: 400ms ease-in-out;
    }

    .poster-list .border-button {
        max-width: 200px;
        &::before{
            position: absolute;
            transition: 100ms;
            content: "See All";
            color: #08080800;
        }
    }

    .poster-list{
        transition: 200ms linear;
    }

    .poster-list-top-section,
    .carousel-wrapper,
    .carousel-scroll{
        transition: 100ms linear;
    }

    @media(max-width: 850px){
        #first-line-home{
            margin-top: 13px;
        }
        .search-input{
            max-width: 640px;

            input, button {
                margin: 0px 60px;
            }
        }
    }

    @media(max-width: 660px){

        .line.can-hide{
            display: none;
        }

        .poster-list{
            padding: 30px 0px 0px 0px;
            transition: 200ms linear;

            .poster-list-top-section{
                padding: 0px 54px;
            }

            .triangle-next-button{
                display: none;
            }

            .carousel-wrapper{
                position: relative;
                &::before, &::after{
                    content: "";
                    pointer-events: none;
                    z-index: 3;
                    position: absolute;
                    height: calc(100% - 30px);
                    width: 47px;
                    background: linear-gradient(
                        -90deg,#08080800 0%,#080808 72%
                    );
                }
                &::after{
                    right: 0;
                    background: linear-gradient(
                        90deg,#08080800 0%,#080808 72%
                    );
                }
            }

            .carousel-scroll{
                margin: 0px 10px;
                overflow-x: scroll;
                padding-bottom: 40px;
                &::-webkit-scrollbar { height: 6px; }
                &::-webkit-scrollbar-track { background: #262626; }
                &::-webkit-scrollbar-thumb { background: #555; }
                &::-webkit-scrollbar-thumb:hover { background: #888; }
            }
        }
    }

    @media(max-width: 600px){
        .poster-list .border-button{
            color: #08080800;
            max-width: 100px;
            &::before{
                color: #cccccc;
            }
        }
    }

    @media(max-width: 440px){
        .search-input button {
            color: #FFFFFF00;
            width: 36px;
            margin: 0px 30px;
        }
        .search-input:has(input:focus){
            button{ color: #FFFFFF00; }
        }

        .search-input{
            max-width: 640px;

            input, button {
                margin: 0px 24px;
            }
        }

        .poster-list .poster-list-top-section{
            padding: 0px 24px;
        }
    }
`
