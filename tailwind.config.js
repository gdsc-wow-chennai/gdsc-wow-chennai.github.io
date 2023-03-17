module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        portamento: ["Changa"],
      },
      transitionDuration: "250ms",
      colors: {
        "light-green": "#109D5866",
        "light-blue": "#4286F566",
        "deep-red": "#E6453C",
        primary: {
          bg: "#ffffff",
          text: "#000000",
          btn: "#4285F4",
        },
        secondary: {
          bg: "#f5f5f5",
          text: "#202124",
          btn: "#ffffff",
        },
        tertiary: {
          text: "#4c4c4c",
        },
        hoverState: "#e9eaff",
        focusedState: "#c2c3f7",
        blue: {
          700: "#4285F4",
          600: "#2196F3",
          500: "#42A5F5",
          400: "#64B5F6",
          300: "#90CAF9",
          200: "#BBDEFB",
          100: "#E3F2FD",
        },
        red: {
          700: "#EA4335",
          600: "#F44336",
          500: "#EF5350",
          400: "#E57373",
          300: "#EF9A9A",
          200: "#FFCDD2",
          100: "#FFEBEE",
        },
        yellow: {
          700: "#FBBC04",
          600: "#FFC107",
          500: "#FFCA28",
          400: "#FFD54F",
          300: "#FFE082",
          200: "#FFECB3",
          100: "#FFF8E1",
        },
        green: {
          700: "#34A853",
          600: "#4CAF50",
          500: "#66BB6A",
          400: "#81C784",
          300: "#A5D6A7",
          200: "#C8E6C9",
          100: "#E8F5E9",
        },
      },
    },
  },
  plugins: [],
};
