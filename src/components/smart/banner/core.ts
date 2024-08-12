import { Media } from "../../../stores"
import { BannerItem } from "./item/types"

const choicedMediaNamesToBanner: string[] = [
    "Neon Genesis Evangelion",
    "Pulp Fiction",
    "Cowboy Bebop",
    "The Office",
    "Mr. Pickles",
    "It",
    "Berserk (1997)",
    "The Evil Dead (1981)",
    "Frankweenie",
    "Smiling Friends",
    "The Nightmare Before Christmas",
    "Kingdom"
]

export const createBannerItems = (
    medias: Media[]
): BannerItem[] => {
    const choicedMedias = medias.filter(
        media => !!choicedMediaNamesToBanner.find(
            name => name === media.name
        )
    )

    const bannerItems = choicedMedias.map(media => {
        if(!media?.bannerImage) throw new Error(
            "Banner image does not exist!"
        )
        return {
            id: media.id,
            image: media.bannerImage,
            name: media.name,
            synopsis: media.synopsis,
            type: media.type
        }
    })

    return bannerItems
}
