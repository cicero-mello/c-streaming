import { IGatsbyImageData } from "gatsby-plugin-image"

export interface FakeVideoProps {
    thumbImage: IGatsbyImageData
    imageName: string
    onClickWatch?: () => void
}

/* TODO
    colocar ele no useNavigation junto de uma
    mensagem de loading especifica para carregar
    durante o primeiro acesso, fazer o usuario aguardar,
    e evitar aquele problema futuro lá.
*/
