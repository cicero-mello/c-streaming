import React, { FunctionComponent, HtmlHTMLAttributes } from "react"

export const UserIco: FunctionComponent<HtmlHTMLAttributes<SVGAElement>> = () => (
<svg className="user-ico" width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_308_7)">
        <circle className="circle" cx="18.5" cy="11.5" r="9" stroke="white"/>
        <path className="triangle" d="M3.53646 30L18.5 11.7876L33.4635 30H3.53646Z" stroke="white"/>
    </g>
    <defs>
        <clipPath id="clip0_308_7">
            <rect width="37" height="33" fill="white"/>
        </clipPath>
    </defs>
</svg>
)
