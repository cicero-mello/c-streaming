import { PageMediaProps } from "./types"
import { IGatsbyImageData } from "gatsby-plugin-image"
import * as media from "../../shared/media"

export const createPageMedia = (
    data: object, mediaID?: string
): PageMediaProps | undefined => {
    const allBannerMediasFromQuery = media.getBannerGatsbyImages(data)
    if(allBannerMediasFromQuery.length <= 0) return

    const fakeVideoMideaFromMock = media.getMediaById(mediaID ?? "")
    const mediaToFakeVideo = allBannerMediasFromQuery.find(
        media => media.name === fakeVideoMideaFromMock?.imageName
    )

    const suggestionMedias = media.createSuggestionMedias(
        allBannerMediasFromQuery, fakeVideoMideaFromMock?.id ?? ""
    )

    if(!mediaToFakeVideo || !fakeVideoMideaFromMock) return

    return {
        fakeVideo: {
            thumbImage: mediaToFakeVideo.childImageSharp.gatsbyImageData as IGatsbyImageData,
            imageName: fakeVideoMideaFromMock.imageName
        },
        mediaTitle: {
            title: fakeVideoMideaFromMock.name,
            mediaId: fakeVideoMideaFromMock.id
        },
        sinopsys: fakeVideoMideaFromMock.synopsis,
        suggestionMedias: suggestionMedias
    }
}
