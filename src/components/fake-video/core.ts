const HORIZONTAL_SPEED = 4
const VERTICAL_SPEED = 3

const triangleColors: string[] = [
    "#923F3F",
    "#48923F",
    "#903F92",
    "#928B3F",
    "#3F9263",
    "#3F8B92"
]
let currentColorIndex = 0

let boxTop = 80
let boxLeft = 100
let horizontalAnimationId: number
let verticalAnimationId: number

export const startPongAnimation = (
    trianglePong: SVGSVGElement,
    containerPong: HTMLDivElement
) => {
    const boxHitsContainerOn = (direction: "top" | "bottom" | "left" | "right") => {
        const containerRect = containerPong.getBoundingClientRect()
        const boxRect = trianglePong.getBoundingClientRect()

        const boxTop = boxRect.top - containerRect.top
        const boxLeft = boxRect.left - containerRect.left
        const boxBottom = boxTop + boxRect.height
        const boxRight = boxLeft + boxRect.width

        if(direction === "top") return boxTop <= 0
        if(direction === "bottom") return boxBottom >= containerRect.height
        if(direction === "left") return boxLeft <= 0
        if(direction === "right") return boxRight >= containerRect.width
    }

    const changeColor = () => {
        if(!trianglePong.firstChild?.firstChild) return
        const pathElement: any = trianglePong.firstChild?.firstChild

        currentColorIndex++
        if(currentColorIndex >= triangleColors.length) currentColorIndex = 0
        pathElement.style.stroke = triangleColors[currentColorIndex]
    }

    const moveLeft = () => {
        boxLeft -= window.innerWidth > 500 ? HORIZONTAL_SPEED : HORIZONTAL_SPEED/2
        trianglePong.style.left = boxLeft + "px"

        if(boxHitsContainerOn("left")){
            changeColor()
            horizontalAnimationId = requestAnimationFrame(moveRight)
            return
        }
        horizontalAnimationId = requestAnimationFrame(moveLeft)
    }

    const moveRight = () => {
        boxLeft += window.innerWidth > 400 ? HORIZONTAL_SPEED : HORIZONTAL_SPEED/2
        trianglePong.style.left = boxLeft + "px"

        if(boxHitsContainerOn("right")){
            changeColor()
            horizontalAnimationId = requestAnimationFrame(moveLeft)
            return
        }
        horizontalAnimationId = requestAnimationFrame(moveRight)
    }

    const moveUp = () => {
        boxTop -= window.innerWidth > 400 ? VERTICAL_SPEED :  VERTICAL_SPEED/2
        trianglePong.style.top = boxTop + "px"

        if(boxHitsContainerOn("top")){
            changeColor()
            verticalAnimationId = requestAnimationFrame(moveDown)
            return
        }
        verticalAnimationId = requestAnimationFrame(moveUp)
    }

    const moveDown = () => {
        boxTop += window.innerWidth > 400 ? VERTICAL_SPEED :  VERTICAL_SPEED/2
        trianglePong.style.top = boxTop + "px"

        if(boxHitsContainerOn("bottom")){
            changeColor()
            verticalAnimationId = requestAnimationFrame(moveUp)
            return
        }
        verticalAnimationId = requestAnimationFrame(moveDown)
    }

    trianglePong.style.opacity = "1"
    horizontalAnimationId = requestAnimationFrame(moveRight)
    verticalAnimationId = requestAnimationFrame(moveDown)
}

export const finishPongAnimation = () => {
    if(!horizontalAnimationId || !verticalAnimationId) return
    cancelAnimationFrame(horizontalAnimationId)
    cancelAnimationFrame(verticalAnimationId)
}
