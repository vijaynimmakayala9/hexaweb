module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          leaf: "#A8D5BA",
          forest: "#174C3C",
          mint: "#DDF5E5",
          paper: "#F8FBF8",
        },
        ink: "#1F2937",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-display)"],
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23,76,60,.09)",
        lift: "0 24px 60px rgba(18,61,49,.14)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "fade-up": "fadeUp .7s ease both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(22px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
};
