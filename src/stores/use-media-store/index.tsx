import { create } from "zustand"
import { MediaStore, Media, ImageInfo } from "./types"
import { MEDIAS_LIST } from "./data"
import { getImage } from "gatsby-plugin-image"

export const useMediaStore = create<MediaStore>((set) => ({
    medias: [],
    updateMedias: (pageData: any) => set(
        (state) => ({
            medias: getNewMedias(pageData, state.medias)
        })
    )
}))

const getNewMedias = (
    pageData: any, oldMedias: Media[]
): Media[] => {
    if (!pageData) return oldMedias

    let newMedias = [...oldMedias]
    newMedias = updateMediaWithImages(pageData, "poster", newMedias)
    newMedias = updateMediaWithImages(pageData, "banner", newMedias)

    return newMedias
}

const updateMediaWithImages = (
    pageData: any, imageType: "poster" | "banner", oldMedias: Media[]
): Media[] => {
    if(!pageData?.[imageType]?.edges) return oldMedias

    const imagesInfo: ImageInfo[] = pageData[imageType].edges.map(
        (object: {node: any}) => ({
            id: object.node.name,
            childImageSharp: object.node.childImageSharp
        })
    )

    const medias = imagesInfo.map(imageInfo => {
        const oldMedia = oldMedias.find(media => media.id === imageInfo.id)
        if(!!oldMedia) return {
            ...oldMedia, [imageType + "Image"]: getImage(imageInfo.childImageSharp)
        }

        const info = MEDIAS_LIST.find(media => media.id === imageInfo.id)
        if(!info) return undefined
        return {
            ...info,
            [imageType + "Image"]: getImage(imageInfo.childImageSharp)
        }
    })

    return medias.filter(media => media != undefined)
}
