/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        primary: {
          purple: "hsl(259, 100%, 65%)",
          "light-red": "hsl(0, 100%, 67%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          "off-white": "hsl(0, 0%, 94%)",
          "light-grey": "hsl(0, 0%, 86%)",
          "smokey-grey": "hsl(0, 1%, 44%)",
          "off-black": "hsl(0, 0%, 8%)",
        },
      },
      fontSize: {
        "body-input": "32px",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      keyframes: {
        rainbow: {
          "0%, 100%": { color: "#ff0000" },
          "17%": { color: "#ffa500" },
          "34%": { color: "#ffff00" },
          "51%": { color: "#ff0000" },
          "68%": { color: "#0000ff" },
          "85%": { color: "#4b0082" },
        },
        rainbowBg: {
          "0%, 100%": { backgroundColor: "#4b0082" },
          "17%": { backgroundColor: "#0000ff" },
          "34%": { backgroundColor: "#ffff00" },
          "51%": { backgroundColor: "#008000" },
          "68%": { backgroundColor: "#ffa500" },
          "85%": { backgroundColor: "#ff0000" },
        },
        fall: {
          "0%": { transform: "translate(0%,-150%) skewX(0deg)" },
          "50%": { transform: "translate(0%,0%) skewX(-10deg)" },
          "100%": { transform: "translate(0%,150%) skewX(0deg)" },
        },
        combinedAnimation: {
          "0%, 100%": { color: "#DAF7A6", transform: "translateY(-55%)" },
          "17%": { color: "#FFC300" },
          "34%": { color: "#FF5733" },
          "51%": { color: "#C70039", transform: "translateY(0%)" },
          "68%": { color: "#900C3F" },
          "85%": { color: "#B2BEB5", transform: "translateY(70%)" },
        },
        combinedAnimationBg: {
          "0%, 100%": {
            backgroundColor: "#353935",
            transform: "translateY(-100%)",
          },
          "17%": {
            backgroundColor: "#36454F",
          },
          "34%": {
            backgroundColor: "#023020",
          },
          "51%": {
            backgroundColor: "#301934",
            transform: "translateY(0%)",
          },
          "68%": {
            backgroundColor: "#343434",
          },
          "85%": {
            backgroundColor: "#28282B",
            transform: "translateY(100%)",
          },
        },
      },
      animation: {
        "rainbow-color": "rainbow 3s ease-in-out infinite",
        fall: "fall 3s ease infinite",
        combined: "combinedAnimation 3s ease-in-out infinite",
        combinedBg: "combinedAnimationBg 3s ease-in-out infinite",
      },
      boxShadow: {
        "button-default": "8px 8px 16px rgba(0, 0, 0, 0.3)",
        "button-hover": "4px 4px 8px rgba(0, 0, 0, 0.2)",
      },
      transitionProperty: {
        shadow: "shadow",
      },
      transitionDuration: {
        200: "200ms",
      },
    },
  },
  plugins: [],
};
