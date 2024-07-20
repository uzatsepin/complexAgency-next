import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                foreground: "hsl(var(--foreground))",
                background: "hsl(var(--background))"
            },
            transitionTimingFunction: {
                "minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)"
            },
            keyframes: {
                flipWords: {
                    "10%": { transform: "translateY(-112%)" },
                    "25%": { transform: "translateY(-100%)" },
                    "35%": { transform: "translateY(-212%)" },
                    "50%": { transform: "translateY(-200%)" },
                    "60%": { transform: "translateY(-312%)" },
                    "75%": { transform: "translateY(-300%)" },
                    "85%": { transform: "translateY(-412%)" },
                    "100%": { transform: "translateY(-400%)" }
                },
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))"
                    }
                }
            },
            animation: {
                flipWords: "flipWords 8s infinite",
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite"
            },
            backgroundImage: {
                "border-bottom": "linear-gradient(90deg, rgba(42, 188, 158, 0) 0%, #2ABC9E 48.65%, rgba(42, 188, 158, 0) 100%)",
                wavesBg: "url('/wave-whyUs.svg')",
                worksBg: "url('/works-waves.svg')",
                activeCard: "linear-gradient(139.56deg, #527791 10.06%, #325597 53.72%, #193895 88%)",
                bgFooter: "linear-gradient(91.69deg, #313134 -11.81%, #222224 23.9%, #12473C 60.63%, #292929 110.44%)",
            },
            boxShadow: {
                shadowInput: "0px 0px 38px rgba(46, 236, 197, 0.2)"
            }
        }
    },
    plugins: [require("tailwindcss-animate"), addVariablesForColors]
};

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

    addBase({
        ":root": newVars
    });
}

export default config;
