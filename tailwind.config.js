/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "2560px",
    },
    fontFamily: {
      sans: "Manrope, sans-serif",
    },
    extend: {
      boxShadow: {
        full: "0px 0px 32px 0px rgba(82,255,168,0.75);",
      },
      fontSize: {
        quote: "28px",
      },
      colors: {
        primary: {
          light: {
            cyan: "hsl(193, 38%, 86%)",
          },
          neon: {
            green: "hsl(150, 100%, 66%)",
          },
        },
        neutral: {
          grayish: {
            blue: "hsl(217, 19%, 38%)",
          },
          dark: {
            grayish: {
              blue: "hsl(217, 19%, 24%)",
            },
            blue: "hsl(218, 23%, 16%)",
          },
        },
      },
    },
  },
  plugins: [],
};
