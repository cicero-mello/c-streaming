import React, { FC, SVGProps } from "react"

export const TriangleSeeAll: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        className="triangle-see-all"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_409_124)">
            <path
                d="M4 2.50118L13.2362 10.5L4 18.4988V2.50118Z"
                stroke="#C2C2C2"
            />
            <path
                d="M10 2.50118L19.2362 10.5L10 18.4988V2.50118Z"
                stroke="#C2C2C2"
            />
        </g>
        <defs>
        <clipPath id="clip0_409_124">
            <rect
                width="21"
                height="21"
                fill="white"
            />
        </clipPath>
        </defs>
    </svg>
)
