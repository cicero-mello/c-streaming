import React, { SVGProps, forwardRef } from "react"

export const TrianglePong = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
    <svg
        className="triangle-pong"
        width="47"
        height="37"
        viewBox="0 0 47 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
    >
        <g clipPath="url(#clip0_779_11)">
            <path
                d="M2.02852 34.9785L23.0494 2.07635L44.0718 34.9785L2.02852 34.9785Z"
                stroke="white"
                strokeWidth="2.168"
            />
        </g>
        <defs>
        <clipPath id="clip0_779_11">
            <rect
                width="46"
                height="36"
                fill="white"
                transform="translate(0.0507812 0.0625)"
            />
        </clipPath>
        </defs>
    </svg>
))
