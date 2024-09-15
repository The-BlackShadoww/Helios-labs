import { SVGProps } from "react";

const Rectangle = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="1120"
            height="294"
            viewBox="0 0 1120 294"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="z-0"
            {...props}
        >
            <mask id="path-1-inside-1_9_88" fill="white">
                <path d="M0 35H1120V294H0V35Z" />
            </mask>
            <path
                d="M0 35V33H-2V35H0ZM1120 35H1122V33H1120V35ZM0 37H1120V33H0V37ZM1118 35V294H1122V35H1118ZM2 294V35H-2V294H2Z"
                fill="#FFA500"
                mask="url(#path-1-inside-1_9_88)"
            />
            <rect x="359" width="402" height="70" fill="#141334" />
        </svg>
    );
};

export default Rectangle;
