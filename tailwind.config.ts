import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-space-grotesk)", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
            },
            colors: {
                'neo-yellow': '#FBFF48',
                'neo-pink': '#FF70A6',
                'neo-blue': '#3B82F6',
                'neo-green': '#33FF57',
                'neo-purple': '#A855F7',
                'neo-black': '#121212',
                'neo-white': '#FFFDF5',
            },
            boxShadow: {
                'hard': '4px 4px 0px 0px #000',
                'hard-lg': '8px 8px 0px 0px #000',
            },
            animation: {
                scroll: 'scroll 40s linear infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
};
export default config;