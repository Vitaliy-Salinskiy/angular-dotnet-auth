/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "blackish-green": "#112211",
        "mint-green": "#8DD3BB",
        "light-green": "#CDEAE1",
        "light-grey": "#79747E",
      },
    },
  },
  plugins: [],
};
