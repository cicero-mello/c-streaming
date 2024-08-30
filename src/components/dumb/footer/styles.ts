import styled from "styled-components"

export const Component = styled.footer`
    display: flex;
    width: fit-content;
    align-self: flex-end;
    flex-direction: column;
    align-items: flex-end;
    margin: 22px 30px;

    .github-ico {
        path {
            fill: #676767;
            transition: 100ms linear;
        }
        margin-right: 5px;
    }

    .footer-info:first-child{
        margin-bottom: 10px;

        .footer-link {
            margin-bottom: 1px;
            &::before{
                width: 48px;
                margin-left: 10px;
            }
        }
    }
`

export const InfoLink = styled.a.attrs({
    className: "footer-info"
})`
    display: flex;
    align-items: center;
    opacity: 72%;
    font-size: 13px;
    text-decoration: none;
    cursor: pointer;

    .instagram-logo{
        width: 22px;
        filter: grayscale(1);
        margin-right: 4px;
        transition: 100ms linear;
    }

    &:hover, &:focus-within{
        opacity: 100%;
        .footer-link::before{
            background-color: white;
        }
        .instagram-logo{
            filter: grayscale(0);
        }

        .github-ico {
            path {
                fill: #f5f5f5;
            }
        }
    }
`

export const Text = styled.p.attrs({
    className: "footer-link"
})`
    position: relative;

    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #080808;
        bottom: 0;
        transition: 150ms ease-in-out;
    }
`
