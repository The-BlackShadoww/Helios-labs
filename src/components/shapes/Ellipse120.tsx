import { SVGProps } from "react";

const Ellipse120 = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="60" cy="60" r="60" fill="#FFA500" />
        </svg>
    );
};

export default Ellipse120;
