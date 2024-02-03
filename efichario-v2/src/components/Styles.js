import { extendTheme } from "@chakra-ui/react";

const overrides = {
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    red22: {
      50: 'green',
      // ...
      800: 'green',
    },
    brand: {
      100: "gray.200",
      // ...
      900: "red",
    },
  },
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
          orange: {
            bg: "orange.500",
            border: "1px solid red",
            _hover: {
              bg:"orange.50",
            },
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
          color: 'gray.900'
        },
        sizes: {
          small: {
            fontSize: "20px",
          },
          medium: { fontSize: "25px" },
          large: { fontSize: "30px" },
        },
      },
      Text: {
        baseStyle : {
          color: 'gray.900'
        },
      },
    },
  };

  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

  const theme = extendTheme(overrides, config);
  export default theme;