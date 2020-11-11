module.exports = {
  purge: {
    enabled: true,
    layers: ["components", "utilities"],
    content: [
      "./components/*.js",
      "./pages/*.js",
    ],
  },
  theme: {
    maxWidth: {
      mid: "1240px",
      wide: "1380px",
    },
    width: {
      "168px": "168px",
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9],
    },

    extend: {
      backgroundColor: {
        navy: "#141928",
        navyAlt: "#1b2e5a",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        carnation: "#f25b5d",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      opacity: {
        40: 0.4,
      },
    },
  },
  variants: {
    aspectRatio: ["responsive"],
  },
  plugins: [
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
  ],
};
