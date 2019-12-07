import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  primary: {
    main: "#2196f3",
    light: "#6ec6ff",
    dark: "#0069c0",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#FFF",
  },
  buttons: {
    blackMedium: {
      maxWidth: 200,
      height: 56,
      fontSize: "10px",
      background: "black",
      color: "white",
      "&:hover": {
        background: "#444",
      },
    },
  },
  status: {
    danger: "orange",
  },
  overrides: {
    MuiTypography: {
      colorSecondary: {
        color: "#fff",
      },
      h1: {
        fontFamily: "Open Sans",
        fontSize: 40,
        fontWeight: 700,
        lineHeight: "46px",
      },
      h2: {
        fontFamily: "Open Sans",
        fontSize: 48,
      },
      colorPrimary: {
        color: "#000",
      },
    },
  },
})

export default theme
