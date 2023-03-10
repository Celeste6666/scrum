/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require("tailwind-scrollbar")
  ],
  theme: {
    extend: {
      // 自定義的主題區
      fontFamily: {
        "sans": ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: "4rem",//64
        h2: "2.5rem",//40
        h3: "2rem",// 32
        h4: " 1.75rem",//28
        h5: "1.5rem",//24
        h6: "1.25rem",//20
        body: "1rem",//16
        button: "1rem", //16
        caption: "0.875rem" //16
      },
      colors: {
        primary: "#2684FF",
        "primary-hover": "#0053C0",
        "primary-active": "#23385E",
        "primary-disabled": "#AAAAAA",
        "select-error": "#FF0000",
        "select-active": "#E0EEFF",
        "burger-meat": "#922020",
        "burger-meat-active": "#611616",
        "burger-cheese": "#FFA31A",
        "burger-cheese-active": "#C77F13",
        "burger-lettuce": "#69C30E",
        "burger-lettuce-active": "#4E900B",
        "burger-tomato": "#F33838",
        "burger-tomato-active": "#B42A2A",
        "role-dt": "#589EFA",
        "role-sm": "#FF7B7B",
        "role-dt2": "#F07319",
        "card": "rgba(246,246,246, 0.65)"
      },
      boxShadow: {
        "button": "0px 4px 12px #2684FF",
        "card-body": "0px 0px 1px #0053C0 ,2px 2px 15px rgba(0, 0, 0, 0.25)",
        "select": "0px 4px 0px #23385E;"
      },
      backgroundImage: {
        "base-pattern-A": "url('/src/assets/basePattern1.png')",
        "base-pattern-B": "url('/src/assets/basePattern2.png')",
        "base-pattern-C": "url('/src/assets/basePattern3.png')",
        "burger-top": "url('/src/assets/food/burger-top.png')",
        "burger-bottom": "url('/src/assets/food/burger-bottom.png')",
      },
      flex: {
        "auto-2": "1 0 auto"
      }
    },
  },
  plugins: [],
}
