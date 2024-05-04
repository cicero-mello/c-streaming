import React, { FunctionComponent, useEffect, useState } from "react"
import { type PageProps } from "gatsby"
import { PageLoader } from "../../components"

export const User: FunctionComponent<PageProps> = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 10)
    }, [])

  return (
    <div>
        <PageLoader $loading={loading}/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, officia! Nesciunt nulla cupiditate laboriosam atque, commodi voluptatibus. Nemo repellat rem veniam cumque eos, sapiente itaque, facilis voluptate magni rerum omnis.
    </div>
  )
}
