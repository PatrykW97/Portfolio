import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        publicsans: ["Public Sans", ...defaultTheme.fontFamily.sans],
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        btext: "1.25rem", // 20px
        h1: "3.11rem",
        h2: "2.59rem",
        h3: "2.16rem",
        h4: "1.8rem",
        h5: "1.5rem",
        p: "1.25rem",
        h6: "1.04rem",
        kobuko: "0.86rem",
      },
      lineHeight: {
        heading: "115%",
        paragraph: "160%",
      },
      letterSpacing: {
        tighter: "-0.011em",
      },
      scale: {
        "120": "1.2",
      },
      colors: {
        akcent: "#F39433",
        akcent2: {
          '400': '#DD6B9C',
          '900': '#773A54',
        },
        "black-text": "#0C0906",
        "white-text": "#EEE9E4",
        dark: {
          primary: '#0C0906', // Kolor główny dla ciemnego motywu
          secondary: '#1a1a1a' // Kolor drugorzędny dla ciemnego motywu
        }
      },
      backgroundImage: (theme) => ({
        'gradient-primary': 'linear-gradient(to right, #F39433, #DD6B9C)',
      }),
      boxShadow: {
        landing: '-4px 0px 4px 0px rgba(243, 148, 51, 0.28), 4px 0px 4px 0px rgba(243, 148, 51, 0.28), 0px 4px 5px 0px rgba(243, 148, 51, 0.28)',
        about:  '0px 4px 4px 0px rgba(243, 148, 51, 0.28), 4px 0px 4px 0px rgba(243, 148, 51, 0.28), -4px 0px 4px 0px rgba(243, 148, 51, 0.28)',
      },
    },
  },
};