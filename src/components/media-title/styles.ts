import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "media-title"
})`
    display: flex;
    flex-direction: column;
`

export const MediaTitle = styled.h1.attrs((props: any) => ({
    className: "title",
    $title: props.$title
}))<{ $title: string }>`
    font-weight: normal;
    font-size: 37px;
    margin-left: 9px;

    &::before {
        content: "${({ $title }) => $title}";
    }
`

export const MediaEpisodeName = styled.p.attrs((props: any) => ({
    className: "media-episode-name",
    $episodeName: props?.$episodeName ?? ""
}))< { $episodeName?: string } >`
    margin-left: 9px;
    color: #8D8D8D;
    font-size: 23px;
    max-width: 573px;

    &::before{
        content: "${({ $episodeName }) => $episodeName}";
    }
`
