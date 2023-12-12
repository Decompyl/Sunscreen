import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: colors.yellow,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: colors.neutral,
      },
      animation: {
        typewriter: 'typewriter 1s steps(5) forwards',
        caret: 'typewriter 1s steps(5) forwards, blink 0.75s steps(10,start) 2',
        rotateCw: '1.5s rotateCw 2s forwards',
        rotateCcw: '1.5s rotateCcw 2s forwards',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          'from, to': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        rotateCw: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(45deg)' },
        },
        rotateCcw: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-45deg)' },
        },
      }
    },
  },
  plugins: [starlightPlugin()],
};
