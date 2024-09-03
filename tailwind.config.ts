import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          "0%": { transform: "scaleX(0)", visibility: "visible" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.3s ease-in-out forwards",
      },
      textDecoration: ["hover"],
    },
  },
  plugins: [
    function ({ addComponents }: { addComponents: any }) {
      addComponents({
        ".nav-link": {
          position: "relative",
          paddingBottom: "4px",
          color: "#000",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "1px",
            bottom: "0",
            left: "0",
            backgroundColor: "#3b82f6", // Blue color
            visibility: "hidden",
            transform: "scaleX(0)",
            transition: "all 0.3s ease-in-out",
          },
          "&:hover::before": {
            visibility: "visible",
            transform: "scaleX(1)",
          },
        },
      });
    },
  ],
};
export default config;
