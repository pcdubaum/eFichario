import { extendTheme } from "@chakra-ui/react";

const overrides = {
    components: {
      Divider:{
        baseStyle: {
          borderWidth: '2px', // change the width of the border
          borderStyle: "solid", // change the style of the border
          borderRadius: 10, // set border radius to 10
          borderColor: "white",
        },
      },
      Button: {
        baseStyle: {
          borderRadius: "5px",
          spacing: "10px",
        },
        sizes: {
          small: {
            px: 5,
            h: "50px",
            fontSize: "20px",
          },
          medium: {
            px: 7,
            h: "60px",
            fontSize: "25px",
          },
          large: {
            px: 8,
            h: "70px",
            fontSize: "30px",
            borderRadius: "10px",
          },
        },
        variants: {
          primary: {
            bg: "primary",
            color: "#fff",
          },
          secondary: {
            bg: "secondary",
            color: "#fff",
          },
          ghost: {
            bg: "transparent",
            border: "1px solid red",
          },
          primaryGhost: {
            bg: "transparent",
            border: "1px solid",
            borderColor: "primary",
          },
          secondaryGhost: {
            bg: "transparent",
            border: "1px solid",
            borderColor: "secondary",
            _hover: {
              color: "white",
              bg: "#718096",
            },
          },
          errorGhost: {
            bg: "transparent",
            border: "1px solid",
            borderColor: "secondary",
            _hover: {
              color: "white",
              bg: "red",
            },
          },
        },
      },
  
      Heading: {
        baseStyle: {
          fontFamily: "Inter",
          fontWeight: "600",
        },
        sizes: {
          small: {
            fontSize: "20px",
          },
          medium: { fontSize: "25px" },
          large: { fontSize: "30px" },
        },
      },
    },
  };

  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }

  const theme = extendTheme(overrides, config);
  export default theme;