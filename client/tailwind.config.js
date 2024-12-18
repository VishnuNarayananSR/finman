import { nextui } from "@nextui-org/react";

const lightPrimaryColors = {
  50: "#fafafa",
  100: "#f4f4f5",
  200: "#e4e4e7",
  300: "#b0b0b0",
  400: "#a1a1aa",
  500: "#71717a",
  600: "#52525b",
  700: "#3f3f46",
  800: "#27272a",
  900: "#18181b",
  950: "#09090b",
  DEFAULT: "#09090b",
  foreground: "#fafafa",
};

const darkPrimaryColors = {
  50: "#09090b",
  100: "#18181b",
  200: "#27272a",
  300: "#3f3f46",
  400: "#52525b",
  500: "#71717a",
  600: "#a1a1aa",
  700: "#b0b0b0",
  800: "#e4e4e7",
  900: "#f4f4f5",
  950: "#fafafa",
  DEFAULT: "#fafafa",
  foreground: "#09090b",
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: lightPrimaryColors,
          },
        },
        dark: {
          colors: {
            primary: darkPrimaryColors,
          },
        },
      },
    }),
  ],
};
