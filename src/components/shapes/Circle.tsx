import { SVGProps } from "react";

const Circle = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="1244"
            height="1304"
            viewBox="0 0 1244 1304"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g opacity="0.18" filter="url(#filter0_f_10_166)">
                <circle cx="652" cy="652" r="352" fill="#FFA500" />
            </g>
            <defs>
                <filter
                    id="filter0_f_10_166"
                    x="0"
                    y="0"
                    width="1304"
                    height="1304"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="150"
                        result="effect1_foregroundBlur_10_166"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default Circle;
