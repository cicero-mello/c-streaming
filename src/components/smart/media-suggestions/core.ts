import { SuggestionMedia } from "./types"
import { shuffle } from "@utils"
import { Media } from "@stores"

export const createSuggestionMedias = (
    medias: Media[], idException: string
): SuggestionMedia[] => shuffle(medias.map(media => {
    if(!media?.bannerImage || media.id === idException){
        return undefined
    }

    return {
        bannerImage: media.bannerImage,
        id: media.id,
        mediaName: media.name,
        type: media.type
    }
})).filter(media => media != undefined)
