import { SVGProps } from "react";

const Ellipse60 = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="30" cy="30" r="30" fill="#FFA500" />
        </svg>
    );
};

export default Ellipse60;
