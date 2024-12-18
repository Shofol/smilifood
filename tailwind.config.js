/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "br-primary": "#68B8BE",
        "br-secondary": "#456F72",
        "br-graybg": "#F0F0F3;",
        "br-dark": "#3B3E3A",
        "br-dgreen": "#5B8388",
        "br-mgreen": "#A6C9CC",
        "br-mgreen-2": "#53878B",
        "br-lgreen-2": "#C2FAFF",
        "br-ldark": "#072B38",
        "br-lgreen": "#93A093",
        "br-ylw-light": "#CF8A28",
        "br-ylw-medium": "#CC7A00",
        "br-ylw-dark": "#864F00",
        "br-lgray": "#F9F9FA;",
        "br-gray": "#E6E8EA",
      },
      display: ["group-hover"],
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};

// "br-primary": "#FFCA7A",
// "br-secondary": "#FFE7C3",
// "br-light": "#FFF9E9",
// "br-bg": "#FCF2E3",
// "br-graybg": "#EFEEE7",
// "br-dark": "#3B3E3A",
// "br-ldark": "#072B38",
// "br-lgreen": "#93A093",
// "br-ylw-light": "#CF8A28",
// "br-ylw-medium": "#CC7A00",
// "br-ylw-dark": "#864F00",
// "br-lgray": "#D9D9D9;",
// "br-gray": "#E6E8EA",
