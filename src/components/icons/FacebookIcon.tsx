import { SVGProps } from "react";

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="24" cy="24" r="23.5" stroke="white" />
            <g clip-path="url(#clip0_1_107)">
                <path
                    d="M20.8152 36C22.4698 35.9944 24.13 35.9325 25.7846 35.8313V24.1378H29.0827L29.4824 19.9363H25.7901V17.2702C25.7901 16.6796 26.2621 16.2015 26.8451 16.2015H29.488V12H25.3126C22.8196 12 20.8152 14.0361 20.8152 16.5446V19.9363H18.4V24.1378H20.8152V36Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_107">
                    <rect
                        width="11.0769"
                        height="24"
                        fill="white"
                        transform="translate(18.4 12)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default FacebookIcon;
