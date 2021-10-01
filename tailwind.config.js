module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      white: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
