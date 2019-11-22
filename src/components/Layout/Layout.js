import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "src/components/Header/Header"
import "./layout.css"
import { ThemeProvider } from "@material-ui/styles"
import theme from "src/constants/roxymillerTheme"

const styles = theme => ({
  page: {
    background: "#f4f4f4",
    padding: "0 50px",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: "0 20px",
    },
  },
  container: {
    margin: `0 auto`,
    maxWidth: 1200,
    paddingTop: 50,
    boxSizing: "border-box",
    width: "100%",
    height: "fit-content",
    gridTemplateColumns: "repeat(12, 1fr)",
    display: "grid",
  },
  main: {
    gridTemplateColumns: "repeat(12, 1fr)",
    display: "grid",
    gridColumn: "1/13",
  },
})

const Layout = ({ children, classes }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <ThemeProvider theme={theme}>
          <Header />
          <main className={classes.main}>{children}</main>
        </ThemeProvider>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Layout)
