import { getImage } from "gatsby-plugin-image"
import { BannerMedia } from "../../components/banner/types"
import { QueryGatsbyImages } from "./type"

export const getRandomMediaToBanner = (bannerGastbyImages: QueryGatsbyImages[]):BannerMedia[] => {
    const image = getImage(bannerGastbyImages.find(img => img.name === "evangelion")?.childImageSharp || bannerGastbyImages[0].childImageSharp)

    return [{
        name: "Neon Genesis Evangelion",
        id: "f35eed00f4c1feb97103cbbac86c5a6b",
        type: "anime",
        image: image,
        watchLater: false,
        synopsis: `A renowned anime series that blends mecha action with psychological drama.
        Set in a post-apocalyptic world, it follows teenager Shinji Ikari, who is recruited by
        his estranged father to pilot a giant bio-machine called an "Evangelion" to defend Tokyo-3
        from monstrous beings known as Angels.`,
    }]
}
