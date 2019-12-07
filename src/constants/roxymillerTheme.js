const createMuiTheme = require('@material-ui/core/styles').createMuiTheme

let styles = {
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
  palette: {
    lightGray: "#8594AC",
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
      h6: {
        fontWeight: 300,
      },
      colorPrimary: {
        color: "#000",
      },
    },
  },
})

module.exports = createMuiTheme(styles)
