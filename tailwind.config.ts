import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "18px",
                screens: {
                    xl: "1476px",
                },
            },
            fontFamily: {
                barlow: ["var(--barlow)", "sans-serif"],
                "barlow-condensed": ["var(--barlowCondensed)", "sans-serif"],
            },
            colors: {
                white: "#ffffff",
                yellow: "#FFA500",
                "bg-primary": "#141334",
                "bg-secondary": "#02021D",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
