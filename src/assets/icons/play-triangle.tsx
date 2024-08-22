import React, { FC, SVGProps } from "react"

export const PlayTriangle: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        className="play-triangle"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M1.35294 1.68468L42.0693 21.7353L1.35294 41.7859V1.68468Z"
            stroke="#F8F8F8"
            strokeWidth="1.70588"
        />
    </svg>
)
