/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#3A4256",
          accent: "#19D3AE",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "cupcake",    
    ],
  },
  plugins: [require("daisyui")],
}
