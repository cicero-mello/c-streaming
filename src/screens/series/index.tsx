import React, { FunctionComponent, useEffect } from "react"
import { type PageProps } from "gatsby"
import { useNavigation } from "../../hooks"

export const Series: FunctionComponent<PageProps> = () => {
    const { showScreen } = useNavigation()

    useEffect(() => { showScreen() }, [])

    return (
        <div>
            Serie or Anime screen
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus quisquam mollitia sint illo, necessitatibus nam molestias quidem quis? Deserunt dolorum expedita alias ab pariatur aliquid hic laudantium ex repudiandae.
        </div>
    )
}
