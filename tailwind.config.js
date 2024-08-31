/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
   ],
  theme: {
    fontFamily: {
      "ssp": ['"SourceSansPro"'],
      "ssp-bold": ['"SourceSansProB"'],
      "ssp-semibold": ['"SourceSansProSB"'],
    },
    "screens": {
      "xs": "0px",
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1280px",
    },
    extend: {
    },
  },
  plugins: [],
}

