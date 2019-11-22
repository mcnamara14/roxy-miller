import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  primary: {
    main: "#2196f3",
    light: "#6ec6ff",
    dark: "#0069c0",
    contrastText: "#ffffff",
  },
  status: {
    danger: "orange",
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: "Open Sans",
        fontSize: 32,
        fontWeight: 700,
        lineHeight: "46px",
      },
      colorPrimary: {
        color: "#000",
      },
    },
  },
})

export default theme
