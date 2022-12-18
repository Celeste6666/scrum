/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 自定義的主題區
      fontSize: {
        h1: "4rem",
        h2: "2.5rem",
        h3: "2rem",
        h4: " 1.75rem",
        h5: "1.5rem",
        h6: "1.25rem",
        body: "1.25rem",
        button: "1.25rem",
      },
      color: {
        primary: "#23385E",
        "primary-hover": "#0053C0",
        "primary-active": "#23385E",
        "primary-disabled": "#AAAAAA",
        "select-error": "#FF0000",
        "select-hover": "#E0EEFF",
        "burger-meat": "#922020",
        "burger-meat-active": "#611616",
        "burger-cheese": "#FFA31A",
        "burger-cheese-active": "#C77F13",
        "burger-lettuce": "#69C30E",
        "burger-lettuce-active": "#4E900B",
        "burger-tomato": "#F33838",
        "burger-tomato-active": "#B42A2A",
        "role-po": "#589EFA",
        "role-sm": "#FF7B7B",
        "role-dt": "#F07319"
      },
      dropShadow: {
        '3xl': '0px 4px 0px #2684FF;',
      }
    },
  },
  plugins: [],
}
